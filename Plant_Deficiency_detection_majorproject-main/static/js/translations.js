// =====================================================
// AgriVision AI - Multi-Language Translation Data
// Languages: English, Hindi, Telugu, Tamil, Kannada,
//            Malayalam, Marathi, Bengali, Gujarati
// =====================================

const TRANSLATIONS = {
    en: { lang_label:"Language:", subtitle:"Upload a leaf image for instant diagnosis.", drag_title:"Drag & Drop your image here", drag_or:"or", browse:"Browse Files", analyze_btn:"Analyze Health", report_title:" Diagnostic Report", lbl_plant:"Plant Name", lbl_condition:"Condition", lbl_confidence:"Confidence", lbl_rec:"Recommendation", download_btn:"Download (English)", print_btn:"Print / Save as PDF", selected_file:"Selected File: " },
    hi: { lang_label:"भाषा:", subtitle:"त्वरित निदान के लिए छवि अपलोड करें।", drag_title:"छवि यहाँ छोड़ें", drag_or:"या", browse:"फ़ाइलें ढूंढें", analyze_btn:"स्वास्थ्य विश्लेषण", report_title:" नैदानिक रिपोर्ट", lbl_plant:"पौधे का नाम", lbl_condition:"स्थिति", lbl_confidence:"विश्वास", lbl_rec:"सिफ़ारिश", download_btn:"डाउनलोड (English)", print_btn:"प्रिंट / Save as PDF", selected_file:"चयनित फ़ाइल: " },
    te: { lang_label:"భాష:", subtitle:"తక్షణ నిర్ధారణ కోసం చిత్రాన్ని అప్‌లోడ్ చేయండి.", drag_title:"చిత్రాన్ని ఇక్కడ వదలండి", drag_or:"లేదా", browse:"బ్రౌజ్ చేయండి", analyze_btn:"విశ్లేషించండి", report_title:" నివేదిక", lbl_plant:"మొక్క పేరు", lbl_condition:"పరిస్థితి", lbl_confidence:"విశ్వాసం", lbl_rec:"సిఫార్సు", download_btn:"డౌన్‌లోడ్ (తెలుగు)", print_btn:"ప్రింట్ / Save as PDF", selected_file:"ఎంచుకున్న ఫైల్: " },
    ta: { lang_label:"மொழி:", subtitle:"உடனடி கண்டறிதலுக்கு படத்தை பதிவேற்றவும்.", drag_title:"இங்கே இழுத்து விடவும்", drag_or:"அல்லது", browse:"உலாவு", analyze_btn:"பகுப்பாய்வு", report_title:" அறிக்கை", lbl_plant:"தாவரம்", lbl_condition:"நிலை", lbl_confidence:"நம்பிக்கை", lbl_rec:"பரிந்துரை", download_btn:"பதிவிறக்கு (தமிழ்)", print_btn:"அச்சிடு / Save as PDF", selected_file:"கோப்பு: " },
    kn: { lang_label:"ಭಾಷೆ:", subtitle:"ತಕ್ಷಣದ ರೋಗನಿರ್ಣಯಕ್ಕಾಗಿ ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.", drag_title:"ಚಿತ್ರ ಇಲ್ಲಿಗೆ ಎಳೆಯಿರಿ", drag_or:"ಅಥವಾ", browse:"ಫೈಲ್ ಆಯ್ಕೆ ಮಾಡಿ", analyze_btn:"ವಿಶ್ಲೇಷಿಸಿ", report_title:" ವರದಿ", lbl_plant:"ಸಸ್ಯದ ಹೆಸರು", lbl_condition:"ಸ್ಥಿತಿ", lbl_confidence:"ವಿಶ್ವಾಸ", lbl_rec:"ಶಿಫಾರಸು", download_btn:"ಡೌನ್‌ಲೋಡ್ (ಕನ್ನಡ)", print_btn:"ಪ್ರಿಂಟ್ / Save as PDF", selected_file:"ಆಯ್ದ ಫೈಲ್: " },
    ml: { lang_label:"ഭാഷ:", subtitle:"നിർണ്ണയത്തിനായി ചിത്രം അപ്‌ಲೋഡ് ചെയ്യുക.", drag_title:"ഇവിടെ വലിച്ചിടുക", drag_or:"അല്ലെങ്കിൽ", browse:"ഫയലുകൾ", analyze_btn:"വിശകലനം", report_title:" റിപ്പോർട്ട്", lbl_plant:"സസ്യം", lbl_condition:"അവസ്ഥ", lbl_confidence:"ആത്മവിശ്വാസം", lbl_rec:"ശുപാർശ", download_btn:"ഡൗൺലോഡ് (മലയാളം)", print_btn:"പ്രിന്റ് / Save as PDF", selected_file:"ഫയൽ: " },
    mr: { lang_label:"भाषा:", subtitle:"निदानासाठी चित्र अपलोड करा.", drag_title:"चित्र येथे ओढा", drag_or:"किंवा", browse:"ब्राउझ करा", analyze_btn:"विश्लेषण करा", report_title:" अहवाल", lbl_plant:"वनस्पती", lbl_condition:"स्थिती", lbl_confidence:"विश्वास", lbl_rec:"शिफारस", download_btn:"डाउनलोड (मराठी)", print_btn:"प्रिंट / Save as PDF", selected_file:"फाईल: " },
    bn: { lang_label:"ভাষা:", subtitle:"নির্ণয়ের জন্য পাতা আপলোড করুন।", drag_title:"এখানে ছবি আনুন", drag_or:"অথবা", browse:"ব্রাউজ করুন", analyze_btn:"বিশ্লেষণ", report_title:" প্রতিবেদন", lbl_plant:"উদ্ভিদ", lbl_condition:"অবস্থা", lbl_confidence:"আস্থা", lbl_rec:"প্রস্তাবিত", download_btn:"ডাউনলোড (বাংলা)", print_btn:"প্রিন্ট / Save as PDF", selected_file:"ফাইল: " },
    gu: { lang_label:"ભાષા:", subtitle:"નિદાન માટે છબી અપલોડ કરો.", drag_title:"છબી અહીં લાવો", drag_or:"અથવા", browse:"બ્રાઉઝ કરો", analyze_btn:"વિશ્લેષણ", report_title:" અહેવાલ", lbl_plant:"છોડ", lbl_condition:"સ્થિતિ", lbl_confidence:"વિશ્વાસ", lbl_rec:"ભલામણ", download_btn:"ડાઉનલોડ (ગુજરાતી)", print_btn:"પ્રિન્ટ / Save as PDF", selected_file:"ફાઇલ: " }
};

