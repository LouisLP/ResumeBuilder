<template>
	<div>
		<h1>Resumes</h1>
		<ul>
			<li v-for="resume in resumes" :key="resume._id">
				{{ resume.name }}
				<router-link :to="{ name: 'ViewResume', params: { id: resume._id } }">View</router-link>
				<router-link :to="{ name: 'EditResume', params: { id: resume._id } }">Edit</router-link>
			</li>
		</ul>
		<router-link to="/resume/create">Create New Resume</router-link>
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
        console.log('API URL:', process.env.VUE_APP_API_URL);
		try {
			const response = await axios.get(`${process.env.VUE_APP_API_URL}/resumes`);
			this.resumes = response.data;
		} catch (error) {
			console.error("Error fetching resumes:", error);
		}
	},
};
</script>
