<template>
	<div>
		<h1>{{ id ? "Edit" : "Create" }} Resume</h1>
		<form @submit.prevent="handleSubmit">
			<label for="name">Name:</label>
			<input id="name" v-model="resume.name" type="text" />

			<label for="summary">Summary:</label>
			<textarea id="summary" v-model="resume.summary"></textarea>

			<div v-for="(exp, index) in resume.workExperience" :key="index">
				<label for="title">Job Title:</label>
				<input id="title" v-model="exp.title" type="text" />
				<!-- Error checking TITLE -->
				<!-- <p
					v-if="
						errors.workExperience &&
						errors.workExperience[index] &&
						errors.workExperience[index].title
					"
				>
					{{ errors.workExperience[index].title }}
				</p> -->

				<label for="companyName">Company Name:</label>
				<input id="companyName" v-model="exp.companyName" type="text" />

				<label for="timeframe">Timeframe:</label>
				<input id="timeframe" v-model="exp.timeframe" type="text" />

				<label for="description">Description:</label>
				<textarea id="description" v-model="exp.description"></textarea>
			</div>

			<button type="submit">{{ id ? "Update" : "Create" }}</button>
		</form>
	</div>
</template>

<script>
import axios from "axios";

export default {
	props: {
		id: String,
	},
	data() {
		return {
			resume: {
				name: "",
				summary: "",
				workExperience: [{ title: "", companyName: "", timeframe: "", description: "" }],
			},
		};
	},
	async created() {
		if (this.id) {
			try {
				const response = await axios.get(`${process.env.VUE_APP_API_URL}/resumes/${this.id}`);
				this.resume = response.data;
			} catch (error) {
				console.error("Error fetching resume:", error);
			}
		}
	},
	methods: {
		async handleSubmit() {
			if (this.id) {
				// Update logic
				await axios.put(`${process.env.VUE_APP_API_URL}/resumes/${this.id}`, this.resume);
			} else {
				// Create logic
				await axios.post(`${process.env.VUE_APP_API_URL}/resumes`, this.resume);
			}
			this.$router.push("/");
		},
	},
};
</script>
