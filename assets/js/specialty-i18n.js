(function () {
  "use strict";

  function getPageName() {
    var p = location.pathname.split("/").pop().split("?")[0].split("#")[0] || "";
    if (p && translations[p]) return p;
    if (p && translations[p + ".html"]) return p + ".html";
    var href = (location.href || "").toLowerCase();
    if (href.indexOf("ayurveda") !== -1 || document.querySelector(".ayurvedaPage") || document.title.indexOf("Ayurveda") !== -1) return "ayurveda-consultation.html";
    if (href.indexOf("homeo") !== -1 || document.querySelector(".homeoPage") || document.title.indexOf("Homeopathy") !== -1) return "homeopathy.html";
    if (href.indexOf("siddha") !== -1 || document.querySelector(".siddhaPage") || document.title.indexOf("Siddha") !== -1) return "siddha-medicine.html";
    if (href.indexOf("naturopathy") !== -1 || document.querySelector(".naturopathyPage") || document.title.indexOf("Naturopathy") !== -1) return "naturopathy.html";
    if (href.indexOf("herbal") !== -1 || document.querySelector(".herbalPage") || document.title.indexOf("Herbal") !== -1) return "herbal-medicine.html";
    return p || "ayurveda-consultation.html";
  }

  var translations = {
    "ayurveda-consultation.html": {
      bnrTitle: { en: "Therapeutic Ayurvedic Healing & Care", tl: "ఆయుర్వేద సంప్రదింపు & సహజ స్వస్థత" },
      bnrSub: { en: "Bringing your body, mind, and vital energies back into balance through classical pulse diagnosis, personalized herbal care, and authentic Vedic healing.", tl: "ప్రాచీన నాడీ పరీక్ష, త్రిదోష సమతుల్యత మరియు సహజ మూలికా సంరక్షణతో మీ శరీరానికి సంపూర్ణ ఆరోగ్యాన్ని అందిస్తాము." },
      head: { en: "Ayurveda Consultation & Multi-Therapy", tl: "ఆయుర్వేద సంప్రదింపు & బహుళ-చికిత్స" },
      content: {
        en: '<p>Your Ayurvedic consultation journey at Raju AYUSH Hospital begins with a comprehensive wellness and dosha evaluation using ancient Ayurvedic diagnostic principles (Nadi Pariksha / Pulse Examination, Darshana, Sparshana, and Prashna). It provides an ideal holistic approach to both acute and chronic conditions without causing any side effects.</p><h3>Core Principles of Our Ayurvedic Treatment:</h3><ul><li><strong>Tridosha Evaluation:</strong> Detailed assessment of your Vata, Pitta, and Kapha imbalances to pinpoint the primary root cause of disorders.</li><li><strong>Customized Herbal Formulations:</strong> Pure, classical herbal remedies prepared to restore tissue vitality (Dhatus) and eliminate metabolic toxins (Ama).</li><li><strong>Nadi Pariksha (Pulse Diagnosis):</strong> Traditional pulse examination to evaluate subtle functional imbalances and organ vitality.</li><li><strong>Immunity & Disease Resistance:</strong> Special emphasis on boosting innate immunity (Ojas) alongside targeted disease resolution.</li></ul><h3>Conditions Successfully Managed:</h3><p>Digestive disorders, chronic acidity, irritable bowel syndrome, liver congestion, joint pains, osteoarthritis, rheumatoid arthritis, chronic sinusitis, migraines, eczema, psoriasis, and metabolic fatigue.</p><p>Under the expert guidance of Dr. T. Raju, MD (AM) with 38+ years of experience, Ayurvedic therapies are combined synergistically with other AYUSH systems for rapid, safe, and permanent relief.</p>',
        tl: '<p>రాజు ఆయుష్ హాస్పిటల్‌లో మీ ఆయుర్వేద సంప్రదింపు నాడీ పరీక్ష, దర్శన, స్పర్శన మరియు ప్రశ్న వంటి సాంప్రదాయ నిర్ధారణ విధానాలతో సమగ్ర ఆరోగ్య, దోష మూల్యాంకనంతో ప్రారంభమవుతుంది. ఇది దుష్ప్రభావాలు లేకుండా తక్షణ మరియు దీర్ఘకాలిక సమస్యలకు సమగ్ర మార్గదర్శకాన్ని అందిస్తుంది.</p><h3>మా ఆయుర్వేద చికిత్స ముఖ్య సూత్రాలు:</h3><ul><li><strong>త్రిదోష మూల్యాంకనం:</strong> వాత, పిత్త, కఫ అసమతుల్యతలను పరిశీలించి మూల కారణాన్ని గుర్తించడం.</li><li><strong>వ్యక్తిగత హెర్బల్ ఫార్ములేషన్లు:</strong> కణజాల బలాన్ని పునరుద్ధరించడానికి సహజ మూలికా చికిత్సలు.</li><li><strong>నాడీ పరీక్ష:</strong> శరీరం అంతర్గత స్థితిని తెలుసుకోవడానికి ప్రాచీన నాడీ నిర్ధారణ.</li><li><strong>రోగనిరోధక శక్తి:</strong> సహజ రోగనిరోధకతను పెంచడంపై ప్రత్యేక దృష్టి.</li></ul><h3>చికిత్సకు అనుకూలమైన పరిస్థితులు:</h3><p>జీర్ణ సమస్యలు, అసిడిటీ, కీళ్ల నొప్పులు, సైనసైటిస్, మైగ్రేన్, ఎగ్జిమా, సోరియాసిస్ మరియు అలసటకు సమగ్ర సంరక్షణ.</p><p>డా. టి. రాజు గారి 38 సంవత్సరాల అనుభవంతో, ఆయుర్వేదాన్ని ఇతర ఆయుష్ విధానాలతో కలిపి సురక్షితమైన, స్థిరమైన ఉపశమనం కోసం అందిస్తాము.</p>'
      },
      subtitle: { en: "Ayurvedic Core Pillars", tl: "ఆయుర్వేద ముఖ్య సూత్రాలు" },
      mainTitle: { en: "Holistic Healing Modalities", tl: "సమగ్ర స్వస్థత చికిత్సా విధానాలు" },
      cards: [
        {
          title: { en: "Tridosha Balancing", tl: "త్రిదోష సమతుల్యత" },
          desc: { en: "Personalized assessment of Vata, Pitta & Kapha imbalances to restore biological rhythm.", tl: "శరీర సహజ జీవక్రియలను పునరుద్ధరించడానికి వాత, పిత్త, కఫ అసమతుల్యతలపై వ్యక్తిగత మూల్యాంకనం." }
        },
        {
          title: { en: "Classical Herbal Medicine", tl: "శాస్త్రీయ మూలికా వైద్యం" },
          desc: { en: "Pure, customized botanicals that neutralize cellular toxins (Ama) and revitalize organ systems.", tl: "శరీర వ్యర్థాలను (ఆమ) తొలగించి అవయవాల శక్తిని పెంచే స్వచ్ఛమైన ఆయుర్వేద ఔషధాలు." }
        },
        {
          title: { en: "Pulse Diagnosis (Nadi)", tl: "ప్రాచీన నాడీ పరీక్ష" },
          desc: { en: "Classical Nadi Pariksha detecting root health anomalies before clinical symptoms manifest.", tl: "వ్యాధి లక్షణాలు బయటపడకముందే మూల కారణాన్ని గుర్తించే ప్రాచీన నాడీ పరీక్ష విధానం." }
        }
      ],
      benefitsTitle: { en: "Key Health Benefits", tl: "ముఖ్య ఆరోగ్య ప్రయోజనాలు" },
      benefitsList: [
        { en: "<strong>Eliminates Deep Cellular Toxins:</strong> Purges accumulated Ama and unblocks micro-circulatory channels (Srotas).", tl: "<strong>కణజాలాల నుండి టాక్సిన్స్ తొలగింపు:</strong> పేరుకుపోయిన ఆమను తొలగించి శరీర సూక్ష్మ నాళాలను (స్రోతస్) శుద్ధి చేస్తుంది." },
        { en: "<strong>Relief from Joint & Spine Pain:</strong> Effective rejuvenation for arthritis, sciatica, spondylitis, and chronic stiffness.", tl: "<strong>కీళ్లు & వెన్నెముక నొప్పుల నివారణ:</strong> ఆర్థరైటిస్, సయాటికా, స్పాండిలైటిస్ మరియు కండరాల దృఢత్వానికి సమర్థవంతమైన పునరుజ్జీవనం." },
        { en: "<strong>Restores Digestive Vitality (Agni):</strong> Cures chronic acidity, gastric bloating, IBS, and sluggish metabolism.", tl: "<strong>జీర్ణశక్తిని (అగ్ని) పునరుద్ధరించడం:</strong> దీర్ఘకాలిక అసిడిటీ, గ్యాస్ట్రిక్ ఉబ్బరం, IBS మరియు నెమ్మదించిన జీర్ణక్రియను నయం చేస్తుంది." },
        { en: "<strong>100% Side-Effect Free Immunity:</strong> Strengthens innate disease resistance and builds lasting cellular vitality (Ojas).", tl: "<strong>100% దుష్ప్రభావాలు లేని రోగనిరోధకత:</strong> సహజ వ్యాధి నిరోధక శక్తిని పెంచి దీర్ఘకాలిక కణజాల శక్తిని (ఓజస్) నిర్మిస్తుంది." }
      ],
      ctaBadge: { en: "Holistic Ayurveda Healing", tl: "సమగ్ర ఆయుర్వేద సంరక్షణ" },
      ctaTitle: { en: "Experience Ancient Ayurvedic Pulse Diagnosis", tl: "ప్రాచీన ఆయుర్వేద నాడీ పరీక్షను అనుభవించండి" },
      ctaDesc: { en: "Consult with Dr. T. Raju, MD (AM) for personalized multi-therapy treatment and comprehensive clinical care at Raju AYUSH Hospital, Vijayawada.", tl: "వ్యక్తిగత చికిత్స మరియు సమగ్ర ఆరోగ్య సంరక్షణ కోసం రాజు ఆయుష్ హాస్పిటల్, విజయవాడలో డా. టి. రాజు గారిని సంప్రదించండి." },
      ctaBtnPrimary: { en: "Book An Appointment", tl: "అపాయింట్‌మెంట్ బుక్ చేయండి" },
      ctaBtnSecondary: { en: "📞 Call Direct", tl: "📞 నేరుగా కాల్ చేయండి" }
    },

    "homeopathy.html": {
      bnrTitle: { en: "Constitutional Homeopathic Care", tl: "హోమియోపతి చికిత్స & సహజ సంరక్షణ" },
      bnrSub: { en: "Gentle, root-cause healing tailored to your unique physical and emotional constitution, offering safe, non-invasive recovery with zero side effects.", tl: "మీ వ్యక్తిగత శరీర స్వభావానికి అనుగుణంగా, ఎటువంటి దుష్ప్రభావాలు లేకుండా దీర్ఘకాలిక సమస్యల నుండి సహజంగా కోలుకునే సురక్షితమైన మార్గం." },
      head: { en: "Advanced Constitutional Homeopathy Care", tl: "అధునాతన శరీర స్వభావ హోమియోపతి సంరక్షణ" },
      content: {
        en: '<p>Led by Dr. T. Raju, MD (AM), our Advanced Homeopathy Department offers individualized constitutional healing based on over 38 years of dedicated medical research. Homeopathy works on the fundamental law of <em>Similia Similibus Curentur</em> (Like Cures Like), gently stimulating the body\'s natural vital force to eradicate diseases from their root.</p><h3>Why Choose Raju AYUSH Hospital Homeopathy?</h3><ul><li><strong>Zero Side Effects:</strong> Ultra-diluted, potentized natural remedies that are 100% non-toxic, safe for infants, pregnant women, and elderly patients.</li><li><strong>Constitutional totality:</strong> We treat the individual as a whole by evaluating physical symptoms, emotional predispositions, environmental factors, and mental stress.</li><li><strong>Non-Surgical Solutions:</strong> Highly effective non-invasive treatment for conditions often recommended for surgery, including Kidney Stones, Heart Blocks, Piles/Fistula, and Enlarged Prostate.</li><li><strong>Chronic Disease Mastery:</strong> Deep action in life-threatening and long-standing chronic conditions where conventional medicine provides only temporary relief.</li></ul><h3>Major Ailments Treated:</h3><p>Cardiac conditions (Hypertension, BP, Heart Blocks, post-bypass recovery), Kidney stone dissolution, dialysis support, Asthma, Bronchitis, Thyroid dysfunction, Migraines, Allergic rhinitis, Anxiety, Depression, and Chronic Skin conditions.</p>',
        tl: '<p>డా. టి. రాజు గారి మార్గదర్శకత్వంలో మా హోమియోపతి విభాగం వ్యక్తిగత శరీర స్వభావాన్ని ఆధారంగా చేసుకుని చికిత్సను అందిస్తుంది. హోమియోపతి సహజ జీవశక్తిని మృదువుగా ఉత్తేజపరచి మూల కారణంపై పని చేస్తుంది.</p><h3>రాజు ఆయుష్ హోమియోపతిని ఎందుకు ఎంచుకోవాలి?</h3><ul><li><strong>దుష్ప్రభావాలు లేని సంరక్షణ:</strong> సున్నితమైన సహజ మందులు.</li><li><strong>సంపూర్ణ వ్యక్తి మూల్యాంకనం:</strong> శారీరక, భావోద్వేగ మరియు జీవనశైలి అంశాల పరిశీలన.</li><li><strong>శస్త్రచికిత్స లేని పరిష్కారాలు:</strong> అవసరమైన చోట వైద్యుల పర్యవేక్షణలో సహాయక సంరక్షణ.</li><li><strong>దీర్ఘకాలిక సమస్యలపై దృష్టి:</strong> నిరంతర ఆరోగ్య లక్ష్యాలకు వ్యక్తిగత ప్రణాళిక.</li></ul><h3>చికిత్సకు అనుకూలమైన సమస్యలు:</h3><p>శ్వాసకోశ, థైరాయిడ్, మైగ్రేన్, అలెర్జీ, చర్మ సమస్యలు, ఒత్తిడి మరియు దీర్ఘకాలిక ఆరోగ్య సమస్యలకు సంప్రదింపు అందుబాటులో ఉంది.</p>'
      },
      subtitle: { en: "Homeopathic Core Strengths", tl: "హోమియోపతి ముఖ్య బలాలు" },
      mainTitle: { en: "Principles of Constitutional Healing", tl: "శరీర స్వభావ చికిత్సా సూత్రాలు" },
      cards: [
        {
          title: { en: "Constitutional Healing", tl: "కాన్‌స్టిట్యూషనల్ హీలింగ్" },
          desc: { en: "Individualized therapy harmonizing physical vitality, emotional state, and genetic tendencies.", tl: "శారీరక శక్తి, మానసిక స్థితి మరియు జన్యు లక్షణాలను సమన్వయపరిచే వ్యక్తిగత చికిత్స." }
        },
        {
          title: { en: "Root-Cause Eradication", tl: "మూల కారణం నిర్మూలన" },
          desc: { en: "Treats deep internal pathology for permanent cure rather than temporary symptom suppression.", tl: "లక్షణాలను తాత్కాలికంగా అణచివేయడం కాకుండా, శాశ్వత నివారణ కోసం అంతర్గత మూల కారణంపై పని చేస్తుంది." }
        },
        {
          title: { en: "Zero Side Effects", tl: "సున్నా దుష్ప్రభావాలు" },
          desc: { en: "Ultra-pure, gentle micro-dilutions completely non-toxic and safe for all age groups.", tl: "అన్ని వయసుల వారికి పూర్తిగా సురక్షితమైన, విషరహిత అతి స్వచ్ఛమైన సహజ మందులు." }
        }
      ],
      benefitsTitle: { en: "Key Health Benefits", tl: "ముఖ్య ఆరోగ్య ప్రయోజనాలు" },
      benefitsList: [
        { en: "<strong>Safe Non-Surgical Recovery:</strong> Proven non-invasive clinical support for kidney stones, piles, and prostate concerns.", tl: "<strong>శస్త్రచికిత్స లేని సురక్షిత రికవరీ:</strong> కిడ్నీ రాళ్ళు, పైల్స్ మరియు ప్రోస్టేట్ సమస్యలకు సురక్షితమైన శస్త్రచికిత్స రహిత మద్దతు." },
        { en: "<strong>Deep Chronic Disease Management:</strong> Targets chronic asthma, migraines, hypertension, arthritis, and allergic rhinitis.", tl: "<strong>దీర్ఘకాలిక వ్యాధుల సంరక్షణ:</strong> ఆస్తమా, మైగ్రేన్, అధిక రక్తపోటు, కీళ్ల నొప్పులు మరియు అలెర్జీ రైనైటిస్ నివారణకు సమర్థవంతమైనది." },
        { en: "<strong>Gentle & Non-Addictive:</strong> Completely non-habit forming, gentle remedies suitable for long-term daily health.", tl: "<strong>సున్నితమైన & సురక్షితమైనది:</strong> ఎటువంటి అలవాటు పడే ప్రమాదం లేని, దీర్ఘకాలిక వినియోగానికి అనువైన సహజ మందులు." },
        { en: "<strong>Mind-Body Harmonization:</strong> Balances anxiety, depression, insomnia, and psychosomatic ailments naturally.", tl: "<strong>మనస్సు-శరీర సమతుల్యత:</strong> ఆందోళన, నిరాశ, నిద్రలేమి మరియు మానసిక-శారీరక సమస్యలను సహజంగా నియంత్రిస్తుంది." }
      ],
      ctaBadge: { en: "Gentle Constitutional Healing", tl: "సహజ శరీర స్వభావ చికిత్స" },
      ctaTitle: { en: "Discover Holistic Healing with German Homeopathy", tl: "జర్మన్ హోమియోపతితో సంపూర్ణ స్వస్థతను పొందండి" },
      ctaDesc: { en: "Consult Dr. T. Raju, MD (AM) for individualized constitutional remedies tailored to your holistic health profile.", tl: "మీ ఆరోగ్య స్థితికి సరిపోయే వ్యక్తిగత హోమియోపతి సంప్రదింపుల కోసం డా. టి. రాజు గారిని సంప్రదించండి." },
      ctaBtnPrimary: { en: "Book An Appointment", tl: "అపాయింట్‌మెంట్ బుక్ చేయండి" },
      ctaBtnSecondary: { en: "📞 Call Direct", tl: "📞 నేరుగా కాల్ చేయండి" }
    },

    "siddha-medicine.html": {
      bnrTitle: { en: "Classical Siddha & Kaya Kalpa Therapy", tl: "సిద్ధ వైద్యం & కాయకల్ప పునరుజ్జీవనం" },
      bnrSub: { en: "Restoring vitality, cellular strength, and natural longevity through South India\'s ancient Siddha medical lineage and purified mineral-herbal care.", tl: "శతాబ్దాల నాటి ప్రాచీన తమిళ సిద్ధ వైద్య విధానాలతో కణజాల పునరుజ్జీవనం మరియు అంతర్గత అవయవాల సహజ బలాన్ని పునరుద్ధరిస్తాము." },
      head: { en: "Classical Siddha Medicine & Kaya Kalpa", tl: "సిద్ధ వైద్యం & కాయకల్ప పునరుజ్జీవనం" },
      content: {
        en: '<p>Originating in ancient South India through the revered lineage of the 18 Siddhars, Siddha medicine is one of humanity\'s oldest and most profound traditional healing systems. At Raju AYUSH Hospital, our Siddha Department blends classical alchemy, herbal science, and Kaya Kalpa rejuvenation to restore physical vitality and spiritual harmony.</p><h3>The Foundations of Siddha Healing:</h3><ul><li><strong>Mukkuttram Theory:</strong> Regulating the three fundamental humors — Vali (Vatham/Air), Azhal (Pitham/Fire), and Iyyam (Kapham/Water) to maintain vital equilibrium.</li><li><strong>Purified Mineral & Herbal Formulations:</strong> Masterfully processed natural herbs, roots, calcified minerals (Bhasmas/Parpams), and therapeutic oils (Thailams) that target cellular-level degeneration.</li><li><strong>Kaya Kalpa Rejuvenation:</strong> Ancient longevity protocols designed to arrest cellular ageing, boost immunity, and renew organ function.</li><li><strong>Varmam & Pulse Evaluation:</strong> Identifying subtle vital energy blockages (Varmam nodes) and diagnosing diseases through specialized Siddha pulse reading.</li></ul><h3>Conditions Successfully Treated:</h3><p>Chronic liver disorders, fatty liver, jaundice, skin diseases (psoriasis, leucoderma, chronic eczema), sinusitis, rheumatoid arthritis, reproductive disorders, respiratory allergies, and general debility.</p>',
        tl: '<p>18 మంది సిద్ధుల పరంపర నుండి ఉద్భవించిన సిద్ధ వైద్యం మానవాళి అత్యంత ప్రాచీన, విశిష్ట వైద్య విధానాలలో ఒకటి. రాజు ఆయుష్ హాస్పిటల్‌లో మేము ప్రామాణిక మూలికా విజ్ఞానం, కాయకల్ప పునరుజ్జీవనంతో శరీర జీవశక్తిని పునరుద్ధరిస్తాము.</p><h3>సిద్ధ వైద్య ముఖ్య విభాగాలు:</h3><ul><li><strong>ముక్కుట్రం సమతుల్యత:</strong> వాలి (వాతం), అళల్ (పిత్తం), మరియు ఐయం (కఫం) త్రిదోషాలను నియంత్రించడం.</li><li><strong>శుద్ధి చేసిన మూలికా-ఖనిజ చికిత్స:</strong> కణజాల స్థాయి సమస్యలను పరిష్కరించే ప్రాచీన సిద్ధ ఔషధాలు.</li><li><strong>కాయకల్ప పునరుజ్జీవనం:</strong> కణాల క్షీణతను నివారించి అవయవాల బలాన్ని పెంచే ప్రాచీన విధానాలు.</li><li><strong>వర్మం & నాడీ విశ్లేషణ:</strong> శరీర అంతర్గత జీవశక్తిని గుర్తించే ప్రత్యేక పరీక్షలు.</li></ul><h3>చికిత్స అందించే ప్రధాన సమస్యలు:</h3><p>కాలేయ సమస్యలు, ఫ్యాటీ లివర్, చర్మ వ్యాధులు (సోరియాసిస్, ఎగ్జిమా), కీళ్ల వాతం, శ్వాసకోశ అలెర్జీలు మరియు సాధారణ బలహీనత.</p>'
      },
      subtitle: { en: "Siddha Lineage Strengths", tl: "సిద్ధ వైద్య ముఖ్య విభాగాలు" },
      mainTitle: { en: "The Science of Kaya Kalpa & Minerals", tl: "కాయకల్ప & ఖనిజ వైద్య విజ్ఞానం" },
      cards: [
        {
          title: { en: "Mukkuttram Balancing", tl: "ముక్కుట్రం సమతుల్యత" },
          desc: { en: "Harmonizing Vali (Wind), Azhal (Fire), and Iyyam (Water) to restore vital bodily equilibrium.", tl: "వాలి (వాతం), అళల్ (పిత్తం) మరియు ఐయం (కఫం) త్రిదోషాలను సమతుల్యం చేసి శరీర జీవక్రియలను నియంత్రిస్తుంది." }
        },
        {
          title: { en: "Purified Mineral Bhasmas", tl: "శుద్ధి చేసిన భస్మాలు & మూలికలు" },
          desc: { en: "Detoxified, nano-potentized mineral & botanical compounds reaching deep systemic pathology.", tl: "శరీరంలోని అత్యంత లోతైన కణజాల సమస్యలను సరిదిద్దే శాస్త్రీయ శుద్ధి ప్రక్రియల ద్వారా తయారు చేసిన మందులు." }
        },
        {
          title: { en: "Kaya Kalpa Rejuvenation", tl: "కాయకల్ప పునరుజ్జీవనం" },
          desc: { en: "Ancient anti-aging and cell-renewal therapies designed to strengthen internal organ longevity.", tl: "వృద్ధాప్య లక్షణాలను నివారించి, అంతర్గత అవయవాల ఆయుష్షును పెంచే ప్రాచీన కణ పునరుద్ధరణ విధానం." }
        }
      ],
      benefitsTitle: { en: "Key Health Benefits", tl: "ముఖ్య ఆరోగ్య ప్రయోజనాలు" },
      benefitsList: [
        { en: "<strong>Superior Liver Regeneration:</strong> Clinically proven botanicals reversing fatty liver, hepatitis & sluggish bile flow.", tl: "<strong>కాలేయ కణాల పునరుజ్జీవనం:</strong> ఫ్యాటీ లివర్, హెపటైటిస్ మరియు కాలేయ బలహీనతకు సమర్థవంతమైన మూలికా సంరక్షణ." },
        { en: "<strong>Dermatological Excellence:</strong> Clears chronic skin conditions including psoriasis, vitiligo, and fungal eczema.", tl: "<strong>చర్మ వ్యాధుల శాశ్వత నివారణ:</strong> సోరియాసిస్, బొల్లి, దురద మరియు మొండి చర్మ వ్యాధులను మూలాల నుండి శుద్ధి చేస్తుంది." },
        { en: "<strong>Restores Cellular Energy:</strong> Kaya Kalpa protocols revitalizing chronic fatigue, weak immunity, and convalescence.", tl: "<strong>కణజాల శక్తి పునరుద్ధరణ:</strong> దీర్ఘకాలిక అలసట, బలహీనమైన రోగనిరోధక శక్తిని కాయకల్ప చికిత్స ద్వారా ఉత్తేజపరుస్తుంది." },
        { en: "<strong>Potent Anti-Inflammatory:</strong> Powerful Siddha formulations alleviating joint degeneration, sciatica, and arthritis.", tl: "<strong>శక్తివంతమైన వాపు నిరోధకత:</strong> కీళ్ల అరుగుదల, సయాటికా మరియు ఆర్థరైటిస్ నొప్పులను సురక్షితంగా తగ్గిస్తుంది." }
      ],
      ctaBadge: { en: "Ancient Tamil Healing Tradition", tl: "ప్రాచీన తమిళ సిద్ధ సంప్రదాయం" },
      ctaTitle: { en: "Experience Authentic Siddha Healing & Kaya Kalpa", tl: "ప్రామాణిక సిద్ధ వైద్యం & కాయకల్ప సంరక్షణను పొందండి" },
      ctaDesc: { en: "Consult with Dr. T. Raju, MD (AM) for specialized Siddha therapy and multi-system clinical care at Raju AYUSH Hospital.", tl: "రాజు ఆయుష్ హాస్పిటల్‌లో ప్రత్యేక సిద్ధ వైద్యం మరియు సమగ్ర సంరక్షణ కోసం డా. టి. రాజు గారిని సంప్రదించండి." },
      ctaBtnPrimary: { en: "Book An Appointment", tl: "అపాయింట్‌మెంట్ బుక్ చేయండి" },
      ctaBtnSecondary: { en: "📞 Call Direct", tl: "📞 నేరుగా కాల్ చేయండి" }
    },

    "naturopathy.html": {
      bnrTitle: { en: "Drugless Naturopathy & Lifestyle Wellness", tl: "నేచురోపతి & సహజ వెల్నెస్" },
      bnrSub: { en: "Nurturing your body\'s innate power to heal itself through therapeutic nutrition, natural detox protocols, hydro-care, and nature\'s five elements.", tl: "పోషకాహారం, సహజ డిటాక్స్ థెరపీ, యోగా మరియు ప్రకృతి పంచభూతాల ద్వారా మీ శరీరం స్వయంగా కోలుకునేలా తోడ్పడతాము." },
      head: { en: "Drugless Naturopathy & Lifestyle Medicine", tl: "నేచురోపతి సహజ సంరక్షణ" },
      content: {
        en: '<p>Naturopathy is a holistic, drugless system of medicine based on the profound principle that the human body has an inherent self-healing mechanism (<em>Vis Medicatrix Naturae</em>). At Raju AYUSH Hospital, our Naturopathy Department utilizes the healing powers of nature\'s five great elements (Pancha Mahabhutas — Earth, Water, Fire, Air, and Ether) to remove accumulated toxins and restore optimal vitality.</p><h3>Core Principles of Naturopathic Care:</h3><ul><li><strong>The Healing Power of Nature:</strong> Facilitating the body\'s natural recuperative abilities without relying on toxic synthetic pharmaceuticals.</li><li><strong>Toxemia Eradication:</strong> Eliminating metabolic waste, morbid matter, and systemic toxins that form the root cause of all physical ailments.</li><li><strong>Therapeutic Nutrition & Fasting:</strong> Prescribing tailored, raw-food diets, alkalizing green juices, and supervised intermittent cleansing routines.</li><li><strong>Hydrotherapy & Mud Therapy:</strong> Utilizing temperature-regulated water treatments, cold/warm compresses, spinal baths, and mineral mud packs to stimulate lymph drainage and blood circulation.</li><li><strong>Yoga & Pranayama Integration:</strong> Combining guided yogic postures and breath regulation to alleviate mental stress and balance autonomic nervous functions.</li></ul><h3>Common Conditions Treated:</h3><p>Obesity, type-2 diabetes, hypertension, chronic constipation, irritable bowel syndrome, kidney detox support, spondylitis, chronic fatigue syndrome, sleep apnea, and stress-related disorders.</p>',
        tl: '<p>నేచురోపతి అనేది ఔషధ రహిత, ప్రకృతి ఆధారిత వైద్య విధానం. మానవ శరీరానికి స్వయంగా నయం చేసుకునే సహజ శక్తి ఉంటుందనే సిద్ధాంతంపై ఇది ఆధారపడి ఉంటుంది. రాజు ఆయుష్ హాస్పిటల్‌లో మేము పంచభూతాల (భూమి, నీరు, అగ్ని, వాయువు, ఆకాశం) శక్తితో విష వ్యర్థాలను తొలగించి జీవశక్తిని పునరుద్ధరిస్తాము.</p><h3>నేచురోపతి ముఖ్య విభాగాలు:</h3><ul><li><strong>ప్రకృతి సహజ వైద్యం:</strong> కృత్రిమ రసాయనాలు లేకుండా శరీరం స్వయంగా కోలుకునేలా చేయడం.</li><li><strong>శరీర డిటాక్స్ ప్రక్రియ:</strong> వ్యాధులకు కారణమయ్యే వ్యర్థాలను సహజ పద్ధతుల ద్వారా తొలగించడం.</li><li><strong>పోషకాహార చికిత్స & ఉపవాసం:</strong> సహజ ఆహార ప్రణాళికలు మరియు జ్యూస్ థెరపీ.</li><li><strong>హైడ్రోథెరపీ & మట్టి చికిత్స:</strong> రక్త ప్రసరణను మెరుగుపరిచే జల మరియు మృత్తికా చికిత్సలు.</li><li><strong>యోగా & ప్రాణాయామం:</strong> మానసిక ఒత్తిడిని తగ్గించి నరాల వ్యవస్థను ఉత్తేజపరచడం.</li></ul><h3>చికిత్సకు అనుకూలమైన పరిస్థితులు:</h3><p>ఊబకాయం, మధుమేహం, అధిక రక్తపోటు, మలబద్ధకం, కీళ్ల నొప్పులు, నిద్రలేమి మరియు మానసిక ఒత్తిడి.</p>'
      },
      subtitle: { en: "Naturopathic Modalities", tl: "నేచురోపతి ముఖ్య విభాగాలు" },
      mainTitle: { en: "Pancha Mahabhuta Detox Protocols", tl: "పంచభూత డిటాక్స్ & సంరక్షణ" },
      cards: [
        {
          title: { en: "Drugless Detoxification", tl: "ఔషధ రహిత డిటాక్స్" },
          desc: { en: "Natural elimination of metabolic toxins through organic cleansing, hydration, and diet.", tl: "ఎటువంటి రసాయన మందులు లేకుండా సహజ పద్ధతులు, నీటి చికిత్స మరియు ఆహార నియమాల ద్వారా శరీర వ్యర్థాల తొలగింపు." }
        },
        {
          title: { en: "Therapeutic Hydrotherapy", tl: "హైడ్రోథెరపీ & మట్టి చికిత్స" },
          desc: { en: "Temperature-regulated water and mineral-rich earth therapies restoring blood & lymph circulation.", tl: "రక్త ప్రసరణను మరియు లింఫ్ డ్రైనేజీని మెరుగుపరిచే సమతుల్య ఉష్ణోగ్రత నీటి చికిత్సలు మరియు సహజ మృత్తికా ప్యాక్‌లు." }
        },
        {
          title: { en: "Holistic Lifestyle & Yoga", tl: "జీవనశైలి & యోగా థెరపీ" },
          desc: { en: "Mind-body rebalancing with guided breathwork (Pranayama), restorative asanas, and stress relief.", tl: "ప్రాణాయామం, సులభ యోగాసనాలు మరియు ఒత్తిడి నివారణ పద్ధతుల ద్వారా మనస్సు-శరీర సమన్వయం." }
        }
      ],
      benefitsTitle: { en: "Key Health Benefits", tl: "ముఖ్య ఆరోగ్య ప్రయోజనాలు" },
      benefitsList: [
        { en: "<strong>Natural Weight & Diabetes Control:</strong> Corrects metabolic resistance through clinical raw nutrition and guided fasting.", tl: "<strong>సహజ బరువు & షుగర్ నియంత్రణ:</strong> పోషకాహార నియమాలు మరియు పర్యవేక్షిత ఉపవాసం ద్వారా జీవక్రియ లోపాలను సరిదిద్దుతుంది." },
        { en: "<strong>Deep Gastrointestinal Cleansing:</strong> Cures chronic constipation, acid reflux, colitis, and sluggish digestion safely.", tl: "<strong>జీర్ణవ్యవస్థ సంపూర్ణ శుద్ధి:</strong> దీర్ఘకాలిక మలబద్ధకం, గ్యాస్ మరియు అసిడిటీ సమస్యలను సహజంగా నివారిస్తుంది." },
        { en: "<strong>Autonomic Nervous Relaxation:</strong> Restores deep sleep, lowers chronic cortisol, and alleviates tension headaches.", tl: "<strong>నాడీ వ్యవస్థకు సంపూర్ణ విశ్రాంతి:</strong> ఒత్తిడిని తగ్గించి, నాడీ వ్యవస్థను శాంతపరిచి ప్రశాంతమైన సహజ నిద్రను అందిస్తుంది." },
        { en: "<strong>Strengthens Vital Resistance:</strong> Enhances cellular oxygenation, lymphatic drainage, and daily energy levels.", tl: "<strong>జీవశక్తి & రోగనిరోధకత పెంపు:</strong> కణాలకు ఆక్సిజన్ సరఫరాను మరియు శరీర సహజ రక్షణ వ్యవస్థను బలోపేతం చేస్తుంది." }
      ],
      ctaBadge: { en: "Nature-Powered Vitality", tl: "ప్రకృతి ఆధారిత సంరక్షణ" },
      ctaTitle: { en: "Reclaim Your Health Through Drugless Healing", tl: "ఔషధ రహిత ప్రకృతి వైద్యంతో ఆరోగ్యాన్ని పునరుద్ధరించుకోండి" },
      ctaDesc: { en: "Experience revitalizing Naturopathy and lifestyle medicine consultations with Dr. T. Raju at Raju AYUSH Hospital.", tl: "రాజు ఆయుష్ హాస్పిటల్‌లో డా. టి. రాజు గారి పర్యవేక్షణలో నేచురోపతి మరియు జీవనశైలి సంప్రదింపులను పొందండి." },
      ctaBtnPrimary: { en: "Book An Appointment", tl: "అపాయింట్‌మెంట్ బుక్ చేయండి" },
      ctaBtnSecondary: { en: "📞 Call Direct", tl: "📞 నేరుగా కాల్ చేయండి" }
    },

    "herbal-medicine.html": {
      bnrTitle: { en: "Evidence-Backed Global Herbal Medicine", tl: "ప్రపంచ మూలికా వైద్యం & సహజ సంరక్షణ" },
      bnrSub: { en: "Safe, high-potency botanical extracts combining time-tested herbal wisdom with international quality standards for lasting vitality and immunity.", tl: "అంతర్జాతీయ నాణ్యతా ప్రమాణాలతో కూడిన స్వచ్ఛమైన వనమూలికా సారాలతో మీ దీర్ఘకాలిక ఆరోగ్యం మరియు రోగనిరోధక శక్తిని కాపాడుతాము." },
      head: { en: "Evidence-Backed Global Herbal Medicine", tl: "ప్రపంచ మూలికా వైద్యం & వనమూలికా చికిత్స" },
      content: {
        en: '<p>Herbal Medicine (Phytotherapy) harnesses the biochemical complexity of medicinal plants to promote cellular healing, enhance organ efficiency, and eradicate chronic ailments. At Raju AYUSH Hospital, our Global Herbal Department incorporates validated international botanical pharmacopoeias (German Phytotherapy, Swiss herbal extracts, and Classical Indian Ethnobotany) to offer targeted clinical therapies with impeccable safety.</p><h3>Why Choose Global Herbal Medicine at Raju AYUSH?</h3><ul><li><strong>Standardized High-Potency Extracts:</strong> Utilizing active botanical phytochemicals with verified therapeutic concentration for predictable, rapid recovery.</li><li><strong>Synergistic Multi-Herb Formulas:</strong> Combining adaptogens, hepatoprotectors, cardiotonics, and neuro-nutrients to address multifaceted systemic conditions simultaneously.</li><li><strong>Scientifically Screened & Heavy-Metal Free:</strong> 100% pure organic botanicals rigorously tested for zero microbial contamination, pesticides, or toxic synthetic adulterants.</li><li><strong>Integrative Synergy:</strong> Administered alongside Ayurveda, Homeopathy, Siddha, and Naturopathy to amplify cellular absorption and accelerate cure.</li></ul><h3>Major Therapeutic Applications:</h3><p>Immune modulation, chronic respiratory allergies, chronic arthritis, liver detoxification, kidney support, hormonal imbalances (PCOS, thyroid, menopause), chronic skin eczema, and cardiovascular micro-circulation.</p>',
        tl: '<p>హెర్బల్ మెడిసిన్ (ఫైటోథెరపీ) కణజాల ఆరోగ్యాన్ని మెరుగుపరచడానికి మరియు దీర్ఘకాలిక వ్యాధులను నివారించడానికి సహజ వనమూలికల శక్తిని ఉపయోగిస్తుంది. రాజు ఆయుష్ హాస్పిటల్‌లో మేము అంతర్జాతీయ నాణ్యతా ప్రమాణాలు కలిగిన జర్మన్, స్విస్ మరియు ప్రాచీన భారతీయ మూలికా సారాలతో సురక్షితమైన చికిత్సను అందిస్తాము.</p><h3>రాజు ఆయుష్‌లో మూలికా వైద్య ప్రత్యేకతలు:</h3><ul><li><strong>ప్రామాణిక మూలికా సారాలు:</strong> వేగవంతమైన రికవరీ కోసం స్వచ్ఛమైన క్రియాశీల మూలికా విజ్ఞానం.</li><li><strong>సమగ్ర బహుళ-మూలికా ఫార్ములాలు:</strong> అవయవాల సమన్వయానికి తోడ్పడే అడాప్టోజెన్లు మరియు పోషకాలు.</li><li><strong>భారీ లోహాలు లేని స్వచ్ఛత:</strong> పురుగుమందులు మరియు రసాయనాలు లేని 100% సహజ మూలికలు.</li><li><strong>ఆయుష్ విధానాల సమన్వయం:</strong> ఆయుర్వేదం, హోమియోపతిలతో కలిపి వేగవంతమైన ఫలితాలు.</li></ul><h3>చికిత్స అందించే ప్రధాన రంగాలు:</h3><p>రోగనిరోధక శక్తి పెంపు, శ్వాసకోశ అలెర్జీలు, కీళ్ల నొప్పులు, లివర్ డిటాక్స్, హార్మోన్ల సమతుల్యత (PCOS, థైరాయిడ్) మరియు చర్మ సమస్యలు.</p>'
      },
      subtitle: { en: "Botanical Strengths", tl: "మూలికా వైద్య ముఖ్య విభాగాలు" },
      mainTitle: { en: "Standardized Phytotherapy Protocols", tl: "ప్రామాణిక ఫైటోథెరపీ & మూలికా సంరక్షణ" },
      cards: [
        {
          title: { en: "Standardized Botanical Extracts", tl: "ప్రామాణిక మూలికా సారాలు" },
          desc: { en: "High-concentration phytocompounds delivering maximum therapeutic bioavailability.", tl: "కణాలకు వేగంగా చేరి త్వరిత స్వస్థతను చేకూర్చే స్వచ్ఛమైన, అధిక సామర్థ్యం కలిగిన వనమూలికా సారాలు." }
        },
        {
          title: { en: "Multi-Herb Synergy Formulations", tl: "బహుళ-మూలికా సమన్వయం" },
          desc: { en: "Scientifically matched botanicals creating powerful multi-system healing without side effects.", tl: "ఒకదానికొకటి తోడ్పడుతూ శరీరంలోని పలు అవయవ వ్యవస్థలను ఏకకాలంలో బాగుచేసే సమగ్ర ఫార్ములేషన్లు." }
        },
        {
          title: { en: "100% Pure & Toxin-Free", tl: "100% స్వచ్ఛమైన & సురక్షితమైనవి" },
          desc: { en: "Rigorous quality certifications ensuring zero pesticides, steroids, or heavy metals.", tl: "ఎటువంటి రసాయనాలు, స్టెరాయిడ్లు లేదా హానికర లోహాలు లేని అంతర్జాతీయ నాణ్యతా ప్రమాణాలు." }
        }
      ],
      benefitsTitle: { en: "Key Health Benefits", tl: "ముఖ్య ఆరోగ్య ప్రయోజనాలు" },
      benefitsList: [
        { en: "<strong>Concentrated Phytotherapy:</strong> Delivers high-potency flavonoids, polyphenols & adaptogens directly to cells.", tl: "<strong>సాంద్రీకృత ఫైటోథెరపీ:</strong> అధిక సామర్థ్యం కలిగిన ఫ్లేవనాయిడ్లు, పాలీఫెనాల్స్ మరియు అడాప్టోజెన్లను నేరుగా కణాలకు అందిస్తుంది." },
        { en: "<strong>Natural Anti-Inflammatory Action:</strong> Safely reduces cellular swelling without gastrointestinal or kidney stress.", tl: "<strong>సహజ వాపు నిరోధక శక్తి:</strong> కడుపు లేదా కిడ్నీలపై భారం పడకుండా కణజాల వాపును సురక్షితంగా తగ్గిస్తుంది." },
        { en: "<strong>Hormonal & Female Wellness:</strong> Specialized botanicals normalizing menstrual cycles, PCOD, and menopausal distress.", tl: "<strong>మహిళల హార్మోన్ల సమతుల్యత:</strong> రుతుక్రమ సమస్యలు, PCOD మరియు మెనోపాజ్ అసౌకర్యాన్ని నియంత్రించే ప్రత్యేక మూలికలు." },
        { en: "<strong>Accelerated Tissue Recovery:</strong> Supports rapid post-surgical repair, wound healing, and viral convalescence.", tl: "<strong>త్వరిత కణజాల మరమ్మత్తు:</strong> శస్త్రచికిత్స తర్వాత వేగంగా కోలుకోవడానికి, గాయాలు మానడానికి మరియు రక్తాన్ని శుద్ధి చేయడానికి తోడ్పడుతుంది." }
      ],
      ctaBadge: { en: "World-Class Botanical Care", tl: "అంతర్జాతీయ బొటానికల్ కేర్" },
      ctaTitle: { en: "Experience the Power of Pure Botanical Extracts", tl: "స్వచ్ఛమైన వనమూలికా సారాల అద్భుత శక్తిని అనుభవించండి" },
      ctaDesc: { en: "Consult with Dr. T. Raju, MD (AM) to receive globally researched herbal formulations tailored to your medical condition.", tl: "మీ వ్యాధి పరిస్థితికి సరిపోయే పరిశోధనాత్మక మూలికా ఫార్ములేషన్లను పొందడానికి మా నిపుణులను సంప్రదించండి." },
      ctaBtnPrimary: { en: "Book An Appointment", tl: "అపాయింట్‌మెంట్ బుక్ చేయండి" },
      ctaBtnSecondary: { en: "📞 Call Direct", tl: "📞 నేరుగా కాల్ చేయండి" }
    }
  };

  function applyTranslation(lang) {
    var pageName = getPageName();
    var config = translations[pageName];
    if (!config) return;

    var currentLang = (lang === "tl") ? "tl" : "en";

    // 0. Update Hero Banner Title & Subtitle & Headings
    var bnrTitleEl = document.querySelector('#PageBanner .bnrHead, .bnrHead');
    if (bnrTitleEl && config.bnrTitle && config.bnrTitle[currentLang]) {
      bnrTitleEl.textContent = config.bnrTitle[currentLang];
    }
    var bnrSubEl = document.querySelector('#PageBanner .SubT, .SubT');
    if (bnrSubEl && config.bnrSub && config.bnrSub[currentLang]) {
      bnrSubEl.textContent = config.bnrSub[currentLang];
    }
    var headEl = document.querySelector('#SpecialitySec .cMNHead h2, .cMNHead h2');
    if (headEl && config.head && config.head[currentLang]) {
      headEl.textContent = config.head[currentLang];
    }

    // 1. Update specialty text content
    var target = document.querySelector('.specialty-text-content');
    if (target && config.content && config.content[currentLang]) {
      target.innerHTML = config.content[currentLang];
    }

    // 2. Update subtitle & main title
    var subEl = document.querySelector('.ra-section-subtitle');
    if (subEl && config.subtitle) {
      subEl.textContent = config.subtitle[currentLang];
    }
    var titleEl = document.querySelector('.ra-section-main-title');
    if (titleEl && config.mainTitle) {
      titleEl.textContent = config.mainTitle[currentLang];
    }

    // 3. Update 3 Notched Cards
    var cardEls = document.querySelectorAll('.ra-notched-card');
    if (cardEls && config.cards) {
      cardEls.forEach(function (card, index) {
        var cardData = config.cards[index];
        if (!cardData) return;
        var cardTitle = card.querySelector('.ra-card-title');
        var cardDesc = card.querySelector('.ra-card-desc');
        if (cardTitle && cardData.title) cardTitle.textContent = cardData.title[currentLang];
        if (cardDesc && cardData.desc) cardDesc.textContent = cardData.desc[currentLang];
      });
    }

    // 4. Update Benefits Section
    var benTitle = document.querySelector('.ra-benefits-content h3');
    if (benTitle && config.benefitsTitle) {
      benTitle.textContent = config.benefitsTitle[currentLang];
    }
    var benItems = document.querySelectorAll('.ra-benefits-item');
    if (benItems && config.benefitsList) {
      benItems.forEach(function (item, index) {
        var itemData = config.benefitsList[index];
        if (!itemData) return;
        var textSpan = item.querySelector('span:last-child');
        if (textSpan && itemData[currentLang]) {
          textSpan.innerHTML = itemData[currentLang];
        }
      });
    }

    // 5. Update CTA Banner
    var ctaBadge = document.querySelector('.ra-cta-badge');
    if (ctaBadge && config.ctaBadge) {
      ctaBadge.textContent = config.ctaBadge[currentLang];
    }
    var ctaTitle = document.querySelector('.ra-cta-title');
    if (ctaTitle && config.ctaTitle) {
      ctaTitle.textContent = config.ctaTitle[currentLang];
    }
    var ctaDesc = document.querySelector('.ra-cta-desc');
    if (ctaDesc && config.ctaDesc) {
      ctaDesc.textContent = config.ctaDesc[currentLang];
    }
    var ctaBtnPrimary = document.querySelector('.ra-cta-btn-primary span:first-child');
    if (ctaBtnPrimary && config.ctaBtnPrimary) {
      ctaBtnPrimary.textContent = config.ctaBtnPrimary[currentLang];
    }
    var ctaBtnSecondary = document.querySelector('.ra-cta-btn-secondary span');
    if (ctaBtnSecondary && config.ctaBtnSecondary) {
      ctaBtnSecondary.textContent = config.ctaBtnSecondary[currentLang];
    }
  }

  window.addEventListener('ra-language-changed', function (event) {
    applyTranslation(event.detail.lang);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyTranslation(localStorage.getItem('ra-lang') || 'en');
    });
  } else {
    applyTranslation(localStorage.getItem('ra-lang') || 'en');
  }
})();
