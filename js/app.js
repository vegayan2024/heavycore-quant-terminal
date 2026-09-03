/**
 * 「重器」周期国企投研工作站 - 主应用控制器
 */
import { SanyouData } from "./data/sanyou_600409.js";
import { YihuaData } from "./data/yihua_000422.js";
import { ZhongwuData } from "./data/zhongwu_000657.js";
import { LeaderDatasetsRegistry } from "./data/leaderDatasets.js";
import { MasterUniverseData } from "./data/masterUniverse.js";
import { CustomCanvasCharts } from "./charts/customCanvasCharts.js";
import { VetoScorecardComponent } from "./components/vetoScorecard.js";
import { PositionManagerComponent } from "./components/positionManager.js";
import { ZhangXinminPanelComponent } from "./components/zhangXinminPanel.js";
import { ReportViewerComponent } from "./components/reportViewer.js";
import { UniverseViewComponent } from "./components/universeView.js";
import { DataHubModalComponent } from "./components/dataHubModal.js";

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
