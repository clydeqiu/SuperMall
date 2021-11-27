const getters = {
  cartList(state) {
    return state.cartList
  },
  cartCount(state) {
    const cartList = state.cartList;
    let count = 0
    if(cartList.length > 0){
      cartList.forEach(val=>{
        count += val.count;
      })
    }
    return count;
  },
  selCartCount(state) {
    const cartList = state.cartList;
    let count = 0
    if(cartList.length > 0){
      cartList.forEach(val=>{
        if(val.checked) 
          count += val.count;
      })
    }
    return count;
  },
  totalPrice(state) {
    const cartList = state.cartList;
    let totalPrice = 0
    if(cartList.length > 0){
      cartList.forEach(val=>{
        if(val.checked) 
          totalPrice += val.newPrice * val.count;
      })
    }
    return totalPrice.toFixed(2);
  }
}

export default getters