const PLANT_NAMES = {
    ash_gourd:    { en:"Ash Gourd",    hi:"पेठा",       te:"బూడిద గుమ్మడి", ta:"வெண்பூசணி",    kn:"ಬೂದಿ ಕುಂಬಳ",  ml:"കുമ്പളം",    mr:"कोहळा",     bn:"চালকুমড়া",  gu:"ભૂરા કોળું" },
    bitter_gourd: { en:"Bitter Gourd", hi:"करेला",      te:"కాకర కాయ",      ta:"பாகற்காய்",    kn:"ಹಾಗಲಕಾಯಿ",   ml:"പാവൽ",       mr:"कारले",     bn:"করলা",       gu:"કારેલા" },
    bottle_gourd: { en:"Bottle Gourd", hi:"લૌકી",       te:"సొర కాయ",       ta:"சுரைக்காய்",   kn:"ಸ್ಯೋರೆಕಾಯಿ", ml:"ചുരക്ക",     mr:"दुधी भोपळा",bn:"લાઉ",        gu:"દૂધી" },
    cucumber:     { en:"Cucumber",     hi:"खीरा",       te:"దోసకాయ",        ta:"வெள்ளரிக்காய்",kn:"ಸೌತೆಕಾಯಿ",   ml:"വെള്ളരി",   mr:"काकडी",     bn:"શસા",        gu:"કાકડી" },
    eggplant:     { en:"Eggplant",     hi:"बैंगन",      te:"వంకాయ",         ta:"கத்திரிக்காய்",kn:"ಬದನೆಕಾಯಿ",   ml:"വഴുന",     mr:"वांगे",     bn:"বেগুন",      gu:"રીંગણ" },
    ridge_gourd:  { en:"Ridge Gourd",  hi:"તोरઈ",       te:"బీర కాయ",       ta:"பீர்க்கங்காய்",kn:"ಹೀರೇಕಾಯಿ",  ml:"പീച്ചിൽ",   mr:"घोसाळे",    bn:"ঝিঙে",      gu:"તૂરિયા" },
    snake_gourd:  { en:"Snake Gourd",  hi:"चिचिंडा",    te:"పొట్లకాయ",      ta:"புடலங்காய்",   kn:"ಪಡವಲಕಾಯಿ",  ml:"പടവലം",     mr:"पडवळ",      bn:"চিচিঙ্গা",  gu:"પડવળ" },
    tomato:       { en:"Tomato",       hi:"ટमाटर",      te:"టమాటా",         ta:"தக்காளி",      kn:"ಟೊಮ್ಯಾಟೊ",   ml:"തക്കാളി",   mr:"टोमॅटो",    bn:"টમેટો",     gu:"ટામેટા" }
};

