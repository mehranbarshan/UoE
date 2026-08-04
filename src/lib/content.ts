export interface SurveyItem {
  id: string;
  titleFa: string;
  titleEn: string;
  orgFa: string;
  orgEn: string;
  category: "health" | "education" | "social" | "tech" | "business";
  reward: number;
  minutes: number;
  questions: number;
  participants: number;
  match: number; // match percentage
}

export const surveys: SurveyItem[] = [
  {
    id: "s1",
    titleFa: "عادات کار از راه دور در سال ۲۰۲۵",
    titleEn: "Remote work habits in 2025",
    orgFa: "دانشگاه تهران",
    orgEn: "University of Tehran",
    category: "social",
    reward: 120,
    minutes: 5,
    questions: 12,
    participants: 842,
    match: 96,
  },
  {
    id: "s2",
    titleFa: "تأثیر خواب بر عملکرد شناختی",
    titleEn: "Sleep impact on cognitive performance",
    orgFa: "مؤسسه علوم اعصاب",
    orgEn: "Institute of Neurosciences",
    category: "health",
    reward: 200,
    minutes: 8,
    questions: 20,
    participants: 531,
    match: 88,
  },
  {
    id: "s3",
    titleFa: "تجربه یادگیری آنلاین دانشجویان",
    titleEn: "Students' online learning experience",
    orgFa: "دانشگاه صنعتی شریف",
    orgEn: "Sharif University of Technology",
    category: "education",
    reward: 90,
    minutes: 4,
    questions: 10,
    participants: 1203,
    match: 92,
  },
  {
    id: "s4",
    titleFa: "استفاده از ابزارهای هوش مصنوعی در توسعه نرم‌افزار",
    titleEn: "AI tools usage in software development",
    orgFa: "آزمایشگاه نوآوری فناوری",
    orgEn: "Tech Innovation Lab",
    category: "tech",
    reward: 150,
    minutes: 6,
    questions: 15,
    participants: 678,
    match: 99,
  },
  {
    id: "s5",
    titleFa: "رفتار مصرف‌کننده در خرید آنلاین",
    titleEn: "Consumer behavior in online shopping",
    orgFa: "دانشکده کسب‌وکار",
    orgEn: "Business School",
    category: "business",
    reward: 110,
    minutes: 5,
    questions: 14,
    participants: 980,
    match: 84,
  },
  {
    id: "s6",
    titleFa: "سلامت روان در میان جوانان",
    titleEn: "Mental health among young adults",
    orgFa: "مرکز بهداشت روان",
    orgEn: "Mental Health Center",
    category: "health",
    reward: 180,
    minutes: 7,
    questions: 18,
    participants: 445,
    match: 91,
  },
];

