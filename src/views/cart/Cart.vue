<template>
  <div id="cart" class=''>
    <nav-bar class= "nav-bar">
      <div slot= "center">购物车 ({{cartCount}})</div>
    </nav-bar>
    <cart-list class= "cart-list" :cart-list= "cartList"></cart-list>
    <bottom-bar></bottom-bar>
 </div>
</template>

<script>
import NavBar from 'common/navBar/NavBar'
import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar';
export default {
  name: '',
  data () {
    return {
    }
  },
  props: {

  },
  components: {
    NavBar,
    CartList,
    BottomBar
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList
    },
    cartCount() {
      return this.$store.getters.cartCount
    }

  },
  created () {

  },
  methods: {

  }
}
</script>

<style scoped>
  .nav-bar{
    font-size: 16px;
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
