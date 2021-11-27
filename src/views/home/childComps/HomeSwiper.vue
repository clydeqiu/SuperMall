<template>
  <swiper ref = 'swiper' v-if="banners.length">
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="load">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'common/swiper'
export default {
  name: '',
  data () {
    return {
      isLoad: false
    }
  },
  props: {
    banners:{
      type: Array,
      default () {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  computed: {

  },
  created () {

  },
  methods: {
    stopTimer () {
      this.$refs.swiper.stopTimer();
    },
    startTimer () {
      if (this.$refs.swiper) {
        this.$refs.swiper.startTimer();
      }
    },
    load() {
      this.$emit('imageLoad')
    }
  }
}
</script>

<style scoped>
</style>