export interface BlogPost {
  id: string;
  titleFa: string;
  titleEn: string;
  excerptFa: string;
  excerptEn: string;
  categoryFa: string;
  categoryEn: string;
  date: string;
  readMin: number;
  gradient: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    titleFa: "چرا پرسشنامه‌های سنتی پاسخ‌های بی‌کیفیت تولید می‌کنند",
    titleEn: "Why traditional surveys produce low-quality answers",
    excerptFa:
      "تحلیلی بر نحوه از دست رفتن انگیزه شرکت‌کنندگان در فرم‌های طولانی و راه‌حل‌های طراحی تجربه.",
    excerptEn:
      "An analysis of how participants lose motivation in long forms and the experience-design solutions that fix it.",
    categoryFa: "روش‌های پژوهش",
    categoryEn: "Research methods",
    date: "2025-01-12",
    readMin: 6,
    gradient: "from-[#1d3b4c] to-[#2a5266]",
  },
  {
    id: "b2",
    titleFa: "گیمیفیکیشن واقعی: فراتر از امتیاز و نشان",
    titleEn: "Real gamification: beyond points and badges",
    excerptFa:
      "چگونه سیستم پاداش UOE با روانشناسی انگیشه درونی هم‌راستا شده است.",
    excerptEn:
      "How UOE's reward system aligns with intrinsic motivation psychology.",
    categoryFa: "محصول",
    categoryEn: "Product",
    date: "2025-02-03",
    readMin: 5,
    gradient: "from-[#f39237] to-[#f7ae6a]",
  },
  {
    id: "b3",
    titleFa: "تشخیص پاسخ‌های تصادفی با هوش مصنوعی",
    titleEn: "Detecting random responses with AI",
    excerptFa:
      "داخل موتور کیفیت داده UOE: چگونه الگوهای مشکوک را پیش از تحلیل علامت می‌زنیم.",
    excerptEn:
      "Inside UOE's data quality engine: how we flag suspicious patterns before analysis.",
    categoryFa: "هوش مصنوعی",
    categoryEn: "AI",
    date: "2025-02-20",
    readMin: 8,
    gradient: "from-[#2a9d8f] to-[#1d3b4c]",
  },
  {
    id: "b4",
    titleFa: "ساختن داشبورد نهادی برای دانشگاه‌ها",
    titleEn: "Building an institutional dashboard for universities",
    excerptFa:
      "چرا دانشگاه‌ها به دیدگاهی یکپارچه بر پرتفوی پژوهش خود نیاز دارند.",
    excerptEn:
      "Why universities need a unified view across their research portfolio.",
    categoryFa: "محصول",
    categoryEn: "Product",
    date: "2025-03-08",
    readMin: 4,
    gradient: "from-[#6a8caf] to-[#1d3b4c]",
  },
  {
    id: "b5",
    titleFa: "همکاری چنددانشگاهی: مطالعه موردی",
    titleEn: "Multi-university collaboration: a case study",
    excerptFa:
      "چگونه سه دانشگاه با UOE در ۱۰ روز به ۵۰۰۰ پاسخ باکیفیت رسیدند.",
    excerptEn:
      "How three universities reached 5,000 quality responses in 10 days with UOE.",
    categoryFa: "مطالعه موردی",
    categoryEn: "Case study",
    date: "2025-03-25",
    readMin: 7,
    gradient: "from-[#1d3b4c] to-[#f39237]",
  },
  {
    id: "b6",
    titleFa: "اخلاق در جمع‌آوری داده شرکت‌کنندگان",
    titleEn: "Ethics in participant data collection",
    excerptFa:
      "چارچوب رضایت آگاهانه و حریم خصوصی که در طراحی UOE رعایت می‌کنیم.",
    excerptEn:
      "The informed-consent and privacy framework we uphold in UOE's design.",
    categoryFa: "اخلاق پژوهش",
    categoryEn: "Research ethics",
    date: "2025-04-10",
    readMin: 6,
    gradient: "from-[#e9c46a] to-[#f39237]",
  },
];

export interface LeaderboardEntry {
  rank: number;
  nameFa: string;
  nameEn: string;
  points: number;
  level: number;
}

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, nameFa: "آرش محمدی", nameEn: "Arash Mohammadi", points: 12480, level: 8 },
  { rank: 2, nameFa: "سارا احمدی", nameEn: "Sara Ahmadi", points: 11200, level: 7 },
  { rank: 3, nameFa: "رضا کریمی", nameEn: "Reza Karimi", points: 10650, level: 7 },
  { rank: 4, nameFa: "نگار صالحی", nameEn: "Negar Salehi", points: 9870, level: 6 },
  { rank: 5, nameFa: "امیر حسینی", nameEn: "Amir Hosseini", points: 9120, level: 6 },
  { rank: 6, nameFa: "تو", nameEn: "You", points: 7340, level: 5 },
];

// Demo survey questions for the interactive questionnaire experience
export interface DemoQuestion {
  titleFa: string;
  titleEn: string;
  descFa: string;
  descEn: string;
  optionsFa: string[];
  optionsEn: string[];
}

