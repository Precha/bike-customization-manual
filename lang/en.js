/* ============================================================
   Language: English (en)
   ============================================================ */
window.i18n = window.i18n || {};
window.i18n['en'] = {

  meta_title: 'Giant Custom Bike — User Manual',

  /* ── Top UI ─────────────────────────────────────────────── */
  tab_home     : 'Home',
  tab_consumer : 'Consumer Site',
  tab_config   : 'Configuration Portal',
  tab_shopify  : 'Shopify (GSC Only)',
  lang_label   : 'Language',

  /* ══════════════════════════════════════════════════════════
     HOME PAGE
     ══════════════════════════════════════════════════════════ */

  /* Sidebar nav */
  home_nav_intro    : '1. Introduction',
  home_nav_audience : '2. Target Audience',
  home_nav_support  : '3. Contact & Support',
  home_nav_version  : '4. Version Info',

  /* 1. Introduction */
  home_s1_heading : '1. Introduction',
  home_s1_welcome : 'Welcome to the Giant Custom Bike User Manual',
  home_s1_p1      : 'This manual is the official guide for the Giant Group Custom Bike platform — a fully integrated system that connects consumers, dealers, and Giant internal staff through the custom bike ordering journey.',
  home_s1_p2      : 'The platform consists of three interconnected tools:',
  home_s1_li1     : '<strong>Consumer Site</strong> — A public-facing web configurator where end customers browse Giant bike models, personalize their paint design, choose component upgrades, and place a custom order for pickup at their local Giant store.',
  home_s1_li2     : '<strong>Configuration Portal</strong> — A dealer and internal staff tool for tracking and managing the lifecycle of every custom bike order, from payment confirmation through to customer pickup.',
  home_s1_li3     : '<strong>Shopify</strong> <em>(GSC Staff Only)</em> — The e-commerce backend used by GSC internal staff to monitor orders, review payment details, add notes, and perform order management actions.',
  home_s1_p3      : 'Together, these tools create a seamless end-to-end experience for customers and staff alike. This manual covers all three tools with step-by-step instructions and annotated screenshots.',

  /* 2. Target Audience */
  home_s2_heading : '2. Target Audience',
  home_s2_p1      : 'This manual is intended for the following groups:',
  home_s2_gsc_heading  : 'GSC Staff (Giant Service Center / Internal)',
  home_s2_gsc_li1 : 'Use the <strong>Configuration Portal</strong> to monitor all custom bike orders across the dealer network.',
  home_s2_gsc_li2 : 'Update order statuses at each fulfillment milestone (payment, delivery, pickup).',
  home_s2_gsc_li3 : 'Leave internal comments and coordinate with dealer stores.',
  home_s2_gsc_li4 : 'Access the system via AAD (corporate Microsoft account).',
  home_s2_dealer_heading : 'Dealer Store Staff',
  home_s2_dealer_li1 : 'Use the <strong>Configuration Portal</strong> to view and manage orders placed at your store.',
  home_s2_dealer_li2 : 'Update order status when the bike is delivered to your store or collected by the customer.',
  home_s2_dealer_li3 : 'Add comments to coordinate with the Giant team on delivery or handling.',
  home_s2_dealer_li4 : 'Access the system using your email address and password.',
  home_s2_consumer_heading : 'End Customers',
  home_s2_consumer_li1 : 'Use the <strong>Consumer Site</strong> to configure and order a custom Giant bike.',
  home_s2_consumer_li2 : 'Log in with a GiantID to place and track your order.',
  home_s2_consumer_li3 : 'Collect the finished bike at the chosen Giant store.',

  /* 3. Version Info — labels (values come from config.js) */
  home_s3_heading         : '4. Version Info',
  home_s3_manual_ver      : 'Manual Version',
  home_s3_last_updated    : 'Last Updated',
  home_s3_website_ver     : 'Corresponding Website Version',
  home_s3_release_notes   : 'Release Notes',
  home_s3_no_notes        : '—',

  /* 4. Contact & Support — labels (values come from config.js) */
  home_s4_heading         : '3. Contact & Support',
  home_s4_p1              : 'For assistance with the Giant Custom Bike platform, please use the contacts below based on the nature of your inquiry:',
  home_s4_system_heading  : 'System / Technical Issues',
  home_s4_system_p        : 'Login problems, page errors, or system access — contact IT support:',
  home_s4_order_heading   : 'General Enquiries & Order-Related Issues',
  home_s4_order_p         : 'For general enquiries or questions about a specific order, payment, or delivery, please contact the relevant market representative:',
  home_s4_th_markets      : 'Markets',
  home_s4_th_name         : 'Name',
  home_s4_th_email        : 'E-mail Address',
  home_s4_email_label     : 'Email',
  home_s4_link_label      : 'System URL',

  /* ══════════════════════════════════════════════════════════
     CONSUMER SITE
     ══════════════════════════════════════════════════════════ */

  /* Consumer Site cover banner */
  cs_cover_title : 'Consumer Site',
  cs_cover_badge : 'End Customer Guide',
  cs_cover_desc  : 'This guide walks end customers through every step of configuring and ordering a bespoke Giant bike — from model selection and paint design through to checkout and store pickup.',

  /* Configuration Portal cover banner */
  cp_cover_badge : 'Dealer & GSC Staff',
  cp_cover_desc  : 'This guide covers the Giant Group Custom Bike order management portal — the back-office tool used by dealers and GSC staff to track, update, and manage every custom bike order.',

  /* Sidebar nav */
  cs_nav_overview    : '1. Overview',
  cs_nav_start       : '2. Getting Started',
  cs_nav_choose      : '3. Choose Your Bike',
  cs_nav_design      : '4. Step 1: Design',
  cs_nav_design_type : '4.1 Frame Design Type',
  cs_nav_design_color: '4.2 Frame Colors',
  cs_nav_design_logo : '4.3 Logo Color',
  cs_nav_decal       : '5. Step 2: Decal Color',
  cs_nav_parts       : '6. Step 3: Choose Parts',
  cs_nav_parts_wheel : '6.1 Wheelsystem',
  cs_nav_parts_tire  : '6.2 Tire',
  cs_nav_parts_bar   : '6.3 Handlebar',
  cs_nav_parts_saddle: '6.4 Saddle',
  cs_nav_signature   : '7. Step 4: Owner\'s Signature',
  cs_nav_summary     : '8. Step 5: Summary',
  cs_nav_login       : '9. Login',
  cs_nav_checkout    : '10. Checkout',
  cs_nav_confirm     : '11. Order Confirmation',

  /* 1. Overview */
  cs_s1_heading : '1. Overview',
  cs_s1_p1      : 'The Giant Consumer Site lets end customers browse, fully customize, and order a bespoke Giant bike directly from the Giant website. Customers choose their model, groupset, paint design, component upgrades, and a personal owner\'s signature — then place the order to be picked up at their local Giant store.',
  cs_s1_p2      : 'The customization flow is divided into five sequential steps:',
  cs_s1_li1     : '<strong>Step 1 — Design:</strong> Choose the frame paint template, finish, and colors.',
  cs_s1_li2     : '<strong>Step 2 — Decal Color:</strong> Select the color of the frame decals.',
  cs_s1_li3     : '<strong>Step 3 — Choose Parts:</strong> Upgrade wheelsystem, tires, handlebar, and saddle.',
  cs_s1_li4     : '<strong>Step 4 — Owner\'s Signature:</strong> Optionally add a personal text signature to the frame.',
  cs_s1_li5     : '<strong>Step 5 — Summary:</strong> Review the full configuration and proceed to checkout.',

  /* 2. Getting Started */
  cs_s2_heading : '2. Getting Started',
  cs_s2_p1      : 'The customization tool is accessible from the Giant website\'s main navigation.',
  cs_s2_li1     : 'Go to the Giant website and hover over the <strong>Customize</strong> menu in the top navigation bar.',
  cs_s2_li2     : 'Click <strong>Customize Bikes</strong> from the dropdown.',
  cs_s2_li3     : 'Alternatively, click the <strong>"Start Customizing"</strong> button on the hero banner of the Customize landing page.',
  cs_s2_fig1    : 'Figure 1 — Giant website hero: "Your bike, your way"',

  /* 3. Choose Your Bike */
  cs_s3_heading : '3. Choose Your Bike',
  cs_s3_p1      : 'A modal dialog opens showing the available bike lines for customization. Use the tabs at the top to switch between brand lines (e.g., <strong>TCR</strong> and <strong>Liv Langma</strong>).',
  cs_s3_p2      : 'Each card shows the model name and starting price. Click <strong>"Explore [Model Name]"</strong> to begin customizing that model.',
  cs_s3_fig1    : 'Figure 2 — Model selection: TCR Advanced SL and TCR Advanced Pro',

  cs_s3_2_heading : '3.1 Select Groupset &amp; Package',
  cs_s3_2_p1      : 'After selecting a model, a configuration dialog appears to define the base spec:',
  cs_s3_2_li1     : 'Under <strong>Choose Your Groupset</strong>, select either <strong>SHIMANO</strong> or <strong>SRAM</strong>.',
  cs_s3_2_li2     : 'Under <strong>Choose Your Package</strong>, select the desired component tier (e.g., Ultegra or Dura-Ace) and its price.',
  cs_s3_2_li3     : 'Click <strong>"Start Customization"</strong> to enter the full configurator.',
  cs_s3_2_li4     : 'Click <em>"Back to the model"</em> to return to the model list.',
  cs_s3_2_fig1    : 'Figure 3 — Groupset and package selection for TCR Advanced SL',

  /* 4. Design */
  cs_s4_heading : '4. Step 1: Design',
  cs_s4_p1      : 'The <strong>Design</strong> step is the first tab in the configurator toolbar at the top of the page. The left side shows a live 3D preview of the bike that updates in real time as you make selections.',

  cs_s4_1_heading : '4.1 Frame Design Type',
  cs_s4_1_p1      : 'Under the <strong>Type</strong> panel on the right, choose one of three paint design templates:',
  cs_s4_1_li1     : '<strong>TYPE 1 — CLASSIC:</strong> A clean single-color design. No extra charge.',
  cs_s4_1_li2     : '<strong>TYPE 2 — MASKING:</strong> A two-tone design with a bold color split across the frame.',
  cs_s4_1_li3     : '<strong>TYPE 3 — GRADIENT:</strong> A flowing gradient fade between two colors. Additional charge applies (+€150.00).',
  cs_s4_1_p2      : 'Below the type selector, choose the <strong>Finish</strong>: <em>Matte</em> or <em>Gloss</em>.',
  cs_s4_1_fig1    : 'Figure 4 — Design tab: TYPE 1 Classic selected',
  cs_s4_1_fig2    : 'Figure 5 — Design tab: TYPE 2 Masking',
  cs_s4_1_fig3    : 'Figure 6 — Design tab: TYPE 3 Gradient (+€150)',

  cs_s4_2_heading : '4.2 Frame Colors',
  cs_s4_2_p1      : 'After selecting a design type, the color pickers appear. The number of color options depends on the selected type:',
  cs_s4_2_li1     : '<strong>Color 1</strong> — The primary frame color. Click a swatch to select it. Click <em>"More Colors"</em> / <em>"Less Colors"</em> to expand or collapse the full palette. Some premium colors carry an additional charge.',
  cs_s4_2_li2     : '<strong>Color 2</strong> — Available for TYPE 2 and TYPE 3. Defines the secondary or gradient-end color.',
  cs_s4_2_p2      : 'The bike preview on the left updates instantly to reflect your color choices.',
  cs_s4_2_fig1    : 'Figure 7 — Selecting Color 1 and Color 2 for Gradient type',
  cs_s4_2_fig2    : 'Figure 8 — Selecting Logo Color',

  cs_s4_3_heading : '4.3 Logo Color',
  cs_s4_3_p1      : 'After both frame colors are set, a <strong>Logo Color</strong> swatch row appears. Select the color for the Giant logo on the frame. Click <strong>NEXT TAB</strong> when done.',

  /* 5. Decal Color */
  cs_s5_heading : '5. Step 2: Decal Color',
  cs_s5_p1      : 'The <strong>Decal Color</strong> step controls the color of the text decals and stickers applied to the frame (e.g., model name labels, technology badges).',
  cs_s5_li1     : 'The current decal color is shown at the top of the right panel (e.g., <em>Brilliant Silver / GY-002</em>).',
  cs_s5_li2     : 'Select from the available color swatches below.',
  cs_s5_li3     : 'The decal view on the left shows a flat schematic of the frame with annotation callouts so you can see where each decal will be placed.',
  cs_s5_li4     : 'Click <strong>NEXT TAB</strong> to proceed.',
  cs_s5_fig1    : 'Figure 9 — Decal Color tab showing frame schematic and color selection',

  /* 6. Choose Parts */
  cs_s6_heading : '6. Step 3: Choose Parts',
  cs_s6_p1      : 'The <strong>Choose Parts</strong> step lets you upgrade or change key components. Each category is shown as a breadcrumb link (e.g., <em>Wheelsystem &gt;&gt; Wheelset</em>). Click a category breadcrumb to navigate back up.',

  cs_s6_1_heading : '6.1 Wheelsystem',
  cs_s6_1_p1      : 'Select your preferred wheelset. The default (included) option is shown with a filled radio button; alternatives show a price difference (positive = upgrade cost, negative = savings).',
  cs_s6_1_fig1    : 'Figure 10 — Wheelsystem selection',

  cs_s6_2_heading : '6.2 Tire',
  cs_s6_2_p1      : 'Choose the tire specification. Options show the tire model name and any price difference from the default.',
  cs_s6_2_fig1    : 'Figure 11 — Tire selection',

  cs_s6_3_heading : '6.3 Handlebar',
  cs_s6_3_p1      : 'Select the handlebar model and then choose the appropriate size (e.g., 380/360×80mm). Size options appear below the handlebar model selection.',
  cs_s6_3_fig1    : 'Figure 12 — Handlebar and size selection',

  cs_s6_4_heading : '6.4 Saddle',
  cs_s6_4_p1      : 'Choose your saddle preference. Options include CADEX and Giant Fleet models at various price points.',
  cs_s6_4_fig1    : 'Figure 13 — Saddle selection',

  /* 7. Owner's Signature */
  cs_s7_heading : '7. Step 4: Owner\'s Signature',
  cs_s7_p1      : 'The <strong>Owner\'s Signature</strong> step lets you optionally engrave a personal text signature onto the bike frame.',
  cs_s7_li1     : 'Select <strong>No Signature (No)</strong> to skip this option.',
  cs_s7_li2     : 'Select <strong>Add Signature (Yes)</strong> to reveal the signature form.',
  cs_s7_p2      : 'When adding a signature, fill in the following:',
  cs_s7_li3     : '<strong>Signature text</strong> — Letters and numbers only, maximum 15 characters.',
  cs_s7_li4     : '<strong>Font Family</strong> — Choose from available fonts (e.g., Bebas).',
  cs_s7_li5     : '<strong>Preview</strong> — Shows a live text preview of how the signature will look.',
  cs_s7_li6     : '<strong>Font Color</strong> — Select Black or White.',
  cs_s7_li7     : '<strong>Signature Position</strong> — Choose the placement on the frame: <em>Top Tube Both Sides</em>, <em>Top Tube Left</em>, or <em>Top Tube Right</em>.',
  cs_s7_fig1    : 'Figure 14 — Owner\'s Signature: No Signature selected',
  cs_s7_fig2    : 'Figure 15 — Owner\'s Signature form with text preview',

  /* 8. Summary */
  cs_s8_heading : '8. Step 5: Summary',
  cs_s8_p1      : 'The <strong>Summary</strong> tab provides a complete read-only overview of the entire bike configuration before you proceed to checkout.',
  cs_s8_p2      : 'The summary is grouped into four sections:',
  cs_s8_li1     : '<strong>Design</strong> — Paint type, finish, Color 1, Color 2, and Logo Color.',
  cs_s8_li2     : '<strong>Decal Color</strong> — Selected decal color.',
  cs_s8_li3     : '<strong>Choose Parts</strong> — Frame size, groupset (drivetrain), and other selected components.',
  cs_s8_li4     : '<strong>Owner\'s Signature</strong> — Whether a signature was added.',
  cs_s8_p3      : 'The current estimated price is displayed at the bottom. Click <strong>"ADD TO CART"</strong> to proceed. If you need to make changes, click any of the previous tab steps in the toolbar.',
  cs_s8_fig1    : 'Figure 16 — Summary tab showing full configuration',

  /* 9. Login */
  cs_s9_heading : '9. Login',
  cs_s9_p1      : 'When you click <strong>"ADD TO CART"</strong> from the Summary page, you are prompted to log in with a <strong>GiantID</strong> before checkout can proceed.',
  cs_s9_p2      : '<strong>Why login is required:</strong> GiantID is used to save and retrieve your bike customization details, place your order, and track it after purchase.',
  cs_s9_li1     : 'On the login prompt page, click <strong>"Login via GIANT"</strong>.',
  cs_s9_li2     : 'You will be redirected to the Giant Group identity portal.',
  cs_s9_li3     : 'Enter your GiantID email address and password, then click <strong>"Log in"</strong>.',
  cs_s9_li4     : 'If you do not have a GiantID, you can create one from the same portal.',
  cs_s9_fig1    : 'Figure 17 — Login prompt: "Login via GIANT" button',
  cs_s9_fig2    : 'Figure 18 — GiantID password entry',

  /* 10. Checkout */
  cs_s10_heading : '10. Checkout',
  cs_s10_p1      : 'After logging in, you are taken to the checkout page. Your custom bike configuration is shown in the order summary on the right.',
  cs_s10_p2      : 'Complete the following fields to place your order:',
  cs_s10_li1     : '<strong>Pickup Location</strong> — Select your nearest Giant authorized store. Pickup in store is free.',
  cs_s10_li2     : '<strong>Payment Method</strong> — Select <em>"Payment in the store"</em> to pay when you collect the bike.',
  cs_s10_li3     : '<strong>Billing Address</strong> — Confirm or enter your billing address (name, street, postal code, city, country).',
  cs_s10_p3      : 'Review the order summary on the right, which lists all configuration details and the total price (subtotal + taxes). Click <strong>"Complete Purchase"</strong> to finalize.',
  cs_s10_fig1    : 'Figure 19 — Checkout page: store selection and payment',
  cs_s10_fig2    : 'Figure 20 — Checkout page: billing address and total',

  /* 11. Order Confirmation */
  cs_s11_heading : '11. Order Confirmation',
  cs_s11_p1      : 'After completing the purchase, a confirmation page appears with:',
  cs_s11_li1     : 'A <strong>confirmation number</strong> (e.g., #8MI205UL) and a thank-you message.',
  cs_s11_li2     : 'A <strong>map</strong> showing the pickup store location.',
  cs_s11_li3     : 'A message confirming that an email will be sent when the order is ready for pickup.',
  cs_s11_li4     : 'An option to <strong>Get pickup notifications</strong> via the Giant Shop app.',
  cs_s11_li5     : '<strong>Order details</strong> — Contact info, pickup location (address and phone), payment method, and billing address.',
  cs_s11_p2      : 'A complete order summary with all configuration details is displayed on the right side. Click <strong>"Continue shopping"</strong> to return to the Giant website.',
  cs_s11_fig1    : 'Figure 21 — Order confirmation: thank you page with map',
  cs_s11_fig2    : 'Figure 22 — Order confirmation: full order details',

  /* ══════════════════════════════════════════════════════════
     CONFIGURATION PORTAL
     ══════════════════════════════════════════════════════════ */

  /* Sidebar nav */
  cp_nav_intro        : '1. Introduction',
  cp_nav_login        : '2. Logging In',
  cp_nav_login_nav    : '2.1 Login Page',
  cp_nav_login_auth   : '2.2 Authentication',
  cp_nav_login_cred   : '2.3 Credentials',
  cp_nav_dashboard    : '3. Orders Dashboard',
  cp_nav_dash_list    : '3.1 Order List',
  cp_nav_dash_search  : '3.2 Search & Filter',
  cp_nav_orders       : '4. Order Details',
  cp_nav_ord_summary  : '4.1 Order Summary',
  cp_nav_ord_status   : '4.2 Update Status',
  cp_nav_ord_config   : '4.3 Bike Configuration',
  cp_nav_ord_comments : '4.4 Comments',
  cp_nav_tips         : '5. Tips & Best Practices',
  cp_nav_support      : '6. Support',

  /* Cover */
  cover_company : 'GIANT GROUP',
  cover_system  : 'Custom Bike Order Management System',
  cover_title   : 'Configuration Portal — User Manual',
  cover_url     : 'custombike.giantcycling.com',
  cover_version : 'Version 1.0&nbsp;&nbsp;|&nbsp;&nbsp;May 2026',

  /* Section 1 */
  s1_heading : '1. Introduction',
  s1_p1      : 'This manual covers the Giant Group Custom Bike (CPB) Order Management System, accessible at <a href="https://custombike.giantcycling.com" target="_blank">custombike.giantcycling.com</a>. The system allows dealers and internal Giant staff to view, manage, and update the status of customer custom-bike orders from placement through fulfillment.',
  s1_p2      : 'This guide is intended for:',
  s1_li1     : 'Dealers and retailers who need to track and update orders for their customers.',
  s1_li2     : 'Giant Group internal staff who oversee the order pipeline and support dealers.',

  /* Section 2 */
  s2_heading   : '2. Logging In',
  s2_p1        : 'Access to the system requires a valid Giant Account (GAC) or Giant corporate credentials. Follow the steps below to sign in.',
  s2_1_heading : '2.1&nbsp;&nbsp;Navigate to the Login Page',
  s2_1_li1     : 'Open your web browser and go to: <a href="https://custombike.giantcycling.com" target="_blank"><strong>custombike.giantcycling.com</strong></a>',
  s2_1_li2     : 'You will be redirected to the login screen showing <em>"Login with GAC"</em>.',
  s2_1_li3     : 'Click the <strong>"Sign in with Giant"</strong> button to proceed.',
  s2_1_fig     : 'Figure 1 — Login page at custombike.giantcycling.com',
  s2_2_heading : '2.2&nbsp;&nbsp;Authenticate with Your Giant Account',
  s2_2_p1      : 'After clicking <em>Sign in with Giant</em>, you will be redirected to the Giant Group authentication portal (eac.giantcycling.com). You have two options:',
  s2_2_li1     : '<strong>AAD (Azure Active Directory)</strong> — Click the AAD button to sign in using your corporate Microsoft account (recommended for internal Giant staff).',
  s2_2_li2     : '<strong>Username &amp; Password</strong> — Enter your Giant account email and password directly in the fields on the right.',
  s2_2_fig     : 'Figure 2 — Giant Group authentication portal',
  s2_3_heading : '2.3&nbsp;&nbsp;Enter Your Credentials',
  s2_3_li1     : 'Type your Giant account email address in the <strong>Username</strong> field.',
  s2_3_li2     : 'Enter your password in the <strong>Password</strong> field.',
  s2_3_li3     : 'Click the <strong>"Sign In"</strong> button to complete authentication.',
  s2_3_fig     : 'Figure 3 — Entering credentials on the authentication portal',
  s2_note      : '<strong>Note:</strong> If you have forgotten your password, click <em>Forgot your password?</em> on the login page to initiate a reset. For account access issues, contact your Giant Group IT administrator.',

  /* Section 3 */
  s3_heading   : '3. Orders Dashboard',
  s3_p1        : 'After logging in, you will be taken to the Orders Dashboard — the central view for managing all custom bike orders associated with your account.',
  s3_1_heading : '3.1&nbsp;&nbsp;Understanding the Order List',
  s3_1_p1      : 'Each row in the list represents a single customer order and displays the following columns:',
  s3_1_li1     : '<strong>Order Id</strong> — A unique identifier for each order (e.g., #1130).',
  s3_1_li2     : '<strong>Order Date</strong> — The date the customer placed the order.',
  s3_1_li3     : '<strong>Last Updated On</strong> — The most recent date the order record was modified.',
  s3_1_li4     : '<strong>Customer Name</strong> — The name of the end customer.',
  s3_1_li5     : '<strong>Customer Email</strong> — The customer\'s email address for correspondence.',
  s3_1_li6     : '<strong>Customer Phone</strong> — The customer\'s contact phone number.',
  s3_1_li7     : '<strong>Dealer Name</strong> — The name of the authorized dealer associated with the order.',
  s3_1_li8     : '<strong>Status</strong> — The current fulfillment status of the order (see Section 4.2 for status definitions).',
  s3_1_li9     : '<strong>Actions</strong> — An <em>Edit</em> link to open the full order detail page.',
  s3_1_fig     : 'Figure 4 — Orders Dashboard showing all orders',
  s3_2_heading : '3.2&nbsp;&nbsp;Searching and Filtering Orders',
  s3_2_p1      : 'Use the controls at the top of the list to narrow down the orders displayed:',
  s3_2_li1     : '<strong>Search Bar</strong> — Type an Order ID, customer email address, or dealer name to instantly filter the results.',
  s3_2_li2     : '<strong>Status Filter</strong> — Click the <em>"All Status"</em> dropdown to filter orders by a specific status (e.g., show only Payment Pending orders).',
  s3_2_li3     : '<strong>Load More</strong> — Click the <em>"Load More"</em> button at the bottom of the list to retrieve older orders beyond the initial page.',

  /* Section 4 */
  s4_heading    : '4. Order Details',
  s4_p1         : 'Click <strong>Edit</strong> next to any order in the dashboard to open the full order detail page. This page shows all information related to the order, allows you to update its status, and lets you leave comments.',
  s4_1_heading  : '4.1&nbsp;&nbsp;Order Summary',
  s4_1_p1       : 'At the top of the detail page you will see:',
  s4_1_li1      : 'Order number and current status badge (e.g., <em>Payment pending</em>).',
  s4_1_li2      : 'Order Date and Last Update timestamps.',
  s4_1_li3      : 'Customer information: Name, Phone Number, and Email.',
  s4_1_li4      : '<strong>Pick-Up Store:</strong> The name, phone number, and address of the dealer store where the bike will be collected.',
  s4_1_fig      : 'Figure 5 — Order detail page showing customer info, pick-up store, and status controls',
  s4_2_heading  : '4.2&nbsp;&nbsp;Updating Order Status',
  s4_2_p1       : 'To change the fulfillment status of an order:',
  s4_2_li1      : 'Click the status dropdown at the top of the order detail page (it shows the current status, e.g., <em>"Payment pending"</em>).',
  s4_2_li2      : 'Select the appropriate new status from the dropdown list.',
  s4_2_li3      : 'Click <strong>Save</strong> to confirm the change.',
  s4_2_p2       : 'The following order statuses are available:',
  s4_2_th1      : 'Status',
  s4_2_th2      : 'Description',
  s4_2_td1_1    : 'Payment Pending',
  s4_2_td1_2    : 'The customer has placed the order but payment has not yet been received.',
  s4_2_td2_1    : 'Payment Received',
  s4_2_td2_2    : 'Payment has been confirmed. The order is ready to be processed.',
  s4_2_td3_1    : 'Delivered to Store',
  s4_2_td3_2    : 'The custom bike has been shipped and delivered to the pick-up store.',
  s4_2_td4_1    : 'Ready for Pickup',
  s4_2_td4_2    : 'The store has confirmed the bike is ready for the customer to collect.',
  s4_2_td5_1    : 'Fulfilled',
  s4_2_td5_2    : 'The customer has collected the bike. The order is complete.',
  s4_2_note     : '<strong>Note:</strong> You can also download a CSV export of the order by clicking the <strong>Download CSV</strong> button on the order detail page.',
  s4_3_heading  : '4.3&nbsp;&nbsp;Custom Bike Configuration Details',
  s4_3_p1       : 'The right side of the order detail page displays the complete bike configuration chosen by the customer, including:',
  s4_3_li1      : 'Product name and price (e.g., Propel Advanced Pro Shimano Ultegra — $211,000).',
  s4_3_li2      : '<strong>Custom Paint</strong> — Indicates whether a custom paint finish was selected, with an <em>Edit</em> link if changes are permitted.',
  s4_3_li3      : '<strong>模板 DESIGN</strong> — The frame design template selected (e.g., TYPE 1 - 經典簡約).',
  s4_3_li4      : '<strong>消光/亮光 FINISH</strong> — The surface finish (e.g., 消光 = Matte).',
  s4_3_li5      : '<strong>車架顏色 FRAME COLOR</strong> — The primary frame color code.',
  s4_3_li6      : '<strong>LOGO 顏色 LOGO COLOR</strong> — The logo color code.',
  s4_3_li7      : '<strong>Label / Sticker Color</strong> — The label and sticker accent color.',
  s4_3_li8      : '<strong>Custom Parts</strong> — Any custom component selections with an <em>Edit</em> link.',
  s4_3_li9      : '<strong>車架尺寸 SIZE</strong> — The selected frame size (e.g., M).',
  s4_3_li10     : '<strong>大盤</strong> — The crankset/groupset (e.g., Ultegra 8100).',
  s4_3_fig      : 'Figure 6 — Custom bike configuration details on the order page',
  s4_4_heading  : '4.4&nbsp;&nbsp;Adding Comments',
  s4_4_p1       : 'A Comments section is available at the bottom left of the order detail page. Use this field to leave internal notes or messages related to the order — for example, to communicate delivery updates or special handling instructions between store staff and the Giant team.',
  s4_4_li1      : 'Scroll to the <strong>Comments</strong> section.',
  s4_4_li2      : 'Click inside the text field and type your comment (e.g., <em>"Notified customer of delivery date"</em>).',
  s4_4_li3      : 'Click <strong>Save</strong> to record the comment.',
  s4_4_note     : '<strong>Note:</strong> Comments are visible to all users with access to this order. Do not include sensitive personal data in the comments field.',

  /* Section 5 */
  s5_heading : '5. Tips &amp; Best Practices',
  s5_li1     : 'Always update the order status promptly when a milestone is reached (e.g., when payment is confirmed or the bike arrives at the store). This keeps the customer pipeline accurate for all stakeholders.',
  s5_li2     : 'Use the <strong>CSV Download</strong> on individual orders for record-keeping or to share order details with colleagues who do not have system access.',
  s5_li3     : 'If you encounter a login issue, try signing in via the <strong>AAD</strong> button first — this uses your corporate Microsoft account and is the most reliable method for Giant internal staff.',
  s5_li4     : 'The system is optimized for <strong>Chrome</strong>. If you experience display issues, ensure your browser is up to date.',

  /* Section 6 */
  s6_heading : '6. Support',
  s6_p1      : 'For technical issues or questions about the Custom Bike Order Management System, please contact your Giant Group system administrator or reach out through the internal IT support channel.',
  s6_p2      : 'For order-related inquiries (e.g., customer payment disputes, shipping delays), please coordinate through the standard dealer support process.',

  /* ══════════════════════════════════════════════════════════
     SHOPIFY (GSC STAFF ONLY)
     ══════════════════════════════════════════════════════════ */

  /* Sidebar nav */
  sp_nav_overview  : '1. Overview',
  sp_nav_access    : '2. Getting Access',
  sp_nav_dashboard : '3. Dashboard',
  sp_nav_orders    : '4. Orders List',
  sp_nav_detail    : '5. Order Details',
  sp_nav_notes     : '6. Notes & Timeline',
  sp_nav_edit      : '7. Editing an Order',
  sp_nav_actions   : '8. More Actions',

  /* Cover banner */
  sp_cover_title   : 'Shopify Order Management',
  sp_cover_sub     : 'GSC Staff Only',
  sp_cover_desc    : 'This section is intended for Giant Service Center (GSC) internal staff only. It covers how to monitor and manage Giant EU custom bike orders through the Shopify platform.',

  /* 1. Overview */
  sp_s1_heading : '1. Overview',
  sp_s1_p1      : 'Giant EU uses Shopify as the e-commerce backend for orders placed through the consumer-facing custom bike website. When a customer completes a purchase on the Consumer Site, the order is automatically created in Shopify.',
  sp_s1_p2      : 'As a GSC staff member, you will use Shopify to:',
  sp_s1_li1     : 'Monitor incoming custom bike orders and their payment / fulfillment statuses.',
  sp_s1_li2     : 'Review full order details including customer info, billing address, and bike configuration.',
  sp_s1_li3     : 'Add internal notes and track order activity through the Timeline.',
  sp_s1_li4     : 'Edit orders or add custom items when required.',
  sp_s1_li5     : 'Perform actions such as cancellation, archiving, or viewing the customer-facing order status page.',

  /* 2. Getting Access */
  sp_s2_heading : '2. Getting Access',
  sp_s2_p1      : 'Access to the Giant EU Shopify store is by invitation only. You will receive an email from <strong>mailer@shopify.com</strong> with the subject line <em>"Accept your invite to Giant Bicycle, Inc."</em>',
  sp_s2_li1     : 'Open the invitation email and click the <strong>"Accept invite"</strong> button.',
  sp_s2_li2     : 'You will be prompted to create a Shopify account or sign in to an existing one.',
  sp_s2_li3     : 'Once accepted, you will have access to the Giant EU Shopify admin panel.',
  sp_s2_note    : '<strong>Note:</strong> If you were not expecting this invitation, you can safely ignore the email. Contact your Giant Group IT administrator if you need access but have not received an invitation.',
  sp_s2_fig1    : 'Figure 1 — Shopify invitation email from Giant Bicycle, Inc.',

  /* 3. Dashboard */
  sp_s3_heading : '3. Dashboard',
  sp_s3_p1      : 'After logging in, you arrive at the Shopify Home dashboard. This gives a quick overview of pending tasks and store activity.',
  sp_s3_li1     : '<strong>Orders to fulfill</strong> — Number of orders awaiting fulfillment action.',
  sp_s3_li2     : '<strong>Payments to capture</strong> — Number of orders with pending payment capture.',
  sp_s3_p2      : 'Use the left sidebar to navigate between sections: Home, Orders, Customers, Products, Marketing, Discounts, Content, Markets, Finance, Analytics, Sales Channels, and Online Store.',
  sp_s3_fig1    : 'Figure 2 — Shopify dashboard (Home)',

  /* 4. Orders List */
  sp_s4_heading : '4. Orders List',
  sp_s4_p1      : 'Click <strong>Orders</strong> in the left sidebar to view all orders. Custom bike orders from the consumer site appear here with the following key columns:',
  sp_s4_li1     : '<strong>Order</strong> — The order number (e.g., #EU1006). Click to open the full order detail.',
  sp_s4_li2     : '<strong>Date</strong> — When the order was placed.',
  sp_s4_li3     : '<strong>Customer</strong> — The name of the customer.',
  sp_s4_li4     : '<strong>Channel</strong> — Always <em>Online Store</em> for consumer site orders.',
  sp_s4_li5     : '<strong>Total</strong> — The order total.',
  sp_s4_li6     : '<strong>Payment status</strong> — Typically <em>Payment pending</em> for new orders.',
  sp_s4_li7     : '<strong>Fulfillment status</strong> — Typically <em>Unfulfilled</em> until the bike is delivered and collected.',
  sp_s4_li8     : '<strong>Items</strong> — Number of items in the order.',
  sp_s4_p2      : 'Use the <strong>Search and filter</strong> bar to find specific orders. Use the <strong>All locations</strong> dropdown to filter by store location.',
  sp_s4_fig1    : 'Figure 3 — Orders list with payment and fulfillment statuses',

  /* 5. Order Details */
  sp_s5_heading : '5. Order Details',
  sp_s5_p1      : 'Click any order number to open the full order detail page.',

  sp_s5_1_heading : '5.1 Order Header',
  sp_s5_1_p1      : 'At the top of the page you will see the order number, status badges (<em>Unfulfilled</em> and the assigned store), and pickup information (store name and scheduled pickup time).',
  sp_s5_1_p2      : 'The action buttons allow you to:',
  sp_s5_1_li1     : '<strong>Mark as picked up</strong> — Record that the customer has collected the bike.',
  sp_s5_1_li2     : '<strong>Ready for pickup</strong> — Notify the customer that the bike is ready to collect.',

  sp_s5_2_heading : '5.2 Product & Configuration',
  sp_s5_2_p1      : 'The order shows the bike product name (e.g., TCR Advanced SL Shimano Dura Ace) with a breakdown of the custom configuration in the SKU field, including Design, Type, Finish, and other spec details.',

  sp_s5_3_heading : '5.3 Payment Summary',
  sp_s5_3_p1      : 'The Payment section shows:',
  sp_s5_3_li1     : '<strong>Subtotal</strong> — Product price.',
  sp_s5_3_li2     : '<strong>Pickup</strong> — Store pickup fee (€0.00 — free).',
  sp_s5_3_li3     : '<strong>Taxes</strong> — Estimated tax amount.',
  sp_s5_3_li4     : '<strong>Total</strong> — Full order total.',
  sp_s5_3_li5     : '<strong>Paid / Balance</strong> — Amount paid and remaining balance.',
  sp_s5_3_p2      : 'You can <strong>Send invoice</strong> or <strong>Record manual payment</strong> using the buttons at the bottom of this section.',

  sp_s5_4_heading : '5.4 Customer & Address',
  sp_s5_4_p1      : 'The right panel shows customer details:',
  sp_s5_4_li1     : 'Customer name and number of previous orders.',
  sp_s5_4_li2     : 'Contact email address (click to email directly).',
  sp_s5_4_li3     : 'Shipping address — displayed as "No shipping address provided" for in-store pickup orders.',
  sp_s5_4_li4     : 'Billing address — full address of the customer.',
  sp_s5_4_fig1    : 'Figure 4 — Order detail: product, payment, and customer information',

  /* 6. Notes & Timeline */
  sp_s6_heading : '6. Notes & Timeline',
  sp_s6_p1      : 'Each order has two collaboration tools on the detail page.',

  sp_s6_1_heading : '6.1 Notes',
  sp_s6_1_p1      : 'The <strong>Notes</strong> panel (upper right) is for storing a single persistent note about the order — visible only to staff.',
  sp_s6_1_li1     : 'Click the edit icon (pencil) next to Notes to open the <strong>Edit note</strong> dialog.',
  sp_s6_1_li2     : 'Type your note and click <strong>Save</strong>.',
  sp_s6_1_note    : '<strong>Tip:</strong> To comment on an order or mention a staff member, use the Timeline instead — Notes are a single editable field, not a conversation thread.',
  sp_s6_1_fig1    : 'Figure 5 — Edit note dialog',

  sp_s6_2_heading : '6.2 Timeline',
  sp_s6_2_p1      : 'The <strong>Timeline</strong> at the bottom of the order page shows a chronological activity log of everything that has happened on the order, including:',
  sp_s6_2_li1     : 'Order confirmation email sent to the customer.',
  sp_s6_2_li2     : 'Payment pending notifications.',
  sp_s6_2_li3     : 'Shopify confirmation number generated.',
  sp_s6_2_li4     : 'Who placed the order (staff name).',
  sp_s6_2_p2      : 'Use the comment box at the bottom of the Timeline to leave a message visible to all staff with access. You can also mention team members using <strong>@name</strong>.',
  sp_s6_2_fig1    : 'Figure 6 — Order Timeline showing activity log',

  /* 7. Editing an Order */
  sp_s7_heading : '7. Editing an Order',
  sp_s7_p1      : 'Click the <strong>Edit</strong> button at the top of the order detail page to open the Edit order view.',
  sp_s7_p2      : 'From here you can:',
  sp_s7_li1     : 'Adjust the <strong>quantity</strong> of existing products.',
  sp_s7_li2     : 'Click <strong>Add product</strong> to add an existing product from the store catalog.',
  sp_s7_li3     : 'Click <strong>Add custom item</strong> to add a one-off item with a custom name, price, and quantity. You can mark it as taxable and/or a physical product.',
  sp_s7_li4     : 'Enter a <strong>Reason for edit</strong> — this note is only visible to staff and is required before saving.',
  sp_s7_li5     : 'Click <strong>Update order</strong> to confirm all changes.',
  sp_s7_fig1    : 'Figure 7 — Edit order page',
  sp_s7_fig2    : 'Figure 8 — Add custom item dialog',

  /* 8. More Actions */
  sp_s8_heading : '8. More Actions',
  sp_s8_p1      : 'Click the <strong>More actions</strong> dropdown at the top of the order detail page to access additional order management options:',
  sp_s8_li1     : '<strong>Duplicate</strong> — Create an identical copy of the order.',
  sp_s8_li2     : '<strong>Cancel order</strong> — Cancel the order and optionally restock items.',
  sp_s8_li3     : '<strong>Archive</strong> — Archive the order once it is complete to keep the Orders list clean.',
  sp_s8_li4     : '<strong>View order status page</strong> — Open the customer-facing order tracking page to see what the customer sees.',
  sp_s8_fig1    : 'Figure 9 — More actions dropdown',

};
