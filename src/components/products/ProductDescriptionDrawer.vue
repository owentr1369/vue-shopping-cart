<template>
  <div>
    <div
      class="drawer-background"
      :class="{ show: active.product_drawer }"
      @click="$emit('close-product-drawer')"
    />
    <div class="drawer" :show="{ show: active }">
      <div class="drawer-close" @click="$emit('close-product-drawer')">X</div>
      <div v-if="product" class="product-details">
        <h3 class="text-center">{{ product.name }}</h3>
        <p class="description">{{ product.description }}</p>
        <h3 class="text-center">${{ product.price.toFixed(2) }}</h3>
        <div class="card-total" v-if="product_total">
          <h3>In Cart</h3>
          <h4>{{ product_total }}</h4>
        </div>
        <div class="button-container">
          <button class="remove">Remove</button>
          <button class="add">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "active"],
  computed: {
    product_total() {
      return 56.0;
    },
  },
};
</script>

<style>
</style>