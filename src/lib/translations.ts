export type Locale = "fa" | "en";

// All translation keys used across the app.
export type TranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.researchers"
  | "nav.participants"
  | "nav.marketplace"
  | "nav.pricing"
  | "nav.blog"
  | "nav.dashboard"
  | "nav.login"
  | "nav.start"
  | "nav.participate"
  | "brand.name"
  | "brand.full"
  | "hero.badge"
  | "hero.title"
  | "hero.subtitle"
  | "hero.description"
  | "hero.cta.primary"
  | "hero.cta.secondary"
  | "hero.stat.responses"
  | "hero.stat.researchers"
  | "hero.stat.completion"
  | "hero.stat.universities"
  | "hero.illustration.title"
  | "hero.illustration.researcher"
  | "hero.illustration.participant"
  | "hero.illustration.data"
  | "hero.illustration.ai"
  | "hero.scroll"
  | "problem.title"
  | "problem.subtitle"
  | "problem.1.title"
  | "problem.1.desc"
  | "problem.2.title"
  | "problem.2.desc"
  | "problem.3.title"
  | "problem.3.desc"
  | "problem.4.title"
  | "problem.4.desc"
  | "solution.title"
  | "solution.subtitle"
  | "solution.1.title"
  | "solution.1.desc"
  | "solution.2.title"
  | "solution.2.desc"
  | "solution.3.title"
  | "solution.3.desc"
  | "solution.4.title"
  | "solution.4.desc"
  | "personas.title"
  | "personas.subtitle"
  | "persona.researcher.title"
  | "persona.researcher.tag"
  | "persona.researcher.desc"
  | "persona.researcher.f1"
  | "persona.researcher.f2"
  | "persona.researcher.f3"
  | "persona.researcher.f4"
  | "persona.researcher.f5"
  | "persona.researcher.f6"
  | "persona.researcher.f7"
  | "persona.researcher.f8"
  | "persona.researcher.cta"
  | "persona.participant.title"
  | "persona.participant.tag"
  | "persona.participant.desc"
  | "persona.participant.f1"
  | "persona.participant.f2"
  | "persona.participant.f3"
  | "persona.participant.f4"
  | "persona.participant.f5"
  | "persona.participant.cta"
  | "persona.org.title"
  | "persona.org.tag"
  | "persona.org.desc"
  | "persona.org.f1"
  | "persona.org.f2"
  | "persona.org.f3"
  | "persona.org.f4"
  | "persona.org.cta"
  | "survey.title"
  | "survey.subtitle"
  | "survey.before"
  | "survey.after"
  | "survey.progress.label"
  | "survey.eta"
  | "survey.q.title"
  | "survey.q.desc"
  | "survey.q.opt1"
  | "survey.q.opt2"
  | "survey.q.opt3"
  | "survey.q.opt4"
  | "survey.q.next"
  | "survey.q.back"
  | "survey.q.motivation"
  | "survey.feature.progress"
  | "survey.feature.eta"
  | "survey.feature.cards"
  | "survey.feature.micro"
  | "survey.feature.gamify"
  | "survey.feature.mobile"
  | "ai.title"
  | "ai.subtitle"
  | "ai.assistant.title"
  | "ai.assistant.desc"
  | "ai.assistant.f1"
  | "ai.assistant.f2"
  | "ai.assistant.f3"
  | "ai.assistant.f4"
  | "ai.quality.title"
  | "ai.quality.desc"
  | "ai.quality.f1"
  | "ai.quality.f2"
  | "ai.quality.f3"
  | "ai.matching.title"
  | "ai.matching.desc"
  | "ai.matching.f1"
  | "ai.matching.f2"
  | "ai.matching.f3"
  | "ai.matching.f4"
  | "gamify.title"
  | "gamify.subtitle"
  | "gamify.points"
  | "gamify.points.desc"
  | "gamify.levels"
  | "gamify.levels.desc"
  | "gamify.badges"
  | "gamify.badges.desc"
  | "gamify.leaderboard"
  | "gamify.leaderboard.desc"
  | "gamify.example"
  | "gamify.level.label"
  | "gamify.next.level"
  | "marketplace.title"
  | "marketplace.subtitle"
  | "marketplace.filter.all"
  | "marketplace.filter.health"
  | "marketplace.filter.education"
  | "marketplace.filter.social"
  | "marketplace.filter.tech"
  | "marketplace.filter.business"
  | "marketplace.reward"
  | "marketplace.minutes"
  | "marketplace.questions"
  | "marketplace.join"
  | "marketplace.participants"
  | "pricing.title"
  | "pricing.subtitle"
  | "pricing.monthly"
  | "pricing.yearly"
  | "pricing.save"
  | "pricing.free"
  | "pricing.researcher.name"
  | "pricing.researcher.desc"
  | "pricing.team.name"
  | "pricing.team.desc"
  | "pricing.enterprise.name"
  | "pricing.enterprise.desc"
  | "pricing.cta"
  | "pricing.cta.current"
  | "pricing.popular"
  | "stats.title"
  | "stats.responses"
  | "stats.researchers"
  | "stats.universities"
  | "stats.countries"
  | "cta.title"
  | "cta.subtitle"
  | "cta.primary"
  | "cta.secondary"
  | "about.title"
  | "about.subtitle"
  | "about.mission.title"
  | "about.mission.desc"
  | "about.vision.title"
  | "about.vision.desc"
  | "about.values.title"
  | "about.value.1.title"
  | "about.value.1.desc"
  | "about.value.2.title"
  | "about.value.2.desc"
  | "about.value.3.title"
  | "about.value.3.desc"
  | "about.value.4.title"
  | "about.value.4.desc"
  | "about.story.title"
  | "about.story.p1"
  | "about.story.p2"
  | "about.team.title"
  | "researchers.title"
  | "researchers.subtitle"
  | "researchers.flow.title"
  | "researchers.flow.1"
  | "researchers.flow.2"
  | "researchers.flow.3"
  | "researchers.flow.4"
  | "researchers.flow.5"
  | "researchers.benefits.title"
  | "researchers.benefit.1.title"
  | "researchers.benefit.1.desc"
  | "researchers.benefit.2.title"
  | "researchers.benefit.2.desc"
  | "researchers.benefit.3.title"
  | "researchers.benefit.3.desc"
  | "researchers.benefit.4.title"
  | "researchers.benefit.4.desc"
  | "participants.title"
  | "participants.subtitle"
  | "participants.how.title"
  | "participants.how.1"
  | "participants.how.2"
  | "participants.how.3"
  | "participants.how.4"
  | "participants.rewards.title"
  | "participants.rewards.desc"
  | "create.title"
  | "create.subtitle"
  | "create.step.basics"
  | "create.step.questions"
  | "create.step.audience"
  | "create.step.review"
  | "create.field.title.label"
  | "create.field.title.ph"
  | "create.field.desc.label"
  | "create.field.desc.ph"
  | "create.field.category"
  | "create.field.eta"
  | "create.field.eta.suffix"
  | "create.ai.title"
  | "create.ai.desc"
  | "create.ai.improve"
  | "create.ai.detect"
  | "create.ai.predict"
  | "create.ai.suggest"
  | "create.ai.run"
  | "create.ai.running"
  | "create.questions.label"
  | "create.questions.add"
  | "create.qtype.single"
  | "create.qtype.multi"
  | "create.qtype.text"
  | "create.qtype.scale"
  | "create.audience.label"
  | "create.audience.age"
  | "create.audience.education"
  | "create.audience.location"
  | "create.audience.interests"
  | "create.audience.sample"
  | "create.review.title"
  | "create.review.publish"
  | "create.review.draft"
  | "dashboard.researcher.title"
  | "dashboard.researcher.welcome"
  | "dashboard.participant.title"
  | "dashboard.participant.welcome"
  | "dashboard.analytics.title"
  | "dashboard.nav.overview"
  | "dashboard.nav.surveys"
  | "dashboard.nav.responses"
  | "dashboard.nav.audience"
  | "dashboard.nav.quality"
  | "dashboard.nav.reports"
  | "dashboard.nav.settings"
  | "dash.stat.active"
  | "dash.stat.responses"
  | "dash.stat.completion"
  | "dash.stat.quality"
  | "dash.recent.title"
  | "dash.response.chart"
  | "dash.quality.chart"
  | "dash.demographics.title"
  | "dash.my.surveys"
  | "dash.completed"
  | "dash.points"
  | "dash.level"
  | "dash.badges"
  | "dash.rank"
  | "dash.available"
  | "dash.recommended"
  | "blog.title"
  | "blog.subtitle"
  | "blog.readmore"
  | "blog.min"
  | "auth.login.title"
  | "auth.login.subtitle"
  | "auth.register.title"
  | "auth.register.subtitle"
  | "auth.email"
  | "auth.password"
  | "auth.name"
  | "auth.google"
  | "auth.or"
  | "auth.switch.login"
  | "auth.switch.register"
  | "auth.submit.login"
  | "auth.submit.register"
  | "footer.tagline"
  | "footer.product"
  | "footer.company"
  | "footer.resources"
  | "footer.legal"
  | "footer.rights"
  | "footer.about"
  | "footer.careers"
  | "footer.contact"
  | "footer.docs"
  | "footer.api"
  | "footer.status"
  | "footer.privacy"
  | "footer.terms"
  | "footer.security"
  | "common.learnMore"
  | "common.getStarted"
  | "common.viewAll"
  | "common.back";

