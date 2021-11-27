
import request from "./request"

export function getHomeMultidata() {
  return request({
    url: 'home/multidata'
  })
}
export function getHomeGoods(type,page){
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}

export class Recommend {
  constructor(recommendObj){
    this.title = recommendObj.info.title;
    this.imgUrl = recommendObj.url;
  }
}