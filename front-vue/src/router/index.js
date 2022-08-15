import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/pages/list-pokemons/ListPokemonsComponent.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
