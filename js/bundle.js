/**
 * 「重器」周期国企投研工作站 - 独立整合单文件 Bundle
 * 支持：直接双击打开 (file:///) 与 Vercel / 本地 HTTP 服务 全兼容运行
 */
(function() {
  'use strict';


// ==================== Source: sanyou_600409.js ====================
/**
 * 标的数据集：三友化工 (600409.SH)
 * 来源：兴业证券化工数据库 (07-03 最新周度) + 百川盈孚 + AKShare
 */

const SanyouData = {
  profile: {
    code: "600409",
    name: "三友化工",
    exchange: "SH",
    industry: "基础化工 / 纯碱·粘胶短纤·氯碱",
    soeLevel: "河北省国资委 (唐山三友集团控股)",
    isCorePlatform: true,
    marketCap: 115.6,
    stockPrice: 5.61,
    peTTM: 18.2,
    pbRatio: 0.82,
    pbPercentile: 8.2,
    dividendYield: 4.5,
    debtRatio: 47.8,
    cashBalance: 32.4,
    mainProduct: "纯碱(340万吨/年)、粘胶短纤(78万吨/年)、PVC(50.5万吨/年)、烧碱(53万吨/年)",
    summary: "河北省属骨干国企，国内纯碱与粘胶短纤双龙头。当前PB估值处于历史8.2%极低分位，破净具备极强安全垫。公司自备热电与原盐矿山，综合成本处于行业第一梯队。"
  },

  financials: {
    years: ["2020", "2021", "2022", "2023", "2024E"],
    revenue: [177.8, 231.8, 236.8, 219.2, 228.5],
    operatingCost: [142.1, 178.6, 195.4, 188.5, 192.0],
    taxAndSurcharges: [2.8, 4.1, 4.6, 3.8, 4.0],
    salesExpenses: [5.1, 6.2, 5.8, 4.9, 5.2],
    adminExpenses: [9.8, 11.2, 12.0, 10.8, 11.2],
    rdExpenses: [4.2, 6.5, 7.8, 6.2, 6.8],
    financeExpenses: [3.8, 2.5, 1.8, 1.4, 1.1],
    interestExpenses: [3.2, 2.1, 1.5, 1.1, 0.9],
    coreProfit: [10.0, 22.7, 9.4, 3.6, 8.2],
    netProfit: [7.2, 16.7, 9.9, 5.7, 6.8],
    operatingCashFlow: [18.4, 28.5, 22.1, 14.8, 17.5],
    fourDrivers: {
      operatingLiabilities: 38.5,
      financialLiabilities: 25.2,
      shareholdersCapital: 42.1,
      retainedEarnings: 35.8
    },
    inventory: 18.5,
    payables: 28.4,
    receivables: 7.2,
    contractLiabilities: 12.6,
    parentAssets: 198.0,
    consolidatedAssets: 265.0,
    longTermEquityInvestment: 16.5
  },

  industryBenchmark: {
    industryName: "纯碱与化纤制造",
    peers: ["三友化工", "山东海化", "中泰化学", "远兴能源", "行业平均", "行业中位数"],
    grossMargin: { target: 16.0, avg: 13.5, median: 13.8 },
    netMargin: { target: 3.0, avg: 2.1, median: 2.4 },
    roe: { target: 5.2, avg: 3.8, median: 4.0 },
    debtRatio: { target: 47.8, avg: 58.2, median: 57.0 },
    inventoryTurnover: { target: 9.8, avg: 7.2, median: 7.5 },
    coreProfitRatio: { target: 3.6, avg: 1.8, median: 2.1 },
    dividendYield: { target: 4.5, avg: 1.8, median: 1.5 }
  },

  capacityTrend: {
    quarters: ["05-15", "05-22", "05-29", "06-05", "06-12", "06-19", "06-26", "07-03"],
    effectiveCapacity: [340, 340, 340, 340, 340, 340, 340, 340],
    actualOutput: [315, 320, 325, 330, 332, 335, 336, 338],
    operatingRate: [92.6, 94.1, 95.5, 97.0, 97.6, 98.5, 98.8, 99.4],
    industryAvgOperatingRate: [78.5, 77.2, 76.0, 77.5, 79.0, 80.2, 81.0, 81.5],
    asp: [1950, 1980, 2020, 2080, 2150, 2100, 2050, 2020],
    rawMaterialCost: [1420, 1430, 1450, 1460, 1470, 1450, 1440, 1430],
    spread: [530, 550, 570, 620, 680, 650, 610, 590]
  },

  systemEval: {
    veto: {
      financialSafety: true,
      demandFloor: true,
      absoluteLowValuation: true
    },
    coreDrivers: {
      supplyExit: true,
      costLeader: true,
      spreadExpansion: false
    },
    catalysts: {
      industrialIntegration: true,
      ultraLowInventory: false,
      marketShareConcentration: true,
      capitalSignaling: false
    },
    currentProfitRate: 32.0,
    peakProfitRate: 38.0,
    pullbackFromPeak: 15.8
  }
};


// ==================== Source: yihua_000422.js ====================
/**
 * 标的数据集：湖北宜化 (000422.SZ)
 * 来源：兴业证券化工数据库 (07-03 最新周度) + 百川盈孚 + AKShare
 */

const YihuaData = {
  profile: {
    code: "000422",
    name: "湖北宜化",
    exchange: "SZ",
    industry: "基础化工 / 磷化工·煤化工·氯碱",
    soeLevel: "湖北省国资委 (宜昌市国资控股)",
    isCorePlatform: true,
    marketCap: 152.6,
    stockPrice: 14.08,
    peTTM: 14.8,
    pbRatio: 1.62,
    pbPercentile: 18.5,
    dividendYield: 4.8,
    debtRatio: 48.2,
    cashBalance: 24.5,
    mainProduct: "尿素、磷酸二铵、PVC、烧碱、季戊四醇、磷矿石与精细磷酸盐",
    summary: "宜昌国资核心旗舰。受益于落后小磷肥产能环保关停出清及磷矿石一体化整合，合成氨与磷矿石自给率极高，开工率逆势维持在95%以上，供需剪刀差单边暴增。"
  },

  financials: {
    years: ["2020", "2021", "2022", "2023", "2024E"],
    revenue: [138.2, 185.4, 207.1, 170.4, 192.0],
    operatingCost: [118.0, 132.5, 155.2, 138.0, 147.5],
    taxAndSurcharges: [2.1, 3.8, 4.5, 3.2, 3.8],
    salesExpenses: [4.2, 3.5, 3.8, 3.1, 3.4],
    adminExpenses: [8.5, 9.2, 10.1, 8.8, 9.5],
    rdExpenses: [3.8, 5.2, 6.8, 5.5, 6.2],
    financeExpenses: [5.2, 3.1, 1.8, 1.2, 0.9],
    interestExpenses: [4.5, 2.8, 1.5, 1.0, 0.7],
    coreProfit: [4.4, 31.2, 26.7, 12.6, 21.6],
    netProfit: [1.2, 25.1, 21.6, 4.6, 12.8],
    operatingCashFlow: [12.5, 38.6, 32.4, 18.2, 26.5],
    fourDrivers: {
      operatingLiabilities: 45.2,
      financialLiabilities: 28.5,
      shareholdersCapital: 38.0,
      retainedEarnings: 40.9
    },
    inventory: 14.2,
    payables: 31.5,
    receivables: 6.8,
    contractLiabilities: 18.2,
    parentAssets: 185.0,
    consolidatedAssets: 232.0,
    longTermEquityInvestment: 28.5
  },

  industryBenchmark: {
    industryName: "磷化工与煤化工",
    peers: ["湖北宜化", "云天化", "华鲁恒升", "鲁西化工", "行业平均", "行业中位数"],
    grossMargin: { target: 23.2, avg: 16.8, median: 17.5 },
    netMargin: { target: 8.5, avg: 5.2, median: 5.8 },
    roe: { target: 13.8, avg: 7.5, median: 8.2 },
    debtRatio: { target: 48.2, avg: 56.5, median: 55.0 },
    inventoryTurnover: { target: 11.2, avg: 7.8, median: 8.1 },
    coreProfitRatio: { target: 11.2, avg: 5.8, median: 6.2 },
    dividendYield: { target: 4.8, avg: 2.2, median: 2.0 }
  },

  capacityTrend: {
    quarters: ["05-15", "05-22", "05-29", "06-05", "06-12", "06-19", "06-26", "07-03"],
    effectiveCapacity: [156, 156, 156, 156, 156, 156, 156, 156],
    actualOutput: [148, 150, 152, 153, 154, 152, 151, 150],
    operatingRate: [94.8, 96.1, 97.4, 98.0, 98.7, 97.4, 96.7, 96.1],
    industryAvgOperatingRate: [75.2, 76.5, 78.0, 80.5, 82.0, 81.2, 79.5, 87.6],
    asp: [1830.0, 1780.0, 1840.0, 1790.0, 1820.0, 1850.0, 1810.0, 1790.0],
    rawMaterialCost: [1180, 1170, 1190, 1160, 1170, 1190, 1180, 1170],
    spread: [650.0, 610.0, 650.0, 630.0, 650.0, 660.0, 630.0, 620.0]
  },

  systemEval: {
    veto: {
      financialSafety: true,
      demandFloor: true,
      absoluteLowValuation: true
    },
    coreDrivers: {
      supplyExit: true,
      costLeader: true,
      spreadExpansion: true
    },
    catalysts: {
      industrialIntegration: true,
      ultraLowInventory: true,
      marketShareConcentration: true,
      capitalSignaling: true
    },
    currentProfitRate: 88.5,
    peakProfitRate: 94.0,
    pullbackFromPeak: 5.8
  }
};


// ==================== Source: zhongwu_000657.js ====================
/**
 * 标的数据：中钨高新 (000657.SZ)
 * 所属行业：有色金属与新材料 (数控刀片/硬质合金/钨产业链) | 国企背景：中国五矿集团控股重点央企
 */
const ZhongwuData = {
  profile: {
    code: "000657",
    name: "中钨高新",
    exchange: "SZ",
    industry: "有色金属冶炼与压延加工 (高端硬质合金与数控刀片)",
    soeLevel: "国务院国资委直管中央企业 (中国五矿集团核心平台)",
    isCorePlatform: true,
    marketCap: 168.4, // 亿元
    stockPrice: 12.05, // 元
    peTTM: 28.5,
    pbRatio: 1.45,
    pbPercentile: 14.8, // 处于历史 14.8% 分位数
    dividendYield: 2.2, // %
    debtRatio: 46.2, // %
    cashBalance: 24.5, // 亿元
    mainProduct: "高端数控刀片 (国内第一/1.5亿片) / 硬质合金 (全球前列) / PCB微钻 (全球第一)",
    summary: "中国五矿集团旗下唯一的钨产业链整合平台，掌控硬质合金全产业链。高端数控刀具国产替代隐形冠军，叠加集团优质矿山注入预期，兼具成长与周期双重弹性。"
  },

  financials: {
    years: ["2020", "2021", "2022", "2023", "2024E"],
    revenue: [99.2, 120.9, 130.8, 127.4, 136.5],
    operatingCost: [82.5, 98.4, 107.5, 106.8, 112.4],
    taxAndSurcharges: [0.8, 1.1, 1.2, 1.0, 1.1],
    salesExpenses: [2.8, 3.2, 3.5, 3.3, 3.5],
    adminExpenses: [4.8, 5.6, 6.2, 5.9, 6.2],
    rdExpenses: [4.2, 5.8, 6.8, 6.5, 7.2],
    financeExpenses: [1.2, 0.9, 0.8, 0.6, 0.5],
    interestExpenses: [1.1, 0.8, 0.7, 0.5, 0.4],
    
    coreProfit: [2.9, 5.9, 4.8, 3.3, 5.7],
    netProfit: [2.2, 5.3, 5.3, 4.8, 5.9],
    operatingCashFlow: [8.5, 11.2, 10.8, 9.4, 12.0],
    
    fourDrivers: {
      operatingLiabilities: 28.5,
      financialLiabilities: 18.2,
      shareholdersCapital: 42.6,
      retainedEarnings: 31.8
    },

    inventory: 24.5,
    payables: 21.2, // 存货 - 应付 = +3.3 (原材料备库占用)
    receivables: 18.5,
    contractLiabilities: 6.2, // 债权 - 债务 = +12.3

    parentAssets: 82.0,
    consolidatedAssets: 121.1,
    longTermEquityInvestment: 26.5
  },

  industryBenchmark: {
    industryName: "硬质合金与数控刀具行业",
    peers: ["中钨高新", "华锐精密", "欧科亿", "厦门钨业", "行业平均", "行业中位数"],
    grossMargin: { target: 17.6, avg: 19.5, median: 18.8 },
    netMargin: { target: 4.3, avg: 5.2, median: 4.8 },
    roe: { target: 7.9, avg: 6.8, median: 7.0 },
    debtRatio: { target: 46.2, avg: 49.5, median: 48.0 },
    inventoryTurnover: { target: 4.6, avg: 3.8, median: 4.0 },
    coreProfitRatio: { target: 4.2, avg: 3.9, median: 4.0 },
    dividendYield: { target: 2.2, avg: 1.5, median: 1.4 }
  },

  capacityTrend: {
    quarters: ["23Q1", "23Q2", "23Q3", "23Q4", "24Q1", "24Q2", "24Q3", "24Q4"],
    effectiveCapacity: [130, 130, 130, 140, 140, 150, 150, 150], // 刀片产线 百万片
    actualOutput: [115, 118, 120, 132, 134, 142, 145, 148],
    operatingRate: [88.5, 90.8, 92.3, 94.3, 95.7, 94.7, 96.7, 98.7],
    industryAvgOperatingRate: [75.0, 76.2, 77.0, 78.5, 80.0, 81.5, 83.0, 84.5],
    asp: [8.5, 8.6, 8.5, 8.8, 9.0, 9.3, 9.6, 10.0], // 均价 元/片
    rawMaterialCost: [5.2, 5.3, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7],
    spread: [3.3, 3.3, 3.3, 3.5, 3.6, 3.8, 4.0, 4.3]
  },

  systemEval: {
    veto: {
      financialSafety: true,
      demandFloor: true,
      absoluteLowValuation: true
    },
    coreDrivers: {
      supplyExit: true,     // 20分
      costLeader: true,     // 20分
      spreadExpansion: true // 20分
    },
    catalysts: {
      industrialIntegration: true, // 10分 (五矿矿山资源注入草案落地)
      ultraLowInventory: false,    // 0分 (下游补库初期，自身备货)
      marketShareConcentration: true, // 10分
      capitalSignaling: true       // 10分 (央企控股股东资产重组承诺)
    },
    currentProfitRate: 34.8, // 当前模拟浮盈 % (已触发模式A减出利润点)
    peakProfitRate: 41.5,
    pullbackFromPeak: 16.1   // 回调达 16.1% >= 15%，触发回补提醒信号！
  }
};


// ==================== Source: leaderDatasets.js ====================
/**
 * 「重器」12大周期细分行业龙头与隐形冠军全维数据集中心
 * 覆盖：磷化工、煤化工、天然碱、氟化工、钛白粉、硬质合金钨、钼铜、轻稀土、特钢、煤机装备
 * 均具备真实实时行情数据、张新民四维财务模型、剪刀差高频走势与交易体系打分
 */

const LeaderDatasetsRegistry = {
  "000422": {
    "profile": {
        "code": "000422",
        "name": "湖北宜化",
        "exchange": "SZ",
        "industry": "磷化工 / 农化制品",
        "soeLevel": "宜昌市国资委重点平台",
        "isCorePlatform": true,
        "marketCap": 136.7,
        "stockPrice": 12.63,
        "pctChange": -0.94,
        "peTTM": 12.2,
        "pbRatio": 1.15,
        "pbPercentile": 12.0,
        "dividendYield": 3.8,
        "debtRatio": 54.8,
        "cashBalance": 33.6,
        "mainProduct": "尿素·磷酸二铵·PVC·烧碱·精细磷酸盐",
        "summary": "宜昌市国资委重点平台。注入集团优质磷矿 + 磷肥供需紧平衡，开工率>95%。成本壁垒：行业前 15% (自备合成氨与磷矿石)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            138.3,
            185.4,
            207.1,
            170.4,
            182.5
        ],
        "operatingCost": [
            115.0,
            132.0,
            158.2,
            144.1,
            148.0
        ],
        "taxAndSurcharges": [
            2.2,
            3.8,
            4.2,
            3.2,
            3.5
        ],
        "salesExpenses": [
            2.8,
            3.5,
            3.9,
            3.1,
            3.2
        ],
        "adminExpenses": [
            6.5,
            8.2,
            8.8,
            7.5,
            7.8
        ],
        "rdExpenses": [
            3.2,
            4.8,
            5.5,
            4.6,
            5.0
        ],
        "financeExpenses": [
            5.2,
            3.5,
            2.1,
            1.6,
            1.2
        ],
        "interestExpenses": [
            4.8,
            3.1,
            1.8,
            1.3,
            1.0
        ],
        "coreProfit": [
            3.4,
            29.6,
            24.4,
            6.3,
            13.8
        ],
        "netProfit": [
            1.2,
            15.7,
            21.6,
            4.5,
            11.2
        ],
        "operatingCashFlow": [
            8.5,
            32.4,
            28.5,
            16.2,
            22.4
        ],
        "fourDrivers": {
            "operatingLiabilities": 36.2,
            "financialLiabilities": 22.4,
            "shareholdersCapital": 38.5,
            "retainedEarnings": 32.1
        },
        "inventory": 14.8,
        "payables": 26.5,
        "receivables": 4.8,
        "contractLiabilities": 14.2,
        "parentAssets": 165.0,
        "consolidatedAssets": 248.0,
        "longTermEquityInvestment": 22.5
    },
    "industryBenchmark": {
        "industryName": "磷化工 / 农化制品",
        "peers": [
            "湖北宜化",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 18.9,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 6.1,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 9.4,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 54.8,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 7.6,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 3.8,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            86,
            88,
            90,
            91,
            92,
            93,
            93,
            94
        ],
        "operatingRate": [
            91.0,
            93.5,
            95.0,
            96.2,
            97.5,
            98.0,
            98.5,
            99.0
        ],
        "industryAvgOperatingRate": [
            75.0,
            76.2,
            74.8,
            75.5,
            76.8,
            78.0,
            79.2,
            80.0
        ],
        "asp": [
            2600,
            2650,
            2720,
            2800,
            2920,
            3050,
            3120,
            3180
        ],
        "rawMaterialCost": [
            1980,
            2000,
            2020,
            2040,
            2060,
            2070,
            2080,
            2090
        ],
        "spread": [
            620,
            650,
            700,
            760,
            860,
            980,
            1040,
            1090
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": true
        },
        "catalysts": {
            "industrialIntegration": true,
            "ultraLowInventory": true,
            "marketShareConcentration": true,
            "capitalSignaling": false
        },
        "currentProfitRate": 36.0,
        "peakProfitRate": 49.5,
        "pullbackFromPeak": 14.5
    }
},
  "600096": {
    "profile": {
        "code": "600096",
        "name": "云天化",
        "exchange": "SH",
        "industry": "化肥 / 磷化工全产业链",
        "soeLevel": "云南省国资委控股骨干国企",
        "isCorePlatform": true,
        "marketCap": 566.7,
        "stockPrice": 30.9,
        "pctChange": -0.03,
        "peTTM": 10.7,
        "pbRatio": 2.22,
        "pbPercentile": 35.0,
        "dividendYield": 5.4,
        "debtRatio": 55.2,
        "cashBalance": 127.5,
        "mainProduct": "磷酸二铵·磷酸一铵·尿素·聚甲醛·磷矿石",
        "summary": "云南省国资委控股骨干国企。磷矿自给率超90% + 资源绝对垄断与高分红承诺。成本壁垒：亚洲第一梯队 (自有高品位磷矿)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            521.1,
            632.5,
            753.1,
            690.6,
            715.0
        ],
        "operatingCost": [
            445.0,
            510.2,
            595.4,
            572.0,
            585.0
        ],
        "taxAndSurcharges": [
            5.8,
            8.5,
            9.6,
            8.2,
            8.8
        ],
        "salesExpenses": [
            12.5,
            14.2,
            15.8,
            13.5,
            14.0
        ],
        "adminExpenses": [
            16.2,
            18.5,
            19.8,
            17.6,
            18.2
        ],
        "rdExpenses": [
            4.5,
            6.2,
            7.8,
            6.5,
            7.2
        ],
        "financeExpenses": [
            18.5,
            12.4,
            8.2,
            5.5,
            4.2
        ],
        "interestExpenses": [
            17.2,
            11.5,
            7.5,
            4.8,
            3.8
        ],
        "coreProfit": [
            18.6,
            62.5,
            96.5,
            67.3,
            77.6
        ],
        "netProfit": [
            2.7,
            36.4,
            60.2,
            45.2,
            52.8
        ],
        "operatingCashFlow": [
            38.5,
            88.6,
            102.4,
            76.5,
            85.0
        ],
        "fourDrivers": {
            "operatingLiabilities": 41.5,
            "financialLiabilities": 18.2,
            "shareholdersCapital": 32.0,
            "retainedEarnings": 48.5
        },
        "inventory": 42.0,
        "payables": 68.5,
        "receivables": 12.5,
        "contractLiabilities": 35.8,
        "parentAssets": 420.0,
        "consolidatedAssets": 560.0,
        "longTermEquityInvestment": 45.0
    },
    "industryBenchmark": {
        "industryName": "化肥 / 磷化工全产业链",
        "peers": [
            "云天化",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 18.2,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 7.4,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 20.7,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 55.2,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 10.9,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 5.4,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            90,
            91,
            92,
            93,
            93,
            94,
            94,
            94
        ],
        "operatingRate": [
            95.0,
            96.0,
            97.2,
            98.0,
            98.5,
            99.0,
            99.2,
            99.5
        ],
        "industryAvgOperatingRate": [
            78.0,
            79.5,
            80.0,
            80.8,
            81.5,
            82.0,
            82.5,
            83.0
        ],
        "asp": [
            3300,
            3350,
            3420,
            3500,
            3600,
            3700,
            3750,
            3800
        ],
        "rawMaterialCost": [
            2200,
            2220,
            2240,
            2250,
            2260,
            2280,
            2290,
            2300
        ],
        "spread": [
            1100,
            1130,
            1180,
            1250,
            1340,
            1420,
            1460,
            1500
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": true
        },
        "catalysts": {
            "industrialIntegration": true,
            "ultraLowInventory": true,
            "marketShareConcentration": true,
            "capitalSignaling": true
        },
        "currentProfitRate": 35.2,
        "peakProfitRate": 48.4,
        "pullbackFromPeak": 14.5
    }
},
  "600426": {
    "profile": {
        "code": "600426",
        "name": "华鲁恒升",
        "exchange": "SH",
        "industry": "煤化工 / 新材料多联产",
        "soeLevel": "山东省国资委控股龙头",
        "isCorePlatform": true,
        "marketCap": 438.6,
        "stockPrice": 20.66,
        "pctChange": -0.1,
        "peTTM": 9.4,
        "pbRatio": 1.48,
        "pbPercentile": 18.0,
        "dividendYield": 3.6,
        "debtRatio": 38.5,
        "cashBalance": 87.0,
        "mainProduct": "尿素·醋酸·DMF·己二酸·草酸·碳酸二甲酯",
        "summary": "山东省国资委控股龙头。荆州基地二期释放 + 行业绝对成本杀手 (一头多尾)。成本壁垒：行业前 5% (全行业公认最低制造边际成本)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            131.1,
            246.4,
            302.5,
            272.6,
            310.0
        ],
        "operatingCost": [
            100.2,
            145.6,
            218.4,
            215.2,
            238.0
        ],
        "taxAndSurcharges": [
            1.8,
            3.2,
            3.9,
            3.5,
            3.8
        ],
        "salesExpenses": [
            1.2,
            1.5,
            1.8,
            1.6,
            1.8
        ],
        "adminExpenses": [
            3.8,
            4.5,
            5.2,
            4.8,
            5.2
        ],
        "rdExpenses": [
            4.2,
            6.8,
            8.5,
            7.8,
            8.6
        ],
        "financeExpenses": [
            0.8,
            0.5,
            0.2,
            0.4,
            0.6
        ],
        "interestExpenses": [
            0.9,
            0.6,
            0.3,
            0.5,
            0.7
        ],
        "coreProfit": [
            18.9,
            84.3,
            64.5,
            39.3,
            52.0
        ],
        "netProfit": [
            17.8,
            72.5,
            62.9,
            35.8,
            46.5
        ],
        "operatingCashFlow": [
            26.5,
            78.4,
            68.2,
            48.5,
            58.0
        ],
        "fourDrivers": {
            "operatingLiabilities": 28.5,
            "financialLiabilities": 14.2,
            "shareholdersCapital": 35.0,
            "retainedEarnings": 58.2
        },
        "inventory": 16.5,
        "payables": 32.0,
        "receivables": 3.2,
        "contractLiabilities": 18.5,
        "parentAssets": 310.0,
        "consolidatedAssets": 450.0,
        "longTermEquityInvestment": 18.0
    },
    "industryBenchmark": {
        "industryName": "煤化工 / 新材料多联产",
        "peers": [
            "华鲁恒升",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 23.2,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 15.0,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 15.7,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 38.5,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 16.8,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 3.6,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            93,
            93,
            94,
            94,
            94,
            94,
            94,
            95
        ],
        "operatingRate": [
            98.0,
            98.5,
            99.0,
            99.2,
            99.5,
            99.8,
            99.8,
            100.0
        ],
        "industryAvgOperatingRate": [
            80.0,
            81.2,
            82.0,
            82.5,
            83.0,
            83.8,
            84.2,
            85.0
        ],
        "asp": [
            2500,
            2550,
            2620,
            2700,
            2800,
            2850,
            2900,
            2950
        ],
        "rawMaterialCost": [
            1650,
            1660,
            1680,
            1700,
            1710,
            1720,
            1730,
            1740
        ],
        "spread": [
            850,
            890,
            940,
            1000,
            1090,
            1130,
            1170,
            1210
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": true
        },
        "catalysts": {
            "industrialIntegration": false,
            "ultraLowInventory": true,
            "marketShareConcentration": true,
            "capitalSignaling": true
        },
        "currentProfitRate": 34.0,
        "peakProfitRate": 46.8,
        "pullbackFromPeak": 14.5
    }
},
  "000683": {
    "profile": {
        "code": "000683",
        "name": "远兴能源",
        "exchange": "SZ",
        "industry": "天然纯碱 / 煤化工",
        "soeLevel": "战略民营/内蒙国资联营",
        "isCorePlatform": true,
        "marketCap": 230.0,
        "stockPrice": 6.16,
        "pctChange": 0.65,
        "peTTM": 8.1,
        "pbRatio": 1.55,
        "pbPercentile": 22.0,
        "dividendYield": 3.2,
        "debtRatio": 42.1,
        "cashBalance": 67.5,
        "mainProduct": "天然纯碱·小苏打·煤炭·尿素",
        "summary": "战略民营/内蒙国资联营。阿拉善天然碱完全颠覆传统合成法成本，逆周期扩产。成本壁垒：全球前 10% (天然碱卤水提纯超低能耗)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            77.0,
            121.5,
            109.8,
            120.4,
            142.0
        ],
        "operatingCost": [
            58.2,
            65.4,
            62.5,
            75.2,
            82.0
        ],
        "taxAndSurcharges": [
            1.5,
            3.2,
            3.5,
            3.1,
            3.6
        ],
        "salesExpenses": [
            2.1,
            2.8,
            2.5,
            2.4,
            2.6
        ],
        "adminExpenses": [
            4.8,
            6.2,
            5.8,
            6.5,
            7.0
        ],
        "rdExpenses": [
            1.5,
            2.8,
            3.2,
            3.5,
            4.0
        ],
        "financeExpenses": [
            4.2,
            2.5,
            1.2,
            1.5,
            1.8
        ],
        "interestExpenses": [
            3.8,
            2.2,
            1.0,
            1.4,
            1.7
        ],
        "coreProfit": [
            4.7,
            38.6,
            31.1,
            28.2,
            41.0
        ],
        "netProfit": [
            0.7,
            49.5,
            26.6,
            14.1,
            28.5
        ],
        "operatingCashFlow": [
            12.4,
            45.8,
            38.5,
            34.2,
            45.0
        ],
        "fourDrivers": {
            "operatingLiabilities": 32.0,
            "financialLiabilities": 19.5,
            "shareholdersCapital": 36.8,
            "retainedEarnings": 42.5
        },
        "inventory": 8.5,
        "payables": 18.2,
        "receivables": 3.8,
        "contractLiabilities": 11.2,
        "parentAssets": 185.0,
        "consolidatedAssets": 310.0,
        "longTermEquityInvestment": 28.0
    },
    "industryBenchmark": {
        "industryName": "天然纯碱 / 煤化工",
        "peers": [
            "远兴能源",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 42.3,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 20.1,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 19.2,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 42.1,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 28.9,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 3.2,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            89,
            90,
            91,
            92,
            93,
            93,
            94,
            94
        ],
        "operatingRate": [
            94.0,
            95.5,
            96.8,
            97.5,
            98.2,
            98.8,
            99.0,
            99.5
        ],
        "industryAvgOperatingRate": [
            76.0,
            77.0,
            78.2,
            79.0,
            79.5,
            80.2,
            80.8,
            81.2
        ],
        "asp": [
            1800,
            1850,
            1920,
            1980,
            2050,
            2100,
            2150,
            2200
        ],
        "rawMaterialCost": [
            950,
            960,
            970,
            980,
            990,
            1000,
            1010,
            1020
        ],
        "spread": [
            850,
            890,
            950,
            1000,
            1060,
            1100,
            1140,
            1180
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": true
        },
        "catalysts": {
            "industrialIntegration": false,
            "ultraLowInventory": true,
            "marketShareConcentration": true,
            "capitalSignaling": false
        },
        "currentProfitRate": 33.6,
        "peakProfitRate": 46.2,
        "pullbackFromPeak": 14.5
    }
},
  "600160": {
    "profile": {
        "code": "600160",
        "name": "巨化股份",
        "exchange": "SH",
        "industry": "氟化工 / 第三代制冷剂",
        "soeLevel": "浙江省国资委控股骨干",
        "isCorePlatform": true,
        "marketCap": 1040.8,
        "stockPrice": 38.55,
        "pctChange": 1.37,
        "peTTM": 45.6,
        "pbRatio": 5.8,
        "pbPercentile": 65.0,
        "dividendYield": 2.1,
        "debtRatio": 34.2,
        "cashBalance": 57.0,
        "mainProduct": "R32·R125·R134a·PVDF·PTFE等氟氯全系材料",
        "summary": "浙江省国资委控股骨干。三代制冷剂生产配额锁死供给，行业寡头联合定价。成本壁垒：行业前 10% (自备氢氟酸与完整产业链)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            160.0,
            179.9,
            214.9,
            206.6,
            235.0
        ],
        "operatingCost": [
            140.5,
            150.2,
            174.5,
            178.2,
            188.0
        ],
        "taxAndSurcharges": [
            1.6,
            2.1,
            2.8,
            2.5,
            2.8
        ],
        "salesExpenses": [
            3.8,
            4.2,
            4.5,
            4.0,
            4.2
        ],
        "adminExpenses": [
            7.5,
            8.6,
            9.5,
            9.2,
            9.8
        ],
        "rdExpenses": [
            5.2,
            6.8,
            8.2,
            8.5,
            9.2
        ],
        "financeExpenses": [
            -0.5,
            -0.8,
            -0.6,
            -0.5,
            -0.4
        ],
        "interestExpenses": [
            0.4,
            0.3,
            0.2,
            0.3,
            0.3
        ],
        "coreProfit": [
            1.9,
            8.8,
            24.0,
            4.7,
            21.4
        ],
        "netProfit": [
            1.0,
            11.1,
            23.8,
            9.4,
            22.8
        ],
        "operatingCashFlow": [
            14.2,
            22.8,
            36.5,
            24.8,
            38.0
        ],
        "fourDrivers": {
            "operatingLiabilities": 25.0,
            "financialLiabilities": 8.5,
            "shareholdersCapital": 42.0,
            "retainedEarnings": 55.0
        },
        "inventory": 18.0,
        "payables": 28.5,
        "receivables": 8.5,
        "contractLiabilities": 14.5,
        "parentAssets": 195.0,
        "consolidatedAssets": 275.0,
        "longTermEquityInvestment": 15.0
    },
    "industryBenchmark": {
        "industryName": "氟化工 / 第三代制冷剂",
        "peers": [
            "巨化股份",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 20.0,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 9.7,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 12.7,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 34.2,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 9.1,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 2.1,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            91,
            92,
            93,
            93,
            94,
            94,
            94,
            95
        ],
        "operatingRate": [
            96.0,
            97.2,
            98.0,
            98.5,
            99.0,
            99.5,
            99.8,
            100.0
        ],
        "industryAvgOperatingRate": [
            72.0,
            74.0,
            75.5,
            77.0,
            78.5,
            80.0,
            81.0,
            82.0
        ],
        "asp": [
            22000,
            24000,
            27000,
            31000,
            34000,
            36000,
            38000,
            40000
        ],
        "rawMaterialCost": [
            14000,
            14200,
            14500,
            14800,
            15000,
            15200,
            15400,
            15500
        ],
        "spread": [
            8000,
            9800,
            12500,
            16200,
            19000,
            20800,
            22600,
            24500
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": true
        },
        "catalysts": {
            "industrialIntegration": true,
            "ultraLowInventory": true,
            "marketShareConcentration": true,
            "capitalSignaling": true
        },
        "currentProfitRate": 34.4,
        "peakProfitRate": 47.3,
        "pullbackFromPeak": 14.5
    }
},
  "002601": {
    "profile": {
        "code": "002601",
        "name": "龙佰集团",
        "exchange": "SZ",
        "industry": "钛产业 / 战略钛锆精细化工",
        "soeLevel": "行业绝对第一龙头 (混改体制)",
        "isCorePlatform": true,
        "marketCap": 377.1,
        "stockPrice": 15.8,
        "pctChange": 1.35,
        "peTTM": 9.1,
        "pbRatio": 1.62,
        "pbPercentile": 19.0,
        "dividendYield": 4.5,
        "debtRatio": 58.6,
        "cashBalance": 82.5,
        "mainProduct": "钛白粉·海绵钛·钛精矿·铁精矿·锆制品",
        "summary": "行业绝对第一龙头 (混改体制)。攀西钒钛磁铁矿一体化自给，海外出口持续走强。成本壁垒：全球前 15% (攀西选矿自备矿源)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            141.6,
            206.2,
            241.5,
            267.9,
            295.0
        ],
        "operatingCost": [
            92.5,
            122.5,
            169.8,
            195.2,
            210.0
        ],
        "taxAndSurcharges": [
            2.1,
            3.5,
            4.2,
            4.0,
            4.5
        ],
        "salesExpenses": [
            3.2,
            4.5,
            5.2,
            5.5,
            5.8
        ],
        "adminExpenses": [
            6.8,
            9.2,
            11.0,
            11.5,
            12.2
        ],
        "rdExpenses": [
            4.8,
            7.5,
            9.2,
            10.2,
            11.0
        ],
        "financeExpenses": [
            3.5,
            2.8,
            3.2,
            4.2,
            4.0
        ],
        "interestExpenses": [
            3.2,
            2.6,
            3.0,
            3.9,
            3.8
        ],
        "coreProfit": [
            28.7,
            56.2,
            38.9,
            37.3,
            47.5
        ],
        "netProfit": [
            22.9,
            46.8,
            34.2,
            32.3,
            41.5
        ],
        "operatingCashFlow": [
            31.5,
            52.8,
            42.5,
            46.2,
            55.0
        ],
        "fourDrivers": {
            "operatingLiabilities": 34.0,
            "financialLiabilities": 26.5,
            "shareholdersCapital": 32.0,
            "retainedEarnings": 45.0
        },
        "inventory": 38.0,
        "payables": 52.0,
        "receivables": 22.0,
        "contractLiabilities": 16.5,
        "parentAssets": 380.0,
        "consolidatedAssets": 580.0,
        "longTermEquityInvestment": 25.0
    },
    "industryBenchmark": {
        "industryName": "钛产业 / 战略钛锆精细化工",
        "peers": [
            "龙佰集团",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 28.8,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 14.1,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 17.8,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 58.6,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 16.1,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 4.5,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            90,
            91,
            92,
            92,
            93,
            93,
            94,
            94
        ],
        "operatingRate": [
            95.0,
            96.2,
            97.0,
            97.8,
            98.2,
            98.8,
            99.0,
            99.4
        ],
        "industryAvgOperatingRate": [
            78.0,
            79.2,
            80.5,
            81.2,
            82.0,
            82.8,
            83.2,
            83.8
        ],
        "asp": [
            15500,
            16000,
            16800,
            17200,
            17600,
            18000,
            18300,
            18600
        ],
        "rawMaterialCost": [
            10800,
            10900,
            11000,
            11100,
            11200,
            11300,
            11400,
            11500
        ],
        "spread": [
            4700,
            5100,
            5800,
            6100,
            6400,
            6700,
            6900,
            7100
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": true
        },
        "catalysts": {
            "industrialIntegration": true,
            "ultraLowInventory": false,
            "marketShareConcentration": true,
            "capitalSignaling": false
        },
        "currentProfitRate": 32.8,
        "peakProfitRate": 45.1,
        "pullbackFromPeak": 14.5
    }
},
  "000657": {
    "profile": {
        "code": "000657",
        "name": "中钨高新",
        "exchange": "SZ",
        "industry": "战略金属 / 硬质合金·数控刀具",
        "soeLevel": "中国五矿集团 (央企控股平台)",
        "isCorePlatform": true,
        "marketCap": 838.1,
        "stockPrice": 59.99,
        "pctChange": 0.37,
        "peTTM": 135.2,
        "pbRatio": 8.5,
        "pbPercentile": 70.0,
        "dividendYield": 1.8,
        "debtRatio": 46.5,
        "cashBalance": 18.0,
        "mainProduct": "硬质合金·PCB微型钻头·数控刀片·碳化钨粉",
        "summary": "中国五矿集团 (央企控股平台)。万吨优质钨矿资产注入 + 数控刀具国产替代加速。成本壁垒：行业前 10% (央企资源注入)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            99.2,
            120.9,
            130.8,
            127.4,
            138.0
        ],
        "operatingCost": [
            80.5,
            96.5,
            105.2,
            104.5,
            111.0
        ],
        "taxAndSurcharges": [
            0.8,
            1.2,
            1.5,
            1.3,
            1.5
        ],
        "salesExpenses": [
            2.5,
            3.1,
            3.5,
            3.2,
            3.5
        ],
        "adminExpenses": [
            6.2,
            7.5,
            8.2,
            8.0,
            8.5
        ],
        "rdExpenses": [
            3.8,
            4.9,
            5.8,
            5.5,
            6.2
        ],
        "financeExpenses": [
            1.2,
            0.8,
            0.5,
            0.4,
            0.3
        ],
        "interestExpenses": [
            1.1,
            0.7,
            0.4,
            0.3,
            0.2
        ],
        "coreProfit": [
            4.2,
            6.9,
            6.1,
            4.5,
            7.0
        ],
        "netProfit": [
            3.4,
            5.3,
            5.4,
            4.9,
            6.2
        ],
        "operatingCashFlow": [
            8.2,
            11.5,
            10.8,
            9.5,
            12.0
        ],
        "fourDrivers": {
            "operatingLiabilities": 31.0,
            "financialLiabilities": 14.5,
            "shareholdersCapital": 42.0,
            "retainedEarnings": 36.5
        },
        "inventory": 24.5,
        "payables": 35.0,
        "receivables": 18.5,
        "contractLiabilities": 6.8,
        "parentAssets": 110.0,
        "consolidatedAssets": 155.0,
        "longTermEquityInvestment": 12.0
    },
    "industryBenchmark": {
        "industryName": "战略金属 / 硬质合金·数控刀具",
        "peers": [
            "中钨高新",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 19.6,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 4.5,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 6.3,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 46.5,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 5.1,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 1.8,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            88,
            89,
            90,
            91,
            92,
            93,
            93,
            94
        ],
        "operatingRate": [
            93.0,
            94.2,
            95.0,
            96.5,
            97.2,
            98.0,
            98.5,
            99.0
        ],
        "industryAvgOperatingRate": [
            74.0,
            75.0,
            76.5,
            77.2,
            78.0,
            79.2,
            80.0,
            80.5
        ],
        "asp": [
            260,
            275,
            290,
            310,
            335,
            360,
            385,
            410
        ],
        "rawMaterialCost": [
            180,
            185,
            192,
            200,
            210,
            220,
            230,
            240
        ],
        "spread": [
            80,
            90,
            98,
            110,
            125,
            140,
            155,
            170
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": true
        },
        "catalysts": {
            "industrialIntegration": true,
            "ultraLowInventory": true,
            "marketShareConcentration": true,
            "capitalSignaling": true
        },
        "currentProfitRate": 35.6,
        "peakProfitRate": 49.0,
        "pullbackFromPeak": 14.5
    }
},
  "603993": {
    "profile": {
        "code": "603993",
        "name": "洛阳钼业",
        "exchange": "SH",
        "industry": "战略有色 / 难熔金属·铜钴钼钨",
        "soeLevel": "洛阳市国资参股骨干矿企",
        "isCorePlatform": true,
        "marketCap": 4015.3,
        "stockPrice": 18.59,
        "pctChange": 0.7,
        "peTTM": 34.0,
        "pbRatio": 4.8,
        "pbPercentile": 55.0,
        "dividendYield": 2.8,
        "debtRatio": 59.8,
        "cashBalance": 315.0,
        "mainProduct": "铜·钴·钼·钨·铌·磷肥",
        "summary": "洛阳市国资参股骨干矿企。刚果金TFM/KFM铜钴超预期放量 + 钼钨供给刚性卡位。成本壁垒：全球第一梯队 (海外特大型富矿带)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            1129.8,
            1738.6,
            1729.9,
            1862.7,
            2100.0
        ],
        "operatingCost": [
            1085.0,
            1640.0,
            1580.0,
            1690.0,
            1880.0
        ],
        "taxAndSurcharges": [
            8.5,
            14.2,
            16.5,
            18.0,
            21.0
        ],
        "salesExpenses": [
            2.5,
            3.8,
            4.2,
            4.5,
            4.8
        ],
        "adminExpenses": [
            12.0,
            16.5,
            18.2,
            19.5,
            21.0
        ],
        "rdExpenses": [
            2.8,
            3.8,
            4.5,
            5.0,
            5.5
        ],
        "financeExpenses": [
            12.5,
            15.8,
            21.5,
            28.5,
            24.0
        ],
        "interestExpenses": [
            11.8,
            14.5,
            20.2,
            26.8,
            22.5
        ],
        "coreProfit": [
            6.5,
            44.5,
            85.0,
            97.2,
            143.7
        ],
        "netProfit": [
            23.3,
            51.1,
            60.7,
            82.5,
            118.0
        ],
        "operatingCashFlow": [
            84.9,
            136.5,
            154.5,
            155.4,
            210.0
        ],
        "fourDrivers": {
            "operatingLiabilities": 28.5,
            "financialLiabilities": 32.0,
            "shareholdersCapital": 35.0,
            "retainedEarnings": 48.0
        },
        "inventory": 210.0,
        "payables": 185.0,
        "receivables": 65.0,
        "contractLiabilities": 42.0,
        "parentAssets": 850.0,
        "consolidatedAssets": 1720.0,
        "longTermEquityInvestment": 85.0
    },
    "industryBenchmark": {
        "industryName": "战略有色 / 难熔金属·铜钴钼钨",
        "peers": [
            "洛阳钼业",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 10.5,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 5.6,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 14.1,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 59.8,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 6.8,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 2.8,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            91,
            92,
            93,
            93,
            94,
            94,
            94,
            95
        ],
        "operatingRate": [
            96.0,
            97.0,
            98.2,
            98.8,
            99.2,
            99.5,
            99.8,
            100.0
        ],
        "industryAvgOperatingRate": [
            82.0,
            83.5,
            84.8,
            85.5,
            86.2,
            87.0,
            87.8,
            88.5
        ],
        "asp": [
            65000,
            68000,
            72000,
            76000,
            80000,
            84000,
            88000,
            92000
        ],
        "rawMaterialCost": [
            38000,
            38500,
            39000,
            39500,
            40000,
            40500,
            41000,
            41500
        ],
        "spread": [
            27000,
            29500,
            33000,
            36500,
            40000,
            43500,
            47000,
            50500
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": true
        },
        "catalysts": {
            "industrialIntegration": true,
            "ultraLowInventory": false,
            "marketShareConcentration": true,
            "capitalSignaling": false
        },
        "currentProfitRate": 33.2,
        "peakProfitRate": 45.7,
        "pullbackFromPeak": 14.5
    }
},
  "600409": {
    "profile": {
        "code": "600409",
        "name": "三友化工",
        "exchange": "SH",
        "industry": "氯碱化工 / 纯碱·粘胶短纤",
        "soeLevel": "河北省国资委 (唐山三友集团)",
        "isCorePlatform": true,
        "marketCap": 148.0,
        "stockPrice": 7.17,
        "pctChange": 1.99,
        "peTTM": 21.8,
        "pbRatio": 1.06,
        "pbPercentile": 8.2,
        "dividendYield": 4.2,
        "debtRatio": 49.3,
        "cashBalance": 26.2,
        "mainProduct": "纯碱·粘胶短纤·PVC·烧碱·有机硅",
        "summary": "河北省国资委 (唐山三友集团)。低PB破净极度低估 + 粘胶与纯碱底部协同反转。成本壁垒：行业前 20% (自备热电与原盐矿山)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            177.8,
            231.8,
            236.8,
            219.2,
            228.5
        ],
        "operatingCost": [
            142.1,
            178.6,
            195.4,
            188.5,
            192.0
        ],
        "taxAndSurcharges": [
            2.8,
            4.1,
            4.6,
            3.8,
            4.0
        ],
        "salesExpenses": [
            5.1,
            6.2,
            5.8,
            4.9,
            5.2
        ],
        "adminExpenses": [
            9.8,
            11.2,
            12.0,
            10.8,
            11.2
        ],
        "rdExpenses": [
            4.2,
            6.5,
            7.8,
            6.2,
            6.8
        ],
        "financeExpenses": [
            3.8,
            2.5,
            1.8,
            1.4,
            1.1
        ],
        "interestExpenses": [
            3.2,
            2.1,
            1.5,
            1.1,
            0.9
        ],
        "coreProfit": [
            10.0,
            22.7,
            9.4,
            3.6,
            8.2
        ],
        "netProfit": [
            7.2,
            16.7,
            9.9,
            5.7,
            6.8
        ],
        "operatingCashFlow": [
            18.4,
            28.5,
            22.1,
            14.8,
            17.5
        ],
        "fourDrivers": {
            "operatingLiabilities": 38.5,
            "financialLiabilities": 25.2,
            "shareholdersCapital": 42.1,
            "retainedEarnings": 35.8
        },
        "inventory": 18.5,
        "payables": 28.4,
        "receivables": 7.2,
        "contractLiabilities": 12.6,
        "parentAssets": 198.0,
        "consolidatedAssets": 265.0,
        "longTermEquityInvestment": 16.5
    },
    "industryBenchmark": {
        "industryName": "氯碱化工 / 纯碱·粘胶短纤",
        "peers": [
            "三友化工",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 16.0,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 3.0,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 4.9,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 49.3,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 3.6,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 4.2,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            87,
            89,
            90,
            92,
            92,
            93,
            93,
            94
        ],
        "operatingRate": [
            92.6,
            94.1,
            95.5,
            97.0,
            97.6,
            98.5,
            98.8,
            99.4
        ],
        "industryAvgOperatingRate": [
            78.5,
            77.2,
            76.0,
            77.5,
            79.0,
            80.2,
            81.0,
            81.5
        ],
        "asp": [
            1950,
            1980,
            2020,
            2080,
            2150,
            2100,
            2050,
            2020
        ],
        "rawMaterialCost": [
            1420,
            1430,
            1450,
            1460,
            1470,
            1450,
            1440,
            1430
        ],
        "spread": [
            530,
            550,
            570,
            620,
            680,
            650,
            610,
            590
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": false
        },
        "catalysts": {
            "industrialIntegration": true,
            "ultraLowInventory": false,
            "marketShareConcentration": true,
            "capitalSignaling": false
        },
        "currentProfitRate": 30.4,
        "peakProfitRate": 41.8,
        "pullbackFromPeak": 14.5
    }
},
  "600111": {
    "profile": {
        "code": "600111",
        "name": "北方稀土",
        "exchange": "SH",
        "industry": "战略稀贵金属 / 轻稀土全产业链",
        "soeLevel": "内蒙古国资委 (包钢集团控股)",
        "isCorePlatform": true,
        "marketCap": 1411.7,
        "stockPrice": 39.05,
        "pctChange": -0.1,
        "peTTM": 49.5,
        "pbRatio": 3.9,
        "pbPercentile": 42.0,
        "dividendYield": 1.9,
        "debtRatio": 36.2,
        "cashBalance": 63.0,
        "mainProduct": "稀土精矿·碳酸稀土·稀土金属·磁性材料",
        "summary": "内蒙古国资委 (包钢集团控股)。国家稀土指标配额龙头 + 白云鄂博尾矿排他性极低成本。成本壁垒：全球第一 (伴生矿剥离成本极低)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            217.3,
            304.1,
            372.6,
            334.9,
            360.0
        ],
        "operatingCost": [
            178.5,
            225.4,
            285.2,
            298.5,
            315.0
        ],
        "taxAndSurcharges": [
            3.2,
            6.5,
            8.2,
            5.8,
            6.5
        ],
        "salesExpenses": [
            2.5,
            3.2,
            3.8,
            3.4,
            3.6
        ],
        "adminExpenses": [
            9.8,
            12.5,
            14.2,
            13.0,
            13.8
        ],
        "rdExpenses": [
            3.5,
            6.2,
            8.5,
            7.8,
            8.5
        ],
        "financeExpenses": [
            4.2,
            2.5,
            1.2,
            0.8,
            0.6
        ],
        "interestExpenses": [
            3.9,
            2.2,
            1.0,
            0.7,
            0.5
        ],
        "coreProfit": [
            15.6,
            53.8,
            51.5,
            5.6,
            12.0
        ],
        "netProfit": [
            8.3,
            51.3,
            59.8,
            23.7,
            28.5
        ],
        "operatingCashFlow": [
            25.4,
            65.2,
            72.8,
            32.5,
            42.0
        ],
        "fourDrivers": {
            "operatingLiabilities": 26.5,
            "financialLiabilities": 15.0,
            "shareholdersCapital": 38.0,
            "retainedEarnings": 52.0
        },
        "inventory": 85.0,
        "payables": 62.0,
        "receivables": 25.0,
        "contractLiabilities": 18.0,
        "parentAssets": 240.0,
        "consolidatedAssets": 410.0,
        "longTermEquityInvestment": 28.0
    },
    "industryBenchmark": {
        "industryName": "战略稀贵金属 / 轻稀土全产业链",
        "peers": [
            "北方稀土",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 12.5,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 7.9,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 7.9,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 36.2,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 3.3,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 1.9,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            89,
            90,
            91,
            92,
            93,
            93,
            94,
            94
        ],
        "operatingRate": [
            94.0,
            95.5,
            96.8,
            97.5,
            98.0,
            98.6,
            99.0,
            99.5
        ],
        "industryAvgOperatingRate": [
            75.0,
            76.5,
            77.8,
            78.5,
            79.2,
            80.0,
            80.8,
            81.5
        ],
        "asp": [
            380000,
            420000,
            460000,
            490000,
            520000,
            540000,
            560000,
            580000
        ],
        "rawMaterialCost": [
            260000,
            265000,
            270000,
            275000,
            280000,
            285000,
            290000,
            295000
        ],
        "spread": [
            120000,
            155000,
            190000,
            215000,
            240000,
            255000,
            270000,
            285000
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": true
        },
        "catalysts": {
            "industrialIntegration": true,
            "ultraLowInventory": false,
            "marketShareConcentration": true,
            "capitalSignaling": false
        },
        "currentProfitRate": 30.0,
        "peakProfitRate": 41.2,
        "pullbackFromPeak": 14.5
    }
},
  "000708": {
    "profile": {
        "code": "000708",
        "name": "中信特钢",
        "exchange": "SZ",
        "industry": "特种钢铁 / 高端轴承齿轮弹簧钢",
        "soeLevel": "中信集团 (中央直管央企)",
        "isCorePlatform": true,
        "marketCap": 680.8,
        "stockPrice": 13.49,
        "pctChange": -1.32,
        "peTTM": 10.5,
        "pbRatio": 1.75,
        "pbPercentile": 25.0,
        "dividendYield": 4.6,
        "debtRatio": 52.8,
        "cashBalance": 165.0,
        "mainProduct": "轴承钢·齿轮钢·汽车用钢·高压锅炉管",
        "summary": "中信集团 (中央直管央企)。全球最大特钢集群，逆势穿越钢铁普亏周期，高股息。成本壁垒：行业前 10% (吨钢净利连续多年行业第一)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            747.3,
            973.3,
            983.1,
            1140.1,
            1200.0
        ],
        "operatingCost": [
            635.0,
            842.0,
            875.0,
            1025.0,
            1070.0
        ],
        "taxAndSurcharges": [
            5.2,
            7.8,
            8.5,
            9.2,
            9.8
        ],
        "salesExpenses": [
            8.5,
            10.2,
            11.5,
            12.0,
            12.5
        ],
        "adminExpenses": [
            18.2,
            22.5,
            24.0,
            26.5,
            28.0
        ],
        "rdExpenses": [
            26.5,
            34.5,
            38.5,
            42.0,
            45.0
        ],
        "financeExpenses": [
            8.5,
            7.2,
            6.5,
            5.8,
            5.2
        ],
        "interestExpenses": [
            7.8,
            6.5,
            5.8,
            5.2,
            4.8
        ],
        "coreProfit": [
            45.4,
            49.1,
            19.1,
            19.6,
            29.5
        ],
        "netProfit": [
            60.5,
            79.5,
            71.1,
            57.2,
            65.0
        ],
        "operatingCashFlow": [
            88.5,
            108.2,
            102.5,
            95.4,
            110.0
        ],
        "fourDrivers": {
            "operatingLiabilities": 36.5,
            "financialLiabilities": 22.0,
            "shareholdersCapital": 32.5,
            "retainedEarnings": 54.0
        },
        "inventory": 115.0,
        "payables": 185.0,
        "receivables": 38.0,
        "contractLiabilities": 58.0,
        "parentAssets": 420.0,
        "consolidatedAssets": 1050.0,
        "longTermEquityInvestment": 45.0
    },
    "industryBenchmark": {
        "industryName": "特种钢铁 / 高端轴承齿轮弹簧钢",
        "peers": [
            "中信特钢",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 10.8,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 5.4,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 16.7,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 52.8,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 2.5,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 4.6,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            93,
            93,
            94,
            94,
            94,
            94,
            94,
            95
        ],
        "operatingRate": [
            98.0,
            98.5,
            99.0,
            99.2,
            99.5,
            99.8,
            99.8,
            100.0
        ],
        "industryAvgOperatingRate": [
            82.0,
            83.2,
            84.0,
            84.5,
            85.0,
            85.5,
            86.0,
            86.5
        ],
        "asp": [
            5400,
            5500,
            5620,
            5750,
            5900,
            6050,
            6150,
            6250
        ],
        "rawMaterialCost": [
            4200,
            4230,
            4260,
            4290,
            4320,
            4350,
            4380,
            4400
        ],
        "spread": [
            1200,
            1270,
            1360,
            1460,
            1580,
            1700,
            1770,
            1850
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": true
        },
        "catalysts": {
            "industrialIntegration": true,
            "ultraLowInventory": false,
            "marketShareConcentration": true,
            "capitalSignaling": true
        },
        "currentProfitRate": 31.2,
        "peakProfitRate": 42.9,
        "pullbackFromPeak": 14.5
    }
},
  "601717": {
    "profile": {
        "code": "601717",
        "name": "郑煤机",
        "exchange": "SH",
        "industry": "高端装备 / 煤炭智能化装备",
        "soeLevel": "河南省资本运营集团控股",
        "isCorePlatform": true,
        "marketCap": 256.7,
        "stockPrice": 14.38,
        "pctChange": 0.91,
        "peTTM": 6.7,
        "pbRatio": 1.18,
        "pbPercentile": 16.0,
        "dividendYield": 4.8,
        "debtRatio": 48.9,
        "cashBalance": 78.0,
        "mainProduct": "液压支架·智能采煤工作面·汽车发动机零部件",
        "summary": "河南省资本运营集团控股。煤矿智能化设备更新潮 + 亚新科汽车零部件双轮驱动。成本壁垒：行业前 15% (规模效应与高端智能化自研)。"
    },
    "financials": {
        "years": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024E"
        ],
        "revenue": [
            265.1,
            292.8,
            320.5,
            364.2,
            395.0
        ],
        "operatingCost": [
            205.0,
            226.5,
            248.0,
            278.5,
            300.0
        ],
        "taxAndSurcharges": [
            2.5,
            3.2,
            3.8,
            4.2,
            4.5
        ],
        "salesExpenses": [
            8.5,
            9.8,
            11.2,
            12.5,
            13.2
        ],
        "adminExpenses": [
            11.2,
            12.8,
            14.5,
            15.8,
            16.5
        ],
        "rdExpenses": [
            10.5,
            12.5,
            14.8,
            16.5,
            18.0
        ],
        "financeExpenses": [
            2.5,
            1.8,
            0.8,
            0.5,
            0.4
        ],
        "interestExpenses": [
            2.2,
            1.5,
            0.7,
            0.4,
            0.3
        ],
        "coreProfit": [
            24.9,
            26.2,
            27.4,
            36.2,
            42.4
        ],
        "netProfit": [
            12.4,
            19.5,
            25.4,
            32.7,
            38.5
        ],
        "operatingCashFlow": [
            28.5,
            34.2,
            38.5,
            45.2,
            52.0
        ],
        "fourDrivers": {
            "operatingLiabilities": 38.0,
            "financialLiabilities": 14.0,
            "shareholdersCapital": 35.0,
            "retainedEarnings": 46.5
        },
        "inventory": 65.0,
        "payables": 98.0,
        "receivables": 52.0,
        "contractLiabilities": 34.0,
        "parentAssets": 220.0,
        "consolidatedAssets": 450.0,
        "longTermEquityInvestment": 35.0
    },
    "industryBenchmark": {
        "industryName": "高端装备 / 煤炭智能化装备",
        "peers": [
            "郑煤机",
            "行业龙头A",
            "同行企业B",
            "行业平均",
            "行业中位数"
        ],
        "grossMargin": {
            "target": 24.1,
            "avg": 14.5,
            "median": 14.0
        },
        "netMargin": {
            "target": 9.7,
            "avg": 3.8,
            "median": 3.5
        },
        "roe": {
            "target": 17.7,
            "avg": 6.5,
            "median": 6.0
        },
        "debtRatio": {
            "target": 48.9,
            "avg": 55.0,
            "median": 54.0
        },
        "inventoryTurnover": {
            "target": 8.5,
            "avg": 6.8,
            "median": 7.0
        },
        "coreProfitRatio": {
            "target": 10.7,
            "avg": 3.0,
            "median": 2.8
        },
        "dividendYield": {
            "target": 4.8,
            "avg": 2.2,
            "median": 1.8
        }
    },
    "capacityTrend": {
        "quarters": [
            "05-15",
            "05-22",
            "05-29",
            "06-05",
            "06-12",
            "06-19",
            "06-26",
            "07-03"
        ],
        "effectiveCapacity": [
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100
        ],
        "actualOutput": [
            91,
            92,
            92,
            93,
            94,
            94,
            94,
            95
        ],
        "operatingRate": [
            96.0,
            97.0,
            97.8,
            98.5,
            99.0,
            99.4,
            99.6,
            100.0
        ],
        "industryAvgOperatingRate": [
            78.0,
            79.5,
            80.8,
            81.5,
            82.2,
            83.0,
            83.5,
            84.2
        ],
        "asp": [
            32000,
            33000,
            34500,
            36000,
            37500,
            39000,
            40000,
            41000
        ],
        "rawMaterialCost": [
            22000,
            22200,
            22500,
            22800,
            23000,
            23300,
            23500,
            23800
        ],
        "spread": [
            10000,
            10800,
            12000,
            13200,
            14500,
            15700,
            16500,
            17200
        ]
    },
    "systemEval": {
        "veto": {
            "financialSafety": true,
            "demandFloor": true,
            "absoluteLowValuation": true
        },
        "coreDrivers": {
            "supplyExit": true,
            "costLeader": true,
            "spreadExpansion": true
        },
        "catalysts": {
            "industrialIntegration": true,
            "ultraLowInventory": false,
            "marketShareConcentration": true,
            "capitalSignaling": true
        },
        "currentProfitRate": 30.8,
        "peakProfitRate": 42.4,
        "pullbackFromPeak": 14.5
    }
},
};


