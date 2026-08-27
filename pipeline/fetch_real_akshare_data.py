# -*- coding: utf-8 -*-
"""
AKShare & TuShare 真实上市公司财务与股价拉取测试脚本
"""
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("Checking Python environment & packages...")
try:
    import akshare as ak
    print("[AKShare] Successfully imported! Version:", getattr(ak, "__version__", "unknown"))
except Exception as e:
    print("[AKShare] Import failed:", e)

try:
    import tushare as ts
    print("[TuShare] Successfully imported! Version:", getattr(ts, "__version__", "unknown"))
except Exception as e:
    print("[TuShare] Import failed:", e)
