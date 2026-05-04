/* ============================================================
   FAQ Data File
   ────────────────────────────────────────────────────────────
   編輯此檔案以新增、修改或刪除 FAQ 條目。
   - 支援 en（英文）和 zh-TW（繁體中文）
   - 其他語言自動顯示英文內容
   - a 欄位可使用 HTML（如 <strong>、<a> 等）
   - 新增條目：在陣列最後一個 } 後面加一個逗號，再加新物件
   ============================================================ */

window.FAQ = {

  /* ── English ─────────────────────────────────────────────── */
  'en': [
    {
      q: 'What browsers are supported?',
      a: 'The system is optimized for <strong>Google Chrome</strong>. If you experience display issues, please ensure your browser is up to date. Other modern browsers (Edge, Firefox, Safari) may work but are not officially supported.'
    },
    {
      q: 'I cannot log in. What should I do?',
      a: 'Try the following steps:<br><br>'
       + '1. If you are a GSC internal staff member, click the <strong>AAD</strong> button to sign in with your corporate Microsoft account.<br>'
       + '2. If you are a dealer or direct store manager, use your email address and password.<br>'
       + '3. If you have forgotten your password, click <em>Forgot your password?</em> on the login page.<br>'
       + '4. If the problem persists, contact your Giant Group IT administrator.'
    },
    {
      q: 'How do I update an order status?',
      a: 'Open the order from the Orders Dashboard by clicking <strong>Edit</strong> next to it. At the top of the order detail page, click the status dropdown, select the new status, and click <strong>Save</strong>.'
    },
    {
      q: 'Can I download order data?',
      a: 'Yes. On any order detail page, click the <strong>Download CSV</strong> button to export the order data as a CSV file. This is useful for record-keeping or sharing with colleagues who do not have system access.'
    },
    {
      q: 'Why does the page not display correctly?',
      a: 'Try clearing your browser cache: In Chrome, press <strong>Ctrl + Shift + Delete</strong> (Windows) or <strong>Cmd + Shift + Delete</strong> (Mac), select "Cached images and files", and click "Clear data". Then reload the page.'
    },
    {
      q: 'Who do I contact for order-related issues?',
      a: 'For order-related inquiries (e.g., payment disputes, shipping delays), please contact the relevant market representative listed in the <strong>Contact & Support</strong> section on the Home tab.'
    },
    {
      q: 'Who do I contact for technical / system issues?',
      a: 'For technical issues such as login errors or system access problems, please contact your Giant Group IT support team. The IT support email is listed in the <strong>Contact & Support</strong> section on the Home tab.'
    },
  ],

  /* ── 繁體中文 ─────────────────────────────────────────────── */
  'zh-TW': [
    {
      q: '系統支援哪些瀏覽器？',
      a: '系統已針對 <strong>Google Chrome</strong> 最佳化。如果遇到顯示問題，請確保您的瀏覽器已更新至最新版本。其他現代瀏覽器（Edge、Firefox、Safari）可能可以使用，但不在官方支援範圍內。'
    },
    {
      q: '我無法登入，該怎麼辦？',
      a: '請依下列步驟排除：<br><br>'
       + '1. 若您是 GSC 內部員工，請點擊 <strong>AAD</strong> 按鈕，使用企業 Microsoft 帳號登入。<br>'
       + '2. 若您是經銷商或直營店店長，請使用電子郵件和密碼登入。<br>'
       + '3. 如果忘記密碼，請在登入頁面點擊 <em>「忘記密碼？」</em>。<br>'
       + '4. 若問題仍然存在，請聯繫您的 Giant Group IT 管理員。'
    },
    {
      q: '如何更新訂單狀態？',
      a: '在訂單儀表板中點擊訂單旁的 <strong>「編輯」</strong> 開啟訂單詳情頁面。在頁面頂部點擊狀態下拉選單，選擇新狀態後點擊 <strong>「儲存」</strong> 即可。'
    },
    {
      q: '可以下載訂單資料嗎？',
      a: '可以。在任何訂單詳情頁面，點擊 <strong>「下載 CSV」</strong> 按鈕，即可將訂單資料匯出為 CSV 檔案，方便記錄保存或與沒有系統存取權限的同事共用。'
    },
    {
      q: '頁面顯示異常，如何解決？',
      a: '請嘗試清除瀏覽器快取：在 Chrome 中按下 <strong>Ctrl + Shift + Delete</strong>（Windows）或 <strong>Cmd + Shift + Delete</strong>（Mac），勾選「已快取的圖片和檔案」，然後點擊「清除資料」，再重新整理頁面。'
    },
    {
      q: '訂單相關問題要找誰？',
      a: '如有訂單相關查詢（例如付款爭議、出貨延誤），請聯繫首頁 <strong>「聯繫支援」</strong> 區塊中對應市場的負責人。'
    },
    {
      q: '系統或技術問題要找誰？',
      a: '如有登入錯誤、系統存取等技術問題，請聯繫您的 Giant Group IT 支援團隊。IT 支援信箱可在首頁 <strong>「聯繫支援」</strong> 區塊查閱。'
    },
  ],

};
