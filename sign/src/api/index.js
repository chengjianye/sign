import request from '../utils/request'

export let login = code => {
  console.log(code)
  return request.post('https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code', {
    code
  })
}


// 添加面试
export let addSign = params=>{
  return request.post('/sign', params);
}

// 获取面试列表
export let getSignList = params=>{
  return request.get('/sign', params);
}