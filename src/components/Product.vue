<template>
  <router-link :to="`/products/${product.id}`" class="product">
    <img :src="require(`@/assets/${product.image}`)" alt="" class="product__image">
    <div class="product__name">{{product.name}}</div>
    <div class="product__price">{{product.price}} $</div>
  </router-link>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped lang="scss">
.product {
  display: block;
  text-decoration: none;
  color: #4a4a4a;
  margin-bottom: 15px;
  text-align: left;
  &__image {
    width: 100%;
    margin-bottom: 5px;
  }
  &__name {
    margin-bottom: 5px;
  }
  &__price {
    font-weight: bold;
  }
}
</style>
