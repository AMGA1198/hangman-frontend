import HomePage from './components/Home.vue'
import HangmanGame from './components/Hangman.vue'
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/game',
    component: HangmanGame
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;