export const demoQuestions: DemoQuestion[] = [
  {
    titleFa: "چقدر از ابزارهای هوش مصنوعی در کار روزمره خود استفاده می‌کنید؟",
    titleEn: "How often do you use AI tools in your daily work?",
    descFa: "گزینه‌ای که بهترین توصیف از عادات فعلی شماست را انتخاب کنید.",
    descEn: "Pick the option that best describes your current habits.",
    optionsFa: ["هر روز", "چند بار در هفته", "گاهی اوقات", "تقریباً هیچ‌وقت"],
    optionsEn: ["Every day", "A few times a week", "Occasionally", "Almost never"],
  },
  {
    titleFa: "کدام حوزه بیشترین تأثیر را از هوش مصنوعی دیده است؟",
    titleEn: "Which field has seen the biggest impact from AI?",
    descFa: "از دیدگاه شما، کدام حوزه بیشترین تحول را تجربه کرده است.",
    descEn: "In your view, which field has experienced the most transformation.",
    optionsFa: ["آموزش", "بهداشت و سلامت", "توسعه نرم‌افزار", "هنر و خلاقیت"],
    optionsEn: ["Education", "Healthcare", "Software development", "Art & creativity"],
  },
  {
    titleFa: "مهم‌ترین نگرانی شما درباره هوش مصنوعی چیست؟",
    titleEn: "What is your biggest concern about AI?",
    descFa: "یک گزینه را انتخاب کنید — می‌توانید بعداً توضیح بدهید.",
    descEn: "Pick one option — you can elaborate later.",
    optionsFa: ["حریم خصوصی", "از دست رفتن شغل", "سوگیری الگوریتم", "کنترل انسانی"],
    optionsEn: ["Privacy", "Job loss", "Algorithmic bias", "Human control"],
  },
];

// Chart data
export const responseData = [
  { day: "1", fa: "شنبه", en: "Sat", responses: 24 },
  { day: "2", fa: "یکشنبه", en: "Sun", responses: 38 },
  { day: "3", fa: "دوشنبه", en: "Mon", responses: 52 },
  { day: "4", fa: "سه‌شنبه", en: "Tue", responses: 41 },
  { day: "5", fa: "چهارشنبه", en: "Wed", responses: 67 },
  { day: "6", fa: "پنجشنبه", en: "Thu", responses: 78 },
  { day: "7", fa: "جمعه", en: "Fri", responses: 33 },
];

export const qualityData = [
  { name: "fa", label: { fa: "عالی", en: "Excellent" }, value: 62, color: "#2a9d8f" },
  { name: "good", label: { fa: "خوب", en: "Good" }, value: 24, color: "#f39237" },
  { name: "mid", label: { fa: "متوسط", en: "Average" }, value: 9, color: "#e9c46a" },
  { name: "low", label: { fa: "ضعیف", en: "Poor" }, value: 5, color: "#e5484d" },
];

export interface ResearchTemplate {
  id: string;
  nameFa: string;
  nameEn: string;
  descFa: string;
  descEn: string;
  items: number;
  category: string;
  reliability: string;
}

