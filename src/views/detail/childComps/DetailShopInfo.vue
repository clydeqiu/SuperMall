<template>
  <div class='shop-info'>
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item item-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item item-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop" @click="enterShop">进店逛逛</div>
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
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {

  },
  computed: {

  },
  created () {

  },
  filters: {
    sellCountFilter:function (count){
      if (count < 10000) return count;
      return (count/10000).toFixed(1) + '万'
    }
  },
  methods: {
    enterShop(){
      console.log('进店');
    }
  }
}
</script>

<style scoped>
  .shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-top {
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .shop-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-top .title {
    margin-left: 10px;
    vertical-align: center;
  }

  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  
  .shop-middle-item {
    flex: 1;
  }
  .item-left{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .sells-count, .goods-count{
    font-size: 18px;
  }
  .sells-text,.goods-text{
    font-size: 12px;
    margin-top: 10px;
  }
  .item-right{
    font-size: 13px;
    color: #333;
  }
  .item-right table{
    width: 150px;
    margin-left: 30px;
  }
  .item-right table td{
    padding: 4px 2px;
  }
  .item-right .score {
    color: #5ea732;
  }

  .item-right .score-better {
    color: #f13e3a;
  }

  .item-right .better span {
    background-color: #5ea732;
    padding: 1px;
    color: #fff;
    text-align: center;
  }

  .item-right .better-more span {
    padding: 1px;
    background-color: #f13e3a;
  }

  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }
  .enter-shop {
    /* text-align: center; 属性适用于行内元素 */
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }

</style>
