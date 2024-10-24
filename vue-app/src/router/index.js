import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Characters',
      component: () => import('../views/CharactersView.vue'),
      meta: {
        title: 'Characters'
      }
    },
    {
      path: '/',
      name: 'Favorites',
      component: () => import('../views/FavoritesView.vue'),
      meta: {
        title: 'Favorites'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
