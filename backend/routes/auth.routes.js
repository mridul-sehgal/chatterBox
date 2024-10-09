import express from "express"
const router= express.Router();
import {Login,Logout,Signin} from "../controllers/auth.controller.js"

router.post("/login",Login)
router.post("/logout",Logout)
router.post("/signin",Signin)

export default router;