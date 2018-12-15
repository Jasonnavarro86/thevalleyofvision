const db = require('../models')

module.exports = {
    findAll: function(req, res){
        // db.Main
        // .find(req.query)
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err))
    },
    findFaceBookId: function(req,res){
        
        console.log(req.body)
        res.send("hi")
    },
    create : function(req, res){
        // db.Main
        // .create(req.body)
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err))
    },
    update: function(req, res){
        // db.Main
        // findOneAndUpdate({fId: req.params.fId}, req.body)
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err))
    },
    remove: function(req,res){
        // db.Main 
        // .findById({fId: req.params.fId})
        // .then(dbModel => dbModel.remove())
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err))
    }
}