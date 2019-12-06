const { Router } = require("express");
const Image = require("./model");

const router = new Router();

router.get("/image", (req, res, next) => {
  Image.findAll()
    .then(data => res.send(data))
    .catch(error => next(error));
});

router.post("/image", (req, res, nxt) => {
  Image.create(req.body)
    .then(info => res.send(info))
    .catch(error => nxt(error));
});

module.exports = router;
