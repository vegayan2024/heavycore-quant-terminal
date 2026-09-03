# -*- coding: utf-8 -*-
"""
自动将重器量化投研终端代码、图表、引擎与文档同步至 GitHub 仓库
仓库目标：C:\\个人文件夹\\github\\heavycore-quant-terminal
远程地址：https://github.com/vegayan2024/heavycore-quant-terminal.git
"""
import os
import sys
import shutil
import subprocess

sys.stdout.reconfigure(encoding='utf-8')

src_dir = r"c:\ai\antigravity\heavycore-quant-terminal"
target_dir = r"C:\个人文件夹\github\heavycore-quant-terminal"

print(f"[*] 源目录: {src_dir}")
print(f"[*] 目标仓库: {target_dir}")

os.makedirs(target_dir, exist_ok=True)

# 1. 复制所有子目录与文件
for item in os.listdir(src_dir):
    s = os.path.join(src_dir, item)
    d = os.path.join(target_dir, item)
    if os.path.isdir(s):
        if os.path.exists(d):
            shutil.rmtree(d)
        shutil.copytree(s, d)
        print(f" -> 复制目录: {item}")
    else:
        shutil.copy2(s, d)
        print(f" -> 复制文件: {item}")

# 2. 复制交易体系 Markdown 文档到 docs 目录
doc_src = r"c:\ai\antigravity\周期反转与细分国企隐形冠军交易体系.md"
docs_target_dir = os.path.join(target_dir, "docs")
os.makedirs(docs_target_dir, exist_ok=True)
if os.path.exists(doc_src):
    shutil.copy2(doc_src, os.path.join(docs_target_dir, "周期反转与细分国企隐形冠军交易体系.md"))
    print(" -> 复制核心交易体系文档到 docs 目录")

# 3. 创建/更新 .gitignore
gitignore_content = """# Logs & Cache
__pycache__/
*.pyc
.system_generated/
*.log

# Temp
.DS_Store
Thumbs.db
"""
with open(os.path.join(target_dir, ".gitignore"), "w", encoding="utf-8") as f:
    f.write(gitignore_content)

print("\n[*] 文件同步完成，正在执行 Git 提交流程...")

# 4. 执行 Git 命令
def run_git(cmd_list, cwd=target_dir):
    res = subprocess.run(cmd_list, cwd=cwd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    print(f"[Git] {' '.join(cmd_list)}")
    if res.stdout:
        print("STDOUT:", res.stdout.strip())
    if res.stderr:
        print("STDERR:", res.stderr.strip())
    return res

# 初始化或更新 Git
git_dir = os.path.join(target_dir, ".git")
if not os.path.exists(git_dir):
    run_git(["git", "init"])
    run_git(["git", "remote", "add", "origin", "https://github.com/vegayan2024/heavycore-quant-terminal.git"])
    run_git(["git", "branch", "-M", "main"])

run_git(["git", "status"])
run_git(["git", "add", "."])
run_git(["git", "commit", "-m", "feat: Hallmark 首页拥挤排查重构与 12 大行业细分龙头扩充入库 (V3.6)\n\n- [UI/UX] 运用 Hallmark Anti-AI-Slop 准则全面重塑顶部导航栏，实现标的自适应横向滑动药丸槽，消除小分辨率下的截断溢出\n- [Layout] 重构投研工作台三栏黄金工位比(310px/1fr/320px)，新增 dual-chart-grid 与 zhang-xinmin-split-grid 自适应堆叠网格\n- [Charts] Canvas 图表动态计算文字边距与自适应高DPI缩放，彻底杜绝雷达图与库存周期钟文本越界与锯齿碰撞\n- [Data] 接入 12 只核心行业龙头(湖北宜化、云天化、华鲁恒升、远兴能源、巨化股份、龙佰集团、中钨高新、洛阳钼业、三友化工、北方稀土、中信特钢、郑煤机)\n- [Pipeline] 建立基于金融数据流的实时行情抓取流水线与全维财务模型"])
run_git(["git", "push", "origin", "main"])

print("\n✅ GitHub 同步与发布流程全部执行完毕！")
