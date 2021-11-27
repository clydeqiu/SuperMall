<template>
  <div class='grid-view' ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridView',
  data () {
    return {

    }
  },
  props: {
    cols: {
      type: Number,
      default: 2
    },
     /*上下边距 */
    vMargin: {
      type: Number,
      default: 8
    },
    /*左右边距 */
    hMargin: {
      type: Number,
      default: 8
    },  
    // 上下间距
    lineSpace: {
      type: Number,
      default: 8
    },
    // 左右间距
    itemSpace: {
      type: Number,
      default: 8
    },
   
  },
  components: {

  },
  computed: {

  },
  created () {

  },
  mounted() {
    setTimeout(this._autoLayout, 20)
  },
  updated() {
    setTimeout(this._autoLayout, 20)
  },
  methods: {
    _autoLayout() {
      let gridEle = this.$refs.gridView;
      let children = gridEle.children;

      gridEle.style.padding = `${this.vMargin}px ${this.hMargin}px`
      const childLen = children.length;

      const itemWidth = (gridEle.clientWidth - 2 * this.hMargin - (this.cols - 1) * this.itemSpace) / this.cols;
      
      for(let i=0; i< childLen; i++) {
        let item = children[i];
        item.style.width = itemWidth + 'px';
        if((i+1) % this.cols !== 0) {
          children[i].style.marginRight = this.itemSpace + 'px';
        }
        if(i >= this.cols) {
          children[i].style.marginTop = this.lineSpace + 'px';
        }
      }
    }
  }
}
</script>

<style scoped>
  .grid-view{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
