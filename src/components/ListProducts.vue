<template>
  <carousel :items-to-show="3" snapAlign="start" :breakpoints="breakpoints">
    <slide v-for="product in products.filter(p => p.id % 2 === 0)" :key="product.id">
      <div>
        <div>
          <Product :product="product" />
        </div>
        <div v-if="products[product.id + 1]">
          <Product :product="products[product.id + 1]" />
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import { computed, ref } from 'vue'
import {useStore} from "vuex"

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Product from './Product'

export default {
  components: {
    Product,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const store = useStore()
    const breakpoints = ref({
      320: {
        itemsToShow: 2
      },
      700: {
        itemsToShow: 2.5
      },
      1024: {
        itemsToShow: 3
      },
    })
    const products = computed(() => store.getters.products)
    return {
      products,
      breakpoints
    };
  },
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

.swiper {
  max-width: 600px;
  margin: 0 auto;
}

</style>
