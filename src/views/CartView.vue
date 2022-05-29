<template>
  <div class="cart">
    <h1>Your cart</h1>
    <CartItemCard
      v-for="product in items"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import CartItemCard from "../components/cart/CartItemCard.vue";
export default {
  name: "CartView",
  components: { CartItemCard },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>