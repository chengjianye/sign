import request from '@/utils/request';

//首页接口
export let homeDate = params => {
  return request.post('https://jbiz.share1diantong.com/as/index/cate/v1', params)
}

//banner接口
export let bannerDate = () => {
  return request.post('https://39916353.share1diantong.com/v1/home/index')
}

//热门搜索接口
export let hotDate = () => {
  return request.post('https://jbiz.share1diantong.com/fa053/search/recommendKw')
}

//搜索接口
export let searchDate = (params) => {
  return request.post('https://jbiz.share1diantong.com/fa053/search/associateKw', params)
}
