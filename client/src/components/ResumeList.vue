<template>
	<div>
		<a href="https://github.com/LouisLP/ResumeBuilder"
			><h1 class="text-info">Resume Builder 🗃️</h1></a
		>
		<p class="mb-4 text-light">> Note: this is a simple prototype.</p>
		<h2 class="my-2">Resumes</h2>
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
		<router-link class="btn btn-success" to="/resume/create">Create New Resume</router-link>
	</div>
</template>

<script setup>
/* eslint-disable */
import axios from "axios";
import { ref, onMounted } from "vue";

// PROPS
// N/A

// DATA
const resumes = ref([]);

// METHODS
async function deleteResume(resumeId) {
	if (confirm("Are you sure you want to delete this resume?")) {
		try {
			await axios.delete(`${process.env.VUE_APP_API_URL}/resumes/${resumeId}`);
			// Remove it from the local array
			resumes.value = resumes.value.filter((resume) => resume._id !== resumeId);
		} catch (error) {
			console.log("Error deleting resume: ", error);
		}
	}
}

// CREATE/MOUNT
async function fetchAllResumes() {
	try {
		const response = await axios.get(`${process.env.VUE_APP_API_URL}/resumes/`);
		resumes.value = response.data;
	} catch (error) {
		console.error("Error fetching resume:", error);
		// Handle error appropriately
	}
}
onMounted(() => {
	fetchAllResumes();
});
</script>
