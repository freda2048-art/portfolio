const profile = {
  name: "张紫彤",
  role: "内容策划｜品牌传播｜文化活动｜Plus AI",
  summary: "2年PR与文化传播经验，擅长跨团队传播项目与内容策划",
  phone: "13319309366",
  email: "freda2048@163.com"
};

const jiangxiArticlePages = {
  wuyulun: Array.from({ length: 13 }, (_, index) => `assets/generated/medium/portfolio/jiangxi/pages/wuyulun-${String(index + 1).padStart(2, "0")}.webp`),
  wanggang: Array.from({ length: 8 }, (_, index) => `assets/generated/medium/portfolio/jiangxi/pages/wanggang-${String(index + 1).padStart(2, "0")}.webp`),
  zhangweibin: Array.from({ length: 12 }, (_, index) => `assets/generated/medium/portfolio/jiangxi/pages/zhangweibin-${String(index + 1).padStart(2, "0")}.webp`)
};

const education = [
  {
    school: "北京外国语大学",
    major: "新闻学（硕士）",
    date: "2021.09 - 2024.06",
    result: "成绩 89.06/100",
    achievements:
      "曾获北京外国语大学首届国际组织胜任力大赛一等奖，第二届光明网新视听媒体融合创新创意大赛优秀奖，研究课题涉及区块链、NFT、虚拟人等技术，论文获第二届数字传播与社会治理创新论坛一等奖，被录入IAMCR OCP23国际传播学论坛。"
  },
  {
    school: "上海外国语大学",
    major: "公共关系（本科）",
    date: "2017.09 - 2021.07",
    result: "GPA 3.92/4.0",
    achievements:
      "曾获国家奖学金、上海高校公共关系学专业专项奖学金、挑战杯上海市大学生课外学术科技作品竞赛校赛一等奖、第七届中国大学生公共关系策划创业大赛作品一等奖、个人铜奖。"
  },
  {
    school: "美国宾夕法尼亚州滑石大学",
    major: "传播学（国际交换）",
    date: "2019.09 - 2020.01",
    result: "GPA 4.0/4.0",
    achievements: ""
  },
  {
    school: "复旦大学",
    major: "新闻学（辅修）",
    date: "2018.09 - 2021.01",
    result: "GPA 3.7/4.0",
    achievements: ""
  }
];

const about = {
  intro: "我在美团从事公共关系与文化传播相关工作，具备从内容策划到项目落地的完整经验。",
  experiences: [
    {
      company: "美团",
      title: "核心本地商业CLC-业务合规｜公共关系",
      date: "2023.11 - 2026.04",
      summary:
        "从0到1搭建CLC廉正文化与风险宣导体系，通过内容运营、培训与廉正管理能力建设专项提升组织廉正治理能力。担任8条业务线廉正文化BP，为业务团队提供持续的廉正文化支持与风险管理赋能。",
      details: [
        "文化体系建设：主导搭建并运营「廉正CLC」宣导体系，通过公众号、培训及专题宣导构建文化传播矩阵，独立为部门内外12个团队搭建稳定的案件信息收集和通报解读机制；2025年发布宣导推文56篇，其中35篇面向CLC全员8w+人，平均阅读率16.8%；对接8个业务团队提供定制宣导支持，输出专题推文21篇，平均阅读率47.5%。",
        "创新内容运营：主导廉正宣导内容升级，探索AI互动推文、动图推文及叙事型长条漫等多种形式，优化内容质量。独立策划CLC廉正IP形象设计与传播，通过定制表情包、物料，强化品牌心智。",
        "用户与渠道运营：联动HRBP及数据产品团队开展传播，借助风险管理工具实现目标人群精准触达；独立策划跨团队传播活动，协同业务团队及公司OC团队扩大宣导覆盖，并建立核心用户反馈群，构成“精准触达—传播放大—用户反馈”的宣导闭环。"
      ]
    },
    {
      company: "新华社",
      title: "音视频部｜海外传播实习生",
      date: "2023.07 - 2023.10",
      summary: "海外内容与双语传播。",
      details: [
        "海外社媒运营及节目创作：负责新华社《Show Me China》栏目的Facebook海外账号日常运营、发帖均获1w+点赞；在6档节目中主导调研策划、脚本撰写，辅助拍摄、后期剪辑和宣传物料设计等工作，其中主导策划的杭州亚运会视频作品获新华社9月好稿推荐，参与的系列节目获新华社半年度社级优秀新闻作品奖。",
        "直播内容策划：负责策划2次双语直播活动，独立完成调研、策划、联系场馆、踩点等工作，当日播放量10w+。"
      ]
    },
    {
      company: "博雅公关",
      title: "For 壳牌石油｜社交媒体实习生",
      date: "2022.01 - 2022.06",
      summary: "品牌传播与舆情项目。",
      details: [
        "新媒体运营：参与壳牌石油客户品牌传播项目，支持微信公众号内容策划、传播执行及多方协同，保障项目高质量落地。并基于传播数据与媒体反馈进行复盘分析，提炼传播洞察，辅助优化后续传播方向。",
        "公关专项：参与“壳牌汽车环保马拉松”整合传播，覆盖主题策划、活动预热及内容生产，提升品牌曝光；在俄乌冲突期间，负责全平台舆情监测与分析，跟踪媒体及社交平台动态，输出风险提示，支持客户及时调整沟通策略。"
      ]
    }
  ],
  highlights: [
    {
      title: "明镜专项｜到餐业务廉正管理机制建设（PMO）",
      date: "2025.03 - 2026.01",
      points: [
        "项目将廉正管理考核项纳入基层销售管理者绩效方案并影响其奖金及晋升。我在其中担任项目经理，负责项目规划、跨团队协同及落地运营，推动廉正管理机制在到餐业务落地并形成常态化运行模式。",
        "主导项目调研与方案设计：针对团队对到餐业务风险场景认知不足的问题，形成业务调研方案，对各层级管理者、HRBP与绩效管理等角色开展分层调研，梳理管理痛点与典型风险场景，并据此制定专项治理方案。",
        "推动复杂组织协同并解决执行争议：在项目初期相关方支持度不足的情况下，主动协调HRBP、绩效管理、一线销售支持及风控团队推动信息对齐，并梳理考核细则及执行口径，输出FAQ及时解决执行争议，帮助方案顺利落地。",
        "搭建宣导与运营支撑体系：根据业务风险场景产出海报物料、定制廉正微课及专项推文，并通过定期数据播报推动各大区执行；同时使用No Code（AI工具）搭建自动化数据看板，在数据统计环节节约70%人工成本，并沉淀为可复用运营工具。",
        "项目成果：项目覆盖到餐业务3种业务形态、共328名城市管理者，撬动9,891名员工参与廉正管理任务，98%管理者完成廉正考核指标，向到餐业务BM汇报后，总结项目方案及运营机制，2026年在另3条业务线复用。"
      ]
    },
    {
      title: "AI与自动化探索｜Vibe coding & OpenClaw",
      date: "2025.10 - 2026.04",
      points: [
        "Vibe Coding与自动化工具开发：Vibe Coding开发多个轻量化工具，用于辅助数据统计、推文形式优化及部分运营流程自动化，提升日常运营效率；基于美团AI浏览器Tabbit开发运营小组件并参与内部“妙招”大赛，获得优秀奖。",
        "AI治理场景探索：OpenClaw爆火后第一时间提出“廉正管理 Skills”构想，探索AI在廉正风险提醒、管理支持等场景中的应用。在案件通报环节自主开发 Violation-Reporting-Skill，自动处理案件数据并形成排版，为团队提效4人日/月。"
      ]
    }
  ],
  strengths: [
    "选题创意",
    "公众号运营",
    "新闻稿编写",
    "人物专访",
    "栏目创作",
    "视频脚本",
    "视频拍摄剪辑",
    "海报制作",
    "0-1账号搭建",
    "用户调研",
    "运营数据分析",
    "直播策划",
    "Facebook运营",
    "项目管理",
    "跨团队项目",
    "文化活动策划执行",
    "Vibe Coding",
    "AI Agent"
  ]
};

