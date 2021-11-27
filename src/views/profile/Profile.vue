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

    <list-view :list-data="orderList" class="order-list"></list-view>
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
      }
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
    margin-top: 12px;
  }
</style>
