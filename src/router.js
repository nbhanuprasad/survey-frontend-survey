import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    name: 'submitSurvey',
    path: '/survey-frontend-survey/survey/:surveyId',
    component: () => import('./views/SubmitSurvey/SubmitSurvey.vue'),
    props: true
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/survey-frontend-survey/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;