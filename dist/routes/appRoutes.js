"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _creditController = require("../controllers/creditController");

var router = (0, _express.Router)();
router.get("/credit/cuit/:id", _creditController.cuit);
var _default = router;
exports["default"] = _default;