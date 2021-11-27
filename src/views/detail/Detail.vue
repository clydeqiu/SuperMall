<template>
  <div class= 'detail'>
    <detail-nav-bar class= "detail-nav" :current-index="currentIndex" @itemClick = "itemClick"></detail-nav-bar>
    <scroll class= "content" 
            ref= "scroll" 
            @scroll= "contentScroll"
            :probe-type= "3">
      <div>
        <detail-swiper ref="base" :top-images= "topImages"></detail-swiper>
        <detail-base-info :goods= "goods" ></detail-base-info>
        <detail-shop-info :shop= "shop"></detail-shop-info>
        <detail-goods-info :detail-info= "detailInfo"></detail-goods-info>
        <detail-param-info ref="param" :param-info= "paramInfo"></detail-param-info>
        <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
        <detail-recommend-info ref="recommend" :recommend-list="recommendList"></detail-recommend-info>
      </div>
    </scroll> 
    <detail-bottom-bar @addToCart= "addToCart"></detail-bottom-bar>
    <back-top @click.native= "backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import Scroll from 'common/scroll/Scroll'
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailBottomBar from './childComps/DetailBottomBar'
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailParamInfo from './childComps/DetailParamInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import DetailRecommendInfo from './childComps/DetailRecommendInfo'

import BackTop from 'content/backTop/BackTop'
import { backTopMixin } from "@/common/mixin.js";

import { getDetail, getRecommend, Goods, Shop, GoodsParams } from "network/detail";

export default {
  name: '',
  data () {
    return {
      iid: '',
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      currentIndex: 0,
      // 4个主题的高度
      themeTops: [],
    }
  },
  mixins: [backTopMixin],
  props: {

  },
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,

    DetailBottomBar,
    BackTop
  },
  computed: {

  },
  created () {
    this._getDetailData();
    this._getRecommend();
  },
  updated () {
    // 获取需要的四个offsetTop
    this._getOffsetTops()
  },
  mounted() {

  },
  methods: {
    addToCart() {
      // 创建对象
      const obj = {};
      obj.iid = this.iid;
      obj.imgUrl = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.nowPrice;
      // 添加到store中
      this.$store.commit('addCart',obj);
      alert('加入成功')
    },
    itemClick(index){
      this.currentIndex = index;
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 200)
    },
    _getOffsetTops() {
      this.$nextTick(() => {
        this.themeTops = [];
        this.themeTops.push(this.$refs.base.$el.offsetTop);
        this.themeTops.push(this.$refs.param.$el.offsetTop);
        this.themeTops.push(this.$refs.comment.$el.offsetTop);
        this.themeTops.push(this.$refs.recommend.$el.offsetTop);
        this.themeTops.push(Number.MAX_VALUE)
        this.$refs.scroll.refresh();
      });
      console.log(this.themeTops);
    },
    _getRecommend() {
      getRecommend().then((res, error) => {
        if(error) return;
        this.recommendList = res.data.list;
        console.log(this.recommendList);
      })
    },
    async _getDetailData() {
      let iid = this.$route.query.iid;
      this.iid = iid;
      console.log(iid);
      await getDetail(iid).then((res)=> {
        const data = res.result;
        // 顶部
        this.topImages = data.itemInfo.topImages;
        // 商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        this.shop = new Shop(data.shopInfo)

        this.detailInfo = data.detailInfo;
        // 保存参数信息
        this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule);
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      })

    },
    contentScroll(pos){
      this.isShowBackTop= pos.y < -700;
      // 2.监听滚动到哪一个主题
      this._listenScrollTheme(-pos.y)
      
    },
    _listenScrollTheme(position) {
      let length = this.themeTops.length;
      for(let i = 0; i< length; i++) {
        let iPos = this.themeTops[i];
        if(position >= iPos && position < this.themeTops[i+1]){
          if(this.currentIndex !== i) this.currentIndex = i;
          break;
        }
      }
    }
  }
}
</script>

<style scoped>
  .detail{
    height: 100vh;
    position: relative;
    z-index: 9;
    background: #fff;
  }
  .detail-nav{
    position: relative;
    background: #fff;
    z-index: 9;
  }
  .content{
    height: calc(100vh - 44px - 58px);
    overflow: hidden;
  }

</style>
