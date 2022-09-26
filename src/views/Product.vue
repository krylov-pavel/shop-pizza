<template>
  <div class="mw-700" v-if="product">
    <img :src="require(`@/assets/${product.image}`)" class="product-image" alt="">
    <h1 class="product-name">{{product.name}}</h1>
    <div class="product-price">
      <strong>{{product.price}} $</strong>
    </div>
    <button class="btn" @click="addToCart" v-if="!hideBtn">Add to cart</button>
    <strong class="text-green" v-else>Product added to the cart</strong>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: null,
      hideBtn: false
    }
  },
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', {...this.product})
      this.hideBtn = true
      setTimeout(() => {
        this.hideBtn = false
      }, 1500)
    }
  },
  mounted () {
    this.product = this.$store.getters.products.find(item => item.id === +this.$route.params.id)
  }
}
</script>

<style scoped lang="scss">
.product-image {
  max-width: 250px;
  margin-bottom: 10px;
}
.product-name {
  font-size: 1.3em;
  margin-bottom: 5px;
}
.product-price {
  font-size: 1em;
  margin-bottom: 10px;
}
.text-green {
  color: #42b983
}
</style>
