// pages/skill/skill.js
const {skillOccupationType, skillType} = require('@assets/data/enum')
const { allSkillArray } = require('@assets/data/data')
const { formatSkillData } = require('@utils/util')
const global = getApp()
const cacheList = formatSkillData(allSkillArray)
const {getTeamList} = require('@utils/api')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputVal: "",
    occupationList: skillOccupationType,
    occupationIndex: 1,// 技能职业类型
    skillType: 1,// 技能类型
    skillTypes: skillType,
    test: []
  },
  setInputValue(e) {
    this.setData({inputVal: e.detail.value})
  },
  search: function () {
    let keyWord = this.data.inputVal
    wx.navigateTo({
      url: `/pages/skillSearchPage/skillSearchPage?keyword=${keyWord}`,
    })
  },
  // 技能职业类型切换
  changActive(e) {
    let index = e.target.dataset.index;
    if(Number.isInteger(index)) {
      this.setData({
        occupationIndex: index
      }, ()=> {
        this.filterSkill()
      })
    }
  },
  // 技能类型切换
  changeSkillType(e) {
    let type = e.target.dataset.type;
    if(type) {
      this.setData({
        skillType: type
      }, ()=> {
        this.filterSkill()
      })
    }
  },
  // 类型变化，过滤数据
  filterSkill() {
    let params = {
      occupationIndex: this.data.occupationIndex,
      skillType: this.data.skillType,
    }
    let f1 = cacheList.filter(ele=> ele.skillType == params.skillType)
    let rs = f1.filter(ele =>  ele.skillOccupationType == params.occupationIndex)
    this.setData({
      test: rs
    })
    return rs
  },
  // 技能列表点击进入详情
  tabTest(e) {
    let index = e.currentTarget.dataset.id;
    let detail = this.data.test[index]
    global.currentSkill = detail
    console.log('pane点击事件：', index, this.data.test[index]);
    wx.navigateTo({
      url: '/pages/skillDetail/skillDetail?id=123',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // getTeamList().then(res=> {
    //   console.log('获取接口数据：', res);
    // })
    this.filterSkill()
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