import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Panier from '../components/Panier.vue';
import Paiement from '../components/Paiement.vue';
import Admin from '../components/Admin.vue';
import Produits from '../components/Produits.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/produits', component: Produits }, // Minuscule pour cohérence
  { path: '/panier', component: Panier },
  { path: '/paiement', component: Paiement },
  { path: '/admin', component: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;