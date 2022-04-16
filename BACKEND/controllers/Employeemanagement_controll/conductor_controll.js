const  conductorData = require('../../models/Employeeemanagement_model/conductor_model');

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


module.exports = {
  conductorRegistration,
  conductorDisplay

}