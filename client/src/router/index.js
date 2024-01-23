import Vue from "vue";
import Router from "vue-router";
import ResumeList from "@/components/ResumeList.vue";
import ResumeForm from "@/components/ResumeForm.vue";
import ResumeView from "@/components/ResumeView.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "ResumeList",
			component: ResumeList,
		},
		{
			path: "/resume/create",
			name: "CreateResume",
			component: ResumeForm,
		},
		{
			path: "/resume/edit/:id",
			name: "EditResume",
			component: ResumeForm,
			props: true,
		},
		{
			path: "/resume/:id",
			name: "ViewResume",
			component: ResumeView,
			props: true,
		},
	],
});
