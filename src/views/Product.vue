<template>
  <div v-if="product">
    <h1>{{product.name}}</h1>
    <div class="price">
      <strong>{{product.price}} руб.</strong>
    </div>
    <button @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: null
    }
  },
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', {...this.product})
    }
  },
  mounted () {
    this.product = this.$store.getters.products.find(item => item.id === +this.$route.params.id)
  }
}
</script>

<style scoped>
.price {
  margin-bottom: 10px;
}
</style>
