const { getDriverItemPhoto, postPhoto } = require("../Models/photo");
const form = require("../Helpers/resForm");
module.exports = {
  getDriverItemPhoto: (req, res) => {
    const id = req.params.id;
    getDriverItemPhoto(id)
      .then((id1) => form.getDriverItemPhoto(res, id1, 200))
      .catch((error) => console.log(error));
  },
  postPhoto: (req, res) => {
    //  const bodyReq = req.body;

    const body = {
      ...req.body,
    };
    // console.log(body)
   postPhoto(body)
      .then((results) => form.postPhoto(res, results, 200))
      .catch((error) => console.log(error));
  },
};
