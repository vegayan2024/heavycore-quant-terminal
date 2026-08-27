@echo off
chcp 65001 >nul
title 重器 · 周期国企量化投研工作站启动器
echo ========================================================
echo   正在启动「重器·周期国企量化投研工作站」...
echo   本地服务端口: http://localhost:8080
echo ========================================================

start "" "http://localhost:8080"
python -m http.server 8080 --directory "%~dp0"
pause
