/**
 * 60/40 仓位物理隔离与非线性弹性模拟器组件
 */
import { TradingSystemEngine } from "../engine/tradingSystemEngine.js";

export class PositionManagerComponent {
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
