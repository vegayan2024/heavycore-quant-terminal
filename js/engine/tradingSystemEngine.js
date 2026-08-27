/**
 * 周期反转与细分国企隐形冠军交易系统引擎
 * 包含：三票否决判定、100分打分矩阵、非线性利润弹性模拟、60/40 双轨仓位卖出与回补信号触发
 */

export class TradingSystemEngine {
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
