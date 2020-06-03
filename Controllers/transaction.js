const Model = require("../Models/transaction");
const form = require("../Helpers/resForm");


module.exports = {
  getTransaction: (req, res) => {
   
    Model.getTransaction()
      .then(results => form.getTransaction(res, results, 200))
      .catch(error => console.log(error));
  },
  
    postTransaction: (req, res) => {
        //  const bodyReq = req.body;
        var date = new Date();
        const body = {
          ...req.body,
          transaction_at: date,
          status:"pending"
              
        };
        // console.log(body)
        Model
          .postTransaction(body)
          .then(results => form.postTransaction(res, results, 200))
          .catch(error => console.log(error));
      }
        }