const CONDITIONS = {
    K: { en:"Potassium Deficiency", hi:"पोटेशियम की कमी", te:"పొటాషియం లోపం", ta:"பொட்டாசியம் குறைபாடு", kn:"ಪೊಟ್ಯಾಶಿಯಂ ಕೊರತೆ", ml:"പൊട്ടാസ്യം കുറവ്", mr:"पोटॅशियम कमतरता", bn:"পটাশিয়াম ঘাটতি", gu:"પોટેશિયમ ઉણપ" },
    Mg: { en:"Magnesium Deficiency", hi:"मैग्नीशियम की कमी", te:"మెగ్నీషియం లోపం", ta:"மெக்னீசியம் குறைபாடு", kn:"ಮೆಗ್ನೀಶಿಯಂ ಕೊರತೆ", ml:"മഗ്നീഷ്യം കുറവ്", mr:"मॅग्नेशियम कमतरता", bn:"ম্যাগনেসিয়াম ঘাটতি", gu:"મેગ્નેશિયમ ઉણપ" },
    N: { en:"Nitrogen Deficiency", hi:"नाइट्रोजन की कमी", te:"నత్రజని లోపం", ta:"நைட்ரஜன் குறைபாடு", kn:"ಸಾರಜನಕ ಕೊರತೆ", ml:"നൈട്രജൻ കുറവ്", mr:"नायट्रोजन कमतरता", bn:"নাইট্রোজেন ঘাটতি", gu:"નાઇટ્રોજન ઉણપ" },
    PM: { en:"Powdery Mildew", hi:"पाउडरी फफूंदी", te:"పౌడరీ మిల్డ్యూ", ta:"பவுடரி மில்டியூ", kn:"ಪೌಡರಿ ಮಿಲ್ಡ್ಯೂ", ml:"പൗഡറി മിൽഡ്യൂ", mr:"पावडरी बुरशी", bn:"পাউডারি মিলডিউ", gu:"પાઉડરી ફૂગ" },
    DM: { en:"Downy Mildew", hi:"डाउनी फफूंदी", te:"డౌనీ మిల్డ్యూ", ta:"டவுனி மில்டியூ", kn:"ಡೌನಿ ಮಿಲ್ಡ್ಯೂ", ml:"ഡൗണി മിൽഡ്യൂ", mr:"डाउनी बुरशी", bn:"ডাউনি মিলডিউ", gu:"ડાઉની ફૂગ" },
    JAS: { en:"Jassids", hi:"जैसिड", te:"జాసిడ్", ta:"ஜாசிட்", kn:"ಜಾಸಿಡ್", ml:"ജാസിഡ്", mr:"जॅसिड", bn:"জ্যাসিড", gu:"જેસિડ" },
    LS: { en:"Leaf Spot", hi:"पत्ती धब्बा", te:"ఆకు మచ్చ", ta:"இலை புள்ளி", kn:"ಎಲೆ ಚುಕ್ಕೆ", ml:"ഇല പുള്ളി", mr:"पान ठिपका", bn:"পাতার দাগ", gu:"પાંદડા ડાઘ" },
    EB: { en:"Early Blight", hi:"अर्ली ब्लाइट", te:"ముందస్తు తుప్పు", ta:"முதல் கட்ட தேமல்", kn:"ಆರಂಭಿಕ ರೋಗ", ml:"ആദ്യ ബ്ലൈറ്റ്", mr:"अर्ली ब्लाईट", bn:"আর্লি ব্লাইট", gu:"અર્લી બ્લાઇટ" },
    FB: { en:"Fruit Borer", hi:"फल भेदक", te:"పండు తొలుచు పురుగు", ta:"பழம் துளைப்பான்", kn:"ಹಣ್ಣು ಕೊರಕ", ml:"ഫ്രൂട്ട് ബോറർ", mr:"फळ पोखरणारा", bn:"ফল ছিদ্রকারী", gu:"ફળ ભેદક" },
    MIT: { en:"Mites", hi:"माइट्स", te:"మైట్లు", ta:"மைட்டுகள்", kn:"ಮಿಟೆಗಳು", ml:"മൈറ്റുകൾ", mr:"माइट्स", bn:"মাইট", gu:"માઇટ" },
    healthy: { en:"Healthy", hi:"स्वस्थ", te:"ఆరోగ్యకరమైన", ta:"ஆரோக்கியமான", kn:"ಆರೋಗ್ಯಕರ", ml:"ആരോഗ്യകരം", mr:"निरोगी", bn:"সুস্থ", gu:"સ્વસ્થ" }
};

