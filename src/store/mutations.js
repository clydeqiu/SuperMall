const mutations = {
  addCart(state, info){
    // 1、 查看是否添加过
    const oldInfo = state.cartList.find(item => item.iid === info.iid);

    console.log(oldInfo, 'oldInfo');
    // 2、+1 或者新添加一条
    if(oldInfo) {
      oldInfo.count += 1;
    }else {
      info.count = 1
      info.checked = false;
      state.cartList.push(info)
    }
  }
}

export default mutations