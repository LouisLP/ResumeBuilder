<template>
	<div>
		<h1>{{ id ? "Edit" : "Create" }} Resume</h1>
		<form class="form-group" @submit.prevent="handleSubmit">
			<!-- NAME -->
			<label for="name">Name:</label>
			<input class="form-control my-2" id="name" v-model="resume.name" type="text" />

			<!-- SUMMARY -->
			<label for="summary">Summary:</label>
			<textarea class="form-control my-2" id="summary" v-model="resume.summary"></textarea>

			<!-- WORK EXPERIENCE (array) -->
			<!-- Add another work experience -->
			<button class="btn btn-secondary btn-sm my-3" @click.prevent="addWorkExperience">
				Add Work Experience
			</button>

			<div class="container">
				<div class="row">
					<div class="col" v-for="(exp, index) in resume.workExperience" :key="index">
						<!-- TITLE -->
						<label for="title">Job Title:</label>
						<input class="form-control my-2" id="title" v-model="exp.title" type="text" />

						<!-- COMPANY NAME -->
						<label for="companyName">Company Name:</label>
						<input
							class="form-control my-2"
							id="companyName"
							v-model="exp.companyName"
							type="text"
						/>

						<!-- TIMEFRAME -->
						<label for="timeframe">Timeframe:</label>
						<input
							class="form-control my-2"
							id="timeframe"
							v-model="exp.timeframe"
							type="text"
						/>

						<!-- DESCRIPTION -->
						<label for="description">Description:</label>
						<textarea
							class="form-control my-2"
							id="description"
							v-model="exp.description"
						></textarea>

						<!-- Remove this work experience -->
						<button
							class="btn btn-danger btn-sm"
							@click.prevent="removeWorkExperience(index)"
						>
							Remove
						</button>
					</div>
				</div>
			</div>

			<!-- SUBMIT -->
			<button
				class="btn btn-dark btn-lg my-4 d-flex justify-content-center align-items-center"
				type="submit"
			>
				{{ id ? "Update" : "Create" }}
			</button>
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
		addWorkExperience() {
			this.resume.workExperience.push({
				title: "",
				companyName: "",
				timeframe: "",
				description: "",
			});
		},
		removeWorkExperience(index) {
			this.resume.workExperience.splice(index, 1);
		},
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
