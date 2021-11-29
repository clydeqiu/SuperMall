<template>
  <div class='profile'>
    <nav-bar class="nav-bar">
      <div slot="center">我的商城</div>
    </nav-bar>
    <!--1.单独封装一个组件: 利用slot知识点-->
    <UserInfo>
      <div class="user-phone" slot="user-nickname">{{userName}}</div>
      <div class="user-phone" slot="user-phone">150****3212</div>
    </UserInfo>
    <!-- 2、暂时封装下 -->
    <Section :sectionInfo = 'sectionInfo'></Section>

    <list-view :list-data="orderList" class="order-list" @itemClick= "itemClick"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
 </div>
</template>

<script>
import NavBar from 'common/navBar/NavBar'

import UserInfo from './childComps/UserInfo'
import Section from './childComps/Section'
import ListView from './childComps/ListView'
export default {
  name: '',
  data () {
    return {
      userName: '十二少',
      sectionInfo: {
        balance: '100.00',
        discount: '3',
        rate: '1000'
      },
      orderList: [
        {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
        {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
        {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
      ],
      serviceList: [
        {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
        {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
      ]
    }
  },
  props: {
    
  },
  components: {
    NavBar,
    UserInfo,
    Section,
    ListView
  },
  computed: {

  },
  created () {

  },
  methods: {
    itemClick(data) {
      console.log(data);
    }
  }
}
</script>

<style scoped>
  .profile {
    background-color: #f2f2f2;
  }
  .nav-bar{
    background: var(--color-tint);
    font-size: 16px;
    color: #fff;
  }
  .user-phone{
    font-size: 16px;
  }

  .order-list, .service-list {
    margin-top: 8px;
  }
</style>
