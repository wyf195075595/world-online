// pages/skillDetail/skillDetail.js
const {getNameByCode} = require('@utils/util')
const global = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('技能详情页面', options);
    let data = global.currentSkill;
    this.setData({
      test: {
        ...data,
        tags: [
          getNameByCode(data.skillOccupationType, 'skillOccupationType'),
          getNameByCode(data.skillType, 'skillType'),
          ...data.tags
        ]
      }
    })
    // const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    // eventChannel.emit('someEvent', {data: 'test'});
    // // 监听 acceptDataFromOpenerPage 事件，获取上一页面通过 eventChannel 传送到当前页面的数据
    // eventChannel.on('acceptDataFromOpenerPage', function(data) {
    //   console.log('我是详情页 acceptDataFromOpenerPage 监听事件：', data)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.setNavigationBarTitle({
      title: this.data.test.name
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})