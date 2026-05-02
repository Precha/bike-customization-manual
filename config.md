# Manual Configuration — 手冊設定說明

本手冊共有兩個設定檔，皆可直接用文字編輯器修改，儲存後重新整理瀏覽器即可生效，**不需要修改 HTML 或語言檔**。

| 檔案 | 用途 |
|------|------|
| `config.js` | 版本資訊、IT 及客服聯絡信箱、系統網址 |
| `contact.js` | 一般諮詢及訂單相關問題的市場聯絡人表格 |

---

## 如何編輯

用任何文字編輯器（記事本、VS Code、TextEdit 等）開啟 `config.js`，修改對應的值後儲存。

---

## 欄位說明

### 版本資訊

| 欄位 | 說明 | 範例 |
|------|------|------|
| `manual_version` | 手冊版本號 | `'1.0'` |
| `last_updated` | 手冊最後更新日期（格式：YYYY-MM-DD） | `'2026-05-02'` |
| `website_version` | 本手冊對應的網站版本 | `'1.0.0'` |
| `release_notes` | 本版本更新說明（選填，留空則不顯示） | `'新增消費者網站章節'` |

### 聯繫支援

| 欄位 | 說明 | 範例 |
|------|------|------|
| `support_email` | 客製化腳踏車系統主要客服信箱 | `'custombike-support@giantcycling.com'` |
| `it_support_email` | IT 技術支援信箱（帳號/登入問題） | `'it-helpdesk@giant.com.tw'` |
| `support_url` | 系統網址或支援頁面連結 | `'https://custombike.giantcycling.com'` |
| `dealer_support_email` | 經銷商訂單查詢專用信箱 | `'dealer-support@giantcycling.com'` |

---

## 更新範例

假設手冊更新至 v1.1，請將 `config.js` 中的對應欄位改為：

```js
manual_version  : '1.1',
last_updated    : '2026-06-15',
website_version : '1.1.0',
release_notes   : '新增日文與韓文語系支援',
```

儲存後重新整理瀏覽器，首頁的版本資訊區塊會自動更新。

---

## contact.js — 市場聯絡人

開啟 `contact.js`，在 `window.CONTACTS` 陣列中新增、刪除或調整聯絡人順序。每筆資料格式如下：

```js
{ market: 'XX',   name: '姓名',   email: 'email@example.com' },
```

### 欄位說明

| 欄位 | 說明 |
|------|------|
| `market` | 市場代碼（顯示於表格第一欄） |
| `name` | 聯絡人姓名 |
| `email` | 電子郵件（自動產生 mailto: 連結） |

### 新增聯絡人範例

在陣列最後一行（`];` 之前）加入：

```js
{ market: 'GTW', name: 'Jane Chen', email: 'janechen@giant.com.tw' },
```