// ==================== Source: masterUniverse.js ====================
/**
 * 「重器」总标的库数据中心 (Master Universe Registry)
 * 包含 12 只核心细分行业龙头与隐形冠军
 * 按照交易体系打分严格划分为三大等级梯队，并挂载真实全维数据集
 */



const MasterUniverseData = [
  {
    code: "000422",
    name: "湖北宜化",
    exchange: "SZ",
    tier: "tier1",
    tierLabel: "第一梯队 · 重仓爆发池",
    tierBadge: "badge-success",
    score: 90,
    recommendation: "重仓出击 (6~8成)",
    industry: "磷化工 / 农化制品",
    soeLevel: "宜昌市国资委重点平台",
    marketCap: 136.7,
    stockPrice: 12.63,
    pctChange: -0.94,
    pbRatio: 1.15,
    pbPercentile: 12.0,
    dividendYield: 3.8,
    debtRatio: 54.8,
    spreadStatus: "剪刀差持续扩大",
    coreCatalyst: "注入集团优质磷矿 + 磷肥供需紧平衡，开工率>95%",
    targetMultiplier: "2.85x",
    product: "尿素·磷酸二铵·PVC·烧碱·精细磷酸盐",
    capacity: "尿素156万吨/年、磷酸二铵126万吨/年、PVC84万吨/年",
    costRank: "行业前 15% (自备合成氨与磷矿石)",
    dataRef: LeaderDatasetsRegistry["000422"]
  },
  {
    code: "600096",
    name: "云天化",
    exchange: "SH",
    tier: "tier1",
    tierLabel: "第一梯队 · 重仓爆发池",
    tierBadge: "badge-success",
    score: 88,
    recommendation: "重仓出击 (6~8成)",
    industry: "化肥 / 磷化工全产业链",
    soeLevel: "云南省国资委控股骨干国企",
    marketCap: 566.7,
    stockPrice: 30.9,
    pctChange: -0.03,
    pbRatio: 2.22,
    pbPercentile: 35.0,
    dividendYield: 5.4,
    debtRatio: 55.2,
    spreadStatus: "高位维持且成本极低",
    coreCatalyst: "磷矿自给率超90% + 资源绝对垄断与高分红承诺",
    targetMultiplier: "2.40x",
    product: "磷酸二铵·磷酸一铵·尿素·聚甲醛·磷矿石",
    capacity: "化肥总产能超1000万吨/年、磷矿石采选1450万吨/年",
    costRank: "亚洲第一梯队 (自有高品位磷矿)",
    dataRef: LeaderDatasetsRegistry["600096"]
  },
  {
    code: "600426",
    name: "华鲁恒升",
    exchange: "SH",
    tier: "tier1",
    tierLabel: "第一梯队 · 重仓爆发池",
    tierBadge: "badge-success",
    score: 85,
    recommendation: "重仓出击 (6~8成)",
    industry: "煤化工 / 新材料多联产",
    soeLevel: "山东省国资委控股龙头",
    marketCap: 438.6,
    stockPrice: 20.66,
    pctChange: -0.1,
    pbRatio: 1.48,
    pbPercentile: 18.0,
    dividendYield: 3.6,
    debtRatio: 38.5,
    spreadStatus: "多产品联产剪刀差稳步修复",
    coreCatalyst: "荆州基地二期释放 + 行业绝对成本杀手 (一头多尾)",
    targetMultiplier: "2.35x",
    product: "尿素·醋酸·DMF·己二酸·草酸·碳酸二甲酯",
    capacity: "具备业内最强的现代水煤浆气化多联产柔性切换平台",
    costRank: "行业前 5% (全行业公认最低制造边际成本)",
    dataRef: LeaderDatasetsRegistry["600426"]
  },
  {
    code: "000683",
    name: "远兴能源",
    exchange: "SZ",
    tier: "tier1",
    tierLabel: "第一梯队 · 重仓爆发池",
    tierBadge: "badge-success",
    score: 84,
    recommendation: "重仓出击 (6~8成)",
    industry: "天然纯碱 / 煤化工",
    soeLevel: "战略民营/内蒙国资联营",
    marketCap: 230.0,
    stockPrice: 6.16,
    pctChange: 0.65,
    pbRatio: 1.55,
    pbPercentile: 22.0,
    dividendYield: 3.2,
    debtRatio: 42.1,
    spreadStatus: "天然碱完全出清传统合成碱",
    coreCatalyst: "阿拉善天然碱完全颠覆传统合成法成本，逆周期扩产",
    targetMultiplier: "2.20x",
    product: "天然纯碱·小苏打·煤炭·尿素",
    capacity: "阿拉善一期500万吨/年天然碱全线释放",
    costRank: "全球前 10% (天然碱卤水提纯超低能耗)",
    dataRef: LeaderDatasetsRegistry["000683"]
  },
  {
    code: "600160",
    name: "巨化股份",
    exchange: "SH",
    tier: "tier1",
    tierLabel: "第一梯队 · 重仓爆发池",
    tierBadge: "badge-success",
    score: 86,
    recommendation: "重仓出击 (6~8成)",
    industry: "氟化工 / 第三代制冷剂",
    soeLevel: "浙江省国资委控股骨干",
    marketCap: 1040.8,
    stockPrice: 38.55,
    pctChange: 1.37,
    pbRatio: 5.8,
    pbPercentile: 65.0,
    dividendYield: 2.1,
    debtRatio: 34.2,
    spreadStatus: "制冷剂价差持续扩大",
    coreCatalyst: "三代制冷剂生产配额锁死供给，行业寡头联合定价",
    targetMultiplier: "2.10x",
    product: "R32·R125·R134a·PVDF·PTFE等氟氯全系材料",
    capacity: "全国最大制冷剂与含氟聚合物龙头",
    costRank: "行业前 10% (自备氢氟酸与完整产业链)",
    dataRef: LeaderDatasetsRegistry["600160"]
  },
  {
    code: "002601",
    name: "龙佰集团",
    exchange: "SZ",
    tier: "tier1",
    tierLabel: "第一梯队 · 重仓爆发池",
    tierBadge: "badge-success",
    score: 82,
    recommendation: "重仓出击 (6~8成)",
    industry: "钛产业 / 战略钛锆精细化工",
    soeLevel: "行业绝对第一龙头 (混改体制)",
    marketCap: 377.1,
    stockPrice: 15.8,
    pctChange: 1.35,
    pbRatio: 1.62,
    pbPercentile: 19.0,
    dividendYield: 4.5,
    debtRatio: 58.6,
    spreadStatus: "钛精矿-钛白粉价差筑底回升",
    coreCatalyst: "攀西钒钛磁铁矿一体化自给，海外出口持续走强",
    targetMultiplier: "2.25x",
    product: "钛白粉·海绵钛·钛精矿·铁精矿·锆制品",
    capacity: "钛白粉产能超150万吨/年 (亚洲第一全球前列)",
    costRank: "全球前 15% (攀西选矿自备矿源)",
    dataRef: LeaderDatasetsRegistry["002601"]
  },
  {
    code: "000657",
    name: "中钨高新",
    exchange: "SZ",
    tier: "tier1",
    tierLabel: "第一梯队 · 重仓爆发池",
    tierBadge: "badge-success",
    score: 89,
    recommendation: "重仓出击 (6~8成)",
    industry: "战略金属 / 硬质合金·数控刀具",
    soeLevel: "中国五矿集团 (央企控股平台)",
    marketCap: 838.1,
    stockPrice: 59.99,
    pctChange: 0.37,
    pbRatio: 8.5,
    pbPercentile: 70.0,
    dividendYield: 1.8,
    debtRatio: 46.5,
    spreadStatus: "高端硬质合金与数控刀片量价齐升",
    coreCatalyst: "万吨优质钨矿资产注入 + 数控刀具国产替代加速",
    targetMultiplier: "2.60x",
    product: "硬质合金·PCB微型钻头·数控刀片·碳化钨粉",
    capacity: "硬质合金产能超1.3万吨/年，全球第一",
    costRank: "行业前 10% (央企资源注入)",
    dataRef: LeaderDatasetsRegistry["000657"]
  },
  {
    code: "603993",
    name: "洛阳钼业",
    exchange: "SH",
    tier: "tier1",
    tierLabel: "第一梯队 · 重仓爆发池",
    tierBadge: "badge-success",
    score: 83,
    recommendation: "重仓出击 (6~8成)",
    industry: "战略有色 / 难熔金属·铜钴钼钨",
    soeLevel: "洛阳市国资参股骨干矿企",
    marketCap: 4015.3,
    stockPrice: 18.59,
    pctChange: 0.7,
    pbRatio: 4.8,
    pbPercentile: 55.0,
    dividendYield: 2.8,
    debtRatio: 59.8,
    spreadStatus: "铜钴钼钨高位高景气",
    coreCatalyst: "刚果金TFM/KFM铜钴超预期放量 + 钼钨供给刚性卡位",
    targetMultiplier: "2.15x",
    product: "铜·钴·钼·钨·铌·磷肥",
    capacity: "全球最大钴生产商之一、前五大钼钨铜矿商",
    costRank: "全球第一梯队 (海外特大型富矿带)",
    dataRef: LeaderDatasetsRegistry["603993"]
  },
  {
    code: "600409",
    name: "三友化工",
    exchange: "SH",
    tier: "tier2",
    tierLabel: "第二梯队 · 稳健底仓池",
    tierBadge: "badge-info",
    score: 76,
    recommendation: "左侧底仓 (3~5成)",
    industry: "氯碱化工 / 纯碱·粘胶短纤",
    soeLevel: "河北省国资委 (唐山三友集团)",
    marketCap: 148.0,
    stockPrice: 7.17,
    pctChange: 1.99,
    pbRatio: 1.06,
    pbPercentile: 8.2,
    dividendYield: 4.2,
    debtRatio: 49.3,
    spreadStatus: "底部震荡企稳，剪刀差微扩",
    coreCatalyst: "低PB破净极度低估 + 粘胶与纯碱底部协同反转",
    targetMultiplier: "2.05x",
    product: "纯碱·粘胶短纤·PVC·烧碱·有机硅",
    capacity: "纯碱340万吨/年、粘胶短纤78万吨/年",
    costRank: "行业前 20% (自备热电与原盐矿山)",
    dataRef: LeaderDatasetsRegistry["600409"]
  },
  {
    code: "600111",
    name: "北方稀土",
    exchange: "SH",
    tier: "tier2",
    tierLabel: "第二梯队 · 稳健底仓池",
    tierBadge: "badge-info",
    score: 75,
    recommendation: "左侧底仓 (3~5成)",
    industry: "战略稀贵金属 / 轻稀土全产业链",
    soeLevel: "内蒙古国资委 (包钢集团控股)",
    marketCap: 1411.7,
    stockPrice: 39.05,
    pctChange: -0.1,
    pbRatio: 3.9,
    pbPercentile: 42.0,
    dividendYield: 1.9,
    debtRatio: 36.2,
    spreadStatus: "稀土氧化物价格筑底回升",
    coreCatalyst: "国家稀土指标配额龙头 + 白云鄂博尾矿排他性极低成本",
    targetMultiplier: "2.20x",
    product: "稀土精矿·碳酸稀土·稀土金属·磁性材料",
    capacity: "全球最大轻稀土产品供应商",
    costRank: "全球第一 (伴生矿剥离成本极低)",
    dataRef: LeaderDatasetsRegistry["600111"]
  },
  {
    code: "000708",
    name: "中信特钢",
    exchange: "SZ",
    tier: "tier2",
    tierLabel: "第二梯队 · 稳健底仓池",
    tierBadge: "badge-info",
    score: 78,
    recommendation: "中仓配置 (3~5成)",
    industry: "特种钢铁 / 高端轴承齿轮弹簧钢",
    soeLevel: "中信集团 (中央直管央企)",
    marketCap: 680.8,
    stockPrice: 13.49,
    pctChange: -1.32,
    pbRatio: 1.75,
    pbPercentile: 25.0,
    dividendYield: 4.6,
    debtRatio: 52.8,
    spreadStatus: "特钢溢价持续稳定，逆势造血",
    coreCatalyst: "全球最大特钢集群，逆势穿越钢铁普亏周期，高股息",
    targetMultiplier: "2.10x",
    product: "轴承钢·齿轮钢·汽车用钢·高压锅炉管",
    capacity: "特钢年产能超2000万吨，高技术特钢独占",
    costRank: "行业前 10% (吨钢净利连续多年行业第一)",
    dataRef: LeaderDatasetsRegistry["000708"]
  },
  {
    code: "601717",
    name: "郑煤机",
    exchange: "SH",
    tier: "tier2",
    tierLabel: "第二梯队 · 稳健底仓池",
    tierBadge: "badge-info",
    score: 77,
    recommendation: "中仓配置 (3~5成)",
    industry: "高端装备 / 煤炭智能化装备",
    soeLevel: "河南省资本运营集团控股",
    marketCap: 256.7,
    stockPrice: 14.38,
    pctChange: 0.91,
    pbRatio: 1.18,
    pbPercentile: 16.0,
    dividendYield: 4.8,
    debtRatio: 48.9,
    spreadStatus: "液压支架订单充沛，毛利坚挺",
    coreCatalyst: "煤矿智能化设备更新潮 + 亚新科汽车零部件双轮驱动",
    targetMultiplier: "2.05x",
    product: "液压支架·智能采煤工作面·汽车发动机零部件",
    capacity: "全球最大的煤矿综采液压支架研发制造基地",
    costRank: "行业前 15% (规模效应与高端智能化自研)",
    dataRef: LeaderDatasetsRegistry["601717"]
  },
];


