const driverData = require('../../models/Employeeemanagement_model/driver_model');

//Add Driver
const driverRegistration = (req, res) => {
  const { driverName, driverNIC, driverId, contactNumber } = req.body;
  if (!driverName || !driverNIC || !driverId || !contactNumber) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  driverData.create({
      driverName: req.body.driverName,
      driverNIC: req.body.driverNIC,
      driverId: req.body.driverId,
      contactNumber: req.body.contactNumber
    })
    .then((driverData) => {
      res.status(200).send(driverData);
    })
    .catch((err) => {
      res
        .send(500)
        .send({ status: "Driver Registration failed!", error: err.message });
    })
}


//Get all Drivers
driverDisplay = async (req, res) => {
  driverData.find( function (err, user) {
    if (err) return res.status(500).send("Error on the server121.");
    if (!user) {
      return res.status(404).send("No user found.");
    } else {
      res.send(user);
    }
  });
};

//Update a Driver
updateDriver = async (req, res) => {
  driverData.findOne({ _id: req.params.id }, function (err, user) {
    if (err) return res.status(500).send("Error on the server.");
    if (user) {
      const id = user._id;
      const driverName = req.body.driverName;
      const driverNIC = req.body.driverNIC;
      const driverId = req.body.driverId;
      const contactNumber = req.body.contactNumber;
      
      driverData.updateMany(
        { _id: id },
        { $set: { driverName: driverName, driverNIC: driverNIC, driverId: driverId, contactNumber: contactNumber} }
      ).exec(function (err, msgs) {
        if (err) {
          return res.status(400).json({ success: false, error: err });
        } else {
          res.status(200).send("updated successfully");
        }
      });
    } else {
      return res.status(500).send("Not available Driver");
    }
  });
};

//Delete a Driver
deleteDriver = async (req, res) => {
  console.log(req.params.id);
  driverData.deleteOne({ _id: req.params.id }, function (err, user) {
    if (err) return res.status(500).send("Error on the server.");
    if (!user) {
      return res.status(404).send("No Driver found.");
    } else {
      res.status(200).send("Delete successfully");
    }
  });
};

driverOneDisplay = async (req, res) => {
  driverData.findOne( function (err, user) {
    if (err) return res.status(500).send("Error on the server121.");
    if (!user) {
      return res.status(404).send("No user found.");
    } else {
      res.send(user);
    }
  });
};

module.exports = {
  driverRegistration,
  driverDisplay,
  updateDriver,
  deleteDriver,
  driverOneDisplay
}
