const Model = require("../Models/subscriptTransaction");
const form = require("../Helpers/resForm");


module.exports = {
  getsubTrans: (req, res) => {
   
    Model.getsubTrans()
      .then(results => form.getsubTrans(res, results, 200))
      .catch(error => console.log(error));
  },
  getsubTransByDate: (req, res) => {
    const date = req.params.date;
    Model.getsubTransByDate()
      .then(results => form.getsubTransByDate(res, results, 200))
      .catch(error => console.log(error));
  },
  
    postsubTrans: (req, res) => {
        //  const bodyReq = req.body;
        var date = new Date();
        const body = {
          ...req.body,
          transaction_at: date,
          status:'pending'
     
              
        };
        // console.log(body)
        Model
          .postsubTrans(body)
          .then(results => form.postsubTrans(res, results, 200))
          .catch(error => console.log(error));
      },
      getsubTransByID: (req, res) => {
        const id = req.params.id;
        Model.getsubTransByID(id)
          .then(id1 => form.getsubTransByID(res, id1, 200))
          .catch(error => console.log(error));
      },
      getsubTransByIDCustomer: (req, res) => {
        const id = req.params.id;
        Model.getsubTransByIDCustomer(id)
          .then(id1 => form.getsubTransByIDCustomer(res, id1, 200))
          .catch(error => console.log(error));
      },
      updatesubTransByID: (req, res) => {
        const id = req.params.id;
       
        Model.updatesubTransByID(id)
          .then(id1 => form.updatesubTransByID(res, id1, 200))
          .catch(error => console.log(error));
      },
      updatesubTransAccept: (req, res) => {
        const id = req.params.id;
       
        Model.updatesubTransAccept(id)
          .then(id1 => form.updatesubTransAccept(res, id1, 200))
          .catch(error => console.log(error));
      },
      selectedbyDate: (req, res) => {
        const id = req.params.id;
       const date= req.params.date
        Model.selectedbyDate(id,date)
          .then(id1 => form.selecedbyDate(res, id1, 200))
          .catch(error => console.log(error));
      },
      
        }
        