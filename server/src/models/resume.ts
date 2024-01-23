import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	summary: {
		type: String,
		required: true,
	},
	workExperience: [
		{
			title: {
				type: String,
				required: true,
			},
			companyName: {
				type: String,
				required: true,
			},
			timeframe: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
		},
	],
});

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
