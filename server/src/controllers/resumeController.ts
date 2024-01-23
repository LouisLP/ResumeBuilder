import Resume from "../models/resume";
import { Request, Response } from "express";

const createResume = async (req: Request, res: Response) => {
	try {
		const newResume = new Resume(req.body);
		await newResume.save();
		res.status(201).json(newResume);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};

const getResumes = async (_: Request, res: Response) => {
	try {
		const resumes = await Resume.find();
		res.json(resumes);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

const getResume = async (req: Request, res: Response) => {
	try {
		const resume = await Resume.findById(req.params.id);
		if (!resume) res.status(404).json({ message: "Resume not found" });
		else res.json(resume);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

const updateResume = async (req: Request, res: Response) => {
	try {
		const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!resume) res.status(404).json({ message: "Resume not found" });
		else res.json(resume);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};

const deleteResume = async (req: Request, res: Response) => {
	try {
		const resume = await Resume.findByIdAndDelete(req.params.id);
		if (!resume) res.status(404).json({ message: "Resume not found" });
		else res.status(204).send();
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export { createResume, getResumes, getResume, updateResume, deleteResume };
