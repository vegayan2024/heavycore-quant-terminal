/**
 * 张新民教授财务报表分析方法论计算引擎
 * 涵盖：核心利润、四大动力、上下游“两头吃”能力、同口径获现率、控制性投资扩张倍数、八看诊断
 */

export class ZhangXinminEngine {
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
