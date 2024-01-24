<template>
	<div>
		<a href="https://github.com/LouisLP/ResumeBuilder"><h1 class="">Resume Builder 🗃️</h1></a>
		<p class="mb-4">Note: this is a simple prototype.</p>
		<h2 class="my-3">Existing Resumes</h2>
		<ul>
			<li class="p-2 list-unstyled" v-for="resume in resumes" :key="resume._id">
				<h3>{{ resume.name }}</h3>

				<router-link
					class="btn btn-primary"
					:to="{ name: 'ViewResume', params: { id: resume._id } }"
					>View</router-link
				>
				<router-link
					class="mx-3 btn btn-secondary"
					:to="{ name: 'EditResume', params: { id: resume._id } }"
					>Edit</router-link
				>

				<button class="btn btn-danger" @click="deleteResume(resume._id)">Delete</button>
			</li>
		</ul>
		<router-link class="btn btn-dark" to="/resume/create">Create New Resume</router-link>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			resumes: [],
		};
	},
	async created() {
		// console.log('API URL:', process.env.VUE_APP_API_URL);
		try {
			const response = await axios.get(`${process.env.VUE_APP_API_URL}/resumes`);
			this.resumes = response.data;
		} catch (error) {
			console.error("Error fetching resumes:", error);
		}
	},
	methods: {
		async deleteResume(resumeId) {
			if (confirm("Are you sure you want to delete this resume?")) {
				try {
					await axios.delete(`${process.env.VUE_APP_API_URL}/resumes/${resumeId}`);
					// Remove the resume from the local array
					this.resumes = this.resumes.filter((resume) => resume._id !== resumeId);
				} catch (error) {
					console.error("Error deleting resume:", error);
				}
			}
		},
	},
};
</script>
