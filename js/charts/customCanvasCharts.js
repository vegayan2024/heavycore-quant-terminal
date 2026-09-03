/**
 * 高性能原生 Canvas 护眼图表库
 * 包含：剪刀差双轴走势图、产能-利用率-均价多维图、库存四象限周期钟、财务与对标对比柱状图、张新民八看雷达图
 */

export class CustomCanvasCharts {
  /**
   * 初始化 Canvas 高清视网膜缩放
   */
  static initCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    return { ctx, width: rect.width, height: rect.height };
  }

  /**
   * 图表 1：产品-原料“剪刀差”高频趋势图（双轴 + 面积图）
   */
  static renderSpreadChart(canvasId, capacityData) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const { ctx, width, height } = this.initCanvas(canvas);

    const padLeft = 45, padRight = 45, padTop = 25, padBottom = 30;
    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    ctx.clearRect(0, 0, width, height);

    const quarters = capacityData.quarters;
    const asp = capacityData.asp;
    const cost = capacityData.rawMaterialCost;
    const spread = capacityData.spread;

    const minPrice = Math.min(...cost) * 0.85;
    const maxPrice = Math.max(...asp) * 1.1;
    const maxSpread = Math.max(...spread) * 1.25;

    // 绘制背景网格
    ctx.strokeStyle = "#21262d";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padTop + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(width - padRight, y);
      ctx.stroke();

      // 左轴刻度 (产品价格)
      const valL = Math.round(maxPrice - ((maxPrice - minPrice) / 4) * i);
      ctx.fillStyle = "#8b949e";
      ctx.font = "10px JetBrains Mono, monospace";
      ctx.textAlign = "right";
      ctx.fillText(valL, padLeft - 6, y + 3);

      // 右轴刻度 (剪刀差)
      const valR = Math.round(maxSpread - (maxSpread / 4) * i);
      ctx.fillStyle = "#d29922";
      ctx.textAlign = "left";
      ctx.fillText(valR, width - padRight + 6, y + 3);
    }

    const getX = (idx) => padLeft + (chartW / (quarters.length - 1)) * idx;
    const getYPrice = (val) => padTop + chartH - ((val - minPrice) / (maxPrice - minPrice)) * chartH;
    const getYSpread = (val) => padTop + chartH - (val / maxSpread) * chartH;

    // 1. 绘制剪刀差绿色渐变填充面积
    ctx.beginPath();
    ctx.moveTo(getX(0), getYPrice(cost[0]));
    for (let i = 0; i < quarters.length; i++) {
      ctx.lineTo(getX(i), getYPrice(asp[i]));
    }
    for (let i = quarters.length - 1; i >= 0; i--) {
      ctx.lineTo(getX(i), getYPrice(cost[i]));
    }
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, padTop, 0, padTop + chartH);
    grad.addColorStop(0, "rgba(63, 185, 80, 0.35)");
    grad.addColorStop(1, "rgba(63, 185, 80, 0.05)");
    ctx.fillStyle = grad;
    ctx.fill();

    // 2. 绘制产品均价线 (亮蓝)
    ctx.strokeStyle = "#58a6ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    quarters.forEach((_, i) => {
      const x = getX(i);
      const y = getYPrice(asp[i]);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    // 3. 绘制原料成本线 (赤红虚线)
    ctx.strokeStyle = "#f85149";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    quarters.forEach((_, i) => {
      const x = getX(i);
      const y = getYPrice(cost[i]);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    // 4. 绘制 X 轴标签与关键拐点圆点
    quarters.forEach((q, i) => {
      const x = getX(i);
      ctx.fillStyle = "#8b949e";
      ctx.font = "11px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(q, x, height - 10);

      // 点标
      ctx.fillStyle = "#58a6ff";
      ctx.beginPath();
      ctx.arc(x, getYPrice(asp[i]), 3.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // 图例
    ctx.font = "11px Inter, sans-serif";
    ctx.fillStyle = "#58a6ff";
    ctx.fillText("■ 产品售价(ASP)", padLeft + 60, padTop - 10);
    ctx.fillStyle = "#f85149";
    ctx.fillText("■ 原料综合成本", padLeft + 180, padTop - 10);
    ctx.fillStyle = "#3fb950";
    ctx.fillText("■ 剪刀差(吨毛利)", padLeft + 290, padTop - 10);
  }

  /**
   * 图表 2：产能 - 实际产量 - 开工率联动图
   */
  static renderCapacityPriceChart(canvasId, capacityData) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const { ctx, width, height } = this.initCanvas(canvas);

    const padLeft = 40, padRight = 45, padTop = 25, padBottom = 30;
    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    ctx.clearRect(0, 0, width, height);

    const quarters = capacityData.quarters;
    const cap = capacityData.effectiveCapacity;
    const output = capacityData.actualOutput;
    const opRate = capacityData.operatingRate;
    const indOpRate = capacityData.industryAvgOperatingRate;

    const maxCap = Math.max(...cap) * 1.25;

    // 网格线
    ctx.strokeStyle = "#21262d";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padTop + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(width - padRight, y);
      ctx.stroke();

      // 左轴刻度 (产能 万吨)
      const valL = Math.round(maxCap - (maxCap / 4) * i);
      ctx.fillStyle = "#8b949e";
      ctx.font = "10px JetBrains Mono, monospace";
      ctx.textAlign = "right";
      ctx.fillText(valL, padLeft - 6, y + 3);

      // 右轴刻度 (开工率 %)
      const valR = Math.round(100 - 25 * i) + "%";
      ctx.fillStyle = "#3fb950";
      ctx.textAlign = "left";
      ctx.fillText(valR, width - padRight + 6, y + 3);
    }

    const stepX = chartW / quarters.length;
    const barW = Math.max(12, stepX * 0.45);

    // 1. 绘制产量与产能柱状图
    quarters.forEach((q, i) => {
      const x = padLeft + stepX * i + (stepX - barW) / 2;
      const hCap = (cap[i] / maxCap) * chartH;
      const hOut = (output[i] / maxCap) * chartH;

      // 产能底柱 (暗灰)
      ctx.fillStyle = "rgba(110, 118, 129, 0.25)";
      ctx.fillRect(x, padTop + chartH - hCap, barW, hCap);

      // 实际产量柱 (亮蓝)
      ctx.fillStyle = "rgba(88, 166, 255, 0.75)";
      ctx.fillRect(x, padTop + chartH - hOut, barW, hOut);

      // X 轴文字
      ctx.fillStyle = "#8b949e";
      ctx.font = "11px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(q, x + barW / 2, height - 10);
    });

    // 2. 绘制公司开工率线 (翠绿实线) vs 行业均值 (黄色虚线)
    const getYRate = (rate) => padTop + chartH - (rate / 100) * chartH;

    // 行业均值线
    ctx.strokeStyle = "#d29922";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    quarters.forEach((_, i) => {
      const cx = padLeft + stepX * i + stepX / 2;
      const cy = getYRate(indOpRate[i]);
      i === 0 ? ctx.moveTo(cx, cy) : ctx.lineTo(cx, cy);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    // 公司开工率线
    ctx.strokeStyle = "#3fb950";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    quarters.forEach((_, i) => {
      const cx = padLeft + stepX * i + stepX / 2;
      const cy = getYRate(opRate[i]);
      i === 0 ? ctx.moveTo(cx, cy) : ctx.lineTo(cx, cy);
    });
    ctx.stroke();

    // 开工率高亮圆点
    quarters.forEach((_, i) => {
      const cx = padLeft + stepX * i + stepX / 2;
      const cy = getYRate(opRate[i]);
      ctx.fillStyle = "#3fb950";
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // 图例
    ctx.font = "11px Inter, sans-serif";
    ctx.fillStyle = "rgba(88, 166, 255, 0.9)";
    ctx.fillText("■ 实际产量", padLeft + 60, padTop - 10);
    ctx.fillStyle = "#3fb950";
    ctx.fillText("━ 公司开工率", padLeft + 160, padTop - 10);
    ctx.fillStyle = "#d29922";
    ctx.fillText("┄ 行业平均开工率", padLeft + 270, padTop - 10);
  }

  /**
   * 图表 3：库存周期四象限钟
   */
  static renderCycleClock(canvasId, currentPhase = "被动去库") {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const { ctx, width, height } = this.initCanvas(canvas);

    ctx.clearRect(0, 0, width, height);

    const midX = width / 2;
    const midY = height / 2;
    const isNarrow = width < 340;
    const titleFont = isNarrow ? "bold 10px Inter, sans-serif" : "11px Inter, sans-serif";
    const subFont = "9px Inter, sans-serif";

    // 绘制象限底色
    ctx.fillStyle = "#161b22";
    ctx.fillRect(0, 0, width, height);

    // 十字轴
    ctx.strokeStyle = "#30363d";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(20, midY);
    ctx.lineTo(width - 20, midY);
    ctx.moveTo(midX, 20);
    ctx.lineTo(midX, height - 20);
    ctx.stroke();

    // 象限背景轻微高亮
    // 左上：被动去库存 (黄金买点)
    ctx.fillStyle = "rgba(63, 185, 80, 0.08)";
    ctx.fillRect(20, 20, midX - 20, midY - 20);

    // 标注象限名称
    ctx.textAlign = "center";
    
    // 左上
    ctx.fillStyle = "#3fb950";
    ctx.font = titleFont;
    ctx.fillText(isNarrow ? "② 被动去库 (买点)" : "② 被动去库存 [黄金反转买点]", midX * 0.5, 30);
    if (!isNarrow) {
      ctx.fillStyle = "#8b949e";
      ctx.font = subFont;
      ctx.fillText("需求筑底回升 + 行业极低库", midX * 0.5, 46);
    }

    // 右上
    ctx.fillStyle = "#58a6ff";
    ctx.font = titleFont;
    ctx.fillText(isNarrow ? "③ 主动补库 (主升)" : "③ 主动补库存 [主升爆发期]", midX * 1.5, 30);
    if (!isNarrow) {
      ctx.fillStyle = "#8b949e";
      ctx.font = subFont;
      ctx.fillText("价量齐升 + 产能全开", midX * 1.5, 46);
    }

    // 左下
    ctx.fillStyle = "#d29922";
    ctx.font = titleFont;
    ctx.fillText(isNarrow ? "① 主动去库 (极寒)" : "① 主动去库存 [极寒出清期]", midX * 0.5, midY + (isNarrow ? 24 : 32));
    if (!isNarrow) {
      ctx.fillStyle = "#8b949e";
      ctx.font = subFont;
      ctx.fillText("停产降负 + 价格阴跌", midX * 0.5, midY + 48);
    }

    // 右下
    ctx.fillStyle = "#f85149";
    ctx.font = titleFont;
    ctx.fillText(isNarrow ? "④ 被动补库 (见顶)" : "④ 被动补库存 [周期见顶]", midX * 1.5, midY + (isNarrow ? 24 : 32));
    if (!isNarrow) {
      ctx.fillStyle = "#8b949e";
      ctx.font = subFont;
      ctx.fillText("产能过剩 + 累库滞销", midX * 1.5, midY + 48);
    }

    // 当前标的所处位置发光点 (位于第二象限)
    const targetX = midX * 0.55;
    const targetY = midY * 0.65;

    // 呼吸光晕
    ctx.fillStyle = "rgba(63, 185, 80, 0.25)";
    ctx.beginPath();
    ctx.arc(targetX, targetY, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#3fb950";
    ctx.beginPath();
    ctx.arc(targetX, targetY, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 10px Inter, sans-serif";
    ctx.fillText("当前标的", targetX, targetY - 10);
  }

  /**
   * 图表 4：张新民八看分析雷达图
   */
  static renderRadarChart(canvasId, radarData) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const { ctx, width, height } = this.initCanvas(canvas);

    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2 + 6;
    const isNarrow = width < 310;
    const radius = Math.max(30, Math.min(centerX, centerY) - (isNarrow ? 26 : 38));

    const labels = [
      "看战略", "看管理", "看利润", "看创造",
      "看成本", "看健康", "看风险", "看前景"
    ];
    const fullLabels = [
      "看战略定位", "看经营管理", "看利润质量", "看价值创造",
      "看成本控制", "看财务健康", "看风险防范", "看周期前景"
    ];
    const displayLabels = isNarrow ? labels : fullLabels;
    const values = [
      radarData.lookStrategy, radarData.lookOperations, radarData.lookProfitQuality, radarData.lookValueCreation,
      radarData.lookCostControl, radarData.lookFinancialHealth, radarData.lookRiskManagement, radarData.lookProspects
    ];

    const numAxes = displayLabels.length;
    const angleStep = (Math.PI * 2) / numAxes;

    // 绘制雷达同心圆网格
    ctx.strokeStyle = "#30363d";
    ctx.lineWidth = 1;
    for (let level = 1; level <= 4; level++) {
      const r = (radius / 4) * level;
      ctx.beginPath();
      for (let i = 0; i < numAxes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // 绘制轴线与文字
    ctx.font = isNarrow ? "9px Inter, sans-serif" : "11px Inter, sans-serif";
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      ctx.strokeStyle = "#21262d";
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // 绘制轴端文字
      const textX = centerX + Math.cos(angle) * (radius + (isNarrow ? 12 : 16));
      const textY = centerY + Math.sin(angle) * (radius + (isNarrow ? 12 : 16));

      ctx.fillStyle = "#8b949e";
      ctx.textAlign = Math.abs(Math.cos(angle)) < 0.2 ? "center" : (Math.cos(angle) > 0 ? "left" : "right");
      ctx.textBaseline = "middle";
      ctx.fillText(displayLabels[i], textX, textY);
    }

    // 绘制数据多边形
    ctx.beginPath();
    values.forEach((val, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (val / 100) * radius;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();

    ctx.fillStyle = "rgba(88, 166, 255, 0.25)";
    ctx.fill();
    ctx.strokeStyle = "#58a6ff";
    ctx.lineWidth = 2;
    ctx.stroke();

    // 顶点圆点
    values.forEach((val, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (val / 100) * radius;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;

      ctx.fillStyle = "#58a6ff";
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}