type Dict = Record<TranslationKey, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.researchers": "For Researchers",
  "nav.participants": "For Participants",
  "nav.marketplace": "Marketplace",
  "nav.pricing": "Pricing",
  "nav.blog": "Blog",
  "nav.dashboard": "Dashboard",
  "nav.login": "Log in",
  "nav.start": "Start Research",
  "nav.participate": "Participate in Surveys",
  "brand.name": "UOE",
  "brand.full": "University of Exchange",

  "hero.badge": "Now in public beta — AI-powered research",
  "hero.title": "University of Exchange",
  "hero.subtitle": "Connecting Researchers with Real Participants",
  "hero.description":
    "Making research faster, smarter, and more engaging through high-quality survey participation. Better research with real respondents, higher-quality data, and a genuinely engaging experience.",
  "hero.cta.primary": "Start Research",
  "hero.cta.secondary": "Participate in Surveys",
  "hero.stat.responses": "Responses collected",
  "hero.stat.researchers": "Active researchers",
  "hero.stat.completion": "Avg. completion rate",
  "hero.stat.universities": "Partner universities",
  "hero.illustration.title": "The research exchange",
  "hero.illustration.researcher": "Researcher",
  "hero.illustration.participant": "Participant",
  "hero.illustration.data": "Quality data",
  "hero.illustration.ai": "AI analytics",
  "hero.scroll": "Scroll to explore",

  "problem.title": "Research is harder than it should be",
  "problem.subtitle": "Four problems that quietly break academic research today.",
  "problem.1.title": "Hard to find participants",
  "problem.1.desc": "Researchers struggle to locate suitable statistical populations for their studies.",
  "problem.2.title": "Boring questionnaires",
  "problem.2.desc": "Participants lose motivation when answering long, dull forms.",
  "problem.3.title": "Low-quality answers",
  "problem.3.desc": "Disengaged users produce random responses that pollute datasets.",
  "problem.4.title": "Too much time lost",
  "problem.4.desc": "Researchers spend weeks collecting data instead of analyzing it.",

  "solution.title": "The UOE solution",
  "solution.subtitle": "A platform that turns traditional questionnaires into engaging, interactive experiences while connecting researchers with the right participants.",
  "solution.1.title": "Smart matching",
  "solution.1.desc": "AI connects each survey with the participants most likely to give meaningful answers.",
  "solution.2.title": "Engaging experience",
  "solution.2.desc": "Interactive cards, progress animations, and micro-interactions keep participants motivated.",
  "solution.3.title": "Quality signals",
  "solution.3.desc": "AI detects random or suspicious answers so researchers can trust their data.",
  "solution.4.title": "Rewards ecosystem",
  "solution.4.desc": "Points, levels, and badges turn participation into a journey people want to continue.",

  "personas.title": "Built for everyone in the research loop",
  "personas.subtitle": "Three roles, one connected ecosystem that moves research forward.",
  "persona.researcher.title": "Researchers",
  "persona.researcher.tag": "Design & analyze",
  "persona.researcher.desc": "Create, launch, and analyze studies with AI-assisted tooling and a real participant pool.",
  "persona.researcher.f1": "Create questionnaire",
  "persona.researcher.f2": "Upload existing questionnaire",
  "persona.researcher.f3": "Define target population",
  "persona.researcher.f4": "Select demographic requirements",
  "persona.researcher.f5": "Estimate required sample size",
  "persona.researcher.f6": "Track responses in real time",
  "persona.researcher.f7": "Analyze data quality",
  "persona.researcher.f8": "Export results",
  "persona.researcher.cta": "Open researcher dashboard",

  "persona.participant.title": "Participants",
  "persona.participant.tag": "Earn & contribute",
  "persona.participant.desc": "Discover surveys that match you, earn rewards, and build a profile as a trusted contributor.",
  "persona.participant.f1": "Discover available surveys",
  "persona.participant.f2": "Earn points and rewards",
  "persona.participant.f3": "Complete engaging questionnaires",
  "persona.participant.f4": "Build a participant profile",
  "persona.participant.f5": "Track completed surveys",
  "persona.participant.cta": "Explore the marketplace",

  "persona.org.title": "Universities & Organizations",
  "persona.org.tag": "Scale & govern",
  "persona.org.desc": "Manage research portfolios across teams, invite participants, and generate institutional reports.",
  "persona.org.f1": "Institutional dashboard",
  "persona.org.f2": "Manage research projects",
  "persona.org.f3": "Invite participants",
  "persona.org.f4": "Generate reports",
  "persona.org.cta": "Talk to us",

  "survey.title": "Questionnaires, reinvented",
  "survey.subtitle": "From boring forms to an experience people actually finish.",
  "survey.before": "Traditional form",
  "survey.after": "UOE experience",
  "survey.progress.label": "Research journey",
  "survey.eta": "est. 2 min left",
  "survey.q.title": "How often do you use AI tools in your daily work?",
  "survey.q.desc": "Pick the option that best describes your current habits.",
  "survey.q.opt1": "Every day",
  "survey.q.opt2": "A few times a week",
  "survey.q.opt3": "Occasionally",
  "survey.q.opt4": "Almost never",
  "survey.q.next": "Next question",
  "survey.q.back": "Back",
  "survey.q.motivation": "Great progress! You completed 30% of this research journey.",
  "survey.feature.progress": "Progress animation",
  "survey.feature.eta": "Estimated completion time",
  "survey.feature.cards": "Interactive cards",
  "survey.feature.micro": "Friendly micro-animations",
  "survey.feature.gamify": "Gamification elements",
  "survey.feature.mobile": "Mobile-first design",

  "ai.title": "AI that makes research better",
  "ai.subtitle": "Three layers of intelligence working behind every survey.",
  "ai.assistant.title": "AI Survey Assistant",
  "ai.assistant.desc": "Improve wording before you launch, not after you collect.",
  "ai.assistant.f1": "Improve questionnaire wording",
  "ai.assistant.f2": "Detect ambiguous questions",
  "ai.assistant.f3": "Suggest better structure",
  "ai.assistant.f4": "Predict completion rate",
  "ai.quality.title": "AI Data Quality",
  "ai.quality.desc": "Trust your dataset by filtering out noise automatically.",
  "ai.quality.f1": "Detect random answers",
  "ai.quality.f2": "Identify suspicious responses",
  "ai.quality.f3": "Analyze response patterns",
  "ai.matching.title": "AI Matching",
  "ai.matching.desc": "Send each survey to participants who can actually answer it.",
  "ai.matching.f1": "Age",
  "ai.matching.f2": "Education",
  "ai.matching.f3": "Location",
  "ai.matching.f4": "Interests & research criteria",

  "gamify.title": "Participation that feels like progress",
  "gamify.subtitle": "A gamified layer that keeps respondents engaged from the first survey to the hundredth.",
  "gamify.points": "Points",
  "gamify.points.desc": "Earn points for every completed survey and quality answer.",
  "gamify.levels": "Levels",
  "gamify.levels.desc": "Climb from Novice Contributor to Master Researcher.",
  "gamify.badges": "Badges",
  "gamify.badges.desc": "Unlock achievements for streaks, niches, and milestones.",
  "gamify.leaderboard": "Leaderboard",
  "gamify.leaderboard.desc": "See where you stand among contributors worldwide.",
  "gamify.example": "Complete 5 surveys and unlock Researcher Level 2",
  "gamify.level.label": "Researcher Level 2",
  "gamify.next.level": "120 points to Level 3",

  "marketplace.title": "Survey marketplace",
  "marketplace.subtitle": "Live surveys matched to your profile. Join one in a tap.",
  "marketplace.filter.all": "All",
  "marketplace.filter.health": "Health",
  "marketplace.filter.education": "Education",
  "marketplace.filter.social": "Social",
  "marketplace.filter.tech": "Technology",
  "marketplace.filter.business": "Business",
  "marketplace.reward": "reward",
  "marketplace.minutes": "min",
  "marketplace.questions": "questions",
  "marketplace.join": "Join survey",
  "marketplace.participants": "joined",

  "pricing.title": "Simple pricing for serious research",
  "pricing.subtitle": "Start free. Upgrade when your research scales.",
  "pricing.monthly": "Monthly",
  "pricing.yearly": "Yearly",
  "pricing.save": "Save 20%",
  "pricing.free": "Free",
  "pricing.researcher.name": "Researcher",
  "pricing.researcher.desc": "For individual researchers running their first studies.",
  "pricing.team.name": "Team",
  "pricing.team.desc": "For research groups and labs collaborating on multiple projects.",
  "pricing.enterprise.name": "Enterprise",
  "pricing.enterprise.desc": "For universities and institutions managing research at scale.",
  "pricing.cta": "Get started",
  "pricing.cta.current": "Current plan",
  "pricing.popular": "Most popular",

  "stats.title": "Trusted by the research community",
  "stats.responses": "Responses collected",
  "stats.researchers": "Active researchers",
  "stats.universities": "Partner universities",
  "stats.countries": "Countries",

  "cta.title": "Ready to run better research?",
  "cta.subtitle": "Join thousands of researchers and participants building the future of academic data collection.",
  "cta.primary": "Start your first study",
  "cta.secondary": "Become a participant",

  "about.title": "About University of Exchange",
  "about.subtitle": "We believe better research starts with better participation.",
  "about.mission.title": "Our mission",
  "about.mission.desc": "Remove the friction between researchers and the people who make research possible — participants. We build tools that respect everyone's time and produce data worth trusting.",
  "about.vision.title": "Our vision",
  "about.vision.desc": "A world where every study, from a student thesis to a multi-university trial, can find its perfect participants in days, not months — and where contributing to science is genuinely rewarding.",
  "about.values.title": "What we value",
  "about.value.1.title": "Data integrity",
  "about.value.1.desc": "Quality signals over quantity. Every response should be trustworthy.",
  "about.value.2.title": "Participant respect",
  "about.value.2.desc": "People's time is valuable. Experiences should be worth finishing.",
  "about.value.3.title": "Open access",
  "about.value.3.desc": "Research tooling shouldn't be locked behind expensive licenses.",
  "about.value.4.title": "Global by default",
  "about.value.4.desc": "Built bilingual from day one, for researchers and participants everywhere.",
  "about.story.title": "How we started",
  "about.story.p1": "UOE began inside a university lab where researchers spent more time chasing respondents than analyzing results. The team realized the problem wasn't a lack of willing participants — it was a lack of a bridge between the two sides.",
  "about.story.p2": "Today, UOE connects researchers, participants, and institutions across the world, with AI doing the matching, quality-checking, and wording improvements that used to take weeks of manual work.",
  "about.team.title": "The team",

  "researchers.title": "For Researchers",
  "researchers.subtitle": "Everything you need to design, launch, and trust a study.",
  "researchers.flow.title": "Your research workflow",
  "researchers.flow.1": "Create or upload your questionnaire",
  "researchers.flow.2": "Define your target population",
  "researchers.flow.3": "Let AI match and distribute",
  "researchers.flow.4": "Track responses in real time",
  "researchers.flow.5": "Analyze and export quality data",
  "researchers.benefits.title": "Why researchers choose UOE",
  "researchers.benefit.1.title": "Faster data collection",
  "researchers.benefit.1.desc": "Reach suitable participants in days instead of months.",
  "researchers.benefit.2.title": "Higher data quality",
  "researchers.benefit.2.desc": "AI flags random and suspicious responses before they reach your analysis.",
  "researchers.benefit.3.title": "Better questionnaire design",
  "researchers.benefit.3.desc": "Get instant suggestions to improve wording, structure, and completion rate.",
  "researchers.benefit.4.title": "One platform, end to end",
  "researchers.benefit.4.desc": "From creation to export, without juggling five different tools.",

  "participants.title": "For Participants",
  "participants.subtitle": "Turn your opinions into points, levels, and impact.",
  "participants.how.title": "How participation works",
  "participants.how.1": "Build your profile in two minutes",
  "participants.how.2": "Get matched to surveys that fit you",
  "participants.how.3": "Answer engaging, mobile-first surveys",
  "participants.how.4": "Earn points and climb the leaderboard",
  "participants.rewards.title": "Rewards that compound",
  "participants.rewards.desc": "The more you contribute quality answers, the more surveys you unlock and the higher you climb.",

  "create.title": "Create a survey",
  "create.subtitle": "Design an engaging questionnaire with AI assistance at every step.",
  "create.step.basics": "Basics",
  "create.step.questions": "Questions",
  "create.step.audience": "Audience",
  "create.step.review": "Review",
  "create.field.title.label": "Survey title",
  "create.field.title.ph": "e.g. Remote work habits in 2025",
  "create.field.desc.label": "Description",
  "create.field.desc.ph": "Tell participants what this research is about...",
  "create.field.category": "Category",
  "create.field.eta": "Estimated time",
  "create.field.eta.suffix": "minutes",
  "create.ai.title": "AI Survey Assistant",
  "create.ai.desc": "Let AI review your survey before you publish.",
  "create.ai.improve": "Improve wording",
  "create.ai.detect": "Detect ambiguity",
  "create.ai.predict": "Predict completion",
  "create.ai.suggest": "Suggest structure",
  "create.ai.run": "Run AI analysis",
  "create.ai.running": "Analyzing your survey...",
  "create.questions.label": "Questions",
  "create.questions.add": "Add question",
  "create.qtype.single": "Single choice",
  "create.qtype.multi": "Multiple choice",
  "create.qtype.text": "Short text",
  "create.qtype.scale": "Rating scale",
  "create.audience.label": "Target audience",
  "create.audience.age": "Age range",
  "create.audience.education": "Education level",
  "create.audience.location": "Location",
  "create.audience.interests": "Interests",
  "create.audience.sample": "Required sample size",
  "create.review.title": "Review & publish",
  "create.review.publish": "Publish survey",
  "create.review.draft": "Save as draft",

  "dashboard.researcher.title": "Researcher Dashboard",
  "dashboard.researcher.welcome": "Welcome back, Dr. Sadeghi",
  "dashboard.participant.title": "Participant Dashboard",
  "dashboard.participant.welcome": "Welcome back, Niloofar",
  "dashboard.analytics.title": "Analytics",
  "dashboard.nav.overview": "Overview",
  "dashboard.nav.surveys": "Surveys",
  "dashboard.nav.responses": "Responses",
  "dashboard.nav.audience": "Audience",
  "dashboard.nav.quality": "Data quality",
  "dashboard.nav.reports": "Reports",
  "dashboard.nav.settings": "Settings",
  "dash.stat.active": "Active surveys",
  "dash.stat.responses": "Total responses",
  "dash.stat.completion": "Completion rate",
  "dash.stat.quality": "Avg. data quality",
  "dash.recent.title": "Recent responses",
  "dash.response.chart": "Responses over time",
  "dash.quality.chart": "Quality distribution",
  "dash.demographics.title": "Demographics",
  "dash.my.surveys": "My surveys",
  "dash.completed": "Completed surveys",
  "dash.points": "Points",
  "dash.level": "Level",
  "dash.badges": "Badges",
  "dash.rank": "Global rank",
  "dash.available": "Available surveys",
  "dash.recommended": "Recommended for you",

  "blog.title": "The UOE Blog",
  "blog.subtitle": "Research methods, product updates, and stories from the field.",
  "blog.readmore": "Read more",
  "blog.min": "min read",

  "auth.login.title": "Welcome back",
  "auth.login.subtitle": "Log in to continue your research journey.",
  "auth.register.title": "Create your account",
  "auth.register.subtitle": "Join the research exchange in under a minute.",
  "auth.email": "Email",
  "auth.password": "Password",
  "auth.name": "Full name",
  "auth.google": "Continue with Google",
  "auth.or": "or",
  "auth.switch.login": "Already have an account? Log in",
  "auth.switch.register": "Don't have an account? Sign up",
  "auth.submit.login": "Log in",
  "auth.submit.register": "Create account",

  "footer.tagline": "The bridge between researchers and real participants.",
  "footer.product": "Product",
  "footer.company": "Company",
  "footer.resources": "Resources",
  "footer.legal": "Legal",
  "footer.rights": "All rights reserved.",
  "footer.about": "About",
  "footer.careers": "Careers",
  "footer.contact": "Contact",
  "footer.docs": "Documentation",
  "footer.api": "API reference",
  "footer.status": "System status",
  "footer.privacy": "Privacy",
  "footer.terms": "Terms",
  "footer.security": "Security",

  "common.learnMore": "Learn more",
  "common.getStarted": "Get started",
  "common.viewAll": "View all",
  "common.back": "Back to home",
};