export const researchTemplates: ResearchTemplate[] = [
  {
    id: "t1",
    nameFa: "رضایت مشتری (CSAT)",
    nameEn: "Customer Satisfaction (CSAT)",
    descFa: "اندازه‌گیری رضایت مشتری از محصول یا خدمات",
    descEn: "Measure customer satisfaction with product or service",
    items: 10,
    category: "business",
    reliability: "α = 0.89",
  },
  {
    id: "t2",
    nameFa: "مشارکت کارکنان",
    nameEn: "Employee Engagement",
    descFa: "ارزیابی مشارکت و انگیزه کارکنان",
    descEn: "Assess employee engagement and motivation levels",
    items: 15,
    category: "social",
    reliability: "α = 0.91",
  },
  {
    id: "t3",
    nameFa: "سلامت روان (PHQ-9)",
    nameEn: "Mental Health (PHQ-9)",
    descFa: "غربالگری افسردگی در پژوهش‌های بالینی",
    descEn: "Depression screening for clinical research",
    items: 9,
    category: "health",
    reliability: "α = 0.87",
  },
  {
    id: "t4",
    nameFa: "انگیزه تحصیلی",
    nameEn: "Academic Motivation",
    descFa: "سنجش انگیزه درونی و بیرونی دانشجویان",
    descEn: "Measure intrinsic and extrinsic student motivation",
    items: 12,
    category: "education",
    reliability: "α = 0.83",
  },
  {
    id: "t5",
    nameFa: "قصد کارآفرینی",
    nameEn: "Startup Intention",
    descFa: "ارزیابی قصد راه‌اندازی کسب‌وکار",
    descEn: "Assess entrepreneurial startup intention",
    items: 8,
    category: "business",
    reliability: "α = 0.85",
  },
  {
    id: "t6",
    nameFa: "سبک رهبری",
    nameEn: "Leadership Style",
    descFa: "شناسایی سبک رهبری مدیران",
    descEn: "Identify managerial leadership styles",
    items: 15,
    category: "social",
    reliability: "α = 0.88",
  },
  {
    id: "t7",
    nameFa: "مقیاس تاب‌آوری (RSA)",
    nameEn: "Resilience Scale (RSA)",
    descFa: "سنجش تاب‌آوری روان‌شناختی",
    descEn: "Measure psychological resilience",
    items: 25,
    category: "health",
    reliability: "α = 0.92",
  },
];

export interface TrustFactor {
  nameFa: string;
  nameEn: string;
  weight: number;
  score: number;
}

export const trustFactors: TrustFactor[] = [
  { nameFa: "نرخ تکمیل", nameEn: "Completion rate", weight: 25, score: 98 },
  { nameFa: "عبور از سوالات اعتبارسنجی", nameEn: "Attention checks passed", weight: 25, score: 96 },
  { nameFa: "سازگاری پاسخ‌ها", nameEn: "Response consistency", weight: 20, score: 92 },
  { nameFa: "رفتار زمانی", nameEn: "Time behavior", weight: 15, score: 88 },
  { nameFa: "سابقه پژوهش", nameEn: "Research history", weight: 15, score: 100 },
];

export const rewardActions = [
  { actionFa: "تکمیل پرسشنامه", actionEn: "Survey completion", points: 50 },
  { actionFa: "پاسخ باکیفیت", actionEn: "High quality response", points: 20 },
  { actionFa: "پشت‌سرهم ۷ روزه", actionEn: "7-day streak", points: 100 },
  { actionFa: "پشت‌سرهم ۳۰ روزه", actionEn: "30-day streak", points: 500 },
  { actionFa: "معرفی دوست", actionEn: "Referral bonus", points: 25 },
  { actionFa: "تکمیل پروفایل", actionEn: "Profile completion", points: 15 },
  { actionFa: "اولین پرسشنامه", actionEn: "First survey", points: 30 },
];

export const redemptionOptions = [
  { rewardFa: "کارت هدیه (آمازون و غیره)", rewardEn: "Gift cards (Amazon, etc.)", cost: 5000 },
  { rewardFa: "گواهینامه پژوهشی", rewardEn: "Research certificates", cost: 2000 },
  { rewardFa: "اعتبار پژوهشی", rewardEn: "Research credits", cost: 1000 },
  { rewardFa: "نشان ویژه", rewardEn: "Premium badge", cost: 3000 },
  { rewardFa: "تطابق اولویت‌دار", rewardEn: "Priority matching", cost: 1500 },
];

export const levelProgression = [
  { level: 1, titleFa: "مشارکت‌کننده تازه‌کار", titleEn: "Novice Contributor", points: 0 },
  { level: 2, titleFa: "شرکت‌کننده منظم", titleEn: "Regular Participant", points: 500 },
  { level: 3, titleFa: "پاسخ‌دهنده مورد اعتماد", titleEn: "Trusted Respondent", points: 1500 },
  { level: 4, titleFa: "متخصص کیفیت", titleEn: "Quality Expert", points: 3500 },
  { level: 5, titleFa: "کهنه‌کار پژوهش", titleEn: "Research Veteran", points: 6000 },
  { level: 6, titleFa: "قهرمان داده", titleEn: "Data Champion", points: 10000 },
  { level: 7, titleFa: "پژوهشگر برجسته", titleEn: "Research Scholar", points: 15000 },
  { level: 8, titleFa: "پژوهشگر استاد", titleEn: "Master Researcher", points: 25000 },
];

