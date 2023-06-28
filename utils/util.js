const {
  attackModes,
  attackRanges,
  armsLimitations,
  status,
  ...enums
} = require('@assets/data/enum')
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/**
 * 小程序初始化缓存
 * @param {Object}  obj
 * @param {Boolean} obj.clear 初始化前强制清除所有缓存
 * @param {Arrar} obj.cacheList 缓存参数信息
 * @param {string} obj.lcacheLst.key 缓存的键值
 * @param {string} obj.cacheList.path 缓存数据路径
 * @param {any} obj.list.data 缓存数据路径
 */
function initCaches(obj = {cacheList: [], clear: false}) {
  if(obj.clear) wx.clearStorageSync()
  obj.cacheList.forEach(item => {
    // 检查是有历史否缓存
    const cache = wx.getStorageSync(item.key)
    // 缓存所有枚举类型
    if(!cache) {
      console.log('无历史缓存，初始化');
      try {
        if(item.path) {
          // require(变量) 会报错，这里是因为新版本增加了无依赖分析的功能，这个文件被当成无依赖文件了
          const datas  = require(item.path)
          wx.setStorageSync(item.key, datas)
        } else {
          wx.setStorageSync(item.key, item.data)
        }
      } catch (error) {
        console.error('初始化缓存出错:', error);
      }
    } else {
      console.log('使用历史缓存');
    }
  })
}
/**
 * 将code转为对应name
 * @param {sting} code 要转换的code
 * @param {array} fromData code对应的枚举
 */
function getNameByCode(code, key) {
  return enums[key].find(ele=> ele.value === code).name
}

/**
 * 将对象转化为路径参数
 * @param {Object} params 
 */
function formatParams(params = {}) {
  let keys = Object.keys(params);
  return keys.reduce((str,key, index)=> {
    let cur = params[key] || ''
    console.log(cur, index)
    if(index == 0) {
      str += `?${key}=${cur}`
    } else {
      str += `&${key}=${cur}`
    }
    return str
  }, '')
}
/**
 * 将技能附加状态从code转name
 * @param {array} tags 
 */
function getTagsName(tags) {
  return tags.map(id=> {
    return status.find(ele=> ele.id === id).name
  })
}
/**
 * 将攻击方式、范围、限制从code转name
 * @param {object} 技能详情数据
 */
function getDiscsArray(data) {
  let attackMode = attackModes.find(ele=> ele.id === data.attackMode)
  let attackRange = attackRanges.find(ele=> ele.id === data.attackRange)
  let armsLimitation = armsLimitations.find(ele=> ele.id === data.armsLimitation)
  return [
    attackMode?.name,
    attackRange?.name,
    armsLimitation?.name
  ].filter(ele=>ele)
}

/**
 * 格式化技能数据
 * @param {aray} data 
 */
function formatSkillData(data) {
  return data.map(item=> {
    console.log(item)
    let discs =  getDiscsArray(item)
    return {
      ...item,
      attackMode: discs[0],
      attackRange: discs[1],
      armsLimitation: discs[2],
      tags: getTagsName(item.tags),
      discs
    }
  })
}

module.exports = {
  formatTime,
  formatParams,
  initCaches,
  formatSkillData,
  getNameByCode
}
