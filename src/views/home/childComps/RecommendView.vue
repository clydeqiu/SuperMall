<template>
  <div class='recommend'>
    <div v-for="(item,index) in recommends" :key='index'>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  data () {
    return {

    }
  },
  props: {
    recommends:{
      type: Array,
      default() {
        return []
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

  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    background: #fff;
    text-align: center;
    width: 100%;
    font-size: 14px;
    color: #333;
    padding: 5px 10px;
  }
  .recommend div{
    flex: 1;
  }
  img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    border-radius: 50%;
    
  }

</style>
