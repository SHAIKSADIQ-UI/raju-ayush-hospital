/**
 * RAJU AYUSH – i18n Translation System v2
 * Supports EN (English) and TL (Telugu)
 * 
 * DUAL APPROACH:
 * 1. data-i18n attributes on elements (precise, preferred)
 * 2. Auto text-node walker for remaining text (fallback, covers everything)
 */
(function () {
  "use strict";

  var currentLang = localStorage.getItem("ra-lang") || "en";

  var currentLang = localStorage.getItem("ra-lang") || "en";

  var currentLang = localStorage.getItem("ra-lang") || "en";

  var translations = {
    en: {
      "drawer.langlabel": "Language:",
      "drawer.herbal": "› Global Herbal Medicine",
      "drawer.naturopathy": "› Naturopathy Wellness",
      "drawer.siddha": "› Siddha Healthcare",
      "drawer.homeo": "› Homeopathic Care",
      "drawer.ayurveda": "› Ayurvedic Therapy",
      "tc.c3.cta": "Explore Metabolic Care",
      "tc.c3.desc": "Break free from escalating medication and constant worry. We go beyond temporary blood sugar suppression to fix root insulin resistance and metabolic fatigue. Through individualized Naturopathy diets and restorative botanical therapies, we revitalize pancreatic function, lower HbA1c naturally, and safeguard your nerves, eyes, and vital organs.",
      "tc.c3.title": "Diabetes & Metabolic Health",
      "tc.c3.cat": "/ Metabolic Restoration",
      "tc.c2.cta": "Explore Renal Healing",
      "tc.c2.desc": "Regain your kidney vitality and reduce dependency on dialysis. Whether you are facing elevated creatinine, chronic kidney disease, or painful recurrent stones, our gentle AYUSH therapies work with your body. Proven Siddha formulations and herbal remedies naturally stimulate renal tissue repair, balance filtration, and dissolve stones without surgery.",
      "tc.c2.title": "Kidney Diseases & Dialysis Management",
      "tc.c2.cat": "/ Renal Care",
      "tc.c1.cta": "Explore Cardiac Healing",
      "tc.c1.desc": "Protect your heart without invasive surgery. We help patients safely manage coronary blockages, avoid risky bypass or stent procedures, and stabilize high blood pressure. By combining classical German Homeopathy with potent Ayurvedic cardio-rasayanas, our therapies dissolve plaque buildup, nourish cardiac muscle, and restore your energy and peace of mind.",
      "tc.c1.title": "Heart Diseases & Valve / Heart Blocks",
      "tc.c1.cat": "/ Cardiac Wellness",
      "tc.subtitle": "Over 38 years of helping patients overcome chronic illnesses safely, naturally, and without surgical fear.",
      "tc.eyebrow": "Prominent Conditions",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.specialists": "Specialists",
      "nav.diseases": "Diseases",
      "nav.contact": "Contact Us",
      "cta.appointment": "Get an Appointment",
      "Book An Appointment": "Book An Appointment",
      "mega.title": "OUR SPECIALISTS",
      "mega.ayurveda": "Ayurvedic Therapy",
      "mega.ayurveda.desc": "Classical Vedic Healing",
      "mega.homeopathy": "Homeopathic Care",
      "mega.homeopathy.desc": "Holistic & Natural Treatment",
      "mega.siddha": "Siddha Healthcare",
      "mega.siddha.desc": "Ancient Tamil Medical System",
      "mega.naturopathy": "Naturopathy Wellness",
      "mega.naturopathy.desc": "Natural Healing Therapies",
      "mega.herbal": "Global Herbal Medicine",
      "mega.herbal.desc": "International Quality Herbal Care",
      "mega.consult.heading": "Not Sure Which Therapy Is Right For You?",
      "mega.consult.desc": "Our senior doctors diagnose your root cause and prescribe integrated multi-therapy care for complete and lasting relief.",
      "mega.consult.btn": "Book An Appointment",
      "mega.visual.tag": "Traditional Healing",
      "mega.philosophy": "5 Classical Systems. Integrated Care. Holistic Healing.",
      "mega.explore.btn": "View all treatments and therapies",
      "mega.explore": "🌿   Explore all treatments and therapies",
      "hero.title": "Better Health, Naturally.",
      "hero.desc": "Bringing Ayurveda, homoeopathy, naturopathy, Siddha and herbal care together with experience, understanding and a more personal approach to your health.",
      "story.intro": "Discover Raju AYUSH Hospital's integrated path to natural healing & clinical excellence.",
      "story.desc": "For over 38 years, Raju AYUSH Hospital has combined Homeopathy, Ayurveda, Siddha, Naturopathy and Global Herbal Medicine to treat the root cause, restore vital health, and guide families toward lasting wellness without harmful side effects.",
      "footer.brand.desc": "Providing exceptional healthcare services & holistic natural healing with 38+ years of clinical expertise.",
      "footer.quicklinks": "Quick Links",
      "footer.specialties": "Our Specialties",
      "footer.contact.title": "Contact Info",
      "footer.address": "Vijayawada, Andhra Pradesh",
      "footer.copyright": "© 2026 Raju AYUSH Hospital. All rights reserved.",
      "footer.homeopathy": "Homeopathic Care",
      "footer.ayurveda": "Ayurvedic Therapy",
      "footer.siddha": "Siddha Healthcare",
      "footer.naturopathy": "Naturopathy Wellness",
      "footer.herbal": "Global Herbal Medicine",
      "footer.about": "About Us",
      "footer.diseases": "Diseases & Treatments",
      "footer.contact": "Contact Us",
      "footer.emergency": "Emergency Contact",
      "footer.emergency.time": "Mon - Sun: 9:00 AM - 9:00 PM",
      "footer.phone": "+91 92900 00571",
      "footer.phone.alt": "+91 93986 68221",
      "footer.email": "contact@rajuayush.com",
      "badge.heritage": "38+ Years of Healing Heritage",
      "badge.healing": "Holistic Healing Heritage",
      "stat.years": "38+",
      "stat.years.label": "Years of Clinical Excellence",
      "stat.systems": "5",
      "stat.systems.label": "Traditional AYUSH Systems",
      "stat.care": "24/7",
      "stat.care.label": "Patient Support & Home Care",
      "stat.cases": "50K+",
      "stat.cases.label": "Patients Healed Naturally",
      "faq.title": "FAQ",
      "faq.subtitle": "Get Answers to Your Most Common Ayurveda & Multi-Therapy Healthcare Questions",
      "faq.q1": "Why Would I Choose Raju AYUSH Hospital Instead of Another Clinic?",
      "faq.a1.p1": "<b>38+ Years of Proven Expertise:</b> Dr. Raju and our clinical team bring nearly four decades of multi-therapy natural healing mastery combining German Homeopathy, Ayurveda, Siddha, Naturopathy, and Global Herbal Medicine. If you seek deep root-cause resolution rather than temporary symptom suppression, Raju AYUSH Hospital is the best choice for you.",
      "faq.a1.p2": "<b>Personalized Holistic Care:</b> Unlike conventional commercial clinics, we design customized treatment protocols that account for your unique physiological constitution, lifestyle factors, and specific disease stages.",
      "faq.a1.p3": "<b>Zero Side-Effect Natural Formulations:</b> Every treatment utilizes authentic herbal and natural formulations designed to strengthen the body's innate disease resistance.",
      "faq.a1.p4": "<b>Convenient Vijayawada Location & Telemedicine:</b> Located at Patamata, Vijayawada with easy accessibility and nationwide online video consultations and doorstep medicine delivery.",
      "faq.q2": "Do Ayurvedic & Natural Medicines Have Any Harmful Side Effects?",
      "faq.a2.p1": "Ayurveda and multi-therapy natural systems are individualized medical sciences. When prescribed by qualified practitioners, our natural remedies carry zero harmful side effects and offer multifaceted health benefits.",
      "faq.a2.p2": "At Raju AYUSH Hospital, all medicinal herbs, extracts, and remedies adhere to rigorous purity, safety, and dosage standards to guarantee safety across all age groups, from children to the elderly.",
      "faq.a2.p3": "To achieve the best outcomes, always consult with our experienced doctors to ensure personalized dosages and customized dietary guidelines tailored to your health profile.",
      "faq.q3": "Does Raju AYUSH Provide Treatment for Chronic Conditions?",
      "faq.a3.p1": "Yes. Our \"Golden Balance of Life\" philosophy offers specialized therapies for chronic and persistent ailments including lower back pain, neck pain, sciatica, spondylosis, migraine, psoriasis, eczema, diabetes management, hypertension, obesity, allergic bronchitis, arthritis, and paralysis rehabilitation.",
      "faq.a3.p2": "By harmonizing physical and vital energies through 5 complementary healing disciplines, we attack the disease from multiple angles to promote lasting vitality.",
      "faq.q4": "What Measures Should Be Taken Before Receiving Treatment?",
      "faq.a4.p1": "Before beginning your treatment journey with us, we recommend following these simple steps:",
      "faq.a4.li1": "<b>Share Comprehensive Medical History:</b> Provide any past medical records, diagnostic lab tests, and a list of current medications during your consultation.",
      "faq.a4.li2": "<b>Gradual Transition (Do Not Stop Medicines Abruptly):</b> If taking conventional drugs, our doctors will guide an integrative taper as your natural healing progresses safely.",
      "faq.a4.li3": "<b>Follow Prescribed Diet & Routine:</b> Ayurvedic and herbal protocols work synergistically with diet and daily habits. Following recommended nutrition boosts treatment speed.",
      "faq.a4.li4": "<b>Schedule In-Clinic or Video Consultation:</b> Call <a href=\"tel:+919290000571\">+91 92900 00571</a> or <a href=\"tel:+919398668221\">+91 93986 68221</a> to book your initial evaluation.",
      "form.title": "Book An Appointment",
      "form.name": "Full Name",
      "form.email": "Email Address",
      "form.phone": "Phone No (+91...)",
      "form.gender.select": "Select Patient Gender",
      "form.gender.male": "Male",
      "form.gender.female": "Female",
      "form.gender.other": "Other",
      "form.date": "Appointment Date",
      "form.time": "Appointment Time",
      "form.message": "Health Concerns / Message",
      "form.submit": "Get an Appointment",
      "specialties.sidebar.title": "Our Healing Systems",
      "specialties.sidebar.ayurveda": "1. Ayurvedic Therapy",
      "specialties.sidebar.homeopathy": "2. Homeopathic Care",
      "specialties.sidebar.siddha": "3. Siddha Healthcare",
      "specialties.sidebar.naturopathy": "4. Naturopathy Wellness",
      "specialties.sidebar.herbal": "5. Global Herbal Medicine",
      "ticker.item1": "Ayurvedic Therapy",
      "ticker.item2": "Homeopathic Care",
      "ticker.item3": "Siddha Healthcare",
      "ticker.item4": "Naturopathy Wellness",
      "ticker.item5": "Global Herbal Medicine",
      "ticker.item6": "38+ Years of Expertise",
      "serv.badge": "SERVICES WE OFFER",
      "serv.title": "Our Core Clinical Specialties",
      "serv.viewall": "View All Treatments",
      "serv.btn": "Treatment Details",
      "serv.tab1": "Therapeutic Ayurvedic Care",
      "serv.tab2": "Constitutional Homeopathy",
      "serv.tab3": "Siddha & Herbal Medicine",
      "serv.tab4": "Naturopathy & Yoga Wellness",
      "serv.tab5": "Global Herbal Medicine",
      "serv.tab6": "Chronic Disease Management",
      "serv.d1.title": "Therapeutic Ayurvedic Care",
      "serv.d1.desc": "Balancing Vata, Pitta, and Kapha through authentic Vedic traditions, classical pulse assessment, and personalized herbal nutrition under expert clinical guidance.",
      "serv.d1.b1": "Classical herbal medicines & metabolic wellness",
      "serv.d1.b2": "Targeted botanical formulas for joint, spine & nerve relief",
      "serv.d1.b3": "Constitutional assessment & tailored diet guidance",
      "serv.d2.title": "Constitutional Homeopathy",
      "serv.d2.desc": "Ultra-diluted, gentle natural remedies designed to activate innate healing mechanisms without chemical toxicity. Highly effective for autoimmune, respiratory, and pediatric care.",
      "serv.d2.b1": "Potentized German remedies for cellular vitality",
      "serv.d2.b2": "Chronic allergy, sinus & bronchial asthma recovery",
      "serv.d2.b3": "100% safe, non-invasive solutions across all age groups",
      "serv.d3.title": "Siddha & Herbal Medicine",
      "serv.d3.desc": "Rooted in the ancient Tamil medical tradition, combining purified mineral extracts and rare botanicals for deep tissue rejuvenation and organ vitality restoration.",
      "serv.d3.b1": "Ancient 96-principle balance for organ revitalization",
      "serv.d3.b2": "Blood-purifying herbal compounds for chronic skin ailments",
      "serv.d3.b3": "Kaya Kalpa rejuvenation for sustained longevity",
      "serv.d4.title": "Naturopathy & Yoga Wellness",
      "serv.d4.desc": "Harnessing the five natural elements to detoxify, revitalize, and restore physiological homeostasis through therapeutic fasting, hydro-care, and lifestyle modification.",
      "serv.d4.b1": "Natural detox protocols & clinical dietary modification",
      "serv.d4.b2": "Therapeutic breathwork & posture for spondylosis & BP",
      "serv.d4.b3": "Alkaline nutrition for sustainable weight & metabolic balance",
      "serv.d5.title": "Global Herbal Medicine",
      "serv.d5.desc": "Evidence-backed botanical extracts and phytomolecules offering non-invasive alternatives for kidney stones, metabolic disorders, and immune deficiency.",
      "serv.d5.b1": "Standardized botanical extracts for tissue repair",
      "serv.d5.b2": "Non-invasive protocols for long-standing concerns",
      "serv.d5.b3": "Synergistic integration with classical AYUSH therapy",
      "serv.d6.title": "Chronic Disease Management",
      "serv.d6.desc": "Bringing Dr. Raju's 38+ years of clinical mastery to manage complex chronic illnesses. Specially designed for seniors, chronic joint disorders, and long-standing ailments across Vijayawada with personalized in-clinic evaluations and non-invasive natural medicines.",
      "serv.d6.b1": "Senior physician evaluations & metabolic assessment",
      "serv.d6.b2": "Multi-therapy remedies & custom diet counseling",
      "serv.d6.b3": "Ongoing recovery support & direct care",
      "doc.eyebrow": "MEET THE EXPERT",
      "doc.heading": "38+ years of holistic healing by <span class=\"muted\">Dr. T. Raju</span>",
      "doc.check1": "MD (AM)",
      "doc.check2": "5 Systems",
      "doc.check3": "50K+ Patients",
      "doc.desc": "Dr. T. Raju has been pioneering multi-therapy natural healing since 1987. A master of Homeopathy, Ayurveda, Siddha, Naturopathy, and Global Herbal Medicine, combining ancient wisdom with modern diagnostics to treat complex, chronic conditions without side effects.",
      "doc.cta": "Book An Appointment",
      "doc.label.spec": "Specialization",
      "doc.val.spec": "Multi-Therapy AYUSH",
      "doc.label.exp": "Experience",
      "doc.val.exp": "38+ Years",
      "doc.label.patients": "Patients Healed",
      "doc.val.patients": "50,000+",
      "doc.pill": "our treatments",
      "doc.slide.title": "Dr. T. Raju, MD (AM)",
      "doc.slide.sub": "Founder & Chief Physician, Raju AYUSH Hospital",
      "doc.story.text": "\"True healing begins when we harmonize body & mind, enhance natural disease resistance, and guide patients towards extraordinary health.\"",
      "doc.story.cta": "Read Our Story",
      "levels.tag": "PERSONALIZED HEALING",
      "levels.heading": "Integrative AYUSH therapies<br>tailored to your <span class=\"heading-accent\">healing journey</span>",
      "levels.explore": "Explore All Treatments",
      "levels.c1.badge": "personalized",
      "levels.c1.title": "Personalized Assessment",
      "levels.c1.desc": "We begin with comprehensive constitutional diagnosis across all 5 AYUSH systems to design a custom treatment protocol tailored specifically to your unique body and health goals.",
      "levels.c2.badge": "38+ yrs expert",
      "levels.c2.title": "Multi-Therapy Care",
      "levels.c2.desc": "Led by Dr. T. Raju with 38+ years of clinical mastery, we seamlessly integrate Homeopathy, Ayurveda, Siddha, Naturopathy, and Herbals for synergistic, root-cause healing.",
      "levels.c3.badge": "patient-first",
      "levels.c3.title": "Chronic Disease Care",
      "levels.c3.desc": "Experience specialized clinical consultations and personalized natural therapies for chronic ailments, featuring comprehensive pulse diagnosis, herbal formulations, and continuous physician guidance.",
      "levels.c4.badge": "lifelong wellness",
      "levels.c4.title": "Continuous Care",
      "levels.c4.desc": "Our care extends beyond symptom relief to sustained wellness, cellular rejuvenation, and preventive lifestyle guidance that protects your long-term vitality and immunity.",
      "spec.ayurveda.bnr.title": "Therapeutic Ayurvedic Healing & Care",
      "spec.ayurveda.bnr.sub": "Bringing your body, mind, and vital energies back into balance through classical pulse diagnosis, personalized herbal care, and authentic Vedic healing.",
      "spec.ayurveda.head": "Ayurveda Consultation & Multi-Therapy",
      "spec.homeo.bnr.title": "Constitutional Homeopathic Care",
      "spec.homeo.bnr.sub": "Gentle, root-cause healing tailored to your unique physical and emotional constitution, offering safe, non-invasive recovery with zero side effects.",
      "spec.homeo.head": "Advanced Constitutional Homeopathy (Homeo)",
      "spec.siddha.bnr.title": "Classical Siddha & Kaya Kalpa Therapy",
      "spec.siddha.bnr.sub": "Restoring vitality, cellular strength, and natural longevity through South India's ancient Siddha medical lineage and purified mineral-herbal care.",
      "spec.siddha.head": "Siddha Medicine & Kaya Kalpa",
      "spec.naturopathy.bnr.title": "Drugless Naturopathy & Lifestyle Wellness",
      "spec.naturopathy.bnr.sub": "Nurturing your body's innate power to heal itself through therapeutic nutrition, natural detox protocols, hydro-care, and nature's five elements.",
      "spec.naturopathy.head": "Naturopathy (Naturopathi) Care",
      "spec.herbal.bnr.title": "Evidence-Backed Global Herbal Medicine",
      "spec.herbal.bnr.sub": "Harnessing internationally researched botanical extracts, phytomolecules, and herbal nutraceuticals for safe, deep-acting therapeutic results.",
      "spec.herbal.head": "Global Herbal Medicine & Botanical Phytotherapy",
      "about.hero.title": "About Raju AYUSH Hospital",
      "about.hero.subtitle": "38+ Years of Integrative Healthcare & Holistic Healing Heritage in Vijayawada",
      "diseases.hero.title": "Diseases We Treat",
      "diseases.hero.subtitle": "Comprehensive natural healing for chronic, acute and complex health conditions",
      "contact.hero.title": "Contact Us",
      "contact.hero.subtitle": "Our doors are always open to provide compassionate AYUSH multi-therapy care and holistic healing",
      "contact.box.title": "Contact Info",
      "contact.label.address": "Hospital Address",
      "contact.label.phone": "Phone & Email Support",
      "contact.label.hours": "Working Hours",
      "contact.map.title": "Our Location Map",
    },
    tl: {
      "drawer.langlabel": "భాష:",
      "drawer.herbal": "› ప్రపంచ మూలికా వైద్యం",
      "drawer.naturopathy": "› నేచురోపతి వెల్నెస్",
      "drawer.siddha": "› సిద్ధ ఆరోగ్యం",
      "drawer.homeo": "› హోమియోపతి సంరక్షణ",
      "drawer.ayurveda": "› ఆయుర్వేద చికిత్స",
      "tc.c3.cta": "డయాబెటిస్ సంరక్షణ చూడండి",
      "tc.c3.desc": "నిరంతరం మందులు పెరగడం మరియు ఆందోళనల నుండి విముక్తి పొందండి. రక్తంలో చక్కెర స్థాయిలను తాత్కాలికంగా అణచివేయడం కాకుండా, ఇన్సులిన్ నిరోధకత మరియు జీవక్రియ అలసటను మూలాల నుండి సరిదిద్దుతాము. వ్యక్తిగత నేచురోపతి ఆహార నియమాలు మరియు మూలికా చికిత్సల ద్వారా క్లోమ గ్రంథి పనితీరును మెరుగుపరిచి, HbA1cని సహజంగా తగ్గించి ముఖ్య అవయవాలను రక్షిస్తాము.",
      "tc.c3.title": "మధుమేహం (షుగర్) & జీవక్రియ ఆరోగ్యం",
      "tc.c3.cat": "/ జీవక్రియ సమతుల్యత",
      "tc.c2.cta": "కిడ్నీ చికిత్స వివరాలు చూడండి",
      "tc.c2.desc": "మీ కిడ్నీల ఆరోగ్యాన్ని తిరిగి పొందండి మరియు డయాలసిస్‌పై ఆధారపడటాన్ని తగ్గించండి. పెరిగిన క్రియాటినిన్, దీర్ఘకాల కిడ్నీ వ్యాధి లేదా కిడ్నీ రాళ్ల సమస్య ఏదైనా మా ఆయుష్ సహజ చికిత్సలు శరీరానికి తోడ్పడతాయి. సిద్ధ మరియు మూలికా ఔషధాలు కిడ్నీ కణజాలాన్ని పునరుజ్జీవింపజేసి, ఫిల్ట్రేషన్‌ను మెరుగుపరిచి, శస్త్రచికిత్స లేకుండా రాళ్లను కరిగిస్తాయి.",
      "tc.c2.title": "మూత్రపిండాల వ్యాధులు & డయాలసిస్ నిర్వహణ",
      "tc.c2.cat": "/ మూత్రపిండాల సంరక్షణ",
      "tc.c1.cta": "గుండె చికిత్స వివరాలు చూడండి",
      "tc.c1.desc": "శస్త్రచికిత్స లేకుండా మీ గుండెను కాపాడుకోండి. కొరోనరీ బ్లాకులను సురక్షితంగా నియంత్రించడం, ప్రమాదకరమైన బైపాస్ లేదా స్టెంట్ సర్జరీలను నివారించడం మరియు అధిక రక్తపోటును సమతుల్యం చేయడంలో మేము రోగులకు సహాయం చేస్తాము. జర్మన్ హోమియోపతి మరియు ప్రామాణిక ఆయుర్వేద కార్డియో రసాయనాలను సమన్వయం చేసి రక్తనాళాల్లోని పూడికలను కరిగించి, గుండె కండరాలను బలోపేతం చేస్తాము.",
      "tc.c1.title": "గుండె జబ్బులు & వాల్వ్ / హార్ట్ బ్లాకులు",
      "tc.c1.cat": "/ గుండె సంరక్షణ",
      "tc.subtitle": "శస్త్రచికిత్స భయం లేకుండా, సహజంగా మరియు సురక్షితంగా దీర్ఘకాలిక వ్యాధులను నయం చేయడంలో 38+ సంవత్సరాల నిరూపిత అనుభవం.",
      "tc.eyebrow": "ముఖ్యమైన ఆరోగ్య సమస్యలు",
      "nav.home": "హోమ్",
      "nav.about": "మా గురించి",
      "nav.specialists": "స్పెషలిస్ట్‌లు",
      "nav.diseases": "వ్యాధులు",
      "nav.contact": "మమ్మల్ని సంప్రదించండి",
      "cta.appointment": "అపాయింట్‌మెంట్ పొందండి",
      "Book An Appointment": "అపాయింట్‌మెంట్ బుక్ చేయండి",
      "mega.title": "మా స్పెషలిస్ట్‌లు",
      "mega.ayurveda": "ఆయుర్వేద చికిత్స",
      "mega.ayurveda.desc": "శాస్త్రీయ వేద వైద్యం",
      "mega.homeopathy": "హోమియోపతి సంరక్షణ",
      "mega.homeopathy.desc": "సహజ మరియు సంపూర్ణ చికిత్స",
      "mega.siddha": "సిద్ధ ఆరోగ్యం",
      "mega.siddha.desc": "ప్రాచీన తమిళ వైద్య విధానం",
      "mega.naturopathy": "నేచురోపతి వెల్నెస్",
      "mega.naturopathy.desc": "సహజ నివారణ చికిత్సలు",
      "mega.herbal": "ప్రపంచ మూలికా వైద్యం",
      "mega.herbal.desc": "అంతర్జాతీయ నాణ్యమైన మూలికా సంరక్షణ",
      "mega.consult.heading": "మీకు ఏ చికిత్స సరైనదో తెలియదా?",
      "mega.consult.desc": "మా సీనియర్ వైద్యులు వ్యాధి మూల కారణాన్ని గుర్తించి, శాశ్వత ఉపశమనం కోసం సమగ్ర బహుళ-చికిత్సలను అందిస్తారు.",
      "mega.consult.btn": "అపాయింట్‌మెంట్ బుక్ చేసుకోండి",
      "mega.visual.tag": "సాంప్రదాయ వైద్యం",
      "mega.philosophy": "5 సాంప్రదాయ వైద్య విధానాలు. సమగ్ర సంరక్షణ. సంపూర్ణ ఆరోగ్యం.",
      "mega.explore.btn": "అన్ని చికిత్సలు మరియు థెరపీలను చూడండి",
      "mega.explore": "🌿   అన్ని చికిత్సలు మరియు థెరపీలను అన్వేషించండి",
      "hero.title": "మెరుగైన ఆరోగ్యం, సహజ సిద్ధంగా.",
      "hero.desc": "ఆయుర్వేదం, హోమియోపతి, నేచురోపతి, సిద్ధ మరియు మూలికా వైద్యాన్ని అపార అనుభవం, సంపూర్ణ అవగాహన మరియు వ్యక్తిగత శ్రద్ధతో మీ ఆరోగ్య సంరక్షణ కోసం ఒకే చోట అందిస్తున్నాము.",
      "story.intro": "సహజ వైద్యం మరియు ఇంటి ఆరోగ్య సంరక్షణకు రాజు ఆయుష్ హాస్పిటల్ అందించే సమగ్ర మార్గాన్ని తెలుసుకోండి.",
      "story.desc": "38 సంవత్సరాలకుపైగా, రాజు ఆయుష్ హాస్పిటల్ హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు విదేశీ హెర్బల్ మెడిసిన్‌లను కలిపి మూల కారణాన్ని చికిత్స చేయడం, ఇంట్లో కోలుకునే ప్రక్రియకు తోడ్పడడం మరియు దుష్ప్రభావాలు లేకుండా కుటుంబాలను స్థిరమైన ఆరోగ్యానికి నడిపించడం చేస్తోంది.",
      "footer.brand.desc": "38+ సంవత్సరాల క్లినికల్ నైపుణ్యంతో అసాధారణ ఆరోగ్య సేవలు & సమగ్ర సహజ వైద్యం అందిస్తున్నాము.",
      "footer.quicklinks": "త్వరిత లింక్‌లు",
      "footer.specialties": "మా ప్రత్యేకతలు",
      "footer.contact.title": "సంప్రదింపు సమాచారం",
      "footer.address": "విజయవాడ, ఆంధ్రప్రదేశ్",
      "footer.copyright": "© 2026 రాజు ఆయుష్ హాస్పిటల్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
      "footer.homeopathy": "హోమియోపతి సంరక్షణ",
      "footer.ayurveda": "ఆయుర్వేద చికిత్స",
      "footer.siddha": "సిద్ధ ఆరోగ్యం",
      "footer.naturopathy": "నేచురోపతి వెల్నెస్",
      "footer.herbal": "ప్రపంచ మూలికా వైద్యం",
      "footer.about": "మా గురించి",
      "footer.diseases": "వ్యాధులు & చికిత్సలు",
      "footer.contact": "సంప్రదించండి",
      "footer.emergency": "అత్యవసర / అపాయింట్‌మెంట్ సహాయం",
      "footer.emergency.time": "సోమ - ఆది: ఉదయం 9:00 - రాత్రి 9:00",
      "footer.phone": "+91 92900 00571",
      "footer.phone.alt": "+91 93986 68221",
      "footer.email": "info@rajuayush.com",
      "badge.heritage": "38+ సంవత్సరాల ప్రాచీన వైద్య నైపుణ్యం",
      "badge.healing": "బహుళ-చికిత్స సహజ సంరక్షణ",
      "stat.years": "38+",
      "stat.years.label": "సంవత్సరాల క్లినికల్ నైపుణ్యం",
      "stat.systems": "5",
      "stat.systems.label": "ఆయుష్ వైద్య విధానాలు",
      "stat.care": "24/7",
      "stat.care.label": "రోగుల సంరక్షణ & సేవలు",
      "stat.cases": "50,000+",
      "stat.cases.label": "స్వస్థత పొందిన రోగులు",
      "faq.title": "తరచుగా అడిగే ప్రశ్నలు",
      "faq.subtitle": "మీ సాధారణ ఆయుర్వేదం & బహుళ చికిత్స ఆరోగ్య ప్రశ్నలకు సమాధానాలు పొందండి",
      "faq.q1": "ఇతర క్లినిక్‌కు బదులుగా రాజు ఆయుష్ హాస్పిటల్‌ను ఎందుకు ఎంచుకోవాలి?",
      "faq.a1.p1": "<b>38+ సంవత్సరాల నిరూపిత నైపుణ్యం:</b> డా. రాజు మరియు మా వైద్య బృందం జర్మన్ హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు విదేశీ హెర్బల్స్‌ను కలిపి దాదాపు నాలుగు దశాబ్దాల బహుళ చికిత్స సహజ వైద్య నైపుణ్యాన్ని అందిస్తున్నారు. తాత్కాలిక ఉపశమనం కాకుండా మూల కారణాన్ని పరిష్కరించాలనుకుంటే, రాజు ఆయుష్ హాస్పిటల్ మీకు ఉత్తమ ఎంపిక.",
      "faq.a1.p2": "<b>వ్యక్తిగత సమగ్ర సంరక్షణ:</b> సాధారణ వాణిజ్య క్లినిక్‌ల మాదిరిగా కాకుండా, మీ ప్రత్యేక శరీర తత్త్వం, జీవనశైలి మరియు వ్యాధి తీవ్రతను బట్టి ప్రత్యేక చికిత్స ప్రణాళికను రూపొందిస్తాము.",
      "faq.a1.p3": "<b>దుష్ప్రభావాలు లేని సహజ ఫార్ములేషన్లు:</b> శరీర సహజ రోగనిరోధక శక్తిని పెంచడానికి ప్రతి చికిత్సలో ప్రామాణికమైన మూలికా మరియు సహజ ఔషధాలను ఉపయోగిస్తాము.",
      "faq.a1.p4": "<b>సౌకర్యవంతమైన విజయవాడ స్థానం & టెలిమెడిసిన్:</b> విజయవాడ పటమటలో సులభంగా చేరుకోగల ప్రదేశంలో ఉండటంతో పాటు, దేశవ్యాప్తంగా ఆన్‌లైన్ వీడియో కన్సల్టేషన్లు మరియు ఇంటి వద్దకే మందుల డెలివరీ సౌకర్యం ఉంది.",
      "faq.q2": "ఆయుర్వేద & సహజ మందులకు హానికర దుష్ప్రభావాలు ఉంటాయా?",
      "faq.a2.p1": "ఆయుర్వేదం మరియు బహుళ సహజ వైద్య విధానాలు వ్యక్తిగత వైద్య శాస్త్రాలు. అర్హులైన వైద్యులు సూచించినప్పుడు మా సహజ నివారణలు హానికర దుష్ప్రభావాలు లేకుండా అనేక ఆరోగ్య ప్రయోజనాలను అందిస్తాయి.",
      "faq.a2.p2": "రాజు ఆయుష్ హాస్పిటల్‌లో అన్ని ఔషధ మూలికలు, సారాలు మరియు నివారణలు స్వచ్ఛత, భద్రత మరియు మోతాదు ప్రమాణాలను పాటిస్తాయి, అందువల్ల పిల్లల నుండి వృద్ధుల వరకు అందరికీ భద్రత ఉంటుంది.",
      "faq.a2.p3": "ఉత్తమ ఫలితాల కోసం మీ ఆరోగ్య స్థితికి సరిపోయే వ్యక్తిగత మోతాదులు మరియు ఆహార మార్గదర్శకాల కోసం మా అనుభవజ్ఞులైన వైద్యులను సంప్రదించండి.",
      "faq.q3": "రాజు ఆయుష్ దీర్ఘకాలిక వ్యాధులకు చికిత్స అందిస్తుందా?",
      "faq.a3.p1": "అవును. మా \"గోల్డెన్ బ్యాలెన్స్ ఆఫ్ లైఫ్\" విధానం దిగువ వెన్నునొప్పి, మెడనొప్పి, సయాటికా, స్పాండిలోసిస్, మైగ్రేన్, సోరియాసిస్, ఎగ్జిమా, మధుమేహ నిర్వహణ, రక్తపోటు, ఊబకాయం, అలెర్జిక్ బ్రాంకైటిస్, ఆర్థరైటిస్ మరియు పక్షవాతం పునరావాసం వంటి దీర్ఘకాలిక సమస్యలకు ప్రత్యేక చికిత్సలను అందిస్తుంది.",
      "faq.a3.p2": "5 పరస్పరపూరక వైద్య విధానాల ద్వారా శరీర మరియు ప్రాణ శక్తులను సమతుల్యం చేసి, దీర్ఘకాల జీవశక్తిని పెంచేందుకు వ్యాధిని అనేక కోణాల్లో ఎదుర్కొంటాము.",
      "faq.q4": "చికిత్స పొందే ముందు ఏ జాగ్రత్తలు తీసుకోవాలి?",
      "faq.a4.p1": "మాతో మీ చికిత్స ప్రయాణం ప్రారంభించే ముందు ఈ సరళమైన దశలను పాటించాలని సూచిస్తున్నాము:",
      "faq.a4.li1": "<b>పూర్తి వైద్య చరిత్రను పంచుకోండి:</b> మీ సంప్రదింపు సమయంలో గత వైద్య రికార్డులు, పరీక్షల నివేదికలు మరియు ప్రస్తుత మందుల వివరాలను అందించండి.",
      "faq.a4.li2": "<b>క్రమంగా మార్పు (మందులను ఒక్కసారిగా ఆపవద్దు):</b> సాధారణ మందులు వాడుతుంటే, సహజ వైద్యం ద్వారా సురక్షితంగా కోలుకునేలా మా వైద్యులు దశలవారీగా తగ్గిస్తారు.",
      "faq.a4.li3": "<b>సూచించిన ఆహారం & దినచర్యను పాటించండి:</b> ఆయుర్వేద మరియు హెర్బల్ చికిత్సలు సరైన ఆహారం మరియు అలవాట్లతో సమన్వయంగా పనిచేస్తాయి. సిఫార్సు చేసిన పోషణ చికిత్స వేగాన్ని పెంచుతుంది.",
      "faq.a4.li4": "<b>క్లినిక్ లేదా వీడియో సంప్రదింపును షెడ్యూల్ చేయండి:</b> మీ ప్రాథమిక మూల్యాంకనాన్ని బుక్ చేసుకోవడానికి <a href=\"tel:+919290000571\">+91 92900 00571</a> లేదా <a href=\"tel:+919398668221\">+91 93986 68221</a> కు కాల్ చేయండి.",
      "form.title": "అపాయింట్‌మెంట్ బుక్ చేయండి",
      "form.name": "పూర్తి పేరు",
      "form.email": "ఇమెయిల్ చిరునామా",
      "form.phone": "ఫోన్ నంబర్ (+91...)",
      "form.gender.select": "రోగి లింగాన్ని ఎంచుకోండి",
      "form.gender.male": "పురుషుడు",
      "form.gender.female": "స్త్రీ",
      "form.gender.other": "ఇతర",
      "form.date": "అపాయింట్‌మెంట్ తేదీ",
      "form.time": "అపాయింట్‌మెంట్ సమయం",
      "form.message": "ఆరోగ్య సమస్యలు / సందేశం",
      "form.submit": "అపాయింట్‌మెంట్ పొందండి",
      "specialties.sidebar.title": "మా వైద్య విధానాలు",
      "specialties.sidebar.ayurveda": "1. ఆయుర్వేద చికిత్స",
      "specialties.sidebar.homeopathy": "2. హోమియోపతి సంరక్షణ",
      "specialties.sidebar.siddha": "3. సిద్ధ ఆరోగ్యం",
      "specialties.sidebar.naturopathy": "4. నేచురోపతి వెల్నెస్",
      "specialties.sidebar.herbal": "5. ప్రపంచ మూలికా వైద్యం",
      "ticker.item1": "ఆయుర్వేద చికిత్స",
      "ticker.item2": "హోమియోపతి సంరక్షణ",
      "ticker.item3": "సిద్ధ ఆరోగ్యం",
      "ticker.item4": "నేచురోపతి వెల్నెస్",
      "ticker.item5": "ప్రపంచ మూలికా వైద్యం",
      "ticker.item6": "38+ సంవత్సరాల నైపుణ్యం",
      "serv.badge": "మేము అందించే సేవలు",
      "serv.title": "మా ప్రధాన చికిత్సా సేవలు",
      "serv.viewall": "అన్ని చూడండి",
      "serv.btn": "చికిత్స వివరాలు",
      "serv.tab1": "థెరప్యూటిక్ ఆయుర్వేద సంరక్షణ",
      "serv.tab2": "కాన్‌స్టిట్యూషనల్ హోమియోపతి",
      "serv.tab3": "సిద్ధ & మూలికా వైద్యం",
      "serv.tab4": "నేచురోపతి & యోగా వెల్నెస్",
      "serv.tab5": "ప్రపంచ మూలికా వైద్యం",
      "serv.tab6": "దీర్ఘకాలిక వ్యాధుల నిర్వహణ",
      "serv.d1.title": "థెరప్యూటిక్ ఆయుర్వేదం",
      "serv.d1.desc": "ప్రామాణిక శాస్త్రీయ ఆయుర్వేద సంప్రదాయాల ద్వారా దోషాల సమతుల్యత, జీవక్రియల ఆరోగ్యం మరియు కండరాలు, కీళ్ల సంరక్షణను అందిస్తున్నాము. నాడీ పరీక్ష మరియు శాస్త్రీయ మూలికా చికిత్సలను నిపుణుల పర్యవేక్షణలో నిర్వహిస్తాము.",
      "serv.d1.b1": "శాస్త్రీయ ఆయుర్వేద ఔషధాలు & జీర్ణకోశ ఆరోగ్యం",
      "serv.d1.b2": "కీళ్ళు, నరాలు మరియు వెన్నెముక ఉపశమనం కోసం ఔషధ ఫార్ములేషన్లు",
      "serv.d1.b3": "వ్యక్తిగత ప్రకృతి విశ్లేషణ & ఆహార నియమాలు",
      "serv.d2.title": "కాన్‌స్టిట్యూషనల్ హోమియోపతి",
      "serv.d2.desc": "జర్మన్ కాన్‌స్టిట్యూషనల్ హోమియోపతి ద్వారా ఎటువంటి హానికర రసాయనాలు లేకుండా శరీర సహజ రోగనిరోధక శక్తిని ప్రేరేపిస్తాము. దీర్ఘకాలిక ఆటో ఇమ్యూన్ వ్యాధులు, శ్వాసకోశ అలర్జీలు, చర్మ సమస్యలు మరియు మైగ్రేన్ కోసం శాశ్వత నివారణ.",
      "serv.d2.b1": "కణస్థాయిలో శక్తినిచ్చే శక్తివంతమైన జర్మన్ ఔషధాలు",
      "serv.d2.b2": "దీర్ఘకాలిక అలర్జీలు, సైనస్ మరియు ఆస్తమాకు సహజ చికిత్స",
      "serv.d2.b3": "చిన్నపిల్లల నుండి వృద్ధుల వరకు 100% సురక్షితం",
      "serv.d3.title": "సిద్ధ & మూలికా వైద్యం",
      "serv.d3.desc": "శతాబ్దాల నాటి ద్రావిడ సిద్ధ వైద్యం మరియు ప్రాచీన బొటానికల్ సారాల ద్వారా అంతర్గత అవయవాలను బలపరుస్తాము. రక్తాన్ని శుద్ధి చేయడం, మూత్రపిండాల రాళ్లను కరిగించడం మరియు శస్త్రచికిత్స లేకుండా శరీర గ్రంథులను క్రమబద్ధీకరించడం మా ప్రత్యేకత.",
      "serv.d3.b1": "అవయవాల పునరుజ్జీవనం కోసం ప్రాచీన 96-తత్వాల సమతుల్యత",
      "serv.d3.b2": "క్లిష్టమైన చర్మ వ్యాధుల కోసం స్వచ్ఛమైన రక్త శుద్ధి మూలికలు",
      "serv.d3.b3": "దీర్ఘాయువు కోసం కాయకల్ప చికిత్సలు",
      "serv.d4.title": "నేచురోపతి & యోగా వెల్నెస్",
      "serv.d4.desc": "పంచ మహాభూతాల ఆధారంగా ఎటువంటి మందులు లేకుండా సహజ వైద్యం. పోషకాహార నియమాలు, ప్రత్యేక ఉపవాస విధానాలు మరియు జీవనశైలి మార్గదర్శకాల ద్వారా శరీరానికి కొత్త ఉత్సాహాన్ని అందిస్తాము.",
      "serv.d4.b1": "సహజ డిటాక్సిఫికేషన్ & పోషకాహార మార్గదర్శకం",
      "serv.d4.b2": "స్పాండిలోసిస్ మరియు రక్తపోటుకు జీవనశైలి & శ్వాస నియమాలు",
      "serv.d4.b3": "బరువు, మధుమేహ నియంత్రణకు ఆల్కలీన్ పోషకాహారం",
      "serv.d5.title": "ప్రపంచ మూలికా వైద్యం",
      "serv.d5.desc": "అంతర్జాతీయంగా గుర్తింపు పొందిన బొటానికల్ సారాలు మరియు మూలికా ఫైటోమాలిక్యూల్స్. ఈ చికిత్సా సమ్మేళనాలు లోతైన కణ స్థాయిలో పనిచేసి జీవక్రియ నష్టాన్ని తగ్గించి, రోగనిరోధక శక్తిని పెంచి, శస్త్రచికిత్స ప్రమాదం లేకుండా హార్మోన్ల సమతుల్యతను కాపాడతాయి.",
      "serv.d5.b1": "కణజాల మరమ్మత్తు కోసం ప్రామాణిక బొటానికల్ ఫార్ములేషన్లు",
      "serv.d5.b2": "దీర్ఘకాలిక సమస్యల కోసం నాన్-ఇన్వాసివ్ సహజ నివారణ",
      "serv.d5.b3": "సాంప్రదాయ ఆయుష్ విధానాలతో సమగ్ర అనుసంధానం",
      "serv.d6.title": "దీర్ఘకాలిక వ్యాధుల నిర్వహణ",
      "serv.d6.desc": "డా. రాజు గారి 38+ సంవత్సరాల క్లినికల్ నైపుణ్యంతో క్లిష్టమైన దీర్ఘకాలిక వ్యాధులను సమర్థవంతంగా నిర్వహించడం. విజయవాడ మరియు పరిసర ప్రాంతాల సీనియర్ సిటిజన్లు, దీర్ఘకాలిక కీళ్ల వ్యాధులు మరియు క్లిష్ట సమస్యల కోసం ప్రత్యేక క్లినికల్ మూల్యాంకనం మరియు సహజ ఔషధాలు.",
      "serv.d6.b1": "సీనియర్ వైద్యుల పరీక్ష & జీవక్రియ విశ్లేషణ",
      "serv.d6.b2": "బహుళ-వైద్య విధానాల ఔషధాలు & ప్రత్యేక ఆహార సలహాలు",
      "serv.d6.b3": "నిరంతర స్వస్థత మద్దతు & వ్యక్తిగత సంరక్షణ",
      "doc.eyebrow": "నిపుణుడిని కలవండి",
      "doc.heading": "డా. టి. రాజు గారి ఆధ్వర్యంలో <span class=\"muted\">38+ సంవత్సరాల సమగ్ర సహజ వైద్యం</span>",
      "doc.check1": "MD (AM)",
      "doc.check2": "5 వైద్య విధానాలు",
      "doc.check3": "50,000+ రోగులు",
      "doc.desc": "డా. టి. రాజు గారు 1987 నుండి బహుళ-చికిత్స సహజ వైద్యాన్ని అందిస్తున్నారు. హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు గ్లోబల్ హెర్బల్ మెడిసిన్‌లో నిపుణులు. ప్రాచీన విజ్ఞానాన్ని ఆధునిక రోగ నిర్ధారణతో సమన్వయం చేసి ఎటువంటి దుష్ప్రభావాలు లేకుండా దీర్ఘకాలిక సమస్యలకు చికిత్స అందిస్తారు.",
      "doc.cta": "అపాయింట్‌మెంట్ బుక్ చేయండి",
      "doc.label.spec": "ప్రత్యేకత",
      "doc.val.spec": "బహుళ-చికిత్స ఆయుష్",
      "doc.label.exp": "అనుభవం",
      "doc.val.exp": "38+ సంవత్సరాలు",
      "doc.label.patients": "స్వస్థత పొందిన రోగులు",
      "doc.val.patients": "50,000+",
      "doc.pill": "మా చికిత్సలు",
      "doc.slide.title": "డా. టి. రాజు, MD (AM)",
      "doc.slide.sub": "వ్యవస్థాపకులు & ప్రధాన వైద్యులు, రాజు ఆయుష్ హాస్పిటల్",
      "doc.story.text": "\"శరీరం మరియు మనస్సును సమతుల్యం చేసి, సహజ రోగనిరోధక శక్తిని పెంచి, రోగులను సంపూర్ణ ఆరోగ్యం వైపు నడిపించినప్పుడే నిజమైన స్వస్థత ప్రారంభమవుతుంది.\"",
      "doc.story.cta": "మా కథను చదవండి",
      "levels.tag": "వ్యక్తిగతీకరించిన వైద్యం",
      "levels.heading": "సమగ్ర ఆయుష్ చికిత్సలు<br>మీ <span class=\"heading-accent\">వైద్య ప్రయాణం</span> కోసం",
      "levels.explore": "అన్ని చికిత్సలను చూడండి",
      "levels.c1.badge": "వ్యక్తిగతీకరించిన",
      "levels.c1.title": "వ్యక్తిగత అంచనా",
      "levels.c1.desc": "మీ శరీర స్వభావం మరియు ఆరోగ్య లక్ష్యాలకు సరిపోయే వ్యక్తిగత చికిత్స ప్రణాళిక కోసం మేము 5 ఆయుష్ విధానాల ద్వారా సమగ్ర నిర్ధారణతో ప్రారంభిస్తాము.",
      "levels.c2.badge": "38+ సంవత్సరాల నిపుణుడు",
      "levels.c2.title": "బహుళ చికిత్స సంరక్షణ",
      "levels.c2.desc": "38+ సంవత్సరాల వైద్య నైపుణ్యం కలిగిన డా. టి. రాజు మార్గదర్శకత్వంలో, హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు హెర్బల్స్‌ను సమన్వయం చేసి మూల కారణ వైద్యం అందిస్తాము.",
      "levels.c3.badge": "రోగి ముందుగా",
      "levels.c3.title": "దీర్ఘకాలిక వ్యాధుల సంరక్షణ",
      "levels.c3.desc": "దీర్ఘకాలిక సమస్యల కోసం సమగ్ర నాడీ పరీక్ష, ప్రామాణిక మూలికా ఔషధాలు మరియు నిరంతర వైద్యుల పర్యవేక్షణతో ప్రత్యేక క్లినికల్ సంప్రదింపులు మరియు వ్యక్తిగత సహజ చికిత్సలను అనుభవించండి.",
      "levels.c4.badge": "జీవితాంత ఆరోగ్యం",
      "levels.c4.title": "నిరంతర సంరక్షణ",
      "levels.c4.desc": "మా సంరక్షణ లక్షణాల ఉపశమనాన్ని దాటి స్థిరమైన ఆరోగ్యం, కణ పునరుజ్జీవనం మరియు దీర్ఘకాల జీవశక్తి, రోగనిరోధక శక్తిని కాపాడే నివారణ జీవనశైలి మార్గదర్శకాన్ని అందిస్తుంది.",
      "spec.ayurveda.bnr.title": "ఆయుర్వేద సంప్రదింపు & సహజ స్వస్థత",
      "spec.ayurveda.bnr.sub": "ప్రాచీన నాడీ పరీక్ష, త్రిదోష సమతుల్యత మరియు సహజ మూలికా సంరక్షణతో మీ శరీరానికి సంపూర్ణ ఆరోగ్యాన్ని అందిస్తాము.",
      "spec.ayurveda.head": "ఆయుర్వేద సంప్రదింపు & బహుళ-చికిత్స",
      "spec.homeo.bnr.title": "హోమియోపతి చికిత్స & సహజ సంరక్షణ",
      "spec.homeo.bnr.sub": "మీ వ్యక్తిగత శరీర స్వభావానికి అనుగుణంగా, ఎటువంటి దుష్ప్రభావాలు లేకుండా దీర్ఘకాలిక సమస్యల నుండి సహజంగా కోలుకునే సురక్షితమైన మార్గం.",
      "spec.homeo.head": "అధునాతన శరీర స్వభావ హోమియోపతి సంరక్షణ",
      "spec.siddha.bnr.title": "సిద్ధ వైద్యం & కాయకల్ప పునరుజ్జీవనం",
      "spec.siddha.bnr.sub": "శతాబ్దాల నాటి ప్రాచీన తమిళ సిద్ధ వైద్య విధానాలతో కణజాల పునరుజ్జీవనం మరియు అంతర్గత అవయవాల సహజ బలాన్ని పునరుద్ధరిస్తాము.",
      "spec.siddha.head": "సిద్ధ వైద్యం & కాయకల్ప పునరుజ్జీవనం",
      "spec.naturopathy.bnr.title": "నేచురోపతి & సహజ వెల్నెస్",
      "spec.naturopathy.bnr.sub": "పోషకాహారం, సహజ డిటాక్స్ థెరపీ, యోగా మరియు ప్రకృతి పంచభూతాల ద్వారా మీ శరీరం స్వయంగా కోలుకునేలా తోడ్పడతాము.",
      "spec.naturopathy.head": "నేచురోపతి సహజ సంరక్షణ",
      "spec.herbal.bnr.title": "ప్రపంచ మూలికా వైద్యం & సహజ సంరక్షణ",
      "spec.herbal.bnr.sub": "అంతర్జాతీయ నాణ్యతా ప్రమాణాలతో కూడిన స్వచ్ఛమైన వనమూలికా సారాలతో మీ దీర్ఘకాలిక ఆరోగ్యం మరియు రోగనిరోధక శక్తిని కాపాడుతాము.",
      "spec.herbal.head": "ప్రపంచ మూలికా వైద్యం & వనమూలికా చికిత్స",
      "about.hero.title": "రాజు ఆయుష్ హాస్పిటల్ గురించి",
      "about.hero.subtitle": "విజయవాడలో 38+ సంవత్సరాల సమగ్ర ఆరోగ్య సంరక్షణ & సంపూర్ణ సహజ వైద్య నైపుణ్యం",
      "diseases.hero.title": "మేము చికిత్స అందించే వ్యాధులు",
      "diseases.hero.subtitle": "దీర్ఘకాలిక, తీవ్రమైన మరియు క్లిష్టమైన ఆరోగ్య సమస్యలకు సమగ్ర సహజ చికిత్స",
      "contact.hero.title": "మమ్మల్ని సంప్రదించండి",
      "contact.hero.subtitle": "మీ కోసం మా తలుపులు ఎల్లప్పుడూ తెరిచి ఉంటాయి, కరుణతో కూడిన ఆయుష్ బహుళ-చికిత్స మరియు సమగ్ర సంరక్షణ అందిస్తాము",
      "contact.box.title": "సంప్రదింపు వివరాలు",
      "contact.label.address": "ఆసుపత్రి చిరునామా",
      "contact.label.phone": "ఫోన్ & ఇమెయిల్ సహాయం",
      "contact.label.hours": "పని వేళలు",
      "contact.map.title": "మా స్థాన మ్యాప్",
    }
  };

  // Extra text map: English text -> Telugu text (for DOM walker)
  var extraTextMap = {
    "› Ayurvedic Therapy": "› ఆయుర్వేద చికిత్స",
    "› Homeopathic Care": "› హోమియోపతి సంరక్షణ",
    "› Siddha Healthcare": "› సిద్ధ ఆరోగ్యం",
    "› Naturopathy Wellness": "› నేచురోపతి వెల్నెస్",
    "› Global Herbal Medicine": "› ప్రపంచ మూలికా వైద్యం",
    "&rsaquo; Ayurvedic Therapy": "&rsaquo; ఆయుర్వేద చికిత్స",
    "&rsaquo; Homeopathic Care": "&rsaquo; హోమియోపతి సంరక్షణ",
    "&rsaquo; Siddha Healthcare": "&rsaquo; సిద్ధ ఆరోగ్యం",
    "&rsaquo; Naturopathy Wellness": "&rsaquo; నేచురోపతి వెల్నెస్",
    "&rsaquo; Global Herbal Medicine": "&rsaquo; ప్రపంచ మూలికా వైద్యం",
    "Nadi Pariksha,": "నాడీ పరీక్ష,",
    "Nadi Pariksha": "నాడీ పరీక్ష",
    "Dosha Balance": "దోష సమతుల్యం",
    "Herbal Formulations": "మూలికా ఫార్ములేషన్లు",
    "Varmam Therapy": "వర్మ చికిత్స",
    "Hydrotherapy": "హైడ్రోథెరపీ",
    "Diet & Nutrition": "ఆహారం & పోషణ",
    "Phytotherapy": "ఫైటోథెరపీ",
    "Botanical Extracts": "వృక్షసంబంధ సారం",
    "Language:": "భాష:",
    "Language": "భాష",
    "Wellness": "వెల్నెస్",
    "Global": "ప్రపంచ",
    "Pulse Diagnosis (Nadi)": "ప్రాచీన నాడీ పరీక్ష",
    "Pulse Diagnosis": "నాడీ పరీక్ష",
    "Safe, high-potency botanical extracts combining time-tested herbal wisdom with international quality standards for lasting vitality and immunity.": "అంతర్జాతీయ నాణ్యతా ప్రమాణాలతో కూడిన స్వచ్ఛమైన వనమూలికా సారాలతో మీ దీర్ఘకాలిక ఆరోగ్యం మరియు రోగనిరోధక శక్తిని కాపాడుతాము.",

    "Nurturing your body's innate power to heal itself through therapeutic nutrition, natural detox protocols, hydro-care, and nature's five elements.": "పోషకాహారం, సహజ డిటాక్స్ థెరపీ, యోగా మరియు ప్రకృతి పంచభూతాల ద్వారా మీ శరీరం స్వయంగా కోలుకునేలా తోడ్పడతాము.",

    "Restoring vitality, cellular strength, and natural longevity through South India's ancient Siddha medical lineage and purified mineral-herbal care.": "శతాబ్దాల నాటి ప్రాచీన తమిళ సిద్ధ వైద్య విధానాలతో కణజాల పునరుజ్జీవనం మరియు అంతర్గత అవయవాల సహజ బలాన్ని పునరుద్ధరిస్తాము.",

    "Gentle, root-cause healing tailored to your unique physical and emotional constitution, offering safe, non-invasive recovery with zero side effects.": "మీ వ్యక్తిగత శరీర స్వభావానికి అనుగుణంగా, ఎటువంటి దుష్ప్రభావాలు లేకుండా దీర్ఘకాలిక సమస్యల నుండి సహజంగా కోలుకునే సురక్షితమైన మార్గం.",

    "Bringing your body, mind, and vital energies back into balance through classical pulse diagnosis, personalized herbal care, and authentic Vedic healing.": "ప్రాచీన నాడీ పరీక్ష, త్రిదోష సమతుల్యత మరియు సహజ మూలికా సంరక్షణతో మీ శరీరానికి సంపూర్ణ ఆరోగ్యాన్ని అందిస్తాము.",

    "Drugless Naturopathy & Lifestyle Medicine": "నేచురోపతి సహజ సంరక్షణ",

    "Classical Siddha Medicine & Kaya Kalpa": "సిద్ధ వైద్యం & కాయకల్ప పునరుజ్జీవనం",

    "Advanced Constitutional Homeopathy Care": "అధునాతన శరీర స్వభావ హోమియోపతి సంరక్షణ",

    "Evidence-Backed Global Herbal Medicine": "ప్రపంచ మూలికా వైద్యం & సహజ సంరక్షణ",

    "Drugless Naturopathy & Lifestyle Wellness": "నేచురోపతి & సహజ వెల్నెస్",

    "Classical Siddha & Kaya Kalpa Therapy": "సిద్ధ వైద్యం & కాయకల్ప పునరుజ్జీవనం",

    "Constitutional Homeopathic Care": "హోమియోపతి చికిత్స & సహజ సంరక్షణ",

    "Therapeutic Ayurvedic Healing & Care": "ఆయుర్వేద సంప్రదింపు & సహజ స్వస్థత",

    "Foreign and German Herbal Medicine": "విదేశీ & జర్మన్ మూలికా వైద్యం",

    "Foreign & German Herbal Medicine": "విదేశీ & జర్మన్ మూలికా వైద్యం",

    "Ayurveda Consultation & Healing": "ఆయుర్వేద సంప్రదింపు & సహజ స్వస్థత",
    "Ayurveda Consultation & Healing": "ఆయుర్వేద సంప్రదింపు & సహజ స్వస్థత",
    "Ayurveda Consultation & Multi-Therapy": "ఆయుర్వేద సంప్రదింపు & బహుళ-చికిత్స",
    "Ayurveda Consultation & Multi-Therapy": "ఆయుర్వేద సంప్రదింపు & బహుళ-చికిత్స",
    "Ancient Ayurvedic pulse diagnosis, Tridosha balancing, and classical herbal medicine for complete wellness": "సంపూర్ణ ఆరోగ్యం కోసం ప్రాచీన ఆయుర్వేద నాడీ నిర్ధారణ, త్రిదోష సమతుల్యత మరియు శాస్త్రీయ మూలికా వైద్యం",
    "Homeopathy Treatment": "హోమియోపతి చికిత్స & సహజ సంరక్షణ",
    "Homeopathy Treatment & Constitutional Healing": "హోమియోపతి చికిత్స & శరీర స్వభావ స్వస్థత",
    "Advanced Constitutional Homeopathy (Homeo)": "అధునాతన శరీర స్వభావ హోమియోపతి సంరక్షణ",
    "German classical Homeopathy with potentized remedies for gentle, effective healing without side effects": "దుష్ప్రభావాలు లేకుండా సున్నితమైన, సమర్థవంతమైన స్వస్థత కోసం శక్తివంతమైన జర్మన్ శాస్త్రీయ హోమియోపతి",
    "Siddha Medicine": "సిద్ధ వైద్యం & కాయకల్ప పునరుజ్జీవనం",
    "Siddha Medicine & Kaya Kalpa": "సిద్ధ వైద్యం & కాయకల్ప పునరుజ్జీవనం",
    "Siddha Medicine & Kaya Kalpa": "సిద్ధ వైద్యం & కాయకల్ప పునరుజ్జీవనం",
    "Siddha Medicine & Kaya Kalpa Rejuvenation": "సిద్ధ వైద్యం & కాయకల్ప పునరుజ్జీవనం",
    "Traditional Tamil Siddha therapy using herbal, mineral, and botanical formulations for deep-rooted ailments": "దీర్ఘకాలిక సమస్యల కోసం మూలికా, ఖనిజ మరియు వనమూలికా ఫార్ములేషన్లతో సాంప్రదాయ తమిళ సిద్ధ చికిత్స",
    "Naturopathy & Wellness": "నేచురోపతి & సహజ వెల్నెస్",
    "Naturopathy & Wellness": "నేచురోపతి & సహజ వెల్నెస్",
    "Naturopathy (Naturopathi) Care": "నేచురోపతి సహజ సంరక్షణ",
    "Natural healing through diet therapy, hydrotherapy, yoga, and lifestyle modification for holistic recovery": "సమగ్ర స్వస్థత కోసం ఆహార చికిత్స, హైడ్రోథెరపీ, యోగా మరియు జీవనశైలి సవరణ ద్వారా సహజ వైద్యం",
    "Herbal Medicine": "ప్రపంచ మూలికా వైద్యం & సహజ సంరక్షణ",
    "Global Herbal Medicine & Botanical Care": "ప్రపంచ మూలికా వైద్యం & సహజ సంరక్షణ",
    "Global Herbal Medicine & Botanical Care": "ప్రపంచ మూలికా వైద్యం & సహజ సంరక్షణ",
    "Global Herbal Medicine & Botanical Phytotherapy": "ప్రపంచ మూలికా వైద్యం & వనమూలికా చికిత్స",
    "Global Herbal Medicine & Botanical Phytotherapy": "ప్రపంచ మూలికా వైద్యం & వనమూలికా చికిత్స",
    "International herbal formulations combining ancient wisdom with modern phytotherapy for safe, natural treatment": "సురక్షితమైన, సహజ చికిత్స కోసం ప్రాచీన విజ్ఞానాన్ని ఆధునిక ఫైటోథెరపీతో కలిపిన అంతర్జాతీయ మూలికా ఫార్ములేషన్లు",
    "About Raju AYUSH Hospital": "రాజు ఆయుష్ హాస్పిటల్ గురించి",
    "38+ Years of Integrative Healthcare & Holistic Healing Heritage in Vijayawada": "విజయవాడలో 38+ సంవత్సరాల సమగ్ర ఆరోగ్య సంరక్షణ & సంపూర్ణ సహజ వైద్య నైపుణ్యం",
    "38+ Years of Integrative Healthcare & Holistic Healing Heritage in Vijayawada": "విజయవాడలో 38+ సంవత్సరాల సమగ్ర ఆరోగ్య సంరక్షణ & సంపూర్ణ సహజ వైద్య నైపుణ్యం",
    "Diseases We Treat": "మేము చికిత్స అందించే వ్యాధులు",
    "Comprehensive natural healing for chronic, acute and complex health conditions": "దీర్ఘకాలిక, తీవ్రమైన మరియు క్లిష్టమైన ఆరోగ్య సమస్యలకు సమగ్ర సహజ చికిత్స",
    "Better Health, Naturally.": "మెరుగైన ఆరోగ్యం, సహజ సిద్ధంగా.",
    "Bringing Ayurveda, homoeopathy, naturopathy, Siddha and herbal care together with experience, understanding and a more personal approach to your health.": "ఆయుర్వేదం, హోమియోపతి, నేచురోపతి, సిద్ధ మరియు మూలికా వైద్యాన్ని అపార అనుభవం, సంపూర్ణ అవగాహన మరియు వ్యక్తిగత శ్రద్ధతో మీ ఆరోగ్య సంరక్షణ కోసం ఒకే చోట అందిస్తున్నాము.",
    "Empowering Care": "మెరుగైన ఆరోగ్యం, సహజ సిద్ధంగా.",
    "A dedicated Home Healthcare Service delivering personalized in-home medical and non-medical care": "ఆయుర్వేదం, హోమియోపతి, నేచురోపతి, సిద్ధ మరియు మూలికా వైద్యాన్ని అపార అనుభవం, సంపూర్ణ అవగాహన మరియు వ్యక్తిగత శ్రద్ధతో మీ ఆరోగ్య సంరక్షణ కోసం ఒకే చోట అందిస్తున్నాము.",
    "Contact Us": "మమ్మల్ని సంప్రదించండి",
    "ONE CLINIC. MULTIPLE PATHS": "ఒకే క్లినిక్. అనేక మార్గాలు",
    "TO HEALING.": "వైద్యానికి.",
    "Integrated Therapies.": "సమగ్ర చికిత్సలు.",
    "Holistic Wellness.": "సమగ్ర ఆరోగ్యం.",
    "We bring together the best of traditional and modern natural therapies to help you heal from the root cause.": "మూల కారణం నుండి మీరు నయం కావడానికి సాంప్రదాయ మరియు ఆధునిక సహజ చికిత్సలలో ఉత్తమమైనవాటిని ఒకచోట చేర్చాము.",
    "Learn more": "మరింత తెలుసుకోండి",
    "Explore Our Approach": "మా విధానాన్ని అన్వేషించండి",
    "Homeopathy": "హోమియోపతి",
    "Ayurveda": "ఆయుర్వేదం",
    "Siddha": "సిద్ధ",
    "Naturopathy": "నేచురోపతి",
    "Global Herbal Medicine": "ప్రపంచ మూలికా వైద్యం",
    "Book An Appointment": "అపాయింట్‌మెంట్ బుక్ చేయండి",
    "Get an Appointment": "అపాయింట్‌మెంట్ పొందండి",
    "Empowering Care": "\u0c38\u0c02\u0c30\u0c15\u0c4d\u0c37\u0c23\u0c28\u0c41 \u0c36\u0c15\u0c4d\u0c24\u0c3f\u0c35\u0c02\u0c24\u0c02 \u0c1a\u0c47\u0c2f\u0c21\u0c02",
    "A dedicated Home Healthcare Service delivering personalized in-home medical and non-medical care": "\u0c35\u0c4d\u0c2f\u0c15\u0c4d\u0c24\u0c3f\u0c17\u0c24\u0c40\u0c15\u0c30\u0c3f\u0c02\u0c1a\u0c3f\u0c28 \u0c07\u0c02\u0c1f\u0c3f \u0c35\u0c48\u0c26\u0c4d\u0c2f \u0c2e\u0c30\u0c3f\u0c2f\u0c41 \u0c35\u0c48\u0c26\u0c4d\u0c2f\u0c47\u0c24\u0c30 \u0c38\u0c02\u0c30\u0c15\u0c4d\u0c37\u0c23\u0c28\u0c41 \u0c05\u0c02\u0c26\u0c3f\u0c02\u0c1a\u0c47 \u0c12\u0c15 \u0c05\u0c02\u0c15\u0c3f\u0c24 \u0c07\u0c02\u0c1f\u0c3f \u0c06\u0c30\u0c4b\u0c17\u0c4d\u0c2f \u0c38\u0c47\u0c35",
    "Contact Us": "\u0c2e\u0c2e\u0c4d\u0c2e\u0c32\u0c4d\u0c28\u0c3f \u0c38\u0c02\u0c2a\u0c4d\u0c30\u0c26\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f",
    "ONE CLINIC. MULTIPLE PATHS": "\u0c12\u0c15\u0c47 \u0c15\u0c4d\u0c32\u0c3f\u0c28\u0c3f\u0c15\u0c4d. \u0c05\u0c28\u0c47\u0c15 \u0c2e\u0c3e\u0c30\u0c4d\u0c17\u0c3e\u0c32\u0c41",
    "TO HEALING.": "\u0c35\u0c48\u0c26\u0c4d\u0c2f\u0c3e\u0c28\u0c3f\u0c15\u0c3f.",
    "Integrated Therapies.": "\u0c38\u0c2e\u0c17\u0c4d\u0c30 \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38\u0c32\u0c41.",
    "Holistic Wellness.": "\u0c38\u0c2e\u0c17\u0c4d\u0c30 \u0c06\u0c30\u0c4b\u0c17\u0c4d\u0c2f\u0c02.",
    "We bring together the best of traditional and modern natural therapies to help you heal from the root cause.": "\u0c2e\u0c42\u0c32 \u0c15\u0c3e\u0c30\u0c23\u0c02 \u0c28\u0c41\u0c02\u0c21\u0c3f \u0c2e\u0c40\u0c30\u0c41 \u0c28\u0c2f\u0c02 \u0c15\u0c3e\u0c35\u0c21\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c38\u0c3e\u0c02\u0c2a\u0c4d\u0c30\u0c26\u0c3e\u0c2f \u0c2e\u0c30\u0c3f\u0c2f\u0c41 \u0c06\u0c27\u0c41\u0c28\u0c3f\u0c15 \u0c38\u0c39\u0c1c \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38\u0c32\u0c32\u0c4b \u0c09\u0c24\u0c4d\u0c24\u0c2e\u0c2e\u0c48\u0c28\u0c35\u0c3e\u0c1f\u0c3f\u0c28\u0c3f \u0c12\u0c15\u0c1a\u0c4b\u0c1f \u0c1a\u0c47\u0c30\u0c4d\u0c1a\u0c3e\u0c2e\u0c41.",
    "Learn more": "\u0c2e\u0c30\u0c3f\u0c02\u0c24 \u0c24\u0c46\u0c32\u0c41\u0c38\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f",
    "Explore Our Approach": "\u0c2e\u0c3e \u0c35\u0c3f\u0c27\u0c3e\u0c28\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c05\u0c28\u0c4d\u0c35\u0c47\u0c37\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f",
    "Homeopathy": "\u0c39\u0c4b\u0c2e\u0c3f\u0c2f\u0c4b\u0c2a\u0c24\u0c3f",
    "Ayurveda": "\u0c06\u0c2f\u0c41\u0c30\u0c4d\u0c35\u0c47\u0c26\u0c02",
    "Siddha": "\u0c38\u0c3f\u0c26\u0c4d\u0c27",
    "Naturopathy": "\u0c28\u0c47\u0c1a\u0c41\u0c30\u0c4b\u0c2a\u0c24\u0c3f",
    "Global Herbal Medicine": "ప్రపంచ మూలికా వైద్యం",
    "Orac Therapy": "\u0c13\u0c30\u0c3e\u0c15\u0c4d \u0c25\u0c46\u0c30\u0c2a\u0c40",
    "Stem Cell Therapy": "\u0c38\u0c4d\u0c1f\u0c46\u0c2e\u0c4d \u0c38\u0c46\u0c32\u0c4d \u0c25\u0c46\u0c30\u0c2a\u0c40",
    "Herbals": "\u0c39\u0c46\u0c30\u0c4d\u0c2c\u0c32\u0c4d\u0c38\u0c4d",
    "Nutraceuticals": "\u0c28\u0c4d\u0c2f\u0c42\u0c1f\u0c4d\u0c30\u0c3e\u0c38\u0c4d\u0c2f\u0c42\u0c1f\u0c3f\u0c15\u0c32\u0c4d\u0c38\u0c4d",
    "Phytomolecules": "\u0c2b\u0c48\u0c1f\u0c4b\u0c2e\u0c3e\u0c32\u0c3f\u0c15\u0c4d\u0c2f\u0c42\u0c32\u0c4d\u0c38\u0c4d",
    "Proven Excellence": "\u0c28\u0c3f\u0c30\u0c42\u0c2a\u0c3f\u0c24 \u0c09\u0c24\u0c4d\u0c24\u0c2e\u0c24",
    "Healing Lives for Over": "38 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41\u0c17\u0c3e \u0c1c\u0c40\u0c35\u0c3f\u0c24\u0c3e\u0c32\u0c28\u0c41 \u0c28\u0c2f\u0c02 \u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c3e\u0c2e\u0c41",
    "38 Years": "38 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41",
    "Patients Treated": "\u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38 \u0c1a\u0c47\u0c38\u0c3f\u0c28 \u0c30\u0c4b\u0c17\u0c41\u0c32\u0c41",
    "Years Experience": "\u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32 \u0c05\u0c28\u0c41\u0c2d\u0c35\u0c02",
    "AYUSH Systems": "\u0c06\u0c2f\u0c41\u0c37\u0c4d \u0c35\u0c4d\u0c2f\u0c35\u0c38\u0c4d\u0c25\u0c32\u0c41",
    "Patient Satisfaction": "\u0c30\u0c4b\u0c17\u0c3f \u0c38\u0c02\u0c24\u0c43\u0c2a\u0c4d\u0c24\u0c3f",
    "Meet Our Founder": "\u0c2e\u0c3e \u0c35\u0c4d\u0c2f\u0c35\u0c38\u0c4d\u0c25\u0c3e\u0c2a\u0c15\u0c41\u0c21\u0c3f\u0c28\u0c3f \u0c15\u0c32\u0c35\u0c02\u0c21\u0c3f",
    "Dr. T. Raju": "\u0c21\u0c3e. \u0c1f\u0c3f. \u0c30\u0c3e\u0c1c\u0c41",
    "\u2014 Dr. T. Raju": "\u2014 \u0c21\u0c3e. \u0c1f\u0c3f. \u0c30\u0c3e\u0c1c\u0c41",
    "Dr. T. Raju \u2014 MD (AM)": "\u0c21\u0c3e. \u0c1f\u0c3f. \u0c30\u0c3e\u0c1c\u0c41 \u2014 MD (AM)",
    "38+ Years Experience": "38+ \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32 \u0c05\u0c28\u0c41\u0c2d\u0c35\u0c02",
    "50,000+ Patients Treated": "50,000+ \u0c30\u0c4b\u0c17\u0c41\u0c32\u0c15\u0c41 \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38",
    "5 AYUSH Systems": "5 \u0c06\u0c2f\u0c41\u0c37\u0c4d \u0c35\u0c4d\u0c2f\u0c35\u0c38\u0c4d\u0c25\u0c32\u0c41",
    "What Our Patients Say": "\u0c2e\u0c3e \u0c30\u0c4b\u0c17\u0c41\u0c32\u0c41 \u0c0f\u0c2e\u0c02\u0c1f\u0c3e\u0c30\u0c41",
        "Stories of Healing": "వైద్య కథనాలు & రోగుల అనుభవాలు",
    "Real recovery experiences from patients treated through Dr. T. Raju’s 38+ years of multi-therapy AYUSH care.": "డా. టి. రాజు గారి 38+ సంవత్సరాల బహుళ-చికిత్స ఆయుష్ వైద్యం ద్వారా రోగులు పొందిన శాశ్వత ఉపశమనం మరియు కోలుకున్న నిజమైన అనుభవాలు.",
    "“I had severe lumbar spondylosis and chronic sciatica for 3 years. Orthopedic surgeons recommended spinal surgery, but Dr. T. Raju’s integrated multi-therapy approach, combining Panchakarma and German Homeopathy, relieved my nerve compression completely in 45 days without surgery!”": "“నేను 3 సంవత్సరాలుగా తీవ్రమైన లంబార్ స్పాండిలోసిస్ మరియు సయాటికా నొప్పితో బాధపడ్డాను. సర్జరీ చేయాలని డాక్టర్లు చెప్పారు, కానీ డా. టి. రాజు గారి ఆయుర్వేద పంచకర్మ మరియు జర్మన్ హోమియోపతి సమగ్ర చికిత్స ద్వారా కేవలం 45 రోజుల్లో ఎలాంటి ఆపరేషన్ లేకుండా నా నొప్పి పూర్తిగా నయమైంది!”",
    "K. Srinivasa Rao, Spine & Sciatica Care": "కె. శ్రీనివాసరావు, వెన్నెముక & సయాటికా కేర్",
    "K. Srinivasa Rao — Spine & Sciatica Care": "కె. శ్రీనివాసరావు, వెన్నెముక & సయాటికా కేర్",
    "K. Srinivasa Rao, Spine & Sciatica Care": "కె. శ్రీనివాసరావు, వెన్నెముక & సయాటికా కేర్",
    "K. Srinivasa Rao — Spine & Sciatica Care": "కె. శ్రీనివాసరావు, వెన్నెముక & సయాటికా కేర్",
    "“My severe skin psoriasis troubled me for 7 years with persistent scaling and itching. Dr. Raju’s customized herbal blood purifiers and gentle Homeopathic remedies cured my skin condition from the root cause without steroids or side effects.”": "“7 సంవత్సరాలుగా నన్ను తీవ్రంగా వేధించిన సోరియాసిస్ చర్మ వ్యాధి, దురద సమస్యను డా. రాజు గారు సూచించిన ప్రత్యేక హెర్బల్ ఔషధాలు మరియు సహజ హోమియోపతి ద్వారా స్టెరాయిడ్స్ లేకుండా శాశ్వతంగా నయం చేశారు.”",
    "Anuradha Reddy, Psoriasis & Skin Health": "అనూరాధ రెడ్డి, సోరియాసిస్ & చర్మ ఆరోగ్యం",
    "Anuradha Reddy — Psoriasis & Skin Health": "అనూరాధ రెడ్డి, సోరియాసిస్ & చర్మ ఆరోగ్యం",
    "Anuradha Reddy, Psoriasis & Skin Health": "అనూరాధ రెడ్డి, సోరియాసిస్ & చర్మ ఆరోగ్యం",
    "Anuradha Reddy — Psoriasis & Skin Health": "అనూరాధ రెడ్డి, సోరియాసిస్ & చర్మ ఆరోగ్యం",
    "“I suffered from uncontrolled diabetes, chronic GERD, and constant fatigue. Dr. T. Raju’s multi-system treatment combining Naturopathic detox and Siddha medicine stabilized my blood sugar and restored my vitality. His 38+ years of clinical wisdom is unmatched.”": "“అనియంత్రిత మధుమేహం, తీవ్రమైన గ్యాస్ట్రిక్ సమస్యలతో బాధపడుతున్న నాకు డా. రాజు గారి నేచురోపతి డిటాక్స్ మరియు సిద్ధ వైద్య విధానం సంపూర్ణ స్వస్థతను చేకూర్చాయి. వారి 38+ సంవత్సరాల అనుభవం ప్రతి రోగికి ఎంతో ధైర్యాన్ని ఇస్తుంది.”",
    "M. Venkateswara Prasad, Diabetes & Vitality": "ఎం. వెంకటేశ్వర ప్రసాద్, మధుమేహం & జీవశక్తి",
    "M. Venkateswara Prasad — Diabetes & Vitality": "ఎం. వెంకటేశ్వర ప్రసాద్, మధుమేహం & జీవశక్తి",
    "M. Venkateswara Prasad, Diabetes & Vitality": "ఎం. వెంకటేశ్వర ప్రసాద్, మధుమేహం & జీవశక్తి",
    "M. Venkateswara Prasad — Diabetes & Vitality": "ఎం. వెంకటేశ్వర ప్రసాద్, మధుమేహం & జీవశక్తి",
    "Frequently Asked Questions": "\u0c24\u0c30\u0c1a\u0c41\u0c17\u0c3e \u0c05\u0c21\u0c3f\u0c17\u0c47 \u0c2a\u0c4d\u0c30\u0c36\u0c4d\u0c28\u0c32\u0c41",
    "About Us": "\u0c2e\u0c3e \u0c17\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f",
    "Our Story": "\u0c2e\u0c3e \u0c15\u0c25",
    "Discover Raju AYUSH Hospital's integrated path to natural healing & clinical excellence.": "సహజ వైద్యం మరియు ఆయుష్ చికిత్సా నైపుణ్యానికి రాజు ఆయుష్ హాస్పిటల్ అందించే సమగ్ర మార్గాన్ని తెలుసుకోండి.",
    "For over 38 years, Raju AYUSH Hospital has combined Homeopathy, Ayurveda, Siddha, Naturopathy and Global Herbal Medicine to treat the root cause, restore vital health, and guide families toward lasting wellness without harmful side effects.": "38 సంవత్సరాలకుపైగా, రాజు ఆయుష్ హాస్పిటల్ హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు ప్రపంచ మూలికా వైద్యాన్ని కలిపి మూల కారణాన్ని చికిత్స చేయడం, ఆరోగ్యాన్ని పునరుద్ధరించడం మరియు దుష్ప్రభావాలు లేకుండా కుటుంబాలను స్థిరమైన ఆరోగ్యానికి నడిపించడం చేస్తోంది.",
    "Our Mission": "\u0c2e\u0c3e \u0c32\u0c15\u0c4d\u0c37\u0c4d\u0c2f\u0c02",
    "Our Vision": "\u0c2e\u0c3e \u0c26\u0c43\u0c37\u0c4d\u0c1f\u0c3f",
    "Get In Touch": "\u0c38\u0c02\u0c2a\u0c4d\u0c30\u0c26\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f",
    "Full Name": "\u0c2a\u0c42\u0c30\u0c4d\u0c24\u0c3f \u0c2a\u0c47\u0c30\u0c41",
    "Email Address": "\u0c07\u0c2e\u0c46\u0c2f\u0c3f\u0c32\u0c4d \u0c1a\u0c3f\u0c30\u0c41\u0c28\u0c3e\u0c2e\u0c3e",
    "Phone Number": "\u0c2b\u0c4b\u0c28\u0c4d \u0c28\u0c02\u0c2c\u0c30\u0c4d",
    "Your Message": "\u0c2e\u0c40 \u0c38\u0c02\u0c26\u0c47\u0c36\u0c02",
    "Send Message": "\u0c38\u0c02\u0c26\u0c47\u0c36\u0c02 \u0c2a\u0c02\u0c2a\u0c02\u0c21\u0c3f",
    "Visit Us": "\u0c2e\u0c2e\u0c4d\u0c2e\u0c32\u0c4d\u0c28\u0c3f \u0c38\u0c02\u0c26\u0c30\u0c4d\u0c36\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f",
    "Call Us": "\u0c2e\u0c2e\u0c4d\u0c2e\u0c32\u0c4d\u0c28\u0c3f \u0c15\u0c3e\u0c32\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f",
    "Email Us": "\u0c07\u0c2e\u0c46\u0c2f\u0c3f\u0c32\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f",
    "Home": "\u0c39\u0c4b\u0c2e\u0c4d",
    "About": "\u0c2e\u0c3e \u0c17\u0c41\u0c30\u0c3f\u0c02\u0c1a\u0c3f",
    "Specialists": "\u0c38\u0c4d\u0c2a\u0c46\u0c37\u0c32\u0c3f\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c41",
    "Diseases": "\u0c35\u0c4d\u0c2f\u0c3e\u0c27\u0c41\u0c32\u0c41",
    "Diseases We Treat": "\u0c2e\u0c47\u0c2e\u0c41 \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38 \u0c1a\u0c47\u0c38\u0c47 \u0c35\u0c4d\u0c2f\u0c3e\u0c27\u0c41\u0c32\u0c41",
    "Quick Links": "\u0c24\u0c4d\u0c35\u0c30\u0c3f\u0c24 \u0c32\u0c3f\u0c02\u0c15\u0c4d\u200c\u0c32\u0c41",
    "Our Specialties": "\u0c2e\u0c3e \u0c2a\u0c4d\u0c30\u0c24\u0c4d\u0c2f\u0c47\u0c15\u0c24\u0c32\u0c41",
    "Contact Info": "\u0c38\u0c02\u0c2a\u0c4d\u0c30\u0c26\u0c3f\u0c02\u0c2a\u0c41 \u0c38\u0c2e\u0c3e\u0c1a\u0c3e\u0c30\u0c02",
    "Get an Appointment": "\u0c05\u0c2a\u0c3e\u0c2f\u0c3f\u0c02\u0c1f\u0c4d\u200c\u0c2e\u0c46\u0c02\u0c1f\u0c4d \u0c2a\u0c4a\u0c02\u0c26\u0c02\u0c21\u0c3f",
    "Book Appointment": "\u0c05\u0c2a\u0c3e\u0c2f\u0c3f\u0c02\u0c1f\u0c4d\u200c\u0c2e\u0c46\u0c02\u0c1f\u0c4d \u0c2c\u0c41\u0c15\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f",
    "Book a Consultation": "\u0c38\u0c02\u0c2a\u0c4d\u0c30\u0c26\u0c3f\u0c02\u0c2a\u0c41 \u0c2c\u0c41\u0c15\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f",
    "Back to Home": "\u0c39\u0c4b\u0c2e\u0c4d\u200c\u0c15\u0c41 \u0c24\u0c3f\u0c30\u0c3f\u0c17\u0c3f \u0c35\u0c46\u0c33\u0c4d\u0c33\u0c02\u0c21\u0c3f",
    "Our Treatments": "\u0c2e\u0c3e \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38\u0c32\u0c41",
    "Key Benefits": "\u0c2e\u0c41\u0c16\u0c4d\u0c2f \u0c2a\u0c4d\u0c30\u0c2f\u0c4b\u0c1c\u0c28\u0c3e\u0c32\u0c41",
    "Our Approach": "\u0c2e\u0c3e \u0c35\u0c3f\u0c27\u0c3e\u0c28\u0c02",
    "Joint Pain & Arthritis": "\u0c15\u0c40\u0c33\u0c4d\u0c33 \u0c28\u0c4a\u0c2a\u0c4d\u0c2a\u0c3f & \u0c06\u0c30\u0c4d\u0c25\u0c30\u0c48\u0c1f\u0c3f\u0c38\u0c4d",
    "Skin Diseases": "\u0c1a\u0c30\u0c4d\u0c2e \u0c35\u0c4d\u0c2f\u0c3e\u0c27\u0c41\u0c32\u0c41",
    "Gastric & Heartburn": "\u0c17\u0c4d\u0c2f\u0c3e\u0c38\u0c4d\u0c1f\u0c4d\u0c30\u0c3f\u0c15\u0c4d & \u0c17\u0c41\u0c02\u0c21\u0c46\u0c32\u0c4d\u0c32\u0c4b \u0c2e\u0c02\u0c1f",
    "Migraine Relief": "\u0c2e\u0c48\u0c17\u0c4d\u0c30\u0c47\u0c28\u0c4d \u0c09\u0c2a\u0c36\u0c2e\u0c28\u0c02",
    "Hair Loss & Dandruff": "\u0c1c\u0c41\u0c1f\u0c4d\u0c1f\u0c41 \u0c30\u0c3e\u0c32\u0c21\u0c02 & \u0c1a\u0c41\u0c02\u0c21\u0c4d\u0c30\u0c41",
    "Acne & Pimple Treatment": "\u0c2e\u0c4a\u0c1f\u0c3f\u0c2e\u0c32\u0c41 & \u0c2a\u0c3f\u0c02\u0c2a\u0c41\u0c32\u0c4d \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38",
    "Anxiety & Nervousness": "\u0c06\u0c02\u0c26\u0c4b\u0c33\u0c28 & \u0c28\u0c3e\u0c21\u0c40 \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24",
    "Depression & Mood Swings": "\u0c28\u0c3f\u0c30\u0c3e\u0c36 & \u0c2e\u0c3e\u0c28\u0c38\u0c3f\u0c15 \u0c12\u0c21\u0c3f\u0c26\u0c41\u0c21\u0c41\u0c15\u0c41\u0c32\u0c41",
    "Piles & Hemorrhoids": "\u0c2a\u0c48\u0c32\u0c4d\u0c38\u0c4d & \u0c39\u0c47\u0c2e\u0c4a\u0c30\u0c3e\u0c2f\u0c3f\u0c21\u0c4d\u0c38\u0c4d",
    "Dust Allergy & Cold": "\u0c27\u0c42\u0c33\u0c3f \u0c05\u0c32\u0c46\u0c30\u0c4d\u0c1c\u0c40 & \u0c1c\u0c32\u0c41\u0c2c\u0c41",
    "Urinary Infections": "\u0c2e\u0c42\u0c24\u0c4d\u0c30 \u0c07\u0c28\u0c4d\u0c2b\u0c46\u0c15\u0c4d\u0c37\u0c28\u0c4d\u0c32\u0c41",
    "Insomnia & Sleep Disorders": "\u0c28\u0c3f\u0c26\u0c4d\u0c30\u0c32\u0c47\u0c2e\u0c3f & \u0c28\u0c3f\u0c26\u0c4d\u0c30 \u0c30\u0c41\u0c17\u0c4d\u0c2e\u0c24\u0c32\u0c41",
    "Chronic Cough": "\u0c26\u0c40\u0c30\u0c4d\u0c18\u0c15\u0c3e\u0c32\u0c3f\u0c15 \u0c26\u0c17\u0c4d\u0c17\u0c41",
    "Gas & Bloating": "\u0c17\u0c4d\u0c2f\u0c3e\u0c38\u0c4d & \u0c09\u0c2c\u0c4d\u0c2c\u0c30\u0c02",
    "Loss of Appetite": "\u0c06\u0c15\u0c32\u0c3f \u0c24\u0c17\u0c4d\u0c17\u0c21\u0c02",
    "General Body Weakness": "\u0c38\u0c3e\u0c27\u0c3e\u0c30\u0c23 \u0c36\u0c30\u0c40\u0c30 \u0c2c\u0c32\u0c39\u0c40\u0c28\u0c24",
    "Viral Fever Prevention": "\u0c35\u0c48\u0c30\u0c32\u0c4d \u0c1c\u0c4d\u0c35\u0c30\u0c02 \u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c23",
    "Heart & Chest Pain": "\u0c39\u0c43\u0c26\u0c2f\u0c02 & \u0c1b\u0c3e\u0c24\u0c40 \u0c28\u0c4a\u0c2a\u0c4d\u0c2a\u0c3f",
    "Nausea & Vomiting": "\u0c35\u0c3f\u0c15\u0c3e\u0c30\u0c02 & \u0c35\u0c3e\u0c02\u0c24\u0c41\u0c32\u0c41",
    "Surgical Wound Healing": "\u0c36\u0c38\u0c4d\u0c24\u0c4d\u0c30\u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38 \u0c17\u0c3e\u0c2f\u0c02 \u0c28\u0c2f\u0c02",
    "Skin Rashes & Itching": "\u0c1a\u0c30\u0c4d\u0c2e \u0c26\u0c26\u0c4d\u0c26\u0c41\u0c30\u0c4d\u0c32\u0c41 & \u0c26\u0c41\u0c30\u0c26",
    "Anemia & Constipation": "\u0c30\u0c15\u0c4d\u0c24\u0c39\u0c40\u0c28\u0c24 & \u0c2e\u0c32\u0c2c\u0c26\u0c4d\u0c27\u0c15\u0c02",
    "Throat & Nose Blockage": "\u0c17\u0c4a\u0c02\u0c24\u0c41 & \u0c2e\u0c41\u0c15\u0c4d\u0c15\u0c41 \u0c05\u0c21\u0c4d\u0c21\u0c41\u0c2a\u0c21\u0c1f\u0c02",
    "Diarrhea & Dysentery": "\u0c05\u0c24\u0c3f\u0c38\u0c3e\u0c30\u0c02 & \u0c35\u0c3f\u0c30\u0c47\u0c1a\u0c28\u0c3e\u0c32\u0c41",
    "Swelling & Inflammation": "\u0c35\u0c3e\u0c2a\u0c41 & \u0c07\u0c28\u0c4d\u0c2b\u0c4d\u0c32\u0c2e\u0c47\u0c37\u0c28\u0c4d",
    "Sweating & Cracked Heels": "\u0c1a\u0c46\u0c2e\u0c1f & \u0c2a\u0c17\u0c3f\u0c32\u0c3f\u0c28 \u0c2e\u0c21\u0c2e\u0c32\u0c41",
    "Vijayawada, Andhra Pradesh": "\u0c35\u0c3f\u0c1c\u0c2f\u0c35\u0c3e\u0c21, \u0c06\u0c02\u0c27\u0c4d\u0c30\u0c2a\u0c4d\u0c30\u0c26\u0c47\u0c36\u0c4d",
    "OUR SPECIALISTS": "\u0c2e\u0c3e \u0c38\u0c4d\u0c2a\u0c46\u0c37\u0c32\u0c3f\u0c38\u0c4d\u0c1f\u0c4d\u200c\u0c32\u0c41",
    "Herbal": "\u0c39\u0c46\u0c30\u0c4d\u0c2c\u0c32\u0c4d",
    "Ayurveda Consultation": "\u0c06\u0c2f\u0c41\u0c30\u0c4d\u0c35\u0c47\u0c26 \u0c38\u0c02\u0c2a\u0c4d\u0c30\u0c26\u0c3f\u0c02\u0c2a\u0c41",
    "Homeopathy Treatment": "\u0c39\u0c4b\u0c2e\u0c3f\u0c2f\u0c4b\u0c2a\u0c24\u0c3f \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38",
    "Siddha Medicine": "\u0c38\u0c3f\u0c26\u0c4d\u0c27 \u0c35\u0c48\u0c26\u0c4d\u0c2f\u0c02",
    "Naturopathy Treatment": "\u0c28\u0c47\u0c1a\u0c41\u0c30\u0c4b\u0c2a\u0c24\u0c3f \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38",
    "Herbal Medicine": "\u0c39\u0c46\u0c30\u0c4d\u0c2c\u0c32\u0c4d \u0c2e\u0c46\u0c21\u0c3f\u0c38\u0c3f\u0c28\u0c4d",
    "Homeo": "\u0c39\u0c4b\u0c2e\u0c3f\u0c2f\u0c4b",
    "Care Options": "\u0c38\u0c02\u0c30\u0c15\u0c4d\u0c37\u0c23 \u0c0e\u0c02\u0c2a\u0c3f\u0c15\u0c32\u0c41",
    "Specialized Focus": "\u0c2a\u0c4d\u0c30\u0c24\u0c4d\u0c2f\u0c47\u0c15 \u0c26\u0c43\u0c37\u0c4d\u0c1f\u0c3f",
    "Eldercare": "\u0c35\u0c43\u0c26\u0c4d\u0c27\u0c41\u0c32 \u0c38\u0c02\u0c30\u0c15\u0c4d\u0c37\u0c23",
    "Disability Care": "\u0c35\u0c48\u0c15\u0c32\u0c4d\u0c2f \u0c38\u0c02\u0c30\u0c15\u0c4d\u0c37\u0c23",
    "Chronic Illness Support": "\u0c26\u0c40\u0c30\u0c4d\u0c18\u0c15\u0c3e\u0c32\u0c3f\u0c15 \u0c05\u0c28\u0c3e\u0c30\u0c4b\u0c17\u0c4d\u0c2f \u0c38\u0c39\u0c3e\u0c2f\u0c02",
    "Client Experiences": "\u0c15\u0c4d\u0c32\u0c2f\u0c3f\u0c02\u0c1f\u0c4d \u0c05\u0c28\u0c41\u0c2d\u0c35\u0c3e\u0c32\u0c41",
    "Conditions We Heal": "\u0c2e\u0c47\u0c2e\u0c41 \u0c28\u0c2f\u0c02 \u0c1a\u0c47\u0c38\u0c47 \u0c38\u0c2e\u0c38\u0c4d\u0c2f\u0c32\u0c41",
    "Diseases We Treat": "\u0c2e\u0c47\u0c2e\u0c41 \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38 \u0c1a\u0c47\u0c38\u0c47 \u0c35\u0c4d\u0c2f\u0c3e\u0c27\u0c41\u0c32\u0c41",
    "Treatment Approach": "\u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38 \u0c35\u0c3f\u0c27\u0c3e\u0c28\u0c02",
    "Nervous System": "\u0c28\u0c3e\u0c21\u0c40 \u0c35\u0c4d\u0c2f\u0c35\u0c38\u0c4d\u0c25",
    "Eye Diseases": "\u0c15\u0c02\u0c1f\u0c3f \u0c35\u0c4d\u0c2f\u0c3e\u0c27\u0c41\u0c32\u0c41",
    "Throat / ENT": "\u0c17\u0c4a\u0c02\u0c24\u0c41 / ENT",
    "Liver Diseases": "\u0c15\u0c3e\u0c32\u0c47\u0c2f \u0c35\u0c4d\u0c2f\u0c3e\u0c27\u0c41\u0c32\u0c41",
    "Kidney Diseases": "\u0c2e\u0c42\u0c24\u0c4d\u0c30\u0c2a\u0c3f\u0c02\u0c21 \u0c35\u0c4d\u0c2f\u0c3e\u0c27\u0c41\u0c32\u0c41",
    "Bone & Joint": "\u0c0e\u0c2e\u0c41\u0c15\u0c32\u0c41 & \u0c15\u0c40\u0c33\u0c4d\u0c32\u0c41",
    "Hair & Beauty": "\u0c1c\u0c41\u0c1f\u0c4d\u0c1f\u0c41 & \u0c38\u0c4c\u0c02\u0c26\u0c30\u0c4d\u0c2f\u0c02",
    "Stomach / Digestive": "\u0c15\u0c21\u0c41\u0c2a\u0c41 / \u0c1c\u0c40\u0c30\u0c4d\u0c23\u0c15\u0c4d\u0c30\u0c3f\u0c2f",
    "Heart Diseases": "\u0c17\u0c41\u0c02\u0c21\u0c46 \u0c35\u0c4d\u0c2f\u0c3e\u0c27\u0c41\u0c32\u0c41",
    "Reproductive Health": "\u0c2a\u0c4d\u0c30\u0c1c\u0c28\u0c28 \u0c06\u0c30\u0c4b\u0c17\u0c4d\u0c2f\u0c02",
    "Infections": "\u0c07\u0c28\u0c4d\u0c2b\u0c46\u0c15\u0c4d\u0c37\u0c28\u0c4d\u0c32\u0c41",
    "Prostate Health": "\u0c2a\u0c4d\u0c30\u0c4b\u0c38\u0c4d\u0c1f\u0c47\u0c1f\u0c4d \u0c06\u0c30\u0c4b\u0c17\u0c4d\u0c2f\u0c02",
    "Pregnancy Care": "\u0c17\u0c30\u0c4d\u0c2d\u0c27\u0c3e\u0c30\u0c23 \u0c38\u0c02\u0c30\u0c15\u0c4d\u0c37\u0c23",
    "Body Pains": "\u0c36\u0c30\u0c40\u0c30 \u0c28\u0c4a\u0c2a\u0c4d\u0c2a\u0c41\u0c32\u0c41",
    "Chronic Diseases": "\u0c26\u0c40\u0c30\u0c4d\u0c18\u0c15\u0c3e\u0c32\u0c3f\u0c15 \u0c35\u0c4d\u0c2f\u0c3e\u0c27\u0c41\u0c32\u0c41",
    "Mental Health": "\u0c2e\u0c3e\u0c28\u0c38\u0c3f\u0c15 \u0c06\u0c30\u0c4b\u0c17\u0c4d\u0c2f\u0c02",
    "Why Choose Us": "\u0c2e\u0c2e\u0c4d\u0c2e\u0c32\u0c4d\u0c28\u0c3f \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c41 \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c35\u0c3e\u0c32\u0c3f",
    "Why Alternative Medicine?": "\u0c2a\u0c4d\u0c30\u0c24\u0c4d\u0c2f\u0c3e\u0c2e\u0c4d\u0c28\u0c3e\u0c2f \u0c35\u0c48\u0c26\u0c4d\u0c2f\u0c02 \u0c0e\u0c02\u0c26\u0c41\u0c15\u0c41?",
    "Treatment WITHOUT Surgery": "\u0c36\u0c38\u0c4d\u0c24\u0c4d\u0c30\u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38 \u0c32\u0c47\u0c15\u0c41\u0c02\u0c21\u0c3e \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38",
    "Zero Side Effects": "\u0c26\u0c41\u0c37\u0c4d\u0c2a\u0c4d\u0c30\u0c2d\u0c3e\u0c35\u0c3e\u0c32\u0c41 \u0c32\u0c47\u0c35\u0c41",
    "Immunity Boosting Medicines": "\u0c30\u0c4b\u0c17\u0c28\u0c3f\u0c30\u0c4b\u0c27\u0c15 \u0c36\u0c15\u0c4d\u0c24\u0c3f\u0c28\u0c3f \u0c2a\u0c46\u0c02\u0c1a\u0c47 \u0c2e\u0c02\u0c26\u0c41\u0c32\u0c41",
    "5 Systems Combined Power": "5 \u0c35\u0c48\u0c26\u0c4d\u0c2f \u0c35\u0c4d\u0c2f\u0c35\u0c38\u0c4d\u0c25\u0c32 \u0c38\u0c02\u0c2f\u0c41\u0c15\u0c4d\u0c24 \u0c36\u0c15\u0c4d\u0c24\u0c3f",
    "38 Years Battle-Tested": "38 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32 \u0c28\u0c3f\u0c30\u0c42\u0c2a\u0c3f\u0c24 \u0c05\u0c28\u0c41\u0c2d\u0c35\u0c02",
    "Telemedicine Available": "\u0c1f\u0c46\u0c32\u0c3f\u0c2e\u0c46\u0c21\u0c3f\u0c38\u0c3f\u0c28\u0c4d \u0c05\u0c02\u0c26\u0c41\u0c2c\u0c3e\u0c1f\u0c41\u0c32\u0c4b",
    "Your Healing Journey": "\u0c2e\u0c40 \u0c35\u0c48\u0c26\u0c4d\u0c2f \u0c2a\u0c4d\u0c30\u0c2f\u0c3e\u0c23\u0c02",
    "How It Works": "\u0c07\u0c26\u0c3f \u0c0e\u0c32\u0c3e \u0c2a\u0c28\u0c3f\u0c1a\u0c47\u0c38\u0c4d\u0c24\u0c41\u0c02\u0c26\u0c3f",
    "Consultation": "\u0c38\u0c02\u0c2a\u0c4d\u0c30\u0c26\u0c3f\u0c02\u0c2a\u0c41",
    "Multi-System Diagnosis": "\u0c2c\u0c39\u0c41\u0c33 \u0c35\u0c4d\u0c2f\u0c35\u0c38\u0c4d\u0c25\u0c32 \u0c28\u0c3f\u0c30\u0c4d\u0c27\u0c3e\u0c30\u0c23",
    "Custom Treatment Plan": "\u0c35\u0c4d\u0c2f\u0c15\u0c4d\u0c24\u0c3f\u0c17\u0c24 \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38 \u0c2a\u0c4d\u0c30\u0c23\u0c3e\u0c33\u0c3f\u0c15",
    "Natural Healing Phase": "\u0c38\u0c39\u0c1c \u0c35\u0c48\u0c26\u0c4d\u0c2f \u0c26\u0c36",
    "Immunity Fortification": "\u0c30\u0c4b\u0c17\u0c28\u0c3f\u0c30\u0c4b\u0c27\u0c15 \u0c2c\u0c32\u0c40\u0c15\u0c30\u0c23",
        "Chronic Disease Care": "దీర్ఘకాలిక వ్యాధుల సంరక్షణ",
    "Experience specialized clinical consultations and personalized natural therapies for chronic ailments, featuring comprehensive pulse diagnosis, herbal formulations, and continuous physician guidance.": "దీర్ఘకాలిక సమస్యల కోసం సమగ్ర నాడీ పరీక్ష, ప్రామాణిక మూలికా ఔషధాలు మరియు నిరంతర వైద్యుల పర్యవేక్షణతో ప్రత్యేక క్లినికల్ సంప్రదింపులు మరియు వ్యక్తిగత సహజ చికిత్సలను అనుభవించండి.",
    "Integrative AYUSH therapies": "సమగ్ర ఆయుష్ చికిత్సలు",
    "tailored to your": "మీ కోసం రూపొందించిన",
    "Integrative AYUSH therapies tailored to your": "సమగ్ర ఆయుష్ చికిత్సలు మీ కోసం రూపొందించిన",
    "Integrative AYUSH therapies<br>tailored to your <span class=\"heading-accent\">healing journey</span>": "సమగ్ర ఆయుష్ చికిత్సలు<br>మీ <span class=\"heading-accent\">వైద్య ప్రయాణం</span> కోసం",
    "Personalized Assessment": "\u0c35\u0c4d\u0c2f\u0c15\u0c4d\u0c24\u0c3f\u0c17\u0c24 \u0c05\u0c02\u0c1a\u0c28\u0c3e",
    "Multi-Therapy Care": "\u0c2c\u0c39\u0c41\u0c33 \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38 \u0c38\u0c02\u0c30\u0c15\u0c4d\u0c37\u0c23",
    "In-Home Support": "\u0c07\u0c02\u0c1f\u0c3f\u0c32\u0c4b \u0c38\u0c39\u0c3e\u0c2f\u0c02",
    "Health Insights": "\u0c06\u0c30\u0c4b\u0c17\u0c4d\u0c2f \u0c38\u0c42\u0c1a\u0c28\u0c32\u0c41",
    "Latest Health Tips": "\u0c24\u0c3e\u0c1c\u0c3e \u0c06\u0c30\u0c4b\u0c17\u0c4d\u0c2f \u0c1a\u0c3f\u0c1f\u0c4d\u0c15\u0c3e\u0c32\u0c41",
    "Trusted & Recognized": "\u0c28\u0c2e\u0c4d\u0c2e\u0c15\u0c2e\u0c48\u0c28 & \u0c17\u0c41\u0c30\u0c4d\u0c24\u0c3f\u0c02\u0c2a\u0c41 \u0c2a\u0c4a\u0c02\u0c26\u0c3f\u0c28",
    "Certified & Affiliated With": "\u0c27\u0c4d\u0c30\u0c41\u0c35\u0c40\u0c15\u0c30\u0c3f\u0c02\u0c1a\u0c2c\u0c21\u0c3f\u0c28 & \u0c05\u0c28\u0c41\u0c2c\u0c02\u0c27\u0c2e\u0c48\u0c28",
    "Discover": "తెలుసుకోండి",
    "how": "ఎలా",
    "are": "ఉన్నాయి",
    "making": "సృష్టిస్తున్నాము",
    "difference": "మార్పు",
    "the": "ఈ",
    "home": "ఇంటి",
    "healthcare": "ఆరోగ్య సంరక్షణ",
    "industry.": "రంగంలో.",
    "This": "ఈ",
    "space": "స్థలం",
    "share": "పంచుకోండి",
    "more": "మరింత",
    "about": "గురించి",
    "your": "మీ",
    "business.": "సేవ గురించి.",
    "Explain": "వివరించండి",
    "who's": "ఎవరు",
    "behind": "వెనుక",
    "what": "ఏమిటి",
    "does": "చేస్తుంది",
    "and": "మరియు",
    "this": "ఈ",
    "site": "సైట్",
    "has": "కలిగి ఉంది",
    "offer.": "అందించడానికి.",
    "opportunity": "అవకాశం",
    "tell": "చెప్పండి",
    "story": "కథ",
    "business": "సేవ",
    "describe": "వివరించండి",
    "special": "ప్రత్యేక",
    "service": "సేవ",
    "product": "ఉత్పత్తి",
    "offers.": "అందిస్తుంది.",
    "You": "మీరు",
    "can": "చేయవచ్చు",
    "use": "ఉపయోగించండి",
    "section": "విభాగం",
    "company's": "సంస్థ యొక్క",
    "history": "చరిత్ర",
    "highlight": "ప్రత్యేకంగా చూపండి",
    "particular": "నిర్దిష్ట",
    "feature": "లక్షణం",
    "that": "అది",
    "sets": "వేరు చేస్తుంది",
    "apart": "ప్రత్యేకంగా",
    "from": "నుండి",
    "competitors.": "పోటీదారుల నుండి.",
    "Holistic Healing,": "సమగ్ర వైద్యం,",
    "Natural Remedies,": "సహజ నివారణలు,",
    "Dilutions": "డైల్యూషన్లు",
    "Safe, gentle, and natural healing methods utilizing highly diluted substances to trigger the body's self-healing mechanisms and long-term wellness.": "శరీరం యొక్క స్వీయ వైద్య శక్తిని ప్రేరేపించి దీర్ఘకాల ఆరోగ్యాన్ని అందించడానికి అత్యంత సున్నితమైన సహజ వైద్య పద్ధతులు.",
    "Panchakarma,": "పంచకర్మ,",
    "Dosha Balance,": "దోష సమతుల్యం,",
    "Rejuvenation": "పునరుజ్జీవనం",
    "Traditional Ayurvedic therapies focusing on restoring body-mind balance through personalized natural treatments, diet, and lifestyle adjustments.": "వ్యక్తిగత సహజ చికిత్సలు, ఆహారం మరియు జీవనశైలి మార్పుల ద్వారా శరీర-మనస్సు సమతుల్యాన్ని పునరుద్ధరించే ఆయుర్వేద చికిత్సలు.",
    "Herbal Formulations,": "హెర్బల్ ఫార్ములేషన్లు,",
    "Varmam Therapy,": "వర్మం థెరపీ,",
    "Kayakalpa": "కాయకల్పం",
    "An ancient therapeutic system focusing on aligning bodily elements using unique herbal formulations, mineral preparations, and lifestyle guidance.": "ప్రత్యేక మూలికా ఫార్ములేషన్లు, ఖనిజ తయారీలు మరియు జీవనశైలి మార్గదర్శకంతో శరీర మూలకాలను సమతుల్యం చేసే పురాతన వైద్య విధానం.",
    "Hydrotherapy,": "హైడ్రోథెరపీ,",
    "Diet & Nutrition,": "ఆహారం & పోషణ,",
    "Yoga & Meditation": "యోగా & ధ్యానం",
    "A drugless system of healing utilizing natural elements like water, mud, air, and sun to activate the body's inherent curative powers.": "నీరు, మట్టి, గాలి, సూర్యకాంతి వంటి సహజ మూలకాలతో శరీరంలోని సహజ వైద్య శక్తిని చైతన్యపరచే మందులులేని వైద్య విధానం.",
    "Phytotherapy,": "ఫైటోథెరపీ,",
    "Botanical Extracts,": "వృక్ష సారాలు,",
    "Immunity": "రోగనిరోధక శక్తి",
    "Pure botanical extracts and customized herbal remedies designed to strengthen the immune system and promote overall vitality.": "రోగనిరోధక శక్తిని పెంచి మొత్తం జీవశక్తిని ప్రోత్సహించడానికి రూపొందించిన స్వచ్ఛమైన వృక్ష సారాలు మరియు వ్యక్తిగత హెర్బల్ నివారణలు.",
    "Choose the level of home healthcare support that fits your family, recovery plan, and day-to-day comfort.": "మీ కుటుంబం, కోలుకునే ప్రణాళిక మరియు రోజువారీ సౌకర్యానికి సరిపోయే ఇంటి ఆరోగ్య సంరక్షణను ఎంచుకోండి.",
    "Ayurvedic & Panchakarma Care": "ఆయుర్వేద & పంచకర్మ సంరక్షణ",
    "Traditional therapies focused on detoxification, rejuvenation, and restoring balance to the body's natural constitution.": "డీటాక్సిఫికేషన్, పునరుజ్జీవనం మరియు శరీర సహజ నిర్మాణ సమతుల్యాన్ని పునరుద్ధరించడంపై దృష్టి పెట్టే సంప్రదాయ చికిత్సలు.",
    "Constitutional Homeopathy": "కాన్స్టిట్యూషనల్ హోమియోపతి",
    "Individualized natural remedies tailored to your unique body type, treating chronic and acute ailments from their root cause.": "మీ ప్రత్యేక శరీర స్వభావానికి అనుగుణంగా, దీర్ఘకాలిక మరియు తక్షణ వ్యాధులను మూల కారణం నుండి చూసే వ్యక్తిగత సహజ నివారణలు.",
    "Siddha & Herbal Therapy": "సిద్ధ & హెర్బల్ థెరపీ",
    "Ancient South Indian system utilizing herbal-mineral compounds and phytotherapy for deep cellular healing and immunity.": "లోతైన కణస్థాయి వైద్యం మరియు రోగనిరోధక శక్తి కోసం మూలికా-ఖనిజ సమ్మేళనాలు మరియు ఫైటోథెరపీని ఉపయోగించే దక్షిణ భారత పురాతన విధానం.",
    "Naturopathy & Yoga Wellness": "నేచురోపతి & యోగా వెల్నెస్",
    "Drugless healing utilizing diet, hydrotherapy, yoga, and lifestyle coaching to stimulate the body's self-healing mechanisms.": "ఆహారం, హైడ్రోథెరపీ, యోగా మరియు జీవనశైలి మార్గదర్శకంతో శరీర స్వీయ వైద్య ప్రక్రియలను ప్రేరేపించే మందులులేని వైద్యం.",
    "COMPASSIONATE CARE: 38+ YEARS": "కరుణతో కూడిన సంరక్షణ: 38+ సంవత్సరాలు",
    "healing journey": "వైద్య ప్రయాణం",
    "Explore All Treatments": "అన్ని చికిత్సలను చూడండి",
    "personalized": "వ్యక్తిగతీకరించిన",
    "We begin with comprehensive constitutional diagnosis across all 5 AYUSH systems to design a custom treatment protocol tailored specifically to your unique body and health goals.": "మీ శరీర స్వభావం మరియు ఆరోగ్య లక్ష్యాలకు సరిపోయే వ్యక్తిగత చికిత్స ప్రణాళిక కోసం మేము 5 ఆయుష్ విధానాల ద్వారా సమగ్ర నిర్ధారణతో ప్రారంభిస్తాము.",
    "38+ yrs expert": "38+ సంవత్సరాల నిపుణుడు",
    "Led by Dr. T. Raju with 38+ years of clinical mastery, we seamlessly integrate Homeopathy, Ayurveda, Siddha, Naturopathy, and Herbals for synergistic, root-cause healing.": "38+ సంవత్సరాల వైద్య నైపుణ్యం కలిగిన డా. టి. రాజు మార్గదర్శకత్వంలో, హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు హెర్బల్స్‌ను సమన్వయం చేసి మూల కారణ వైద్యం అందిస్తాము.",
    "patient-first": "రోగి ముందుగా",
    "Experience hospital-grade holistic healthcare in the comfort of your home, featuring regular physician monitoring, natural medication delivery, and compassionate caregiver support.": "నియమిత వైద్య పర్యవేక్షణ, సహజ మందుల పంపిణీ మరియు కరుణతో కూడిన సహాయక సంరక్షణతో మీ ఇంటి సౌకర్యంలో ఆసుపత్రి స్థాయి సమగ్ర ఆరోగ్య సంరక్షణను అనుభవించండి.",
    "lifelong wellness": "జీవితాంత ఆరోగ్యం",
    "Continuous Care": "నిరంతర సంరక్షణ",
    "Our care extends beyond symptom relief to sustained wellness, cellular rejuvenation, and preventive lifestyle guidance that protects your long-term vitality and immunity.": "మా సంరక్షణ లక్షణాల ఉపశమనాన్ని దాటి స్థిరమైన ఆరోగ్యం, కణ పునరుజ్జీవనం మరియు దీర్ఘకాల జీవశక్తి, రోగనిరోధక శక్తిని కాపాడే నివారణ జీవనశైలి మార్గదర్శకాన్ని అందిస్తుంది.",
    "Dr. T. Raju has been pioneering multi-therapy natural healing since 1987. An experienced practitioner of Homeopathy, Ayurveda, Siddha, Naturopathy, and Global Herbal Medicine, he combines ancient wisdom with modern diagnostics to treat complex, chronic conditions.": "డా. టి. రాజు 1987 నుండి బహుళ చికిత్సల సహజ వైద్యానికి మార్గదర్శకుడు. హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు ప్రపంచ మూలికా వైద్యంలో నైపుణ్యంతో, క్లిష్టమైన దీర్ఘకాలిక వ్యాధుల చికిత్సకు పురాతన జ్ఞానాన్ని ఆధునిక నిర్ధారణతో కలుపుతారు.",
    "Dr. T. Raju has been pioneering multi-therapy natural healing since 1987. An experienced practitioner of Homeopathy, Ayurveda, Siddha, Naturopathy, and Global Herbal Medicine, he combines ancient wisdom with modern diagnostics to treat complex, chronic conditions without side effects.": "డా. టి. రాజు 1987 నుండి బహుళ చికిత్సల సహజ వైద్యానికి మార్గదర్శకుడు. హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు ప్రపంచ మూలికా వైద్యంలో నైపుణ్యంతో, దుష్ప్రభావాలు లేకుండా క్లిష్టమైన దీర్ఘకాలిక వ్యాధుల చికిత్సకు పురాతన జ్ఞానాన్ని ఆధునిక నిర్ధారణతో కలుపుతారు.",
    "Book Consultation": "అపాయింట్‌మెంట్ బుక్ చేసుకోండి",
    "Book An Appointment": "అపాయింట్‌మెంట్ బుక్ చేసుకోండి",
    "our treatments": "మా చికిత్సలు",
    "Founder & Chief Physician, Raju AYUSH Hospital": "రాజు ఆయుష్ హాస్పిటల్ వ్యవస్థాపకుడు & ప్రధాన వైద్యుడు",
    "Specialization": "ప్రత్యేకత",
    "Multi-Therapy AYUSH": "బహుళ చికిత్స ఆయుష్",
    "Experience": "అనుభవం",
    "38+ Years": "38+ సంవత్సరాలు",
    "Patients Healed": "నయం చేసిన రోగులు",
    "True healing begins when we harmonize body & mind, enhance natural disease resistance, and guide patients towards extraordinary health.": "శరీరం మరియు మనస్సును సమతుల్యం చేసి, సహజ రోగనిరోధక శక్తిని పెంచి, రోగులను మెరుగైన ఆరోగ్యానికి నడిపించినప్పుడు నిజమైన వైద్యం ప్రారంభమవుతుంది.",
    "\"True healing begins when we harmonize body & mind, enhance natural disease resistance, and guide patients towards extraordinary health.\"": "\"శరీరం మరియు మనస్సును సమతుల్యం చేసి, సహజ రోగనిరోధక శక్తిని పెంచి, రోగులను మెరుగైన ఆరోగ్యానికి నడిపించినప్పుడు నిజమైన వైద్యం ప్రారంభమవుతుంది.\"",
    "Read Our Story": "మా కథ చదవండి",
    "Testimonials": "రోగుల అభిప్రాయాలు",
    "See what our patrons have to say about our multi-therapy healing and home healthcare services": "మా బహుళ చికిత్స వైద్యం మరియు ఇంటి ఆరోగ్య సంరక్షణ సేవల గురించి మా రోగులు ఏమంటున్నారో చూడండి",
    "We are immensely grateful to Dr. Raju and his team at Raju AYUSH Hospital. Their deep clinical mastery in combining German Homeopathy and authentic Ayurveda gave us clear insights into managing chronic ailments. The personalized approach made our family feel supported at every step.": "డా. రాజు గారికి మరియు రాజు ఆయుష్ హాస్పిటల్ బృందానికి మేము ఎంతో కృతజ్ఞులము. జర్మన్ హోమియోపతి మరియు ప్రామాణిక ఆయుర్వేదాన్ని కలిపిన వారి లోతైన వైద్య నైపుణ్యం దీర్ఘకాలిక సమస్యలను నిర్వహించడంలో మాకు స్పష్టత ఇచ్చింది. వ్యక్తిగత విధానం మా కుటుంబానికి ప్రతి దశలో తోడ్పాటు ఇచ్చింది.",
    "“We are immensely grateful to Dr. Raju and his team at Raju AYUSH Hospital. Their deep clinical mastery in combining German Homeopathy and authentic Ayurveda gave us clear insights into managing chronic ailments. The personalized attention and zero-side-effect treatments delivered remarkable healing for my whole family.”": "“డా. రాజు గారికి మరియు రాజు ఆయుష్ హాస్పిటల్ బృందానికి మేము ఎంతో కృతజ్ఞులము. జర్మన్ హోమియోపతి మరియు ప్రామాణిక ఆయుర్వేదాన్ని కలిపిన వారి లోతైన వైద్య నైపుణ్యం దీర్ఘకాలిక సమస్యలను నిర్వహించడంలో మాకు స్పష్టత ఇచ్చింది. వ్యక్తిగత శ్రద్ధ మరియు దుష్ప్రభావాలు లేని చికిత్సలు మా కుటుంబానికి మంచి వైద్యం అందించాయి.”",
    "“The in-home healthcare services provided by Raju AYUSH have been a blessing for my elderly mother. The therapists arrived on time, treated her with utmost dignity and compassion, and guided her through gentle Siddha and Naturopathy therapies that completely revitalized her mobility.”": "“రాజు ఆయుష్ అందించిన ఇంటి ఆరోగ్య సంరక్షణ సేవలు నా వృద్ధ తల్లికి గొప్ప సహాయంగా నిలిచాయి. థెరపిస్టులు సమయానికి వచ్చి గౌరవంతో, కరుణతో చూసుకున్నారు మరియు మృదువైన సిద్ధ, నేచురోపతి చికిత్సలతో ఆమె కదలికను మెరుగుపరిచారు.”",
    "Rajeshwari Varma": "రాజేశ్వరి వర్మ",
    "In-Home Healthcare Patient Caregiver": "ఇంటి ఆరోగ్య సంరక్షణ రోగి సంరక్షకురాలు",
    "K. V. Subrahmanyam": "కె. వి. సుబ్రహ్మణ్యం",
    "Executive Patient from Vijayawada": "విజయవాడకు చెందిన రోగి",
    "Book An Appointment": "అపాయింట్‌మెంట్ బుక్ చేయండి",
    "FAQ": "తరచుగా అడిగే ప్రశ్నలు",
    "Get Answers to Your Most Common Ayurveda & Multi-Therapy Healthcare Questions": "మీ సాధారణ ఆయుర్వేదం & బహుళ చికిత్స ఆరోగ్య ప్రశ్నలకు సమాధానాలు పొందండి",
    "Why Would I Choose Raju AYUSH Hospital Instead of Another Clinic?": "ఇతర క్లినిక్‌కు బదులుగా రాజు ఆయుష్ హాస్పిటల్‌ను ఎందుకు ఎంచుకోవాలి?",
    "38+ Years of Proven Expertise:": "38+ సంవత్సరాల నిరూపిత నైపుణ్యం:",
    "Personalized Holistic Care:": "వ్యక్తిగత సమగ్ర సంరక్షణ:",
    "Zero Side-Effect Natural Formulations:": "దుష్ప్రభావాలు లేని సహజ ఫార్ములేషన్లు:",
    "Convenient Vijayawada Location & Telemedicine:": "సౌకర్యవంతమైన విజయవాడ స్థానం & టెలిమెడిసిన్:",
    "Do Ayurvedic & Natural Medicines Have Any Harmful Side Effects?": "ఆయుర్వేద & సహజ మందులకు హానికర దుష్ప్రభావాలు ఉంటాయా?",
    "Ayurveda and multi-therapy natural systems are individualized medical sciences. When prescribed by qualified practitioners, our natural remedies carry zero harmful side effects and offer multifaceted health benefits.": "ఆయుర్వేదం మరియు బహుళ సహజ వైద్య విధానాలు వ్యక్తిగత వైద్య శాస్త్రాలు. అర్హులైన వైద్యులు సూచించినప్పుడు మా సహజ నివారణలు హానికర దుష్ప్రభావాలు లేకుండా అనేక ఆరోగ్య ప్రయోజనాలను అందిస్తాయి.",
    "At Raju AYUSH Hospital, all medicinal herbs, extracts, and remedies adhere to rigorous purity, safety, and dosage standards to guarantee safety across all age groups, from children to the elderly.": "రాజు ఆయుష్ హాస్పిటల్‌లో అన్ని ఔషధ మూలికలు, సారాలు మరియు నివారణలు స్వచ్ఛత, భద్రత మరియు మోతాదు ప్రమాణాలను పాటిస్తాయి, అందువల్ల పిల్లల నుండి వృద్ధుల వరకు అందరికీ భద్రత ఉంటుంది.",
    "To achieve the best outcomes, always consult with our experienced doctors to ensure personalized dosages and customized dietary guidelines tailored to your health profile.": "ఉత్తమ ఫలితాల కోసం మీ ఆరోగ్య స్థితికి సరిపోయే వ్యక్తిగత మోతాదులు మరియు ఆహార మార్గదర్శకాల కోసం మా అనుభవజ్ఞులైన వైద్యులను సంప్రదించండి.",
    "Does Raju AYUSH Provide Treatment for Chronic Conditions?": "రాజు ఆయుష్ దీర్ఘకాలిక వ్యాధులకు చికిత్స అందిస్తుందా?",
    "Executive Patient — Vijayawada": "విజయవాడకు చెందిన రోగి",
    "Book An Appointment": "అపాయింట్‌మెంట్ బుక్ చేయండి",
    "FAQ": "తరచుగా అడిగే ప్రశ్నలు",
    "Get Answers to Your Most Common Ayurveda & Multi-Therapy Healthcare Questions": "మీ సాధారణ ఆయుర్వేదం & బహుళ చికిత్స ఆరోగ్య ప్రశ్నలకు సమాధానాలు పొందండి",
    "Why Would I Choose Raju AYUSH Hospital Instead of Another Clinic?": "ఇతర క్లినిక్‌కు బదులుగా రాజు ఆయుష్ హాస్పిటల్‌ను ఎందుకు ఎంచుకోవాలి?",
    "38+ Years of Proven Expertise:": "38+ సంవత్సరాల నిరూపిత నైపుణ్యం:",
    "Personalized Holistic Care:": "వ్యక్తిగత సమగ్ర సంరక్షణ:",
    "Zero Side-Effect Natural Formulations:": "దుష్ప్రభావాలు లేని సహజ ఫార్ములేషన్లు:",
    "Convenient Vijayawada Location & Telemedicine:": "సౌకర్యవంతమైన విజయవాడ స్థానం & టెలిమెడిసిన్:",
    "Do Ayurvedic & Natural Medicines Have Any Harmful Side Effects?": "ఆయుర్వేద & సహజ మందులకు హానికర దుష్ప్రభావాలు ఉంటాయా?",
    "Ayurveda and multi-therapy natural systems are individualized medical sciences. When prescribed by qualified practitioners, our natural remedies carry zero harmful side effects and offer multifaceted health benefits.": "ఆయుర్వేదం మరియు బహుళ సహజ వైద్య విధానాలు వ్యక్తిగత వైద్య శాస్త్రాలు. అర్హులైన వైద్యులు సూచించినప్పుడు మా సహజ నివారణలు హానికర దుష్ప్రభావాలు లేకుండా అనేక ఆరోగ్య ప్రయోజనాలను అందిస్తాయి.",
    "At Raju AYUSH Hospital, all medicinal herbs, extracts, and remedies adhere to rigorous purity, safety, and dosage standards to guarantee safety across all age groups, from children to the elderly.": "రాజు ఆయుష్ హాస్పిటల్‌లో అన్ని ఔషధ మూలికలు, సారాలు మరియు నివారణలు స్వచ్ఛత, భద్రత మరియు మోతాదు ప్రమాణాలను పాటిస్తాయి, అందువల్ల పిల్లల నుండి వృద్ధుల వరకు అందరికీ భద్రత ఉంటుంది.",
    "To achieve the best outcomes, always consult with our experienced doctors to ensure personalized dosages and customized dietary guidelines tailored to your health profile.": "ఉత్తమ ఫలితాల కోసం మీ ఆరోగ్య స్థితికి సరిపోయే వ్యక్తిగత మోతాదులు మరియు ఆహార మార్గదర్శకాల కోసం మా అనుభవజ్ఞులైన వైద్యులను సంప్రదించండి.",
    "Does Raju AYUSH Provide Treatment for Chronic Conditions?": "రాజు ఆయుష్ దీర్ఘకాలిక వ్యాధులకు చికిత్స అందిస్తుందా?",
    "Yes. Our \"Golden Balance of Life\" philosophy offers specialized therapies for chronic and persistent ailments including lower back pain, neck pain, sciatica, spondylosis, migraine, psoriasis, eczema, diabetes management, and more.": "అవును. మా \"గోల్డెన్ బ్యాలెన్స్ ఆఫ్ లైఫ్\" విధానం దిగువ వెన్నునొప్పి, మెడనొప్పి, సయాటికా, స్పాండిలోసిస్, మైగ్రేన్, సోరియాసిస్, ఎగ్జిమా, మధుమేహ నిర్వహణ మరియు మరెన్నో దీర్ఘకాలిక సమస్యలకు ప్రత్యేక చికిత్సలను అందిస్తుంది.",
    "Yes. Our \"Golden Balance of Life\" philosophy offers specialized therapies for chronic and persistent ailments including lower back pain, neck pain, sciatica, spondylosis, migraine, psoriasis, eczema, diabetes management, hypertension, obesity, allergic bronchitis, arthritis, and paralysis rehabilitation.": "అవును. మా \"గోల్డెన్ బ్యాలెన్స్ ఆఫ్ లైఫ్\" విధానం దిగువ వెన్నునొప్పి, మెడనొప్పి, సయాటికా, స్పాండిలోసిస్, మైగ్రేన్, సోరియాసిస్, ఎగ్జిమా, మధుమేహ నిర్వహణ, రక్తపోటు, ఊబకాయం, అలెర్జిక్ బ్రాంకైటిస్, ఆర్థరైటిస్ మరియు పక్షవాతం పునరావాసం వంటి దీర్ఘకాలిక సమస్యలకు ప్రత్యేక చికిత్సలను అందిస్తుంది.",
    "By harmonizing physical and vital energies through 5 complementary healing disciplines, we attack the disease from multiple angles to promote lasting vitality.": "5 పరస్పరపూరక వైద్య విధానాల ద్వారా శరీర మరియు ప్రాణ శక్తులను సమతుల్యం చేసి, దీర్ఘకాల జీవశక్తిని పెంచేందుకు వ్యాధిని అనేక కోణాల్లో ఎదుర్కొంటాము.",
    "What Measures Should Be Taken Before Receiving Treatment?": "చికిత్స పొందే ముందు ఏ జాగ్రత్తలు తీసుకోవాలి?",
    "Before beginning your treatment journey with us, we recommend following these simple steps:": "మాతో మీ చికిత్స ప్రయాణం ప్రారంభించే ముందు ఈ సరళమైన దశలను పాటించాలని సూచిస్తున్నాము:",
    "Share Comprehensive Medical History:": "పూర్తి వైద్య చరిత్రను పంచుకోండి:",
    "Gradual Transition (Do Not Stop Medicines Abruptly):": "క్రమంగా మార్పు (మందులను ఒక్కసారిగా ఆపవద్దు):",
    "Follow Prescribed Diet & Routine:": "సూచించిన ఆహారం & దినచర్యను పాటించండి:",
    "Schedule In-Clinic or Video Consultation:": "క్లినిక్ లేదా వీడియో సంప్రదింపును షెడ్యూల్ చేయండి:",
    "Let's Talk": "మాతో మాట్లాడండి",
    "© 2026 WH Healthcare Services": "© 2026 డబ్ల్యూ హెచ్ హెల్త్‌కేర్ సర్వీసెస్",
    "Expert health advice from Dr. Raju with practical guidance for extraordinary wellness.": "డా. రాజు గారి నిపుణుల ఆరోగ్య సూచనలు మరియు మెరుగైన ఆరోగ్యానికి సరళమైన చిట్కాలు.",
    "1. Ayurvedic Therapy": "1. ఆయుర్వేద చికిత్స",
    "2. Homeopathic Care": "2. హోమియోపతి సంరక్షణ",
    "3. Siddha Healthcare": "3. సిద్ధ ఆరోగ్యం",
    "4. Naturopathy Wellness": "4. నేచురోపతి వెల్నెస్",
    "5. Global Herbal Medicine": "5. ప్రపంచ మూలికా వైద్యం",
    "Ayurvedic Therapy": "ఆయుర్వేద చికిత్స",
    "Homeopathic Care": "హోమియోపతి సంరక్షణ",
    "Siddha Healthcare": "సిద్ధ ఆరోగ్యం",
    "Naturopathy Wellness": "నేచురోపతి వెల్నెస్",
    "Global Herbal Medicine": "ప్రపంచ మూలికా వైద్యం",
    "38+ Years of Expertise": "38+ సంవత్సరాల అపార అనుభవం",
    "Our AYUSH Services": "మా సహజ చికిత్సా విధానాలు",
    "1. Ayurveda": "1. ఆయుర్వేద చికిత్స",
    "2. Homeo (Homeopathy)": "2. హోమియోపతి సంరక్షణ",
    "3. Siddha": "3. సిద్ధ ఆరోగ్యం",
    "4. Naturopathi": "4. నేచురోపతి వెల్నెస్",
    "5. Global Herbal Medicine": "5. ప్రపంచ మూలికా వైద్యం",
    "Ayurveda Consultation & Holistic Healing": "ఆయుర్వేద సంప్రదింపు & సమగ్ర వైద్యం",
    "Ancient Ayurvedic pulse diagnosis, Tridosha balancing & classical herbal medicine for complete wellness": "మనసు-శరీర సమగ్ర ఆరోగ్యం కోసం ప్రాచీన ఆయుర్వేద నాడీ పరీక్ష, త్రిదోష సమతుల్యత & శాస్త్రీయ మూలికా వైద్యం",
    "Ayurveda Consultation & Multi-Therapy": "ఆయుర్వేద సంప్రదింపు & బహుళ చికిత్స",
    "Core Principles of Our Ayurvedic Treatment:": "మా ఆయుర్వేద చికిత్స ముఖ్య సూత్రాలు:",
    "Conditions Successfully Managed:": "ప్రభావవంతంగా నిర్వహించే స్థితులు:",
    "Advanced Constitutional Homeopathy (Homeo)": "ఉన్నత వ్యక్తిగత హోమియోపతి",
    "German classical Homeopathy with potentized remedies for gentle, effective healing without side effects": "దుష్ప్రభావాలు లేకుండా సున్నితమైన, ప్రభావవంతమైన వైద్యం కోసం జర్మన్ సాంప్రదాయ హోమియోపతి",
    "German classical Homeopathy with potentized remedies — gentle, effective healing without side effects": "దుష్ప్రభావాలు లేకుండా సున్నితమైన, ప్రభావవంతమైన వైద్యం కోసం జర్మన్ సాంప్రదాయ హోమియోపతి",
    "Ancient Ayurvedic pulse diagnosis, Tridosha balancing, and classical herbal medicine for complete wellness": "సంపూర్ణ ఆరోగ్యం కోసం ప్రాచీన ఆయుర్వేద నాడీ నిర్ధారణ, త్రిదోష సమతుల్యత మరియు శాస్త్రీయ మూలికా వైద్యం",
    "Ancient Ayurvedic pulse diagnosis, Tridosha balancing & classical herbal medicine for complete wellness": "సంపూర్ణ ఆరోగ్యం కోసం ప్రాచీన ఆయుర్వేద నాడీ నిర్ధారణ, త్రిదోష సమతుల్యత మరియు శాస్త్రీయ మూలికా వైద్యం",
    "Traditional Tamil Siddha therapy using herbal, mineral, and botanical formulations for deep-rooted ailments": "దీర్ఘకాలిక సమస్యల కోసం మూలికలు మరియు ఖనిజాలతో కూడిన సాంప్రదాయ తమిళ సిద్ధ వైద్యం",
    "Traditional Tamil Siddha therapy using herbal, mineral & metal-based formulations for deep-rooted ailments": "దీర్ఘకాలిక సమస్యల కోసం మూలికలు మరియు ఖనిజాలతో కూడిన సాంప్రదాయ తమిళ సిద్ధ వైద్యం",
    "Natural healing through diet therapy, hydrotherapy, yoga, and lifestyle modification for holistic recovery": "సమగ్ర రికవరీ కోసం ఆహార చికిత్స, జలచికిత్స, యోగా మరియు జీవనశైలి మార్పులతో సహజ నివారణ",
    "Natural healing through diet therapy, hydrotherapy, yoga & lifestyle modification for holistic recovery": "సమగ్ర రికవరీ కోసం ఆహార చికిత్స, జలచికిత్స, యోగా మరియు జీవనశైలి మార్పులతో సహజ నివారణ",
    "International herbal formulations combining ancient wisdom with modern phytotherapy for safe, natural treatment": "సురక్షితమైన, సహజమైన చికిత్స కోసం ప్రాచీన జ్ఞానాన్ని ఆధునిక ఫైటోథెరపీతో కలిపిన అంతర్జాతీయ మూలికా ఫార్ములేషన్లు",
    "Why Choose Raju AYUSH Hospital Homeopathy?": "రాజు ఆయుష్ హోమియోపతిని ఎందుకు ఎంచుకోవాలి?",
    "Major Ailments Treated:": "చికిత్స చేసే ప్రధాన సమస్యలు:",
    "Global Herbal Medicine": "ప్రపంచ మూలికా వైద్యం",
    "International herbal formulations combining ancient wisdom with modern phytotherapy for safe, natural treatment": "సురక్షితమైన సహజ వైద్యం కోసం ప్రాచీన జ్ఞానాన్ని ఆధునిక ఫైటోథెరపీతో కలిపిన అంతర్జాతీయ హెర్బల్ ఫార్ములేషన్‌లు",
    "Benefits of Our Global Herbal Formulations:": "మా ప్రపంచ మూలికా ఫార్ములేషన్‌ల ప్రయోజనాలు:",
    "Specialized Clinical Uses:": "ప్రత్యేక వైద్య వినియోగాలు:",
    "Naturopathy & Wellness": "నేచురోపతి & ఆరోగ్యం",
    "Natural healing through diet therapy, hydrotherapy, yoga & lifestyle modification for holistic recovery": "సమగ్ర కోలుకోవడానికి ఆహార చికిత్స, హైడ్రోథెరపీ, యోగ & జీవనశైలి మార్పులతో సహజ వైద్యం",
    "Naturopathy (Naturopathi) Care": "నేచురోపతి సంరక్షణణ",
    "Core Naturopathic Therapies:": "ముఖ్య నేచురోపతి చికిత్సలు:",
    "Ideal for Treating:": "చికిత్సకు అనుకూలమైన స్థితులు:",
    "Traditional Tamil Siddha therapy using herbal, mineral & metal-based formulations for deep-rooted ailments": "మూల సమస్యలకు హెర్బల్, ఖనిజ & లోహ ఆధారిత ఫార్ములేషన్‌లతో సాంప్రదాయ తమిళ సిద్ధ చికిత్స",
    "Siddha Medicine & Kaya Kalpa": "సిద్ధ వైద్యం & కాయ కల్ప",
    "Key Features of Our Siddha Practice:": "మా సిద్ధ వైద్యం ముఖ్య లక్షణాలు:",
    "Therapeutic Specialties:": "చికిత్స ప్రత్యేకతలు:",
    "About Raju AYUSH Hospital": "రాజు ఆయుష్ హాస్పిటల్ గురించి",
    "The Best AYUSH Multi-Therapy Clinic": "ఉత్తమ ఆయుష్ బహుళ చికిత్స క్లినిక్",
    "Our Doctor": "మా వైద్యుడు",
    "Happy Patients": "సంతోషించిన రోగులు",
    "Diseases Treated": "చికిత్స చేసిన వ్యాధులు",
    "AYUSH Medical Systems": "ఆయుష్ వైద్య విధానాలు",
    "About Ayurveda & Siddha": "ఆయుర్వేదం & సిద్ధ గురించి",
    "About Homeopathy & Naturopathy": "హోమియోపతి & నేచురోపతి గురించి",
    "Some Common Diseases": "కొన్ని సాధారణ వ్యాధులు",
    "Diseases We Treat": "మేము చికిత్స చేసే వ్యాధులు",
    "Holistic care for chronic and acute conditions with zero side effects.": "ఎటువంటి దుష్ప్రభావాలు లేకుండా దీర్ఘకాలిక మరియు తీవ్రమైన వ్యాధులకు సమగ్ర సంరక్షణ.",
    "Show More Diseases ↓": "మరిన్ని వ్యాధులు చూడండి ↓",
    "Hospital Address": "హాస్పిటల్ చిరునామా",
    "Email": "ఈమెయిల్",
    "Phone": "ఫోన్",
    "Home Healthcare Wing": "ఇంటి ఆరోగ్య సంరక్షణ విభాగం",
    "In-Home Patient Visits & Care": "ఇంటికి వచ్చి రోగి సంరక్షణ",
    "Consultation Support": "సంపర్శన సహాయం",
    "Working Hours": "పని వేళలు",
    "Get In Touch": "మమ్మల్ని సంపర్శించండి",
    "First Name": "మొదటి పేరు",
    "Last Name": "ఇంటి పేరు",
    "Message": "సందేశం",
    "Send": "పంపించండి",
    "Our Location Map": "మా ప్రదేశ మ్యాప్",
    "Trusted AYUSH Multi-Therapy Clinic by Dr. T. Raju with 38+ years of holistic healing through Homeopathy, Ayurveda, Siddha, Naturopathy, and Herbals": "డా. టి. రాజు గారి విశ్వసనీయ ఆయుష్ బహుళ చికిత్స క్లినిక్, హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు హెర్బల్స్‌తో 38+ సంవత్సరాల సమగ్ర వైద్యం",
    "Trusted AYUSH Multi-Therapy Clinic by Dr. T. Raju with 38+ years of holistic healing through Homeopathy, Ayurveda, Siddha, Naturopathy & Herbals": "డా. టి. రాజు గారి విశ్వసనీయ ఆయుష్ బహుళ చికిత్స క్లినిక్, హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు హెర్బల్స్‌తో 38+ సంవత్సరాల సమగ్ర వైద్యం",
    "Trusted AYUSH Multi-Therapy Clinic by Dr. T. Raju — 38+ years of holistic healing through Homeopathy, Ayurveda, Siddha, Naturopathy & Herbals": "డా. టి. రాజు గారి విశ్వసనీయ ఆయుష్ బహుళ చికిత్స క్లినిక్, హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు హెర్బల్స్‌తో 38+ సంవత్సరాల సమగ్ర వైద్యం",
    "Raju AYUSH Hospital is the vision of Dr. T. Raju, MD (AM), born out of his 38+ years of dedicated practice in alternative medicine and its holistic approach to ailments related to the mind and body. Situated in Patamata, Vijayawada, Raju AYUSH Hospital has quickly become one of the most prominent telemedicine family clinics offering integrated traditional AYUSH services including Homeopathy, Ayurveda, Siddha, Naturopathy, and Global Herbal Medicine.": "రాజు ఆయుష్ హాస్పిటల్ డా. టి. రాజు, ఎం.డి. (ఎ.ఎం.) గారి 38+ సంవత్సరాల ప్రత్యామ్నాయ వైద్య అనుభవంతో రూపుదిద్దుకుంది. పటమట, విజయవాడలో హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు ప్రపంచ మూలికా వైద్యాన్ని కలిపి సమగ్ర సంరక్షణ అందిస్తున్నాము.",
    "At Raju AYUSH Hospital, our goal is to identify the root cause and eliminate the ailment using 5 powerful systems of medicine under the \"Alternative Medicine\" approach. Our treatments have absolutely no side effects, and alongside treating diseases, special focus is given to boosting the patient's immunity and natural disease resistance.": "రాజు ఆయుష్ హాస్పిటల్‌లో మూల కారణాన్ని గుర్తించి ఐదు వైద్య విధానాల ద్వారా సమగ్ర సంరక్షణ ప్రణాళికను అందించడం మా లక్ష్యం. సహజ కోలుకోవడం, రోగనిరోధక శక్తి మరియు దీర్ఘకాల ఆరోగ్యంపై మా దృష్టి ఉంటుంది.",
    "We offer a sanctuary for peace, holistic wellness, and vibrant health!": "సమగ్ర ఆరోగ్యం మరియు చైతన్యవంతమైన జీవితానికి ప్రశాంతమైన సంరక్షణను అందిస్తున్నాము.",
    "Our doors are always open to provide compassionate AYUSH multi-therapy care and in-home healthcare": "మీ కోసం మా తలుపులు ఎల్లప్పుడూ తెరిచే ఉంటాయి, కరుణతో కూడిన ఆయుష్ బహుళ చికిత్స సంరక్షణ మరియు ఇంటి ఆరోగ్య సేవలు అందిస్తాము",
    "Our doors are always open for you — Compassionate AYUSH Multi-Therapy Care & In-Home Healthcare": "మీ కోసం మా తలుపులు ఎల్లప్పుడూ తెరిచే ఉంటాయి, కరుణతో కూడిన ఆయుష్ బహుళ చికిత్స సంరక్షణ మరియు ఇంటి ఆరోగ్య సేవలు అందిస్తాము",
    "Contact Info": "సంప్రదింపు సమాచారం",
    "Serving Vijayawada, Guntur, Amaravati, and surrounding Andhra Pradesh regions": "విజయవాడ, గుంటూరు, అమరావతి మరియు పరిసర ఆంధ్రప్రదేశ్ ప్రాంతాలకు సేవలు అందిస్తున్నాము",
    "Home visits scheduled on request": "అభ్యర్థనపై ఇంటి సందర్శనలను షెడ్యూల్ చేస్తాము",
    "Book An Appointment": "అపాయింట్‌మెంట్ బుక్ చేయండి",
    "Select Patient Gender": "రోగి లింగాన్ని ఎంచుకోండి",
    "Male": "పురుషుడు",
    "Female": "స్త్రీ",
    "Other": "ఇతర",
    "Phone No (+91...)": "ఫోన్ నంబర్ (+91...)",
    "Phone No": "ఫోన్ నంబర్",
    "Contact Number": "సంప్రదింపు నంబర్",
    "Appointment Date": "అపాయింట్‌మెంట్ తేదీ",
    "Appointment Time": "అపాయింట్‌మెంట్ సమయం",
    "Health Concerns / Message": "ఆరోగ్య సమస్యలు / సందేశం",
    "🔍  Search diseases by name...": "🔍  వ్యాధి పేరుతో వెతకండి...",
    "Search diseases by name...": "వ్యాధి పేరుతో వెతకండి..."
  };

  // Build reverse map (Telugu -> English)
  var reverseTextMap = {};
  for (var enText in extraTextMap) {
    if (extraTextMap.hasOwnProperty(enText)) {
      reverseTextMap[extraTextMap[enText]] = enText;
    }
  }

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  var normalizedTextMap = {};
  for (var normalizedKey in extraTextMap) {
    if (extraTextMap.hasOwnProperty(normalizedKey)) {
      normalizedTextMap[normalizeText(normalizedKey)] = extraTextMap[normalizedKey];
    }
  }

  function shouldPhraseReplace(phrase) {
    return (
      phrase.indexOf(" ") !== -1 ||
      phrase.length >= 10 ||
      phrase === "About" ||
      phrase === "FAQ"
    );
  }

  // 1. DATA-I18N ELEMENT TRANSLATOR
  function applyTaggedTranslations(lang) {
    var dict = translations[lang];
    if (!dict) return;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = dict[key];
        } else {
          var rollTop = el.querySelector(".ra-roll-top");
          var rollBottom = el.querySelector(".ra-roll-bottom");
          if (rollTop && rollBottom) {
            rollTop.textContent = dict[key];
            rollBottom.textContent = dict[key];
          } else {
            var arrow = el.querySelector(".ra-dropdown-arrow, .ra-explore-arrow, .ra-btn-arrow");
            if (arrow) {
              var textNodes = [];
              el.childNodes.forEach(function (node) {
                if (node.nodeType === 3) textNodes.push(node);
              });
              if (textNodes.length > 0) textNodes[0].textContent = dict[key] + " ";
            } else if (dict[key].indexOf("<") !== -1) {
              el.innerHTML = dict[key];
            } else {
              el.textContent = dict[key];
            }
          }
        }
        if (el.hasAttribute("data-text")) {
          el.setAttribute("data-text", dict[key]);
        }
      }
    });
  }

  // 2. DOM TEXT-NODE WALKER
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, SVG: 1, CODE: 1, PRE: 1, TEXTAREA: 1, INPUT: 1 };

  function walkTextNodes(node, callback) {
    if (!node) return;
    if (node.nodeType === 3) {
      var text = node.textContent.trim();
      if (text.length > 0) {
        callback(node, text);
      }
      return;
    }
    if (node.nodeType === 1) {
      if (SKIP_TAGS[node.tagName]) return;
      if (node.getAttribute && node.getAttribute("data-i18n")) return;
      if (node.closest && node.closest("[data-i18n]")) return;
      if (node.classList && node.classList.contains("ra-roll-box")) return;
      for (var i = 0; i < node.childNodes.length; i++) {
        walkTextNodes(node.childNodes[i], callback);
      }
    }
  }

  var originalTexts = new Map();
  var originalElements = new Map();
  var gsapOriginalHTML = null;

  function translateGSAPSplit() {
    var heroHeading = document.querySelector("#comp-ml7s4ypm .font_0");
    if (!heroHeading) return;
    if (!heroHeading.getAttribute("data-en-text")) {
      heroHeading.setAttribute("data-en-text", "Better Health, Naturally.");
      heroHeading.setAttribute("data-tl-text", "మెరుగైన ఆరోగ్యం, సహజ సిద్ధంగా.");
    }
    if (gsapOriginalHTML === null) {
      gsapOriginalHTML = heroHeading.innerHTML;
    }
    heroHeading.innerHTML = "మెరుగైన ఆరోగ్యం, సహజ సిద్ధంగా.";
  }

  function restoreGSAPSplit() {
    var heroHeading = document.querySelector("#comp-ml7s4ypm .font_0");
    if (!heroHeading) return;
    if (gsapOriginalHTML !== null) {
      heroHeading.innerHTML = gsapOriginalHTML;
    } else {
      heroHeading.innerHTML = "Better Health, Naturally.";
    }
  }

  function translateParagraphs() {
    var selectors = [
      ".ra-drawer-link",
      ".ra-drawer-sublink",
      ".ra-service-title",
      ".ra-service-sub",
      ".ra-consult-heading",
      ".ra-consult-desc",
      ".ra-consult-btn span",
      ".ra-mega-visual-tag",
      ".ra-mega-philosophy",
      ".ra-mega-explore-btn",
      ".ra-roll-top",
      ".ra-roll-bottom",
      ".single-service__h3",
      ".single-service__p",
      ".single-service__list li",
      ".ra-kerala-exact-title"
    ];

    selectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el) {
        if (el.getAttribute("data-i18n") || el.closest("[data-i18n]")) return;
        var text = el.getAttribute("data-en-text") || el.textContent.trim();
        var normalizedText = normalizeText(text);
        var translatedText = extraTextMap[text] || normalizedTextMap[normalizedText];

        if (translatedText) {
          if (!el.getAttribute("data-en-text")) {
            el.setAttribute("data-en-text", text);
            el.setAttribute("data-tl-text", translatedText);
            if (!originalElements.has(el)) originalElements.set(el, el.innerHTML);
          }
          el.textContent = translatedText;
          return;
        }

        // Phrase replacement
        var changed = false;
        var html = el.getAttribute("data-en-html") || el.innerHTML;
        for (var enText in extraTextMap) {
          if (extraTextMap.hasOwnProperty(enText) && shouldPhraseReplace(enText)) {
            if (html.indexOf(enText) !== -1) {
              if (!el.getAttribute("data-en-html")) {
                el.setAttribute("data-en-html", html);
                if (!originalElements.has(el)) originalElements.set(el, html);
              }
              html = html.split(enText).join(extraTextMap[enText]);
              changed = true;
            }
          }
        }
        if (changed) el.innerHTML = html;
      });
    });
  }

  function translateToTelugu() {
    // 1. Handle GSAP-split hero heading
    translateGSAPSplit();
    // 2. Handle paragraph-level elements
    translateParagraphs();
    // 3. Walk remaining text nodes
    walkTextNodes(document.body, function (textNode, text) {
      var normalizedText = normalizeText(text);
      if (extraTextMap[text] || normalizedTextMap[normalizedText]) {
        if (!originalTexts.has(textNode)) originalTexts.set(textNode, text);
        textNode.textContent = textNode.textContent.replace(text, extraTextMap[text] || normalizedTextMap[normalizedText]);
        return;
      }
      var cleanMatch = text.match(/^([\s\u203a\u00bb>\-–—]*)(.+)$/);
      if (cleanMatch) {
        var prefix = cleanMatch[1];
        var clean = cleanMatch[2].trim();
        var cleanNorm = normalizeText(clean);
        if (clean && (extraTextMap[clean] || normalizedTextMap[cleanNorm])) {
          if (!originalTexts.has(textNode)) originalTexts.set(textNode, text);
          var translated = extraTextMap[clean] || normalizedTextMap[cleanNorm];
          textNode.textContent = prefix + translated;
          return;
        }
      }
      for (var enText in extraTextMap) {
        if (extraTextMap.hasOwnProperty(enText) && shouldPhraseReplace(enText) && text.indexOf(enText) !== -1) {
          if (!originalTexts.has(textNode)) originalTexts.set(textNode, textNode.textContent);
          textNode.textContent = textNode.textContent.replace(enText, extraTextMap[enText]);
        }
      }
    });

    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(function (field) {
      if (field.getAttribute("data-i18n")) return;
      var english = field.getAttribute("data-en-placeholder") || field.placeholder;
      var translated = extraTextMap[english] || normalizedTextMap[normalizeText(english)];
      if (translated) {
        field.setAttribute("data-en-placeholder", english);
        field.setAttribute("data-tl-placeholder", translated);
        field.placeholder = translated;
      }
    });

    document.querySelectorAll("select option").forEach(function (opt) {
      if (opt.getAttribute("data-i18n")) return;
      var english = opt.getAttribute("data-en-text") || opt.textContent.trim();
      var translated = extraTextMap[english] || normalizedTextMap[normalizeText(english)];
      if (translated) {
        opt.setAttribute("data-en-text", english);
        opt.setAttribute("data-tl-text", translated);
        opt.textContent = translated;
      }
    });

    document.querySelectorAll(".ra-roll-box").forEach(function (box) {
      if (box.closest("[data-i18n]")) return;
      var top = box.querySelector(".ra-roll-top");
      var bottom = box.querySelector(".ra-roll-bottom");
      if (!top || !bottom) return;
      var english = top.getAttribute("data-en-text") || top.textContent.trim();
      var translated = extraTextMap[english] || normalizedTextMap[normalizeText(english)];
      if (translated) {
        top.setAttribute("data-en-text", english);
        top.setAttribute("data-tl-text", translated);
        bottom.setAttribute("data-en-text", english);
        bottom.setAttribute("data-tl-text", translated);
        top.textContent = translated;
        bottom.textContent = translated;
      }
    });
  }

  function restoreToEnglish() {
    // 1. Restore Hero heading
    restoreGSAPSplit();

    // 2. Restore all data-en-text elements
    document.querySelectorAll("[data-en-text]:not([data-i18n])").forEach(function (el) {
      if (el.closest("[data-i18n]")) return;
      if (el.closest(".ra-roll-box")) return;
      if (el.tagName === "OPTION") return;
      var enText = el.getAttribute("data-en-text");
      if (enText && el.textContent.trim() !== enText) {
        el.textContent = enText;
      }
    });

    // 3. Restore all data-en-html elements
    document.querySelectorAll("[data-en-html]:not([data-i18n])").forEach(function (el) {
      if (el.closest("[data-i18n]")) return;
      var enHTML = el.getAttribute("data-en-html");
      if (enHTML) {
        el.innerHTML = enHTML;
      }
    });

    // 4. Restore element-level replacements from map
    originalElements.forEach(function (originalHTML, el) {
      try { 
        if (el.parentNode && !el.closest("[data-i18n]") && !el.getAttribute("data-i18n")) {
          el.innerHTML = originalHTML; 
        }
      } catch (e) {}
    });

    // 5. Restore text nodes
    originalTexts.forEach(function (originalText, textNode) {
      try { 
        if (textNode.parentNode && (!textNode.parentElement || (!textNode.parentElement.closest("[data-i18n]") && !textNode.parentElement.getAttribute("data-i18n")))) {
          textNode.textContent = originalText; 
        }
      } catch (e) {}
    });

    document.querySelectorAll("[data-en-placeholder]").forEach(function (field) {
      if (field.getAttribute("data-i18n")) return;
      field.placeholder = field.getAttribute("data-en-placeholder");
    });

    document.querySelectorAll("select option[data-en-text]").forEach(function (opt) {
      if (opt.getAttribute("data-i18n")) return;
      opt.textContent = opt.getAttribute("data-en-text");
    });

    document.querySelectorAll(".ra-roll-box").forEach(function (box) {
      if (box.closest("[data-i18n]")) return;
      var top = box.querySelector(".ra-roll-top");
      var bottom = box.querySelector(".ra-roll-bottom");
      if (!top || !bottom) return;
      var english = top.getAttribute("data-en-text");
      if (english) {
        top.textContent = english;
        bottom.textContent = english;
      }
    });
  }

  function initDualTextRoll() {
    var targets = document.querySelectorAll(".ra-nav-link, .ra-dropdown-trigger, .wh-footer-links a");
    targets.forEach(function(el) {
      if (el.querySelector(".ra-roll-box")) return;
      var arrow = el.querySelector(".ra-dropdown-arrow, .ra-explore-arrow, .ra-btn-arrow");
      var arrowHTML = arrow ? arrow.outerHTML : "";
      if (arrow) arrow.remove();
      var text = el.textContent.trim();
      if (!text) return;
      el.innerHTML = '<span class="ra-roll-box"><span class="ra-roll-top">' + text + '</span><span class="ra-roll-bottom">' + text + '</span></span>' + (arrowHTML ? " " + arrowHTML : "");
    });
  }

  // LANGUAGE SWITCH
  function switchLanguage(lang) {
    if (lang !== "en" && lang !== "tl") return;
    currentLang = lang;
    localStorage.setItem("ra-lang", lang);
    document.documentElement.lang = lang === "tl" ? "te" : "en";
    document.documentElement.setAttribute("data-lang", lang);
    if (document.body) {
      document.body.setAttribute("data-lang", lang);
      document.body.classList.toggle("is-telugu", lang === "tl");
    }

    if (lang === "tl") {
      applyTaggedTranslations("tl");
      translateToTelugu();
    } else {
      restoreToEnglish();
      applyTaggedTranslations("en");
    }

    // Update active state on all buttons (both desktop and mobile drawer)
    var langBtns = document.querySelectorAll(".ra-lang-btn, .ra-mobile-lang-btn");
    langBtns.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // Notify all sub-modules synchronously
    window.dispatchEvent(new CustomEvent("ra-language-changed", { detail: { lang: lang } }));
  }

  function init() {
    initDualTextRoll();
    document.documentElement.lang = currentLang === "tl" ? "te" : "en";
    document.documentElement.setAttribute("data-lang", currentLang);
    if (document.body) {
      document.body.setAttribute("data-lang", currentLang);
      document.body.classList.toggle("is-telugu", currentLang === "tl");
    }

    // Global delegated click listener for ALL language buttons across all headers, drawers, and subpages
    document.addEventListener("click", function (e) {
      var btn = e.target.closest(".ra-lang-btn, .ra-mobile-lang-btn");
      if (!btn) return;
      var lang = btn.getAttribute("data-lang");
      if (lang === "en" || lang === "tl") {
        switchLanguage(lang);
      }
    });

    if (currentLang !== "en") switchLanguage(currentLang);
    var langBtns = document.querySelectorAll(".ra-lang-btn, .ra-mobile-lang-btn");
    langBtns.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
  }

  window.raI18n = {
    switchLanguage: switchLanguage,
    getCurrentLang: function () { return currentLang; },
    translations: translations,
    extraTextMap: extraTextMap
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
