import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {
    productQuantity: (state) => (product) => {
      const item = state.cart.find((i) => i.id === product.id);

      if (item) return item.quantity;
      else return null;
    },
  },
  mutations: {
    addToCart(state, product) {
      let item = state.cart.find((i) => i.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      updateLocalStorage(state.cart);
    },
  },
  actions: {},
  modules: {},
});
