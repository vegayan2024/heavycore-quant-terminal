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
run_git(["git", "commit", "-m", "feat: 周期反转与细分国企隐形冠军量化投研终端 V3.5 发布\n\n- 集成三票否决量化打分盘与100分决策引擎\n- 对齐兴业证券高频化工品价格价差与百川盈孚开工率数据库\n- 实现张新民八看财报深度诊断面板与四大动力资金分析\n- 落地60%底仓/40%波段双轨仓位执行台与非线性弹性模拟器\n- 呈现ShengFund大包子风格机构级全景投研报告\n- 建立三大等级梯队总标的库与全渠道数据同步流水线"])
run_git(["git", "push", "-u", "origin", "main"])

print("\n✅ GitHub 同步与发布流程全部执行完毕！")
