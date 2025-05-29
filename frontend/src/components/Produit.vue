<template>
  <div class="product">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <span>{{ product.price }} €</span>
    <button @click="addToCart">Ajouter au Panier</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: Object,
});

const emit = defineEmits(['add-to-cart']);

const addToCart = () => {
  emit('add-to-cart', props.product);
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: 200px;
}

.product-image {
  width: 100%;
  height: auto;
}
</style>