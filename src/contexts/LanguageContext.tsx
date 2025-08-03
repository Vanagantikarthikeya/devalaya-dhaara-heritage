import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'te';
  setLanguage: (lang: 'en' | 'te') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.home': 'Home',
    'header.about': 'About',
    'header.gallery': 'Gallery',
    'header.upload': 'Upload',
    'header.profile': 'Profile',
    'header.login': 'Login',
    'header.language': 'తెలుగు',
    'header.websiteName': 'Devalayala Dhaara',
    'header.tagline': 'Temple Voices Stream',

    // Home Page
    'home.heroTitle': 'A Living Stream of Temple Voices',
    'home.heroSubtitle': 'Preserve your temple\'s story in your voice.',
    'home.contributeNow': 'Contribute Now',
    'home.dayStreak': 'Day Contribution Streak',
    'home.whyThisMatters': 'Why This Matters',
    'home.sacredHeritage': 'Sacred Heritage',
    'home.sacredHeritageDesc': 'Every temple holds centuries of stories, prayers, and traditions that risk being lost forever.',
    'home.livingVoices': 'Living Voices',
    'home.livingVoicesDesc': 'The voices of devotees, priests, and elders carry the soul of our spiritual heritage.',
    'home.futureGenerations': 'Future Generations',
    'home.futureGenerationsDesc': 'Preserve these treasures for our children and their children to experience and cherish.',
    'home.hearTheVoices': 'Hear the Voices',
    'home.audioContributions': 'Audio Contributions',
    'home.videoContributions': 'Video Contributions',
    'home.storiesContributions': 'Stories Contributions',
    'home.beATempleGuardian': 'Be a Temple Guardian',
    'home.guardianDesc': 'Join thousands of devotees who are preserving our sacred heritage, one story at a time.',
    'home.yourStoryScripture': 'Your story is a scripture',
    'home.echoFuture': 'Echo the past. Inspire the future',
    'home.oneVoice': 'One voice. One temple. A thousand memories',
    'home.startContributing': 'Start Contributing Today',

    // Login Page
    'login.title': 'Login to Your Account',
    'login.subtitle': 'Welcome back to Devalayala Dhaara',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.signin': 'Sign In',
    'login.continueGoogle': 'Continue with Google',
    'login.forgotPassword': 'Forgot Password?',
    'login.noAccount': 'Don\'t have an account?',
    'login.signupHere': 'Sign up here',
    'login.createAccount': 'Create New Account',
    'login.fullName': 'Full Name',
    'login.region': 'Region',
    'login.mobile': 'Mobile Number',
    'login.createAccountBtn': 'Create Account',
    'login.haveAccount': 'Already have an account?',
    'login.loginHere': 'Login here',

    // Profile Page
    'profile.title': 'Profile',
    'profile.myContributions': 'My Contributions',
    'profile.totalContributions': 'Total Contributions',
    'profile.audioFiles': 'Audio Files',
    'profile.videoFiles': 'Video Files',
    'profile.textStories': 'Text Stories',
    'profile.badges': 'Badges & Achievements',
    'profile.templeGuardian': 'Temple Guardian',
    'profile.storyPreserver': 'Story Preserver',
    'profile.voiceKeeper': 'Voice Keeper',
    'profile.recentActivity': 'Recent Activity',
    'profile.pleaseLogin': 'Please login to view your profile',

    // About Page
    'about.title': 'Why Devalayala Dhaara?',
    'about.subtitle': 'Preserving the Sacred Heritage of Our Temples',
    'about.mission': 'Our Mission',
    'about.missionDesc': 'To create a living digital archive of temple stories, voices, and traditions from across India, ensuring that the spiritual heritage of our ancestors is preserved for future generations.',
    'about.vision': 'Our Vision',
    'about.visionDesc': 'A world where every temple\'s story is heard, every devotee\'s voice is preserved, and every tradition finds its digital home.',
    'about.howItWorks': 'How It Works',
    'about.step1': 'Share Your Story',
    'about.step1Desc': 'Upload audio, video, or text about your temple experiences',
    'about.step2': 'Connect & Discover',
    'about.step2Desc': 'Explore stories from temples across India',
    'about.step3': 'Preserve Heritage',
    'about.step3Desc': 'Contribute to a living archive of spiritual traditions',
    'about.inspirationalQuote1': 'Your story is a scripture.',
    'about.inspirationalQuote2': 'Echo the past. Inspire the future.',
    'about.inspirationalQuote3': 'One voice. One temple. A thousand memories.',

    // Upload Page
    'upload.title': 'Share Your Temple Story',
    'upload.subtitle': 'Help preserve our sacred heritage',
    'upload.uploadAudio': 'Upload Audio',
    'upload.uploadVideo': 'Upload Video',
    'upload.submitText': 'Submit Text',
    'upload.templeName': 'Temple Name',
    'upload.region': 'Region',
    'upload.language': 'Language',
    'upload.deityCategory': 'Deity Category',
    'upload.description': 'Short Description',
    'upload.descriptionPlaceholder': 'Share the story behind your contribution...',
    'upload.submit': 'Submit Contribution',
    'upload.thankYou': 'Thank you for preserving tradition!',

    // Gallery Page
    'gallery.title': 'Temple Voices Gallery',
    'gallery.subtitle': 'Discover stories from temples across India',
    'gallery.filters': 'Filters',
    'gallery.allRegions': 'All Regions',
    'gallery.allDeities': 'All Deities',
    'gallery.allTypes': 'All Types',
    'gallery.audio': 'Audio',
    'gallery.video': 'Video',
    'gallery.text': 'Text',
    'gallery.allLanguages': 'All Languages',
    'gallery.clearFilters': 'Clear Filters',
  },
  te: {
    // Header
    'header.home': 'ఇల్లు',
    'header.about': 'గురించి',
    'header.gallery': 'గ్యాలరీ',
    'header.upload': 'అప్‌లోడ్',
    'header.profile': 'ప్రొఫైల్',
    'header.login': 'లాగిన్',
    'header.language': 'English',
    'header.websiteName': 'దేవాలయ ధార',
    'header.tagline': 'ఆలయ స్వరాల ప్రవాహం',

    // Home Page
    'home.heroTitle': 'ఆలయ స్వరాల జీవంత ప్రవాహం',
    'home.heroSubtitle': 'మీ ఆలయ కథను మీ గొంతులో భద్రపరచండి.',
    'home.contributeNow': 'ఇప్పుడే సహకరించండి',
    'home.dayStreak': 'రోజుల సహకార పరంపర',
    'home.whyThisMatters': 'ఇది ఎందుకు ముఖ్యం',
    'home.sacredHeritage': 'పవిత్ర వారసత్వం',
    'home.sacredHeritageDesc': 'ప్రతి ఆలయంలో శతాబ్దాల కథలు, ప్రార్థనలు మరియు సంప్రదాయాలు ఉన్నాయి, అవి ఎప్పటికీ కోల్పోయే ప్రమాదం ఉంది.',
    'home.livingVoices': 'జీవంత స్వరాలు',
    'home.livingVoicesDesc': 'భక్తులు, పూజారులు మరియు పెద్దల స్వరాలు మన ఆధ్యాత్మిక వారసత్వం యొక్క ఆత్మను మోస్తాయి.',
    'home.futureGenerations': 'భవిష్యత్ తరాలు',
    'home.futureGenerationsDesc': 'మన పిల్లలు మరియు వారి పిల్లలు అనుభవించడానికి మరియు ఆదరించడానికి ఈ నిధులను భద్రపరచండి.',
    'home.hearTheVoices': 'స్వరాలను వినండి',
    'home.audioContributions': 'ఆడియో సహకారాలు',
    'home.videoContributions': 'వీడియో సహకారాలు',
    'home.storiesContributions': 'కథల సహకారాలు',
    'home.beATempleGuardian': 'ఆలయ రక్షకుడిగా ఉండండి',
    'home.guardianDesc': 'మా పవిత్ర వారసత్వాన్ని, ఒక్కో కథను ఒక్కసారిగా భద్రపరుస్తున్న వేలాది భక్తులతో చేరండి.',
    'home.yourStoryScripture': 'మీ కథ ఒక గ్రంథం',
    'home.echoFuture': 'గతాన్ని ప్రతిధ్వనించండి. భవిష్యత్తును ప్రేరేపించండి',
    'home.oneVoice': 'ఒక స్వరం. ఒక ఆలయం. వేల జ్ఞాపకాలు',
    'home.startContributing': 'ఈరోజే సహకరించడం ప్రారంభించండి',

    // Login Page
    'login.title': 'మీ ఖాతాలోకి లాగిన్ చేయండి',
    'login.subtitle': 'దేవాలయ ధారకు తిరిగి స్వాగతం',
    'login.email': 'ఇమెయిల్',
    'login.password': 'పాస్‌వర్డ్',
    'login.signin': 'సైన్ ఇన్',
    'login.continueGoogle': 'గూగుల్‌తో కొనసాగించండి',
    'login.forgotPassword': 'పాస్‌వర్డ్ మరచిపోయారా?',
    'login.noAccount': 'ఖాతా లేదా?',
    'login.signupHere': 'ఇక్కడ సైన్ అప్ చేయండి',
    'login.createAccount': 'కొత్త ఖాతా సృష్టించండి',
    'login.fullName': 'పూర్తి పేరు',
    'login.region': 'ప్రాంతం',
    'login.mobile': 'మొబైల్ నంబర్',
    'login.createAccountBtn': 'ఖాతా సృష్టించండి',
    'login.haveAccount': 'ఇప్పటికే ఖాతా ఉందా?',
    'login.loginHere': 'ఇక్కడ లాగిన్ చేయండి',

    // Profile Page
    'profile.title': 'ప్రొఫైల్',
    'profile.myContributions': 'నా సహకారాలు',
    'profile.totalContributions': 'మొత్తం సహకారాలు',
    'profile.audioFiles': 'ఆడియో ఫైల్‌లు',
    'profile.videoFiles': 'వీడియో ఫైల్‌లు',
    'profile.textStories': 'వచన కథలు',
    'profile.badges': 'బ్యాడ్జ్‌లు & విజయాలు',
    'profile.templeGuardian': 'ఆలయ రక్షకుడు',
    'profile.storyPreserver': 'కథా సంరక్షకుడు',
    'profile.voiceKeeper': 'స్వర సంరక్షకుడు',
    'profile.recentActivity': 'ఇటీవలి కార్యకలాపాలు',
    'profile.pleaseLogin': 'మీ ప్రొఫైల్‌ను చూడడానికి దయచేసి లాగిన్ చేయండి',

    // About Page
    'about.title': 'దేవాలయ ధార ఎందుకు?',
    'about.subtitle': 'మా ఆలయాల పవిత్ర వారసత్వాన్ని భద్రపరుస్తోంది',
    'about.mission': 'మా లక్ష్యం',
    'about.missionDesc': 'భారతదేశం అంతటా ఉన్న ఆలయ కథలు, స్వరాలు మరియు సంప్రదాయాల జీవంత డిజిటల్ సంగ్రహాన్ని సృష్టించడం, మా పూర్వికుల ఆధ్యాత్మిక వారసత్వం భవిష్యత్ తరాలకు భద్రపరచబడుతుందని నిర్ధారించడం.',
    'about.vision': 'మా దృష్టి',
    'about.visionDesc': 'ప్రతి ఆలయం యొక్క కథ వినబడే, ప్రతి భక్తుని స్వరం భద్రపరచబడే మరియు ప్రతి సంప్రదాయం దాని డిజిటల్ ఇంటిని కనుగొనే ప్రపంచం.',
    'about.howItWorks': 'ఇది ఎలా పని చేస్తుంది',
    'about.step1': 'మీ కథను పంచుకోండి',
    'about.step1Desc': 'మీ ఆలయ అనుభవాల గురించి ఆడియో, వీడియో లేదా వచనాన్ని అప్‌లోడ్ చేయండి',
    'about.step2': 'కనెక్ట్ & కనుగొనండి',
    'about.step2Desc': 'భారతదేశం అంతటా ఉన్న ఆలయాల నుండి కథలను అన్వేషించండి',
    'about.step3': 'వారసత్వాన్ని భద్రపరచండి',
    'about.step3Desc': 'ఆధ్యాత్మిక సంప్రదాయాల జీవంత సంగ్రహానికి సహకరించండి',
    'about.inspirationalQuote1': 'మీ కథ ఒక గ్రంథం.',
    'about.inspirationalQuote2': 'గతాన్ని ప్రతిధ్వనించండి. భవిష్యత్తును ప్రేరేపించండి.',
    'about.inspirationalQuote3': 'ఒక స్వరం. ఒక ఆలయం. వేల జ్ఞాపకాలు.',

    // Upload Page
    'upload.title': 'మీ ఆలయ కథను పంచుకోండి',
    'upload.subtitle': 'మా పవిత్ర వారసత్వాన్ని భద్రపరచడంలో సహాయపడండి',
    'upload.uploadAudio': 'ఆడియో అప్‌లోడ్ చేయండి',
    'upload.uploadVideo': 'వీడియో అప్‌లోడ్ చేయండి',
    'upload.submitText': 'వచనం సమర్పించండి',
    'upload.templeName': 'ఆలయం పేరు',
    'upload.region': 'ప్రాంతం',
    'upload.language': 'భాష',
    'upload.deityCategory': 'దేవత వర్గం',
    'upload.description': 'చిన్న వివరణ',
    'upload.descriptionPlaceholder': 'మీ సహకారం వెనుక ఉన్న కథను పంచుకోండి...',
    'upload.submit': 'సహకారం సమర్పించండి',
    'upload.thankYou': 'సంప్రదాయాన్ని భద్రపరచినందుకు ధన్యవాదాలు!',

    // Gallery Page
    'gallery.title': 'ఆలయ స్వరాల గ్యాలరీ',
    'gallery.subtitle': 'భారతదేశం అంతటా ఉన్న ఆలయాల నుండి కథలను కనుగొనండి',
    'gallery.filters': 'ఫిల్టర్‌లు',
    'gallery.allRegions': 'అన్ని ప్రాంతాలు',
    'gallery.allDeities': 'అన్ని దేవతలు',
    'gallery.allTypes': 'అన్ని రకాలు',
    'gallery.audio': 'ఆడియో',
    'gallery.video': 'వీడియో',
    'gallery.text': 'వచనం',
    'gallery.allLanguages': 'అన్ని భాషలు',
    'gallery.clearFilters': 'ఫిల్టర్‌లను క్లియర్ చేయండి',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'te'>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'te';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: 'en' | 'te') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};