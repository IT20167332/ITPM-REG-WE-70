const driverData = require('../../models/Employeeemanagement_model/driver_model');

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



module.exports = {
  driverRegistration,
  driverDisplay
}
