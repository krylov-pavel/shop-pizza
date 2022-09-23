import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'name 1',
        image: 'https://placehold.jp/200x200.png',
        price: 580
      },
      {
        id: 2,
        name: 'name 2',
        image: 'https://placehold.jp/200x200.png',
        price: 750
      }
    ],
    cart: []
  },
  mutations: {
    setCart (state, products) {
      state.cart = products
    },
    clearCart (state) {
      state.cart = []
      localStorage.setItem('cart', '')
    },
    addToCart (state, product) {
      const productAdded = state.cart.find(p => p.id === product.id)
      if(productAdded) {
        productAdded['count']++
      } else {
        product['count'] = 1
        state.cart.push(product)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    deleteProduct (state, product) {
      if(product.count > 1) {
        product.count--
      } else {
        state.cart = state.cart.filter(p => p.id !== product.id)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {
    addToCart ({commit}, product) {
      commit('addToCart', product)
    },
    getStorage ({commit}) {
      const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null
      if(storage) {
        commit('setCart', storage)
      }
    }
  },
  getters: {
    products: s => s.products,
    cart: s => s.cart
  },
  modules: {
  }
})