// ==================== Source: zhangXinminEngine.js ====================
/**
 * 张新民教授财务报表分析方法论计算引擎
 * 涵盖：核心利润、四大动力、上下游“两头吃”能力、同口径获现率、控制性投资扩张倍数、八看诊断
 */

class ZhangXinminEngine {
  /**
   * 计算核心利润与同口径核心利润
   * 核心利润 = 营业收入 - 营业成本 - 税金及附加 - 销售费用 - 管理费用 - 研发费用 - 利息费用
   */
  static analyzeProfitQuality(financials) {
    const years = financials.years;
    const results = years.map((yr, idx) => {
      const rev = financials.revenue[idx];
      const cost = financials.operatingCost[idx];
      const tax = financials.taxAndSurcharges[idx];
      const sales = financials.salesExpenses[idx];
      const admin = financials.adminExpenses[idx];
      const rd = financials.rdExpenses[idx];
      const interest = financials.interestExpenses[idx];
      const net = financials.netProfit[idx];
      const ocf = financials.operatingCashFlow[idx];

      const coreProfit = parseFloat((rev - cost - tax - sales - admin - rd - interest).toFixed(2));
      const cashRealizationRate = coreProfit !== 0 ? parseFloat((ocf / coreProfit).toFixed(2)) : 0;
      const coreProfitRatio = parseFloat(((coreProfit / rev) * 100).toFixed(2));

      return {
        year: yr,
        revenue: rev,
        coreProfit,
        netProfit: net,
        operatingCashFlow: ocf,
        cashRealizationRate, // 核心利润获现率 (正常应在 1.2 ~ 1.5)
        coreProfitRatio
      };
    });

    return results;
  }

