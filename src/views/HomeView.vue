<template>
  <div class="home">
    <h1>Hello Home</h1>
  </div>
</template>

<script>
import items from "../data/data";
export default {
  name: "HomeView",
  data() {
    return { items };
  },
};
</script>