const RECS = {
    K: { en:"Apply Potash fertilizers.", hi:"पोटाश उर्वरक लगाएं।", te:"పొటాష్ ఎరువులు వేయండి.", ta:"பொட்டாஷ் உரங்கள் இடவும்.", kn:"ಪೊಟ್ಯಾಶ್ ಗೊಬ್ಬರ ಹಾಕಿ.", ml:"Potash വളം ഇടുക.", mr:"पोटॅश खत वापरा.", bn:"পটাশ সার দিন।", gu:"પોટેશિયમ ખાતર લગાવો." },
    Mg: { en:"Apply Epsom salt.", hi:"एप्सम सॉल्ट लगाएं।", te:"ఎప్సమ్ సాల్ట్ వేయండి.", ta:"எப்சம் உப்பு இடவும்.", kn:"ಎಪ್ಸಮ್ ಸಾಲ್ಟ್ ಹಾಕಿ.", ml:"Epsom ഉപ്പ് ഇടുക.", mr:"एप्सम सॉल्ट वापरा.", bn:"এপসম লবণ দিন।", gu:"Epsom salt લગાવો." },
    N: { en:"Apply Urea.", hi:"यूरिया लगाएं।", te:"యూరియా వేయండి.", ta:"యూరియా இடவும்.", kn:"ಯೂರಿಯಾ ಹಾಕಿ.", ml:"Urea ഇടുക.", mr:"युरिया वापरा.", bn:"ইউরিয়া দিন।", gu:"યુરિયા લગાવો." },
    PM: { en:"Apply Sulfur fungicides.", hi:"सल्फर फफूंदनाशक लगाएं।", te:"సల్ఫర్ శిలీంధ్రనాశకాలు వేయండి.", ta:"சல்பர் பூஞ்சைக்கொல்லி.", kn:"ಸಲ್ಫರ್ ಶಿಲೀಂಧ್ರನಾಶಕ.", ml:"സൾഫർ ഫംഗസ്നാശിനി.", mr:"सल्फर बुरशीनाशक.", bn:"সালফার ছত্রাকনাশক।", gu:"પાઉડરી દવા લગાવો." },
    DM: { en:"Apply Copper fungicides.", hi:"तांबे आधारित फफूंदनाशक लगाएं।", te:"రాగి శిలీంధ్రనాశకాలు వేయండి.", ta:"தாமிர பூஞ்சைக்கொல்லி.", kn:"ತಾಮ್ರ ಶಿಲೀಂಧ್ರನಾಶಕ.", ml:"കോപ്പർ ഫംഗസ്നാശിനി.", mr:"तांब्याचे बुरशीनाशक.", bn:"তামার ছত্রাকনাশক।", gu:"ડાઉની દવા લગાવો." },
    JAS: { en:"Spray Neem oil.", hi:"नीम तेल छिड़कें।", te:"వేప నూనె పిచికారీ చేయండి.", ta:"வேப்பெண்ணை தெளிக்கவும்.", kn:"ಬೇವಿನ ಎಣ್ಣೆ ಸಿಂಪಡಿಸಿ.", ml:"വേപ്പെണ്ണ തളിക്കുക.", mr:"नीम तेल फवारा.", bn:"নিম তেল দিন।", gu:"નીમ તેલ છાંટો." },
    LS: { en:"Apply Copper fungicide.", hi:"तांबे का फफूंदनाशक लगाएं।", te:"రాగి శిలీంధ్రనాశకం వేయండి.", ta:"தாமிர பூஞ்சைக்கொல்லி.", kn:"ತಾಮ್ರ ಶಿಲೀಂಧ್ರನಾಶಕ.", ml:"കോപ്പർ ഫംഗസ്നാശിനി.", mr:"बुरशीनाशक वापरा.", bn:"ছত্রাকনাশক দিন।", gu:"દવા લગાવો." },
    EB: { en:"Apply Mancozeb.", hi:"मैंकोज़ेब लगाएं।", te:"మాన్కోజెబ్ వేయండి.", ta:"மாங்கோசெப் இடவும்.", kn:"ಮ್ಯಾಂಕೋಜೆಬ್ ಹಾಕಿ.", ml:"മാൻകോസെബ് ഉപയോഗിക്കുക.", mr:"मॅन्कोझेब वापरा.", bn:"ম্যাঙ্কোজেব।", gu:"દવા લગાવો." },
    FB: { en:"Use pheromone traps.", hi:"फेरोमोन ट्रैप का उपयोग करें।", te:"ఫెరోమోన్ ట్రాప్‌లు ఉపయోగించండి.", ta:"பெரோமோன் பொறிகள்.", kn:"ಫೆರೋಮೋನ್ ಟ್ರ್ಯಾಪ್ ಬಳಸಿ.", ml:"ഫെറോമോൺ കെണികൾ ഉപയോഗിക്കുക.", mr:"फेरोमोन ट्रॅप वापरा.", bn:"ফেরোমোন ফাঁদ।", gu:"ફેરોમોન ટ્રેપ વાપરો." },
    MIT: { en:"Apply miticides.", hi:"माइटनाशक लगाएं।", te:"మైటిసైడ్ వేయండి.", ta:"மைட்டிசைட் இடவும்.", kn:"ಮಿಟೆನಾಶಕ ಹಾಕಿ.", ml:"മൈറ്റിസൈഡുകൾ ഉപയോഗിക്കുക.", mr:"कोळीनाशक वापरा.", bn:"মাইটনিধনকারী বিষ দিন।", gu:"માઇટની દવા લગાવો." },
    healthy: { en:"No treatment needed.", hi:"किसी उपचार की आवश्यकता नहीं।", te:"అవసరం లేదు.", ta:"சிகிச்சை தேவையில்லை.", kn:"ಅಗತ್ಯವಿಲ್ಲ.", ml:"ആവശ്യമില്ല.", mr:"निरोगी.", bn:"সুস্থ।", gu:"સ્વસ્થ." }
};

const LANG_BUTTONS = [
    {code:'en', label:'English'}, {code:'hi', label:'हिन्दी'}, {code:'te', label:'తెలుగు'},
    {code:'ta', label:'தமிழ்'}, {code:'kn', label:'ಕನ್ನಡ'}, {code:'ml', label:'മലയാളം'},
    {code:'mr', label:'मराठी'}, {code:'bn', label:'বাংলা'}, {code:'gu', label:'ગુજરાતી'}
];