// Verified standard questionnaires for the research library
export interface LibraryQuestionnaire {
  id: string;
  titleFa: string;
  titleEn: string;
  authorFa: string;
  authorEn: string;
  year: number;
  reliability: string;
  validity: string;
  estimatedMinutes: number;
  descriptionFa: string;
  descriptionEn: string;
  questions: { textFa: string; textEn: string }[];
}

export const standardLibrary: LibraryQuestionnaire[] = [
  {
    id: "lib-sf36",
    titleFa: "پرسشنامه کیفیت زندگی (SF-36)",
    titleEn: "Short Form Health Survey (SF-36)",
    authorFa: "ویر و شربورن",
    authorEn: "Ware & Sherbourne",
    year: 1992,
    reliability: "آلفای کرونباخ ۰/۹۰",
    validity: "روایی سازه تأیید شده",
    estimatedMinutes: 5,
    descriptionFa: "ارزیابی سلامت جسمی و روانی در هشت بعد اصلی کیفیت زندگی.",
    descriptionEn: "Assesses physical and mental health across eight quality-of-life domains.",
    questions: [
      { textFa: "به طور کلی، وضعیت سلامت خود را چگونه ارزیابی می‌کنید؟", textEn: "In general, how would you rate your health?" },
      { textFa: "آیا فعالیت‌های روزانه شما به دلیل مشکلات جسمی محدود شده است؟", textEn: "Have your daily activities been limited by physical problems?" },
      { textFa: "در طول ۴ هفته گذشته چقدر احساس خستگی کرده‌اید؟", textEn: "In the past 4 weeks, how much have you felt worn out?" },
    ],
  },
  {
    id: "lib-pss",
    titleFa: "مقیاس استرس ادراک‌شده (PSS-10)",
    titleEn: "Perceived Stress Scale (PSS-10)",
    authorFa: "کوهن و همکاران",
    authorEn: "Cohen et al.",
    year: 1983,
    reliability: "آلفای کرونباخ ۰/۸۷",
    validity: "روایی همگرا تأیید شده",
    estimatedMinutes: 4,
    descriptionFa: "سنجش میزان استرس درک‌شده در ماه گذشته با رویکرد روان‌سنجی کلاسیک.",
    descriptionEn: "Measures perceived stress over the past month using classical psychometrics.",
    questions: [
      { textFa: "در ماه گذشته، هر چند وقت یک‌بار احساس کرده‌اید قادر به کنترل امور نیستید؟", textEn: "In the past month, how often have you felt unable to control important things?" },
      { textFa: "هر چند وقت یک‌بار در مورد اتفاقات غیرمنتظره مضطرب شده‌اید؟", textEn: "How often have you felt nervous and stressed about unexpected events?" },
      { textFa: "هر چند وقت یک‌بار احساس کرده‌اید مشکلات آن‌قدر زیاد هستند که از عهده آن‌ها برنمی‌آیید؟", textEn: "How often have you felt that difficulties were piling up so high you could not overcome them?" },
    ],
  },
  {
    id: "lib-ghq",
    titleFa: "پرسشنامه سلامت عمومی (GHQ-12)",
    titleEn: "General Health Questionnaire (GHQ-12)",
    authorFa: "گلدبرگ",
    authorEn: "Goldberg",
    year: 1972,
    reliability: "آلفای کرونباخ ۰/۸۵",
    validity: "حساسیت ۸۴٪، ویژگی ۸۲٪",
    estimatedMinutes: 3,
    descriptionFa: "غربالگری اختلالات روانی خفیف در جمعیت عمومی و بالینی.",
    descriptionEn: "Screens for minor psychiatric disorders in general and clinical populations.",
    questions: [
      { textFa: "آیا در هفته گذشته قادر به تمرکز بر کارهای خود بوده‌اید؟", textEn: "Have you been able to concentrate on whatever you are doing this week?" },
      { textFa: "آیا در هفته گذشته به دلیل نگرانی زیاد، خواب شما مختل شده است؟", textEn: "Have you lost much sleep over worry in the past week?" },
      { textFa: "آیا در هفته گذشته احساس کرده‌اید که نقش مفیدی در کارها دارید؟", textEn: "Have you felt you were playing a useful part in things this week?" },
    ],
  },
  {
    id: "lib-scl",
    titleFa: "مقیاس اضطراب بک (BAI)",
    titleEn: "Beck Anxiety Inventory (BAI)",
    authorFa: "بک و استیر",
    authorEn: "Beck & Steer",
    year: 1988,
    reliability: "آلفای کرونباخ ۰/۹۲",
    validity: "روایی افتراقی تأیید شده",
    estimatedMinutes: 6,
    descriptionFa: "سنجش شدت علائم اضطرابی در چهارده شاخص رفتاری و شناختی.",
    descriptionEn: "Measures anxiety symptom severity across fourteen behavioral and cognitive indices.",
    questions: [
      { textFa: "بی‌حسی یا سوزن‌سوزن شدن بدن", textEn: "Numbness or tingling" },
      { textFa: "احساس گرما در صورت", textEn: "Feeling of hot flashes" },
      { textFa: "لرزش دست‌ها یا پاها", textEn: "Trembling hands or legs" },
    ],
  },
];

