<template>
	<div>
		<button class="btn btn-sm btn-secondary my-4" @click="printResume">Print</button>
		<div v-if="resume">
			<h2>{{ resume.name }}</h2>
			<p>{{ resume.summary }}</p>
			<h3>Work Experience</h3>
			<ul>
				<li v-for="(exp, index) in resume.workExperience" :key="index">
					<strong>{{ exp.title }} at {{ exp.companyName }}</strong> ({{ exp.timeframe }})
					<p>{{ exp.description }}</p>
				</li>
			</ul>
		</div>
		<div v-else>
			<p>Loading resume details...</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			resume: null,
		};
	},
	async created() {
		try {
			const response = await axios.get(`${process.env.VUE_APP_API_URL}/resumes/${this.id}`);
			this.resume = response.data;
		} catch (error) {
			console.error("Error fetching resume:", error);
			// Handle error appropriately
		}
	},
	methods: {
		printResume() {
			window.print();
		}
	}
};
</script>
