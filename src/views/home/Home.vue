<template>
  <div id="home" class='wrapper'>
    <tab-control :titles= "['流行','新款','精选']" 
                  class= "tab-fixed"
                  v-show= "isTabFixed"
                  @tabClick= "tabClick">
    </tab-control>
    <nav-bar class="home-nav">
      <div slot='center'>购物街</div>
    </nav-bar>
    <scroll class="content" 
            ref= "scroll" 
            :probe-type= "3" 
            @pullingUp= "loadMore"
            :pull-up-load="true"
            :data= "showGoods"
            @scroll="contentScroll">
      <home-swiper :banners = "banners" @imageLoad= 'imageLoad' ref="hSwiper"></home-swiper>
      <recommend-view :recommends = "recommends"></recommend-view>
      <feature-view/>
      <tab-control :titles= "['流行','新款','精选']" 
                  ref= "tabControl"
                  class= "tab-control"
                  @tabClick= "tabClick">
      </tab-control>
      <good-list :goods= "showGoods"/>
    </scroll>
    <back-top class="backtop" @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'common/navBar/NavBar'
import Scroll from "common/scroll/Scroll";

import TabControl from 'content/tabControl/TabControl'
import BackTop from 'content/backTop/BackTop'
import GoodList from 'content/goods/GoodList';

import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import HomeSwiper from './childComps/HomeSwiper'
import {getHomeMultidata, getHomeGoods} from 'network/home'

import { debounce } from "@/common/utils";

import { backTopMixin } from "@/common/mixin";


export default {
  name: 'Home',
  data () {
    return {
      isTabFixed: false,
      currentType: 'pop',
      goods: {
        'pop': {page:0,list:[]},
        'new': {page:0,list:[]},
        'sell': {page:0,list:[]},
      },
      banners:[],
      recommends: [],
    }
  },
  mixins: [backTopMixin],
  props: {
    
  },
  components: {
    NavBar,
    Scroll,

    TabControl,
    BackTop,
    GoodList,

    RecommendView,
    FeatureView,
    HomeSwiper
  },
  activated: function() {
    this.$refs.hSwiper.startTimer();
  },
  deactivated: function() {
    this.$refs.hSwiper.stopTimer();

  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  watch: {

  },
  created () {
    this.getHomeMultidata();
    this.getShowGoods('pop')
    this.getShowGoods('new')
    this.getShowGoods('sell')
  },
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
    })
  },
  methods: {
    imageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    loadMore() {
      this.getShowGoods(this.currentType)
    },
    getShowGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      })
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list || []; 
        this.recommends = res.data.recommend.list;       
      })
    },
    contentScroll(position){
      // 决定tabFixed是否显示
      this.isTabFixed = position.y < -this.tabOffsetTop
      this.isShowBackTop = position.y < -800
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl.currentIndex = index;
    }
  }
}
</script>

<style scoped>
  #home{
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #FFF;
    font-size: 16px;
    z-index: 10;
  }
  /* 子绝父相 */
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-fixed{
    position: fixed;
    top: 43px;
    left: 0;
    right: 0;
    z-index: 10;
  }
</style>