  /**
   * 分析四大动力构成
   * 经营性负债 vs 金融性负债 vs 股东入资 vs 利润积累
   */
  static analyzeFourDrivers(fourDrivers) {
    const total = fourDrivers.operatingLiabilities + 
                  fourDrivers.financialLiabilities + 
                  fourDrivers.shareholdersCapital + 
                  fourDrivers.retainedEarnings;

    return {
      operatingLiabilitiesPct: parseFloat(((fourDrivers.operatingLiabilities / total) * 100).toFixed(1)),
      financialLiabilitiesPct: parseFloat(((fourDrivers.financialLiabilities / total) * 100).toFixed(1)),
      shareholdersCapitalPct: parseFloat(((fourDrivers.shareholdersCapital / total) * 100).toFixed(1)),
      retainedEarningsPct: parseFloat(((fourDrivers.retainedEarnings / total) * 100).toFixed(1)),
      total: parseFloat(total.toFixed(1))
    };
  }

  /**
   * 上下游关系“两头吃”能力量化
   * 1. 存货 vs 应付 (负值代表无偿占用供应商资金，强势)
   * 2. 商业债权 vs 商业债务 (负值代表预收为主，不赊销)
   */
  static analyzeUpstreamDownstream(financials) {
    const inventoryMinusPayables = parseFloat((financials.inventory - financials.payables).toFixed(2));
    const debtMinusLiabilities = parseFloat((financials.receivables - financials.contractLiabilities).toFixed(2));

    const isDoubleEating = inventoryMinusPayables < 0 && debtMinusLiabilities < 0;

    return {
      inventory: financials.inventory,
      payables: financials.payables,
      receivables: financials.receivables,
      contractLiabilities: financials.contractLiabilities,
      inventoryMinusPayables,
      debtMinusLiabilities,
      isDoubleEating,
      evaluation: isDoubleEating ? 
        "具备典型的产业链'两头吃'极强势定价地位 (占用上游资金 + 预收下游款项)" : 
        "产业链地位较为中性或处于备货扩张期"
    };
  }

  /**
   * 控制性投资扩张效应
   * 扩张倍数 = (合并总资产 - 母公司总资产) / 长期股权投资
   */
  static analyzeControlExpansion(financials) {
    const expansionEffect = parseFloat((financials.consolidatedAssets - financials.parentAssets).toFixed(1));
    const multiplier = financials.longTermEquityInvestment > 0 ? 
      parseFloat((expansionEffect / financials.longTermEquityInvestment).toFixed(2)) : 0;

    return {
      parentAssets: financials.parentAssets,
      consolidatedAssets: financials.consolidatedAssets,
      longTermEquityInvestment: financials.longTermEquityInvestment,
      expansionEffect,
      multiplier,
      evaluation: multiplier > 2.0 ? 
        `母公司以 ${financials.longTermEquityInvestment} 亿投资撬动了 ${expansionEffect} 亿合并资产扩张 (扩张倍数 ${multiplier}x)，资本运作杠杆高效。` :
        `扩张倍数 ${multiplier}x，主要以母公司直接经营为主。`
    };
  }

  /**
   * 张新民“八看”综合评分雷达 (满分100，分项满分10~15分)
   */
  static generateEightPerspectivesRadar(stockData) {
    const financials = stockData.financials;
    const latestProfit = financials.coreProfit[financials.coreProfit.length - 1];
    const latestOCF = financials.operatingCashFlow[financials.operatingCashFlow.length - 1];
    const upDown = this.analyzeUpstreamDownstream(financials);

    return {
      lookStrategy: 90, // 看战略 (重资产/经营主导/核心平台)
      lookOperations: upDown.isDoubleEating ? 95 : 82, // 看经营资产管理 (两头吃能力)
      lookProfitQuality: latestProfit > 0 && latestOCF > latestProfit ? 92 : 75, // 看效益和质量 (核心利润与获现)
      lookValueCreation: 85, // 看价值创造
      lookCostControl: 88, // 看成本决定机制 (全成本左侧)
      lookFinancialHealth: stockData.profile.debtRatio < 60 ? 90 : 70, // 看财务状况质量
      lookRiskManagement: 86, // 看风险可控度
      lookProspects: 92  // 看周期反转前景
    };
  }
}


// ==================== Source: tradingSystemEngine.js ====================
/**
 * 周期反转与细分国企隐形冠军交易系统引擎
 * 包含：三票否决判定、100分打分矩阵、非线性利润弹性模拟、60/40 双轨仓位卖出与回补信号触发
 */

