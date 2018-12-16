const db = require('../models')


module.exports = {
    all: function(req, res){
        db.users.all(function (result) {
            res.send(result)
   
       
    })
},
    // findFaceBookId: function(req,res){
       
    //     res.send('hi')
    // },
    create : function(req, res){
       
        db.users.create(["first_name", "last_name", "email", "fbID"], [req.body.first_name, req.body.last_name, req.body.email, req.body.fbID], function (result) {
                res.send(result)
            });
        
          
       
    },
    update: function(req, res){
        // db.Main
        // findOneAndUpdate({fId: req.params.fId}, req.body)
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err))
    },
    delete: function(req,res){
        // db.Main 
        // .findById({fId: req.params.fId})
        // .then(dbModel => dbModel.remove())
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err))
    }
}