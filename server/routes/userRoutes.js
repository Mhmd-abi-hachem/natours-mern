import express from "express";
import {
  forgotPassword,
  getLoginStatus,
  isLoggedIn,
  login,
  logout,
  protect,
  resetPassword,
  restrictTo,
  signup,
  updatePassword,
} from "../controllers/authController.js";

import {
  deleteMe,
  getAllUsers,
  getMe,
  updateMe,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);
router.get("/is-logged-in", isLoggedIn, getLoginStatus);

router.use(protect); // Protect middleware now is applied to all next middlewares down!!

router.patch("/updateMyPassword", updatePassword);
router.get("/me", getMe);
router.patch("/updateMe", updateMe);
router.delete("/deleteMe", deleteMe);

router.use(restrictTo("admin")); // Restrict middleware now is applied to all next middlewares down + the protect one!!

router.route("/").get(getAllUsers);

export default router;
