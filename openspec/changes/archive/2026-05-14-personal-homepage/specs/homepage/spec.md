## ADDED Requirements

### Requirement: 顯示名字
首頁 SHALL 顯示「Leo Kuo」作為主要標題。

#### Scenario: 訪客開啟首頁
- **WHEN** 使用者訪問 leo-kuo.com
- **THEN** 頁面顯示「Leo Kuo」作為主要文字

### Requirement: GitHub 連結
首頁 SHALL 提供可點擊的 GitHub 個人頁連結。

#### Scenario: 點擊 GitHub 連結
- **WHEN** 使用者點擊 GitHub 連結
- **THEN** 於新分頁開啟 GitHub 個人頁

### Requirement: 不暴露 email
首頁 SHALL NOT 在任何位置顯示 email 地址或 mailto 連結。

#### Scenario: 頁面原始碼不含 email
- **WHEN** 檢視頁面原始碼
- **THEN** 找不到任何 email 地址字串

### Requirement: subdomain 導流區塊
首頁 SHALL 包含一個結構化區塊，用於列出未來的 subdomain 服務。

#### Scenario: 初期無 subdomain 上線
- **WHEN** 首頁載入且尚無 subdomain 上線
- **THEN** 該區塊可為空白或隱藏，不影響整體版面

#### Scenario: 新增 subdomain 連結
- **WHEN** 新 subdomain 上線
- **THEN** 可直接在該區塊補充連結，不需改動整體結構
