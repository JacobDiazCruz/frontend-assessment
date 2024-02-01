// router.ts
import { createRouter, createWebHistory } from 'vue-router';
import ExerciseOne from './ExerciseOne.vue';
import ExerciseTwo from './ExerciseTwo.vue';

const routes: Array<any> = [
  { path: '/', redirect: '/exercise-one' },
  { path: '/exercise-one', component: ExerciseOne },
  { path: '/exercise-two', component: ExerciseTwo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
