<template>
  <h1 class="text-center">Choose your pizza</h1>
  <ListProducts />
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
<style scoped lang="scss">
.products-container {
  padding: 0 20px;
  max-width: 700px;
  margin: 15px auto;
}
</style>
