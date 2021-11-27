<template>
  <scroll class='tab-menu'>
    <div class="menu-list-item" 
      v-for= "(item, index) in categories"
      :key= "index"
      @click="itemClick(index)"
      :class="{active: index == currentIndex}">
      {{item.title}}
    </div>
  </scroll>
</template>

<script>
import Scroll from 'common/scroll/Scroll'
export default {
  name: '',
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Scroll
  },
  computed: {

  },
  created () {

  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit("selectItem",index)
    }
  }
}
</script>

<style scoped>
  .tab-menu {
    width: 100px;
    background-color: #f6f6f6;
    box-sizing: border-box;
  }
  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .menu-list-item.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
</style>
