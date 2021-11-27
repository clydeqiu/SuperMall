<template>
  <div class='recommend-info' v-if="recommendList.length > 0">
    <div class="info-header">热门推荐</div>
    <grid-view :cols = "2">
      <good-list-item :goods-item="item" v-for="(item, index) in recommendList" :key="index"></good-list-item>
    </grid-view>
  </div>
</template>

<script>
import GridView from 'common/gridView/GridView'
import GoodListItem from 'content/goods/GoodListItem'
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GridView,
    GoodListItem,
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
  .recommend-info{
    margin-top: 10px;
  }
  .info-header{
    margin-left: 10px;
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #f2f4f9 ;
  }
</style>
