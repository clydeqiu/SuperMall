<template>
  <div class='wrapper' ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data () {
    return {
      scroll: {},
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default:() => {
        return []
      }
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  components: {
  },
  computed: {

  },
  created () {

  },
  watch: {
    data() {
      setTimeout(this.refresh, 100);
    }
  },
  mounted() {
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    
    this.scroll.on('scroll',(pos)=>{
      this.$emit('scroll',pos)
    })

    // 监听上拉到顶部
    this.scroll.on("pullingUp", ()=>{
      this.$emit('pullingUp')
    })

  },
  
  methods: {
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
</style>
