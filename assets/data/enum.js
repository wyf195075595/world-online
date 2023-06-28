// 技能职业类型 https://www.fastmock.site/mock/a75253fac8aad5461c1f262f1515fc63/api/getOccupationType
const skillOccupationType = [
  {name: '侠客', value: 1},
  {name: '战士', value: 2},
  {name: '法师', value: 3},
  {name: '修真', value: 4},
  {name: '贤者', value: 5},
  {name: '武圣', value: 6},
  {name: '枪王', value: 7},
  {name: '装备技', value: 8},
  {name: '宠专属', value: 9},
  {name: '宠勇猛', value: 10},
  {name: '宠迅捷', value: 11},
  {name: '宠睿智', value: 12},
  {name: '怪物技', value: 13},
]

// 职业类型 https://www.fastmock.site/mock/a75253fac8aad5461c1f262f1515fc63/api/getAllSkill
const occupationType = [
  {name: '侠客', value: 1},
  {name: '战士', value: 2},
  {name: '法师', value: 3},
  {name: '修真', value: 4},
  {name: '贤者', value: 5},
  {name: '武圣', value: 6},
  {name: '枪王', value: 7},
]

// 技能类型
const skillType = [
  {name: '主动技能', value: 1},
  {name: '自动技能', value: 2},
  {name: '被动技能', value: 3},
]

// 工具箱列表
const toolList = [
  {title: '免费首充', icon: '/assets/images/tool.png'},
  {title: '玩家摆摊', icon: '/assets/images/tool.png'},
  {title: '技能大全', icon: '/assets/images/tool.png'},
  {title: '玩家排行', icon: '/assets/images/tool.png'},
  {title: '宠物图鉴', icon: '/assets/images/tool.png'},
  {title: '装备图鉴', icon: '/assets/images/tool.png'},
  {title: '攻略文章', icon: '/assets/images/tool.png'},
  {title: '开服合区', icon: '/assets/images/tool.png'},
  {title: '不良玩家', icon: '/assets/images/tool.png'},
  {title: '答题题库', icon: '/assets/images/tool.png'},
  {title: '状态大全', icon: '/assets/images/tool.png'},
  {title: '关于我们', icon: '/assets/images/tool.png'},
]

// 装备类型
const equipmentTypes = [
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
]

// 等级区间
const levels = [
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
]

// 品质级别
const qualitys = [
  {value: '', label: '无限制'},
  {value: 1, label: '普通'},
  {value: 2, label: '精致'},
  {value: 3, label: '稀有'},
  {value: 4, label: '史诗'},
  {value: 5, label: '传说'}
]

// 轮播图数据
const swipeList = [
  {
    title: 't1', 
    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.haote.com%2Fupload%2Fsoft%2F202103%2F31%2F%2F161715605038806.jpg&refer=http%3A%2F%2Fimg.haote.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657270666&t=d4e17194d57eb7dbd3616ca0582ca520'
  },
  {
    title: 't2', 
    src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.119you.com%2Fupload%2Fresources%2Fimage%2F2015%2F12%2F01%2F46987_500x500.jpg%3F1448899377000&refer=http%3A%2F%2Fwww.119you.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657270666&t=9d13ccda43fbfbb1f4e5402b3e817256'
  },
  {
    title: 't3', 
    src: 'https://img1.baidu.com/it/u=426498024,4053091482&fm=253&fmt=auto&app=138&f=JPEG?w=480&h=320'
  }
]

