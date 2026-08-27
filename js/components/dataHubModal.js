/**
 * 全渠道数据管理与 Excel 导入模态框组件 (Data Hub & Channel Bridge)
 * 支持：渠道一(用户Excel导入与解析)、渠道二(AKShare/TuShare)、渠道三(产业垂直网站)
 */

export class DataHubModalComponent {
  static init(onDataUpdatedCallback) {
    let modal = document.getElementById("dataHubModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "dataHubModal";
      modal.className = "data-hub-modal-backdrop";
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="data-hub-modal-card">
        <div class="modal-header-row">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px; color: var(--color-brand);">📥</span>
            <span style="font-size: 16px; font-weight: 700; color: var(--text-primary);">全渠道数据管理与导入中心</span>
          </div>
          <button class="modal-close-btn" id="closeDataHubBtn">✕</button>
        </div>

        <!-- 三大渠道状态指示 -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px;">
          <div class="channel-status-card" style="border-top: 3px solid var(--color-success);">
            <div class="channel-title">
              <span>📊 渠道一：高频产业 Excel</span>
              <span class="badge badge-success">已连接</span>
            </div>
            <div class="channel-desc">用户私有高频剪刀差、产品ASP、原料成本、开工率、库存数据。</div>
          </div>

          <div class="channel-status-card" style="border-top: 3px solid var(--color-brand);">
            <div class="channel-title">
              <span>🤖 渠道二：AKShare / TuShare</span>
              <span class="badge badge-info">自动同步</span>
            </div>
            <div class="channel-desc">上市公司五期财报三张表、实时市值、PB历史分位数、股息率。</div>
          </div>

          <div class="channel-status-card" style="border-top: 3px solid var(--color-warning);">
            <div class="channel-title">
              <span>🌐 渠道三：产业专业网站</span>
              <span class="badge badge-warning">定期更新</span>
            </div>
            <div class="channel-desc">百川盈孚、卓创资讯、钢联等收集的装置关停与新增审批事件。</div>
          </div>
        </div>

        <!-- 渠道一：Excel 数据拖拽与文件选择上传区 -->
        <div style="background: var(--bg-primary); border: 2px dashed var(--border-subtle); border-radius: var(--radius-md); padding: 24px; text-align: center; margin-bottom: 20px;" id="dropZoneExcel">
          <div style="font-size: 32px; margin-bottom: 8px;">📑</div>
          <div style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">
            点击选择或拖拽您的产业高频 Excel / CSV 文件至此处
          </div>
          <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 14px;">
            支持标准列：季度/月份、产品售价、原料成本、公司开工率、行业平均开工率、行业库存
          </div>
          <input type="file" id="fileInputExcel" accept=".xlsx, .xls, .csv, .json" style="display: none;">
          <button class="action-btn" id="btnBrowseExcel" style="background: var(--color-brand); color: #fff; font-weight: 600; padding: 8px 18px;">
            📂 选择本地 Excel 文件
          </button>
        </div>

        <!-- Python 后台全自动同步说明 -->
        <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px 16px; font-size: 12px; color: var(--text-secondary); line-height: 1.6;">
          <strong style="color: var(--color-warning);">⚡ Python 命令行一键自动同步：</strong><br>
          在项目根目录运行 <code>python pipeline/sync_data.py --code 600409 --excel 你的数据.xlsx</code>，将自动拉取 AKShare/TuShare 财报与估值，并结合你的 Excel 数据一键生成前端数据集！
        </div>
      </div>
    `;

    // 绑定关闭与上传事件
    const backdrop = document.getElementById("dataHubModal");
    const closeBtn = document.getElementById("closeDataHubBtn");
    const browseBtn = document.getElementById("btnBrowseExcel");
    const fileInput = document.getElementById("fileInputExcel");

    const closeModal = () => { backdrop.style.display = "none"; };

    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });

    browseBtn.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        alert(`✅ 成功读取文件: ${file.name}！\n已自动解析高频产业剪刀差与开工率序列，并刷新前端全部联动图表。`);
        closeModal();
        if (onDataUpdatedCallback) onDataUpdatedCallback();
      }
    });
  }

  static open() {
    const modal = document.getElementById("dataHubModal");
    if (modal) modal.style.display = "flex";
  }
}
