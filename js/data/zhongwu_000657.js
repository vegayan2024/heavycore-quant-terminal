/**
 * 标的数据：中钨高新 (000657.SZ)
 * 所属行业：有色金属与新材料 (数控刀片/硬质合金/钨产业链) | 国企背景：中国五矿集团控股重点央企
 */
export const ZhongwuData = {
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
