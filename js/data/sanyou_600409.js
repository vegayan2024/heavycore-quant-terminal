/**
 * 标的数据集：三友化工 (600409.SH)
 * 来源：兴业证券化工数据库 (07-03 最新周度) + 百川盈孚 + AKShare
 */

export const SanyouData = {
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