// 状态大全
const status = [
  {id: 1  ,name: '火烧', type: '状态'},
  {id: 2  ,name: '流血', type: '状态'},
  {id: 3  ,name: '中毒', type: '状态'},
  {id: 4  ,name: '衰弱', type: '状态'},
  {id: 5  ,name: '减速', type: '状态'},
  {id: 6  ,name: '减防', type: '状态'},
  {id: 7  ,name: '禁言', type: '状态'},
  {id: 8  ,name: '定身', type: '状态'},
  {id: 9  ,name: '封技', type: '状态'},
  {id: 10 ,name: '封魔', type: '状态'},
  {id: 11 ,name: '混乱', type: '状态'},
  {id: 12 ,name: '驱逐', type: '状态'},
  {id: 13 ,name: '复活', type: '状态'},
  {id: 14 ,name: '死者苏生', type: '状态'},
  {id: 15 ,name: '不死意志', type: '状态'},
  {id: 16 ,name: '死亡傀儡', type: '状态'},
  {id: 17 ,name: '减益', type: '状态'},
  {id: 18 ,name: '属性减少', type: '状态'},
  {id: 19 ,name: '物攻无效	', type: '状态'},
  {id: 20 ,name: '魔攻无效', type: '状态'},
  {id: 21 ,name: '幻影', type: '状态'},
  {id: 22 ,name: '清除增益', type: '状态'},
  {id: 23 ,name: '清魔攻无效', type: '状态'},
  {id: 24 ,name: '清除减益', type: '状态'},
  {id: 25 ,name: '属性增加', type: '状态'},
  {id: 26 ,name: '宠物协防', type: '状态'},
  
  {id: 27 ,name: '武伤增加', type: '武器伤害'},
  {id: 28 ,name: '剑伤增加', type: '武器伤害'},
  {id: 29 ,name: '刀伤增加', type: '武器伤害'},
  {id: 30 ,name: '长柄伤增加', type: '武器伤害'},
  {id: 31 ,name: '法球伤增', type: '武器伤害'},
  {id: 32 ,name: '加远程伤增加', type: '武器伤害'},
  {id: 33 ,name: '重型伤增加', type: '武器伤害'},
  {id: 34 ,name: '空手伤增加', type: '武器伤害'},
  {id: 35 ,name: '法杖伤增加', type: '武器伤害'},
  
  {id: 36 ,name: '攻次增加', type: '攻击次数'},
  {id: 37 ,name: '剑攻次增加', type: '攻击次数'},
  {id: 38 ,name: '刀攻次增加', type: '攻击次数'},
  {id: 39 ,name: '长柄攻次增加', type: '攻击次数'},
  {id: 40 ,name: '法球攻次增加', type: '攻击次数'},
  {id: 41 ,name: '远程攻次增加', type: '攻击次数'},
  {id: 42 ,name: '重型攻次增加', type: '攻击次数'},
  {id: 43 ,name: '空手攻次增加', type: '攻击次数'},
  {id: 44 ,name: '法杖攻次增加', type: '攻击次数'},

  {id: 45 ,name: '无视洞察', type: '无视属性'},
  {id: 46 ,name: '无视伤免', type: '无视属性'},
  {id: 47 ,name: '无视抵抗', type: '无视属性'},
  {id: 48 ,name: '无视格挡', type: '无视属性'},
  {id: 49 ,name: '无视反击', type: '无视属性'},
  {id: 50 ,name: '无视魔反', type: '无视属性'},
  {id: 51 ,name: '无视防御', type: '无视属性'},
  {id: 52 ,name: '无视魔防', type: '无视属性'},
  
  {id: 53 ,name: '全减益免疫', type: '免疫状态'},
  {id: 54 ,name: '免疫封魔', type: '免疫状态'},
  {id: 55 ,name: '免疫封技', type: '免疫状态'},
  {id: 56 ,name: '免疫定身', type: '免疫状态'},
  {id: 57 ,name: '免疫禁言', type: '免疫状态'},
  {id: 58 ,name: '免疫混乱', type: '免疫状态'},
  
  {id: 59 ,name: '回血', type: '血蓝盾'},
  {id: 60 ,name: '回蓝', type: '血蓝盾'},
  {id: 61 ,name: '百分比回血', type: '血蓝盾'},
  {id: 62 ,name: '百分比回蓝', type: '血蓝盾'},
  {id: 63 ,name: '吸血增加', type: '血蓝盾'},
  {id: 64 ,name: '吸蓝增加', type: '血蓝盾'},
  {id: 65 ,name: '加盾', type: '血蓝盾'},
  {id: 66 ,name: '扣血', type: '血蓝盾'},
  {id: 67 ,name: '扣蓝', type: '血蓝盾'},
  {id: 68 ,name: '百分比扣血', type: '血蓝盾'},
  {id: 69 ,name: '百分比扣蓝', type: '血蓝盾'},
  {id: 70 ,name: '消耗生命', type: '血蓝盾'},
  {id: 71 ,name: '扣盾', type: '血蓝盾'},
  
  {id: 72 ,name: '力量增加', type: '属性增加'},
  {id: 73 ,name: '智力增加', type: '属性增加'},
  {id: 74 ,name: '感知增加', type: '属性增加'},
  {id: 75 ,name: '敏捷增加', type: '属性增加'},
  {id: 76 ,name: '体质增加', type: '属性增加'},
  {id: 77 ,name: '伤害增加', type: '属性增加'},
  {id: 78 ,name: '攻击增加', type: '属性增加'},
  {id: 79 ,name: '魔攻增加', type: '属性增加'},
  {id: 80 ,name: '命中增加', type: '属性增加'},
  {id: 81 ,name: '魔命增加', type: '属性增加'},
  {id: 82 ,name: '破甲增加', type: '属性增加'},
  {id: 83 ,name: '魔穿增加', type: '属性增加'},
  {id: 84 ,name: '致命增加', type: '属性增加'},
  {id: 85 ,name: '生命增加', type: '属性增加'},
  {id: 86 ,name: '法力增加', type: '属性增加'},
  {id: 87 ,name: '属性增加', type: '属性增加'},
  {id: 88 ,name: '速度增加', type: '属性增加'},
  {id: 89 ,name: '防御增加', type: '属性增加'},
  {id: 90 ,name: '魔防增加', type: '属性增加'},
  {id: 91 ,name: '伤免增加', type: '属性增加'},
  {id: 92 ,name: '格挡增加', type: '属性增加'},
  {id: 93 ,name: '反击增加', type: '属性增加'},
  {id: 94 ,name: '魔反增加', type: '属性增加'},
  {id: 95 ,name: '躲闪增加', type: '属性增加'},
  {id: 96 ,name: '洞察增加', type: '属性增加'},
  {id: 97 ,name: '抵抗增加', type: '属性增加'},
  {id: 98 ,name: '法盾增加', type: '属性增加'},
  {id: 99 ,name: '宠属性增加', type: '属性增加'},
  {id: 100,name: '扣盾', type: '属性增加'},
  
  {id: 101,name: '降低攻击', type: '属性降低'},
  {id: 102,name: '降低攻次', type: '属性降低'},
  {id: 103,name: '降低伤免', type: '属性降低'},
  {id: 104,name: '降低防御', type: '属性降低'},
  {id: 105,name: '降低魔防', type: '属性降低'},
  {id: 106,name: '降低速度', type: '属性降低'},
  {id: 107,name: '降低洞察', type: '属性降低'},
  {id: 108,name: '降低命中', type: '属性降低'},
  {id: 109,name: '降低魔命', type: '属性降低'},
  {id: 110,name: '降低反击', type: '属性降低'},
  {id: 111,name: '降低魔反', type: '属性降低'},
  {id: 112,name: '降低格挡', type: '属性降低'},
  {id: 113,name: '降低抵抗', type: '属性降低'},
  {id: 114,name: '降低躲闪', type: '属性降低'},
  {id: 115,name: '降低法盾', type: '属性降低'},
  {id: 116,name: '降低回蓝', type: '属性降低'}
]

