(function () {
  "use strict";

  var page = location.pathname.split("/").pop() || "";
  var faqs = {
    "ayurveda-consultation.html": [
      ["When is an Ayurvedic consultation helpful?", "It is helpful for digestive concerns, joint pain, skin concerns, stress-related symptoms, and long-term wellness planning.", "ఆయుర్వేద సంప్రదింపు ఎప్పుడు ఉపయోగకరం?", "జీర్ణ సమస్యలు, కీళ్ల నొప్పులు, చర్మ సమస్యలు, ఒత్తిడి సంబంధిత లక్షణాలు మరియు దీర్ఘకాల ఆరోగ్య ప్రణాళికకు ఇది ఉపయోగకరం."],
      ["What happens during the consultation?", "The doctor reviews your symptoms, lifestyle, pulse and dosha balance before recommending an individual care plan.", "సంప్రదింపులో ఏమి జరుగుతుంది?", "వైద్యులు మీ లక్షణాలు, జీవనశైలి, నాడి మరియు దోష సమతుల్యతను పరిశీలించి వ్యక్తిగత సంరక్షణ ప్రణాళికను సూచిస్తారు."]
    ],
    "homeopathy.html": [
      ["Is Homeopathy suitable for chronic conditions?", "Homeopathic care is individualized and may be considered for ongoing concerns after a detailed consultation with our doctor.", "దీర్ఘకాలిక సమస్యలకు హోమియోపతి అనుకూలమా?", "వివరమైన వైద్య సంప్రదింపు తర్వాత కొనసాగుతున్న సమస్యలకు వ్యక్తిగత హోమియోపతి సంరక్షణను పరిగణించవచ్చు."],
      ["Do I need to bring previous reports?", "Yes. Bring current prescriptions, reports, and a brief symptom history so the consultation can be more accurate.", "పాత వైద్య నివేదికలు తీసుకురావాలా?", "అవును. ప్రస్తుత ప్రిస్క్రిప్షన్లు, నివేదికలు మరియు లక్షణాల సంక్షిప్త చరిత్రను తీసుకురండి."]
    ],
    "herbal-medicine.html": [
      ["Are herbal formulations selected individually?", "Yes. Formulations are selected after considering your symptoms, health history, and current medicines.", "హెర్బల్ ఫార్ములేషన్లు వ్యక్తిగతంగా ఎంచుకుంటారా?", "అవును. మీ లక్షణాలు, ఆరోగ్య చరిత్ర మరియు ప్రస్తుత మందులను పరిశీలించిన తర్వాత ఫార్ములేషన్లు ఎంచుకుంటారు."],
      ["Can herbal care be combined with other AYUSH therapies?", "Our doctor can recommend an integrated plan when it is appropriate for your condition.", "హెర్బల్ సంరక్షణను ఇతర ఆయుష్ చికిత్సలతో కలపవచ్చా?", "మీ పరిస్థితికి అనుకూలమైనప్పుడు మా వైద్యులు సమగ్ర చికిత్స ప్రణాళికను సూచిస్తారు."]
    ],
    "naturopathy.html": [
      ["What does naturopathy focus on?", "Naturopathy focuses on supportive lifestyle care including diet, movement, rest, hydrotherapy, and stress management.", "నేచురోపతి దేనిపై దృష్టి పెడుతుంది?", "నేచురోపతి ఆహారం, కదలిక, విశ్రాంతి, హైడ్రోథెరపీ మరియు ఒత్తిడి నిర్వహణ వంటి జీవనశైలి సంరక్షణపై దృష్టి పెడుతుంది."],
      ["Will I receive a diet plan?", "Diet guidance is provided when it is relevant to your consultation and health goals.", "నాకు ఆహార ప్రణాళిక ఇస్తారా?", "మీ సంప్రదింపు మరియు ఆరోగ్య లక్ష్యాలకు అవసరమైనప్పుడు ఆహార మార్గదర్శకాన్ని అందిస్తారు."]
    ],
    "siddha-medicine.html": [
      ["What is Siddha care used for?", "Siddha care is a traditional system that may support recovery, vitality, joint comfort, and long-term wellness under medical guidance.", "సిద్ధ వైద్యం దేనికి ఉపయోగిస్తారు?", "వైద్యుల మార్గదర్శకంతో కోలుకోవడం, జీవశక్తి, కీళ్ల సౌకర్యం మరియు దీర్ఘకాల ఆరోగ్యానికి సిద్ధ వైద్యం తోడ్పడవచ్చు."],
      ["How is the treatment plan chosen?", "The plan is chosen after evaluating your symptoms, constitution, medical history, and treatment goals.", "చికిత్స ప్రణాళికను ఎలా ఎంచుకుంటారు?", "మీ లక్షణాలు, శరీర స్వభావం, వైద్య చరిత్ర మరియు చికిత్స లక్ష్యాలను పరిశీలించి ప్రణాళికను ఎంచుకుంటారు."]
    ],
    "diseases.html": [
      ["How do I know which treatment is right for my condition?", "Book a consultation so our doctor can review your symptoms and advise the most appropriate AYUSH care plan.", "నా సమస్యకు ఏ చికిత్స సరైనదో ఎలా తెలుసుకోవాలి?", "మీ లక్షణాలను పరిశీలించి తగిన ఆయుష్ సంరక్షణ ప్రణాళికను సూచించడానికి వైద్య సంప్రదింపును బుక్ చేయండి."],
      ["Can I consult for more than one concern?", "Yes. Please share all current concerns and reports during your appointment.", "ఒకటి కంటే ఎక్కువ సమస్యల కోసం సంప్రదించవచ్చా?", "అవును. మీ అపాయింట్‌మెంట్ సమయంలో అన్ని ప్రస్తుత సమస్యలు మరియు నివేదికలను పంచుకోండి."]
    ],
    "contact-us.html": [
      ["How can I book an appointment?", "Call us, send a message through the contact form, or request an appointment from the website.", "అపాయింట్‌మెంట్ ఎలా బుక్ చేయాలి?", "మాకు కాల్ చేయండి, సంప్రదింపు ఫారమ్ ద్వారా సందేశం పంపండి లేదా వెబ్‌సైట్‌లో అపాయింట్‌మెంట్ అభ్యర్థించండి."],
      ["Are home visits available?", "Home visits can be scheduled based on location, patient needs, and doctor availability.", "ఇంటికి వచ్చి సేవలు అందుబాటులో ఉన్నాయా?", "ప్రాంతం, రోగి అవసరాలు మరియు వైద్యుల అందుబాటును బట్టి ఇంటి సందర్శనలను షెడ్యూల్ చేయవచ్చు."]
    ]
  };

  function language() { return localStorage.getItem("ra-lang") === "tl" ? "tl" : "en"; }

  function render(lang) {
    var rows = faqs[page];
    if (!rows) return;
    var old = document.querySelector(".page-faq");
    if (old) old.remove();
    var section = document.createElement("section");
    section.className = "page-faq";
    section.setAttribute("aria-label", lang === "tl" ? "తరచుగా అడిగే ప్రశ్నలు" : "Frequently asked questions");
    var markup = '<div class="page-faq__inner"><h2 class="page-faq__title">' + (lang === "tl" ? "తరచుగా అడిగే ప్రశ్నలు" : "Frequently Asked Questions") + "</h2>";
    rows.forEach(function (row) {
      markup += '<details><summary>' + row[lang === "tl" ? 2 : 0] + '</summary><p class="page-faq__answer">' + row[lang === "tl" ? 3 : 1] + "</p></details>";
    });
    section.innerHTML = markup + "</div>";
    var footer = document.querySelector(".wh-footer-wrapper");
    if (footer && footer.parentNode) footer.parentNode.insertBefore(section, footer);
  }

  function init() { render(language()); }
  window.addEventListener("ra-language-changed", function (event) { render(event.detail.lang); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
