export const questions = [
  // ========== F1 学派系统化程度 ==========
  {
    id: 'q1', dim: 'F1',
    text: '别人问你"我是什么星座"，你的反应是？',
    options: [
      { label: '星座是什么？我哪知道你几月生的', value: 1 },
      { label: '说出太阳星座，再补一句"还得看上升和月亮"', value: 2 },
      { label: '直接掏出排盘软件，让对方说出生地和精确出生时间', value: 3 }
    ]
  },
  {
    id: 'q2', dim: 'F1',
    text: '看到"今日宜：嫁娶、入宅"这条信息，你的第一反应是？',
    options: [
      { label: '宜啥不宜啥跟我有什么关系，我又不结婚', value: 1 },
      { label: '哦，今天黄道吉日，挺好', value: 2 },
      { label: '宜嫁娶但忌动土，今天我搬桌子都不行', value: 3 }
    ]
  },

  // ========== F2 神秘信任度 ==========
  {
    id: 'q3', dim: 'F2',
    text: '今天出门差点被高空坠物砸到，你的解读是？',
    options: [
      { label: '挺倒霉的，回家吃饭', value: 1 },
      { label: '应该是冲撞了什么，最近行事低调点', value: 2 },
      { label: '这是命中大劫的预警，必须连夜请师傅做法事', value: 3 }
    ]
  },
  {
    id: 'q4', dim: 'F2',
    text: '"科学和玄学谁更靠谱"？',
    options: [
      { label: '科学，毫无疑问，玄学是哄小孩的', value: 1 },
      { label: '科学解释一部分，玄学解释另一部分，互不冲突', value: 2 },
      { label: '科学只能解释玄学的0.001%', value: 3 }
    ]
  },

  // ========== F3 多神兼修度 ==========
  {
    id: 'q5', dim: 'F3',
    text: '紫微斗数和西洋占星，你选哪个？',
    options: [
      { label: '认准一个流派死磕，混着用就是不专业', value: 1 },
      { label: '主修紫微，副修一点占星，不混用', value: 2 },
      { label: '都信，再加塔罗、人类图、易经、奇门、生命数字、灵气疗愈通通都信', value: 3 }
    ]
  },
  {
    id: 'q6', dim: 'F3',
    text: '一个朋友既给你看八字又给你抽塔罗还给你算九宫格性格，你的反应？',
    options: [
      { label: '你这就是民科啊，不专业', value: 1 },
      { label: '没事多个角度参考', value: 2 },
      { label: '太爽了，请问还有别的工具吗？', value: 3 }
    ]
  },

  // ========== C1 玄学决策依赖度 ==========
  {
    id: 'q7', dim: 'C1',
    text: '准备辞职这件事，你会先做什么？',
    options: [
      { label: '算ROI、找下家、谈赔偿，三步搞定', value: 1 },
      { label: '该想的都想了，再顺手抽张牌看看', value: 2 },
      { label: '先抽牌问宇宙，再问大师，再排盘，再看流年，最后再做决定', value: 3 }
    ]
  },
  {
    id: 'q8', dim: 'C1',
    text: '中午外卖吃什么这种小事，你会算一下吗？',
    options: [
      { label: '算？我连菜单都懒得看', value: 1 },
      { label: '不算，但会随心情', value: 2 },
      { label: '会，今天水星逆行不能吃辣，已经默念三遍咒语了', value: 3 }
    ]
  },

  // ========== C2 凶卦改卦能力 ==========
  {
    id: 'q9', dim: 'C2',
    text: '抽到一张大凶的牌，你会？',
    options: [
      { label: '凶就凶吧，照单全收，毕竟是自己问的', value: 1 },
      { label: '换个角度解读一下，看看有没有别的可能性', value: 2 },
      { label: '重抽，重抽不行就换牌，换牌不行就换大师', value: 3 }
    ]
  },
  {
    id: 'q10', dim: 'C2',
    text: '老师告诉你"今年命格不好"，你的反应是？',
    options: [
      { label: '认命，今年低调点', value: 1 },
      { label: '问问有没有化解的办法', value: 2 },
      { label: '换一个老师再算一次，直到有人说"今年大吉"', value: 3 }
    ]
  },

  // ========== C3 时辰择吉敏感度 ==========
  {
    id: 'q11', dim: 'C3',
    text: '理发这件事，你会挑日子吗？',
    options: [
      { label: '想剪就剪，挑什么日子', value: 1 },
      { label: '不刻意挑，但听说过"正月不剃头"会避一下', value: 2 },
      { label: '严格按吉日剪，差一天都不行，宁可顶着乱头出门', value: 3 }
    ]
  },
  {
    id: 'q12', dim: 'C3',
    text: '发一条重要的微信消息（比如表白、辞职信），你会？',
    options: [
      { label: '想好就发，时间无所谓', value: 1 },
      { label: '尽量挑个状态好的时候发', value: 2 },
      { label: '必须避开水逆、避开月空，挑吉时整点发出', value: 3 }
    ]
  },

  // ========== R1 法器持有量 ==========
  {
    id: 'q13', dim: 'R1',
    text: '你身上现在戴着多少件"开过光"的东西？',
    options: [
      { label: '0件，听都没听过', value: 1 },
      { label: '1-2件，戴着图个心安', value: 2 },
      { label: '5件以上，从手腕到脚踝，叮叮当当，行走的法物商店', value: 3 }
    ]
  },
  {
    id: 'q14', dim: 'R1',
    text: '看到一颗号称"招财"的水晶，你会？',
    options: [
      { label: '掏不出钱，转身就走', value: 1 },
      { label: '看看价钱，喜欢就买', value: 2 },
      { label: '不用看，先买三颗，凑套', value: 3 }
    ]
  },

  // ========== R2 仪式严谨度 ==========
  {
    id: 'q15', dim: 'R2',
    text: '去寺庙烧香，你的流程是？',
    options: [
      { label: '点上、插上、磕个头、走人', value: 1 },
      { label: '会按顺序拜，但不会太拘细节', value: 2 },
      { label: '前一晚沐浴更衣、净口净心、严格按方位拜每一尊神', value: 3 }
    ]
  },
  {
    id: 'q16', dim: 'R2',
    text: '塔罗洗牌之前，你会做什么？',
    options: [
      { label: '直接洗，洗完就抽', value: 1 },
      { label: '深呼吸一下，集中注意力', value: 2 },
      { label: '燃香、点烛、念默咒、用水晶净化牌、等月相对，整套搞完才能开始', value: 3 }
    ]
  },

  // ========== R3 风水改造意愿 ==========
  {
    id: 'q17', dim: 'R3',
    text: '你家床头朝哪？',
    options: [
      { label: '不知道，怎么舒服怎么摆', value: 1 },
      { label: '听说不能朝西就调过了，其他随缘', value: 2 },
      { label: '严格按你的命卦定位，每个月都微调一次', value: 3 }
    ]
  },
  {
    id: 'q18', dim: 'R3',
    text: '搬新家第一件事是？',
    options: [
      { label: '把网装好，把外卖App打开', value: 1 },
      { label: '挑个好日子搬入', value: 2 },
      { label: '请大师上门勘测，化煞、纳气、放盐、撒米、贴符，一套八卦走完才能住', value: 3 }
    ]
  },

  // ========== S1 因果归因度 ==========
  {
    id: 'q19', dim: 'S1',
    text: '今天打嗝了10次，你觉得？',
    options: [
      { label: '吃太快了', value: 1 },
      { label: '可能是有人想我', value: 2 },
      { label: '这是宇宙在传递信号，我必须停下来感受当下', value: 3 }
    ]
  },
  {
    id: 'q20', dim: 'S1',
    text: '前任突然加你回来，你的解读是？',
    options: [
      { label: '人心血来潮，没什么特别的', value: 1 },
      { label: '可能是缘分还没断', value: 2 },
      { label: '前世的因今生还在还，红线没有断，我们注定要再纠缠一次', value: 3 }
    ]
  },

  // ========== S2 受害感强度 ==========
  {
    id: 'q21', dim: 'S2',
    text: '工作出大错了，你的第一反应是？',
    options: [
      { label: '是我准备得不够，下次注意', value: 1 },
      { label: '我尽力了，但运气也不好', value: 2 },
      { label: '又是水逆害的！土星压顶+太岁当头+流年大忌，全宇宙都在欺负我', value: 3 }
    ]
  },
  {
    id: 'q22', dim: 'S2',
    text: '"水逆"这个词在你嘴里出现的频率？',
    options: [
      { label: '从没说过，水星逆没逆跟我没关系', value: 1 },
      { label: '偶尔说一下，主要是流行', value: 2 },
      { label: '一年三百六十五天，三百六十天都在水逆', value: 3 }
    ]
  },

  // ========== S3 主动改命意志 ==========
  {
    id: 'q23', dim: 'S3',
    text: '老师说你"一辈子注定要操劳"，你会？',
    options: [
      { label: '认了，命就这样', value: 1 },
      { label: '操劳就操劳吧，至少别太操劳', value: 2 },
      { label: '老子不认，今晚就开始烧香放生捐功德，硬要把命改了', value: 3 }
    ]
  },
  {
    id: 'q24', dim: 'S3',
    text: '"改运三法"——烧香/放生/捐功德，你做过几样？',
    options: [
      { label: '一样也没做过', value: 1 },
      { label: '偶尔烧个香', value: 2 },
      { label: '三样全做，且每月都做，已经做了三年', value: 3 }
    ]
  },

  // ========== V1 玄学社交浓度 ==========
  {
    id: 'q25', dim: 'V1',
    text: '认识一个新朋友，你会问对方生日吗？',
    options: [
      { label: '不会，问这个干嘛', value: 1 },
      { label: '熟了之后会随口问一下', value: 2 },
      { label: '认识三分钟内必问，问完默默给对方排个盘', value: 3 }
    ]
  },
  {
    id: 'q26', dim: 'V1',
    text: '朋友失恋来找你，你的反应是？',
    options: [
      { label: '陪TA骂渣男渣女，喝酒', value: 1 },
      { label: '安慰一下，必要时抽张牌看看', value: 2 },
      { label: '立刻排两人合盘，分析星相不合的原因，给出复合或断绝的建议', value: 3 }
    ]
  },

  // ========== V2 反驳战斗值 ==========
  {
    id: 'q27', dim: 'V2',
    text: '有人当面说"玄学都是骗人的"，你的反应是？',
    options: [
      { label: '点头，对对对，您说得对', value: 1 },
      { label: '反驳两句，争不过就算了', value: 2 },
      { label: '原地开课三小时，从《周易》起源讲到量子纠缠，直到对方道歉', value: 3 }
    ]
  },
  {
    id: 'q28', dim: 'V2',
    text: '有人嘲笑你戴的水晶手串，你会？',
    options: [
      { label: '尴尬一笑，回家把手串摘了', value: 1 },
      { label: '说一句"我自己开心就好"', value: 2 },
      { label: `告诉对方"你这个流年不太好，再不戴点东西可能要破财"`, value: 3 }
    ]
  },

  // ========== V3 商业化倾向 ==========
  {
    id: 'q29', dim: 'V3',
    text: '朋友请你帮忙算一卦，事后塞给你200块，你会？',
    options: [
      { label: '坚决不收，玄学不能沾钱', value: 1 },
      { label: '推让一下，对方坚持就收了，下次请客回去', value: 2 },
      { label: '收，并且开始考虑要不要正式开个工作室', value: 3 }
    ]
  },
  {
    id: 'q30', dim: 'V3',
    text: '你有没有想过把"玄学"做成事业？',
    options: [
      { label: '从来没想过，玄学和挣钱不是一回事', value: 1 },
      { label: '想过，但只是念头，没真做', value: 2 },
      { label: '已经在做了，账号已开，价目表已挂，月入五位数', value: 3 }
    ]
  }
];

// specialQuestions 是 TestScreen 组件要求的必选结构（源自 sbti 的 drink_gate 彩蛋机制）。
// 为了复用同一个 TestScreen 不做侵入改动，这里提供一个"壳"题：选项 value 故意避开 3，
// 因此永远不会触发 gate 分支去请求 specialQuestions[1]，也不会命中 DRUNK 隐藏人格。
// 这题依然会作为"补充题"随机插入到 30 道正题之间，纯粹给测试流程加一点乐子。
export const specialQuestions = [
  {
    id: 'drink_gate_q1',
    special: true,
    kind: 'gate',
    text: '最后一个灵魂拷问：你玄学的尽头是什么？',
    options: [
      { label: '玩玩而已，玄学之于我，仅是生活调味剂', value: 1 },
      { label: '信是信的，但生活还是自己过的', value: 2 },
      { label: '我已经把玄学做成了我的全部人格底色', value: 4 }
    ]
  }
];

export const DRUNK_TRIGGER_QUESTION_ID = 'drink_gate_q2';
