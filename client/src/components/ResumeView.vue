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

<script setup>
/* eslint-disable */
import axios from "axios";
import { ref, onMounted } from "vue";

// PROPS
const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

// DATA
const resume = ref(null);

// METHODS
function printResume() {
	window.print();
}

async function fetchResume() {
	try {
		const response = await axios.get(`${process.env.VUE_APP_API_URL}/resumes/${props.id}`);
		resume.value = response.data;
	} catch (error) {
		console.error("Error fetching resume:", error);
		// Handle error appropriately
	}
}
onMounted(() => {
	fetchResume();
});
</script>
