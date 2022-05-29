<template>
  <div class="home">
    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import items from "../data/data";
import ProductSummaryCard from "../components/products/ProductSummaryCard.vue";
export default {
  name: "HomeView",
  components: { ProductSummaryCard },
  data() {
    return { items: items };
  },
};
</script>

<style lang="scss" scoped>
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>