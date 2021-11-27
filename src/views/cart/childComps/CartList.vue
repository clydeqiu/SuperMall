<template>
  <scroll>
    <div>
      <cart-list-item v-for="item in cartList" :key="item.id" :item-info="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'common/scroll/Scroll.vue'
import CartListItem from './CartListItem';
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Scroll,
    CartListItem
  },
  computed: {

  },
  created () {

  },
  methods: {

  }
}
</script>

<style scoped>
  .cart-list{

  }
</style>
