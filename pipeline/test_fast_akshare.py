# -*- coding: utf-8 -*-
"""
快速从 AKShare 获取单只股票信息与财务指标 (毫秒级响应)
"""
import sys
import akshare as ak

sys.stdout.reconfigure(encoding='utf-8')

for code in ["600409", "000422", "000657"]:
    print(f"\n[*] 正在查询 {code} 实时信息...")
    try:
        info_df = ak.stock_individual_info_em(symbol=code)
        info_dict = dict(zip(info_df["item"], info_df["value"]))
        print(f" -> 股票名称: {info_dict.get('股票简称')}")
        print(f" -> 最新总市值: {info_dict.get('总市值')} 元")
        print(f" -> 流通市值: {info_dict.get('流通市值')} 元")
        print(f" -> 行业: {info_dict.get('行业')}")
        print(f" -> 市净率: {info_dict.get('市净率')}")
        print(f" -> 市盈率(动): {info_dict.get('市盈率(动)')}")
    except Exception as e:
        print(f" -> 查询异常: {e}")
