# -*- coding: utf-8 -*-
import os
import glob
import openpyxl

target_dir = r"C:\个人文件夹\github\terminal\docs\data\sources"
print("Checking directory:", target_dir, "Exists?", os.path.exists(target_dir))

if not os.path.exists(target_dir):
    # Try searching for "sources" or the excel filename anywhere under C:\
    print("Listing parent directories...")
    if os.path.exists(r"C:\个人文件夹"):
        print("C:\\个人文件夹 exists. Subdirs:")
        for root, dirs, files in os.walk(r"C:\个人文件夹"):
            for f in files:
                if "兴业证券" in f or "化工" in f or f.endswith(".xlsx"):
                    print("Found file:", os.path.join(root, f))
else:
    files = os.listdir(target_dir)
    print("Files in sources:", files)
    for f in files:
        if f.endswith(".xlsx") or f.endswith(".xls"):
            full_path = os.path.join(target_dir, f)
            print("Full path:", full_path)
            try:
                wb = openpyxl.load_workbook(full_path, read_only=True)
                print("Sheet names in", f, ":", wb.sheetnames)
            except Exception as e:
                print("Error loading:", e)
