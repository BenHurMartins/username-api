import express from "express";
import usernameController from "../controllers/usernameController";

const router = express.Router();

router.get("/username/", usernameController.getUsername);

export default router;