// 攻击方式
const attackModes = [
  {id: 1  ,name: '近身穿刺攻击'},
  {id: 2  ,name: '近身劈砍攻击'},
  {id: 3  ,name: '远程穿刺攻击'},
  {id: 4  ,name: '祝福'},
  {id: 5  ,name: '诅咒'},
  {id: 6  ,name: '魔法攻击'},
]

// 攻击范围
const attackRanges = [
  {id: 1  ,name: '敌单体'},
  {id: 2  ,name: '我单体'},
  {id: 3  ,name: '自身'},
  {id: 4  ,name: '敌前后两人'},
  {id: 5  ,name: '敌正方'},// 正方形 4人
  {id: 6  ,name: '敌十字'},// 十字架样式 4人，三排敌人则中5人
  {id: 7  ,name: '我十字'},// 十字架样式 4人，三排敌人则中5人
  {id: 8  ,name: '敌上下三人'},
  {id: 9  ,name: '敌六人长方'},// 长方行6人
  {id: 10 ,name: '敌全体'},
  {id: 11 ,name: '我全体'},
]

// 武器限制
const armsLimitations = [
  {id: 1  ,name: '无限制'},
  {id: 2  ,name: '轻剑、轻刀'},
  {id: 3  ,name: '空手或单手持武器'},
  {id: 4  ,name: '空手'},
  {id: 5  ,name: '剑类武器限制'},
  {id: 6  ,name: '刀类武器限制'},
  {id: 7  ,name: '我全体'},
  {id: 8  ,name: '长柄武器'},
  {id: 9  ,name: '轻弩、重弩、弓'},
]


module.exports = {
  skillOccupationType,
  occupationType,
  skillType,
  toolList,
  equipmentTypes,
  levels,
  qualitys,
  swipeList,
  status,
  attackModes,
  attackRanges,
  armsLimitations,
}