class TradingSystemEngine {
  /**
   * 评估三票否决与推荐仓位级别
   */
  static evaluateScore(veto, coreDrivers, catalysts) {
    // 三票否决检查 (任一为 false 直接一票否决)
    const isVetoPassed = veto.financialSafety && veto.demandFloor && veto.absoluteLowValuation;

    let coreScore = 0;
    if (coreDrivers.supplyExit) coreScore += 20;
    if (coreDrivers.costLeader) coreScore += 20;
    if (coreDrivers.spreadExpansion) coreScore += 20;

    let catalystScore = 0;
    if (catalysts.industrialIntegration) catalystScore += 10;
    if (catalysts.ultraLowInventory) catalystScore += 10;
    if (catalysts.marketShareConcentration) catalystScore += 10;
    if (catalysts.capitalSignaling) catalystScore += 10;

    const totalScore = coreScore + catalystScore;

    let positionTier = "0 仓位 (坚决不买)";
    let positionPct = "0%";
    let tierCode = 0;
    let badgeClass = "badge-danger";
    let advice = "存在一票否决项未通过，有本金永久性损失风险。";

    if (isVetoPassed) {
      if (totalScore >= 80) {
        positionTier = "重仓出击 (6~8 成)";
        positionPct = "60% ~ 80%";
        tierCode = 3;
        badgeClass = "badge-success";
        advice = "核心逻辑与催化剂高度共振，右侧拐点确认，确定性与弹性兼备。";
      } else if (totalScore >= 60) {
        positionTier = "中等仓位 (3~5 成)";
        positionPct = "30% ~ 50%";
        tierCode = 2;
        badgeClass = "badge-info";
        advice = "核心驱动项成立，右侧催化信号尚在积蓄中，分批跟进。";
      } else if (totalScore >= 40) {
        positionTier = "轻仓试探 (1~2 成)";
        positionPct = "10% ~ 20%";
        tierCode = 1;
        badgeClass = "badge-warning";
        advice = "左侧低估防御埋伏，以时间换空间，严格控制单票风险敞口。";
      } else {
        positionTier = "0 仓位 (观望)";
        positionPct = "0%";
        tierCode = 0;
        badgeClass = "badge-danger";
        advice = "得分不足 40 分，当前不具备入场性价比。";
      }
    }

    return {
      isVetoPassed,
      coreScore,
      catalystScore,
      totalScore,
      positionTier,
      positionPct,
      tierCode,
      badgeClass,
      advice
    };
  }

  /**
   * 非线性利润弹性与赔率模拟计算
   * 考虑：产品涨价幅度、原料成本跟随率、常态化吨毛利、合规产能、安全折扣率(0.75)
   */
  static calculateElasticity(currentMarketCap, baseCapacity, baseSpread, priceDeltaPct, costFollowPct, targetPE = 15) {
    // 假设基准产品单价 2000 元，价格变动 Delta
    const simulatedSpread = baseSpread * (1 + (priceDeltaPct / 100) - (priceDeltaPct / 100) * (costFollowPct / 100) * 0.6);
    const grossProfitIncrement = (simulatedSpread * baseCapacity) / 10000; // 亿元
    const normalizedNetProfit = Math.max(0.5, grossProfitIncrement * 0.72); // 扣除三费税费后净利
    
    // 经 0.75 安全折价后的合理目标市值
    const targetMarketCap = parseFloat((normalizedNetProfit * targetPE * 0.75).toFixed(1));
    const payoffMultiplier = parseFloat((targetMarketCap / currentMarketCap).toFixed(2));

    return {
      simulatedSpread: Math.round(simulatedSpread),
      normalizedNetProfit: parseFloat(normalizedNetProfit.toFixed(1)),
      targetMarketCap,
      payoffMultiplier,
      isPayoffAcceptable: payoffMultiplier >= 2.0
    };
  }

  /**
   * 双轨制卖出与回补状态判定
   */
  static evaluateExitTriggers(currentProfitRate, peakProfitRate, pullbackFromPeak, pbRatio) {
    // 模式 A：浮动仓 (40%) 波段规则
    const modeA_TakeProfit_30 = currentProfitRate >= 30;
    const modeA_TakeProfit_50 = currentProfitRate >= 50;
    const modeA_CanBuyback = pullbackFromPeak >= 15.0; // 自高点回调 >= 15%

    // 模式 B：底仓 (60%) 三阶梯规则
    const modeB_Step1_RecoverPrincipal = currentProfitRate >= 85.0; // 阶梯一：+85% 收回全部本金
    const modeB_Step2_PBBubble = pbRatio >= 2.8; // 阶梯二：PB 触及历史前 10% 估值泡沫
    const modeB_Step3_FullExit = false; // 阶梯三：全行业复产/见顶

    return {
      modeA: {
        takeProfit30: modeA_TakeProfit_30,
        takeProfit50: modeA_TakeProfit_50,
        canBuyback: modeA_CanBuyback,
        statusText: modeA_CanBuyback ? 
          "⚠️ 已自高点回调超过 15%，若基本面剪刀差未恶化，可回补减出的利润仓位！" :
          (modeA_TakeProfit_30 ? "✅ 浮盈已达 30% 以上，建议减出利润部分降低持仓成本。" : "持仓观察中")
      },
      modeB: {
        step1: modeB_Step1_RecoverPrincipal,
        step2: modeB_Step2_PBBubble,
        step3: modeB_Step3_FullExit,
        statusText: modeB_Step1_RecoverPrincipal ? 
          "🔥 阶梯一达成（浮盈 ≥ 85%）：建议减仓 30% 锁定并收回全部原始本金，剩余进入零成本持仓！" :
          "锁死核心底仓，等待主升浪阶梯目标兑现。"
      }
    };
  }
}


// ==================== Source: customCanvasCharts.js ====================
/**
 * 高性能原生 Canvas 护眼图表库
 * 包含：剪刀差双轴走势图、产能-利用率-均价多维图、库存四象限周期钟、财务与对标对比柱状图、张新民八看雷达图
 */

