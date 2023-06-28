// pages/equipment/equipment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,
    level: 0,
    quality: 0,
    types: [
      {value: '', label: '全部'},
      {value: 1, label: '剑'},
      {value: 2, label: '刀'},
      {value: 3, label: '仗'},
      {value: 4, label: '弓'},
      {value: 5, label: '弩'},
      {value: 6, label: '重型武器'},
      {value: 7, label: '长柄武器'},
      {value: 8, label: '法器'},
      {value: 9, label: '枪'},
      {value: 10, label: '头'},
      {value: 11, label: '肩'},
      {value: 12, label: '衣'},
      {value: 13, label: '背'},
      {value: 14, label: '戒'},
      {value: 15, label: '链'},
      {value: 16, label: '护符'},
      {value: 17, label: '坐骑'},
      {value: 18, label: '时装'},
    ],
    levels: [
      {value: '', label: '无限制'},
      {value: 1, label: '1-10级'},
      {value: 2, label: '11-20级'},
      {value: 3, label: '21-30级'},
      {value: 4, label: '31-40级'},
      {value: 5, label: '41-50级'},
      {value: 6, label: '51-60级'},
      {value: 7, label: '61-70级'},
      {value: 8, label: '71-80级'},
      {value: 9, label: '81-90级'},
      {value: 10, label: '91-100级'},
    ],
    qualitys: [
      {value: '', label: '无限制'},
      {value: 1, label: '普通'},
      {value: 2, label: '精致'},
      {value: 3, label: '稀有'},
      {value: 4, label: '史诗'},
      {value: 5, label: '传说'}
    ],
    page: {
      current: 1,
      total: 150,
      limit: 20
    },
    zb: [
      {
        name: '恶魔之翼',
        lv: '85',
        price: '暂无参考价'
      },
      {
        name: '天使之翼',
        lv: '85',
        price: '暂无参考价'
      },
      {
        name: '岁月流星护腿(强)',
        lv: '80',
        price: '暂无参考价'
      },
      {
        name: '岁月流星腰带(强)',
        lv: '80',
        price: '暂无参考价'
      },
      {
        name: '干将',
        lv: '80',
        price: '暂无参考价'
      },
      {
        name: '莫邪',
        lv: '80',
        price: '暂无参考价'
      },
      {
        name: '凤凰决',
        lv: '80',
        price: '暂无参考价'
      },
      {
        name: '戮神',
        lv: '80',
        price: '暂无参考价'
      },
      {
        name: '恶魔之翼',
        lv: '85',
        price: '暂无参考价'
      },
      {
        name: '天使之翼',
        lv: '85',
        price: '暂无参考价'
      },
      {
        name: '岁月流星护腿(强)',
        lv: '80',
        price: '暂无参考价'
      },
      {
        name: '岁月流星腰带(强)',
        lv: '80',
        price: '暂无参考价'
      },
      {
        name: '干将',
        lv: '80',
        price: '暂无参考价'
      },
      {
        name: '莫邪',
        lv: '80',
        price: '暂无参考价'
      },
      {
        name: '凤凰决',
        lv: '80',
        price: '暂无参考价'
      },
    ]
  },
  selectChange(obj) {
    let type = obj.target.dataset.id,
        value = obj.detail.value,
        data = {};
    switch (type) {
      case '1':
        data = {type: value}
      break;
      case '2':
        data = {level: value}
      break;
      case '3':
        data = {quality: value}
      break;
    }
    this.setData(data)
  },
  pageChange(obj) {
    let type = obj.target.dataset.type,
        value = this.data.page.current,
        max = this.data.page.total;
    if(type == 'pre') {
      value -= 1
      if(value <= 0) return
    } else {
      value += 1
      if(value >= max) return
    }
    this.setData({
      page: {
        ...this.data.page,
        current: value
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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