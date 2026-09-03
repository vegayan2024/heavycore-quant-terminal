/**
 * 张新民财报深度诊断面板组件
 * 涵盖：核心利润质量、四大动力构成、上下游两头吃能力、控制性投资扩张倍数与行业对标
 */
import { ZhangXinminEngine } from "../engine/zhangXinminEngine.js";
import { CustomCanvasCharts } from "../charts/customCanvasCharts.js";

export class ZhangXinminPanelComponent {
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
