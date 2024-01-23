import { createRouter, createWebHistory } from "vue-router";
import ResumeList from "@/components/ResumeList.vue";
import ResumeForm from "@/components/ResumeForm.vue";
import ResumeView from "@/components/ResumeView.vue";

const routes = [
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
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
