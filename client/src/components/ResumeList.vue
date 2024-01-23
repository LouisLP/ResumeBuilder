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
// import axios from 'axios'; // Uncomment this if you're making API calls

export default {
	data() {
		return {
			resumes: [], // This should be populated with data from your API
		};
	},
	// Uncomment the below method to fetch resumes from your API
	// async created() {
	//   const response = await axios.get(`${process.env.VUE_APP_API_URL}/resumes`);
	//   this.resumes = response.data;
	// }
};
</script>
