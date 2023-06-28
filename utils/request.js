// 引入config中的url后面点什么就是 什么环境
const {baseUrl} = require('./config.js').dev;

//在这里添加我们的专业域名（二级域名）
const subDomain = 'https://api.gdzhenglu.com';
/*
 *二次封装wx.request
 * 
 */
module.exports = {
  /**
   * 二次封装wx.request
   * {String }url:请求的接口地址
   * {String} method:请求方式 GET,POST....
   * {Object} data:要传递的参数
   * { boolean }isSubDomain:表示是否添加二级子域名 true代表添加, false代表不添加
   */
  request: (options) => {
    const {url, method, data, isSubDomain} = options
    // console.log('这是我封装的ajax请求', baseUrl);
    //这里使用ES6的写法拼接的字符串
    let _url = `${baseUrl}/${isSubDomain ? subDomain: '' }${url}`;
    // console.log(_url);
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: '正在加载',
      });
      wx.request({
        url: _url,
        data: data,
        method: method || "GET",
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          ...options.header
        },
        success: (res) => {
          // console.log('从接口获取到的数据', res);
          let {
            code
          } = res.data;
          if (code === 0) {
            resolve(res.data);
            wx.hideLoading();
          } else {
            wx.showToast({
              title: '数据请求错误',
            })
          }
        },
        fail() {
          reject('接口有误，请检查')
        }
      });

    });
  },
}