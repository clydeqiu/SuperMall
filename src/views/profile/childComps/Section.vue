<template>
  <div class='section'>
    <div class="section-item">
      <div class="number">
        <span class="balance">{{sectionInfo.balance}}</span>元
      </div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="section-item">
      <div class="number">
        <span class="balance">{{sectionInfo.discount}}</span>个
      </div>
      <div class="account-info">我的优惠</div>
    </div>
    <div class="section-item">
      <div class="number">
        <span class="balance">{{sectionInfo.rate}}</span>
      </div>
      <div class="account-info">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {
    sectionInfo: {
      type: Object,
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
  .section {
    display: flex;
  }
  .section-item{
    padding: 10px 0;
    widows: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
    flex: 1;
    font-size: 14px;
  }
  .section-item:last-of-type {
    margin-right: 0;
  }
  .section-item .balance{
    color: var(--color-high-text);
    font-size: 20px;
    font-weight: 700;
    margin-right: 3px;
  }
  .section-item .account-info{
    margin-top: 5px;
  }
  

</style>
