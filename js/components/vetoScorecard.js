/**
 * 三票否决与决策打分盘组件
 */
import { TradingSystemEngine } from "../engine/tradingSystemEngine.js";

export class VetoScorecardComponent {
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
