<template>
  <div class='detail-nav-bar'>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" 
            :key= "index"
            class= "title-item" 
            :class= "{active: index === currentIndex}" 
            @click= "titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/navBar/NavBar'
export default {
  name: '',
  data () {
    return {
      titles: ['商品','参数','评论','推荐'],
    }
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    NavBar
  },
  computed: {

  },
  created () {

  },
  mounted(){

  },
  methods: {
    titleClick(index){
      this.$emit('itemClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .back{
    line-height: 44px;
  }
  .back img{
    margin-top: 11px;
  }
  .title{
    display: flex;
    font-size: 15px;
    font-family: 'Times New Roman', Times, serif;
  }
  .title div{
    flex: 1;
  }
  .active{
    color:var(--color-high-text);
  }
</style>
