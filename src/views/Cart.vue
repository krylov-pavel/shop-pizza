<template>
  <div v-if="!orderSuccess">
    <h1>Make order</h1>
    <div v-if="cart.length">
      <div class="products-cart">
        <div v-for="product in cart" :key="product.id" class="product">
          <img :src="require(`@/assets/${product.image}`)" class="product__img" alt="">
          <div class="product__content">
            <div class="product__name">{{product.name}}</div>
            <div class="d-flex align-items-center">
              <span class="product__count">Count: {{product.count}}</span>
              <button class="btn btn--sm" @click="deleteProduct(product)">remove</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="btn" @click="clearCart">Clear cart</button>
      </div>
      <div class="address">
        <h2>Address</h2>
        <form @submit.prevent="makeOrder">
          <div class="form-group">
            <input type="text" class="input-text" placeholder="street" v-model="street" required>
          </div>
          <div class="form-group">
            <input type="text" class="input-text" placeholder="house" v-model="house" required>
          </div>
          <div class="form-group">
            <input type="text" class="input-text" placeholder="flat" v-model="flat" required>
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn">Make order</button>
          </div>
        </form>
      </div>
    </div>
    <div v-else>
      The basket is empty.
      <router-link to="/">Make an order</router-link>
    </div>
  </div>
  <div v-else>
    <h2>Your order has been placed!</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      street: null,
      house: null,
      flat: null,
      orderSuccess: false
    }
  },
  methods: {
    clearCart () {
      this.$store.commit('clearCart')
    },
    deleteProduct (product) {
      this.$store.commit('deleteProduct', product)
    },
    makeOrder () {
      const address = {
        street: this.street,
        house: this.house,
        flat: this.flat
      }
      console.log(address)
      console.log(this.cart)

      this.clearCart()

      this.orderSuccess = true
      setTimeout(() => {
        this.$router.push('/')
      }, 1500)
    }
  },
  computed: {
    ...mapGetters({
      cart: 'cart'
    })
  }
}
</script>

<style scoped lang="scss">
.products-cart {
  margin-bottom: 20px;
}
.product {
  padding: 15px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  flex-wrap: wrap;
  &__img {
    margin-right: 15px;
    margin-bottom: 5px;
    max-width: 70px;
  }
  &__name {
    margin-bottom: 5px;
    font-weight: bold;
  }
  &__count {
    margin-right: 15px;
  }
}
.address {
  margin-top: 20px;
}
.form-group {
  margin-bottom: 10px;
}
.input-text {
  width: 100%;
  outline: none;
  border: 1px solid #cecece;
  color: #4a4a4a;
  font-size: 1.3rem;
  padding: 5px;
}
</style>


