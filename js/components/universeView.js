/**
 * 总标的库视图组件 (Master Universe 3-Tier Screener)
 * 支持：三大等级梯队分类、关键词搜索、梯队筛选、一键载入工作台深度投研
 */

import { MasterUniverseData } from "../data/masterUniverse.js";

export class UniverseViewComponent {
  static render(containerId, onSelectStockCallback) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let currentFilter = "all"; // 'all', 'tier1', 'tier2', 'tier3', 'veto'
    let searchQuery = "";

    const renderContent = () => {
      // 过滤标的
      const filteredList = MasterUniverseData.filter(stock => {
        const matchTier = currentFilter === "all" || stock.tier === currentFilter;
        const matchQuery = searchQuery === "" || 
          stock.name.includes(searchQuery) || 
          stock.code.includes(searchQuery) || 
          stock.industry.includes(searchQuery);
        return matchTier && matchQuery;
      });

      // 梯队分组
      const tier1List = filteredList.filter(s => s.tier === "tier1");
      const tier2List = filteredList.filter(s => s.tier === "tier2");
      const tier3List = filteredList.filter(s => s.tier === "tier3");
      const vetoList = filteredList.filter(s => s.tier === "veto");

      container.innerHTML = `
        <!-- 筛选与搜索控制栏 -->
        <div class="universe-filter-bar">
          <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
              <span>🎯</span>
              <span>周期隐形冠军·总标的库</span>
              <span class="badge badge-info" style="font-size: 11px;">共 ${MasterUniverseData.length} 只标的</span>
            </div>

            <!-- 梯队过滤胶囊 -->
            <div class="tier-filter-pills">
              <button class="tier-btn ${currentFilter === 'all' ? 'active' : ''}" data-tier="all">全部标的</button>
              <button class="tier-btn ${currentFilter === 'tier1' ? 'active' : ''}" data-tier="tier1">🔥 第一梯队 (重仓爆发)</button>
              <button class="tier-btn ${currentFilter === 'tier2' ? 'active' : ''}" data-tier="tier2">⚡ 第二梯队 (中仓催化)</button>
              <button class="tier-btn ${currentFilter === 'tier3' ? 'active' : ''}" data-tier="tier3">💎 第三梯队 (左侧观察)</button>
              <button class="tier-btn ${currentFilter === 'veto' ? 'active' : ''}" data-tier="veto">❌ 淘汰排除池</button>
            </div>
          </div>

          <div>
            <input type="text" class="universe-search-input" id="universeSearchInput" placeholder="🔍 搜索标的名称 / 代码 / 行业..." value="${searchQuery}">
          </div>
        </div>

        <!-- 第一梯队：重仓爆发池 (>=80分) -->
        ${(currentFilter === 'all' || currentFilter === 'tier1') && tier1List.length > 0 ? `
          <div class="tier-section-block">
            <div class="tier-section-header">
              <div class="tier-section-title">
                <span style="color: var(--color-success);">🔥 第一梯队 · 重仓爆发池</span>
                <span class="badge badge-success">评分 ≥ 80分 · 建议仓位 6~8成</span>
              </div>
              <div class="tier-section-desc">
                特征：三票否决全过，落后产能实质性出清，产品-原料剪刀差单边暴增，大股东强催化落地。
              </div>
            </div>
            <div class="universe-cards-grid">
              ${tier1List.map(stock => renderStockCard(stock, "tier-1")).join("")}
            </div>
          </div>
        ` : ''}

        <!-- 第二梯队：中仓过渡/催化池 (60~79分) -->
        ${(currentFilter === 'all' || currentFilter === 'tier2') && tier2List.length > 0 ? `
          <div class="tier-section-block">
            <div class="tier-section-header">
              <div class="tier-section-title">
                <span style="color: var(--color-brand);">⚡ 第二梯队 · 中仓催化池</span>
                <span class="badge badge-info">评分 60~79分 · 建议仓位 3~5成</span>
              </div>
              <div class="tier-section-desc">
                特征：全要素成本领先，破净/低PB安全垫坚实，核心驱动成立，等待右侧关键催化剂点火。
              </div>
            </div>
            <div class="universe-cards-grid">
              ${tier2List.map(stock => renderStockCard(stock, "tier-2")).join("")}
            </div>
          </div>
        ` : ''}

        <!-- 第三梯队：左侧观察/极寒底仓池 (40~59分) -->
        ${(currentFilter === 'all' || currentFilter === 'tier3') && tier3List.length > 0 ? `
          <div class="tier-section-block">
            <div class="tier-section-header">
              <div class="tier-section-title">
                <span style="color: var(--color-warning);">💎 第三梯队 · 左侧观察池</span>
                <span class="badge badge-warning">评分 40~59分 · 建议仓位 1~2成</span>
              </div>
              <div class="tier-section-desc">
                特征：行业深陷极寒磨底，PB处于历史极值，仅适合左侧极轻仓底仓埋伏，以时间换空间。
              </div>
            </div>
            <div class="universe-cards-grid">
              ${tier3List.map(stock => renderStockCard(stock, "tier-3")).join("")}
            </div>
          </div>
        ` : ''}

        <!-- 一票否决/淘汰对比池 -->
        ${(currentFilter === 'all' || currentFilter === 'veto') && vetoList.length > 0 ? `
          <div class="tier-section-block">
            <div class="tier-section-header">
              <div class="tier-section-title">
                <span style="color: var(--color-danger);">❌ 淘汰排除池 (一票否决)</span>
                <span class="badge badge-danger">0 仓位 · 坚决回避</span>
              </div>
              <div class="tier-section-desc">
                特征：触碰财务安全红线、需求永久萎缩或跨界伪龙头，存在本金永久性损失风险。
              </div>
            </div>
            <div class="universe-cards-grid">
              ${vetoList.map(stock => renderStockCard(stock, "tier-veto")).join("")}
            </div>
          </div>
        ` : ''}
      `;

      // 绑定卡片点击加载
      container.querySelectorAll(".universe-stock-card").forEach(card => {
        card.addEventListener("click", () => {
          const code = card.dataset.code;
          if (onSelectStockCallback) {
            onSelectStockCallback(code);
          }
        });
      });

      // 绑定梯队切换按钮
      container.querySelectorAll(".tier-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          currentFilter = btn.dataset.tier;
          renderContent();
        });
      });

      // 绑定搜索输入
      const searchInput = container.querySelector("#universeSearchInput");
      if (searchInput) {
        searchInput.addEventListener("input", (e) => {
          searchQuery = e.target.value.trim();
          renderContent();
          // 重新聚焦输入框
          const newSearchInput = container.querySelector("#universeSearchInput");
          if (newSearchInput) {
            newSearchInput.focus();
            newSearchInput.selectionStart = newSearchInput.selectionEnd = newSearchInput.value.length;
          }
        });
      }
    };

    function renderStockCard(stock, tierClass) {
      return `
        <div class="universe-stock-card ${tierClass}" data-code="${stock.code}">
          <div class="card-top-row">
            <div>
              <span class="card-ticker-name">${stock.name}</span>
              <span class="card-ticker-code">${stock.code}.${stock.exchange}</span>
              <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
                ${stock.industry} · ${stock.soeLevel}
              </div>
            </div>
            <div class="card-score-badge">
              <span class="card-score-num" style="color: ${stock.score >= 80 ? 'var(--color-success)' : (stock.score >= 60 ? 'var(--color-brand)' : (stock.score >= 40 ? 'var(--color-warning)' : 'var(--color-danger)'))};">
                ${stock.score}
              </span>
              <span style="font-size: 11px; color: var(--text-muted);">分</span>
            </div>
          </div>

          <!-- 4 宫格核心财务与估值 -->
          <div class="card-metrics-grid">
            <div>
              <div class="stat-label">总市值</div>
              <div class="card-metric-val">${stock.marketCap} 亿</div>
            </div>
            <div>
              <div class="stat-label">市净率 PB</div>
              <div class="card-metric-val">${stock.pbRatio} <span style="font-size: 10px; color: var(--color-success);">(${stock.pbPercentile}%)</span></div>
            </div>
            <div>
              <div class="stat-label">股息率</div>
              <div class="card-metric-val" style="color: var(--color-success);">${stock.dividendYield}%</div>
            </div>
            <div>
              <div class="stat-label">弹性赔率</div>
              <div class="card-metric-val" style="color: var(--color-warning);">${stock.targetMultiplier}</div>
            </div>
          </div>

          <!-- 核心催化与剪刀差状态 -->
          <div class="card-catalyst-box">
            <div><strong>供需状态</strong>：${stock.spreadStatus}</div>
            <div style="margin-top: 2px;"><strong>关键催化</strong>：${stock.coreCatalyst}</div>
          </div>

          <div class="card-footer-action">
            <span class="badge ${stock.tierBadge}">${stock.recommendation}</span>
            <span style="color: var(--color-brand); font-weight: 600; font-size: 11px; display: flex; align-items: center; gap: 4px;">
              点击进入深度投研 ➔
            </span>
          </div>
        </div>
      `;
    }

    renderContent();
  }
}
