<template>
  <div class="home">
    <h2>Bienvenue sur notre boutique de poulet !</h2>
    <section class="products">
      <h3>Nos Produits</h3>
      <div class="product-list">
        <Produit v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCart" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Produit from './Produit.vue';

const products = ref([
  { id: 1, name: 'Poulet rôti', description: 'Délicieux poulet rôti mariné.', price: 15, image: '/images/roasted-chicken.jpg' },
  { id: 2, name: 'Ailes de poulet', description: 'Ailes de poulet épicées.', price: 8, image: '/images/chicken-wings.jpg' },
  { id: 3, name: 'Poulet grillé', description: 'Poulet grillé avec des épices.', price: 12, image: '/images/grilled-chicken.jpg' },
]);

const addToCart = (product) => {
  console.log(`${product.name} ajouté au panier`);
};
</script>

<style scoped>
.home {
  text-align: center;
}

.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>