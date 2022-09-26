<template>
  <div class="header">
    <router-link to="/">
      <img alt="Logo" class="logo" src="@/assets/logo.png">
    </router-link>
    <div class="nav">
      <router-link class="nav__item" to="/">Menu</router-link>
      <router-link class="nav__item" to="/cart">Cart</router-link>
    </div>
  </div>
  <div class="container">
    <router-view/>
  </div>
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
  margin: 0;
  padding: 0;
}
body {
  font-size: 14px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #4a4a4a;
}

.container {
  padding: 0 20px;
  max-width: 700px;
  margin: 15px auto;
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
.btn {
  background: #eaedef;
  border: none;
  outline: none;
  color: #4a4a4a;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 15px;
  cursor: pointer;
  &:active {
    background: #d8dadb;
  }
  &--sm {
    font-size: 11px;
    padding: 8px 12px;
  }
}
.mw-700 {
  max-width: 700px;
  margin: 15px auto;
}
.text-center {
  text-align: center;
}
h1 {
  font-size: 1.8rem;
}
h2 {
  font-size: 1.6rem;
}
h2 {
  font-size: 1.4rem;
}
h1, h2, h3 {
  margin-bottom: 15px;
}
.d-flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-end {
  justify-content: flex-end;
}
.align-items-center {
  align-items: center;
}
.flex {
  flex: 1;
}
.container {
  .carousel {
    &__slide {
      align-items: flex-start;
    }
    .carousel__prev,
    .carousel__next {
      background: #42b983;
      margin-top: -35px;
    }
    .carousel__prev {
      left: -6px;
    }
    .carousel__next {
      right: -6px;
    }
    &__pagination-button {
      background-color: #78efb9;
      &--active {
        background-color: #42b983;
      }
    }
    &__pagination-button--active {
    }
  }
}
</style>
