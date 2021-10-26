const express = require("express");
const router = express.Router();
const {
  productListFetch,
  productCreate,
  productDelete,
} = require("./controllers");
let products = require("../../products");

router.get("/", productListFetch);

router.post("/", productCreate);

router.delete("/:productId", productDelete);
module.exports = router;
