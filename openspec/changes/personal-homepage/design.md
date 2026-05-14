## Context

leo-kuo.com 目前沒有首頁。需要一個靜態入口頁，讓認識 Leo 的人確認找到對的地方，並在未來 subdomain 上線後作為導流中心。

## Goals / Non-Goals

**Goals:**
- 極簡靜態首頁，純 HTML + CSS，無 JavaScript 依賴
- 顯示名字與 GitHub 連結
- 結構預留 subdomain 導流區塊
- 不暴露 email 或 LinkedIn 等高個資平台

**Non-Goals:**
- 後端、資料庫、任何動態功能
- 部落格、作品集、履歷內容
- 多頁路由

## Decisions

**D1: 純 HTML + CSS，不使用任何框架**
- 首頁內容極少，框架引入的複雜度大於效益
- 純靜態部署最簡單、最快、最穩定
- 替代方案：Astro、Hugo → 對單頁無意義

**D2: 不放 email，只放 GitHub**
- 動機：避免垃圾信爬蟲
- LinkedIn 個資暴露程度高，不放
- 有意聯絡者可透過 GitHub 找到

**D3: subdomain 區塊用靜態 HTML 預留**
- 初期 subdomain 尚未上線，先用結構化 HTML 預留位置
- 上線後直接補充連結即可，不需改動架構

## Risks / Trade-offs

- [subdomain 區塊空白] → 初期顯示佔位文字或隱藏，上線後再補
- [純 HTML 維護性低] → 內容極少，可接受
