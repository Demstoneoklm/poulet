<!-- src/components/Produits.vue -->
<template>
  <div>
    <h2>Nos produits</h2>
    <div class="product-list">
      <ProduitItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script setup>
import ProduitItem from './ProduitItem.vue';

const products = [
  { id: 1, name: 'Poulet rôti', description: 'Délicieux et croustillant', price: 12.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Poulet frit', description: 'Savoureux et doré', price: 10.99, image: 'https://via.placeholder.com/150' },
];

const handleAddToCart = (product) => {
  console.log('Ajouté au panier:', product);
};
</script>

<style scoped>
.product-list {
  display: flex;
  gap: 20px;
}
</style>
