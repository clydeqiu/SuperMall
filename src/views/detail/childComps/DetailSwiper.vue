<template>
  <swiper class="detail-swiper" v-if="topImages.length">
    <swiper-item class="swiper-item" v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'common/swiper';
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {
    topImages:{
      type: Array,
      default() {
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

  }
}
</script>

<style scoped>
  .swiper-item{
    width: 100%;
    height: 300px;
    text-align: center;
  }
</style>
