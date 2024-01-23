import express from "express";
import {
	createResume,
	getResumes,
	getResume,
	updateResume,
	deleteResume,
} from "../controllers/resumeController";

const router = express.Router();

router.post("/resumes", createResume);
router.get("/resumes", getResumes);
router.get("/resumes/:id", getResume);
router.put("/resumes/:id", updateResume);
router.delete("/resumes/:id", deleteResume);

export default router;
