/**
 * 标的数据集：湖北宜化 (000422.SZ)
 * 来源：兴业证券化工数据库 (07-03 最新周度) + 百川盈孚 + AKShare
 */

export const YihuaData = {
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
