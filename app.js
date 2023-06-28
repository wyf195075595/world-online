// app.js
const { initCaches } = require('@utils/util.js')
App({
  onLaunch() {
    console.log(initCaches);
    // 展示本地存储能力, 此处为小程序初始化缓存
    initCaches({
      clear: true,
      cacheList: [
        {key: 'logs', data: Date.now()},
        {key: 'enum', data: require('@assets/data/enum.js')},
      ]
    })
    
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('登录成功：', res);
      }
    })
  },
  globalData: {
    userInfo: null,
    currentSkill: null,// 当前点击技能详情
  }
})
