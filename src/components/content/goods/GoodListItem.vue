<template>
  <div class='goods-item' @click="itemClick()">
    <img v-lazy = "getImg" alt="" :key="getImg" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {

  },
  computed: {
    getImg() {
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  },
  created () {

  },
  methods: {
    itemClick() {
      let iid = this.goodsItem.iid;
      this.$router.push({path:'/detail', query: {iid}})
    },
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    }
  }
}
</script>

<style scoped>
.goods-item{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.collect{
  position: relative;
}
.collect::before{
  content: '';
  position: absolute;
  left: -15px;
  width: 14px;
  height: 14px;
  top: -1px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
