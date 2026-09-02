================================================================================
  RAJU AYUSH HOSPITAL - HOSTINGER SHARED HOSTING DEPLOYMENT GUIDE
================================================================================

This package contains the complete, production-ready static frontend build for 
Raju AYUSH Hospital.

--------------------------------------------------------------------------------
1. HOW TO UPLOAD TO HOSTINGER HPANEL
--------------------------------------------------------------------------------
Step 1: Log in to your Hostinger Account (https://hpanel.hostinger.com).
Step 2: Go to "Websites" -> Select your website -> Click "Dashboard".
Step 3: In the sidebar, navigate to "Files" -> Click "File Manager".
Step 4: Click on the "public_html" directory.
Step 5: Click the "Upload" button (top right icon) and select:
        "raju-ayush-hostinger-deployment.zip"
Step 6: Right-click the uploaded ZIP file inside "public_html" and select "Extract".
Step 7: When asked for the destination path, leave it as "." or extract directly 
        into "public_html".
Step 8: Verify that "index.html" is directly inside "public_html/".
        (e.g., public_html/index.html, NOT public_html/project-name/index.html).

--------------------------------------------------------------------------------
2. IMPORTANT FILE STRUCTURE CONFIRMATION
--------------------------------------------------------------------------------
Your Hostinger public_html folder should look like this after extraction:

public_html/
├── index.html
├── about-us.html
├── ayurveda-consultation.html
├── homeopathy.html
├── siddha-medicine.html
├── naturopathy.html
├── herbal-medicine.html
├── diseases.html
├── contact-us.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── vendor/
├── styles.css
├── services-section-scoped.css
├── image-scroll.css
├── new-sections.css
├── robots.txt
├── sitemap.xml
├── .htaccess
└── README-HOSTINGER-DEPLOYMENT.txt

NOTE: If Hostinger extracts into a subfolder by accident:
1. Open that subfolder in File Manager.
2. Select all files (Ctrl+A).
3. Click "Move" -> choose "public_html" as destination.

--------------------------------------------------------------------------------
3. DOMAIN CONFIGURATION & SITEMAP
--------------------------------------------------------------------------------
Before or right after uploading, open:
1. sitemap.xml
2. robots.txt

Replace "https://YOUR-DOMAIN.com/" with your actual live domain:
(e.g., https://rajuayushhospital.com/)

--------------------------------------------------------------------------------
4. POST-UPLOAD VERIFICATION CHECKLIST
--------------------------------------------------------------------------------
[ ] Open your domain in desktop and mobile browsers.
[ ] Check Homepage hero animation and dual-text rolling navbar links.
[ ] Check 3-column Mega Menu under "Specialists" dropdown.
[ ] Check all 5 Specialty subpages:
    - Ayurveda Consultation (ayurveda-consultation.html)
    - Homeopathy Treatment (homeopathy.html)
    - Siddha Medicine (siddha-medicine.html)
    - Naturopathy & Wellness (naturopathy.html)
    - Global Herbal Medicine (herbal-medicine.html)
[ ] Check Left Sidebar filter on subpages.
[ ] Test Language Switcher (English <-> Telugu):
    - Instant 0ms toggle on click (no refresh needed).
[ ] Open Developer Tools (F12) -> Console: Confirm 0 errors.
[ ] Test Mobile Hamburger Menu on phone screen.
[ ] Confirm Contact Form and Appointment CTAs open smoothly.

--------------------------------------------------------------------------------
5. BACKEND & API NOTE
--------------------------------------------------------------------------------
- This website is a high-performance static frontend.
- Forms are currently configured for client-side validation and direct modal
  appointment booking / phone call triggering.
- If you later integrate a backend database or CRM (e.g. PHP mailer, Firebase,
  or REST API), you can place the backend endpoint in public_html/api/ without
  disturbing any frontend files.

================================================================================
