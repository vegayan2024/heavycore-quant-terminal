# -*- coding: utf-8 -*-
"""
生成用户标准高频产业数据 Excel 模板
运行命令：python generate_excel_template.py
"""

import os

try:
    import pandas as pd
except ImportError:
    pd = None

def generate_template():
    if not pd:
        print("[Error] 请先安装 pandas 与 openpyxl: pip install pandas openpyxl")
        return

    # 构造示例数据
    data = {
        "季度/月份": ["23Q1", "23Q2", "23Q3", "23Q4", "24Q1", "24Q2", "24Q3", "24Q4"],
        "产品售价": [2350, 2100, 1950, 1820, 1850, 1920, 2050, 2180],
        "原料成本": [1680, 1620, 1580, 1520, 1490, 1480, 1490, 1510],
        "公司合规产能(万吨)": [340, 340, 340, 340, 340, 340, 340, 340],
        "公司实际产量(万吨)": [315, 320, 310, 325, 330, 332, 335, 338],
        "公司开工率": [92.6, 94.1, 91.2, 95.5, 97.0, 97.6, 98.5, 99.4],
        "行业平均开工率": [82.0, 79.5, 78.0, 76.2, 75.0, 76.5, 78.2, 80.5],
        "行业社会总库存(万吨)": [42.5, 40.2, 36.8, 32.5, 28.6, 26.4, 25.0, 24.2],
        "下游订单同比增速(%)": [-12.5, -8.0, -2.5, 1.8, 5.6, 8.2, 11.5, 14.0]
    }

    df = pd.DataFrame(data)
    out_file = os.path.join(os.path.dirname(__file__), "高频产业数据导入标准模板.xlsx")
    df.to_excel(out_file, index=False)
    print(f"✅ 成功生成标准 Excel 导入模板：{out_file}")

if __name__ == "__main__":
    generate_template()
