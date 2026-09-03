(function () {
  "use strict";
  var page = location.pathname.split("/").pop();

  function replace(selector, en, tl, lang) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.innerHTML = lang === "tl" ? tl : en;
    });
  }

  function about(lang) {
    replace("#AboutSec .riTBx",
      '<div class="title">The Best AYUSH Multi-Therapy Clinic</div><p style="text-align:justify">Raju AYUSH Hospital is the vision of Dr. T. Raju, MD (AM), shaped by more than 38 years of dedicated alternative-medicine practice. Located in Patamata, Vijayawada, our clinic provides integrated Homeopathy, Ayurveda, Siddha, Naturopathy, and herbal care for the mind and body.</p><p style="text-align:justify">We look for the root cause of every concern and create personalised care through five complementary medical systems. Our focus is natural recovery, stronger immunity, and practical long-term wellness.</p><p style="text-align:justify">Raju AYUSH Hospital is a calm place for thoughtful care, holistic wellness, and healthier everyday living.</p>',
      '<div class="title">ఉత్తమ ఆయుష్ బహుళ-చికిత్సా ఆసుపత్రి</div><p style="text-align:justify">రాజు ఆయుష్ హాస్పిటల్ డా. టి. రాజు, ఎం.డి. (ఎ.ఎం.) గారి దృష్టి ఫలితం. ప్రత్యామ్నాయ వైద్యంలో ఆయనకు ఉన్న 38 సంవత్సరాలకు పైబడిన అనుభవంతో ఇది రూపుదిద్దుకుంది. విజయవాడ పటమటలోని మా ఆసుపత్రి మనస్సు మరియు శరీర ఆరోగ్యానికి హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి, హెర్బల్ చికిత్సలను సమగ్రంగా అందిస్తుంది.</p><p style="text-align:justify">ప్రతి సమస్య మూలకారణాన్ని గుర్తించి, ఐదు పరస్పర సహాయక వైద్య విధానాలతో వ్యక్తిగత చికిత్సను రూపొందిస్తాము. సహజ కోలుకోవడం, మెరుగైన రోగనిరోధక శక్తి, దీర్ఘకాల ఆరోగ్యం మా లక్ష్యాలు.</p><p style="text-align:justify">రాజు ఆయుష్ హాస్పిటల్ ప్రశాంతమైన సంరక్షణ, సమగ్ర ఆరోగ్యం, ఆరోగ్యవంతమైన దైనందిన జీవితానికి నమ్మకమైన స్థలం.</p>', lang);
    replace("#DoctorSays .ctnt",
      '<div class="secHead">Our Doctor</div><p style="text-align:justify">According to the Global Burden of Disease study, health concerns affect a large part of the world\'s population. Modern medicine is important for acute conditions, while many chronic and complex concerns need a broader, long-term care plan.</p><p style="text-align:justify">Dr. T. Raju, MD (AM), brings 38 years of experience in caring for common, acute, chronic, and complex health concerns. His approach brings together <strong>Homeopathy, Ayurveda, Siddha, Naturopathy, and Herbals</strong> as an integrated <strong>Alternative Medicine</strong> system.</p><p style="text-align:justify">Each plan is designed to support recovery, strengthen immunity and disease resistance, and encourage body-mind balance and long-term health.</p><p style="text-align:justify">Dr. Raju provides non-surgical care for more than 30 categories of concerns, including heart, kidney, liver, diabetes, skin, joint, respiratory, thyroid, and nervous-system conditions.</p>',
      '<div class="secHead">మా వైద్యుడు</div><p style="text-align:justify">గ్లోబల్ బర్డెన్ ఆఫ్ డిసీజ్ అధ్యయనం ప్రకారం ప్రపంచ జనాభాలో ఎక్కువ భాగం ఆరోగ్య సమస్యలను ఎదుర్కొంటున్నారు. తీవ్రమైన పరిస్థితులకు ఆధునిక వైద్యం ముఖ్యమైనదే అయినా, అనేక దీర్ఘకాలిక మరియు క్లిష్ట సమస్యలకు విస్తృతమైన దీర్ఘకాల సంరక్షణ అవసరం.</p><p style="text-align:justify">డా. టి. రాజు, ఎం.డి. (ఎ.ఎం.) గారికి సాధారణ, తీవ్ర, దీర్ఘకాలిక మరియు క్లిష్ట ఆరోగ్య సమస్యల సంరక్షణలో 38 సంవత్సరాల అనుభవం ఉంది. ఆయన విధానం <strong>హోమియోపతి, ఆయుర్వేదం, సిద్ధ, నేచురోపతి మరియు హెర్బల్స్</strong>ను సమగ్ర <strong>ప్రత్యామ్నాయ వైద్యం</strong> వ్యవస్థగా కలుపుతుంది.</p><p style="text-align:justify">ప్రతి చికిత్సా ప్రణాళిక కోలుకోవడాన్ని ప్రోత్సహించడానికి, రోగనిరోధక శక్తి మరియు వ్యాధి నిరోధకతను పెంచడానికి, శరీర-మనస్సు సమతుల్యత మరియు దీర్ఘకాల ఆరోగ్యానికి తోడ్పడటానికి రూపొందించబడుతుంది.</p><p style="text-align:justify">డా. రాజు గారు గుండె, మూత్రపిండాలు, కాలేయం, మధుమేహం, చర్మం, కీళ్లు, శ్వాసకోశం, థైరాయిడ్ మరియు నాడీ వ్యవస్థతో సహా 30కి పైగా సమస్యలకు శస్త్రచికిత్స లేని సంరక్షణ అందిస్తారు.</p>', lang);
    replace("#AbtAyurveda .ritBx",
      '<div class="Toptitle">About Ayurveda &amp; Siddha</div><p style="text-align:justify">Your Ayurvedic consultation begins with a complete wellness evaluation using traditional diagnostic tools, pulse examination, and dosha analysis. It is a helpful starting point for chronic conditions, joint pains, skin concerns, digestive disorders, or improving vitality and immunity.</p><p style="text-align:justify">Siddha medicine works alongside Ayurveda with purified natural minerals, herbs, and therapeutic rasayanas to support cell renewal, disease resistance, and recovery from deep-rooted concerns.</p>',
      '<div class="Toptitle">ఆయుర్వేదం &amp; సిద్ధ గురించి</div><p style="text-align:justify">మీ ఆయుర్వేద సంప్రదింపు సంపూర్ణ ఆరోగ్య మూల్యాంకనంతో ప్రారంభమవుతుంది. సంప్రదాయ నిర్ధారణ పద్ధతులు, నాడీ పరీక్ష మరియు దోష విశ్లేషణను ఉపయోగిస్తాము. దీర్ఘకాలిక సమస్యలు, కీళ్ల నొప్పులు, చర్మ సమస్యలు, జీర్ణ రుగ్మతలు లేదా జీవశక్తి, రోగనిరోధక శక్తి మెరుగుదలకు ఇది ఉపయోగకరమైన ప్రారంభం.</p><p style="text-align:justify">శుద్ధి చేసిన సహజ ఖనిజాలు, మూలికలు మరియు చికిత్సా రసాయనాలతో సిద్ధ వైద్యం ఆయుర్వేదానికి తోడుగా పనిచేస్తుంది. ఇది కణాల పునరుద్ధరణ, వ్యాధి నిరోధక శక్తి మరియు లోతైన సమస్యల నుంచి కోలుకోవడానికి మద్దతు ఇస్తుంది.</p>', lang);
    replace("#HomeopathySec .txtNBx",
      '<div class="secHead">About Homeopathy &amp; Naturopathy</div><p style="text-align:justify">Our German Homeopathy consultations consider physical, emotional, and mental symptoms to guide precise diagnosis and gentle, deep-acting remedies with <strong>zero side effects</strong>. Dr. Raju creates individual formulations that support the body\'s natural healing response.</p><p style="text-align:justify">Combined with Naturopathy and carefully selected herbal extracts, our multi-therapy approach supports metabolic balance, healthy organ function, and long-lasting disease resistance.</p>',
      '<div class="secHead">హోమియోపతి &amp; నేచురోపతి గురించి</div><p style="text-align:justify">మా జర్మన్ హోమియోపతి సంప్రదింపులు శారీరక, భావోద్వేగ మరియు మానసిక లక్షణాలను పరిగణించి ఖచ్చితమైన నిర్ధారణకు మార్గదర్శకం ఇస్తాయి. <strong>ఎటువంటి దుష్ప్రభావాలు లేకుండా</strong> సున్నితంగా పనిచేసే మందులతో శరీరం సహజంగా కోలుకునే ప్రతిస్పందనకు డా. రాజు గారు వ్యక్తిగత ఫార్ములేషన్లను రూపొందిస్తారు.</p><p style="text-align:justify">నేచురోపతి మరియు జాగ్రత్తగా ఎంపిక చేసిన హెర్బల్ సారాలతో కలిపిన మా బహుళ-చికిత్స విధానం జీవక్రియ సమతుల్యత, అవయవాల ఆరోగ్యకర పనితీరు మరియు దీర్ఘకాల వ్యాధి నిరోధకతకు మద్దతు ఇస్తుంది.</p>', lang);
    var labels = [["Happy Patients", "సంతోషకరమైన రోగులు"], ["Years Experience", "సంవత్సరాల అనుభవం"], ["Diseases Treated", "చికిత్స చేసిన వ్యాధులు"], ["AYUSH Medical Systems", "ఆయుష్ వైద్య విధానాలు"]];
    document.querySelectorAll("#cOuNtSec .txt").forEach(function (el, i) { el.textContent = lang === "tl" ? labels[i][1] : labels[i][0]; });
    replace("#DoctorSays .Desig", "Dr. T. Raju - Regd. No. MD 1693", "డా. టి. రాజు - రిజిస్ట్రేషన్ నం. ఎం.డి. 1693", lang);
    replace("#DoctorSays .Quali", "Chief AYUSH Multi-Therapy Senior Specialist", "చీఫ్ ఆయుష్ బహుళ-చికిత్స సీనియర్ నిపుణుడు", lang);
  }

  function contact(lang) {
    replace("#PageBanner .bnrHead", "Contact Us", "మమ్మల్ని సంప్రదించండి", lang);
    replace("#PageBanner .SubT", "Our doors are always open to provide compassionate AYUSH multi-therapy care and holistic healing", "మీ కోసం మా తలుపులు ఎల్లప్పుడూ తెరిచి ఉంటాయి, కరుణతో కూడిన ఆయుష్ బహుళ-చికిత్స మరియు సమగ్ర సంరక్షణ అందిస్తాము", lang);
    var labels = [
      ["Hospital Address", "ఆసుపత్రి చిరునామా"],
      ["Phone & Email Support", "ఫోన్ & ఇమెయిల్ సహాయం"],
      ["Working Hours", "పని వేళలు"]
    ];
    document.querySelectorAll("#ContactSec .label").forEach(function (el, i) {
      if (labels[i]) el.textContent = lang === "tl" ? labels[i][1] : labels[i][0];
    });
    replace("#ContactSec .hEadBx .title", "Contact Info", "సంప్రదింపు వివరాలు", lang);
    replace("#ContactSec .item .cmnBx:nth-child(1) .txtBx p", '<strong>Raju AYUSH Hospital</strong><br>2nd Road, New Postal Colony, Pantakaluva Road,<br>Patamata, Vijayawada, 520010, Andhra Pradesh', '<strong>రాజు ఆయుష్ హాస్పిటల్</strong><br>2వ రోడ్, న్యూ పోస్టల్ కాలనీ, పంటకాలువ రోడ్,<br>పటమట, విజయవాడ, 520010, ఆంధ్రప్రదేశ్.', lang);
    replace("#ContactSec .item .cmnBx:nth-child(1) .sub-info span", '<strong>Multi-Therapy:</strong> AYUSH Outpatient Care', '<strong>బహుళ-చికిత్స:</strong> ఆయుష్ ఔట్‌పేషెంట్ సంరక్షణ', lang);
    replace("#ContactSec .item .cmnBx:nth-child(3) .txtBx p", '<strong>Monday to Sunday:</strong> 9:00 AM to 9:00 PM<br><em>Prior appointments &amp; emergency outpatient care (7 days)</em>', '<strong>సోమవారం నుండి ఆదివారం వరకు:</strong> ఉదయం 9:00 నుండి రాత్రి 9:00 వరకు<br><em>అపాయింట్‌మెంట్లు మరియు అత్యవసర ఔట్‌పేషెంట్ సేవలు (7 రోజులు)</em>', lang);
    replace("#ContactSec .item .cmnBx:nth-child(3) .sub-info span", '<strong>24*7 Support:</strong> In-Clinic &amp; Video Consultations', '<strong>24*7 సహాయం:</strong> ఇన్-క్లినిక్ &amp; వీడియో సంప్రదింపులు', lang);
    replace("#mapSec .MainT", "Our Location Map", "మా స్థాన మ్యాప్", lang);
  }

  function diseases(lang) {
    var cards = [
      ["Heart & Valve Blocks / Heart Diseases","గుండె వ్యాధులు & హార్ట్ బ్లాకులు","Holistic cardiac care for chest pain, heart blocks, valve calcification, and bypass alternatives through natural AYUSH therapy.","ఆపరేషన్ లేకుండా హార్ట్ బ్లాకులు, వాల్వ్ సమస్యలు, ఛాతీ నొప్పి మరియు బైపాస్ ప్రత్యామ్నాయాలకు ఆయుష్ సహజ వైద్య చికిత్స."],
      ["Kidney Diseases, Dialysis & Stones","మూత్రపిండాల వ్యాధులు, డయాలసిస్ & రాళ్ళు","Holistic management for kidney diseases, dialysis support, elevated creatinine, and natural kidney stone removal without surgery.","క్రియాటినిన్ నియంత్రణ, మూత్రపిండాల వ్యాధులు, డయాలసిస్ సహాయం మరియు శస్త్రచికిత్స లేకుండా కిడ్నీ రాళ్లను కరిగించే సహజ చికిత్స."],
      ["Diabetes & Metabolic Disorders","డయాబెటిస్ / మధుమేహం & జీవక్రియ రుగ్మతలు","Root-cause blood sugar control, metabolic restoration, and prevention of diabetic neuropathy and complications through herbal medicine.","రక్తంలో చక్కెర స్థాయిల నియంత్రణ, జీవక్రియ సమతుల్యత మరియు డయాబెటిక్ సమస్యల నివారణకు శాస్త్రీయ మూలికా వైద్యం."],
      ["Brain, Paralysis & Stroke","మెదడు, పక్షవాతం & బ్రెయిన్ స్ట్రోక్","Advanced multi-therapy neuro-rehabilitation for stroke recovery, paralysis, facial palsy, and neurological rejuvenation.","పక్షవాతం, బ్రెయిన్ స్ట్రోక్, మూఖ పక్షవాతం, నరాల బలహీనత మరియు మెదడు ఆరోగ్యం కోసం సమగ్ర ఆయుష్ న్యూరో-పునరావాస చికిత్స."],
      ["Liver Diseases, Fatty Liver & Jaundice","లివర్ వ్యాధులు, ఫ్యాటీ లివర్ & కామెర్లు","Natural hepatoprotective therapies for fatty liver, cirrhosis, jaundice, and complete liver detoxification without side effects.","ఫ్యాటీ లివర్, లివర్ సిర్రోసిస్, కామెర్లు మరియు కాలేయ శుద్ధి (డిటాక్స్) కోసం సహజమైన ఆయుష్ ఔషధ చికిత్స."],
      ["Spine, Backbone & Spondylosis","వెన్నుముక వ్యాధులు & స్పాండిలోసిస్","Non-surgical relief for lumbar & cervical spondylosis, sciatica nerve compression, disc bulge, and chronic backbone pain.","సర్జరీ లేకుండా లంబార్ & సర్వైకల్ స్పాండిలోసిస్, డిస్క్ సమస్యలు, సయాటికా నరాల నొప్పి మరియు తీవ్రమైన వెన్నునొప్పికి శాశ్వత నివారణ."],
      ["Joint & Knee Pain / Arthritis","కీళ్ళ & మోకాళ్ళ వ్యాధులు / ఆర్థరైటిస్","Natural relief from joint inflammation, osteoarthritis, rheumatoid arthritis, cartilage wear, and chronic knee pain through classical herbal therapies.","కీళ్ల వాపు, మోకాళ్ల అరుగుదల, ఆర్థరైటిస్, రుమాటిజం మరియు దీర్ఘకాలిక మోకాళ్ల నొప్పుల నుండి సహజ ఉపశమనం."],
      ["Psoriasis, Vitiligo & Skin Diseases","సొరియాసిస్, బొల్లి & చర్మ వ్యాధులు","Comprehensive natural treatment for psoriasis, vitiligo, eczema, chronic skin rashes, and autoimmune dermatological conditions.","సోరియాసిస్, బొల్లి (తెల్ల మచ్చలు), ఎగ్జిమా, దీర్ఘకాల చర్మ అలెర్జీలు మరియు ఫంగల్ ఇన్ఫెక్షన్లకు స్టెరాయిడ్స్ లేని శాశ్వత చికిత్స."],
      ["Sinusitis & Chronic Respiratory","సైనసైటిస్ & దీర్ఘకాల శ్వాసకోశ సమస్యలు","Natural ENT relief for chronic sinusitis, allergic rhinitis, nasal congestion, bronchitis, and respiratory allergies.","దీర్ఘకాలిక సైనసైటిస్, శ్వాసకోశ అలెర్జీలు, ముక్కు మూసుకుపోవడం, తుమ్ములు మరియు బ్రాంకైటిస్‌కు సహజ నివారణ."],
      ["Digestive & Gastrointestinal / Gastric","జీర్ణకోశ వ్యాధులు / గ్యాస్ట్రిక్ & ఎసిడిటీ","Specialized herbal treatment for chronic acidity, GERD, gas, bloating, gastric pain, indigestion, and gastrointestinal disorders.","గ్యాస్ట్రిక్, ఎసిడిటీ, అజీర్ణం, కడుపు ఉబ్బరం, గుండెల్లో మంట మరియు దీర్ఘకాలిక జీర్ణకోశ సమస్యలకు ప్రామాణిక మూలికా చికిత్స."],
      ["Nausea & Vomiting","వికారం & వాంతులు","Relief from persistent nausea, morning sickness, and vomiting through herbal remedies and acupressure therapy.","నిరంతర వికారం, ఉదయపు అస్వస్థత మరియు వాంతులకు హెర్బల్ చికిత్సలు, ఆక్యుప్రెషర్ ద్వారా ఉపశమనం."],
      ["Vomiting Control","వాంతుల నియంత్రణ","Specialized treatments to stop chronic vomiting using homeopathic and Siddha formulations for lasting relief.","దీర్ఘకాలిక వాంతులను నియంత్రించడానికి హోమియోపతి మరియు సిద్ధ ఫార్ములేషన్లతో ప్రత్యేక చికిత్స."],
      ["Gas & Bloating","గ్యాస్ & ఉబ్బరం","Natural remedies for abdominal gas, bloating, and flatulence through dietary therapy and herbal medicines.","ఆహార చికిత్స మరియు హెర్బల్ మందుల ద్వారా పొట్ట గ్యాస్, ఉబ్బరం, వాయువు సమస్యలకు సహజ సంరక్షణ."],
      ["Insomnia & Sleep Disorders","నిద్రలేమి & నిద్ర రుగ్మతలు","Holistic treatment for sleeplessness using naturopathy, herbal teas, and relaxation techniques.","నేచురోపతి, హెర్బల్ టీలు మరియు విశ్రాంతి పద్ధతులతో నిద్రలేమికి సమగ్ర చికిత్స."],
      ["Loss of Appetite","ఆకలి లేకపోవడం","Restoring healthy appetite through Ayurvedic digestive stimulants and nutritional counseling.","ఆయుర్వేద జీర్ణ ఉత్తేజకాలు మరియు పోషకాహార సలహాలతో ఆరోగ్యకరమైన ఆకలిని పునరుద్ధరించడం."],
      ["Gastric Pain & Fever","గ్యాస్ట్రిక్ నొప్పి & జ్వరం","Treatment for stomach pain, acidity, and fever using our multi-therapy AYUSH approach.","మా బహుళ-చికిత్స ఆయుష్ విధానంతో కడుపునొప్పి, అసిడిటీ మరియు జ్వరానికి చికిత్స."],
      ["Gas Passing Problems","వాయువు సమస్యలు","Resolving digestive irregularities and gas retention through herbal carminatives and diet therapy.","హెర్బల్ జీర్ణ సహాయకాలు, ఆహార చికిత్సతో జీర్ణక్రియ అసమతుల్యత మరియు గ్యాస్ నిల్వ సమస్యలకు పరిష్కారం."],
      ["Dust Allergy & Cold","దుమ్ము అలెర్జీ & జలుబు","Relief from allergic rhinitis, sneezing, and common cold through immunity-boosting AYUSH therapies.","రోగనిరోధక శక్తిని పెంచే ఆయుష్ చికిత్సలతో అలెర్జీ రైనైటిస్, తుమ్ములు, సాధారణ జలుబుకు ఉపశమనం."],
      ["Skin Rashes & Itching","చర్మ దద్దుర్లు & దురద","Natural treatment for dermatitis, eczema, and body itching without steroid side effects.","స్టెరాయిడ్ దుష్ప్రభావాలు లేకుండా డెర్మటైటిస్, ఎగ్జిమా, శరీర దురదకు సహజ చికిత్స."],
      ["Post-meal Nausea","భోజనం తర్వాత వికారం","Specialized digestive therapy for nausea after eating using Siddha and Ayurvedic medicines.","సిద్ధ మరియు ఆయుర్వేద మందులతో భోజనం తర్వాత వచ్చే వికారానికి ప్రత్యేక జీర్ణ చికిత్స."],
      ["Chronic Cough","దీర్ఘకాలిక దగ్గు","Effective herbal remedies for persistent cough, bronchitis, and throat irritation.","నిరంతర దగ్గు, బ్రాంకైటిస్ మరియు గొంతు మంటకు ప్రభావవంతమైన హెర్బల్ చికిత్సలు."],
      ["General Body Weakness","సాధారణ శరీర బలహీనత","Rejuvenation therapy for chronic fatigue, low energy, and general debility using herbal tonics.","హెర్బల్ టానిక్‌లతో దీర్ఘకాల అలసట, తక్కువ శక్తి, సాధారణ బలహీనతకు పునరుజ్జీవన చికిత్స."],
      ["Surgical Wound Healing","శస్త్రచికిత్స గాయాల మాన్పు","Pre and post-surgery wound care using herbal antiseptics and tissue regeneration therapy.","హెర్బల్ యాంటీసెప్టిక్‌లు మరియు కణజాల పునరుద్ధరణ చికిత్సతో శస్త్రచికిత్స ముందు, తర్వాత గాయాల సంరక్షణ."],
      ["Urinary Infections","మూత్ర మార్గ ఇన్ఫెక్షన్లు","Treatment for UTI, burning urination, and urinary tract disorders through natural diuretics and herbal formulations.","సహజ మూత్రవిసర్జకాలు మరియు హెర్బల్ ఫార్ములేషన్లతో యుటిఐ, మూత్ర విసర్జనలో మంట సమస్యలకు సహజ చికిత్స."],
      ["Diarrhea & Dysentery","విరేచనాలు & డిసెంటరీ","Rapid relief from all types of diarrhea using Siddha and homeopathic medicines.","సిద్ధ మరియు హోమియోపతి మందులతో అన్ని రకాల విరేచనాలకు త్వరిత ఉపశమనం."],
      ["Viral Fever Prevention","వైరల్ జ్వరం నివారణ","Anti-viral immunity boosting against dengue, corona, and seasonal fevers with herbal supplements.","హెర్బల్ సప్లిమెంట్లతో డెంగ్యూ, కరోనా మరియు కాలానుగుణ జ్వరాలకు వైరల్ నిరోధక రోగనిరోధక మద్దతు."],
      ["Anxiety & Nervousness","ఆందోళన & నాడీ ఉద్రిక్తత","Calming treatments for fear, panic attacks, and nervousness through naturopathy and yoga therapy.","నేచురోపతి మరియు యోగా చికిత్సతో భయం, పానిక్ అటాక్స్, నాడీ ఉద్రిక్తతకు ప్రశాంతమైన సంరక్షణ."],
      ["Acne & Pimple Treatment","మొటిమల చికిత్స","Clear skin therapy using herbal face treatments and blood purification for lasting results.","దీర్ఘకాల ఫలితాల కోసం హెర్బల్ ఫేస్ ట్రీట్‌మెంట్లు మరియు రక్త శుద్ధితో స్వచ్ఛమైన చర్మ చికిత్స."],
      ["Depression & Mood Swings","నిరాశ & మూడ్ మార్పులు","Holistic mental wellness through counseling, herbal mood stabilizers, and yoga therapy.","కౌన్సెలింగ్, హెర్బల్ మూడ్ స్టెబిలైజర్లు మరియు యోగా చికిత్సతో సమగ్ర మానసిక ఆరోగ్య సంరక్షణ."],
      ["Migraine Relief","మైగ్రేన్ ఉపశమనం","Targeted treatment for chronic migraine and tension headaches without painkillers.","పెయిన్ కిల్లర్లు లేకుండా దీర్ఘకాల మైగ్రేన్ మరియు టెన్షన్ తలనొప్పికి లక్ష్యిత చికిత్స."],
      ["Toothache & Dental Pain Relief","పన్ను నొప్పి & దంత సమస్యల నివారణ","Natural non-invasive relief for severe toothache, sensitive gums, dental nerve inflammation, and recurrent oral pain through potent herbal extracts and constitutional remedies without painful procedures.","శస్త్రచికిత్స మరియు నొప్పి కలిగించే ప్రక్రియలు లేకుండా తీవ్రమైన పన్ను నొప్పి, చిగుళ్ల వాపు, నరాల మంట మరియు నోటి సమస్యలకు శక్తివంతమైన ఆయుష్ హెర్బల్ ఔషధాల ద్వారా సహజ ఉపశమనం."],
      ["Sunstroke & Summer Heat Exhaustion","వడదెబ్బ & ఎండ వేడిమి తాపం","Rapid rehydration and restorative herbal cooling therapies to protect against severe sunstroke, dizziness, heat exhaustion, and summer body burning, stabilizing core electrolyte balance safely.","తీవ్రమైన ఎండ వేడిమి, వడదెబ్బ, తలతిరగడం, అధిక దాహం మరియు శరీర తాపం నుండి రక్షణకు ఎలక్ట్రోలైట్ సమతుల్యతను కాపాడే సహజ శీతలీకరణ ఆయుర్వేద సంరక్షణ."],
      ["Women’s Health, PCOD & Hormonal Balance","స్త్రీల గర్భకోశ వ్యాధులు, PCOD & హార్మోన్ల సమతుల్యత","Holistic botanical care for PCOD/PCOS, irregular menstrual cycles, uterine fibroids, and natural fertility enhancement, restoring inner hormonal rhythm and vitality without synthetic hormones.","పీసీఓడీ (PCOD/PCOS), హార్మోన్ల అసమతుల్యత, నెలసరి సమస్యలు, గర్భాశయ గడ్డలు మరియు సహజ సంతాన సాఫల్యత కోసం సింథటిక్ హార్మోన్లు లేని సమగ్ర ఆయుష్ చికిత్స."],
      ["Men’s Health & Prostate Care","పురుషుల ఆరోగ్యం, ప్రొస్టేట్ & లైంగిక సమస్యలు","Targeted AYUSH care for benign prostatic enlargement (BPH), frequent nocturnal urination, male fertility, and vitality restoration, promoting long-term confidence and comfort.","ప్రొస్టేట్ గ్రంథి వాపు (BPH), రాత్రివేళల్లో తరచుగా మూత్రవిసర్జన, నపుంసకత్వం, పురుషుల సంతాన సమస్యలు మరియు శారీరక శక్తి పునరుద్ధరణకు ప్రత్యేక ఆయుష్ వైద్యం."],
      ["Desk-Work Neck & Arm Strain (RSI)","కంప్యూటర్ వర్క్ మెడ & చేతుల నొప్పులు","Specialized ergonomic relief for IT professionals and desk workers suffering from cervical stiffness, radiating arm ache, wrist tension, and postural muscle fatigue.","కంప్యూటర్ డెస్క్ వర్క్ చేసేవారికి మరియు ఐటీ నిపుణులకు వచ్చే మెడ దృఢత్వం, చేతుల్లోకి పాకే నొప్పి, భుజాల నొప్పులు మరియు మణికట్టు ఒత్తిడికి ప్రత్యేక ఎర్గోనామిక్ ఆయుష్ చికిత్స."],
      ["Numbness & Tingling in Hands & Feet","కాళ్లు, చేతుల తిమ్మిర్లు & నరాల బలహీనత","Restorative nerve therapies to alleviate tingling, prickling 'pins and needles', burning feet sensations, and micro-circulation loss associated with diabetic and peripheral neuropathy.","డయాబెటిక్ న్యూరోపతి, కాళ్లు-చేతుల వేళ్ళలో తిమ్మిర్లు, సూదులతో గుచ్చినట్లు అనిపించడం, అరికాళ్ల మంటలు మరియు నరాల బలహీనతకు పునరుజ్జీవన నరాల చికిత్స."],
      ["Navel & Abdominal Colic Pain","బొడ్డు దగ్గర చురుకు, మంట & కడుపు నొప్పి","Gentle carminative and anti-spasmodic herbal remedies providing prompt soothing relief for deep umbilical ache, sharp intestinal spasms, and localized abdominal distress.","బొడ్డు చుట్టూ తీవ్రమైన చురుక్కుమనే నొప్పి, కడుపులో మంట, పేగుల కొలిక్ మరియు జీర్ణకోశ తిమ్మిర్ల నుండి తక్షణ ఉపశమనం కలిగించే సహజ హెర్బల్ ఔషధాలు."],
      ["Specific Food Intolerance & Allergies","ఆహార అలర్జీలు (గోంగూర, దొండ, బెండ పడనివారికి)","Detoxification and mucosal immune-balancing therapies for individuals suffering from acute flare-ups, body itching, skin redness, or acidity triggered by specific vegetables and sour foods.","గోంగూర, దొండ, బెండ వంటి ప్రత్యేక కూరగాయలు మరియు పుల్లటి ఆహారాలు తిన్నప్పుడు వచ్చే చర్మ దురదలు, దద్దుర్లు, అసిడిటీ మరియు అలెర్జీలకు శాశ్వత నివారణ చికిత్స."]
    ];
    document.querySelectorAll(".dSBx").forEach(function (card, index) {
      var title = card.querySelector(".title"), description = card.querySelector("p");
      if (!title || !description) return;
      var item = cards[index];
      if (!item) return;
      title.textContent = lang === "tl" ? item[1] : item[0];
      description.textContent = lang === "tl" ? item[3] : item[2];
    });
    replace("#showMoreDiseases", "Show More Diseases &#8595;", "మరిన్ని వ్యాధులు చూడండి &#8595;", lang);
  }

  function animateCounters() {
    var section = document.querySelector("#cOuNtSec");
    if (!section || !window.IntersectionObserver) return;
    new IntersectionObserver(function (entries, observer) {
      if (!entries[0].isIntersecting) return;
      section.querySelectorAll(".num[data-count]").forEach(function (el) {
        var end = Number(el.dataset.count), started = performance.now();
        function frame(now) {
          var progress = Math.min((now - started) / 1100, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - progress, 3))).toLocaleString("en-IN") + "+";
          if (progress < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      });
      observer.disconnect();
    }, { threshold: 0.35 }).observe(section);
  }

  function apply(lang) {
    if (page === "about-us.html" || page === "about-us" || document.querySelector("#AboutSec") || document.querySelector(".aboutPage")) about(lang);
    if (page === "contact-us.html" || page === "contact-us" || document.querySelector("#ContactSec") || document.querySelector(".contactPage")) contact(lang);
    if (page === "diseases.html" || page === "diseases" || document.querySelector("#DiseasesSec") || document.querySelector(".dSBx")) diseases(lang);
  }
  window.addEventListener("ra-language-changed", function (event) { apply(event.detail.lang); });
  document.addEventListener("DOMContentLoaded", animateCounters);
  setTimeout(function () { apply(localStorage.getItem("ra-lang") === "tl" ? "tl" : "en"); }, 350);
})();
