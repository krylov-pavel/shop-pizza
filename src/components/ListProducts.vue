<template>
  <swiper
      class="swiper"
      :slides-per-view="2"
      :space-between="50"
  >
    <swiper-slide v-for="product in products" :key="product.id">
      <router-link :to="`/products/${product.id}`" class="product">
        <img :src="product.image" alt="" class="product__image">
        <div class="product__name">{{product.name}}</div>
        <div class="product__price">{{product.price}} руб.</div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import { mapGetters } from 'vuex'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data () {
    return {
      title: 'test title'
    }
  },
  computed: {
    ...mapGetters({
      products: 'products'
    })
  },
  mounted () {

  }
}
</script>

<style scoped lang="scss">
.product {
  display: block;
  text-decoration: none;
  color: #4a4a4a;
  &__image {
    width: 100%;
    margin-bottom: 15px;
  }
  &__name {
    margin-bottom: 5px;
  }
  &__price {
    font-weight: bold;
  }
}

.swiper {
  max-width: 600px;
  margin: 0 auto;
}

</style>