const hobbies = {
  cards: [
    {
      id: "hobby-japanese",
      label: "Japanese",
      title: "自学日语",
      metric: "JLPT N1",
      theme: "资深二次元",
      note:
        "工作与学习之外持续自学日语，通过 JLPT N1，并在阅读、语法、词汇训练中建立长期输入和自我管理节奏。",
      cover: "assets/generated/medium/hobbies/japanese-n1-result.webp",
      coverThumb: "assets/generated/thumbs/hobbies/japanese-n1-result.webp",
      images: [{ src: "assets/generated/medium/hobbies/japanese-n1-result.webp", thumbSrc: "assets/generated/thumbs/hobbies/japanese-n1-result.webp", alt: "日语 N1 考试结果" }]
    },
    {
      id: "hobby-exchange",
      label: "Exchange",
      title: "美国交换经历",
      metric: "Global Exchange",
      theme: "英语专八get",
      note:
        "在美国宾夕法尼亚州 Slippery Rock University 交换学习，完成跨文化课程与校园交流，也把英语沟通从考试能力变成真实协作经验。",
      cover: "assets/generated/medium/hobbies/exchange-02.webp",
      coverThumb: "assets/generated/thumbs/hobbies/exchange-02.webp",
      images: [
        { src: "assets/generated/medium/hobbies/exchange-01.webp", thumbSrc: "assets/generated/thumbs/hobbies/exchange-01.webp", alt: "美国交换期间与老师合影" },
        { src: "assets/generated/medium/hobbies/exchange-02.webp", thumbSrc: "assets/generated/thumbs/hobbies/exchange-02.webp", alt: "美国交换期间在尼亚加拉瀑布合影" },
        { src: "assets/generated/medium/hobbies/exchange-certificate.webp", thumbSrc: "assets/generated/thumbs/hobbies/exchange-certificate.webp", alt: "美国交换项目结业证书" }
      ]
    },
    {
      id: "hobby-marathon",
      label: "Marathon",
      title: "马拉松",
      metric: "42.195km",
      theme: "年跑量1200km",
      note:
        "从日常训练到站上全马赛道，跑步让我习惯把遥远目标拆成每一次稳定完成的公里数，也保留了向前推进的身体记忆。",
      cover: "assets/generated/medium/hobbies/marathon-02.webp",
      coverThumb: "assets/generated/thumbs/hobbies/marathon-02.webp",
      images: [
        { src: "assets/generated/medium/hobbies/marathon-01.webp", thumbSrc: "assets/generated/thumbs/hobbies/marathon-01.webp", alt: "烟台马拉松完赛后展示奖牌" },
        { src: "assets/generated/medium/hobbies/marathon-02.webp", thumbSrc: "assets/generated/thumbs/hobbies/marathon-02.webp", alt: "烟台马拉松赛道照片" },
        { src: "assets/generated/medium/hobbies/marathon-03.webp", thumbSrc: "assets/generated/thumbs/hobbies/marathon-03.webp", alt: "烟台马拉松号码墙前合影" }
      ]
    },
    {
      id: "hobby-guitar",
      label: "Fingerstyle",
      title: "吉他指弹",
      metric: "美式指弹",
      theme: "日式指弹",
      note:
        "指弹练习是我给自己保留的慢节奏空间：一首歌被拆成节拍、旋律和手指记忆，像是在复杂工作之外重新校准专注力。",
      cover: "assets/generated/medium/hobbies/guitar-cover.webp",
      coverThumb: "assets/generated/thumbs/hobbies/guitar-cover.webp",
      images: [{ src: "assets/generated/medium/hobbies/guitar-cover.webp", thumbSrc: "assets/generated/thumbs/hobbies/guitar-cover.webp", alt: "吉他指弹练习封面" }],
      video: { src: "assets/hobbies/freight-train-guitar.mp4", type: "video/mp4" }
    },
    {
      id: "hobby-pets",
      label: "Pets",
      title: "撸猫吸狗",
      metric: "养宠家庭",
      theme: "爱狗人士",
      note:
        "和猫猫狗狗相处是我快速回血的方式，它们把日常变得松弛，也给练琴、写作和下班后的时间加上一点柔软的陪伴。",
      cover: "assets/generated/medium/hobbies/pet-01.webp",
      coverThumb: "assets/generated/thumbs/hobbies/pet-01.webp",
      images: [
        { src: "assets/generated/medium/hobbies/pet-01.webp", thumbSrc: "assets/generated/thumbs/hobbies/pet-01.webp", alt: "猫咪坐在电脑旁" },
        { src: "assets/generated/medium/hobbies/pet-02.webp", thumbSrc: "assets/generated/thumbs/hobbies/pet-02.webp", alt: "抱着狗狗在琴房合影" }
      ]
    }
  ]
};

const beliefs = [
  {
    title: "将复杂信息转化为可传播内容",
    text: "好的内容不是把信息堆满，而是让受众快速理解重点、记住表达，并愿意继续了解。"
  },
  {
    title: "推动跨团队项目落地",
    text: "传播项目需要把目标、资源、节奏与交付对齐，让创意可以被执行，也可以被复盘。"
  },
  {
    title: "探索AI工具在内容中的应用",
    text: "AI可以帮助内容工作者更快完成结构搭建、资料整理、创意试错与工具化表达。"
  }
];