// AI assistant sample generated questions (used for the AI copilot demo)
export const aiSampleQuestions: { textFa: string; textEn: string }[] = [
  { textFa: "این هدف پژوهشی تا چه اندازه برای شما اولویت دارد؟", textEn: "How much of a priority is this research goal for you?" },
  { textFa: "در یک سال گذشته چه تغییرات مهمی در این حوزه تجربه کرده‌اید؟", textEn: "What significant changes have you experienced in this area in the past year?" },
  { textFa: "کدام یک از عوامل زیر بیشترین تأثیر را بر نتیجه دارد؟", textEn: "Which of the following factors has the most influence on the outcome?" },
  { textFa: "هر چند وقت یک‌بار با این موضوع مواجه می‌شوید؟", textEn: "How often do you encounter this issue?" },
  { textFa: "چه ابزارها یا منابعی برای مدیریت این موضوع استفاده می‌کنید؟", textEn: "What tools or resources do you use to manage this issue?" },
];

// Additional questions the AI co-pilot appends when the researcher asks for more items
export const aiMoreQuestions: { textFa: string; textEn: string }[] = [
  { textFa: "چه عواملی در محیط کار یا زندگی شما به این موضوع دامن می‌زند؟", textEn: "What factors in your work or life environment fuel this issue?" },
  { textFa: "چقدر بر مهارت‌های خود در مدیریت این موضوع اطمینان دارید؟", textEn: "How confident are you in your ability to manage this issue?" },
  { textFa: "آیا حمایت کافی از سوی اطرافیان یا سازمان خود دریافت می‌کنید؟", textEn: "Do you receive enough support from those around you or your organization?" },
  { textFa: "این موضوع چه تأثیری بر کیفیت خواب و استراحت شما دارد؟", textEn: "How does this issue affect the quality of your sleep and rest?" },
  { textFa: "هر چند وقت یک‌بار به فکر تغییر شغل یا محیط خود می‌افتید؟", textEn: "How often do you consider changing your job or environment?" },
  { textFa: "چه راهبردهایی برای مقابله با این موضوع به شما کمک می‌کند؟", textEn: "Which coping strategies help you deal with this issue?" },
  { textFa: "آیا در ماه گذشته در روابط شما تنش یا تعارض افزایش یافته است؟", textEn: "Have conflicts or tension in your relationships increased over the past month?" },
  { textFa: "تا چه اندازه وضعیت فعلی بر عملکرد روزانه شما اثر گذاشته است؟", textEn: "To what extent has your current situation affected your daily functioning?" },
];

