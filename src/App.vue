<template>
  <div class="header">
    <img alt="Vue logo" class="logo" src="@/assets/logo.png">
    <div class="nav">
      <router-link class="nav__item" to="/">Home</router-link>
      <router-link class="nav__item" to="/cart">Cart</router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('getStorage')
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #4a4a4a;
}

#nav {
  padding: 30px;

  a {

  }
}
.nav {
  display: flex;
  align-items: center;
  &__item {
    margin: 0 5px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.header {
  padding: 15px;
  background: #f8f8f8;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 40px;
}
</style>
