<template>
  <div class="cart-item-card">
    <div class="header">
      <h3>{{ product.name }}</h3>
      <h4>In cart: {{ product.quantity }}</h4>
      <h4>Total cost: {{ item_cost.toFixed(2) }}</h4>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 120);
    },
    item_cost() {
      return this.product.price * this.product.quantity;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item-card {
  width: 90%;
  margin: 5%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  .header {
    display: flex;
    justify-content: space-around;
  }
}
</style>