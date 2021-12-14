const express = require("express");
const router = express.Router();
const PersonagensController = require("./controllers/personagens");
 
router.get("/personagens", PersonagensController.getAll);

router.get("/personagens/:id", PersonagensController.getOne);

router.post("/personagens", PersonagensController.create);

router.put("/personagens/:id", PersonagensController.update);

router.delete("/personagens/:id", PersonagensController.remove);

module.exports = router;