const fa: Dict = {
  "nav.home": "خانه",
  "nav.about": "درباره ما",
  "nav.researchers": "برای پژوهشگران",
  "nav.participants": "برای شرکت‌کنندگان",
  "nav.marketplace": "بازار پرسشنامه‌ها",
  "nav.pricing": "قیمت‌گذاری",
  "nav.blog": "بلاگ",
  "nav.dashboard": "داشبورد",
  "nav.login": "ورود",
  "nav.start": "شروع پژوهش",
  "nav.participate": "شرکت در پرسشنامه‌ها",
  "brand.name": "UOE",
  "brand.full": "دانشگاه تبادل",

  "hero.badge": "اکنون در نسخه عمومی — پژوهش مبتنی بر هوش مصنوعی",
  "hero.title": "دانشگاه تبادل",
  "hero.subtitle": "پل ارتباطی بین پژوهشگران و جامعه آماری",
  "hero.description":
    "پژوهش‌های بهتر با پاسخ‌دهندگان واقعی، داده‌های باکیفیت‌تر و تجربه‌ای جذاب‌تر. پژوهش را سریع‌تر، هوشمندتر و جذاب‌تر از طریق مشارکت باکیفیت در پرسشنامه‌ها می‌سازیم.",
  "hero.cta.primary": "شروع پژوهش",
  "hero.cta.secondary": "شرکت در پرسشنامه‌ها",
  "hero.stat.responses": "پاسخ جمع‌آوری‌شده",
  "hero.stat.researchers": "پژوهشگر فعال",
  "hero.stat.completion": "میانگین نرخ تکمیل",
  "hero.stat.universities": "دانشگاه همکار",
  "hero.illustration.title": "تبادل پژوهش",
  "hero.illustration.researcher": "پژوهشگر",
  "hero.illustration.participant": "شرکت‌کننده",
  "hero.illustration.data": "داده باکیفیت",
  "hero.illustration.ai": "تحلیل هوش مصنوعی",
  "hero.scroll": "برای کاوش اسکرول کنید",

  "problem.title": "پژوهش سخت‌تر از آن است که باید باشد",
  "problem.subtitle": "چهار مشکلی که امروز بی‌صدا پژوهش دانشگاهی را می‌شکند.",
  "problem.1.title": "یافتن شرکت‌کننده سخت است",
  "problem.1.desc": "پژوهشگران در یافتن جامعه آماری مناسب برای مطالعات خود دچار مشکل هستند.",
  "problem.2.title": "پرسشنامه‌های خسته‌کننده",
  "problem.2.desc": "شرکت‌کنندگان هنگام پاسخ به فرم‌های طولانی و خسته‌کننده انگیزه خود را از دست می‌دهند.",
  "problem.3.title": "پاسخ‌های بی‌کیفیت",
  "problem.3.desc": "کاربران بی‌انگیزه پاسخ‌های تصادفی می‌دهند که داده‌ها را آلوده می‌کند.",
  "problem.4.title": "اتلاف زیاد زمان",
  "problem.4.desc": "پژوهشگران هفته‌ها برای جمع‌آوری داده وقت می‌گذارند به‌جای تحلیل آن.",

  "solution.title": "راه‌حل UOE",
  "solution.subtitle": "پلتفرمی که پرسشنامه‌های سنتی را به تجربه‌ای جذاب و تعاملی تبدیل می‌کند و پژوهشگران را به شرکت‌کنندگان مناسب متصل می‌سازد.",
  "solution.1.title": "تطابق هوشمند",
  "solution.1.desc": "هوش مصنوعی هر پرسشنامه را به شرکت‌کنندگانی متصل می‌کند که محتمل‌ترین پاسخ‌های معنادار را دارند.",
  "solution.2.title": "تجربه جذاب",
  "solution.2.desc": "کارت‌های تعاملی، انیمیشن پیشرفت و میکروتعامل‌ها، شرکت‌کنندگان را پرانگیزه نگه می‌دارند.",
  "solution.3.title": "سیگنال‌های کیفیت",
  "solution.3.desc": "هوش مصنوعی پاسخ‌های تصادفی یا مشکوک را تشخیص می‌دهد تا پژوهشگران به داده خود اعتماد کنند.",
  "solution.4.title": "اکوسیستم پاداش",
  "solution.4.desc": "امتیاز، سطح و نشان، مشارکت را به سفری تبدیل می‌کند که مردم می‌خواهند ادامه دهند.",

  "personas.title": "برای همه در چرخه پژوهش ساخته شده",
  "personas.subtitle": "سه نقش، یک اکوسیستم متصل که پژوهش را به‌جلو می‌برد.",
  "persona.researcher.title": "پژوهشگران",
  "persona.researcher.tag": "طراحی و تحلیل",
  "persona.researcher.desc": "مطالعات خود را با ابزارهای مبتنی بر هوش مصنوعی و جمعیت واقعی شرکت‌کنندگان بسازید، اجرا و تحلیل کنید.",
  "persona.researcher.f1": "ایجاد پرسشنامه",
  "persona.researcher.f2": "بارگذاری پرسشنامه موجود",
  "persona.researcher.f3": "تعریف جامعه هدف",
  "persona.researcher.f4": "انتخاب الزامات جمعیت‌شناختی",
  "persona.researcher.f5": "برآورد حجم نمونه موردنیاز",
  "persona.researcher.f6": "رهگیری پاسخ‌ها به‌صورت لحظه‌ای",
  "persona.researcher.f7": "تحلیل کیفیت داده",
  "persona.researcher.f8": "خروجی نتایج",
  "persona.researcher.cta": "باز کردن داشبورد پژوهشگر",

  "persona.participant.title": "شرکت‌کنندگان",
  "persona.participant.tag": "کسب پاداش و مشارکت",
  "persona.participant.desc": "پرسشنامه‌هایی که با شما تطابق دارند را کشف کنید، پاداش بگیرید و پروفایلی به‌عنوان مشارکت‌کننده قابل‌اعتماد بسازید.",
  "persona.participant.f1": "کشف پرسشنامه‌های موجود",
  "persona.participant.f2": "کسب امتیاز و پاداش",
  "persona.participant.f3": "تکمیل پرسشنامه‌های جذاب",
  "persona.participant.f4": "ساخت پروفایل شرکت‌کننده",
  "persona.participant.f5": "رهگیری پرسشنامه‌های تکمیل‌شده",
  "persona.participant.cta": "کاوش در بازار پرسشنامه‌ها",

  "persona.org.title": "دانشگاه‌ها و سازمان‌ها",
  "persona.org.tag": "مقیاس‌پذیری و حاکمیت",
  "persona.org.desc": "سبد پژوهش را در میان تیم‌ها مدیریت کنید، شرکت‌کنندگان را دعوت کنید و گزارش‌های نهادی تولید کنید.",
  "persona.org.f1": "داشبورد نهادی",
  "persona.org.f2": "مدیریت پروژه‌های پژوهشی",
  "persona.org.f3": "دعوت از شرکت‌کنندگان",
  "persona.org.f4": "تولید گزارش",
  "persona.org.cta": "گفتگو با ما",

  "survey.title": "پرسشنامه‌ها، از نو طراحی شدند",
  "survey.subtitle": "از فرم‌های خسته‌کننده تا تجربه‌ای که مردم واقعاً تمام می‌کنند.",
  "survey.before": "فرم سنتی",
  "survey.after": "تجربه UOE",
  "survey.progress.label": "سفر پژوهش",
  "survey.eta": "تقریباً ۲ دقیقه باقی مانده",
  "survey.q.title": "چقدر از ابزارهای هوش مصنوعی در کار روزمره خود استفاده می‌کنید؟",
  "survey.q.desc": "گزینه‌ای که بهترین توصیف از عادات فعلی شماست را انتخاب کنید.",
  "survey.q.opt1": "هر روز",
  "survey.q.opt2": "چند بار در هفته",
  "survey.q.opt3": "گاهی اوقات",
  "survey.q.opt4": "تقریباً هیچ‌وقت",
  "survey.q.next": "سؤال بعدی",
  "survey.q.back": "بازگشت",
  "survey.q.motivation": "عالی پیش می‌روید! ۳۰٪ از این سفر پژوهشی را تکمیل کردید.",
  "survey.feature.progress": "انیمیشن پیشرفت",
  "survey.feature.eta": "زمان تخمینی تکمیل",
  "survey.feature.cards": "کارت‌های تعاملی",
  "survey.feature.micro": "میکروانیمیشن‌های دوستانه",
  "survey.feature.gamify": "عناصر گیمیفیکیشن",
  "survey.feature.mobile": "طراحی موبایل‌محور",

  "ai.title": "هوش مصنوعی که پژوهش را بهتر می‌کند",
  "ai.subtitle": "سه لایه هوش که پشت هر پرسشنامه کار می‌کنند.",
  "ai.assistant.title": "دستیار پرسشنامه هوشمند",
  "ai.assistant.desc": "نويسندگی را پیش از انتشار بهبود دهید، نه بعد از جمع‌آوری.",
  "ai.assistant.f1": "بهبود ادبیات پرسشنامه",
  "ai.assistant.f2": "تشخیص سؤالات مبهم",
  "ai.assistant.f3": "پیشنهاد ساختار بهتر",
  "ai.assistant.f4": "پیش‌بینی نرخ تکمیل",
  "ai.quality.title": "کیفیت داده با هوش مصنوعی",
  "ai.quality.desc": "با فیلتر خودکار نویز، به مجموعه داده خود اعتماد کنید.",
  "ai.quality.f1": "تشخیص پاسخ‌های تصادفی",
  "ai.quality.f2": "شناسایی پاسخ‌های مشکوک",
  "ai.quality.f3": "تحلیل الگوهای پاسخ",
  "ai.matching.title": "تطابق با هوش مصنوعی",
  "ai.matching.desc": "هر پرسشنامه را به شرکت‌کنندگانی بفرستید که واقعاً می‌توانند پاسخ دهند.",
  "ai.matching.f1": "سن",
  "ai.matching.f2": "تحصیلات",
  "ai.matching.f3": "موقعیت مکانی",
  "ai.matching.f4": "علایق و معیارهای پژوهش",

  "gamify.title": "مشارکتی که مانند پیشرفت احساس می‌شود",
  "gamify.subtitle": "لایه‌ای گیمیفای‌شده که پاسخ‌دهندگان را از اولین تا صدمین پرسشنامه درگیر نگه می‌دارد.",
  "gamify.points": "امتیاز",
  "gamify.points.desc": "برای هر پرسشنامه تکمیل‌شده و پاسخ باکیفیت امتیاز بگیرید.",
  "gamify.levels": "سطح",
  "gamify.levels.desc": "از مشارکت‌کننده تازه‌کار تا پژوهشگر استر صعود کنید.",
  "gamify.badges": "نشان‌ها",
  "gamify.badges.desc": "دستاوردهایی برای پشت‌سرهم، حوزه‌های تخصصی و نقاط عطف باز کنید.",
  "gamify.leaderboard": "جدول رده‌بندی",
  "gamify.leaderboard.desc": "ببینید در میان مشارکت‌کنندگان سراسر جهان کجا ایستاده‌اید.",
  "gamify.example": "۵ پرسشنامه را تکمیل کنید و سطح ۲ پژوهشگر را باز کنید",
  "gamify.level.label": "سطح ۲ پژوهشگر",
  "gamify.next.level": "۱۲۰ امتیاز تا سطح ۳",

  "marketplace.title": "بازار پرسشنامه‌ها",
  "marketplace.subtitle": "پرسشنامه‌های زنده منطبق با پروفایل شما. با یک ضربه ملحق شوید.",
  "marketplace.filter.all": "همه",
  "marketplace.filter.health": "سلامت",
  "marketplace.filter.education": "آموزش",
  "marketplace.filter.social": "اجتماعی",
  "marketplace.filter.tech": "فناوری",
  "marketplace.filter.business": "کسب‌وکار",
  "marketplace.reward": "پاداش",
  "marketplace.minutes": "دقیقه",
  "marketplace.questions": "سؤال",
  "marketplace.join": "ملحق شدن به پرسشنامه",
  "marketplace.participants": "نفر ملحق شده",

  "pricing.title": "قیمت‌گذاری ساده برای پژوهش جدی",
  "pricing.subtitle": "رایگان شروع کنید. هنگام مقیاس‌پذیری پژوهش ارتقا دهید.",
  "pricing.monthly": "ماهانه",
  "pricing.yearly": "سالانه",
  "pricing.save": "۲۰٪ تخفیف",
  "pricing.free": "رایگان",
  "pricing.researcher.name": "پژوهشگر",
  "pricing.researcher.desc": "برای پژوهشگران فردی که نخستین مطالعات خود را اجرا می‌کنند.",
  "pricing.team.name": "تیم",
  "pricing.team.desc": "برای گروه‌ها و آزمایشگاه‌های پژوهشی که روی چند پروژه همکاری می‌کنند.",
  "pricing.enterprise.name": "سازمانی",
  "pricing.enterprise.desc": "برای دانشگاه‌ها و نهادهایی که پژوهش را در مقیاس مدیریت می‌کنند.",
  "pricing.cta": "شروع کنید",
  "pricing.cta.current": "طرح فعلی",
  "pricing.popular": "محبوب‌ترین",

  "stats.title": "مورد اعتماد جامعه پژوهش",
  "stats.responses": "پاسخ جمع‌آوری‌شده",
  "stats.researchers": "پژوهشگر فعال",
  "stats.universities": "دانشگاه همکار",
  "stats.countries": "کشور",

  "cta.title": "آماده اجرای پژوهش بهتر هستید؟",
  "cta.subtitle": "به هزاران پژوهشگر و شرکت‌کننده بپیوندید که آینده جمع‌آوری داده دانشگاهی را می‌سازند.",
  "cta.primary": "اولین مطالعه خود را آغاز کنید",
  "cta.secondary": "شرکت‌کننده شوید",

  "about.title": "درباره دانشگاه تبادل",
  "about.subtitle": "باور داریم پژوهش بهتر با مشارکت بهتر آغاز می‌شود.",
  "about.mission.title": "مأموریت ما",
  "about.mission.desc": "اصطکاک میان پژوهشگران و کسانی که پژوهش را ممکن می‌کنند — شرکت‌کنندگان — را از بین ببریم. ابزارهایی می‌سازیم که به زمان همه احترام می‌گذارند و داده‌ای ارزش اعتماد تولید می‌کنند.",
  "about.vision.title": "چشم‌انداز ما",
  "about.vision.desc": "جهانی که در آن هر مطالعه، از پایان‌نامه دانشجویی تا کارآزمایی چنددانشگاهی، بتواند در روزها نه ماه، شرکت‌کنندگان مناسب خود را بیابد — و مشارکت در علم واقعاً پاداش‌دهنده باشد.",
  "about.values.title": "ارزش‌های ما",
  "about.value.1.title": "یکپارچگی داده",
  "about.value.1.desc": "سیگنال کیفیت بر کمیت. هر پاسخ باید قابل‌اعتماد باشد.",
  "about.value.2.title": "احترام به شرکت‌کننده",
  "about.value.2.desc": "زمان افراد ارزشمند است. تجربه‌ها باید ارزش تمام شدن داشته باشند.",
  "about.value.3.title": "دسترسی باز",
  "about.value.3.desc": "ابزار پژوهش نباید پشت لایسنس‌های گران قفل شود.",
  "about.value.4.title": "جهانی از روز نخست",
  "about.value.4.desc": "دوزبانه از ابتدا، برای پژوهشگران و شرکت‌کنندگان همه‌جا.",
  "about.story.title": "چگونه شروع کردیم",
  "about.story.p1": "UOE درون یک آزمایشگاه دانشگاهی آغاز شد، جایی که پژوهشگران زمان بیشتری را به دنبال‌کردن پاسخ‌دهندگان صرف می‌کردند تا تحلیل نتایج. تیم متوجه شد مشکل کمبود شرکت‌کنندگان مایل نیست — فقدان پلی میان دو طرف است.",
  "about.story.p2": "امروز UOE پژوهشگران، شرکت‌کنندگان و نهادها را در سراسر جهان متصل می‌کند، و هوش مصنوعی کار تطابق، کنترل کیفیت و بهبود نگارش را انجام می‌دهد که پیش‌تر هفته‌ها کار دستی می‌برد.",
  "about.team.title": "تیم ما",

  "researchers.title": "برای پژوهشگران",
  "researchers.subtitle": "هر آنچه برای طراحی، اجرا و اعتماد به یک مطالعه نیاز دارید.",
  "researchers.flow.title": "گردش کار پژوهش شما",
  "researchers.flow.1": "پرسشنامه بسازید یا بارگذاری کنید",
  "researchers.flow.2": "جامعه هدف را تعریف کنید",
  "researchers.flow.3": "هوش مصنوعی تطبیق و توزیع می‌کند",
  "researchers.flow.4": "پاسخ‌ها را لحظه‌ای رهگیری کنید",
  "researchers.flow.5": "داده باکیفیت را تحلیل و خروجی بگیرید",
  "researchers.benefits.title": "چرا پژوهشگران UOE را انتخاب می‌کنند",
  "researchers.benefit.1.title": "جمع‌آوری داده سریع‌تر",
  "researchers.benefit.1.desc": "در روزها نه ماه به شرکت‌کنندگان مناسب برسید.",
  "researchers.benefit.2.title": "کیفیت داده بالاتر",
  "researchers.benefit.2.desc": "هوش مصنوعی پاسخ‌های تصادفی و مشکوک را پیش از رسیدن به تحلیل علامت می‌زند.",
  "researchers.benefit.3.title": "طراحی بهتر پرسشنامه",
  "researchers.benefit.3.desc": "پیشنهادهای فوری برای بهبود نگارش، ساختار و نرخ تکمیل بگیرید.",
  "researchers.benefit.4.title": "یک پلتفرم، سرتاسر مسیر",
  "researchers.benefit.4.desc": "از ایجاد تا خروجی، بدون جابجایی میان پنج ابزار مختلف.",

  "participants.title": "برای شرکت‌کنندگان",
  "participants.subtitle": "نظرات خود را به امتیاز، سطح و تأثیر تبدیل کنید.",
  "participants.how.title": "مشارکت چگونه کار می‌کند",
  "participants.how.1": "پروفایل خود را در دو دقیقه بسازید",
  "participants.how.2": "پرسشنامه‌های منطبق با خود دریافت کنید",
  "participants.how.3": "به پرسشنامه‌های جذاب و موبایل‌محور پاسخ دهید",
  "participants.how.4": "امتیاز بگیرید و در جدول رده‌بندی صعود کنید",
  "participants.rewards.title": "پاداش‌هایی که انباشته می‌شوند",
  "participants.rewards.desc": "هرچه پاسخ باکیفیت‌تری بدهید، پرسشنامه‌های بیشتری باز می‌شود و بالاتر صعود می‌کنید.",

  "create.title": "ایجاد پرسشنامه",
  "create.subtitle": "پرسشنامه‌ای جذاب با کمک هوش مصنوعی در هر گام طراحی کنید.",
  "create.step.basics": "پایه",
  "create.step.questions": "سؤالات",
  "create.step.audience": "جامعه",
  "create.step.review": "بازبینی",
  "create.field.title.label": "عنوان پرسشنامه",
  "create.field.title.ph": "مثلاً عادات کار از راه دور در ۲۰۲۵",
  "create.field.desc.label": "توضیحات",
  "create.field.desc.ph": "به شرکت‌کنندگان بگویید این پژوهش درباره چیست...",
  "create.field.category": "دسته‌بندی",
  "create.field.eta": "زمان تخمینی",
  "create.field.eta.suffix": "دقیقه",
  "create.ai.title": "دستیار پرسشنامه هوشمند",
  "create.ai.desc": "بگذارید هوش مصنوعی پیش از انتشار پرسشنامه‌تان را بررسی کند.",
  "create.ai.improve": "بهبود نگارش",
  "create.ai.detect": "تشخیص ابهام",
  "create.ai.predict": "پیش‌بینی تکمیل",
  "create.ai.suggest": "پیشنهاد ساختار",
  "create.ai.run": "اجرای تحلیل هوش مصنوعی",
  "create.ai.running": "در حال تحلیل پرسشنامه شما...",
  "create.questions.label": "سؤالات",
  "create.questions.add": "افزودن سؤال",
  "create.qtype.single": "تک‌گزینه‌ای",
  "create.qtype.multi": "چندگزینه‌ای",
  "create.qtype.text": "متن کوتاه",
  "create.qtype.scale": "مقیاس امتیاز",
  "create.audience.label": "جامعه هدف",
  "create.audience.age": "بازه سنی",
  "create.audience.education": "سطح تحصیلات",
  "create.audience.location": "موقعیت مکانی",
  "create.audience.interests": "علایق",
  "create.audience.sample": "حجم نمونه موردنیاز",
  "create.review.title": "بازبینی و انتشار",
  "create.review.publish": "انتشار پرسشنامه",
  "create.review.draft": "ذخیره به‌عنوان پیش‌نویس",

  "dashboard.researcher.title": "داشبورد پژوهشگر",
  "dashboard.researcher.welcome": "خوش آمدید، دکتر صادقی",
  "dashboard.participant.title": "داشبورد شرکت‌کننده",
  "dashboard.participant.welcome": "خوش آمدید، نیلوفر",
  "dashboard.analytics.title": "تحلیل‌ها",
  "dashboard.nav.overview": "نمای کلی",
  "dashboard.nav.surveys": "پرسشنامه‌ها",
  "dashboard.nav.responses": "پاسخ‌ها",
  "dashboard.nav.audience": "جامعه",
  "dashboard.nav.quality": "کیفیت داده",
  "dashboard.nav.reports": "گزارش‌ها",
  "dashboard.nav.settings": "تنظیمات",
  "dash.stat.active": "پرسشنامه فعال",
  "dash.stat.responses": "کل پاسخ‌ها",
  "dash.stat.completion": "نرخ تکمیل",
  "dash.stat.quality": "میانگین کیفیت داده",
  "dash.recent.title": "پاسخ‌های اخیر",
  "dash.response.chart": "پاسخ‌ها در زمان",
  "dash.quality.chart": "توزیع کیفیت",
  "dash.demographics.title": "جمعیت‌شناسی",
  "dash.my.surveys": "پرسشنامه‌های من",
  "dash.completed": "پرسشنامه‌های تکمیل‌شده",
  "dash.points": "امتیاز",
  "dash.level": "سطح",
  "dash.badges": "نشان‌ها",
  "dash.rank": "رتبه جهانی",
  "dash.available": "پرسشنامه‌های موجود",
  "dash.recommended": "پیشنهادی برای شما",

  "blog.title": "بلاگ UOE",
  "blog.subtitle": "روش‌های پژوهش، به‌روزرسانی‌های محصول و داستان‌هایی از میدان.",
  "blog.readmore": "ادامه مطلب",
  "blog.min": "دقیقه مطالعه",

  "auth.login.title": "خوش آمدید",
  "auth.login.subtitle": "برای ادامه سفر پژوهشی خود وارد شوید.",
  "auth.register.title": "حساب خود را بسازید",
  "auth.register.subtitle": "در کمتر از یک دقیقه به تبادل پژوهش بپیوندید.",
  "auth.email": "ایمیل",
  "auth.password": "رمز عبور",
  "auth.name": "نام و نام خانوادگی",
  "auth.google": "ادامه با گوگل",
  "auth.or": "یا",
  "auth.switch.login": "حساب دارید؟ وارد شوید",
  "auth.switch.register": "حساب ندارید؟ ثبت‌نام کنید",
  "auth.submit.login": "ورود",
  "auth.submit.register": "ایجاد حساب",

  "footer.tagline": "پل ارتباطی بین پژوهشگران و پاسخ‌دهندگان واقعی.",
  "footer.product": "محصول",
  "footer.company": "شرکت",
  "footer.resources": "منابع",
  "footer.legal": "قانونی",
  "footer.rights": "تمامی حقوق محفوظ است.",
  "footer.about": "درباره ما",
  "footer.careers": "فرصت‌های شغلی",
  "footer.contact": "تماس",
  "footer.docs": "مستندات",
  "footer.api": "مرجع API",
  "footer.status": "وضعیت سیستم",
  "footer.privacy": "حریم خصوصی",
  "footer.terms": "قوانین",
  "footer.security": "امنیت",

  "common.learnMore": "بیشتر بدانید",
  "common.getStarted": "شروع کنید",
  "common.viewAll": "مشاهده همه",
  "common.back": "بازگشت به خانه",
};

export const translations: Record<Locale, Dict> = { en, fa };
