/* ============================================================
   FAQ Data File
   ────────────────────────────────────────────────────────────
   編輯此檔案以新增、修改或刪除 FAQ 條目。
   - 支援 en（英文）和 zh-TW（繁體中文）
   - 其他語言自動顯示英文內容
   - a 欄位可使用 HTML（如 <strong>、<a> 等）
   - 特殊標記 {{it_support_email}} 會自動替換為 config.js 中的 IT 支援信箱
   - { section: '...' } 物件會渲染為分類標題（不可點擊）
   ============================================================ */

window.FAQ = {

  /* ── English ─────────────────────────────────────────────── */
  'en': [

    /* ── Section header ── */
    { section: 'System & Login' },

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
    {
      q: 'Who do I contact for technical / system issues?',
      a: 'For technical issues such as login errors or system access problems, please contact the IT support team at: {{it_support_email}}'
    },

    /* ── Section header ── */
    { section: 'Order-Related' },

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
    {
      q: 'Who do I contact for order-related issues?',
      a: 'For order-related inquiries (e.g., payment disputes, shipping delays), please contact the relevant market representative listed in the <strong>Contact & Support</strong> section on the Home tab.'
    },

  ],

  /* ── 繁體中文 ─────────────────────────────────────────────── */
  'zh-TW': [

    /* ── 分類標題 ── */
    { section: '系統相關' },

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
    {
      q: '系統或技術問題要找誰？',
      a: '如有登入錯誤、系統存取等技術問題，請聯繫 IT 支援團隊：{{it_support_email}}'
    },

    /* ── 分類標題 ── */
    { section: '訂單相關' },

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
    {
      q: '訂單相關問題要找誰？',
      a: '如有訂單相關查詢（例如付款爭議、出貨延誤），請聯繫首頁 <strong>「聯繫支援」</strong> 區塊中對應市場的負責人。'
    },

  ],

  /* ── 日本語 ───────────────────────────────────────────────── */
  'ja': [

    { section: 'システム・ログイン関連' },

    {
      q: 'Configuration Portal のログインアカウントは何ですか？パスワードは必要ですか？',
      a: 'アカウントは<strong>メールアドレス</strong>です。パスワードはアカウント作成時に設定したものをご使用ください。DCF アカウントをお持ちの場合は、同じ認証情報でログインしてください。'
    },
    {
      q: 'Configuration Portal にログインできないのはなぜですか？',
      a: 'Bike Customization Configuration Portal（<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>）へのアクセス権限が付与されているかご確認ください。アクセス権限の申請については、担当の GSC 担当者にお問い合わせください。'
    },
    {
      q: 'ログイン後に注文が表示されないのはなぜですか？',
      a: 'まず、コンシューマーサイトで注文が正常に送信されたかをご確認ください。注文が作成されているにもかかわらずシステムに表示されない場合は、スクリーンショットを撮り、システム管理者（{{it_support_email}}）にお送りください。'
    },
    {
      q: '対応しているブラウザは何ですか？',
      a: 'システムは <strong>Google Chrome</strong> に最適化されています。表示に問題が発生した場合は、ブラウザが最新バージョンに更新されているかご確認ください。他のモダンブラウザ（Edge、Firefox、Safari）は動作する場合がありますが、公式サポート対象外です。'
    },
    {
      q: 'ページが正しく表示されない場合はどうすればよいですか？',
      a: 'ブラウザのキャッシュをクリアしてください。Chrome の場合、<strong>Ctrl + Shift + Delete</strong>（Windows）または <strong>Cmd + Shift + Delete</strong>（Mac）を押し、「キャッシュされた画像とファイル」を選択して「データを削除」をクリックし、ページを再読み込みしてください。'
    },
    {
      q: '技術的な問題・システム問題はどこに連絡すればよいですか？',
      a: 'ログインエラーやシステムアクセスなどの技術的な問題については、IT サポートチーム（{{it_support_email}}）にお問い合わせください。'
    },

    { section: '注文関連' },

    {
      q: 'カスタムバイクの注文が e-Commerce 注文のようにディーラーポータルに表示されないのはなぜですか？',
      a: 'カスタムバイクサイトとディーラーポータルは<strong>別々のシステム</strong>であり、現在は統合されていません。カスタムバイクの注文は Configuration Portal（<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>）で管理してください。'
    },
    {
      q: '注文ステータスを更新するにはどうすればよいですか？',
      a: '注文ダッシュボードで該当注文の横の <strong>「編集」</strong> をクリックして注文詳細ページを開きます。ページ上部のステータスドロップダウンをクリックし、新しいステータスを選択して <strong>「保存」</strong> をクリックしてください。'
    },
    {
      q: '注文が作成された後に変更するにはどうすればよいですか？',
      a: 'Configuration Portal にログインし、注文ダッシュボードで該当注文を見つけ、<strong>「Edit」</strong> をクリックして注文詳細ページを開き、変更を行ってください。'
    },
    {
      q: 'お客様が注文をキャンセルしたい場合はどうすればよいですか？',
      a: '注文のキャンセルは担当の <strong>GSC 担当者</strong> にご連絡ください。無断でキャンセル操作を行わないでください。'
    },
    {
      q: '注文データをダウンロードできますか？',
      a: 'はい。注文詳細ページで <strong>「CSV ダウンロード」</strong> ボタンをクリックすると、注文データを CSV ファイルとしてエクスポートできます。記録の保存や、システムアクセス権限を持たない同僚との共有に便利です。'
    },
    {
      q: '注文に関する問題はどこに連絡すればよいですか？',
      a: '注文に関するお問い合わせ（支払い紛争、配送遅延など）については、ホームタブの <strong>「連絡先・サポート」</strong> セクションに記載されている各市場の担当者にお問い合わせください。'
    },

  ],

  /* ── Nederlands ───────────────────────────────────────────── */
  'nl': [

    { section: 'Systeem & Inloggen' },

    {
      q: 'Wat is mijn inlogaccount voor het Configuratieportaal? Heb ik een wachtwoord nodig?',
      a: 'Uw account is uw <strong>e-mailadres</strong>. Het wachtwoord is het wachtwoord dat u aanmaakte toen uw account werd ingesteld. Als u al een DCF-account heeft, gebruik dan dezelfde inloggegevens.'
    },
    {
      q: 'Waarom kan ik niet inloggen op het Configuratieportaal?',
      a: 'Bevestig eerst dat u toegang heeft gekregen tot het Bike Customization Configuratieportaal (<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>). Neem voor toegangsverzoeken contact op met uw GSC-vertegenwoordiger.'
    },
    {
      q: 'Waarom zie ik geen bestellingen na het inloggen?',
      a: 'Bevestig eerst dat de bestelling succesvol is ingediend op de consumentensite. Als de bestelling is geplaatst maar niet verschijnt, maak dan een screenshot en stuur dit naar de systeembeheerder: {{it_support_email}}'
    },
    {
      q: 'Welke browsers worden ondersteund?',
      a: 'Het systeem is geoptimaliseerd voor <strong>Google Chrome</strong>. Als u weergaveproblemen ondervindt, zorg er dan voor dat uw browser up-to-date is. Andere moderne browsers (Edge, Firefox, Safari) kunnen werken maar worden niet officieel ondersteund.'
    },
    {
      q: 'Waarom wordt de pagina niet correct weergegeven?',
      a: 'Probeer uw browsercache te wissen: druk in Chrome op <strong>Ctrl + Shift + Delete</strong> (Windows) of <strong>Cmd + Shift + Delete</strong> (Mac), selecteer "Gecachte afbeeldingen en bestanden" en klik op "Gegevens wissen". Laad de pagina daarna opnieuw.'
    },
    {
      q: 'Bij wie kan ik terecht voor technische/systeemproblemen?',
      a: 'Voor technische problemen zoals inlogfouten of problemen met systeemtoegang kunt u contact opnemen met het IT-ondersteuningsteam: {{it_support_email}}'
    },

    { section: 'Bestellingen' },

    {
      q: 'Waarom verschijnen bestellingen voor aangepaste fietsen niet in het dealerportaal zoals e-Commerce bestellingen?',
      a: 'De website voor aangepaste fietsen en het dealerportaal zijn <strong>aparte systemen</strong> die momenteel niet zijn geïntegreerd. Bestellingen voor aangepaste fietsen moeten worden beheerd via het Configuratieportaal (<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>).'
    },
    {
      q: 'Hoe update ik een bestelstatus?',
      a: 'Open de bestelling vanuit het Dashboard door naast de bestelling op <strong>Bewerken</strong> te klikken. Klik bovenaan de bestelpagina op het statusmenu, selecteer de nieuwe status en klik op <strong>Opslaan</strong>.'
    },
    {
      q: 'Hoe kan ik een bestelling aanpassen nadat deze is geplaatst?',
      a: 'Log in op het Configuratieportaal, zoek de bestelling in het Dashboard en klik op <strong>Bewerken</strong> om de detailpagina van de bestelling te openen waar u wijzigingen kunt aanbrengen.'
    },
    {
      q: 'Een klant wil zijn bestelling annuleren. Hoe annuleer ik deze?',
      a: 'Om een bestelling te annuleren, informeer uw <strong>GSC-vertegenwoordiger</strong>. Probeer geen bestellingen zonder toestemming te annuleren.'
    },
    {
      q: 'Kan ik bestelgegevens downloaden?',
      a: 'Ja. Klik op elke bestellingspagina op de knop <strong>CSV downloaden</strong> om de bestelgegevens te exporteren als CSV-bestand. Dit is handig voor archivering of het delen met collega\'s zonder systeemtoegang.'
    },
    {
      q: 'Bij wie kan ik terecht voor bestelling-gerelateerde problemen?',
      a: 'Voor bestelling-gerelateerde vragen (bijv. betalingsgeschillen, vertragingen in de verzending) kunt u contact opnemen met de relevante marktvertegenwoordiger in de sectie <strong>Contact & Ondersteuning</strong> op het tabblad Home.'
    },

  ],

  /* ── 한국어 ───────────────────────────────────────────────── */
  'ko': [

    { section: '시스템 및 로그인' },

    {
      q: 'Configuration Portal 로그인 계정이 무엇인가요? 비밀번호가 필요한가요?',
      a: '계정은 <strong>이메일 주소</strong>입니다. 비밀번호는 계정 생성 시 만든 것을 사용하시면 됩니다. DCF 계정이 이미 있는 경우 동일한 자격 증명으로 로그인하세요.'
    },
    {
      q: 'Configuration Portal에 로그인할 수 없는 이유는 무엇인가요?',
      a: 'Bike Customization Configuration Portal(<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>)에 대한 접근 권한이 부여되었는지 확인하세요. 접근 권한 요청은 담당 GSC 담당자에게 문의하세요.'
    },
    {
      q: '로그인 후 주문이 보이지 않는 이유는 무엇인가요?',
      a: '먼저 소비자 사이트에서 주문이 성공적으로 제출되었는지 확인하세요. 주문이 접수되었지만 나타나지 않는 경우 스크린샷을 찍어 시스템 관리자({{it_support_email}})에게 보내주세요.'
    },
    {
      q: '지원되는 브라우저는 무엇인가요?',
      a: '시스템은 <strong>Google Chrome</strong>에 최적화되어 있습니다. 표시 문제가 발생하면 브라우저가 최신 버전으로 업데이트되어 있는지 확인하세요. 다른 최신 브라우저(Edge, Firefox, Safari)도 작동할 수 있지만 공식 지원은 아닙니다.'
    },
    {
      q: '페이지가 올바르게 표시되지 않는 이유는 무엇인가요?',
      a: '브라우저 캐시를 지워보세요. Chrome에서 <strong>Ctrl + Shift + Delete</strong>(Windows) 또는 <strong>Cmd + Shift + Delete</strong>(Mac)를 누르고 "캐시된 이미지 및 파일"을 선택한 후 "데이터 삭제"를 클릭하세요. 그런 다음 페이지를 새로 고침하세요.'
    },
    {
      q: '기술적/시스템 문제가 있을 때 누구에게 연락해야 하나요?',
      a: '로그인 오류나 시스템 접근 문제와 같은 기술적 문제는 IT 지원팀({{it_support_email}})에 문의하세요.'
    },

    { section: '주문 관련' },

    {
      q: '맞춤형 자전거 주문이 e-Commerce 주문처럼 딜러 포털에 표시되지 않는 이유는 무엇인가요?',
      a: '맞춤형 자전거 웹사이트와 딜러 포털은 현재 통합되지 않은 <strong>별도의 시스템</strong>입니다. 맞춤형 자전거 주문은 Configuration Portal(<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>)을 통해 관리해야 합니다.'
    },
    {
      q: '주문 상태를 어떻게 업데이트하나요?',
      a: '주문 옆의 <strong>편집</strong>을 클릭하여 주문 대시보드에서 주문을 엽니다. 주문 상세 페이지 상단에서 상태 드롭다운을 클릭하고, 새 상태를 선택한 후 <strong>저장</strong>을 클릭하세요.'
    },
    {
      q: '주문이 접수된 후 어떻게 수정하나요?',
      a: 'Configuration Portal에 로그인하여 주문 대시보드에서 해당 주문을 찾고 <strong>편집</strong>을 클릭하여 주문 상세 페이지를 열고 변경 사항을 적용하세요.'
    },
    {
      q: '고객이 주문을 취소하려고 합니다. 어떻게 취소하나요?',
      a: '주문 취소는 <strong>GSC 담당자</strong>에게 알려주세요. 허가 없이 주문을 직접 취소하지 마세요.'
    },
    {
      q: '주문 데이터를 다운로드할 수 있나요?',
      a: '네. 주문 상세 페이지에서 <strong>CSV 다운로드</strong> 버튼을 클릭하면 주문 데이터를 CSV 파일로 내보낼 수 있습니다. 기록 보관이나 시스템 접근 권한이 없는 동료와 공유할 때 유용합니다.'
    },
    {
      q: '주문 관련 문제가 있을 때 누구에게 연락해야 하나요?',
      a: '주문 관련 문의(예: 결제 분쟁, 배송 지연)는 홈 탭의 <strong>연락처 및 지원</strong> 섹션에 나열된 해당 시장 담당자에게 연락하세요.'
    },

  ],

  /* ── ภาษาไทย ──────────────────────────────────────────────── */
  'th': [

    { section: 'ระบบและการเข้าสู่ระบบ' },

    {
      q: 'บัญชีสำหรับเข้าสู่ระบบ Configuration Portal คืออะไร? ต้องใช้รหัสผ่านหรือไม่?',
      a: 'บัญชีของคุณคือ<strong>ที่อยู่อีเมล</strong> รหัสผ่านคือรหัสผ่านที่คุณสร้างเมื่อตั้งค่าบัญชี หากคุณมีบัญชี DCF อยู่แล้ว กรุณาใช้ข้อมูลรับรองเดิมในการเข้าสู่ระบบ'
    },
    {
      q: 'ทำไมฉันไม่สามารถเข้าสู่ระบบ Configuration Portal ได้?',
      a: 'กรุณาตรวจสอบว่าคุณได้รับสิทธิ์เข้าถึง Bike Customization Configuration Portal (<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>) แล้วหรือยัง หากต้องการขอสิทธิ์เข้าถึง กรุณาติดต่อผู้ดูแล GSC ของคุณ'
    },
    {
      q: 'ทำไมหลังจากเข้าสู่ระบบแล้วไม่เห็นคำสั่งซื้อ?',
      a: 'กรุณาตรวจสอบก่อนว่าคำสั่งซื้อถูกส่งสำเร็จบนเว็บไซต์ผู้บริโภค หากคำสั่งซื้อถูกสร้างแล้วแต่ไม่ปรากฏ กรุณาถ่ายภาพหน้าจอและส่งให้ผู้ดูแลระบบที่: {{it_support_email}}'
    },
    {
      q: 'รองรับเบราว์เซอร์ใดบ้าง?',
      a: 'ระบบได้รับการปรับแต่งสำหรับ <strong>Google Chrome</strong> หากพบปัญหาการแสดงผล กรุณาตรวจสอบว่าเบราว์เซอร์ของคุณอัปเดตเป็นเวอร์ชันล่าสุดแล้ว เบราว์เซอร์สมัยใหม่อื่นๆ (Edge, Firefox, Safari) อาจใช้งานได้แต่ไม่ได้รับการสนับสนุนอย่างเป็นทางการ'
    },
    {
      q: 'ทำไมหน้าเว็บไม่แสดงผลอย่างถูกต้อง?',
      a: 'ลองล้างแคชเบราว์เซอร์: ใน Chrome กด <strong>Ctrl + Shift + Delete</strong> (Windows) หรือ <strong>Cmd + Shift + Delete</strong> (Mac) เลือก "รูปภาพและไฟล์ที่แคชไว้" แล้วคลิก "ล้างข้อมูล" จากนั้นโหลดหน้าเว็บใหม่'
    },
    {
      q: 'ควรติดต่อใครสำหรับปัญหาทางเทคนิค/ระบบ?',
      a: 'สำหรับปัญหาทางเทคนิค เช่น ข้อผิดพลาดในการเข้าสู่ระบบหรือปัญหาการเข้าถึงระบบ กรุณาติดต่อทีมสนับสนุน IT ที่: {{it_support_email}}'
    },

    { section: 'เกี่ยวกับคำสั่งซื้อ' },

    {
      q: 'ทำไมคำสั่งซื้อจักรยานแบบกำหนดเองจึงไม่แสดงในพอร์ทัลตัวแทนจำหน่ายเหมือนคำสั่งซื้อ e-Commerce?',
      a: 'เว็บไซต์จักรยานแบบกำหนดเองและพอร์ทัลตัวแทนจำหน่ายเป็น<strong>ระบบแยกกัน</strong>ที่ยังไม่ได้รวมกัน คำสั่งซื้อจักรยานแบบกำหนดเองต้องจัดการผ่าน Configuration Portal (<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>)'
    },
    {
      q: 'วิธีอัปเดตสถานะคำสั่งซื้อ?',
      a: 'เปิดคำสั่งซื้อจาก Orders Dashboard โดยคลิก <strong>แก้ไข</strong> ที่อยู่ถัดจากคำสั่งซื้อ ที่ด้านบนของหน้าคำสั่งซื้อ คลิกเมนูแบบเลื่อนลงสถานะ เลือกสถานะใหม่ แล้วคลิก <strong>บันทึก</strong>'
    },
    {
      q: 'วิธีแก้ไขคำสั่งซื้อหลังจากสั่งซื้อแล้ว?',
      a: 'เข้าสู่ระบบ Configuration Portal ค้นหาคำสั่งซื้อใน Orders Dashboard แล้วคลิก <strong>แก้ไข</strong> เพื่อเปิดหน้าคำสั่งซื้อและทำการเปลี่ยนแปลง'
    },
    {
      q: 'ลูกค้าต้องการยกเลิกคำสั่งซื้อ จะยกเลิกอย่างไร?',
      a: 'หากต้องการยกเลิกคำสั่งซื้อ กรุณาแจ้ง<strong>ผู้ดูแล GSC</strong> ของคุณ อย่าพยายามยกเลิกคำสั่งซื้อโดยตรงโดยไม่ได้รับอนุญาต'
    },
    {
      q: 'สามารถดาวน์โหลดข้อมูลคำสั่งซื้อได้หรือไม่?',
      a: 'ได้ ในหน้าคำสั่งซื้อใดก็ได้ คลิกปุ่ม <strong>ดาวน์โหลด CSV</strong> เพื่อส่งออกข้อมูลคำสั่งซื้อเป็นไฟล์ CSV เหมาะสำหรับการเก็บบันทึกหรือแบ่งปันกับเพื่อนร่วมงานที่ไม่มีสิทธิ์เข้าถึงระบบ'
    },
    {
      q: 'ควรติดต่อใครสำหรับปัญหาเกี่ยวกับคำสั่งซื้อ?',
      a: 'สำหรับข้อสอบถามเกี่ยวกับคำสั่งซื้อ (เช่น ข้อพิพาทการชำระเงิน ความล่าช้าในการจัดส่ง) กรุณาติดต่อผู้แทนตลาดที่เกี่ยวข้องที่ระบุไว้ในส่วน <strong>ติดต่อและสนับสนุน</strong> บนแท็บหน้าแรก'
    },

  ],

  /* ── Deutsch ──────────────────────────────────────────────── */
  'de': [

    { section: 'System & Anmeldung' },

    {
      q: 'Was ist mein Anmeldekonto für das Konfigurationsportal? Brauche ich ein Passwort?',
      a: 'Ihr Konto ist Ihre <strong>E-Mail-Adresse</strong>. Das Passwort ist das, das Sie bei der Einrichtung Ihres Kontos erstellt haben. Wenn Sie bereits ein DCF-Konto haben, verwenden Sie bitte dieselben Anmeldedaten.'
    },
    {
      q: 'Warum kann ich mich nicht beim Konfigurationsportal anmelden?',
      a: 'Bitte stellen Sie sicher, dass Ihnen Zugriff auf das Bike Customization Konfigurationsportal (<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>) gewährt wurde. Um Zugriff anzufordern, wenden Sie sich bitte an Ihren GSC-Vertreter.'
    },
    {
      q: 'Warum werden nach der Anmeldung keine Bestellungen angezeigt?',
      a: 'Bitte bestätigen Sie zuerst, dass die Bestellung auf der Verbraucherwebsite erfolgreich eingereicht wurde. Wenn die Bestellung aufgegeben wurde, aber nicht angezeigt wird, machen Sie einen Screenshot und senden Sie ihn an den Systemadministrator: {{it_support_email}}'
    },
    {
      q: 'Welche Browser werden unterstützt?',
      a: 'Das System ist für <strong>Google Chrome</strong> optimiert. Wenn Sie Anzeigeprobleme haben, stellen Sie sicher, dass Ihr Browser auf dem neuesten Stand ist. Andere moderne Browser (Edge, Firefox, Safari) können funktionieren, werden aber nicht offiziell unterstützt.'
    },
    {
      q: 'Warum wird die Seite nicht korrekt angezeigt?',
      a: 'Versuchen Sie, den Browser-Cache zu leeren: Drücken Sie in Chrome <strong>Strg + Umschalt + Entf</strong> (Windows) oder <strong>Cmd + Umschalt + Entf</strong> (Mac), wählen Sie „Bilder und Dateien im Cache" aus und klicken Sie auf „Daten löschen". Laden Sie dann die Seite neu.'
    },
    {
      q: 'An wen wende ich mich bei technischen Problemen?',
      a: 'Bei technischen Problemen wie Anmeldefehlern oder Systemzugriffsproblemen wenden Sie sich bitte an das IT-Support-Team: {{it_support_email}}'
    },

    { section: 'Bestellungen' },

    {
      q: 'Warum werden Bestellungen für individuelle Fahrräder nicht wie E-Commerce-Bestellungen im Händlerportal angezeigt?',
      a: 'Die Website für individuelle Fahrräder und das Händlerportal sind <strong>separate Systeme</strong>, die derzeit nicht integriert sind. Bestellungen für individuelle Fahrräder müssen über das Konfigurationsportal (<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>) verwaltet werden.'
    },
    {
      q: 'Wie aktualisiere ich einen Bestellstatus?',
      a: 'Öffnen Sie die Bestellung aus dem Bestelldashboard, indem Sie neben der Bestellung auf <strong>Bearbeiten</strong> klicken. Klicken Sie oben auf der Bestelldetailseite auf das Status-Dropdown, wählen Sie den neuen Status aus und klicken Sie auf <strong>Speichern</strong>.'
    },
    {
      q: 'Wie ändere ich eine Bestellung nach der Aufgabe?',
      a: 'Melden Sie sich im Konfigurationsportal an, finden Sie die Bestellung im Bestelldashboard und klicken Sie auf <strong>Bearbeiten</strong>, um die Bestelldetailseite zu öffnen und Änderungen vorzunehmen.'
    },
    {
      q: 'Ein Kunde möchte seine Bestellung stornieren. Wie storniere ich sie?',
      a: 'Um eine Bestellung zu stornieren, benachrichtigen Sie bitte Ihren <strong>GSC-Vertreter</strong>. Versuchen Sie nicht, Bestellungen ohne Genehmigung direkt zu stornieren.'
    },
    {
      q: 'Kann ich Bestelldaten herunterladen?',
      a: 'Ja. Klicken Sie auf jeder Bestelldetailseite auf die Schaltfläche <strong>CSV herunterladen</strong>, um die Bestelldaten als CSV-Datei zu exportieren. Dies ist nützlich für die Aufzeichnung oder die Weitergabe an Kollegen ohne Systemzugang.'
    },
    {
      q: 'An wen wende ich mich bei bestellungsbezogenen Problemen?',
      a: 'Für bestellungsbezogene Anfragen (z. B. Zahlungsstreitigkeiten, Lieferverzögerungen) wenden Sie sich bitte an den entsprechenden Marktvertreter im Abschnitt <strong>Kontakt & Support</strong> auf der Registerkarte „Startseite".'
    },

  ],

  /* ── Français ─────────────────────────────────────────────── */
  'fr': [

    { section: 'Système & Connexion' },

    {
      q: 'Quel est mon compte de connexion pour le Portail de Configuration ? Ai-je besoin d\'un mot de passe ?',
      a: 'Votre compte est votre <strong>adresse e-mail</strong>. Le mot de passe est celui que vous avez créé lors de la configuration de votre compte. Si vous avez déjà un compte DCF, veuillez utiliser les mêmes identifiants pour vous connecter.'
    },
    {
      q: 'Pourquoi ne puis-je pas me connecter au Portail de Configuration ?',
      a: 'Veuillez confirmer que vous avez bien reçu l\'accès au Portail de Configuration des vélos personnalisés (<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>). Pour demander un accès, veuillez contacter votre représentant GSC.'
    },
    {
      q: 'Pourquoi ne vois-je pas de commandes après la connexion ?',
      a: 'Veuillez d\'abord confirmer que la commande a bien été soumise sur le site consommateur. Si la commande a été passée mais n\'apparaît pas, prenez une capture d\'écran et envoyez-la à l\'administrateur système : {{it_support_email}}'
    },
    {
      q: 'Quels navigateurs sont pris en charge ?',
      a: 'Le système est optimisé pour <strong>Google Chrome</strong>. Si vous rencontrez des problèmes d\'affichage, assurez-vous que votre navigateur est à jour. D\'autres navigateurs modernes (Edge, Firefox, Safari) peuvent fonctionner mais ne sont pas officiellement pris en charge.'
    },
    {
      q: 'Pourquoi la page ne s\'affiche-t-elle pas correctement ?',
      a: 'Essayez de vider le cache de votre navigateur : dans Chrome, appuyez sur <strong>Ctrl + Shift + Suppr</strong> (Windows) ou <strong>Cmd + Shift + Suppr</strong> (Mac), sélectionnez « Images et fichiers en cache » et cliquez sur « Effacer les données ». Rechargez ensuite la page.'
    },
    {
      q: 'Qui dois-je contacter pour les problèmes techniques/système ?',
      a: 'Pour les problèmes techniques tels que les erreurs de connexion ou les problèmes d\'accès au système, veuillez contacter l\'équipe de support informatique : {{it_support_email}}'
    },

    { section: 'Commandes' },

    {
      q: 'Pourquoi les commandes de vélos personnalisés n\'apparaissent-elles pas dans le portail concessionnaire comme les commandes e-Commerce ?',
      a: 'Le site de vélos personnalisés et le portail concessionnaire sont des <strong>systèmes distincts</strong> qui ne sont pas actuellement intégrés. Les commandes de vélos personnalisés doivent être gérées via le Portail de Configuration (<a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>).'
    },
    {
      q: 'Comment mettre à jour le statut d\'une commande ?',
      a: 'Ouvrez la commande depuis le tableau de bord des commandes en cliquant sur <strong>Modifier</strong> à côté de la commande. En haut de la page de détail de la commande, cliquez sur le menu déroulant de statut, sélectionnez le nouveau statut et cliquez sur <strong>Enregistrer</strong>.'
    },
    {
      q: 'Comment modifier une commande après sa passation ?',
      a: 'Connectez-vous au Portail de Configuration, trouvez la commande dans le tableau de bord et cliquez sur <strong>Modifier</strong> pour ouvrir la page de détail de la commande et apporter des modifications.'
    },
    {
      q: 'Un client souhaite annuler sa commande. Comment l\'annuler ?',
      a: 'Pour annuler une commande, veuillez informer votre <strong>représentant GSC</strong>. N\'essayez pas d\'annuler des commandes directement sans autorisation.'
    },
    {
      q: 'Puis-je télécharger les données de commande ?',
      a: 'Oui. Sur n\'importe quelle page de détail de commande, cliquez sur le bouton <strong>Télécharger CSV</strong> pour exporter les données de commande en tant que fichier CSV. C\'est utile pour la tenue de registres ou pour partager avec des collègues qui n\'ont pas accès au système.'
    },
    {
      q: 'Qui contacter pour les problèmes liés aux commandes ?',
      a: 'Pour les demandes liées aux commandes (par ex., litiges de paiement, retards d\'expédition), veuillez contacter le représentant du marché concerné dans la section <strong>Contact & Support</strong> de l\'onglet Accueil.'
    },

  ],

};
