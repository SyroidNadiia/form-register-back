const express = require("express");
const router = express.Router();

const { registerUser } = require("../../controllers/auth");
const { validateBody } = require("../../middlewares");
const { registerSchema } = require("../../schemas");
const { controllerWrapper } = require("../../helpers");

router.post(
  "/register",
  validateBody(registerSchema),
  controllerWrapper(registerUser)
);

module.exports = router;
