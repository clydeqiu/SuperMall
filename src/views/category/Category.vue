<template>
  <div class="category">
    <nav-bar class="nav-bar"> 
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <!-- 左侧列表 -->
      <tab-menu class="tab-menu" :categories= "categories" @selectItem= "selectItem"/>
      <!-- 右侧推荐展示 -->
      <scroll id="tab-content" :data="[categoryData]">
        <tab-content-category :subcategories = "showSubcategory"></tab-content-category>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from 'common/navBar/NavBar'
import Scroll from 'common/scroll/Scroll';

import TabMenu from './childComps/TabMenu'
import TabContentCategory from './childComps/TabContentCategory'

import { getCategory, getSubCategory, getCategoryDetail } from "network/category";
export default {
  name: '',
  data () {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1
    }
  },
  props: {

  },
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    }
  },
  created () {
    // 请求分类数据
    this._getCategory()
  },
  methods: {
    /**
     * 获取分类数据、 每个类别的子数据
     */
    _getCategory() {
      getCategory().then(res=> {
        // 1、获取分类数据
        this.categories = res.data.category.list;
        // 2、初始化每个类别的子数据
        for(let i= 0; i<this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': [],
            }
          }
        }
        // 3、 请求第一个分类的数据
        this._getSubCategories(0)

      })
    },
    /**
     * 获取选中分类下的 pop，new，sell
     */
    _getSubCategories(index) {
      this.currentIndex = index
      const mailKey = this.categories[index].maitKey;
      getSubCategory(mailKey).then(res=> {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = {...this.categoryData}
        this._getCategoryDetail('pop')
        this._getCategoryDetail('new')
        this._getCategoryDetail('sell')
      })
    },
    /**
     * 获取某个分类下不同类型商品  并整合到数据结构中
     */
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then(res=> {
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    /**
     * 事件响应相关方法
     */
    selectItem(index) {
      this._getSubCategories(index)
    },
  }
}
</script>

<style scoped>
  .category{
    height: 100vh;
  }
  .nav-bar{
    background: var(--color-tint);
    font-size: 16px;
    color: #fff;
    z-index: 20;
  }
  .tab-menu{
    overflow: hidden;
    height: calc(100vh - 44px - 49px);
  }
  #tab-content {
    height: calc(100vh - 44px - 49px);
    flex: 1;
  }
  .content{
    display: flex;
  }
</style>