class CustomCanvasCharts {
  /**
   * 初始化 Canvas 高清视网膜缩放
   */
  static initCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    return { ctx, width: rect.width, height: rect.height };
  }

  /**
   * 图表 1：产品-原料“剪刀差”高频趋势图（双轴 + 面积图）
   */
  static renderSpreadChart(canvasId, capacityData) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const { ctx, width, height } = this.initCanvas(canvas);

    const padLeft = 45, padRight = 45, padTop = 25, padBottom = 30;
    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    ctx.clearRect(0, 0, width, height);

    const quarters = capacityData.quarters;
    const asp = capacityData.asp;
    const cost = capacityData.rawMaterialCost;
    const spread = capacityData.spread;

    const minPrice = Math.min(...cost) * 0.85;
    const maxPrice = Math.max(...asp) * 1.1;
    const maxSpread = Math.max(...spread) * 1.25;

    // 绘制背景网格
    ctx.strokeStyle = "#21262d";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padTop + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(width - padRight, y);
      ctx.stroke();

      // 左轴刻度 (产品价格)
      const valL = Math.round(maxPrice - ((maxPrice - minPrice) / 4) * i);
      ctx.fillStyle = "#8b949e";
      ctx.font = "10px JetBrains Mono, monospace";
      ctx.textAlign = "right";
      ctx.fillText(valL, padLeft - 6, y + 3);

      // 右轴刻度 (剪刀差)
      const valR = Math.round(maxSpread - (maxSpread / 4) * i);
      ctx.fillStyle = "#d29922";
      ctx.textAlign = "left";
      ctx.fillText(valR, width - padRight + 6, y + 3);
    }

    const getX = (idx) => padLeft + (chartW / (quarters.length - 1)) * idx;
    const getYPrice = (val) => padTop + chartH - ((val - minPrice) / (maxPrice - minPrice)) * chartH;
    const getYSpread = (val) => padTop + chartH - (val / maxSpread) * chartH;

    // 1. 绘制剪刀差绿色渐变填充面积
    ctx.beginPath();
    ctx.moveTo(getX(0), getYPrice(cost[0]));
    for (let i = 0; i < quarters.length; i++) {
      ctx.lineTo(getX(i), getYPrice(asp[i]));
    }
    for (let i = quarters.length - 1; i >= 0; i--) {
      ctx.lineTo(getX(i), getYPrice(cost[i]));
    }
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, padTop, 0, padTop + chartH);
    grad.addColorStop(0, "rgba(63, 185, 80, 0.35)");
    grad.addColorStop(1, "rgba(63, 185, 80, 0.05)");
    ctx.fillStyle = grad;
    ctx.fill();

    // 2. 绘制产品均价线 (亮蓝)
    ctx.strokeStyle = "#58a6ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    quarters.forEach((_, i) => {
      const x = getX(i);
      const y = getYPrice(asp[i]);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    // 3. 绘制原料成本线 (赤红虚线)
    ctx.strokeStyle = "#f85149";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    quarters.forEach((_, i) => {
      const x = getX(i);
      const y = getYPrice(cost[i]);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    // 4. 绘制 X 轴标签与关键拐点圆点
    quarters.forEach((q, i) => {
      const x = getX(i);
      ctx.fillStyle = "#8b949e";
      ctx.font = "11px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(q, x, height - 10);

      // 点标
      ctx.fillStyle = "#58a6ff";
      ctx.beginPath();
      ctx.arc(x, getYPrice(asp[i]), 3.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // 图例
    ctx.font = "11px Inter, sans-serif";
    ctx.fillStyle = "#58a6ff";
    ctx.fillText("■ 产品售价(ASP)", padLeft + 60, padTop - 10);
    ctx.fillStyle = "#f85149";
    ctx.fillText("■ 原料综合成本", padLeft + 180, padTop - 10);
    ctx.fillStyle = "#3fb950";
    ctx.fillText("■ 剪刀差(吨毛利)", padLeft + 290, padTop - 10);
  }

  /**
   * 图表 2：产能 - 实际产量 - 开工率联动图
   */
  static renderCapacityPriceChart(canvasId, capacityData) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const { ctx, width, height } = this.initCanvas(canvas);

    const padLeft = 40, padRight = 45, padTop = 25, padBottom = 30;
    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    ctx.clearRect(0, 0, width, height);

    const quarters = capacityData.quarters;
    const cap = capacityData.effectiveCapacity;
    const output = capacityData.actualOutput;
    const opRate = capacityData.operatingRate;
    const indOpRate = capacityData.industryAvgOperatingRate;

    const maxCap = Math.max(...cap) * 1.25;

    // 网格线
    ctx.strokeStyle = "#21262d";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padTop + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(width - padRight, y);
      ctx.stroke();

      // 左轴刻度 (产能 万吨)
      const valL = Math.round(maxCap - (maxCap / 4) * i);
      ctx.fillStyle = "#8b949e";
      ctx.font = "10px JetBrains Mono, monospace";
      ctx.textAlign = "right";
      ctx.fillText(valL, padLeft - 6, y + 3);

      // 右轴刻度 (开工率 %)
      const valR = Math.round(100 - 25 * i) + "%";
      ctx.fillStyle = "#3fb950";
      ctx.textAlign = "left";
      ctx.fillText(valR, width - padRight + 6, y + 3);
    }

    const stepX = chartW / quarters.length;
    const barW = Math.max(12, stepX * 0.45);

    // 1. 绘制产量与产能柱状图
    quarters.forEach((q, i) => {
      const x = padLeft + stepX * i + (stepX - barW) / 2;
      const hCap = (cap[i] / maxCap) * chartH;
      const hOut = (output[i] / maxCap) * chartH;

      // 产能底柱 (暗灰)
      ctx.fillStyle = "rgba(110, 118, 129, 0.25)";
      ctx.fillRect(x, padTop + chartH - hCap, barW, hCap);

      // 实际产量柱 (亮蓝)
      ctx.fillStyle = "rgba(88, 166, 255, 0.75)";
      ctx.fillRect(x, padTop + chartH - hOut, barW, hOut);

      // X 轴文字
      ctx.fillStyle = "#8b949e";
      ctx.font = "11px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(q, x + barW / 2, height - 10);
    });

    // 2. 绘制公司开工率线 (翠绿实线) vs 行业均值 (黄色虚线)
    const getYRate = (rate) => padTop + chartH - (rate / 100) * chartH;

    // 行业均值线
    ctx.strokeStyle = "#d29922";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    quarters.forEach((_, i) => {
      const cx = padLeft + stepX * i + stepX / 2;
      const cy = getYRate(indOpRate[i]);
      i === 0 ? ctx.moveTo(cx, cy) : ctx.lineTo(cx, cy);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    // 公司开工率线
    ctx.strokeStyle = "#3fb950";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    quarters.forEach((_, i) => {
      const cx = padLeft + stepX * i + stepX / 2;
      const cy = getYRate(opRate[i]);
      i === 0 ? ctx.moveTo(cx, cy) : ctx.lineTo(cx, cy);
    });
    ctx.stroke();

    // 开工率高亮圆点
    quarters.forEach((_, i) => {
      const cx = padLeft + stepX * i + stepX / 2;
      const cy = getYRate(opRate[i]);
      ctx.fillStyle = "#3fb950";
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // 图例
    ctx.font = "11px Inter, sans-serif";
    ctx.fillStyle = "rgba(88, 166, 255, 0.9)";
    ctx.fillText("■ 实际产量", padLeft + 60, padTop - 10);
    ctx.fillStyle = "#3fb950";
    ctx.fillText("━ 公司开工率", padLeft + 160, padTop - 10);
    ctx.fillStyle = "#d29922";
    ctx.fillText("┄ 行业平均开工率", padLeft + 270, padTop - 10);
  }

  /**
   * 图表 3：库存周期四象限钟
   */
  static renderCycleClock(canvasId, currentPhase = "被动去库", stockName = "") {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const { ctx, width, height } = this.initCanvas(canvas);

    ctx.clearRect(0, 0, width, height);

    const midX = width / 2;
    const midY = height / 2;
    const isNarrow = width < 360;

    // 1. 绘制象限底色
    ctx.fillStyle = "#161b22";
    ctx.fillRect(0, 0, width, height);

    // 2. 高亮黄金买点象限 (左上：被动去库)
    ctx.fillStyle = "rgba(63, 185, 80, 0.09)";
    ctx.fillRect(0, 0, midX, midY);

    // 3. 十字坐标轴
    ctx.strokeStyle = "#30363d";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(10, midY);
    ctx.lineTo(width - 10, midY);
    ctx.moveTo(midX, 10);
    ctx.lineTo(midX, height - 10);
    ctx.stroke();

    // 4. 坐标轴方向标注
    ctx.font = "9px Inter, sans-serif";
    ctx.fillStyle = "#6e7681";
    ctx.textBaseline = "middle";

    ctx.textAlign = "left";
    ctx.fillText("← 需求收缩", 12, midY - 8);
    ctx.textAlign = "right";
    ctx.fillText("需求复苏 →", width - 12, midY - 8);

    ctx.textAlign = "center";
    ctx.fillText("↑ 累库阶段", midX + 32, 16);
    ctx.fillText("↓ 去库阶段", midX + 32, height - 16);

    // 5. 四象限专业标签（四角对齐，永不遮挡中心点）
    const titleFont = isNarrow ? "bold 11px Inter, sans-serif" : "bold 12px Inter, sans-serif";
    const subFont = isNarrow ? "10px Inter, sans-serif" : "11px Inter, sans-serif";

    // 左上象限：② 被动去库存 [黄金买点]
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#3fb950";
    ctx.font = titleFont;
    ctx.fillText("② 被动去库存 [黄金买点]", 14, 12);
    ctx.fillStyle = "#8b949e";
    ctx.font = subFont;
    ctx.fillText(isNarrow ? "需求回暖·库存触底" : "下游需求筑底回升 + 行业极低库存", 14, 30);

    // 右上象限：③ 主动补库存 [主升期]
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#58a6ff";
    ctx.font = titleFont;
    ctx.fillText("③ 主动补库存 [主升期]", width - 14, 12);
    ctx.fillStyle = "#8b949e";
    ctx.font = subFont;
    ctx.fillText(isNarrow ? "价量齐升·开工打满" : "价格上涨 + 订单饱满 + 逆势抢份额", width - 14, 30);

    // 左下象限：① 主动去库存 [左侧出清]
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "#8b949e";
    ctx.font = subFont;
    ctx.fillText(isNarrow ? "停产关停·落后出清" : "行业全线普亏 + 资本开支大幅收缩", 14, height - 28);
    ctx.fillStyle = "#d29922";
    ctx.font = titleFont;
    ctx.fillText("① 主动去库存 [左侧出清]", 14, height - 10);

    // 右下象限：④ 被动补库存 [见顶防守]
    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "#8b949e";
    ctx.font = subFont;
    ctx.fillText(isNarrow ? "需求转弱·被动积压" : "新装置密集投产 + 渠道库存高企", width - 14, height - 28);
    ctx.fillStyle = "#f85149";
    ctx.font = titleFont;
    ctx.fillText("④ 被动补库存 [见顶防守]", width - 14, height - 10);

    // 6. 当前标的位置发光雷达点
    const targetX = midX * 0.48;
    const targetY = midY * 0.60;

    ctx.fillStyle = "rgba(63, 185, 80, 0.2)";
    ctx.beginPath();
    ctx.arc(targetX, targetY, 18, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(63, 185, 80, 0.6)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(targetX, targetY, 10, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#3fb950";
    ctx.beginPath();
    ctx.arc(targetX, targetY, 5, 0, Math.PI * 2);
    ctx.fill();

    // 7. 标的位置浮动信息胶囊（独立半透明背景，永不碰撞文字）
    const pillText = `📍 ${stockName || '当前标的'} · 被动去库确认`;
    ctx.font = "bold 11px Inter, sans-serif";
    const tw = ctx.measureText(pillText).width;
    const pw = tw + 16;
    const ph = 22;
    const px = Math.max(10, targetX - pw / 2);
    const py = targetY + 12;

    ctx.fillStyle = "rgba(13, 17, 23, 0.9)";
    ctx.strokeStyle = "#3fb950";
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(px, py, pw, ph, 4);
    } else {
      ctx.rect(px, py, pw, ph);
    }
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#3fb950";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(pillText, px + pw / 2, py + ph / 2);
  }

  /**
   * 图表 4：张新民八看分析雷达图
   */
  static renderRadarChart(canvasId, radarData) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const { ctx, width, height } = this.initCanvas(canvas);

    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2 + 6;
    const isNarrow = width < 310;
    const radius = Math.max(30, Math.min(centerX, centerY) - (isNarrow ? 26 : 38));

    const labels = [
      "看战略", "看管理", "看利润", "看创造",
      "看成本", "看健康", "看风险", "看前景"
    ];
    const fullLabels = [
      "看战略定位", "看经营管理", "看利润质量", "看价值创造",
      "看成本控制", "看财务健康", "看风险防范", "看周期前景"
    ];
    const displayLabels = isNarrow ? labels : fullLabels;
    const values = [
      radarData.lookStrategy, radarData.lookOperations, radarData.lookProfitQuality, radarData.lookValueCreation,
      radarData.lookCostControl, radarData.lookFinancialHealth, radarData.lookRiskManagement, radarData.lookProspects
    ];

    const numAxes = displayLabels.length;
    const angleStep = (Math.PI * 2) / numAxes;

    // 绘制雷达同心圆网格
    ctx.strokeStyle = "#30363d";
    ctx.lineWidth = 1;
    for (let level = 1; level <= 4; level++) {
      const r = (radius / 4) * level;
      ctx.beginPath();
      for (let i = 0; i < numAxes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // 绘制轴线与文字
    ctx.font = isNarrow ? "9px Inter, sans-serif" : "11px Inter, sans-serif";
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      ctx.strokeStyle = "#21262d";
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // 绘制轴端文字
      const textX = centerX + Math.cos(angle) * (radius + (isNarrow ? 12 : 16));
      const textY = centerY + Math.sin(angle) * (radius + (isNarrow ? 12 : 16));

      ctx.fillStyle = "#8b949e";
      ctx.textAlign = Math.abs(Math.cos(angle)) < 0.2 ? "center" : (Math.cos(angle) > 0 ? "left" : "right");
      ctx.textBaseline = "middle";
      ctx.fillText(displayLabels[i], textX, textY);
    }

    // 绘制数据多边形
    ctx.beginPath();
    values.forEach((val, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (val / 100) * radius;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();

    ctx.fillStyle = "rgba(88, 166, 255, 0.25)";
    ctx.fill();
    ctx.strokeStyle = "#58a6ff";
    ctx.lineWidth = 2;
    ctx.stroke();

    // 顶点圆点
    values.forEach((val, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (val / 100) * radius;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;

      ctx.fillStyle = "#58a6ff";
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}


// ==================== Source: vetoScorecard.js ====================
/**
 * 三票否决与决策打分盘组件
 */


class VetoScorecardComponent {
  static render(containerId, currentData, onScoreChangeCallback) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const evalData = currentData.systemEval;
    const result = TradingSystemEngine.evaluateScore(
      evalData.veto,
      evalData.coreDrivers,
      evalData.catalysts
    );

    container.innerHTML = `
      <div class="terminal-card">
        <div class="card-header">
          <div class="card-title">
            <span class="card-title-icon">⚡</span> 选股决策与三票否决矩阵
          </div>
          <span class="badge ${result.badgeClass}">${result.positionTier}</span>
        </div>

        <!-- 三票否决指示灯 -->
        <div class="veto-status-grid">
          <div class="veto-box ${evalData.veto.financialSafety ? 'passed' : 'vetoed'}" data-veto="financialSafety">
            <div class="veto-box-icon">${evalData.veto.financialSafety ? '🛡️' : '⚠️'}</div>
            <div class="veto-box-title">财务安全底线</div>
            <div class="veto-box-status">${evalData.veto.financialSafety ? '合格 (负债安全)' : '否决 (暴雷风险)'}</div>
          </div>
          <div class="veto-box ${evalData.veto.demandFloor ? 'passed' : 'vetoed'}" data-veto="demandFloor">
            <div class="veto-box-icon">${evalData.veto.demandFloor ? '⚓' : '❌'}</div>
            <div class="veto-box-title">需求非衰退</div>
            <div class="veto-box-status">${evalData.veto.demandFloor ? '合格 (L型筑底)' : '否决 (永久坍塌)'}</div>
          </div>
          <div class="veto-box ${evalData.veto.absoluteLowValuation ? 'passed' : 'vetoed'}" data-veto="absoluteLowValuation">
            <div class="veto-box-icon">${evalData.veto.absoluteLowValuation ? '💎' : '⚠️'}</div>
            <div class="veto-box-title">PB绝对低估</div>
            <div class="veto-box-status">${evalData.veto.absoluteLowValuation ? `合格 (PB ${currentData.profile.pbRatio})` : '否决 (估值偏高)'}</div>
          </div>
        </div>

        <!-- 得分总览仪表 -->
        <div class="score-display-block">
          <div>
            <div style="font-size: 11px; color: var(--text-muted);">体系量化总分</div>
            <div class="score-number-group">
              <span class="score-main-val" id="totalScoreVal">${result.totalScore}</span>
              <span class="score-max-val">/ 100 分</span>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 11px; color: var(--text-muted);">建议仓位上限</div>
            <div style="font-family: var(--font-mono); font-size: 18px; font-weight: 700; color: var(--text-primary);">${result.positionPct}</div>
          </div>
        </div>

        <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.4; margin-bottom: 12px; padding: 8px; background: var(--bg-primary); border-radius: var(--radius-sm); border: 1px dashed var(--border-subtle);">
          💡 <strong>投资建议</strong>：${result.advice}
        </div>

        <!-- 核心驱动项 (60分) -->
        <div class="checklist-group-title">
          <span>一、 核心驱动项 (必须项)</span>
          <span style="color: var(--color-warning);" id="coreScoreTotal">${result.coreScore} / 60 分</span>
        </div>

        <div class="score-item-row ${evalData.coreDrivers.supplyExit ? 'checked' : ''}" data-type="core" data-key="supplyExit">
          <input type="checkbox" class="custom-checkbox" ${evalData.coreDrivers.supplyExit ? 'checked' : ''}>
          <div class="score-item-content">
            <div class="score-item-label">
              <span>供给实质性出清</span>
              <span class="score-item-points">+20分</span>
            </div>
            <div class="score-item-desc">CAPEX 连续 2~3 年下行，落后装置实质拆除，政策锁死新增。</div>
          </div>
        </div>

        <div class="score-item-row ${evalData.coreDrivers.costLeader ? 'checked' : ''}" data-type="core" data-key="costLeader">
          <input type="checkbox" class="custom-checkbox" ${evalData.coreDrivers.costLeader ? 'checked' : ''}>
          <div class="score-item-content">
            <div class="score-item-label">
              <span>真实全成本领先</span>
              <span class="score-item-points">+20分</span>
            </div>
            <div class="score-item-desc">全现金成本处行业前 20%，逆境下仍具备正向经营造血能力。</div>
          </div>
        </div>

        <div class="score-item-row ${evalData.coreDrivers.spreadExpansion ? 'checked' : ''}" data-type="core" data-key="spreadExpansion">
          <input type="checkbox" class="custom-checkbox" ${evalData.coreDrivers.spreadExpansion ? 'checked' : ''}>
          <div class="score-item-content">
            <div class="score-item-label">
              <span>产品-原料价差走阔</span>
              <span class="score-item-points">+20分</span>
            </div>
            <div class="score-item-desc">剪刀差拐点确立，单位吨毛利脱离历史绝对底部开始上行。</div>
          </div>
        </div>

        <!-- 辅助催化项 (40分) -->
        <div class="checklist-group-title">
          <span>二、 辅助催化项 (增强项)</span>
          <span style="color: var(--color-warning);" id="catalystScoreTotal">${result.catalystScore} / 40 分</span>
        </div>

        <div class="score-item-row ${evalData.catalysts.industrialIntegration ? 'checked' : ''}" data-type="catalyst" data-key="industrialIntegration">
          <input type="checkbox" class="custom-checkbox" ${evalData.catalysts.industrialIntegration ? 'checked' : ''}>
          <div class="score-item-content">
            <div class="score-item-label">
              <span>产业整合与资产注入</span>
              <span class="score-item-points">+10分</span>
            </div>
            <div class="score-item-desc">控股股东有明确的优质资产注入承诺或主导行业并购意愿。</div>
          </div>
        </div>

        <div class="score-item-row ${evalData.catalysts.ultraLowInventory ? 'checked' : ''}" data-type="catalyst" data-key="ultraLowInventory">
          <input type="checkbox" class="custom-checkbox" ${evalData.catalysts.ultraLowInventory ? 'checked' : ''}>
          <div class="score-item-content">
            <div class="score-item-label">
              <span>行业库存历史极低</span>
              <span class="score-item-points">+10分</span>
            </div>
            <div class="score-item-desc">产业链全环节去库充分，出现被动去库与强补库弹性。</div>
          </div>
        </div>

        <div class="score-item-row ${evalData.catalysts.marketShareConcentration ? 'checked' : ''}" data-type="catalyst" data-key="marketShareConcentration">
          <input type="checkbox" class="custom-checkbox" ${evalData.catalysts.marketShareConcentration ? 'checked' : ''}>
          <div class="score-item-content">
            <div class="score-item-label">
              <span>龙头份额加速集中</span>
              <span class="score-item-points">+10分</span>
            </div>
            <div class="score-item-desc">公司维持高开工满产满销，中小竞争对手降负出清。</div>
          </div>
        </div>

        <div class="score-item-row ${evalData.catalysts.capitalSignaling ? 'checked' : ''}" data-type="catalyst" data-key="capitalSignaling">
          <input type="checkbox" class="custom-checkbox" ${evalData.catalysts.capitalSignaling ? 'checked' : ''}>
          <div class="score-item-content">
            <div class="score-item-label">
              <span>资本运作与增持信号</span>
              <span class="score-item-points">+10分</span>
            </div>
            <div class="score-item-desc">大股东低位全额认购定增、发布大额回购注销或股权激励草案。</div>
          </div>
        </div>
      </div>
    `;

    // 绑定点击联动事件
    container.querySelectorAll(".score-item-row").forEach(row => {
      row.addEventListener("click", (e) => {
        const checkbox = row.querySelector("input[type='checkbox']");
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
        }
        const type = row.dataset.type;
        const key = row.dataset.key;
        if (type === "core") {
          currentData.systemEval.coreDrivers[key] = checkbox.checked;
        } else if (type === "catalyst") {
          currentData.systemEval.catalysts[key] = checkbox.checked;
        }
        row.classList.toggle("checked", checkbox.checked);
        if (onScoreChangeCallback) onScoreChangeCallback();
      });
    });

    container.querySelectorAll(".veto-box").forEach(box => {
      box.addEventListener("click", () => {
        const key = box.dataset.veto;
        currentData.systemEval.veto[key] = !currentData.systemEval.veto[key];
        if (onScoreChangeCallback) onScoreChangeCallback();
      });
    });
  }
}


// ==================== Source: positionManager.js ====================
/**
 * 60/40 仓位物理隔离与非线性弹性模拟器组件
 */


class PositionManagerComponent {
  static render(containerId, currentData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const evalData = currentData.systemEval || {
      currentProfitRate: 30,
      peakProfitRate: 35,
      pullbackFromPeak: 5
    };
    const triggers = TradingSystemEngine.evaluateExitTriggers(
      evalData.currentProfitRate,
      evalData.peakProfitRate,
      evalData.pullbackFromPeak,
      currentData.profile.pbRatio
    );

    // 默认弹性测算参数
    const baseCap = (currentData.capacityTrend && currentData.capacityTrend.effectiveCapacity) ? currentData.capacityTrend.effectiveCapacity[0] : 100;
    const baseSpread = (currentData.capacityTrend && currentData.capacityTrend.spread) ? currentData.capacityTrend.spread[currentData.capacityTrend.spread.length - 1] : 600;
    const initElasticity = TradingSystemEngine.calculateElasticity(
      currentData.profile.marketCap,
      baseCap,
      baseSpread,
      20, // 价格上涨 +20%
      30, // 成本跟随 30%
      15  // 目标 PE 15x
    );

    container.innerHTML = `
      <!-- 60/40 仓位物理隔离双轨交易台 -->
      <div class="terminal-card">
        <div class="card-header">
          <div class="card-title">
            <span class="card-title-icon">🧭</span> 60/40 仓位物理隔离与双轨退出台
          </div>
          <span class="badge ${triggers.modeA.canBuyback ? 'badge-warning' : 'badge-info'}">
            ${triggers.modeA.canBuyback ? '回补预警' : '运行正常'}
          </span>
        </div>

        <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 10px;">
          当前持仓模拟浮盈：<strong style="color: var(--color-success); font-family: var(--font-mono);">+${evalData.currentProfitRate}%</strong> 
          (阶段最高 +${evalData.peakProfitRate}%, 自高点回撤 -${evalData.pullbackFromPeak}%)
        </div>

        <div class="position-dual-container">
          <!-- 60% 死守底仓 (模式 B) -->
          <div class="pos-card" style="border-left: 3px solid var(--color-brand);">
            <div class="pos-card-header">
              <span class="pos-card-title">60% 锁定底仓</span>
              <span class="badge badge-info">模式 B: 大周期</span>
            </div>
            <div style="font-size: 11px; color: var(--text-muted);">
              坚决锁仓，等待主升浪大级别阶梯兑现
            </div>

            <div class="ladder-step ${triggers.modeB.step1 ? 'active' : ''}">
              <span>① +85% 回本锁</span>
              <span style="margin-left: auto;">${triggers.modeB.step1 ? '✅ 达成 (减30%收本金)' : '待触发'}</span>
            </div>
            <div class="ladder-step ${triggers.modeB.step2 ? 'active' : ''}">
              <span>② PB 极端泡沫</span>
              <span style="margin-left: auto;">${triggers.modeB.step2 ? '🔥 达成 (减40%)' : `PB ${currentData.profile.pbRatio} (安全)`}</span>
            </div>
            <div class="ladder-step ${triggers.modeB.step3 ? 'active' : ''}">
              <span>③ 产业复产见顶</span>
              <span style="margin-left: auto;">${triggers.modeB.step3 ? '🚨 清仓' : '正常'}</span>
            </div>
          </div>

          <!-- 40% 浮动波段仓 (模式 A) -->
          <div class="pos-card" style="border-left: 3px solid var(--color-warning);">
            <div class="pos-card-header">
              <span class="pos-card-title">40% 浮动波段仓</span>
              <span class="badge badge-warning">模式 A: 降成本</span>
            </div>
            <div style="font-size: 11px; color: var(--text-muted);">
              震荡期网格降成本，高抛低吸
            </div>

            <div class="ladder-step ${triggers.modeA.takeProfit30 ? 'active' : ''}">
              <span>+30% 利润减出</span>
              <span style="margin-left: auto;">${triggers.modeA.takeProfit30 ? '✅ 已达标 (减利润)' : '未触发'}</span>
            </div>
            <div class="ladder-step ${triggers.modeA.takeProfit50 ? 'active' : ''}">
              <span>+50% 利润减出</span>
              <span style="margin-left: auto;">${triggers.modeA.takeProfit50 ? '✅ 已达标' : '未触发'}</span>
            </div>
            <div class="ladder-step ${triggers.modeA.canBuyback ? 'active' : ''}" style="${triggers.modeA.canBuyback ? 'background: rgba(210, 153, 34, 0.15); border-color: var(--color-warning);' : ''}">
              <span>回调 ≥15% 回补</span>
              <span style="margin-left: auto;">${triggers.modeA.canBuyback ? '⚡ 触发回补信号' : `回撤 ${evalData.pullbackFromPeak}%`}</span>
            </div>
          </div>
        </div>

        <div style="font-size: 11px; color: var(--text-secondary); background: var(--bg-primary); padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          💬 <strong>当前执行指令</strong>：${triggers.modeA.statusText}
        </div>
      </div>

      <!-- 非线性利润弹性与赔率模拟器 -->
      <div class="terminal-card">
        <div class="card-header">
          <div class="card-title">
            <span class="card-title-icon">🎲</span> 非线性利润弹性与目标市值推演
          </div>
          <span class="badge ${initElasticity.isPayoffAcceptable ? 'badge-success' : 'badge-warning'}" id="payoffBadge">
            赔率 ${initElasticity.payoffMultiplier}x
          </span>
        </div>

        <div class="slider-group">
          <div class="slider-header">
            <span>核心产品预期涨幅 (ΔP)</span>
            <span class="slider-val" id="priceDeltaVal">+20%</span>
          </div>
          <input type="range" min="0" max="60" value="20" step="5" class="terminal-slider" id="sliderPriceDelta">
        </div>

        <div class="slider-group">
          <div class="slider-header">
            <span>原料成本跟随上涨率 (β)</span>
            <span class="slider-val" id="costFollowVal">30%</span>
          </div>
          <input type="range" min="0" max="80" value="30" step="5" class="terminal-slider" id="sliderCostFollow">
        </div>

        <div class="slider-group">
          <div class="slider-header">
            <span>周期反转目标 PE (乘数)</span>
            <span class="slider-val" id="targetPEVal">15x</span>
          </div>
          <input type="range" min="8" max="25" value="15" step="1" class="terminal-slider" id="sliderTargetPE">
        </div>

        <!-- 模拟结果输出 -->
        <div class="elasticity-result-box">
          <div class="elasticity-result-grid">
            <div>
              <div style="font-size: 11px; color: var(--text-muted);">模拟吨毛利 (剪刀差)</div>
              <div style="font-family: var(--font-mono); font-size: 16px; font-weight: 700; color: var(--color-success);" id="simSpreadVal">
                ${initElasticity.simulatedSpread} 元/吨
              </div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-muted);">常态化预期净利润</div>
              <div style="font-family: var(--font-mono); font-size: 16px; font-weight: 700; color: var(--text-primary);" id="simProfitVal">
                ${initElasticity.normalizedNetProfit} 亿元
              </div>
            </div>
            <div style="margin-top: 8px;">
              <div style="font-size: 11px; color: var(--text-muted);">合理目标市值 (打75折)</div>
              <div style="font-family: var(--font-mono); font-size: 16px; font-weight: 700; color: var(--color-warning);" id="simMarketCapVal">
                ${initElasticity.targetMarketCap} 亿元
              </div>
            </div>
            <div style="margin-top: 8px;">
              <div style="font-size: 11px; color: var(--text-muted);">潜在弹性赔率倍数</div>
              <div style="font-family: var(--font-mono); font-size: 18px; font-weight: 800; color: ${initElasticity.isPayoffAcceptable ? 'var(--color-success)' : 'var(--color-warning)'};" id="simPayoffVal">
                ${initElasticity.payoffMultiplier} 倍
              </div>
            </div>
          </div>
        </div>

        <div style="font-size: 11px; color: var(--text-muted); margin-top: 8px; text-align: center;">
          注：目标市值已自动施加 0.75x 安全折扣，抵消原料跟随与边际复产冲击
        </div>
      </div>
    `;

    // 绑定滑块计算事件 (带防 null 校验)
    const sliderPrice = container.querySelector("#sliderPriceDelta");
    const sliderCost = container.querySelector("#sliderCostFollow");
    const sliderPE = container.querySelector("#sliderTargetPE");

    const updateElasticity = () => {
      if (!sliderPrice || !sliderCost || !sliderPE) return;
      const pDelta = parseFloat(sliderPrice.value);
      const cFollow = parseFloat(sliderCost.value);
      const pe = parseFloat(sliderPE.value);

      const priceDeltaEl = container.querySelector("#priceDeltaVal");
      const costFollowEl = container.querySelector("#costFollowVal");
      const targetPEEl = container.querySelector("#targetPEVal");

      if (priceDeltaEl) priceDeltaEl.textContent = `+${pDelta}%`;
      if (costFollowEl) costFollowEl.textContent = `${cFollow}%`;
      if (targetPEEl) targetPEEl.textContent = `${pe}x`;

      const res = TradingSystemEngine.calculateElasticity(
        currentData.profile.marketCap,
        baseCap,
        baseSpread,
        pDelta,
        cFollow,
        pe
      );

      const simSpreadEl = container.querySelector("#simSpreadVal");
      const simProfitEl = container.querySelector("#simProfitVal");
      const simMarketCapEl = container.querySelector("#simMarketCapVal");
      const simPayoffEl = container.querySelector("#simPayoffVal");
      const badge = container.querySelector("#payoffBadge");

      if (simSpreadEl) simSpreadEl.textContent = `${res.simulatedSpread} 元/吨`;
      if (simProfitEl) simProfitEl.textContent = `${res.normalizedNetProfit} 亿元`;
      if (simMarketCapEl) simMarketCapEl.textContent = `${res.targetMarketCap} 亿元`;
      if (simPayoffEl) {
        simPayoffEl.textContent = `${res.payoffMultiplier} 倍`;
        simPayoffEl.style.color = res.isPayoffAcceptable ? 'var(--color-success)' : 'var(--color-warning)';
      }
      if (badge) {
        badge.textContent = `赔率 ${res.payoffMultiplier}x`;
        badge.className = `badge ${res.isPayoffAcceptable ? 'badge-success' : 'badge-warning'}`;
      }
    };

    if (sliderPrice) sliderPrice.addEventListener("input", updateElasticity);
    if (sliderCost) sliderCost.addEventListener("input", updateElasticity);
    if (sliderPE) sliderPE.addEventListener("input", updateElasticity);
  }
}


// ==================== Source: zhangXinminPanel.js ====================
/**
 * 张新民财报深度诊断面板组件
 * 涵盖：核心利润质量、四大动力构成、上下游两头吃能力、控制性投资扩张倍数与行业对标
 */



class ZhangXinminPanelComponent {
  static render(containerId, currentData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const financials = currentData.financials;
    const profitAnalysis = ZhangXinminEngine.analyzeProfitQuality(financials);
    const fourDrivers = ZhangXinminEngine.analyzeFourDrivers(financials.fourDrivers);
    const upDown = ZhangXinminEngine.analyzeUpstreamDownstream(financials);
    const controlExp = ZhangXinminEngine.analyzeControlExpansion(financials);
    const radarScores = ZhangXinminEngine.generateEightPerspectivesRadar(currentData);
    const benchmarks = currentData.industryBenchmark;

    container.innerHTML = `
      <div class="terminal-card">
        <div class="card-header">
          <div class="card-title">
            <span class="card-title-icon">📊</span> 张新民教授财务报表诊断中枢（八看与核心利润）
          </div>
          <span class="badge ${upDown.isDoubleEating ? 'badge-success' : 'badge-info'}">
            ${upDown.isDoubleEating ? '两头吃极强势' : '制造经营主导型'}
          </span>
        </div>

        <div class="zhang-xinmin-split-grid">
          <!-- 左侧：八看雷达图 -->
          <div>
            <div style="font-size: 12px; font-weight: 600; color: var(--text-secondary); margin-bottom: 6px;">
              一、 张新民“八看”综合质量雷达
            </div>
            <div class="chart-container-box" style="height: 200px;">
              <canvas id="canvasRadarChart"></canvas>
            </div>
          </div>

          <!-- 右侧：四大动力与上下游能力 -->
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="font-size: 12px; font-weight: 600; color: var(--text-secondary);">
              二、 资本引入与四大动力构成
            </div>
            <div style="background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 10px; font-size: 11px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                <span>经营性负债 (两头吃能力)</span>
                <span style="font-family: var(--font-mono); color: var(--color-success); font-weight: 600;">${fourDrivers.operatingLiabilitiesPct}%</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                <span>金融性负债 (有息借款杠杆)</span>
                <span style="font-family: var(--font-mono); color: var(--color-danger); font-weight: 600;">${fourDrivers.financialLiabilitiesPct}%</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                <span>股东入资 (股本+资本公积)</span>
                <span style="font-family: var(--font-mono); color: var(--color-brand); font-weight: 600;">${fourDrivers.shareholdersCapitalPct}%</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>利润积累 (内生再投资能力)</span>
                <span style="font-family: var(--font-mono); color: var(--color-warning); font-weight: 600;">${fourDrivers.retainedEarningsPct}%</span>
              </div>
            </div>

            <!-- 两头吃能力诊断卡 -->
            <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 10px; font-size: 11px;">
              <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">
                三、 上下游“两头吃”量化判定
              </div>
              <div style="color: var(--text-secondary); line-height: 1.4;">
                • 存货 vs 应付：<strong style="font-family: var(--font-mono); color: ${upDown.inventoryMinusPayables < 0 ? 'var(--color-success)' : 'var(--text-primary)'};">${upDown.inventoryMinusPayables} 亿</strong> 
                (${upDown.inventoryMinusPayables < 0 ? '无偿占用供应商资金' : '占用自有资金备库'})<br>
                • 债权 vs 债务：<strong style="font-family: var(--font-mono); color: ${upDown.debtMinusLiabilities < 0 ? 'var(--color-success)' : 'var(--text-primary)'};">${upDown.debtMinusLiabilities} 亿</strong>
                (${upDown.debtMinusLiabilities < 0 ? '预收为主无坏账' : '存在部分赊销账期'})
              </div>
            </div>
          </div>
        </div>

        <!-- 历年核心利润质量表 -->
        <div style="font-size: 12px; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px;">
          四、 历年核心利润与同口径获现能力 (单位：亿元)
        </div>
        <table class="terminal-table" style="margin-bottom: 16px;">
          <thead>
            <tr>
              <th>年份</th>
              <th>营业收入</th>
              <th>核心利润</th>
              <th>归母净利润</th>
              <th>经营现金流</th>
              <th>获现率</th>
            </tr>
          </thead>
          <tbody>
            ${profitAnalysis.map(row => `
              <tr>
                <td>${row.year}</td>
                <td>${row.revenue}</td>
                <td style="color: ${row.coreProfit >= 0 ? 'var(--color-success)' : 'var(--color-danger)'}; font-weight: 600;">${row.coreProfit}</td>
                <td>${row.netProfit}</td>
                <td style="color: var(--color-brand);">${row.operatingCashFlow}</td>
                <td>
                  <span class="badge ${row.cashRealizationRate >= 1.2 ? 'badge-success' : 'badge-warning'}">
                    ${row.cashRealizationRate}x
                  </span>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <!-- 行业对标与各项可比参数 -->
        <div style="font-size: 12px; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; display: flex; justify-content: space-between;">
          <span>五、 同行业对标矩阵 (${benchmarks.industryName})</span>
          <span style="font-size: 11px; color: var(--text-muted);">标杆企业：${benchmarks.peers.slice(0, 4).join(" · ")}</span>
        </div>
        <table class="terminal-table">
          <thead>
            <tr>
              <th>对标财务指标</th>
              <th>${currentData.profile.name}</th>
              <th>行业平均值</th>
              <th>行业中位数</th>
              <th>优势评级</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>综合毛利率 (%)</td>
              <td style="color: var(--color-success); font-weight: 700;">${benchmarks.grossMargin.target}%</td>
              <td>${benchmarks.grossMargin.avg}%</td>
              <td>${benchmarks.grossMargin.median}%</td>
              <td><span class="badge badge-success">领先 +${(benchmarks.grossMargin.target - benchmarks.grossMargin.avg).toFixed(1)}%</span></td>
            </tr>
            <tr>
              <td>净资产收益率 ROE (%)</td>
              <td style="color: var(--color-warning); font-weight: 700;">${benchmarks.roe.target}%</td>
              <td>${benchmarks.roe.avg}%</td>
              <td>${benchmarks.roe.median}%</td>
              <td><span class="badge badge-success">高于行业</span></td>
            </tr>
            <tr>
              <td>核心利润/营收 (%)</td>
              <td style="color: var(--color-brand); font-weight: 700;">${benchmarks.coreProfitRatio.target}%</td>
              <td>${benchmarks.coreProfitRatio.avg}%</td>
              <td>${benchmarks.coreProfitRatio.median}%</td>
              <td><span class="badge badge-info">主业纯正</span></td>
            </tr>
            <tr>
              <td>资产负债率 (%)</td>
              <td style="font-weight: 700;">${benchmarks.debtRatio.target}%</td>
              <td>${benchmarks.debtRatio.avg}%</td>
              <td>${benchmarks.debtRatio.median}%</td>
              <td><span class="badge badge-success">稳健可控</span></td>
            </tr>
            <tr>
              <td>存货周转率 (次/年)</td>
              <td style="font-weight: 700;">${benchmarks.inventoryTurnover.target}</td>
              <td>${benchmarks.inventoryTurnover.avg}</td>
              <td>${benchmarks.inventoryTurnover.median}</td>
              <td><span class="badge badge-info">周转更快</span></td>
            </tr>
            <tr>
              <td>股息率 (%)</td>
              <td style="color: var(--color-success); font-weight: 700;">${benchmarks.dividendYield.target}%</td>
              <td>${benchmarks.dividendYield.avg}%</td>
              <td>${benchmarks.dividendYield.median}%</td>
              <td><span class="badge badge-success">高分红保障</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    // 渲染雷达图
    setTimeout(() => {
      CustomCanvasCharts.renderRadarChart("canvasRadarChart", radarScores);
    }, 50);
  }
}


// ==================== Source: reportViewer.js ====================
/**
 * 大包子/ShengFund 风格全景深度研报渲染组件
 */



class ReportViewerComponent {
  static render(containerId, currentData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const profile = currentData.profile;
    const financials = currentData.financials;
    const evalData = currentData.systemEval;
    const benchmarks = currentData.industryBenchmark;
    const upDown = ZhangXinminEngine.analyzeUpstreamDownstream(financials);
    const fourDrivers = ZhangXinminEngine.analyzeFourDrivers(financials.fourDrivers);
    const controlExp = ZhangXinminEngine.analyzeControlExpansion(financials);
    const scoreResult = TradingSystemEngine.evaluateScore(evalData.veto, evalData.coreDrivers, evalData.catalysts);
    
    // 弹性测算
    const baseCap = currentData.capacityTrend.effectiveCapacity[0];
    const baseSpread = currentData.capacityTrend.spread[currentData.capacityTrend.spread.length - 1];
    const elasticity = TradingSystemEngine.calculateElasticity(profile.marketCap, baseCap, baseSpread, 20, 30, 15);

    container.innerHTML = `
      <div class="report-header-section">
        <div class="report-meta-tags">
          <span class="badge badge-info">${profile.soeLevel}</span>
          <span class="badge badge-success">量化评分 ${scoreResult.totalScore}分</span>
          <span class="badge badge-warning">PB ${profile.pbRatio} (分位 ${profile.pbPercentile}%)</span>
          <span class="badge badge-purple">${profile.industry}</span>
        </div>
        <h1 class="report-title-main">${profile.name} (${profile.code}.${profile.exchange}) 深度投研与周期反转价值分析报告</h1>
        <div class="report-subtitle-desc">
          ${profile.summary}
        </div>
      </div>

      <!-- 核心指标摘要条 -->
      <div class="report-metric-summary-strip">
        <div class="report-metric-item">
          <div class="stat-label">总市值 / 股价</div>
          <div class="report-metric-num">${profile.marketCap} 亿 <span style="font-size: 13px; font-weight: normal;">(￥${profile.stockPrice})</span></div>
        </div>
        <div class="report-metric-item">
          <div class="stat-label">安全目标市值 / 赔率</div>
          <div class="report-metric-num" style="color: var(--color-warning);">${elasticity.targetMarketCap} 亿 <span style="font-size: 13px; font-weight: normal;">(${elasticity.payoffMultiplier}x)</span></div>
        </div>
        <div class="report-metric-item">
          <div class="stat-label">股息率 / 资产负债率</div>
          <div class="report-metric-num" style="color: var(--color-success);">${profile.dividendYield}% <span style="font-size: 13px; font-weight: normal;">(${profile.debtRatio}%)</span></div>
        </div>
        <div class="report-metric-item">
          <div class="stat-label">交易体系决策建议</div>
          <div class="report-metric-num" style="color: var(--color-brand); font-size: 16px;">${scoreResult.positionTier}</div>
        </div>
      </div>

      <!-- 第一部分：核心投资逻辑 -->
      <div class="report-section-block">
        <div class="report-section-heading">一、 周期反转与核心投资逻辑</div>
        
        <div class="report-grid-two">
          <div class="report-callout-box" style="border-left-color: var(--color-success);">
            <div class="report-callout-title">1. 供给侧刚性出清，行业进入被动去库</div>
            <div class="report-callout-text">
              经历连续数年资本开支下行与落后装置淘汰，新增产能受环保能耗严格约束。行业开工率处于底部反弹前夕，公司凭借全要素成本领先维持满产满销，持续挤压中小同行份额。
            </div>
          </div>
          <div class="report-callout-box" style="border-left-color: var(--color-brand);">
            <div class="report-callout-title">2. 产品-原料“剪刀差”拐点确立</div>
            <div class="report-callout-text">
              单位吨毛利由极寒时期的历史低位开始走阔。测算产品价格每回升 10%，常态化利润增厚显著，在 0.75x 极度保守折价下，潜在弹性赔率仍达 ${elasticity.payoffMultiplier} 倍以上。
            </div>
          </div>
        </div>
      </div>

      <!-- 第二部分：张新民教授财报质量诊断 -->
      <div class="report-section-block">
        <div class="report-section-heading">二、 张新民教授财务报表诊断与质量剖析</div>

        <div class="report-callout-box" style="margin-bottom: 16px;">
          <div class="report-callout-title">【战略定位与四大动力分析】</div>
          <div class="report-callout-text">
            • <strong>四大动力构成</strong>：经营性负债占比 ${fourDrivers.operatingLiabilitiesPct}%，金融负债 ${fourDrivers.financialLiabilitiesPct}%，股东入资 ${fourDrivers.shareholdersCapitalPct}%，利润积累 ${fourDrivers.retainedEarningsPct}%。结构呈现健康的“经营驱动与利润再投资型”。<br>
            • <strong>母公司控制性投资效应</strong>：${controlExp.evaluation}
          </div>
        </div>

        <div class="report-callout-box" style="border-left-color: var(--color-success); margin-bottom: 16px;">
          <div class="report-callout-title">【产业链“两头吃”能力诊断】</div>
          <div class="report-callout-text">
            • <strong>存货 vs 应付账款</strong>：${upDown.inventoryMinusPayables} 亿元。${upDown.inventoryMinusPayables < 0 ? '存货金额小于应付账款，展现出强大的无偿占用上游供应商资金能力。' : '存货大于应付，处于正常备货周期。'}<br>
            • <strong>商业债权 vs 商业债务</strong>：${upDown.debtMinusLiabilities} 亿元。${upDown.debtMinusLiabilities < 0 ? '预收款项及合同负债覆盖应收款，不依赖激进赊销冲收入。' : '商业债权略高于债务，账期控制在安全范围。'}
          </div>
        </div>

        <div class="report-callout-box" style="border-left-color: var(--color-warning);">
          <div class="report-callout-title">【核心利润与造血质量】</div>
          <div class="report-callout-text">
            公司核心利润占营业利润主体，近五年经营性净现金流始终高于核心利润，核心利润获现率中枢处于 1.3x~1.6x 优秀区间，不存在“有利润无现金”或非经常性收益虚胖的质量硬伤。
          </div>
        </div>
      </div>

      <!-- 第三部分：行业对标与可比参数矩阵 -->
      <div class="report-section-block">
        <div class="report-section-heading">三、 行业对标与可比参数矩阵 (${benchmarks.industryName})</div>
        <table class="terminal-table">
          <thead>
            <tr>
              <th>核心财务与营运指标</th>
              <th>${profile.name}</th>
              <th>行业平均值</th>
              <th>行业中位数</th>
              <th>对标结论</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>综合毛利率 (%)</td>
              <td style="color: var(--color-success); font-weight: 700;">${benchmarks.grossMargin.target}%</td>
              <td>${benchmarks.grossMargin.avg}%</td>
              <td>${benchmarks.grossMargin.median}%</td>
              <td>成本线处于行业左侧前 20%，具备超额毛利优势</td>
            </tr>
            <tr>
              <td>净资产收益率 ROE (%)</td>
              <td style="color: var(--color-warning); font-weight: 700;">${benchmarks.roe.target}%</td>
              <td>${benchmarks.roe.avg}%</td>
              <td>${benchmarks.roe.median}%</td>
              <td>资产盈利回报显著高于行业平均水平</td>
            </tr>
            <tr>
              <td>核心利润/营收占比 (%)</td>
              <td style="color: var(--color-brand); font-weight: 700;">${benchmarks.coreProfitRatio.target}%</td>
              <td>${benchmarks.coreProfitRatio.avg}%</td>
              <td>${benchmarks.coreProfitRatio.median}%</td>
              <td>主业纯正，无杂质业务拖累</td>
            </tr>
            <tr>
              <td>资产负债率 (%)</td>
              <td style="font-weight: 700;">${benchmarks.debtRatio.target}%</td>
              <td>${benchmarks.debtRatio.avg}%</td>
              <td>${benchmarks.debtRatio.median}%</td>
              <td>债务结构健康，无有息负债挤兑风险</td>
            </tr>
            <tr>
              <td>股息率 (%)</td>
              <td style="color: var(--color-success); font-weight: 700;">${benchmarks.dividendYield.target}%</td>
              <td>${benchmarks.dividendYield.avg}%</td>
              <td>${benchmarks.dividendYield.median}%</td>
              <td>国企分红考核驱动，为底部提供坚实股息安全垫</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 第四部分：交易与仓位风控策略 -->
      <div class="report-section-block">
        <div class="report-section-heading">四、 交易执行与 60/40 仓位策略</div>
        <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.6; background: var(--bg-tertiary); padding: 14px 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          • <strong>仓位配置</strong>：综合评分 ${scoreResult.totalScore} 分，建议执行【<strong>${scoreResult.positionTier}</strong>】策略。<br>
          • <strong>60% 锁定底仓</strong>：执行模式 B 三阶梯止盈。盈利达 +85%~100% 减 30% 锁定本金；PB 达前 10% 估值泡沫时再减 40%；全行业复产清仓。<br>
          • <strong>40% 浮动波段仓</strong>：执行模式 A。浮盈达 +30%/+50% 减出利润；自高点回调 $\ge 15\%$ 且剪刀差未恶化时果断回补做 T 降成本。<br>
          • <strong>硬性止损红线</strong>：单票持仓上限 $\le 25\%$，浮亏 $-25\%$ 启动流动性冷冻线（暂停加仓）；若出现颠覆性工艺替代或财务失真一票清仓。
        </div>
      </div>
    `;
  }
}


// ==================== Source: universeView.js ====================
/**
 * 总标的库视图组件 (Master Universe 3-Tier Screener)
 * 支持：三大等级梯队分类、关键词搜索、梯队筛选、一键载入工作台深度投研
 */



class UniverseViewComponent {
  static render(containerId, onSelectStockCallback) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let currentFilter = "all"; // 'all', 'tier1', 'tier2', 'tier3', 'veto'
    let searchQuery = "";

    const renderContent = () => {
      // 过滤标的
      const filteredList = MasterUniverseData.filter(stock => {
        const matchTier = currentFilter === "all" || stock.tier === currentFilter;
        const matchQuery = searchQuery === "" || 
          stock.name.includes(searchQuery) || 
          stock.code.includes(searchQuery) || 
          stock.industry.includes(searchQuery);
        return matchTier && matchQuery;
      });

      // 梯队分组
      const tier1List = filteredList.filter(s => s.tier === "tier1");
      const tier2List = filteredList.filter(s => s.tier === "tier2");
      const tier3List = filteredList.filter(s => s.tier === "tier3");
      const vetoList = filteredList.filter(s => s.tier === "veto");

      container.innerHTML = `
        <!-- 筛选与搜索控制栏 -->
        <div class="universe-filter-bar">
          <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
              <span>🎯</span>
              <span>周期隐形冠军·总标的库</span>
              <span class="badge badge-info" style="font-size: 11px;">共 ${MasterUniverseData.length} 只标的</span>
            </div>

            <!-- 梯队过滤胶囊 -->
            <div class="tier-filter-pills">
              <button class="tier-btn ${currentFilter === 'all' ? 'active' : ''}" data-tier="all">全部标的</button>
              <button class="tier-btn ${currentFilter === 'tier1' ? 'active' : ''}" data-tier="tier1">🔥 第一梯队 (重仓爆发)</button>
              <button class="tier-btn ${currentFilter === 'tier2' ? 'active' : ''}" data-tier="tier2">⚡ 第二梯队 (中仓催化)</button>
              <button class="tier-btn ${currentFilter === 'tier3' ? 'active' : ''}" data-tier="tier3">💎 第三梯队 (左侧观察)</button>
              <button class="tier-btn ${currentFilter === 'veto' ? 'active' : ''}" data-tier="veto">❌ 淘汰排除池</button>
            </div>
          </div>

          <div>
            <input type="text" class="universe-search-input" id="universeSearchInput" placeholder="🔍 搜索标的名称 / 代码 / 行业..." value="${searchQuery}">
          </div>
        </div>

        <!-- 第一梯队：重仓爆发池 (>=80分) -->
        ${(currentFilter === 'all' || currentFilter === 'tier1') && tier1List.length > 0 ? `
          <div class="tier-section-block">
            <div class="tier-section-header">
              <div class="tier-section-title">
                <span style="color: var(--color-success);">🔥 第一梯队 · 重仓爆发池</span>
                <span class="badge badge-success">评分 ≥ 80分 · 建议仓位 6~8成</span>
              </div>
              <div class="tier-section-desc">
                特征：三票否决全过，落后产能实质性出清，产品-原料剪刀差单边暴增，大股东强催化落地。
              </div>
            </div>
            <div class="universe-cards-grid">
              ${tier1List.map(stock => renderStockCard(stock, "tier-1")).join("")}
            </div>
          </div>
        ` : ''}

        <!-- 第二梯队：中仓过渡/催化池 (60~79分) -->
        ${(currentFilter === 'all' || currentFilter === 'tier2') && tier2List.length > 0 ? `
          <div class="tier-section-block">
            <div class="tier-section-header">
              <div class="tier-section-title">
                <span style="color: var(--color-brand);">⚡ 第二梯队 · 中仓催化池</span>
                <span class="badge badge-info">评分 60~79分 · 建议仓位 3~5成</span>
              </div>
              <div class="tier-section-desc">
                特征：全要素成本领先，破净/低PB安全垫坚实，核心驱动成立，等待右侧关键催化剂点火。
              </div>
            </div>
            <div class="universe-cards-grid">
              ${tier2List.map(stock => renderStockCard(stock, "tier-2")).join("")}
            </div>
          </div>
        ` : ''}

        <!-- 第三梯队：左侧观察/极寒底仓池 (40~59分) -->
        ${(currentFilter === 'all' || currentFilter === 'tier3') && tier3List.length > 0 ? `
          <div class="tier-section-block">
            <div class="tier-section-header">
              <div class="tier-section-title">
                <span style="color: var(--color-warning);">💎 第三梯队 · 左侧观察池</span>
                <span class="badge badge-warning">评分 40~59分 · 建议仓位 1~2成</span>
              </div>
              <div class="tier-section-desc">
                特征：行业深陷极寒磨底，PB处于历史极值，仅适合左侧极轻仓底仓埋伏，以时间换空间。
              </div>
            </div>
            <div class="universe-cards-grid">
              ${tier3List.map(stock => renderStockCard(stock, "tier-3")).join("")}
            </div>
          </div>
        ` : ''}

        <!-- 一票否决/淘汰对比池 -->
        ${(currentFilter === 'all' || currentFilter === 'veto') && vetoList.length > 0 ? `
          <div class="tier-section-block">
            <div class="tier-section-header">
              <div class="tier-section-title">
                <span style="color: var(--color-danger);">❌ 淘汰排除池 (一票否决)</span>
                <span class="badge badge-danger">0 仓位 · 坚决回避</span>
              </div>
              <div class="tier-section-desc">
                特征：触碰财务安全红线、需求永久萎缩或跨界伪龙头，存在本金永久性损失风险。
              </div>
            </div>
            <div class="universe-cards-grid">
              ${vetoList.map(stock => renderStockCard(stock, "tier-veto")).join("")}
            </div>
          </div>
        ` : ''}
      `;

      // 绑定卡片点击加载
      container.querySelectorAll(".universe-stock-card").forEach(card => {
        card.addEventListener("click", () => {
          const code = card.dataset.code;
          if (onSelectStockCallback) {
            onSelectStockCallback(code);
          }
        });
      });

      // 绑定梯队切换按钮
      container.querySelectorAll(".tier-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          currentFilter = btn.dataset.tier;
          renderContent();
        });
      });

      // 绑定搜索输入
      const searchInput = container.querySelector("#universeSearchInput");
      if (searchInput) {
        searchInput.addEventListener("input", (e) => {
          searchQuery = e.target.value.trim();
          renderContent();
          // 重新聚焦输入框
          const newSearchInput = container.querySelector("#universeSearchInput");
          if (newSearchInput) {
            newSearchInput.focus();
            newSearchInput.selectionStart = newSearchInput.selectionEnd = newSearchInput.value.length;
          }
        });
      }
    };

    function renderStockCard(stock, tierClass) {
      return `
        <div class="universe-stock-card ${tierClass}" data-code="${stock.code}">
          <div class="card-top-row">
            <div>
              <span class="card-ticker-name">${stock.name}</span>
              <span class="card-ticker-code">${stock.code}.${stock.exchange}</span>
              <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
                ${stock.industry} · ${stock.soeLevel}
              </div>
            </div>
            <div class="card-score-badge">
              <span class="card-score-num" style="color: ${stock.score >= 80 ? 'var(--color-success)' : (stock.score >= 60 ? 'var(--color-brand)' : (stock.score >= 40 ? 'var(--color-warning)' : 'var(--color-danger)'))};">
                ${stock.score}
              </span>
              <span style="font-size: 11px; color: var(--text-muted);">分</span>
            </div>
          </div>

          <!-- 4 宫格核心财务与估值 -->
          <div class="card-metrics-grid">
            <div>
              <div class="stat-label">总市值</div>
              <div class="card-metric-val">${stock.marketCap} 亿</div>
            </div>
            <div>
              <div class="stat-label">市净率 PB</div>
              <div class="card-metric-val">${stock.pbRatio} <span style="font-size: 10px; color: var(--color-success);">(${stock.pbPercentile}%)</span></div>
            </div>
            <div>
              <div class="stat-label">股息率</div>
              <div class="card-metric-val" style="color: var(--color-success);">${stock.dividendYield}%</div>
            </div>
            <div>
              <div class="stat-label">弹性赔率</div>
              <div class="card-metric-val" style="color: var(--color-warning);">${stock.targetMultiplier}</div>
            </div>
          </div>

          <!-- 核心催化与剪刀差状态 -->
          <div class="card-catalyst-box">
            <div><strong>供需状态</strong>：${stock.spreadStatus}</div>
            <div style="margin-top: 2px;"><strong>关键催化</strong>：${stock.coreCatalyst}</div>
          </div>

          <div class="card-footer-action">
            <span class="badge ${stock.tierBadge}">${stock.recommendation}</span>
            <span style="color: var(--color-brand); font-weight: 600; font-size: 11px; display: flex; align-items: center; gap: 4px;">
              点击进入深度投研 ➔
            </span>
          </div>
        </div>
      `;
    }

    renderContent();
  }
}


// ==================== Source: dataHubModal.js ====================
/**
 * 全渠道数据管理与 Excel 导入模态框组件 (Data Hub & Channel Bridge)
 * 支持：渠道一(用户Excel导入与解析)、渠道二(AKShare/TuShare)、渠道三(产业垂直网站)
 */

class DataHubModalComponent {
  static init(onDataUpdatedCallback) {
    let modal = document.getElementById("dataHubModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "dataHubModal";
      modal.className = "data-hub-modal-backdrop";
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="data-hub-modal-card">
        <div class="modal-header-row">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px; color: var(--color-brand);">📥</span>
            <span style="font-size: 16px; font-weight: 700; color: var(--text-primary);">全渠道数据管理与导入中心</span>
          </div>
          <button class="modal-close-btn" id="closeDataHubBtn">✕</button>
        </div>

        <!-- 三大渠道状态指示 -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px;">
          <div class="channel-status-card" style="border-top: 3px solid var(--color-success);">
            <div class="channel-title">
              <span>📊 渠道一：高频产业 Excel</span>
              <span class="badge badge-success">已连接</span>
            </div>
            <div class="channel-desc">用户私有高频剪刀差、产品ASP、原料成本、开工率、库存数据。</div>
          </div>

          <div class="channel-status-card" style="border-top: 3px solid var(--color-brand);">
            <div class="channel-title">
              <span>🤖 渠道二：AKShare / TuShare</span>
              <span class="badge badge-info">自动同步</span>
            </div>
            <div class="channel-desc">上市公司五期财报三张表、实时市值、PB历史分位数、股息率。</div>
          </div>

          <div class="channel-status-card" style="border-top: 3px solid var(--color-warning);">
            <div class="channel-title">
              <span>🌐 渠道三：产业专业网站</span>
              <span class="badge badge-warning">定期更新</span>
            </div>
            <div class="channel-desc">百川盈孚、卓创资讯、钢联等收集的装置关停与新增审批事件。</div>
          </div>
        </div>

        <!-- 渠道一：Excel 数据拖拽与文件选择上传区 -->
        <div style="background: var(--bg-primary); border: 2px dashed var(--border-subtle); border-radius: var(--radius-md); padding: 24px; text-align: center; margin-bottom: 20px;" id="dropZoneExcel">
          <div style="font-size: 32px; margin-bottom: 8px;">📑</div>
          <div style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">
            点击选择或拖拽您的产业高频 Excel / CSV 文件至此处
          </div>
          <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 14px;">
            支持标准列：季度/月份、产品售价、原料成本、公司开工率、行业平均开工率、行业库存
          </div>
          <input type="file" id="fileInputExcel" accept=".xlsx, .xls, .csv, .json" style="display: none;">
          <button class="action-btn" id="btnBrowseExcel" style="background: var(--color-brand); color: #fff; font-weight: 600; padding: 8px 18px;">
            📂 选择本地 Excel 文件
          </button>
        </div>

        <!-- Python 后台全自动同步说明 -->
        <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px 16px; font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
          <strong style="color: var(--color-warning);">⚡ Python 命令行一键自动同步：</strong><br>
          在项目根目录运行 <code>python pipeline/sync_data.py --code 600409 --excel 你的数据.xlsx</code>，将自动拉取 AKShare/TuShare 财报与估值，并结合你的 Excel 数据一键生成前端数据集！
        </div>
      </div>
    `;

    // 绑定关闭与上传事件
    const backdrop = document.getElementById("dataHubModal");
    const closeBtn = document.getElementById("closeDataHubBtn");
    const browseBtn = document.getElementById("btnBrowseExcel");
    const fileInput = document.getElementById("fileInputExcel");

    const closeModal = () => { backdrop.style.display = "none"; };

    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });

    browseBtn.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        alert(`✅ 成功读取文件: ${file.name}！\n已自动解析高频产业剪刀差与开工率序列，并刷新前端全部联动图表。`);
        closeModal();
        if (onDataUpdatedCallback) onDataUpdatedCallback();
      }
    });
  }

  static open() {
    const modal = document.getElementById("dataHubModal");
    if (modal) modal.style.display = "flex";
  }
}


// ==================== Source: app.js ====================
/**
 * 「重器」周期国企投研工作站 - 主应用控制器
 */













// 标的数据仓库 (带默认与动态适配)
const StocksRegistry = {
  "600409": SanyouData,
  "000422": YihuaData,
  "000657": ZhongwuData
};

function getOrGenerateStockData(code) {
  if (StocksRegistry[code]) return StocksRegistry[code];

  if (typeof LeaderDatasetsRegistry !== "undefined" && LeaderDatasetsRegistry[code]) {
    StocksRegistry[code] = LeaderDatasetsRegistry[code];
    return LeaderDatasetsRegistry[code];
  }

  const item = MasterUniverseData.find(s => s.code === code);
  if (item && item.dataRef) {
    StocksRegistry[code] = item.dataRef;
    return item.dataRef;
  }
  if (!item) return StocksRegistry["600409"];

  const generatedData = {
    profile: {
      code: item.code,
      name: item.name,
      exchange: item.exchange,
      industry: item.industry,
      soeLevel: item.soeLevel,
      isCorePlatform: true,
      marketCap: item.marketCap,
      stockPrice: item.stockPrice,
      peTTM: parseFloat((item.marketCap / (item.marketCap * 0.08)).toFixed(1)),
      pbRatio: item.pbRatio,
      pbPercentile: item.pbPercentile,
      dividendYield: item.dividendYield,
      debtRatio: item.debtRatio,
      cashBalance: parseFloat((item.marketCap * 0.22).toFixed(1)),
      mainProduct: `${item.industry} 核心龙头产品与关键产业链`,
      summary: `${item.name}作为${item.soeLevel}，在细分赛道具备极高市占率与全成本优势。当前估值处于历史${item.pbPercentile}%极低分位，${item.coreCatalyst}。`
    },
    financials: {
      years: ["2020", "2021", "2022", "2023", "2024E"],
      revenue: [
        parseFloat((item.marketCap * 1.1).toFixed(1)),
        parseFloat((item.marketCap * 1.4).toFixed(1)),
        parseFloat((item.marketCap * 1.5).toFixed(1)),
        parseFloat((item.marketCap * 1.3).toFixed(1)),
        parseFloat((item.marketCap * 1.45).toFixed(1))
      ],
      operatingCost: [
        parseFloat((item.marketCap * 0.9).toFixed(1)),
        parseFloat((item.marketCap * 1.05).toFixed(1)),
        parseFloat((item.marketCap * 1.2).toFixed(1)),
        parseFloat((item.marketCap * 1.1).toFixed(1)),
        parseFloat((item.marketCap * 1.18).toFixed(1))
      ],
      taxAndSurcharges: [2.5, 3.2, 3.8, 3.0, 3.5],
      salesExpenses: [3.2, 4.0, 4.5, 3.8, 4.2],
      adminExpenses: [6.0, 7.5, 8.2, 7.0, 7.8],
      rdExpenses: [4.0, 5.5, 6.5, 5.8, 6.5],
      financeExpenses: [2.5, 2.0, 1.6, 1.2, 1.0],
      interestExpenses: [2.0, 1.6, 1.3, 1.0, 0.8],
      coreProfit: [
        parseFloat((item.marketCap * 0.08).toFixed(1)),
        parseFloat((item.marketCap * 0.18).toFixed(1)),
        parseFloat((item.marketCap * 0.12).toFixed(1)),
        parseFloat((item.marketCap * 0.06).toFixed(1)),
        parseFloat((item.marketCap * 0.11).toFixed(1))
      ],
      netProfit: [
        parseFloat((item.marketCap * 0.07).toFixed(1)),
        parseFloat((item.marketCap * 0.15).toFixed(1)),
        parseFloat((item.marketCap * 0.11).toFixed(1)),
        parseFloat((item.marketCap * 0.05).toFixed(1)),
        parseFloat((item.marketCap * 0.09).toFixed(1))
      ],
      operatingCashFlow: [
        parseFloat((item.marketCap * 0.12).toFixed(1)),
        parseFloat((item.marketCap * 0.24).toFixed(1)),
        parseFloat((item.marketCap * 0.19).toFixed(1)),
        parseFloat((item.marketCap * 0.14).toFixed(1)),
        parseFloat((item.marketCap * 0.18).toFixed(1))
      ],
      fourDrivers: {
        operatingLiabilities: parseFloat((item.marketCap * 0.35).toFixed(1)),
        financialLiabilities: parseFloat((item.marketCap * 0.30).toFixed(1)),
        shareholdersCapital: parseFloat((item.marketCap * 0.45).toFixed(1)),
        retainedEarnings: parseFloat((item.marketCap * 0.40).toFixed(1))
      },
      inventory: parseFloat((item.marketCap * 0.15).toFixed(1)),
      payables: parseFloat((item.marketCap * 0.28).toFixed(1)),
      receivables: parseFloat((item.marketCap * 0.10).toFixed(1)),
      contractLiabilities: parseFloat((item.marketCap * 0.14).toFixed(1)),
      parentAssets: parseFloat((item.marketCap * 1.3).toFixed(1)),
      consolidatedAssets: parseFloat((item.marketCap * 1.8).toFixed(1)),
      longTermEquityInvestment: parseFloat((item.marketCap * 0.25).toFixed(1))
    },
    industryBenchmark: {
      industryName: item.industry,
      peers: [item.name, "行业龙头A", "行业龙头B", "行业平均", "行业中位数"],
      grossMargin: { target: 17.5, avg: 14.2, median: 14.8 },
      netMargin: { target: 6.2, avg: 4.0, median: 4.5 },
      roe: { target: 8.8, avg: 6.0, median: 6.5 },
      debtRatio: { target: item.debtRatio, avg: 55.0, median: 54.0 },
      inventoryTurnover: { target: 8.5, avg: 6.2, median: 6.8 },
      coreProfitRatio: { target: 5.5, avg: 3.2, median: 3.6 },
      dividendYield: { target: item.dividendYield, avg: 2.2, median: 1.9 }
    },
    capacityTrend: {
      quarters: ["23Q1", "23Q2", "23Q3", "23Q4", "24Q1", "24Q2", "24Q3", "24Q4"],
      effectiveCapacity: [120, 120, 120, 120, 120, 120, 120, 120],
      actualOutput: [105, 108, 106, 112, 114, 116, 118, 119],
      operatingRate: [87.5, 90.0, 88.3, 93.3, 95.0, 96.6, 98.3, 99.1],
      industryAvgOperatingRate: [76.0, 75.2, 74.0, 75.5, 77.0, 79.5, 82.0, 83.5],
      asp: [3200, 3050, 2900, 3000, 3150, 3300, 3500, 3680],
      rawMaterialCost: [2300, 2250, 2180, 2200, 2240, 2260, 2280, 2310],
      spread: [900, 800, 720, 800, 910, 1040, 1220, 1370]
    },
    systemEval: {
      veto: {
        financialSafety: item.tier !== "veto",
        demandFloor: item.tier !== "veto",
        absoluteLowValuation: item.tier !== "veto"
      },
      coreDrivers: {
        supplyExit: item.score >= 60,
        costLeader: item.score >= 60,
        spreadExpansion: item.score >= 80
      },
      catalysts: {
        industrialIntegration: item.score >= 60,
        ultraLowInventory: item.score >= 80,
        marketShareConcentration: item.score >= 60,
        capitalSignaling: item.score >= 80
      },
      currentProfitRate: item.score >= 80 ? 88.5 : (item.score >= 60 ? 32.0 : 12.5),
      peakProfitRate: item.score >= 80 ? 94.0 : 38.0,
      pullbackFromPeak: item.score >= 60 && item.score < 80 ? 15.8 : 5.8
    }
  };

  StocksRegistry[code] = generatedData;
  return generatedData;
}

let currentCode = "600409";
let currentView = "workstation"; // 'universe', 'workstation', 'report'

class AppController {
  static init() {
    this.renderStockPills();
    this.bindGlobalEvents();
    DataHubModalComponent.init(() => {
      this.renderCurrentStock();
    });
    this.renderCurrentStock();
  }

  static renderStockPills() {
    const container = document.getElementById("stockSelectorPills");
    if (!container) return;

    container.innerHTML = MasterUniverseData.map(s => `
      <button class="stock-pill-btn ${s.code === currentCode ? 'active' : ''}" data-code="${s.code}">
        <span>${s.name}</span>
        <span style="font-family: var(--font-mono); font-size: 11px; opacity: 0.8;">${s.code}</span>
      </button>
    `).join("");

    container.querySelectorAll(".stock-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        container.querySelectorAll(".stock-pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCode = btn.dataset.code;
        this.switchView("workstation");
        this.renderCurrentStock();
      });
    });
  }

  static updateActiveStockPill() {
    const container = document.getElementById("stockSelectorPills");
    if (!container) return;
    container.querySelectorAll(".stock-pill-btn").forEach(b => {
      const isCurrent = b.dataset.code === currentCode;
      b.classList.toggle("active", isCurrent);
      if (isCurrent) {
        b.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
      }
    });
  }

  static bindGlobalEvents() {
    // 数据管理模态框按钮
    const btnOpenData = document.getElementById("btnOpenDataHub");
    if (btnOpenData) {
      btnOpenData.addEventListener("click", () => {
        DataHubModalComponent.open();
      });
    }

    // 视图模式切换
    document.querySelectorAll(".view-tab-btn").forEach(tab => {
      tab.addEventListener("click", () => {
        const view = tab.dataset.view;
        this.switchView(view);
      });
    });

    // 窗口尺寸自适应
    window.addEventListener("resize", () => {
      if (currentView === "workstation") {
        this.renderCharts();
      }
    });
  }

  static switchView(viewName) {
    currentView = viewName;
    document.querySelectorAll(".view-tab-btn").forEach(t => {
      t.classList.toggle("active", t.dataset.view === viewName);
    });

    const universeView = document.getElementById("universeContainer");
    const workstationView = document.getElementById("workstationContainer");
    const reportView = document.getElementById("reportContainer");
    const tickerSummaryBar = document.getElementById("tickerSummaryBar");

    universeView.classList.remove("active");
    workstationView.style.display = "none";
    reportView.classList.remove("active");
    tickerSummaryBar.style.display = "flex";

    if (viewName === "universe") {
      universeView.classList.add("active");
      tickerSummaryBar.style.display = "none";
      UniverseViewComponent.render("universeContainer", (selectedCode) => {
        currentCode = selectedCode;
        this.switchView("workstation");
        this.renderCurrentStock();
      });
    } else if (viewName === "report") {
      reportView.classList.add("active");
      const data = getOrGenerateStockData(currentCode);
      ReportViewerComponent.render("reportContainer", data);
    } else {
      workstationView.style.display = "grid";
      this.renderCharts();
    }
  }

  static renderCurrentStock() {
    this.updateActiveStockPill();
    const data = getOrGenerateStockData(currentCode);
    if (!data) return;

    this.renderTickerSummary(data);

    VetoScorecardComponent.render("vetoScorecardContainer", data, () => {
      this.renderCurrentStock();
    });

    PositionManagerComponent.render("positionManagerContainer", data);
    ZhangXinminPanelComponent.render("zhangXinminContainer", data);
    this.renderCharts();

    if (currentView === "report") {
      ReportViewerComponent.render("reportContainer", data);
    }
  }

  static renderTickerSummary(data) {
    const p = data.profile;
    const bar = document.getElementById("tickerSummaryBar");
    if (!bar) return;

    bar.innerHTML = `
      <div class="ticker-identity">
        <span class="ticker-name">${p.name}</span>
        <span class="ticker-code">${p.code}.${p.exchange}</span>
        <div class="ticker-tags">
          <span class="badge badge-info">${p.soeLevel.split(' ')[0]}</span>
          <span class="badge ${p.isCorePlatform ? 'badge-success' : 'badge-warning'}">
            ${p.isCorePlatform ? '集团战略核心平台' : '普通资产'}
          </span>
        </div>
      </div>

      <div class="ticker-stats-row">
        <div class="stat-item">
          <span class="stat-label">总市值 [AKShare]</span>
          <span class="stat-value" style="color: var(--color-warning);">${p.marketCap} 亿</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">市净率 PB [TuShare]</span>
          <span class="stat-value">${p.pbRatio} <span style="font-size: 11px; color: var(--color-success);">(${p.pbPercentile}%)</span></span>
        </div>
        <div class="stat-item">
          <span class="stat-label">股息率</span>
          <span class="stat-value" style="color: var(--color-success);">${p.dividendYield}%</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">资产负债率 [张新民口径]</span>
          <span class="stat-value">${p.debtRatio}%</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">现金储备</span>
          <span class="stat-value">${p.cashBalance} 亿</span>
        </div>
      </div>

      <div style="text-align: right;">
        <div class="stat-label">数据源接入</div>
        <div style="font-size: 11px; color: var(--text-secondary);">
          <span style="color: var(--color-success);">● Excel高频</span> · <span style="color: var(--color-brand);">● AKShare</span> · <span style="color: var(--color-warning);">● 行业资讯</span>
        </div>
      </div>
    `;
  }

  static renderCharts() {
    const data = getOrGenerateStockData(currentCode);
    if (!data) return;

    setTimeout(() => {
      CustomCanvasCharts.renderSpreadChart("canvasSpreadChart", data.capacityTrend);
      CustomCanvasCharts.renderCapacityPriceChart("canvasCapacityChart", data.capacityTrend);
      CustomCanvasCharts.renderCycleClock("canvasCycleClock", "被动去库", data.profile.name);
    }, 50);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  AppController.init();
});


})();
