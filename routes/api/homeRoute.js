const router = require('express').Router();
const homeController = require('../../controllers/homeController');

//Matches with '/api/home

router.route("/")
.get(homeController.findAll)
.post(homeController.create);


router
.route("/:id")
.get(homeController.findFaceBookId)
.put(homeController.update)
.delete(homeController.remove);

module.exports = router;