/* ============================================================
   FAQ Data File
   ────────────────────────────────────────────────────────────
   編輯此檔案以新增、修改或刪除 FAQ 條目。
   - 支援 en（英文）和 zh-TW（繁體中文）
   - 其他語言自動顯示英文內容
   - a 欄位可使用 HTML（如 <strong>、<a> 等）
   - 特殊標記 {{it_support_email}} 會自動替換為 config.js 中的 IT 支援信箱
   - 新增條目：在陣列最後一個 } 後面加逗號，再加新物件
   ============================================================ */

window.FAQ = {

  /* ── English ─────────────────────────────────────────────── */
  'en': [

    /* —— Login / System —— */
    {
      q: 'What is my login account for the Configuration Portal? Do I need a password?',
      a: 'Your account is your <strong>email address</strong>. The password is the one you created when your account was set up. If you already have a DCF account, please use the same credentials to log in.'
    },
    {
      q: 'Why can\'t I log in to the Configuration Portal?',
      a: 'Please confirm that you have been granted access to the Bike Customization Configuration Portal (<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>). To request access, please contact your GSC representative.'
    },
    {
      q: 'Why can\'t I see any orders after logging in?',
      a: 'Please first confirm that the order was submitted successfully on the consumer site. If the order was placed but does not appear, take a screenshot and send it to the system administrator at: {{it_support_email}}'
    },
    {
      q: 'What browsers are supported?',
      a: 'The system is optimized for <strong>Google Chrome</strong>. If you experience display issues, please ensure your browser is up to date. Other modern browsers (Edge, Firefox, Safari) may work but are not officially supported.'
    },
    {
      q: 'Why does the page not display correctly?',
      a: 'Try clearing your browser cache: In Chrome, press <strong>Ctrl + Shift + Delete</strong> (Windows) or <strong>Cmd + Shift + Delete</strong> (Mac), select "Cached images and files", and click "Clear data". Then reload the page.'
    },

    /* —— Orders —— */
    {
      q: 'Why aren\'t custom bike orders shown in the dealer portal like e-Commerce orders?',
      a: 'The custom bike website and the dealer portal are <strong>separate systems</strong> that are not currently integrated. Custom bike orders must be managed through the Configuration Portal (<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>).'
    },
    {
      q: 'How do I update an order status?',
      a: 'Open the order from the Orders Dashboard by clicking <strong>Edit</strong> next to it. At the top of the order detail page, click the status dropdown, select the new status, and click <strong>Save</strong>.'
    },
    {
      q: 'How do I modify an order after it has been placed?',
      a: 'Log in to the Configuration Portal, find the order in the Orders Dashboard, and click <strong>Edit</strong> to open the order detail page where you can make changes.'
    },
    {
      q: 'A customer wants to cancel their order. How do I cancel it?',
      a: 'To cancel an order, please notify your <strong>GSC representative</strong>. Do not attempt to cancel orders directly without authorization.'
    },
    {
      q: 'Can I download order data?',
      a: 'Yes. On any order detail page, click the <strong>Download CSV</strong> button to export the order data as a CSV file. This is useful for record-keeping or sharing with colleagues who do not have system access.'
    },

    /* —— Support —— */
    {
      q: 'Who do I contact for order-related issues?',
      a: 'For order-related inquiries (e.g., payment disputes, shipping delays), please contact the relevant market representative listed in the <strong>Contact & Support</strong> section on the Home tab.'
    },
    {
      q: 'Who do I contact for technical / system issues?',
      a: 'For technical issues such as login errors or system access problems, please contact the IT support team at: {{it_support_email}}'
    },

  ],

  /* ── 繁體中文 ─────────────────────────────────────────────── */
  'zh-TW': [

    /* —— 系統登入相關 —— */
    {
      q: '我登入 Configuration Portal 的帳號是什麼？需要密碼嗎？',
      a: '帳號為您的<strong>電子郵件地址</strong>，密碼為您開帳號時所創建。若您已有 DCF 帳號，請使用同一組帳號密碼登入。'
    },
    {
      q: '為什麼我無法登入 Configuration Portal？',
      a: '請確認您已申請 Bike Customization Configuration Portal（<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>）的存取權限。申請權限請洽各 GSC 負責人。'
    },
    {
      q: '為什麼登入 Configuration Portal 後看不到訂單？',
      a: '請先確認訂單已在消費者網站成功送出。若訂單已建立但未出現在系統中，請截圖寄給系統負責人：{{it_support_email}}'
    },
    {
      q: '系統支援哪些瀏覽器？',
      a: '系統已針對 <strong>Google Chrome</strong> 最佳化。如果遇到顯示問題，請確保您的瀏覽器已更新至最新版本。其他現代瀏覽器（Edge、Firefox、Safari）可能可以使用，但不在官方支援範圍內。'
    },
    {
      q: '頁面顯示異常，如何解決？',
      a: '請嘗試清除瀏覽器快取：在 Chrome 中按下 <strong>Ctrl + Shift + Delete</strong>（Windows）或 <strong>Cmd + Shift + Delete</strong>（Mac），勾選「已快取的圖片和檔案」，然後點擊「清除資料」，再重新整理頁面。'
    },

    /* —— 訂單相關 —— */
    {
      q: '為什麼客製車訂單不像 e-Commerce 訂單出現在 dealer portal？',
      a: '因為客製車網站和 dealer portal 屬於<strong>不同系統</strong>，目前未串接。客製車訂單需透過 Configuration Portal（<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>）管理。'
    },
    {
      q: '如何更新訂單狀態？',
      a: '在訂單儀表板中點擊訂單旁的 <strong>「編輯」</strong> 開啟訂單詳情頁面。在頁面頂部點擊狀態下拉選單，選擇新狀態後點擊 <strong>「儲存」</strong> 即可。'
    },
    {
      q: '訂單建立後，如何修改訂單？',
      a: '登入 Configuration Portal，在訂單儀表板中找到該訂單，點擊 <strong>Edit</strong> 開啟訂單詳情頁面進行修改。'
    },
    {
      q: '客人要取消訂單，該如何取消？',
      a: '取消訂單請通知各 <strong>GSC 負責人</strong>，請勿自行取消訂單。'
    },
    {
      q: '可以下載訂單資料嗎？',
      a: '可以。在任何訂單詳情頁面，點擊 <strong>「下載 CSV」</strong> 按鈕，即可將訂單資料匯出為 CSV 檔案，方便記錄保存或與沒有系統存取權限的同事共用。'
    },

    /* —— 聯繫支援 —— */
    {
      q: '訂單相關問題要找誰？',
      a: '如有訂單相關查詢（例如付款爭議、出貨延誤），請聯繫首頁 <strong>「聯繫支援」</strong> 區塊中對應市場的負責人。'
    },
    {
      q: '系統或技術問題要找誰？',
      a: '如有登入錯誤、系統存取等技術問題，請聯繫 IT 支援團隊：{{it_support_email}}'
    },

  ],

};
