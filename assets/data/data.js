// 阵容数据
const teamList = [
  {
    class: 'B',
    name: '元放惊蛰爆法',
    disc: '白嫖阵容',
    picPath: '/assets/images/equipment.png',
    tags: ['9级金龙石法杖','惊蛰王','法师戒指','元放套装','黑月套装'],
    occupation: '法师',
    position: '初阶暴法',
    difficulty: '★',
  },
  {
    class: 'S',
    name: '暗星青鸟9杖爆法',
    disc: '玩法简单，装备固定',
    picPath: '/assets/images/equipment.png',
    tags: ['9级金龙石法杖','青鸾','法师戒指','MJ衣服（世纪纪念版）','黑月套装','暗星套装','无尽世界之光','闪光银月护符','法师戒指'],
    occupation: '法师',
    position: '中阶阶暴法',
    difficulty: '★★',
  },
  {
    class: 'S',
    name: '干将莫邪云剑法',
    disc: '烧钱机器',
    picPath: '/assets/images/equipment.png',
    tags: ['干将','莫邪','棉花糖▪筋斗云','雅典娜的智慧祝福','无尽宇宙之光','流星岁月腰带','庆典护符▪闪耀之星','末日战袍','日落套'],
    occupation: '法师',
    position: '中阶暴法',
    difficulty: '★★',
  },
  {
    class: 'S',
    name: '干将莫邪云剑法',
    disc: '烧钱机器',
    picPath: '/assets/images/equipment.png',
    tags: ['干将','莫邪','棉花糖▪筋斗云','雅典娜的智慧祝福','无尽宇宙之光','流星岁月腰带','庆典护符▪闪耀之星','末日战袍','日落套'],
    occupation: '法师',
    position: '中阶暴法',
    difficulty: '★★',
  },
]

// 技能详情
const skillDetailData = {
  name: '杨家枪法',
  score: '2.0',
  tags: ['武圣技能','主动技能','扣盾','降低伤害','降低反击'],
  effects: ['免伤护盾-2','伤害减免-430,混乱','反击-430'],
  disc: '持续2回合，攻击次数+3，消耗280法力',
  attackMode: '近身穿刺',
  attackRange: '敌单体',
  armsLimitation: '长柄武器',
  equipment: ['炽天使套装'],
  lineupCollocation: '暂无收录',
  analysis: '小玖儿：用处不大，不建议学习'
}


