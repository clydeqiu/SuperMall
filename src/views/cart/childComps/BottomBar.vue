<template>
  <div class='bottom-bar'>
    <check-button class="select-all" @checkBtnClick = "checkBtnClick" v-model="isSelectAll"></check-button>
    <span>全选</span>
    <span class="total-price">合计：¥{{totalPrice}}</span>
    <span class="buy-product">去结算 ({{selCartCount}})</span>
  </div>
</template>

<script>
import CheckButton from './CheckButton';
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {

  },
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    isSelectAll() {
      return this.$store.getters.cartList.find(item => item.checked === false) === undefined;
    },
    selCartCount() {
      return this.$store.getters.selCartCount;
    }
  },
  created () {

  },
  methods: {
    checkBtnClick() {
      // 1、判断是否有未选中的
      let hasNoCheck = this.$store.getters.cartList.find(item => !item.checked);
      if(hasNoCheck) {
        this.$store.getters.cartList.forEach(val => {
          val.checked = true;
        });
      }else {
        this.$store.getters.cartList.forEach(val => {
          val.checked = false;
        });
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    width: 100%;
    height: 44px;
    position: fixed;
    bottom: 49px;
    background-color: #d9d9d9;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    padding-left: 35px;
    line-height: 44px;
    box-sizing: border-box;
    color: #888;
    font-size: 14px
  }
  .select-all{
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }
  .total-price {
    margin-left: 30px;
    font-size: 16px;
    color: #555;
  }
  .buy-product {
    background-color: orangered;
    border-radius: 4px 0 0 4px;
    color: #fff;
    width: 100px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    float: right;
    right: 10px;
    box-shadow: 0 -2px 3px rgba(1, 1, 1, .2);
  }
</style>
