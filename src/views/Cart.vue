<template>
  <h1>Cart</h1>
  <div v-if="cart.length">
    <div v-for="product in cart" :key="product.id">
      <div>{{product.name}}</div>
      <div>
        <span>Количество {{product.count}}</span>
        <button @click="deleteProduct(product)">delete</button>
      </div>
    </div>
    <div>
      <button @click="clearCart">clear cart</button>
    </div>
  </div>
  <div v-else>
    В корзине пусто.
    <router-link to="/">Сделать заказ.</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    clearCart () {
      this.$store.commit('clearCart')
    },
    deleteProduct (product) {
      this.$store.commit('deleteProduct', product)
    }
  },
  computed: {
    ...mapGetters({
      cart: 'cart'
    })
  }
}
</script>

<style scoped>

</style>


