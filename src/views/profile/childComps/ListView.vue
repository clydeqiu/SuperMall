<template>
  <div class='list' >
    <div v-for= "(item, index) in listData" :key= "index" class= "item" @click="itemClick(index)">
      <span class="icon">
        <svg :fill= "item.iconColor">
          <use :xlink:href= "item.icon"></use>
        </svg>
      </span>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  data () {
    return {
    }
  },
  props: {
    listData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {

  },
  computed: {

  },
  created () {

  },
  methods: {
    itemClick(index) {
      this.$emit('itemClick',this.listData[index].info)
    }
  }
}
</script>

<style scoped>
  .list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }
  .list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
  }
  .icon svg {
    width: 18px;
    height: 18px;
  }
  .item .icon {
    position: absolute;
    top: 3px;
    left: 16px;
  }
  .item .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .item:last-of-type .info{
    border-bottom: none;
  }
</style>