// https://www.fastmock.site/mock/a75253fac8aad5461c1f262f1515fc63/api/getAllSkill
const allSkillArray = [
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '狂风快剑',
    tags: [49,46,48],
    score: '2.0',
    attackMode: 1,
    attackRange: 1,
    armsLimitation: 2,
    effects: ['技能附带无视目标360反击','技能附带无视目标360伤害减免','技能附带无视目标360格挡'],
    disc: '攻击次数+6，消耗220法力',
    equipment: [],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：用处不大，不建议学习'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '北冥神功',
    tags: [67,80,60],
    score: '3.0',
    attackMode: 5,
    attackRange: 1,
    armsLimitation: 1,
    effects: ['燃烧目标-1260的法力','技能附带命中+240','技能附带回复+583法力'],
    disc: '攻击次数+6，消耗220法力',
    equipment: [],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：吸血吸蓝前期可学到10级'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '吸星大法',
    tags: [66,59,80],
    score: '3.0',
    attackMode: 5,
    attackRange: 1,
    armsLimitation: 1,
    effects: ['扣除最大法力值29%','技能附带命中+240','法力-1260'],
    disc: '持续3回合，消耗534法力',
    equipment: ['暗部护肩','混沌护手'],
    lineupCollocation: '暂无收录',
    analysis: '高扣篮，但是单体且为诅咒攻击限制，无视不高没啥用技能'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '惊神指',
    tags: [49,51,5,10],
    score: '2.0',
    attackMode: 1,
    attackRange: 1,
    armsLimitation: 3,
    effects: ['技能附带无视目标660反击','出手速度-980','无视目标5300点物理防御'],
    disc: '持续3回合，攻击次数+4，消耗534法力',
    equipment: [],
    lineupCollocation: '暂无收录',
    analysis: '没作用的技能不建议去学'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '金刚指',
    tags: [46,51,77],
    score: '2.0',
    attackMode: 1,
    attackRange: 4,
    armsLimitation: 3,
    effects: ['附带伤害+4500','技能附带无视目标660伤害减兔','无视目标4700点物理防御'],
    disc: '肖耗220法力',
    equipment: [],
    lineupCollocation: '暂无收录',
    analysis: '虽然有附加伤害前期看着过渡挺好，可惜限制前后两个故而也是没用的技能'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '九阳神剑',
    tags: [77,46,51],
    score: '2.0',
    attackMode: 1,
    attackRange: 5,
    armsLimitation: 3,
    effects: ['附带伤害+2190','无视目标2800点物理防御','伤害减兔-280'],
    disc: '持续4回合，消耗534法力',
    equipment: [],
    lineupCollocation: '暂无收录',
    analysis: '无用技能不推荐学习'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '一阳指',
    tags: [84,91,51],
    score: '2.0',
    attackMode: 1,
    attackRange: 1,
    armsLimitation: 3,
    effects: ['附带致命点+359','附带伤害+4500','无视目标4500点物理防御'],
    disc: '消耗220法力',
    equipment: [],
    lineupCollocation: '暂无收录',
    analysis: '无用技能不推荐学习'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '寒冰绵掌',
    tags: [8,17],
    score: '2.0',
    attackMode: 2,
    attackRange: 1,
    armsLimitation: 4,
    effects: ['命中-546','躲闪-54','魔法命中-546'],
    disc: '持续7回合，消耗220法力',
    equipment: ['暗部护手'],
    lineupCollocation: '暂无收录',
    analysis: '无用技能不推荐学习'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '赤练神掌',
    tags: [68,69,49],
    score: '9.0',
    attackMode: 2,
    attackRange: 1,
    armsLimitation: 4,
    effects: ['造成最大生命值12%的伤害','扣除最大法力值12%','目标反击值-553'],
    disc: '持续5回合，消耗55法力',
    disc1: '中毒状态法力恢复、吸收失效',
    equipment: ['暗部护手','御风护腰'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：百分比扣血扣篮空手捕助的必选技能之一'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '降龙十八掌',
    tags: [48,49,80],
    score: '2.0',
    attackMode: 2,
    attackRange: 9,
    armsLimitation: 4,
    effects: ['附带命中+500','技能附带无视目标705反击','技能附带无视目标500格挡'],
    disc: '消耗300法カ',
    equipment: [],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：无用技能不建议学习'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '万剑诀',
    tags: [80,49],
    score: '8.0',
    attackMode: 1,
    attackRange: 9,
    armsLimitation: 5,
    effects: ['附加强制命中率+24%','目标反击值-240'],
    disc: '消耗534法力',
    equipment: ['古道剑'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：剑类武器限制，武器没有敌六人范围必学技能'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 1,// 主动技能
    name: '天魔邪刀追魂五式',
    tags: [80,69,67,25],
    score: '8.0',
    attackMode: 2,
    attackRange: 1,
    armsLimitation: 6,
    effects: ['目标反击值-385','法力-600，封魔','扣除最大法力值13%'],
    disc: '持续5回合，攻击次数+5，消耗220法力',
    equipment: [],
    lineupCollocation: '无视洞察辅,竹叶破魔刀',
    analysis: '小玖儿：出手双手刀扣篮必学之一，出手少数的扣篮技能之一'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 2,// 自动技能
    name: '乾坤剑诀',
    tags: [36,95,82,18],
    score: '7.0',
    attackMode: 4,
    attackRange: 3,
    armsLimitation: 5,
    effects: ['用剑时攻击次数+7','躲闪+22%','破甲+22%'],
    disc: '持续5回合，消耗400法力',
    equipment: [],
    lineupCollocation: '',
    analysis: '小玖儿：加攻次，自带破甲，玩剑破甲没满的话必选技能'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '飞天御剑流',
    tags: [29,38,84],
    score: '暂无评分',
    armsLimitation: 6,
    effects: ['刀类伤害、耐久+65%','用刀时攻击次数+3','致命点+70'],
    equipment: ['正气护腰','正气软甲','正气软靴','御风护额'],
    lineupCollocation: '竹叶破魔刀',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '鬼影身法',
    tags: [75,88,95],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['敏捷+35%','命中率+30%','躲闪+50'],
    equipment: ['葬送神影甲','葬送影衣','暗部软甲','蜀山软靴','正气护腰','正气软靴','御风护额','敏捷指环','敏捷项链'],
    lineupCollocation: '空手穿刺拳',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '浩然正气',
    tags: [76,85],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['生命上限+890','生命上限+22%','体质+65'],
    equipment: ['正气护额','正气护肩','正气护手','正气护腿','正气护腰','正气软甲','正气软靴'],
    lineupCollocation: '',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '基础刀法',
    tags: [29,80],
    score: '暂无评分',
    armsLimitation: 6,
    effects: ['刀类伤害、耐久+110%','命中+60','体质+65'],
    equipment: ['正气护','腰正气软甲'],
    lineupCollocation: '竹叶破魔刀',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '基础掌法',
    tags: [34,72,80],
    score: '暂无评分',
    armsLimitation: 4,
    effects: ['空手伤害+151%','命中+151','力量+19%'],
    equipment: ['暗部护额','御风软靴','拳王指环'],
    lineupCollocation: '空手穿刺拳',
    analysis: ''
  },{
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '基础剑法',
    tags: [28,80],
    score: '暂无评分',
    armsLimitation: 5,
    effects: ['剑类武器伤害、耐久+65%','命中+80'],
    equipment: ['玫瑰剑'],
    lineupCollocation: '暂无收录',
    analysis: '暂无收录'
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '金刚不坏神功',
    tags: [91,93,85],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['伤害减免+85','反击+125','生命上限+700'],
    equipment: ['御风护腰'],
    lineupCollocation: '暂未收录',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '九霄真经',
    tags: [73,86],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['智力+75','法力上限+45%'],
    equipment: ['冰霜女巫锦裤'],
    lineupCollocation: '暗星青鸟9杖爆法、干将莫邪云剑法',
    analysis: ''
  },{
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '北冥神功',
    tags: [63,64,85],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['基础生命吸收+196','基础法力吸收+196','生命上限+700'],
    equipment: [''],
    lineupCollocation: '',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '九阳神功',
    tags: [60,77,85],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['每回合自动恢复法力+500','伤害减免+65','生命上限+700'],
    equipment: ['蜀山护肩', '混沌护肩'],
    lineupCollocation: '暂未收录',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '两仪八卦掌',
    tags: [43,34,80],
    score: '暂无评分',
    armsLimitation: 4,
    effects: ['空手伤害+151%','空手时攻击次数+3','命中+151'],
    equipment: ['正气护额', '正气护腿'],
    lineupCollocation: '空手穿刺拳',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '烈阳决',
    tags: [46,48,84],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['无视伤害减免+125','无视格挡+125','致命+72'],
    equipment: ['暂未收录'],
    lineupCollocation: '暂未收录',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '龙象般若功',
    tags: [86,90],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['法力上限+400','法力上限+50%','魔法防御力+560'],
    equipment: ['混沌护额','凶天煞'],
    lineupCollocation: '暂未收录',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '逍遥剑法',
    tags: [28,37,95],
    score: '暂无评分',
    armsLimitation: 6,
    effects: ['剑类武器伤害、耐久+65%','用剑时攻击次数+3','躲闪+50'],
    equipment: ['蜀山护额','正气护手','御风护腿'],
    lineupCollocation: '暂未收录',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '天蚕功',
    tags: [59,97,90],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['每回合自动恢复生命+500','状态抵抗值+160','魔法防御力+400'],
    equipment: ['蜀山护腰'],
    lineupCollocation: '暂未收录',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '先天罡气',
    tags: [85,91],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['生命上限+890','生命上限+45%','伤害减免+65'],
    equipment: ['蜀山护手','正气护手','混沌护肩'],
    lineupCollocation: '暂未收录',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '先天无相神功',
    tags: [86,84],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['致命值+80','法力上限+700'],
    equipment: ['蜀山护腿','御风软甲','混沌护额','碧血剑-龙纹'],
    lineupCollocation: '暂未收录',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '熊象巨力功',
    tags: [72],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['力量+75','力量+40%'],
    equipment: ['葬送指环','暗部护腿','正气护额','正气护腿'],
    lineupCollocation: '竹叶破魔刀、空手穿刺拳、炎龙憾地寸芒矛、顶配炎龙寸芒矛',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '轩辕惊天诀',
    tags: [82,84,91],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['致命点+72','伤害减免+72','破甲+24%'],
    equipment: ['古道剑'],
    lineupCollocation: '暂未收录',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '驯兽战斗',
    tags: [26,99],
    skillLv: 20,
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['受到攻击时，所携带宠物30%几率为其承受伤害','宠物体质+30%','宠物生命上限+30%'],
    equipment: ['飞马','新春年兽'],
    lineupCollocation: '暂未收录',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '易筋经',
    tags: [26,99],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['体质+75','生命上限+40%','生命上限+700'],
    equipment: ['暂未收录'],
    lineupCollocation: '暂未收录',
    analysis: ''
  },
  {
    skillOccupationType: 1,// 侠客
    skillType: 3,// 被动技能
    name: '紫电神功',
    tags: [75,88],
    score: '暂无评分',
    armsLimitation: 1,
    effects: ['敏捷+70','出手速度+40%','敏捷+26%'],
    equipment: ['葬送神影甲','葬送影衣','正气护额','正气护腿','御风软靴'],
    lineupCollocation: '无视洞察辅助、空手穿刺拳',
    analysis: ''
  }

  ,
  {
    skillOccupationType: 2,// 战士
    skillType: 1,// 主动技能
    name: '霸王枪法',
    tags: [46,49,77],
    score: '8.0',
    attackMode: 1,
    attackRange: 9,
    armsLimitation: 8,
    effects: ['附带伤害+770','技能附带无视目标350伤害减免','技能附带无视目标350反击'],
    disc: '攻击次数+3，消耗500法力',
    equipment: ['黄金手甲','贪狼撼天戟','秦王破阵'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：附带无视且敌六人范围可作为长柄武器技能的选择之一'
  },
  {
    skillOccupationType: 2,// 战士
    skillType: 2,// 自动技能
    name: '战斗怒吼',
    tags: [78,80],
    score: '7.0',
    attackMode: 4,
    attackRange: 9,
    armsLimitation: 11,
    effects: ['劈砍攻击力+40%,属性增加','穿刺攻击力+40%,属性增加','命中率+26%'],
    disc: '持续4回合，消耗116法力',
    equipment: ['龙鳞腰甲','黄金腿铠'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：全体增攻技能并不多，辅助可以学，可以让暴力增加一些伤害基本上很多副本都合适使用'
  },
  {
    skillOccupationType: 2,// 战士
    skillType: 3,// 被动技能
    name: '远程武器专精',
    tags: [32,41,80],
    score: '暂无评分',
    armsLimitation: 9,  
    effects: ['远程武器伤害、耐久+100%','用远程武器时攻击次数+3','命中+30'],
    equipment: ['黄金头盔'],
    lineupCollocation: '暂未收录',
    analysis: '暂未收录'
  }

  ,
  {
    skillOccupationType: 3,// 法师
    skillType: 1,// 主动技能
    name: '霸王枪法',
    tags: [46,49,77],
    score: '8.0',
    attackMode: 1,
    attackRange: 9,
    armsLimitation: 8,
    effects: ['附带伤害+770','技能附带无视目标350伤害减免','技能附带无视目标350反击'],
    disc: '攻击次数+3，消耗500法力',
    equipment: ['黄金手甲','贪狼撼天戟','秦王破阵'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：附带无视且敌六人范围可作为长柄武器技能的选择之一'
  },
  {
    skillOccupationType: 3,// 法师
    skillType: 2,// 自动技能
    name: '战斗怒吼',
    tags: [78,80],
    score: '7.0',
    attackMode: 4,
    attackRange: 9,
    armsLimitation: 11,
    effects: ['劈砍攻击力+40%,属性增加','穿刺攻击力+40%,属性增加','命中率+26%'],
    disc: '持续4回合，消耗116法力',
    equipment: ['龙鳞腰甲','黄金腿铠'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：全体增攻技能并不多，辅助可以学，可以让暴力增加一些伤害基本上很多副本都合适使用'
  },
  {
    skillOccupationType: 3,// 法师
    skillType: 3,// 被动技能
    name: '远程武器专精',
    tags: [32,41,80],
    score: '暂无评分',
    armsLimitation: 9,  
    effects: ['远程武器伤害、耐久+100%','用远程武器时攻击次数+3','命中+30'],
    equipment: ['黄金头盔'],
    lineupCollocation: '暂未收录',
    analysis: '暂未收录'
  }

  ,
  {
    skillOccupationType: 4,// 修真
    skillType: 1,// 主动技能
    name: '霸王枪法',
    tags: [46,49,77],
    score: '8.0',
    attackMode: 1,
    attackRange: 9,
    armsLimitation: 8,
    effects: ['附带伤害+770','技能附带无视目标350伤害减免','技能附带无视目标350反击'],
    disc: '攻击次数+3，消耗500法力',
    equipment: ['黄金手甲','贪狼撼天戟','秦王破阵'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：附带无视且敌六人范围可作为长柄武器技能的选择之一'
  },
  {
    skillOccupationType: 4,// 修真
    skillType: 2,// 自动技能
    name: '战斗怒吼',
    tags: [78,80],
    score: '7.0',
    attackMode: 4,
    attackRange: 9,
    armsLimitation: 11,
    effects: ['劈砍攻击力+40%,属性增加','穿刺攻击力+40%,属性增加','命中率+26%'],
    disc: '持续4回合，消耗116法力',
    equipment: ['龙鳞腰甲','黄金腿铠'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：全体增攻技能并不多，辅助可以学，可以让暴力增加一些伤害基本上很多副本都合适使用'
  },
  {
    skillOccupationType: 4,// 修真
    skillType: 3,// 被动技能
    name: '远程武器专精',
    tags: [32,41,80],
    score: '暂无评分',
    armsLimitation: 9,  
    effects: ['远程武器伤害、耐久+100%','用远程武器时攻击次数+3','命中+30'],
    equipment: ['黄金头盔'],
    lineupCollocation: '暂未收录',
    analysis: '暂未收录'
  }
  ,
  {
    skillOccupationType: 5,// 贤者
    skillType: 1,// 主动技能
    name: '霸王枪法',
    tags: [46,49,77],
    score: '8.0',
    attackMode: 1,
    attackRange: 9,
    armsLimitation: 8,
    effects: ['附带伤害+770','技能附带无视目标350伤害减免','技能附带无视目标350反击'],
    disc: '攻击次数+3，消耗500法力',
    equipment: ['黄金手甲','贪狼撼天戟','秦王破阵'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：附带无视且敌六人范围可作为长柄武器技能的选择之一'
  },
  {
    skillOccupationType: 5,// 贤者
    skillType: 2,// 自动技能
    name: '战斗怒吼',
    tags: [78,80],
    score: '7.0',
    attackMode: 4,
    attackRange: 9,
    armsLimitation: 11,
    effects: ['劈砍攻击力+40%,属性增加','穿刺攻击力+40%,属性增加','命中率+26%'],
    disc: '持续4回合，消耗116法力',
    equipment: ['龙鳞腰甲','黄金腿铠'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：全体增攻技能并不多，辅助可以学，可以让暴力增加一些伤害基本上很多副本都合适使用'
  },
  {
    skillOccupationType: 5,// 贤者
    skillType: 3,// 被动技能
    name: '远程武器专精',
    tags: [32,41,80],
    score: '暂无评分',
    armsLimitation: 9,  
    effects: ['远程武器伤害、耐久+100%','用远程武器时攻击次数+3','命中+30'],
    equipment: ['黄金头盔'],
    lineupCollocation: '暂未收录',
    analysis: '暂未收录'
  }
  ,
  {
    skillOccupationType: 6,// 武圣
    skillType: 1,// 主动技能
    name: '霸王枪法',
    tags: [46,49,77],
    score: '8.0',
    attackMode: 1,
    attackRange: 9,
    armsLimitation: 8,
    effects: ['附带伤害+770','技能附带无视目标350伤害减免','技能附带无视目标350反击'],
    disc: '攻击次数+3，消耗500法力',
    equipment: ['黄金手甲','贪狼撼天戟','秦王破阵'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：附带无视且敌六人范围可作为长柄武器技能的选择之一'
  },
  {
    skillOccupationType: 6,// 武圣
    skillType: 2,// 自动技能
    name: '战斗怒吼',
    tags: [78,80],
    score: '7.0',
    attackMode: 4,
    attackRange: 9,
    armsLimitation: 11,
    effects: ['劈砍攻击力+40%,属性增加','穿刺攻击力+40%,属性增加','命中率+26%'],
    disc: '持续4回合，消耗116法力',
    equipment: ['龙鳞腰甲','黄金腿铠'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：全体增攻技能并不多，辅助可以学，可以让暴力增加一些伤害基本上很多副本都合适使用'
  },
  {
    skillOccupationType: 6,// 武圣
    skillType: 3,// 被动技能
    name: '远程武器专精',
    tags: [32,41,80],
    score: '暂无评分',
    armsLimitation: 9,  
    effects: ['远程武器伤害、耐久+100%','用远程武器时攻击次数+3','命中+30'],
    equipment: ['黄金头盔'],
    lineupCollocation: '暂未收录',
    analysis: '暂未收录'
  }
  ,
  {
    skillOccupationType: 7,// 枪王
    skillType: 1,// 主动技能
    name: '霸王枪法',
    tags: [46,49,77],
    score: '8.0',
    attackMode: 1,
    attackRange: 9,
    armsLimitation: 8,
    effects: ['附带伤害+770','技能附带无视目标350伤害减免','技能附带无视目标350反击'],
    disc: '攻击次数+3，消耗500法力',
    equipment: ['黄金手甲','贪狼撼天戟','秦王破阵'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：附带无视且敌六人范围可作为长柄武器技能的选择之一'
  },
  {
    skillOccupationType: 7,// 枪王
    skillType: 2,// 自动技能
    name: '战斗怒吼',
    tags: [78,80],
    score: '7.0',
    attackMode: 4,
    attackRange: 9,
    armsLimitation: 11,
    effects: ['劈砍攻击力+40%,属性增加','穿刺攻击力+40%,属性增加','命中率+26%'],
    disc: '持续4回合，消耗116法力',
    equipment: ['龙鳞腰甲','黄金腿铠'],
    lineupCollocation: '暂无收录',
    analysis: '小玖儿：全体增攻技能并不多，辅助可以学，可以让暴力增加一些伤害基本上很多副本都合适使用'
  },
  {
    skillOccupationType: 7,// 枪王
    skillType: 3,// 被动技能
    name: '远程武器专精',
    tags: [32,41,80],
    score: '暂无评分',
    armsLimitation: 9,  
    effects: ['远程武器伤害、耐久+100%','用远程武器时攻击次数+3','命中+30'],
    equipment: ['黄金头盔'],
    lineupCollocation: '暂未收录',
    analysis: '暂未收录'
  }
]

module.exports = {
  teamList,
  skillDetailData,
  allSkillArray
}

