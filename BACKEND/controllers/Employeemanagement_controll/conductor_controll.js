const  conductorData = require('../../models/Employeeemanagement_model/conductor_model');

//Add Conductorer 
const  conductorRegistration = (req, res) => {
  const {  conductorName, conductorNIC,  conductorId, contactNumber } = req.body;
  if (! conductorName || ! conductorNIC || ! conductorId || !contactNumber) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

   conductorData.create({
       conductorName: req.body. conductorName,
       conductorNIC: req.body. conductorNIC,
       conductorId: req.body. conductorId,
       contactNumber: req.body.contactNumber
    })
    .then((conductorData) => {
      res.status(200).send(conductorData);
    })
    .catch((err) => {
      res
        .send(500)
        .send({ status: " Conductor Registration failed!", error: err.message });
    })
}

//Get all Conductorers
conductorDisplay = async (req, res) => {
  conductorData.find( function (err, user) {
    if (err) return res.status(500).send("Error on the server.");
    if (!user) {
      return res.status(404).send("No user found.");
    } else {
      res.send(user);
    }
  });
};

// Upadte a Conductor 
updateConductor = async (req, res) => {
  conductorData.findOne({ _id: req.params.id }, function (err, user) {
    if (err) return res.status(500).send("Error on the server.");
    if (user) {
      const id = user._id;
      const  conductorName = req.body. conductorName;
      const  conductorNIC = req.body. conductorNIC;
      const  conductorId = req.body. conductorId;
      const contactNumber = req.body.contactNumber;
      
      conductorData.updateMany(
        { _id: id },
        { $set: {  conductorName:  conductorName, conductorNIC: conductorNIC,  conductorId: conductorId, contactNumber: contactNumber} }
      ).exec(function (err, msgs) {
        if (err) {
          return res.status(400).json({ success: false, error: err });
        } else {
          res.status(200).send("updated successfully");
        }
      });
    } else {
      return res.status(500).send("Not available  Conductor");
    }
  });
};

//Delete a Conductors
deleteConductor = async (req, res) => {
  console.log(req.params.id);
  conductorData.deleteOne({ _id: req.params.id }, function (err, user) {
    if (err) return res.status(500).send("Error on the server.");
    if (!user) {
      return res.status(404).send("No Conductor found.");
    } else {
      //res.send(user);
      res.status(200).send("Delete successfully");
    }
  });
};

module.exports = {
  conductorRegistration,
  conductorDisplay,
  updateConductor,
  deleteConductor

}