const portfolioCategories = [
  { key: "tweet", label: "推文作品" },
  { key: "event", label: "活动项目" },
  { key: "media", label: "媒体与传播" },
  { key: "ai", label: "AI与Vibe Coding" }
];

const portfolioItems = [
  {
    id: "tweet-bug-programmer",
    title: "《出什么Bug了？？快请个程序员来看看》",
    category: "tweet",
    description:
      "2025年10月24日是程序员节，在公司全面推进AI战略的情况下，程序员节是美团企业文化传播的重要节点之一。本则选题以程序员工作中常见的场景为切入点，融入趣味信息安全提醒。",
    role: "选题策划｜内容结构｜企业文化传播",
    coreIdea: "借程序员节节点承接公司AI战略语境，用职场趣味场景降低信息安全宣导的理解门槛。",
    result: "",
    imageType: "vertical",
    images: [
      { src: "assets/generated/medium/portfolio/tweets-slide03-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide03-01.webp", alt: "《出什么Bug了？？快请个程序员来看看》传播背景" },
      { src: "assets/generated/medium/portfolio/tweets-slide04-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide04-01.webp", alt: "推文长图节选 1" },
      { src: "assets/generated/medium/portfolio/tweets-slide04-04.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide04-04.webp", alt: "推文长图节选 2" },
      { src: "assets/generated/medium/portfolio/tweets-slide04-05.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide04-05.webp", alt: "推文长图节选 3" },
      { src: "assets/generated/medium/portfolio/tweets-slide04-03.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide04-03.webp", alt: "推文长图节选 4" },
      { src: "assets/generated/medium/portfolio/tweets-slide04-02.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide04-02.webp", alt: "推文长图节选 5" }
    ],
    links: [],
    excerpt: ""
  },
  {
    id: "tweet-report-security",
    title: "《这述职报告到底咋写呀？》",
    category: "tweet",
    description:
      "2025年12月-2月，公司集中开展年度述职工作，信息泄露的风险也随之升高，为了帮助员工了解述职期间常见的错误操作，如文件外发、误用AI等行为，以“写述职报告”为切入点进行宣导。",
    role: "选题策划｜内容撰写｜信息安全宣导",
    coreIdea: "将述职报告这一高频办公场景转化为信息安全教育入口，提醒文件外发与误用AI等风险。",
    result: "",
    imageType: "vertical",
    images: [
      { src: "assets/generated/medium/portfolio/tweets-slide05-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide05-01.webp", alt: "《这述职报告到底咋写呀？》传播背景" },
      { src: "assets/generated/medium/portfolio/tweets-slide06-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide06-01.webp", alt: "述职报告推文节选 1" },
      { src: "assets/generated/medium/portfolio/tweets-slide06-02.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide06-02.webp", alt: "述职报告推文节选 2" },
      { src: "assets/generated/medium/portfolio/tweets-slide06-03.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide06-03.webp", alt: "述职报告推文节选 3" },
      { src: "assets/generated/medium/portfolio/tweets-slide06-04.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide06-04.webp", alt: "述职报告推文节选 4" },
      { src: "assets/generated/medium/portfolio/tweets-slide06-05.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide06-05.webp", alt: "述职报告推文节选 5" }
    ],
    links: [],
    excerpt: ""
  },
  {
    id: "tweet-subsidy-case",
    title: "《大额补贴失窃案，谁在搞鬼？》",
    category: "tweet",
    description:
      "美团员工中，销售所占数量最多，而该人群最主要的廉正问题是虚假业绩。国庆黄金周前，本地生活市场竞争火热，销售虚假业绩、侵占公司资源等问题随之而来。为此，本次选题以往期刑事案件为引入，从“补贴”的第一视角讲述与之相关的常见违规操作，引导员工诚信从业。",
    role: "廉正传播｜案例叙事｜内容策划",
    coreIdea: "用“补贴”的第一视角包装风险案例，把抽象制度要求转化为可读的故事化提醒。",
    result: "",
    imageType: "vertical",
    images: [
      { src: "assets/generated/medium/portfolio/tweets-slide07-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide07-01.webp", alt: "《大额补贴失窃案，谁在搞鬼？》传播背景" },
      { src: "assets/generated/medium/portfolio/tweets-slide08-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide08-01.webp", alt: "补贴失窃案推文节选 1" },
      { src: "assets/generated/medium/portfolio/tweets-slide08-03.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide08-03.webp", alt: "补贴失窃案推文节选 2" },
      { src: "assets/generated/medium/portfolio/tweets-slide08-04.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide08-04.webp", alt: "补贴失窃案推文节选 3" },
      { src: "assets/generated/medium/portfolio/tweets-slide08-05.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide08-05.webp", alt: "补贴失窃案推文节选 4" },
      { src: "assets/generated/medium/portfolio/tweets-slide08-02.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide08-02.webp", alt: "补贴失窃案推文节选 5" }
    ],
    links: [],
    excerpt: ""
  },
  {
    id: "tweet-channel-manager",
    title: "《工作三年挣了“三千万”，这是一名渠道经理的心得》",
    category: "tweet",
    description:
      "在众多廉正问题中，影响最大、最隐蔽的就是索贿受贿和利益冲突，而主要负责引入、管理外界合作商的渠道经理是这类廉正问题的高发群体，本次选题专门针对渠道经理进行宣导，收集过往重大案件、常见违规场景，以违规人第一人称视角讲述“被腐蚀”的惨痛经历。",
    role: "专题策划｜风险场景梳理｜叙事型长图内容",
    coreIdea: "面向渠道经理这一高风险人群，以第一人称反面叙事强化索贿受贿与利益冲突的风险感知。",
    result: "",
    imageType: "vertical",
    images: [
      { src: "assets/generated/medium/portfolio/tweets-slide09-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide09-01.webp", alt: "《工作三年挣了“三千万”》传播背景" },
      { src: "assets/generated/medium/portfolio/tweets-slide10-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide10-01.webp", alt: "渠道经理推文节选 1" },
      { src: "assets/generated/medium/portfolio/tweets-slide10-03.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide10-03.webp", alt: "渠道经理推文节选 2" },
      { src: "assets/generated/medium/portfolio/tweets-slide10-04.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide10-04.webp", alt: "渠道经理推文节选 3" },
      { src: "assets/generated/medium/portfolio/tweets-slide10-05.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide10-05.webp", alt: "渠道经理推文节选 4" },
      { src: "assets/generated/medium/portfolio/tweets-slide10-06.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide10-06.webp", alt: "渠道经理推文节选 5" },
      { src: "assets/generated/medium/portfolio/tweets-slide10-02.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide10-02.webp", alt: "渠道经理推文节选 6" }
    ],
    links: [],
    excerpt: ""
  },
  {
    id: "tweet-vlog-promotion",
    title: "《正直、诚信、有浏览量！合规Vlog大赛都有哪些好看的？》",
    category: "tweet",
    description:
      "2025年Q1，业务部门面向1万7千名员工开展线上合规Vlog大赛，提交25组作品，评选出6组获奖作品。为扩大活动影响力，联动业务侧及公司廉正官号发布推文进行宣导。",
    role: "活动传播｜收官推文｜内容扩散",
    coreIdea: "把员工共创内容转化为可传播素材，联动业务侧与公司官号扩大活动声量。",
    result: "面向1万7千名员工开展，提交25组作品，评选出6组获奖作品。",
    imageType: "vertical",
    images: [
      { src: "assets/generated/medium/portfolio/tweets-slide11-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide11-01.webp", alt: "合规Vlog大赛传播背景" },
      { src: "assets/generated/medium/portfolio/tweets-slide12-07.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide12-07.webp", alt: "合规Vlog推文节选 1" },
      { src: "assets/generated/medium/portfolio/tweets-slide12-04.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide12-04.webp", alt: "合规Vlog推文节选 2" },
      { src: "assets/generated/medium/portfolio/tweets-slide12-05.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide12-05.webp", alt: "合规Vlog推文节选 3" },
      { src: "assets/generated/medium/portfolio/tweets-slide12-06.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide12-06.webp", alt: "合规Vlog推文节选 4" },
      { src: "assets/generated/medium/portfolio/tweets-slide12-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide12-01.webp", alt: "合规Vlog推文节选 5" },
      { src: "assets/generated/medium/portfolio/tweets-slide12-02.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide12-02.webp", alt: "合规Vlog推文节选 6" },
      { src: "assets/generated/medium/portfolio/tweets-slide12-03.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide12-03.webp", alt: "合规Vlog推文节选 7" },
      { src: "assets/generated/medium/portfolio/tweets-slide12-08.webp", thumbSrc: "assets/generated/thumbs/portfolio/tweets-slide12-08.webp", alt: "合规Vlog推文节选 8" }
    ],
    links: [],
    excerpt: ""
  },
  {
    id: "event-compliance-vlog",
    title: "“让合规被看见”——员工共创型合规Vlog大赛",
    category: "event",
    description:
      "2025年Q1，面向业务1万7千人开展线上Vlog大赛，吸引170+人参与，提交25组作品，4580人参与投票。",
    role: "活动机制设计｜内容传播与推进｜收官传播",
    coreIdea:
      "从“内容宣导”转向“员工共创”，让员工成为内容生产者；用Vlog形式降低参与门槛；以评选、曝光与互动机制放大参与效果。",
    result: "覆盖1万7千人，170+人参与，提交25组作品，4580人参与投票。",
    imageType: "vertical",
    images: [
      { src: "assets/generated/medium/portfolio/events-slide03-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide03-01.webp", alt: "合规Vlog大赛核心策略" },
      { src: "assets/generated/medium/portfolio/events-slide04-07.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide04-07.webp", alt: "合规Vlog活动物料 1" },
      { src: "assets/generated/medium/portfolio/events-slide04-04.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide04-04.webp", alt: "合规Vlog活动物料 2" },
      { src: "assets/generated/medium/portfolio/events-slide04-05.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide04-05.webp", alt: "合规Vlog活动物料 3" },
      { src: "assets/generated/medium/portfolio/events-slide04-06.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide04-06.webp", alt: "合规Vlog活动物料 4" },
      { src: "assets/generated/medium/portfolio/events-slide04-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide04-01.webp", alt: "合规Vlog活动物料 5" },
      { src: "assets/generated/medium/portfolio/events-slide04-02.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide04-02.webp", alt: "合规Vlog活动物料 6" },
      { src: "assets/generated/medium/portfolio/events-slide04-03.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide04-03.webp", alt: "合规Vlog活动物料 7" },
      { src: "assets/generated/medium/portfolio/events-slide04-08.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide04-08.webp", alt: "合规Vlog活动物料 8" }
    ],
    links: [],
    excerpt:
      "预热期发布征集令；爆发期联动业务与HRBP进行内部扩散，为参赛人员提供剪辑工具支持；长尾期联动公司官号制作收官推文。"
  },
  {
    id: "event-integrity-month",
    title: "廉正文化月：面向全员的文化主题整合传播项目",
    category: "event",
    description:
      "2025年5月，面向业务5千人开展“廉正文化月”活动，项目分为管理者动员—讲师认证—团队宣导—自查自纠四个环节。",
    role: "Campaign策划｜线上传播｜线下触达｜组织协同",
    coreIdea:
      "从“分散宣导”转向“主题化Campaign”，通过文化月形成集中传播势能；线上线下结合，构建多触点体验；针对管理者和一线员工分层触达。",
    result: "400+管理者参与活动启动会，撬动团队宣导、自查自纠与职场触达。",
    imageType: "vertical",
    images: [
      { src: "assets/generated/medium/portfolio/events-slide05-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide05-01.webp", alt: "廉正文化月核心策略" },
      { src: "assets/generated/medium/portfolio/events-slide06-02.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide06-02.webp", alt: "廉正文化月物料 1" },
      { src: "assets/generated/medium/portfolio/events-slide06-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide06-01.webp", alt: "廉正文化月物料 2" }
    ],
    links: [],
    excerpt:
      "通过公众号和部门wiki持续发布主题内容，联动业务渠道与HRBP进行扩散，并在职场铺设风险提示与文化物料。"
  },
  {
    id: "event-executive-sharing",
    title: "高管分享会：文化向管理层传导项目",
    category: "event",
    description: "邀约美团SVP开展主题分享会活动，覆盖公司核心管理层100+人。",
    role: "前期策划｜内容设计｜会务统筹｜会后传播",
    coreIdea: "通过高管发声强调文化重要性与管理认知，完成从高层表达向管理层理解的传导。",
    result: "覆盖公司核心管理层100+人。",
    imageType: "landscape",
    images: [{ src: "assets/generated/medium/portfolio/events-slide07-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide07-01.webp", alt: "高管分享会现场或物料" }],
    links: [],
    excerpt:
      "明确分享主题，对齐高管时间与参与形式，梳理核心信息框架，协调各部门完成参会人员通知，并提炼关键观点进行二次传播。"
  },
  {
    id: "event-quiz",
    title: "趣味有奖问答活动：用户视角驱动文化活动参与",
    category: "event",
    description:
      "传统教学形式单一，员工参与意愿低、数据质量有限。将“教学”转化为“有奖问答”，通过趣味化设计降低参与门槛，实现“调研工具”向“文化互动工具”的转化。",
    role: "问卷结构设计｜奖品机制｜业务联动｜数据监测",
    coreIdea: "用情景题、选择互动与转盘抽奖机制，把文化宣导转化为更轻量的参与体验。",
    result: "覆盖8万人，回收问卷3000份，显著提升廉正内容参与率，并获取大规模真实反馈。",
    imageType: "landscape",
    images: [{ src: "assets/generated/medium/portfolio/events-slide08-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide08-01.webp", alt: "趣味有奖问答活动策略" }],
    links: [],
    excerpt:
      "联动各业务线推动传播与参与，实时监测参与数据，动态调整推广节奏。"
  },
  {
    id: "event-shell-marathon",
    title: "壳牌汽车环保马拉松：大型品牌传播与活动执行项目（实习）",
    category: "event",
    description:
      "壳牌需强化其在环保与能源创新领域的品牌认知，通过大型赛事活动提升公众关注与媒体曝光。",
    role: "活动调研｜Slogan提报｜内容运营｜舆情监测",
    coreIdea: "以大型赛事为品牌传播场景，结合社媒、新闻媒体与达人扩散提升品牌曝光。",
    result: "",
    imageType: "landscape",
    images: [{ src: "assets/generated/medium/portfolio/events-slide09-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide09-01.webp", alt: "壳牌汽车环保马拉松项目" }],
    links: [],
    excerpt:
      "我的职责包括调研前3年活动调性，提报Slogan，参与活动传播与内容运营，协同媒体与达人推动话题扩散，并进行社媒、新闻媒体舆情监测。"
  },
  {
    id: "media-xinhua-show-me-china",
    title: "新华社《Show Me China》海外账号运营及节目创作",
    category: "media",
    source: "新华社",
    description:
      "负责《Show Me China》海外账号运营，并主导多档节目的选题调研、脚本撰写与传播包装。",
    role: "海外社媒运营｜节目策划｜脚本撰写｜宣传物料设计",
    coreIdea: "把中国故事转化为海外受众更容易理解、愿意点击和转发的短视频内容。",
    result:
      "发帖均获1w+点赞；主导策划的杭州亚运会视频作品获新华社9月好稿推荐；参与的系列节目获新华社半年度社级优秀新闻作品奖。",
    imageType: "landscape",
    imageLayout: "hero-grid",
    images: [
      { src: "assets/generated/medium/portfolio/media-new/show-me-china-header.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/show-me-china-header.webp", alt: "Show Me China账号头图", fit: "contain" },
      { src: "assets/generated/medium/portfolio/media-new/newmedia-slide05-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/newmedia-slide05-01.webp", alt: "Show Me China作品图 1", position: "center 24%" },
      { src: "assets/generated/medium/portfolio/media-new/newmedia-slide05-02.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/newmedia-slide05-02.webp", alt: "Show Me China作品图 2", position: "center 38%" },
      { src: "assets/generated/medium/portfolio/media-new/newmedia-slide05-03.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/newmedia-slide05-03.webp", alt: "Show Me China作品图 3", position: "center 42%" },
      { src: "assets/generated/medium/portfolio/media-new/newmedia-slide05-04.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/newmedia-slide05-04.webp", alt: "Show Me China作品图 4", position: "center 36%" }
    ],
    links: [
      {
        label: "5G辣椒王返乡记",
        url: "https://h.xinhuaxmt.com/vh512/share/11630307?d=134b299&channel=weixinp"
      },
      {
        label: "AI科幻动画：遇见未来",
        url: "https://h.xinhuaxmt.com/vh512/share/11725555?docid=11725555&newstype=1001&d=134b369"
      },
      {
        label: "A Journey to the World's \"Porcelain Capital\"",
        url: "https://xhnewsapi.xinhuaxmt.com/share/news_pc?id=876136276615168&showType=3008&version=3.1.5&clientMarket=huawei&twoShare=1&uuid=86ba-3721-f272-3749-0b46"
      },
      {
        label: "打卡！闯关！杭州亚运“Go”智能",
        url: "https://h.xinhuaxmt.com/vh512/share/11658578?d=134b2ae&channel=weixinp&time=1778038003112"
      },
      {
        label: "《秀我中国》乡村志系列集纳",
        url: "https://h.xinhuaxmt.com/vh512/share/11683862?d=134b304&channel=weixin&time=1778037975406"
      }
    ],
    excerpt:
      "贡献重点：从选题、脚本到账号发布链路均有参与，兼顾内容表达与海外平台传播效果。"
  },
  {
    id: "media-xinhua-live",
    title: "新华社双语直播内容策划",
    category: "media",
    source: "新华社",
    description: "独立完成2场双语直播的前期策划，包括资料调研、场馆沟通、路线踩点与内容设计。",
    role: "直播策划｜调研踩点｜场馆沟通｜双语传播",
    coreIdea: "把场地资源转化为可观看、可讲述、适合海外传播的直播叙事线。",
    result: "当日播放量10w+。",
    imageType: "landscape",
    imageLayout: "grid",
    previewImageIndex: 0,
    images: [
      { src: "assets/generated/medium/portfolio/media-new/newmedia-slide06-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/newmedia-slide06-01.webp", alt: "新华社双语直播作品图 1", position: "center 28%" },
      { src: "assets/generated/medium/portfolio/media-new/newmedia-slide06-02.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/newmedia-slide06-02.webp", alt: "新华社双语直播作品图 2", position: "center 23%" },
      { src: "assets/generated/medium/portfolio/media-new/newmedia-slide06-03.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/newmedia-slide06-03.webp", alt: "新华社双语直播作品图 3", position: "68% 58%" },
      { src: "assets/generated/medium/portfolio/media-new/newmedia-slide06-04.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/newmedia-slide06-04.webp", alt: "新华社双语直播作品图 4", position: "center 23%" }
    ],
    links: [],
    excerpt:
      "贡献重点：直播前期统筹与内容脚本搭建，保障直播从准备到上线的执行顺畅。"
  },
  {
    id: "media-netease-health",
    title: "网易健康《世界微笑日》《新冠第二波》节目",
    category: "media",
    source: "网易健康",
    description:
      "围绕健康科普议题完成视频选题策划，并担任《世界微笑日》《新冠第二波，你阳了吗》节目出镜主持。",
    role: "视频策划｜主持｜健康科普节目",
    coreIdea:
      "用节日节点和公共健康话题做入口，把科普信息转化为更轻量、适合社交平台观看的视频内容。",
    result: "",
    imageType: "landscape",
    imageLayout: "grid",
    previewImageIndex: 2,
    images: [
      { src: "assets/generated/medium/portfolio/media-new/newmedia-slide03-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/newmedia-slide03-01.webp", alt: "网易健康节目作品图 1", position: "center 18%" },
      { src: "assets/generated/medium/portfolio/media-new/newmedia-slide03-02.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/newmedia-slide03-02.webp", alt: "网易健康节目作品图 2", position: "center 18%" },
      { src: "assets/generated/medium/portfolio/media-new/newmedia-slide03-03.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/newmedia-slide03-03.webp", alt: "网易健康节目作品图 3", position: "58% 68%" }
    ],
    links: [],
    excerpt:
      "贡献重点：完成选题策划与镜头前表达训练，积累视频内容从策划到呈现的完整经验。"
  },
  {
    id: "media-shell-pr",
    title: "壳牌石油品牌传播与舆情项目",
    category: "media",
    source: "博雅公关 For 壳牌石油",
    description:
      "参与壳牌品牌传播项目，支持公众号内容策划、传播执行、数据复盘与舆情监测。",
    role: "新媒体运营｜传播执行｜复盘分析｜舆情监测",
    coreIdea: "用传播数据、媒体反馈和舆情信号形成复盘闭环，辅助品牌判断下一步沟通方向。",
    result: "支持项目稳定落地，并在敏感议题期间输出风险提示与舆情分析。",
    imageType: "landscape",
    images: [{ src: "assets/generated/medium/portfolio/events-slide09-01.webp", thumbSrc: "assets/generated/thumbs/portfolio/events-slide09-01.webp", alt: "壳牌品牌传播项目" }],
    links: [],
    excerpt:
      "贡献重点：在传播执行之外承担监测与分析工作，帮助客户及时识别舆论风险。"
  },
  {
    id: "media-xinhua-interview",
    title: "新华社英语人物专访稿",
    category: "media",
    source: "新华社",
    description:
      "作为采访记者完成英文人物报道，实地探访古琴工作室并邀约多方受访者。",
    role: "采访记者｜撰稿人",
    coreIdea: "",
    result: "",
    hideCoreIdea: true,
    hideResult: true,
    imageType: "landscape",
    imageFit: "contain",
    images: [{ src: "assets/portfolio/media-new/xinhua-guqin-cover.svg", alt: "新华社英语人物专访稿头图" }],
    links: [
      {
        label: "《Across China: Traditional Chinese instrument strikes chord with contemporary life》",
        url: "https://xhnewsapi.xinhuaxmt.com/share/news_pc?id=840440375533568&showType=3001&utdId=b65c90b250554fa58c02c09028a11a8b&version=3.1.1"
      }
    ],
    excerpt:
      "作品思路：以古琴制作、修复与年轻人学习传统文化为线索，呈现传统乐器在当代生活中的延续。"
  },
  {
    id: "media-jiangxi-ceramic-column",
    title: "江西日报陶瓷绘画艺术家专访栏目",
    category: "media",
    source: "江西日报",
    description:
      "完成3篇陶瓷绘画艺术家人物专稿，负责采访、资料梳理与成稿写作。",
    role: "人物专访｜新闻稿编写｜艺术报道",
    coreIdea:
      "把艺术家的创作路径、技法语言和传承关系，写成大众可读的人物故事。",
    result: "",
    imageType: "landscape",
    imageLayout: "feature-grid",
    previewImageIndex: 1,
    images: [
      { src: "assets/generated/medium/portfolio/jiangxi/wuyulun-cover.webp", thumbSrc: "assets/generated/thumbs/portfolio/jiangxi/wuyulun-cover.webp", alt: "武育伦人物专稿配图", fit: "contain", position: "center" },
      { src: "assets/generated/medium/portfolio/jiangxi/wanggang-cover.webp", thumbSrc: "assets/generated/thumbs/portfolio/jiangxi/wanggang-cover.webp", alt: "王刚人物专稿配图", position: "center 42%" },
      { src: "assets/generated/medium/portfolio/jiangxi/zhangweibin-cover.webp", thumbSrc: "assets/generated/thumbs/portfolio/jiangxi/zhangweibin-cover.webp", alt: "张为彬人物专稿配图", fit: "contain", position: "center" }
    ],
    links: [],
    pdfs: [
      {
        id: "wuyulun",
        title: "“堆白”的现实主义瓷上画家武育伦",
        url: "assets/portfolio/jiangxi/wuyulun.pdf",
        pages: jiangxiArticlePages.wuyulun
      },
      {
        id: "wanggang",
        title: "青绿年华 陶瓷写意画家王刚",
        url: "assets/portfolio/jiangxi/wanggang.pdf",
        pages: jiangxiArticlePages.wanggang
      },
      {
        id: "zhangweibin",
        title: "粉彩花鸟画家张为彬“一飞冲天”",
        url: "assets/portfolio/jiangxi/zhangweibin.pdf",
        pages: jiangxiArticlePages.zhangweibin
      }
    ],
    excerpt:
      "贡献重点：用人物专访方法处理艺术题材，兼顾专业信息与报纸读者的阅读门槛。"
  },
  {
    id: "media-acg-feature",
    title: "二次元文化专题稿件",
    category: "media",
    source: "专题稿件",
    description:
      "持续完成15篇二次元文化专题推文，覆盖动画、漫画、插画师、声优与IP产业。",
    role: "选题策划｜资料梳理｜专题撰稿｜文化观察",
    coreIdea:
      "把创作者故事、作品风格和社群热点转化为可传播选题，提升小众文化内容的可读性。",
    result: "",
    imageType: "landscape",
    images: [{ src: "assets/generated/medium/portfolio/media-new/acg-wuhu-card.webp", thumbSrc: "assets/generated/thumbs/portfolio/media-new/acg-wuhu-card.webp", alt: "二次元文化专题稿件头图" }],
    links: [
      {
        label: "美少女机甲还能这么画？24岁日本画师把机械兽娘画出了新高度！",
        url: "https://mp.weixin.qq.com/s/h4N1R5N2DtQzTPZZfKnnJw"
      },
      {
        label: "他是《女神异闻录》系列的幕后灵魂人物！笔下的角色为何如此令人心动？",
        url: "https://mp.weixin.qq.com/s/jGrRLZb1g5khg2alnhL8gg"
      },
      {
        label: "注意！日本惊现神秘新锐画师，作品更新酷似米山舞新作，Ta 的笔下藏着怎样的奇幻世界？",
        url: "https://mp.weixin.qq.com/s/dZQKyOg2zpAG-gOiMamoXQ"
      },
      {
        label: "每年靠IP躺赚260亿日元，她是漫画界真正的公主！",
        url: "https://mp.weixin.qq.com/s/N6k_Xy-DkE4C9Ysjncxndw"
      },
      {
        label: "尺度大但真的美！她是日本三大女性幻想插画家之一！",
        url: "https://mp.weixin.qq.com/s/EB8qtkBBxusvd-GCW1TWHw"
      },
      {
        label: "“日本恐怖漫画第一人”逝世，伊藤润二、富坚义博都曾是他的小迷弟！",
        url: "https://mp.weixin.qq.com/s/wI5LpQ7l5xZmglIVfb9WiQ"
      },
      {
        label: "被鸟山明钦定的“悟空”声优，88岁高龄打破两项吉尼斯世界纪录！",
        url: "https://mp.weixin.qq.com/s/SjIGx2NbLMofapVzBZA95A"
      },
      {
        label: "一年纳税3亿日元，休刊近4年的富坚义博凭什么能“躺着赚钱”？",
        url: "https://mp.weixin.qq.com/s/gSlZCWLjgm2rmX_QMvuiRA"
      },
      {
        label: "是谁在说排球少年冷门啊？一部剧场版重回顶流！",
        url: "https://mp.weixin.qq.com/s/l_eEhN5DqQdhsYpjo_emZw"
      },
      {
        label: "新海诚：我的下一部动画电影作品是...",
        url: "https://mp.weixin.qq.com/s/t3_Ho5u7K_XF8A6D1Plrnw"
      },
      {
        label: "“太超前了...这似乎不像是人类做的动画！”",
        url: "https://mp.weixin.qq.com/s/ZaS0OetUUPzL7S5AGDbWNw"
      },
      {
        label: "以诡谲画风闻名的汤浅政明，何以成为日本最天才的动画人？",
        url: "https://mp.weixin.qq.com/s/v4VqM-BLM0rXrM_DhLpqCA"
      },
      {
        label: "因为一个片段引发全网找正片？！这部最强同人动画原来幕后作者是他们！",
        url: "https://mp.weixin.qq.com/s/GWCvII8XmJWtJiYcQyghMg"
      },
      {
        label: "画面信息量多到爆炸！20岁天才画师靠Eva同人一画成名，赢得全球粉丝狂热追捧！",
        url: "https://mp.weixin.qq.com/s/iR41exZKXJhu2WbiR3Y_AQ"
      },
      {
        label: "灵能第6话神回展开！彻底破防了！日本打戏天王、骨头社的核心staff大起底！",
        url: "https://mp.weixin.qq.com/s/54GLGZ8bxeIThFagZwdJJQ"
      }
    ],
    excerpt: "贡献重点：独立完成选题判断、资料整合与公众号长文写作，形成可持续更新的专题内容池。"
  },
  {
    id: "ai-vibe-coding-tools",
    title: "浏览器插件获“妙招大赛”优秀奖",
    category: "ai",
    description:
      "Vibe Coding开发多个轻量化工具，用于辅助数据统计、推文形式优化及部分运营流程自动化，提升日常运营效率。",
    role: "需求拆解｜轻量工具开发｜运营流程优化",
    coreIdea: "从日常运营中的重复劳动切入，用轻量工具承担统计、格式优化与流程自动化任务。",
    result: "基于美团AI浏览器Tabbit开发运营小组件并参与内部“妙招”大赛，获得优秀奖。",
    imageType: "landscape",
    imageLayout: "award-pair",
    images: [
      {
        src: "assets/generated/medium/portfolio/ai-miaozhao-award-certificate.webp", thumbSrc: "assets/generated/thumbs/portfolio/ai-miaozhao-award-certificate.webp",
        alt: "Tabbit 浏览器首届妙招脚本大赛优秀奖证书",
        fit: "contain"
      },
      {
        src: "assets/generated/medium/portfolio/ai-off-work-countdown.webp", thumbSrc: "assets/generated/thumbs/portfolio/ai-off-work-countdown.webp",
        alt: "下班倒计时浏览器插件界面截图",
        fit: "contain"
      },
      {
        src: "assets/generated/medium/portfolio/ai-cat-desktop-pet.webp", thumbSrc: "assets/generated/thumbs/portfolio/ai-cat-desktop-pet.webp",
        alt: "用自家猫做成的小猫桌宠浏览器插件",
        fit: "contain"
      }
    ],
    links: [],
    detailNarrative:
      "使用Vibe Coding做一些小的浏览器插件，比如把家里养的猫做成能与我互动的小猫桌宠；或为了减少琐碎计算，快速手搓一个桌面计算器、工作时间提醒这类即时反馈工具。它们不一定是大型系统，但都来自真实的工作和生活需求，能把“想要一个顺手小工具”的念头快速变成可用界面。在美团 Tabbit 浏览器发布前期，我把自己做的“下班倒计时 + 日薪到手统计”插件上传参赛，用它把剩余工作时间和实时收入反馈可视化，既提供一点工作中的情绪陪伴，也让日常节奏更直观，最终获得了首届妙招脚本大赛优秀奖。",
    excerpt: "功能 + 场景 + 效果：辅助数据统计、推文形式优化、运营流程自动化，提升日常运营效率。"
  },
  {
    id: "ai-dashboard",
    title: "NoCode自动化数据看板",
    category: "ai",
    description:
      "在明镜专项中使用NoCode（AI工具）搭建自动化数据看板，为各大区执行与定期数据播报提供运营支撑。",
    role: "数据流程设计｜No Code搭建｜项目运营支撑",
    coreIdea: "把跨团队项目中的数据统计、执行追踪与复盘沉淀为可复用运营工具。",
    result: "在数据统计环节节约70%人工成本，并沉淀为可复用运营工具。",
    imageType: "landscape",
    previewImageIndex: 0,
    images: [
      {
        src: "assets/generated/medium/portfolio/ai-mingjing-dashboard.webp", thumbSrc: "assets/generated/thumbs/portfolio/ai-mingjing-dashboard.webp",
        alt: "明镜项目过程指标数据自动化看板界面",
        fit: "contain"
      }
    ],
    links: [],
    detailNarrative:
      "明镜专项推进过程中，学习明细、员工名单和完成情况需要反复汇总，如果完全依赖人工处理，不仅耗时，也容易在跨表匹配和口径统计上出错。我搭建这个 No Code 自动化看板，是希望把原本分散在 Excel 里的过程数据转化成一套可上传、可处理、可导出的运营工具；它支持上传员工学习明细和员工名单，自动完成数据处理并生成汇总看板，帮助项目团队更快掌握各大区执行进度，也让数据播报从临时统计变成可复用流程，在统计环节节约了约70%的人工成本。",
    excerpt: "功能 + 场景 + 效果：服务明镜专项数据播报与执行追踪，降低人工统计成本。"
  },
  {
    id: "ai-violation-reporting-skill",
    title: "Violation-Reporting-Skill",
    category: "ai",
    description:
      "基于 OpenClaw 搭建的廉正案件通报 Skill，用于处理每月公司发生的廉正案件数据，并自动生成可用于推文排版的 HTML 代码。",
    role: "AI治理场景构想｜Skill需求设计｜案件数据处理｜推文排版提效",
    coreIdea: "把月度廉正案件通报中重复的数据整理、结构归类和 HTML 排版生成交给 AI Skill 承担，让团队从手动处理转向审核与优化。",
    result: "自动处理月度廉正案件数据并形成推文排版 HTML，为团队提效4人日/月。",
    imageType: "landscape",
    previewImageIndex: 0,
    images: [
      {
        src: "assets/generated/medium/portfolio/ai-violation-reporting-skill.webp", thumbSrc: "assets/generated/thumbs/portfolio/ai-violation-reporting-skill.webp",
        alt: "OpenClaw 中 Violation-Reporting-Skill 的配置界面",
        fit: "contain"
      }
    ],
    links: [],
    detailNarrative:
      "美团每月廉正案件通报都需要先整理案件数据，再把不同类型的案例转化成适合推文发布的结构和排版代码，这类工作规则明确但非常耗时。我设计 Violation-Reporting-Skill，是为了让 AI 接管其中最重复的部分：读取月度廉正案件数据，按照通报逻辑完成归类、结构整理，并直接生成可用于推文排版的 HTML 代码。这样团队成员可以把精力放在内容审核、风险表达和传播判断上，而不是反复手动排版，最终为团队节省约4人日/月。",
    excerpt: "功能 + 场景 + 效果：自动处理月度廉正案件数据，生成推文排版 HTML，将重复排版工作转化为可复用 Skill。"
  },
  {
    id: "ai-poetry-system",
    title: "诗词背诵管理系统",
    category: "ai",
    description:
      "为家庭成员定制的诗词背诵管理工具，支持诗词录入、搜索、背诵状态管理、复习入口与学习笔记记录，把零散背诵任务整理成可持续追踪的学习流程。",
    role: "需求拆解｜产品原型｜No Code搭建｜移动端体验优化",
    coreIdea: "从真实家庭学习场景出发，把“查找诗词、记录进度、复习巩固、沉淀笔记”整合进一个轻量系统，让长辈也能直观管理背诵进度。",
    result: "完成移动端可用版本，覆盖诗词列表、详情页、背诵复习和学习笔记等核心流程，可用于日常诗词积累与复习提醒。",
    imageType: "landscape",
    previewImageIndex: 3,
    images: [
      {
        src: "assets/generated/medium/portfolio/ai-poetry-detail-main.webp", thumbSrc: "assets/generated/thumbs/portfolio/ai-poetry-detail-main.webp",
        alt: "诗词背诵管理系统详情页：正文、笔记与背诵录音",
        position: "top",
        fit: "contain"
      },
      {
        src: "assets/generated/medium/portfolio/ai-poetry-detail-list.webp", thumbSrc: "assets/generated/thumbs/portfolio/ai-poetry-detail-list.webp",
        alt: "诗词背诵管理系统首页：诗词列表、搜索和背诵状态",
        position: "top",
        fit: "contain"
      },
      {
        src: "assets/generated/medium/portfolio/ai-poetry-detail-review.webp", thumbSrc: "assets/generated/thumbs/portfolio/ai-poetry-detail-review.webp",
        alt: "诗词背诵管理系统复习页：单篇复习与排序",
        position: "top",
        fit: "contain"
      },
      {
        src: "assets/generated/medium/portfolio/ai-poetry-cover.webp", thumbSrc: "assets/generated/thumbs/portfolio/ai-poetry-cover.webp",
        alt: "诗词背诵管理系统卡片预览图",
        fit: "contain"
      }
    ],
    links: [],
    detailNarrative:
      "这个工具源于妈妈的需求，她希望对大量的诗词学习和背诵资料进行管理，但纸质记录和聊天收藏都很难长期追踪进度。我把这个需求拆成诗词录入、搜索管理、背诵状态、复习入口和学习笔记几个动作，做成一个适合手机使用的诗词背诵管理系统。它既能记录已经背过的诗，也能进入单篇详情查看正文、释义、作者信息并留下笔记，还可以通过复习页重新巩固记忆；对使用者来说，它把零散的背诵任务变成了一个可查看、可复习、可持续积累的学习流程。",
    excerpt: "功能 + 场景 + 效果：面向家庭学习场景，沉淀诗词库、背诵记录、复习入口和学习笔记，让诗词积累更可视化。"
  },
  {
    id: "ai-speed-reading",
    title: "AI倍速朗读工具",
    category: "ai",
    description:
      "为阅读场景定制的 AI 朗读工具，用于管理长文本阅读材料，并将文章内容转化为可随时按任意倍速播放的听读任务，适合通勤、散步或碎片时间继续阅读。",
    role: "需求拆解｜阅读工具设计｜AI辅助搭建｜文本朗读流程优化",
    coreIdea: "把“想读但没时间读”的长文本沉淀成可管理的阅读清单，通过朗读按钮快速进入听书模式，降低长篇材料的阅读门槛。",
    result: "完成阅读材料管理、历史统计、新建阅读、字数统计与一键朗读等核心功能，支持多篇材料持续积累和随时调用。",
    imageType: "landscape",
    previewImageIndex: 0,
    images: [
      {
        src: "assets/generated/medium/portfolio/ai-speed-reading-tool.webp", thumbSrc: "assets/generated/thumbs/portfolio/ai-speed-reading-tool.webp",
        alt: "AI倍速朗读工具界面：阅读材料管理与一键朗读",
        fit: "contain"
      }
    ],
    links: [],
    detailNarrative:
      "AI倍速朗读工具也是从家庭阅读场景出发做的：有些长文本材料值得读，但并不总有完整时间坐下来阅读。我希望把这些材料变成可以随时调用的听读任务，因此设计了阅读材料管理、历史统计、新建阅读、字数统计和一键朗读功能。使用者可以复制或导入文本，之后在通勤、散步或做家务时继续收听，既保留了阅读材料的管理秩序，也把原本被搁置的长文本转化成更容易被完成的音频化学习内容。",
    excerpt: "功能 + 场景 + 效果：管理阅读材料、统计字数与历史记录，并通过一键朗读把长文本转化为可随时收听的内容。"
  }
];
