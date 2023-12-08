import express from "express";
import usernameController from "../controllers/usernameController";

const router = express.Router();

router.get("/", usernameController.getUsername);

export default router;
