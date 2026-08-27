/**
 * 大包子/ShengFund 风格全景深度研报渲染组件
 */
import { ZhangXinminEngine } from "../engine/zhangXinminEngine.js";
import { TradingSystemEngine } from "../engine/tradingSystemEngine.js";

export class ReportViewerComponent {
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
