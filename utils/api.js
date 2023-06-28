//引入封装的reuest请求
const {
  request
} = require('./request.js')

module.exports = {
  getTeamList: ()=> {
    return request({
      url: 'getTeamList'
    });
  }
}