<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="resume.name" type="text">
      </div>
      <div>
        <label for="summary">Summary:</label>
        <textarea id="summary" v-model="resume.summary"></textarea>
      </div>
      <!-- Add fields for work experience -->
      <button type="submit">Save Resume</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resume: {
        name: '',
        summary: '',
        // Include work experience details
      }
    };
  },
  methods: {
    submitForm() {
      // Logic to send data to backend
    }
  }
};
</script>
