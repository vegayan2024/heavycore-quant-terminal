# -*- coding: utf-8 -*-
"""
修复模块声明顺序与打包：
1. 先声明具体股票数据集 (sanyou, yihua, zhongwu)
2. 再声明总标的库 masterUniverse (引用上述数据集)
3. 声明计算引擎与图表库
4. 声明各 UI 组件
5. 声明并执行 AppController
"""
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r"c:\ai\antigravity\heavycore-quant-terminal"
js_dir = os.path.join(base_dir, "js")

# 严格按依赖顺序排列
files_in_order = [
    # 1. 先加载独立股票数据集
    os.path.join(js_dir, "data", "sanyou_600409.js"),
    os.path.join(js_dir, "data", "yihua_000422.js"),
    os.path.join(js_dir, "data", "zhongwu_000657.js"),

    # 2. 再加载总标的库 (依赖上述数据)
    os.path.join(js_dir, "data", "masterUniverse.js"),

    # 3. 核心计算引擎
    os.path.join(js_dir, "engine", "zhangXinminEngine.js"),
    os.path.join(js_dir, "engine", "tradingSystemEngine.js"),

    # 4. Canvas 高性能图表库
    os.path.join(js_dir, "charts", "customCanvasCharts.js"),

    # 5. 界面组件
    os.path.join(js_dir, "components", "vetoScorecard.js"),
    os.path.join(js_dir, "components", "positionManager.js"),
    os.path.join(js_dir, "components", "zhangXinminPanel.js"),
    os.path.join(js_dir, "components", "reportViewer.js"),
    os.path.join(js_dir, "components", "universeView.js"),
    os.path.join(js_dir, "components", "dataHubModal.js"),

    # 6. 主控制器
    os.path.join(js_dir, "app.js")
]

bundle_content = """/**
 * 「重器」周期国企投研工作站 - 独立整合单文件 Bundle
 * 支持：直接双击打开 (file:///) 与 Vercel / 本地 HTTP 服务 全兼容运行
 */
(function() {
  'use strict';

"""

for fpath in files_in_order:
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
            # 移除 import 语句
            content = re.sub(r'import\s+.*?from\s+[\'"].*?[\'"];?', '', content)
            # 移除 export 关键字
            content = re.sub(r'export\s+(const|class|function|let|var)\s+', r'\1 ', content)
            content = re.sub(r'export\s+default\s+', '', content)
            
            bundle_content += f"\n// ==================== Source: {os.path.basename(fpath)} ====================\n"
            bundle_content += content + "\n"

bundle_content += "\n})();\n"

out_bundle = os.path.join(js_dir, "bundle.js")
with open(out_bundle, "w", encoding="utf-8") as f:
    f.write(bundle_content)

print(f"[Success] Bundle re-generated at: {out_bundle}")
