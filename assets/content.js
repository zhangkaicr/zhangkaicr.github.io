/* =============================================================
   content.js — 全站内容与文案（唯一需要日常编辑的文件）
   -------------------------------------------------------------
   meta        基本信息（ORCID / 邮箱 / 主页），不分语言
   profile     侧栏姓名、头衔、单位、地点（按语言）
   i18n.zh/en  界面文案与中英正文
   research    研究方向卡片
   experience  教育 / 工作 / 学术任务（来自简历与邀请函）
   publications 15 篇成果，来自 ORCID 公开记录（标题保留英文原文）
   teaching    方法学教学条目
   outreach    公众号 / B站 / 小红书
   links       侧栏与联系区的图标链接
   新增论文：在 publications 数组追加一项即可，中英文页面同步生效。
   ============================================================= */

window.SITE = {
  meta: {
    orcidId: "0000-0002-2292-3696",
    orcid: "https://orcid.org/0000-0002-2292-3696",
    github: "https://github.com/zhangkaicr",
    email: "zhangkaicr@foxmail.com",
    bilibili: "https://space.bilibili.com/627812104",
    xiaohongshu: "https://www.xiaohongshu.com/search_result?keyword=94148178085",
    /* 如日后有 Google Scholar 主页或 CV PDF，填入链接即会自动出现按钮 */
    scholar: "",
    cv: "",
    slides: "files/KaiZhang-TTE-CCI2025.pptx",
    updated: "2026-11-06"
  },

  profile: {
    zh: {
      name: "张凯",
      role: "医学博士 · 肝胆外科 · 临床研究方法学",
      affiliation: "中国医学科学院肿瘤医院 · 肝胆外科",
      location: "北京 · 中国"
    },
    en: {
      name: "Kai Zhang, MD",
      role: "Hepatobiliary Surgery · Clinical Research Methodology",
      affiliation: "Dept. of Hepatobiliary Surgery, Cancer Hospital, CAMS & PUMC",
      location: "Beijing, China"
    }
  },

  i18n: {
    zh: {
      skip: "跳转到正文",
      langLabel: "语言 / Language",
      orcidLabel: "ORCID iD",
      heroEyebrow: "学术主页 · Academic Homepage",
      heroGreeting: "你好，我是 ",
      heroLead: "肝胆外科医师、医学数据科学研究者。关注观察性数据能否回答一个随机试验本该回答的问题——目标试验模拟、因果推断与真实世界证据，落脚于肝胆肿瘤的临床决策。",
      cvLabel: "下载简历 CV",
      emailLabel: "写信给我",
      nav: {
        about: "首页",
        research: "研究方向",
        aboutDetail: "关于我",
        experience: "经历",
        publications: "论文",
        outreach: "教学与科普",
        contact: "联系"
      },
      researchTitle: "研究方向",
      researchIntro: "方法学与临床问题并行：一边把研究设计做对，一边把结果做成能指导决策的证据。",
      aboutTitle: "关于我",
      expTitle: "教育与工作经历",
      expIntro: "临床医学训练打底，方法学训练加持；从外科临床问题出发，走向可复现的临床研究。",
      eduLabel: "教育背景",
      apptLabel: "工作经历",
      serviceLabel: "学术任务与受邀报告",
      pubTitle: "论文成果",
      pubIntro: "以下 15 项成果来自 ORCID 公开记录，按年份倒序排列。标题保留英文原文，便于引用与检索。",
      filterPlaceholder: "按标题、期刊或年份筛选…",
      pubCount: "共 {n} 篇",
      pubFoot: "完整、持续更新的成果列表请见 ORCID 公开档案。",
      outreachTitle: "教学与科普",
      outreachIntro: "把因果推断讲给临床医生听：系统课程、文献分享，以及配套可复现的 R / Python 代码。",
      accountsTitle: "科普平台与写作",
      contactTitle: "联系方式",
      contactBody: "欢迎就临床研究设计、目标试验模拟、真实世界数据分析、方法学教学或科研合作来信。中文或英文均可。",
      footerTech: "版式参考 academicpages / Minimal Mistakes · 中英双语一键切换",
      footerLine: "© 2026 张凯 · 最后更新 {updated} · 论文信息以 ORCID 公开记录为依据",
      doi: "DOI",
      pubmed: "PubMed",
      searchHint: "微信内搜索名称即可关注",
      visitHint: "访问主页 ↗",
      slidesLabel: "下载会议讲义（PPTX，约 34 MB）↗",
      current: "现任"
    },
    en: {
      skip: "Skip to content",
      langLabel: "Language / 语言",
      orcidLabel: "ORCID iD",
      heroEyebrow: "Academic Homepage · 学术主页",
      heroGreeting: "Hi, I'm ",
      heroLead: "A hepatobiliary surgeon and medical data scientist, interested in whether observational data can answer the question a randomized trial would have asked — target trial emulation, causal inference and real-world evidence, applied to hepato-biliary oncology.",
      cvLabel: "Download CV",
      emailLabel: "Get in touch",
      nav: {
        about: "Home",
        research: "Research",
        aboutDetail: "About",
        experience: "Experience",
        publications: "Publications",
        outreach: "Teaching",
        contact: "Contact"
      },
      researchTitle: "Research",
      researchIntro: "Methodology and clinical questions in parallel: getting the design right, and turning results into evidence that can inform decisions.",
      aboutTitle: "About me",
      expTitle: "Education & Experience",
      expIntro: "Clinical training first, methods training on top — starting from surgical questions and moving toward reproducible clinical research.",
      eduLabel: "Education",
      apptLabel: "Appointments",
      serviceLabel: "Invited Academic Activities",
      pubTitle: "Publications",
      pubIntro: "The 15 works below come from the public ORCID record, listed newest first. Titles are kept in their original English for citation and search.",
      filterPlaceholder: "Filter by title, journal or year…",
      pubCount: "{n} works",
      pubFoot: "For a complete, continuously updated list, see the public ORCID record.",
      outreachTitle: "Teaching & Science Communication",
      outreachIntro: "Making causal inference usable for clinicians: structured courses, journal clubs, and reproducible R / Python code.",
      accountsTitle: "Writing & Platforms",
      contactTitle: "Contact",
      contactBody: "Happy to hear about collaborations on clinical study design, target trial emulation, real-world data analysis, methods teaching or research collaborations. Chinese or English both work.",
      footerTech: "Layout inspired by academicpages / Minimal Mistakes · instant 中文 / EN switch",
      footerLine: "© 2026 Kai Zhang · Last updated {updated} · Publications sourced from the public ORCID record",
      doi: "DOI",
      pubmed: "PubMed",
      searchHint: "Search the name in WeChat to follow",
      visitHint: "Visit profile ↗",
      slidesLabel: "Download talk slides (PPTX, ~34 MB) ↗",
      current: "Current"
    }
  },

  about: {
    zh: [
      "张凯，医学博士，现任职于中国医学科学院肿瘤医院肝胆外科。临床医学本科毕业于华北理工大学医学部，外科学硕士毕业于北京大学医学部，肿瘤外科专业型博士毕业于北京协和医学院；先后在北京大学第一医院、北京大学滨海医院完成住院医师规范化培训与普外科临床工作，并在中国医学科学院肿瘤医院完成肿瘤外科专科医师规范化培训。",
      "临床之外，长期投入医学数据科学与临床研究方法学：熟练运用 R / Python 进行临床数据分析，覆盖临床预测模型的构建与验证、真实世界研究、生存分析、目标试验模拟与因果推断，也做过转录组、免疫组库与单细胞方向的组学分析。研究问题多来自肝胆肿瘤与介入治疗一线——晚期肝细胞癌、肝内胆管癌与胆道肿瘤的联合治疗策略，HAIC、<sup>125</sup>I 支架等介入治疗与免疫／靶向方案的评估。",
      "近年尤其关注「设计先于分析」：把观察性研究按目标试验的协议重新组织，明确入组、治疗策略、时间零点与结局，系统识别永恒时间偏倚、适应证混杂和随时间变化的治疗策略。ORCID 收录 15 项成果，见于 International Journal of Surgery、JHEP Reports、Frontiers in Immunology、Journal of Translational Medicine、HepatoBiliary Surgery and Nutrition 等期刊。",
      "同时运营公众号与视频频道，把因果推断、文献精读和 R 语言实践讲给临床研究者听，强调方法学结论可以被复现、被质疑、被改进。"
    ],
    en: [
      "Kai Zhang, MD, is with the Department of Hepatobiliary Surgery at the Cancer Hospital, Chinese Academy of Medical Sciences & Peking Union Medical College. He studied clinical medicine at North China University of Science and Technology, completed a professional master's degree in surgery at Peking University Health Science Center, and a professional doctorate in surgical oncology at Peking Union Medical College. His clinical training includes residency at Peking University First Hospital, general surgery at Peking University Binhai Hospital, and a surgical oncology fellowship at the Cancer Hospital, CAMS.",
      "Alongside clinical work, he works in medical data science and clinical research methodology, using R and Python for clinical prediction models, real-world evidence, survival analysis, target trial emulation and causal inference, as well as transcriptomic, immune-repertoire and single-cell analyses. His questions come largely from hepato-biliary oncology and interventional practice: combination strategies for advanced HCC, intrahepatic cholangiocarcinoma and biliary tract cancer, and the evaluation of HAIC, <sup>125</sup>I stents and immuno- or targeted regimens.",
      "A particular focus is design before analysis: re-framing observational studies around a hypothetical trial protocol — eligibility, treatment strategies, time zero and outcomes — while addressing immortal time bias, confounding by indication and time-varying treatment strategies. Fifteen works are recorded in ORCID, including papers in the International Journal of Surgery, JHEP Reports, Frontiers in Immunology, Journal of Translational Medicine and HepatoBiliary Surgery and Nutrition.",
      "He also writes and teaches causal inference, journal clubs and hands-on R practice for clinical researchers through WeChat official accounts and video channels, with an emphasis on conclusions that can be reproduced, challenged and improved."
    ]
  },

  research: [
    {
      icon: "TTE",
      zh: { title: "目标试验模拟与因果推断", text: "把观察性研究按「假设试验协议」重新组织：明确入组、治疗策略、时间零点、结局与因果对比，识别永恒时间偏倚等设计错误。" },
      en: { title: "Target Trial Emulation & Causal Inference", text: "Re-framing observational studies around a hypothetical trial protocol: eligibility, treatment strategies, time zero, outcomes and the causal contrast — and catching design errors such as immortal time bias." }
    },
    {
      icon: "RWE",
      zh: { title: "真实世界证据与临床研究设计", text: "基于多中心登记、数据库与电子病历评估介入及系统治疗，关注混杂控制、敏感性分析与分析流程可复现。" },
      en: { title: "Real-World Evidence & Study Design", text: "Evaluating interventional and systemic treatments using registry and EHR data, with attention to confounding control, sensitivity analyses and reproducible workflows." }
    },
    {
      icon: "ML",
      zh: { title: "预测模型、生信与机器学习", text: "临床预测模型的建立与验证、动态预后、生存分析，以及转录组／单细胞／AI 辅助的个体化治疗决策。" },
      en: { title: "Prediction, Bioinformatics & ML", text: "Development and validation of clinical prediction models, dynamic prognosis, survival analysis, and multi-omics / AI-assisted treatment decisions." }
    },
    {
      icon: "HBP",
      zh: { title: "肝胆肿瘤与介入治疗", text: "肝细胞癌、肝内胆管癌与胆道肿瘤的联合治疗、HAIC 与 125I 支架等介入治疗，及免疫／靶向方案的疗效评估。" },
      en: { title: "Hepato-Biliary Oncology & Intervention", text: "Combination therapies for HCC, intrahepatic cholangiocarcinoma and biliary tract cancer; HAIC and 125I stents; immuno- and targeted regimens." }
    }
  ],

  experience: {
    education: [
      { period: "2007–2012", zh: { title: "临床医学 · 本科", org: "华北理工大学医学部" }, en: { title: "Clinical Medicine · Bachelor", org: "North China University of Science and Technology, School of Medicine" } },
      { period: "2012–2015", zh: { title: "外科学 · 专业型硕士", org: "北京大学医学部" }, en: { title: "Surgery · Professional Master's", org: "Peking University Health Science Center" } },
      { period: "2018–2021", zh: { title: "肿瘤外科 · 专业型博士", org: "北京协和医学院" }, en: { title: "Surgical Oncology · Professional Doctorate (MD)", org: "Peking Union Medical College" } }
    ],
    appointments: [
      { period: "2012–2015", zh: { title: "住院医师规范化培训", org: "北京大学第一医院" }, en: { title: "Residency in Surgery", org: "Peking University First Hospital" } },
      { period: "2015–2018", zh: { title: "住院医师 / 住院总医师", org: "北京大学滨海医院（普外科）" }, en: { title: "Resident / Chief Resident", org: "Peking University Binhai Hospital, General Surgery" } },
      { period: "2018–2021", zh: { title: "肿瘤外科专科医师规范化培训", org: "中国医学科学院肿瘤医院" }, en: { title: "Surgical Oncology Fellowship", org: "Cancer Hospital, Chinese Academy of Medical Sciences" } },
      { period: "现任", current: true, zh: { title: "肝胆外科", org: "中国医学科学院肿瘤医院" }, en: { title: "Department of Hepatobiliary Surgery", org: "Cancer Hospital, CAMS & PUMC" } }
    ],
    service: [
      {
        period: "2025.11.22",
        slides: true,
        zh: { title: "受邀报告 · 基于因果推断的目标试验模拟框架在医学研究中的应用", org: "2025 中国医师协会介入医师年会（CCI 2025）· 南京 · 15 分钟" },
        en: { title: "Invited talk · Applying the Causal-Inference Target Trial Emulation Framework in Medical Research", org: "CCI 2025, Chinese Medical Doctor Association Interventional Physicians Annual Meeting · Nanjing · 15 min" }
      }
    ]
  },

  /* 标题、期刊名保留英文原文（学术引用惯例）；tag 用于中英界面提示 */
  publications: [
    { year: 2026, title: "A Dynamic Prognostic and Adaptive Treatment Framework for Advanced Biliary Tract Cancer", journal: "JHEP Reports: Innovation in Hepatology", doi: "10.1016/j.jhepr.2026.101976", pmid: "42542210", tag: { zh: "动态预测", en: "Dynamic prediction" } },
    { year: 2026, title: "Machine Learning–Guided Personalized Immunochemotherapy Strategies in Intrahepatic Cholangiocarcinoma", journal: "JHEP Reports", doi: "10.1016/j.jhepr.2026.102004", pmid: "", tag: { zh: "机器学习", en: "Machine learning" } },
    { year: 2025, title: "125I stent plus combination therapy for HCC and portal vein tumor thrombosis: a nationwide target trial emulation", journal: "International Journal of Surgery", doi: "10.1097/JS9.0000000000004390", pmid: "41376371", tag: { zh: "目标试验模拟", en: "Target trial emulation" } },
    { year: 2024, title: "A preliminary study of optimal treatment response rates in patients undergoing hepatic arterial infusion chemotherapy combined with molecular targeting and immunotherapy", journal: "Frontiers in Immunology", doi: "10.3389/fimmu.2024.1303259", pmid: "38660298", tag: { zh: "真实世界研究", en: "Real-world study" } },
    { year: 2023, title: "Bioinformatics Analysis of the Prognostic Significance of VPS16 in Hepatocellular Carcinoma and Its Role in Drug Screening", journal: "BioMed Research International", doi: "10.1155/2023/2501596", pmid: "37124933", tag: { zh: "生物信息学", en: "Bioinformatics" } },
    { year: 2023, title: "Hepatic arterial infusion chemotherapy combined with anti-PD-1/PD-L1 immunotherapy and molecularly targeted agents for advanced hepatocellular carcinoma: a real world study", journal: "Frontiers in Immunology", doi: "10.3389/fimmu.2023.1127349", pmid: "37180098", tag: { zh: "真实世界研究", en: "Real-world study" } },
    { year: 2022, title: "Serum metabolic effects of corn oligopeptides with 7-day supplementation on early post-surgery primary liver cancer patients: a double-blind randomized controlled trial", journal: "HepatoBiliary Surgery and Nutrition", doi: "10.21037/hbsn-21-116", pmid: "36523946", tag: { zh: "随机对照试验", en: "Randomized trial" } },
    { year: 2022, title: "The role of intraoperative electron radiotherapy in centrally located hepatocellular carcinomas treated with narrow-margin (<1 cm) hepatectomy: a prospective, phase 2 study", journal: "HepatoBiliary Surgery and Nutrition", doi: "10.21037/hbsn-21-223", pmid: "36016755", tag: { zh: "前瞻性研究", en: "Prospective study" } },
    { year: 2021, title: "Establishment, validation and evaluation of predictive model for early relapse after R0 resection in hepatocellular carcinoma patients with microvascular invasion", journal: "Journal of Translational Medicine", doi: "10.1186/s12967-021-02940-0", pmid: "34229698", tag: { zh: "预测模型", en: "Prediction model" } },
    { year: 2021, title: "Integrated analysis of the rhesus monkey liver transcriptome during development and human primary HCC AFP-related gene expression", journal: "Molecular Therapy – Nucleic Acids", doi: "10.1016/j.omtn.2021.06.004", pmid: "", tag: { zh: "生物信息学", en: "Bioinformatics" } },
    { year: 2021, title: "Research progress regarding programmed cell death 1/programmed cell death ligand 1 inhibitors combined with targeted therapy for treating hepatocellular carcinoma", journal: "World Journal of Gastrointestinal Surgery", doi: "10.4240/wjgs.v13.i10.1136", pmid: "", tag: { zh: "综述", en: "Review" } },
    { year: 2020, title: "Adjuvant radiotherapy in central hepatocellular carcinoma after narrow-margin hepatectomy: A 10-year real-world evidence", journal: "Chinese Journal of Cancer Research", doi: "10.21147/j.issn.1000-9604.2020.05.09", pmid: "33223759", tag: { zh: "真实世界证据", en: "Real-world evidence" } },
    { year: 2020, title: "Enhanced recovery after surgery strategy for cirrhosis patients undergoing hepatectomy: experience in a single research center", journal: "Annals of Surgical Treatment and Research", doi: "10.4174/astr.2020.98.5.224", pmid: "32411627", tag: { zh: "临床研究", en: "Clinical study" } },
    { year: 2020, title: "Lymphoepithelioma-like carcinoma in liver not associated with Epstein-Barr virus: a report of 3 cases and literature review", journal: "Diagnostic Pathology", doi: "10.1186/s13000-020-01035-6", pmid: "", tag: { zh: "病例系列", en: "Case series" } },
    { year: 2020, title: "Postoperative adjuvant treatment strategy for hepatocellular carcinoma with microvascular invasion: a non-randomized interventional clinical study", journal: "BMC Cancer", doi: "10.1186/s12885-020-07087-7", pmid: "32611327", tag: { zh: "临床研究", en: "Clinical study" } }
  ],

  teaching: [
    { period: { zh: "方法学课程", en: "Methods course" }, zh: { title: "目标试验模拟（TTE）", text: "从协议要素到偏倚识别：入组、治疗策略、时间零点、结局与因果对比的课堂拆解。" }, en: { title: "Target Trial Emulation (TTE)", text: "From protocol elements to bias recognition: eligibility, treatment strategies, time zero, outcomes and the causal contrast." } },
    { period: { zh: "上机实践", en: "Hands-on" }, zh: { title: "因果推断与 R / Python", text: "倾向评分、DAG、G-methods、生存分析的演示代码与课堂练习。" }, en: { title: "Causal Inference with R / Python", text: "Companion code and exercises for propensity scores, DAGs, g-methods and survival analysis." } },
    { period: { zh: "文献与专题", en: "Journal club" }, zh: { title: "临床研究中的常见偏倚", text: "永恒时间偏倚、观察性数据中的混杂与 HTE 分析的案例式讲解。" }, en: { title: "Common Biases in Clinical Research", text: "Case-based discussion of immortal time bias, confounding in observational data, and heterogeneous treatment effects." } }
  ],

  outreach: [
    {
      icon: "wechat",
      href: "",
      zh: { label: "微信公众号", detail: "灵活胖子的科研进步之路 · 灵活胖子的柳叶刀进步之路" },
      en: { label: "WeChat Official Accounts", detail: "灵活胖子的科研进步之路 · 灵活胖子的柳叶刀进步之路" }
    },
    {
      icon: "bili",
      href: "https://space.bilibili.com/627812104",
      zh: { label: "哔哩哔哩", detail: "灵活胖子的进步之路 · 方法学课程与文献分享" },
      en: { label: "Bilibili", detail: "灵活胖子的进步之路 · methods courses and journal clubs" }
    },
    {
      icon: "xhs",
      href: "https://www.xiaohongshu.com/search_result?keyword=94148178085",
      zh: { label: "小红书", detail: "灵活胖子的进步之路 · 小红书号 94148178085" },
      en: { label: "Xiaohongshu (RED)", detail: "灵活胖子的进步之路 · ID 94148178085" }
    }
  ],

  links: [
    { icon: "orcid", label: { zh: "ORCID", en: "ORCID" }, href: "https://orcid.org/0000-0002-2292-3696" },
    { icon: "github", label: { zh: "GitHub", en: "GitHub" }, href: "https://github.com/zhangkaicr" },
    { icon: "mail", label: { zh: "邮箱", en: "Email" }, href: "mailto:zhangkaicr@foxmail.com" },
    { icon: "bili", label: { zh: "哔哩哔哩", en: "Bilibili" }, href: "https://space.bilibili.com/627812104" },
    { icon: "xhs", label: { zh: "小红书", en: "Xiaohongshu" }, href: "https://www.xiaohongshu.com/search_result?keyword=94148178085" }
  ]
};
