<template>
  <div class="home">
    <ListProducts />
  </div>
</template>

<script>
import ListProducts from '@/components/ListProducts'

export default {
  name: 'Home',
  components: {
    ListProducts
  }
}
</script>
