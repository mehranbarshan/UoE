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
  | "faq.badge"
  | "faq.title"
  | "faq.subtitle"
  | "faq.q1"
  | "faq.a1"
  | "faq.q2"
  | "faq.a2"
  | "faq.q3"
  | "faq.a3"
  | "faq.q4"
  | "faq.a4"
  | "faq.q5"
  | "faq.a5"
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
  | "create.options.title"
  | "create.options.subtitle"
  | "create.options.manual.tag"
  | "create.options.manual.title"
  | "create.options.manual.desc"
  | "create.options.library.tag"
  | "create.options.library.title"
  | "create.options.library.desc"
  | "create.options.ai.tag"
  | "create.options.ai.title"
  | "create.options.ai.desc"
  | "create.options.back"
  | "library.title"
  | "library.subtitle"
  | "library.search.placeholder"
  | "library.empty"
  | "library.reliability"
  | "library.validity"
  | "library.use"
  | "library.questions"
  | "library.report"
  | "library.report.done"
  | "create.ai.assistant.title"
  | "create.ai.assistant.subtitle"
  | "create.ai.assistant.placeholder"
  | "create.ai.assistant.generate"
  | "create.ai.assistant.generating"
  | "create.ai.assistant.suggested"
  | "create.ai.assistant.use"
  | "create.ai.assistant.prompt.ph"
  | "create.ai.badge"
  | "library.badge"
  | "create.field.title.required"
  | "library.estimatedTime"
  | "library.minutes"
  | "library.reference"
  | "create.ai.chat.inputPlaceholder"
  | "create.ai.chat.send"
  | "create.ai.chat.chip.more"
  | "create.ai.chat.chip.library"
  | "create.ai.chat.use"
  | "create.ai.chat.reply.generated"
  | "create.ai.chat.reply.more"
  | "create.ai.chat.reply.library"
  | "create.ai.chat.reply.fallback"
  | "create.guard.validity"
  | "create.guard.report"
  | "create.guard.reported"
  | "create.guard.confirm"
  | "dashboard.researcher.title"
  | "dashboard.researcher.welcome"
  | "dashboard.welcome"
  | "dashboard.participant.title"
  | "dashboard.participant.welcome"
  | "dashboard.analytics.title"
  | "dashboard.nav.overview"
  | "dashboard.nav.profile"
  | "dashboard.nav.credits"
  | "dashboard.nav.surveys"
  | "dashboard.nav.reports"
  | "dashboard.nav.settings"
  | "dashboard.nav.achievements"
  | "dash.stat.active"
  | "dash.stat.responses"
  | "dash.stat.completion"
  | "dash.stat.quality"
  | "dash.recent.title"
  | "dash.response.chart"
  | "dash.demographics.title"
  | "dash.my.surveys"
  | "dash.completed"
  | "dash.points"
  | "dash.level"
  | "dash.rank"
  | "dash.recommended"
  | "participant.settings.title"
  | "participant.profile.name"
  | "participant.profile.birthdate"
  | "participant.profile.gender"
  | "participant.profile.gender.male"
  | "participant.profile.gender.female"
  | "participant.profile.degree"
  | "participant.profile.city"
  | "participant.profile.city.tehran"
  | "participant.profile.city.isfahan"
  | "participant.profile.city.shiraz"
  | "participant.profile.city.mashhad"
  | "participant.profile.city.tabriz"
  | "participant.profile.city.other"
  | "participant.profile.job"
  | "participant.profile.job.student"
  | "participant.profile.job.employee"
  | "participant.profile.job.freelancer"
  | "participant.profile.job.teacher"
  | "participant.profile.job.researcher"
  | "participant.profile.job.other"
  | "participant.settings.profile"
  | "participant.settings.name"
  | "participant.settings.email"
  | "participant.settings.interests"
  | "participant.settings.interests.desc"
  | "participant.settings.notifications"
  | "participant.settings.notifications.surveys"
  | "participant.settings.notifications.rewards"
  | "participant.settings.notifications.reminders"
  | "participant.settings.save"
  | "profile.verified"
  | "profile.avatar.updated"
  | "profile.tab.personal"
  | "profile.tab.financial"
  | "profile.tab.security"
  | "profile.credits.balance"
  | "profile.credits.earned"
  | "profile.credits.validResponse"
  | "profile.credits.points"
  | "profile.credits.convert.title"
  | "profile.credits.convert.rate"
  | "profile.credits.convert.pointsLabel"
  | "profile.credits.convert.equivalent"
  | "profile.credits.convert.decrement"
  | "profile.credits.convert.increment"
  | "profile.credits.convert.cta"
  | "profile.credits.convert.success"
  | "profile.credits.convert.insufficient"
  | "profile.credits.purchase.title"
  | "profile.credits.package.100"
  | "profile.credits.package.500"
  | "profile.credits.package.1000"
  | "profile.credits.currency"
  | "profile.credits.purchase.cta"
  | "profile.credits.purchase.toast"
  | "profile.credits.recommended"
  | "profile.credits.discount"
  | "profile.credits.history"
  | "profile.credits.history.date"
  | "profile.credits.history.type"
  | "profile.credits.history.amount"
  | "profile.credits.history.status"
  | "profile.credits.history.success"
  | "profile.credits.history.convert"
  | "profile.credits.history.purchase"
  | "profile.personal.name"
  | "profile.personal.username"
  | "profile.personal.email"
  | "profile.personal.phone"
  | "profile.personal.university"
  | "profile.personal.field"
  | "profile.personal.degree"
  | "profile.degree.bachelor"
  | "profile.degree.highschool"
  | "profile.degree.master"
  | "profile.degree.phd"
  | "profile.degree.postdoc"
  | "profile.degree.other"
  | "profile.financial.bank"
  | "profile.financial.sheba"
  | "profile.financial.desc"
  | "profile.security.password"
  | "profile.security.current"
  | "profile.security.new"
  | "profile.security.confirm"
  | "profile.security.updated"
  | "profile.security.sessions"
  | "profile.security.device"
  | "profile.security.location"
  | "profile.security.currentSession"
  | "profile.security.revoke"
  | "profile.security.revoked"
  | "profile.save"
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
  | "common.back"
  | "common.back.researcher"
  | "common.back.participant"
  | "auth.join.ecosystem"
  | "auth.feature.researchers"
  | "auth.feature.assistant"
  | "auth.feature.matching"
  | "auth.feature.quality"
  | "auth.toast.login.success"
  | "auth.toast.register.success"
  | "auth.toast.google.connecting"
  | "auth.toast.google.success"
  | "auth.name.placeholder"
  | "valuegate.title"
  | "valuegate.title.survey"
  | "valuegate.title.publish"
  | "valuegate.title.general"
  | "valuegate.subtitle"
  | "valuegate.subtitle.publish"
  | "valuegate.subtitle.general"
  | "valuegate.google"
  | "valuegate.or"
  | "valuegate.email.placeholder"
  | "valuegate.email.cta"
  | "valuegate.unlock.1"
  | "valuegate.unlock.2"
  | "valuegate.unlock.3"
  | "valuegate.toast.google.connecting"
  | "valuegate.toast.google.success"
  | "valuegate.toast.email.sent"
  | "analytics.subtitle"
  | "analytics.export.report"
  | "analytics.export.toast"
  | "analytics.weekly"
  | "analytics.age.distribution"
  | "analytics.geographic"
  | "analytics.quality.flags"
  | "analytics.quality.excellent"
  | "analytics.flag.random"
  | "analytics.flag.suspicious"
  | "analytics.flag.speeders"
  | "analytics.flag.verified"
  | "dashboard.days.label"
  | "dashboard.status.active"
  | "dashboard.status.done"
  | "participants.next.level.hint"
  | "participants.profile.name"
  | "participant.filter.all"
  | "participant.filter.fastest"
  | "participant.filter.reward"
  | "participant.filter.matched"
  | "participant.cat.health"
  | "participant.cat.education"
  | "participant.cat.social"
  | "participant.cat.tech"
  | "participant.cat.business"
  | "participant.level.current"
  | "participant.level.next"
  | "participant.level.toNext"
  | "participant.level.remaining"
  | "participant.wallet.total"
  | "participant.wallet.convert"
  | "participant.wallet.withdraw"
  | "participant.wallet.withdraw.title"
  | "participant.wallet.withdraw.desc"
  | "participant.wallet.withdraw.confirm"
  | "participant.wallet.withdraw.success"
  | "participant.wallet.convert.success"
  | "participant.history.title"
  | "participant.history.earned"
  | "participant.history.report"
  | "participant.history.report.success"
  | "exchange.tab.packages"
  | "exchange.tab.rewards"
  | "exchange.tab.convert"
  | "exchange.packages.subtitle"
  | "exchange.package.responses"
  | "exchange.package.delivery"
  | "exchange.package.days"
  | "exchange.package.badge.popular"
  | "exchange.package.badge.discount"
  | "exchange.package.feature.ai"
  | "exchange.package.s1.f1"
  | "exchange.package.s1.f2"
  | "exchange.package.pro.f2"
  | "exchange.package.pro.f3"
  | "exchange.package.thesis.f1"
  | "exchange.package.thesis.f2"
  | "exchange.package.thesis.f3"
  | "exchange.package.order"
  | "exchange.toman"
  | "exchange.checkout.title"
  | "exchange.checkout.desc"
  | "exchange.checkout.package"
  | "exchange.checkout.delivery"
  | "exchange.checkout.price"
  | "exchange.checkout.confirm"
  | "exchange.checkout.success"
  | "exchange.rewards.subtitle"
  | "exchange.reward.points"
  | "exchange.reward.redeem"
  | "exchange.reward.insufficient"
  | "exchange.reward.min"
  | "exchange.reward.success"
  | "exchange.reward.1.title"
  | "exchange.reward.1.desc"
  | "exchange.reward.2.title"
  | "exchange.reward.2.desc"
  | "exchange.reward.3.title"
  | "exchange.reward.3.desc"
  | "exchange.convert.subtitle"
  | "exchange.convert.input.label"
  | "exchange.convert.output.responses"
  | "exchange.convert.ratio"
  | "exchange.convert.confirm"
  | "exchange.convert.success"
  | "exchange.convert.error.amount"
  | "exchange.convert.error.balance"
  | "exchange.balance"
  | "exchange.history.title"
  | "exchange.history.date"
  | "exchange.history.type"
  | "exchange.history.amount"
  | "exchange.history.status"
  | "exchange.history.status.success"
  | "exchange.history.status.pending"
  | "exchange.history.type.purchase"
  | "exchange.history.type.convert"
  | "exchange.history.type.payout"
  | "create.q.placeholder"
  | "create.toast.ai.complete"
  | "create.toast.published"
  | "create.toast.draft"
  | "create.review.untitled"
  | "create.ai.score"
  | "create.ai.ambiguity"
  | "create.ai.completion.label"
  | "create.edu.any"
  | "create.edu.highschool"
  | "create.edu.bachelor"
  | "create.edu.master"
  | "create.edu.phd"
  | "create.location.placeholder"
  | "create.interests.placeholder"
  | "create.time.estimate"
  | "marketplace.search.placeholder"
  | "marketplace.no.results"
  | "marketplace.match"
  | "marketplace.joined"
  | "pricing.trial.note"
  | "pricing.custom"
  | "pricing.mo"
  | "researchers.tools.title"
  | "about.team.mehran.name"
  | "about.team.mehran.role"
  | "about.team.hanieh.name"
  | "about.team.hanieh.role"
  | "footer.built"
  | "survey.comparison.old"
  | "survey.finish"
  | "survey.submit"
  | "survey.runner.title"
  | "survey.runner.back"
  | "gamify.badge.streak"
  | "gamify.badge.answers"
  | "gamify.badge.elite"
  | "gamify.badge.health"
  | "gamify.badge.points"
  | "gamify.badge.champion"
  | "gamify.player.name"
  | "templates.title"
  | "templates.subtitle"
  | "templates.use"
  | "templates.preview"
  | "trust.title"
  | "trust.subtitle"
  | "trust.score"
  | "trust.basedOn"
  | "trust.completion"
  | "trust.attention"
  | "trust.consistency"
  | "trust.timeBehavior"
  | "trust.history"
  | "academic.title"
  | "academic.subtitle"
  | "academic.citations"
  | "academic.hypothesis"
  | "academic.variables"
  | "academic.validation"
  | "academic.methodology"
  | "academic.scaleLibrary"
  | "analysis.title"
  | "analysis.subtitle"
  | "analysis.finding"
  | "analysis.test"
  | "analysis.effectSize"
  | "analysis.recommendation"
  | "university.title"
  | "university.subtitle"
  | "university.groups"
  | "university.departments"
  | "university.students"
  | "university.pool"
  | "university.analytics"
  | "university.repository"
  | "rewards.title"
  | "rewards.subtitle"
  | "rewards.earn"
  | "rewards.redeem"
  | "rewards.completion"
  | "rewards.quality"
  | "rewards.streak"
  | "rewards.referral"
  | "security.title"
  | "security.subtitle"
  | "security.gdpr"
  | "security.anonymization"
  | "security.consent"
  | "security.ethics"
  | "security.encryption"
  | "security.audit"
  | "create.qtype.likert"
  | "create.qtype.matrix"
  | "create.qtype.ranking"
  | "create.qtype.demographic"
  | "create.qtype.openended"
  | "create.qtype.file"
  | "create.qtype.consent"
  | "dash.header.support"
  | "dash.header.logout"
  | "dash.mode.researcher"
  | "dash.mode.participant"
  | "dash.wallet.title"
  | "dash.wallet.balance"
  | "dash.wallet.charge"
  | "dash.wallet.earn"
  | "dash.wallet.hint"
  | "dash.wallet.recharge.title"
  | "dash.wallet.recharge.desc"
  | "dash.wallet.recharge.confirm"
  | "dash.wallet.recharge.success"
  | "dash.status.live"
  | "dash.status.paused"
  | "dash.status.completed"
  | "dash.status.draft"
  | "dash.status.label"
  | "dash.export"
  | "dash.export.spss"
  | "dash.export.excel"
  | "dash.export.csv"
  | "dash.export.tooltip"
  | "dash.export.toast"
  | "dash.remaining"
  | "dash.pause"
  | "dash.resume"
  | "dash.pause.toast"
  | "dash.resume.toast"
  | "dash.share"
  | "dash.share.title"
  | "dash.share.directLink"
  | "dash.share.copyLink"
  | "dash.share.copied"
  | "dash.share.qr"
  | "dash.share.qr.hint"
  | "dash.share.telegram"
  | "dash.share.whatsapp"
  | "dash.share.email"
  | "dash.overview.recent"
  | "dash.responses.valid"
  | "dash.responses.suspect"
  | "dash.quality.flags"
  | "dash.quality.speed"
  | "dash.quality.random"
  | "dash.quality.suspect"
  | "dash.quality.review"
  | "dash.quality.aiNote"
  | "dash.reports.tabulation"
  | "dash.reports.insights"
  | "dash.reports.exportTitle"
  | "dash.reports.exportDesc"
  | "dash.reports.exportAll"
  | "dash.reports.variable"
  | "dash.reports.ageGroup"
  | "dash.reports.insight.1"
  | "dash.reports.insight.2"
  | "dash.reports.insight.3"
  | "dash.placeholder"
  | "dash.close"
  | "dash.survey.back"
  | "dash.survey.preview"
  | "dash.survey.duplicate"
  | "dash.survey.delete"
  | "dash.survey.delete.confirm.title"
  | "dash.survey.delete.confirm.desc"
  | "dash.survey.delete.confirm.btn"
  | "dash.survey.delete.success"
  | "dash.survey.duplicate.success"
  | "dash.survey.saved"
  | "dash.survey.metric.population"
  | "dash.survey.metric.responses"
  | "dash.survey.metric.views"
  | "dash.survey.metric.completion"
  | "dash.survey.tab.data"
  | "dash.survey.tab.charts"
  | "dash.survey.tab.settings"
  | "dash.survey.data.respondent"
  | "dash.survey.data.date"
  | "dash.survey.data.duration"
  | "dash.survey.data.quality"
  | "dash.survey.data.export"
  | "dash.survey.charts.distribution"
  | "dash.survey.charts.question"
  | "dash.survey.settings.audience"
  | "dash.survey.settings.params"
  | "dash.survey.settings.age"
  | "dash.survey.settings.gender"
  | "dash.survey.settings.education"
  | "dash.survey.settings.region"
  | "dash.survey.settings.questions"
  | "dash.survey.settings.target"
  | "dash.survey.settings.period"
  | "dash.survey.settings.save"
  | "dash.survey.preview.title"
  | "dash.survey.preview.hint"
  | "dash.survey.preview.done";

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

  "faq.badge": "Answers to your questions",
  "faq.title": "Frequently Asked Questions",
  "faq.subtitle": "Everything you need to know about how UOE works, answer exchange, and AI.",
  "faq.q1": "Is UOE free for researchers?",
  "faq.a1": "Yes! By participating in other researchers' questionnaires, you earn points (credits) and use them to publish your own questionnaire completely free. Special plans are also available to speed things up.",
  "faq.q2": "How do you ensure responses are real and valid?",
  "faq.a2": "UOE uses AI algorithms and behavioral signals to assess data quality. Bot responses, random clicking patterns, and unnatural response speeds are detected and removed from your final research output.",
  "faq.q3": "How does the smart exchange system work?",
  "faq.a3": "With each questionnaire you answer, points are added to your account based on your time and accuracy. This interactive system guarantees your questionnaire reaches exactly the statistical population you're targeting.",
  "faq.q4": "Can I create and edit questionnaires with AI?",
  "faq.a4": "Yes. The UOE AI assistant helps you build standard, scientifically validated questionnaires based on your research goals, or convert your existing questionnaire file directly into a smart form.",
  "faq.q5": "In what format can I receive the data output?",
  "faq.a5": "You can download collected data at any time in standard data-analysis formats such as Excel, CSV, and files ready to import into SPSS.",

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
  "create.options.title": "Choose your research creation method",
  "create.options.subtitle": "How do you want to design or choose your questionnaire?",
  "create.options.manual.tag": "Free design",
  "create.options.manual.title": "Step-by-step creation",
  "create.options.manual.desc": "Enter your questions and options manually and build your questionnaire structure.",
  "create.options.library.tag": "Validated & reliable",
  "create.options.library.title": "Choose from the standard bank",
  "create.options.library.desc": "Search among hundreds of scientifically validated standard questionnaires with a research profile.",
  "create.options.ai.tag": "Recommended ✨",
  "create.options.ai.title": "Smart creation with AI",
  "create.options.ai.desc": "Describe your paper title or research goal and AI will suggest the best questionnaires for you.",
  "create.options.back": "Back to options",
  "library.title": "Standard Questionnaire Bank",
  "library.subtitle": "Validated questionnaires with reliability & validity credentials",
  "library.search.placeholder": "Search questionnaires, topics or authors...",
  "library.empty": "No questionnaires found",
  "library.reliability": "Reliability",
  "library.validity": "Validity",
  "library.use": "Use this questionnaire",
  "library.questions": "questions",
  "library.report": "Report scientific issue",
  "library.report.done": "Your report has been submitted",
  "create.field.title.required": "Please enter the survey title",
  "library.estimatedTime": "Estimated time",
  "library.minutes": "min",
  "library.reference": "Reference paper",
  "create.ai.chat.inputPlaceholder": "Type your message...",
  "create.ai.chat.send": "Send",
  "create.ai.chat.chip.more": "Suggest more questions",
  "create.ai.chat.chip.library": "Match with standard library",
  "create.ai.chat.use": "Use these questions",
  "create.ai.chat.reply.generated": "Here are suggested questions for your topic:",
  "create.ai.chat.reply.more": "More questions on this topic:",
  "create.ai.chat.reply.library": "This standard questionnaire matches your topic:",
  "create.ai.chat.reply.fallback": "Please clarify your research topic.",
  "create.ai.assistant.title": "AI Research Assistant",
  "create.ai.assistant.subtitle": "Describe your thesis title or research goal and let AI draft the questionnaire",
  "create.ai.assistant.placeholder": "e.g. Investigating the effect of remote work on mental health...",
  "create.ai.assistant.generate": "Generate questionnaire",
  "create.ai.assistant.generating": "AI is generating questions...",
  "create.ai.assistant.suggested": "Suggested questions",
  "create.ai.assistant.use": "Use these questions",
  "create.ai.assistant.prompt.ph": "Your research topic or goal...",
  "create.guard.validity": "Changing or removing this question may affect the reliability and validity of the standard questionnaire.",
  "create.guard.report": "Report scientific issue",
  "create.guard.reported": "Your report has been submitted to the science team.",
  "create.guard.confirm": "Delete anyway",
  "create.ai.badge": "AI suggested",
  "library.badge": "Standard library",

  "dashboard.researcher.title": "Researcher Dashboard",
  "dashboard.researcher.welcome": "Welcome back, Dr. Sadeghi",
  "dashboard.welcome": "Welcome!",
  "dashboard.participant.title": "Participant Dashboard",
  "dashboard.participant.welcome": "Welcome back, Niloofar",
  "dashboard.analytics.title": "Analytics",
  "dashboard.nav.overview": "Overview",
  "dashboard.nav.profile": "My Profile",
  "dashboard.nav.credits": "Credits & Wallet",
  "dashboard.nav.surveys": "Surveys",
  "dashboard.nav.reports": "Reports",
  "dashboard.nav.settings": "Settings",
  "dashboard.nav.achievements": "Achievements",
  "dash.stat.active": "Active surveys",
  "dash.stat.responses": "Total responses",
  "dash.stat.completion": "Completion rate",
  "dash.stat.quality": "Data quality",
  "dash.recent.title": "Recent responses",
  "dash.response.chart": "Responses over time",
  "dash.demographics.title": "Demographics",
  "dash.my.surveys": "My surveys",
  "dash.completed": "Completed surveys",
  "dash.points": "Points",
  "dash.level": "Level",
  "dash.rank": "Global rank",
  "dash.recommended": "Recommended for you",
  "participant.settings.title": "Account settings",
  "participant.profile.name": "Full name",
  "participant.profile.birthdate": "Date of birth",
  "participant.profile.gender": "Gender",
  "participant.profile.gender.male": "Male",
  "participant.profile.gender.female": "Female",
  "participant.profile.degree": "Education level",
  "participant.profile.city": "City",
  "participant.profile.city.tehran": "Tehran",
  "participant.profile.city.isfahan": "Isfahan",
  "participant.profile.city.shiraz": "Shiraz",
  "participant.profile.city.mashhad": "Mashhad",
  "participant.profile.city.tabriz": "Tabriz",
  "participant.profile.city.other": "Other",
  "participant.profile.job": "Occupation",
  "participant.profile.job.student": "Student",
  "participant.profile.job.employee": "Employee",
  "participant.profile.job.freelancer": "Freelancer",
  "participant.profile.job.teacher": "Teacher",
  "participant.profile.job.researcher": "Researcher",
  "participant.profile.job.other": "Other",
  "participant.settings.profile": "Profile",
  "participant.settings.name": "Full name",
  "participant.settings.email": "Email",
  "participant.settings.interests": "Interest preferences",
  "participant.settings.interests.desc": "Choose surveys matched to your interests.",
  "participant.settings.notifications": "Notifications",
  "participant.settings.notifications.surveys": "New surveys",
  "participant.settings.notifications.rewards": "Rewards & points",
  "participant.settings.notifications.reminders": "Completion reminders",
  "participant.settings.save": "Save changes",
  "profile.verified": "Verified researcher",
  "profile.avatar.updated": "Profile picture updated.",
  "profile.tab.personal": "Personal info",
  "profile.tab.financial": "Financial info",
  "profile.tab.security": "Security",
  "profile.credits.balance": "Research credit balance",
  "profile.credits.earned": "Points earned from answering (as a participant)",
  "profile.credits.validResponse": "valid responses",
  "profile.credits.points": "points",
  "profile.credits.convert.title": "Convert points to credits",
  "profile.credits.convert.rate": "Each valid response = 50 participant points",
  "profile.credits.convert.pointsLabel": "Responses to convert",
  "profile.credits.convert.equivalent": "Equals",
  "profile.credits.convert.decrement": "Decrease",
  "profile.credits.convert.increment": "Increase",
  "profile.credits.convert.cta": "Convert points to credits",
  "profile.credits.convert.success": "Points converted successfully.",
  "profile.credits.convert.insufficient": "Not enough points.",
  "profile.credits.purchase.title": "Buy credit online",
  "profile.credits.package.100": "100-response pack",
  "profile.credits.package.500": "500-response pack (recommended)",
  "profile.credits.package.1000": "1,000-response pack (thesis special)",
  "profile.credits.currency": "Toman",
  "profile.credits.purchase.cta": "Pay",
  "profile.credits.purchase.toast": "Payment completed successfully.",
  "profile.credits.recommended": "Recommended",
  "profile.credits.discount": "Discount",
  "profile.credits.history": "Transaction history",
  "profile.credits.history.date": "Date",
  "profile.credits.history.type": "Operation",
  "profile.credits.history.amount": "Amount",
  "profile.credits.history.status": "Status",
  "profile.credits.history.success": "Successful",
  "profile.credits.history.convert": "Points conversion",
  "profile.credits.history.purchase": "Credit purchase",
  "profile.personal.name": "Full name",
  "profile.personal.username": "Username",
  "profile.personal.email": "Email",
  "profile.personal.phone": "Phone",
  "profile.personal.university": "University / Institute",
  "profile.personal.field": "Field of study",
  "profile.personal.degree": "Academic qualification",
  "profile.degree.highschool": "High school / Pre-university",
  "profile.degree.bachelor": "Bachelor's",
  "profile.degree.master": "Master's",
  "profile.degree.phd": "PhD",
  "profile.degree.postdoc": "Postdoc / Faculty",
  "profile.degree.other": "Other",
  "profile.financial.bank": "Bank name",
  "profile.financial.sheba": "Bank IBAN (SHABA)",
  "profile.financial.desc": "Used for rewards withdrawal and refund processing.",
  "profile.security.password": "Change password",
  "profile.security.current": "Current password",
  "profile.security.new": "New password",
  "profile.security.confirm": "Confirm new password",
  "profile.security.updated": "Password updated successfully.",
  "profile.security.sessions": "Active sessions",
  "profile.security.device": "Device",
  "profile.security.location": "Location",
  "profile.security.currentSession": "Current session",
  "profile.security.revoke": "Revoke session",
  "profile.security.revoked": "Session revoked.",
  "profile.save": "Save changes",

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
  "common.back.researcher": "Back to researcher dashboard",
  "common.back.participant": "Back to participant dashboard",

  "auth.join.ecosystem": "Join the research ecosystem",
  "auth.feature.researchers": "10,000+ active researchers",
  "auth.feature.assistant": "AI Survey Assistant",
  "auth.feature.matching": "Smart audience matching",
  "auth.feature.quality": "Guaranteed data quality",
  "auth.toast.login.success": "Logged in successfully!",
  "auth.toast.register.success": "Account created successfully!",
  "auth.toast.google.connecting": "Connecting to Google...",
  "auth.toast.google.success": "Google login successful!",
  "auth.name.placeholder": "Your name",

  "valuegate.title": "Your responses were saved successfully! 🎉",
  "valuegate.title.survey": "Your responses were saved successfully! 🎉",
  "valuegate.title.publish": "Save & publish your research 🚀",
  "valuegate.title.general": "Log in / Sign up to UOE 🌟",
  "valuegate.subtitle": "Activate your account to view your dedicated analysis and save {points} points from this study.",
  "valuegate.subtitle.publish": "Create your account to publish your questionnaire and collect real data.",
  "valuegate.subtitle.general": "Log in or create an account to continue on UOE.",
  "valuegate.google": "Continue quickly with Google",
  "valuegate.or": "or continue with email",
  "valuegate.email.placeholder": "you@example.com",
  "valuegate.email.cta": "Get login link",
  "valuegate.unlock.1": "Receive your scientific analysis report",
  "valuegate.unlock.2": "Save earned points to your wallet",
  "valuegate.unlock.3": "Create free questionnaires",
  "valuegate.toast.google.connecting": "Connecting to Google...",
  "valuegate.toast.google.success": "Google login successful!",
  "valuegate.toast.email.sent": "Login link sent! Check your inbox.",

  "analytics.subtitle": "Deep insights into responses, data quality, and demographics.",
  "analytics.export.report": "Export report",
  "analytics.export.toast": "Report exported",
  "analytics.weekly": "Weekly",
  "analytics.age.distribution": "Age distribution",
  "analytics.geographic": "Geographic spread",
  "analytics.quality.flags": "AI quality flags",
  "analytics.quality.excellent": "Excellent",
  "analytics.flag.random": "Random responses flagged",
  "analytics.flag.suspicious": "Suspicious patterns",
  "analytics.flag.speeders": "Speeders detected",
  "analytics.flag.verified": "Verified quality answers",

  "dashboard.days.label": "days",
  "dashboard.status.active": "Active",
  "dashboard.status.done": "Done",

  "participants.next.level.hint": "3 surveys to next level!",
  "participants.profile.name": "Niloofar Ahmadi",

  "participant.filter.all": "All surveys",
  "participant.filter.fastest": "Fastest (under 3 min)",
  "participant.filter.reward": "Highest reward",
  "participant.filter.matched": "Matched to your field",
  "participant.cat.health": "Health",
  "participant.cat.education": "Education",
  "participant.cat.social": "Social",
  "participant.cat.tech": "Technology",
  "participant.cat.business": "Business",
  "participant.level.current": "Level",
  "participant.level.next": "to Level",
  "participant.level.toNext": "points to next level",
  "participant.level.remaining": "points left to next level",
  "participant.wallet.total": "Total earned points",
  "participant.wallet.convert": "Convert points to research credit",
  "participant.wallet.withdraw": "Request point withdrawal",
  "participant.wallet.withdraw.title": "Withdraw points",
  "participant.wallet.withdraw.desc": "Your points can be converted to gift cards or research credit. Our team will contact you within 48 hours.",
  "participant.wallet.withdraw.confirm": "Submit request",
  "participant.wallet.withdraw.success": "Your withdrawal request has been submitted.",
  "participant.wallet.convert.success": "Points converted to research credit successfully.",
  "participant.history.title": "My participation history",
  "participant.history.earned": "Points received",
  "participant.history.report": "Report missing points",
  "participant.history.report.success": "Your report has been submitted. We will review it shortly.",

  "exchange.tab.packages": "Buy respondent packages (for researchers)",
  "exchange.tab.rewards": "Rewards store & payout (for participants)",
  "exchange.tab.convert": "Convert points to research credit",
  "exchange.packages.subtitle": "Valid response packages for your research — no more sample-size anxiety.",
  "exchange.package.responses": "valid responses",
  "exchange.package.delivery": "Delivery",
  "exchange.package.days": "days",
  "exchange.package.badge.popular": "Most popular",
  "exchange.package.badge.discount": "Bulk discount",
  "exchange.package.feature.ai": "AI data quality filtering",
  "exchange.package.s1.f1": "Valid responses from your target audience",
  "exchange.package.s1.f2": "Summary results report",
  "exchange.package.pro.f2": "Fast delivery (2 days)",
  "exchange.package.pro.f3": "Advanced analytics report",
  "exchange.package.thesis.f1": "Bulk-discounted pricing",
  "exchange.package.thesis.f2": "Phased delivery up to 4 days",
  "exchange.package.thesis.f3": "Thesis-dedicated support",
  "exchange.package.order": "Order & charge account",
  "exchange.toman": "Toman",
  "exchange.checkout.title": "Order summary",
  "exchange.checkout.desc": "Review your order details and confirm payment.",
  "exchange.checkout.package": "Package",
  "exchange.checkout.delivery": "Delivery time",
  "exchange.checkout.price": "Total payable",
  "exchange.checkout.confirm": "Pay & confirm order",
  "exchange.checkout.success": "Order placed — your account will be credited shortly.",
  "exchange.rewards.subtitle": "Turn your points into rewards or cash out.",
  "exchange.reward.points": "points",
  "exchange.reward.redeem": "Redeem / Cash out",
  "exchange.reward.insufficient": "Insufficient points",
  "exchange.reward.min": "Minimum",
  "exchange.reward.success": "Reward redeemed successfully.",
  "exchange.reward.1.title": "Research charge card",
  "exchange.reward.1.desc": "Convert points into credit for your own surveys",
  "exchange.reward.2.title": "Book & article discount code",
  "exchange.reward.2.desc": "Get a discount code for trusted academic sources",
  "exchange.reward.3.title": "Direct bank transfer (card-to-card)",
  "exchange.reward.3.desc": "Transfer the value of your points straight to your bank card",
  "exchange.convert.subtitle": "Convert your points into research credit to publish surveys.",
  "exchange.convert.input.label": "Points to convert",
  "exchange.convert.output.responses": "valid responses for your surveys",
  "exchange.convert.ratio": "Every 50 points = 1 valid response for your research",
  "exchange.convert.confirm": "Confirm & convert",
  "exchange.convert.success": "Points converted to research credit successfully.",
  "exchange.convert.error.amount": "Points must be greater than zero.",
  "exchange.convert.error.balance": "You don't have enough points.",
  "exchange.balance": "Your balance",
  "exchange.history.title": "Transaction & exchange history",
  "exchange.history.date": "Date",
  "exchange.history.type": "Type",
  "exchange.history.amount": "Amount",
  "exchange.history.status": "Status",
  "exchange.history.status.success": "Success",
  "exchange.history.status.pending": "Pending",
  "exchange.history.type.purchase": "Respondent package purchase",
  "exchange.history.type.convert": "Points to credit conversion",
  "exchange.history.type.payout": "Reward payout",

  "create.q.placeholder": "Question text...",
  "create.toast.ai.complete": "AI analysis complete!",
  "create.toast.published": "Survey published! 🎉",
  "create.toast.draft": "Saved as draft",
  "create.review.untitled": "Untitled",
  "create.ai.score": "Overall score",
  "create.ai.ambiguity": "Ambiguity",
  "create.ai.completion.label": "Completion",
  "create.edu.any": "Any",
  "create.edu.highschool": "High school",
  "create.edu.bachelor": "Bachelor",
  "create.edu.master": "Master",
  "create.edu.phd": "PhD",
  "create.location.placeholder": "e.g. Iran, Tehran",
  "create.interests.placeholder": "Technology, health, sports...",
  "create.time.estimate": "Estimated time",

  "marketplace.search.placeholder": "Search surveys...",
  "marketplace.no.results": "No surveys found.",
  "marketplace.match": "match",
  "marketplace.joined": "Joined",

  "pricing.trial.note": "All plans include a 14-day free trial of AI features.",
  "pricing.custom": "Custom",
  "pricing.mo": "/mo",

  "researchers.tools.title": "A complete research toolkit",

  "about.team.mehran.name": "Mehran Barshan",
  "about.team.mehran.role": "Founder & CEO",
  "about.team.hanieh.name": "Hanieh Amjadian",
  "about.team.hanieh.role": "Co-founder",

  "footer.built": "Built with ❤️ for research",

  "survey.comparison.old": "Question 1 of 33",
  "survey.finish": "Finish",
  "survey.submit": "Submit & earn points",
  "survey.runner.title": "Questionnaire",
  "survey.runner.back": "Back to surveys",

  "gamify.badge.streak": "7-day streak",
  "gamify.badge.answers": "100 quality answers",
  "gamify.badge.elite": "Top 1% elite",
  "gamify.badge.health": "Health specialist",
  "gamify.badge.points": "10,000 points",
  "gamify.badge.champion": "Champion of the month",
  "gamify.player.name": "Niloofar",

  "templates.title": "Research Templates",
  "templates.subtitle": "Start with a validated scale and customize it with AI.",
  "templates.use": "Use template",
  "templates.preview": "Preview",

  "trust.title": "Participant Trust Score",
  "trust.subtitle": "Every participant has a reputation score based on their research behavior.",
  "trust.score": "Trust Score",
  "trust.basedOn": "Based on",
  "trust.completion": "Completion rate",
  "trust.attention": "Attention checks passed",
  "trust.consistency": "Response consistency",
  "trust.timeBehavior": "Time behavior",
  "trust.history": "Research history",

  "academic.title": "Academic Mode",
  "academic.subtitle": "Tools designed for rigorous academic research.",
  "academic.citations": "Citation suggestions",
  "academic.hypothesis": "Hypothesis builder",
  "academic.variables": "Variable mapping",
  "academic.validation": "Questionnaire validation",
  "academic.methodology": "Methodology suggestions",
  "academic.scaleLibrary": "Scale library",

  "analysis.title": "AI Research Analyst",
  "analysis.subtitle": "Let AI analyze your dataset and suggest the next steps.",
  "analysis.finding": "Main Finding",
  "analysis.test": "Recommended Test",
  "analysis.effectSize": "Effect Size",
  "analysis.recommendation": "Recommendation",

  "university.title": "University Portal",
  "university.subtitle": "Manage research across departments and teams.",
  "university.groups": "Research groups",
  "university.departments": "Department management",
  "university.students": "Student accounts",
  "university.pool": "Shared participant pool",
  "university.analytics": "Institutional analytics",
  "university.repository": "Research repository",

  "rewards.title": "Reward System",
  "rewards.subtitle": "Earn points for quality participation and redeem them for real rewards.",
  "rewards.earn": "Earn Points",
  "rewards.redeem": "Redeem",
  "rewards.completion": "Survey completion",
  "rewards.quality": "High quality response",
  "rewards.streak": "7-day streak",
  "rewards.referral": "Referral bonus",

  "security.title": "Security & Ethics",
  "security.subtitle": "Research-grade security and ethics compliance.",
  "security.gdpr": "GDPR compliance",
  "security.anonymization": "Data anonymization",
  "security.consent": "Consent management",
  "security.ethics": "Ethics approval workflow",
  "security.encryption": "End-to-end encryption",
  "security.audit": "Audit logs",

  "create.qtype.likert": "Likert scale",
  "create.qtype.matrix": "Matrix",
  "create.qtype.ranking": "Ranking",
  "create.qtype.demographic": "Demographic",
  "create.qtype.openended": "Open-ended",
  "create.qtype.file": "File upload",
  "create.qtype.consent": "Consent form",
  "dash.header.support": "Support",
  "dash.header.logout": "Log out",
  "dash.mode.researcher": "Researcher Mode",
  "dash.mode.participant": "Participant Mode",

  "dash.wallet.title": "research points",
  "dash.wallet.balance": "Research credit balance",
  "dash.wallet.charge": "Charge credit",
  "dash.wallet.earn": "Earn credit by responding",
  "dash.wallet.hint": "Every 50 points = 1 valid response for your questionnaire",
  "dash.wallet.recharge.title": "Recharge credit",
  "dash.wallet.recharge.desc": "Choose an amount to add to your research wallet.",
  "dash.wallet.recharge.confirm": "Pay & recharge",
  "dash.wallet.recharge.success": "Your credit has been recharged successfully!",
  "dash.status.live": "Collecting data",
  "dash.status.paused": "Paused",
  "dash.status.completed": "Completed",
  "dash.status.draft": "Draft",
  "dash.status.label": "Status",
  "dash.export": "Quick export",
  "dash.export.spss": "SPSS (.sav)",
  "dash.export.excel": "Excel (.xlsx)",
  "dash.export.csv": "CSV",
  "dash.export.tooltip": "Download cleaned data directly with variable codes",
  "dash.export.toast": "Data export started",
  "dash.remaining": "remaining",
  "dash.pause": "Pause collection",
  "dash.resume": "Resume collection",
  "dash.pause.toast": "Data collection paused",
  "dash.resume.toast": "Data collection resumed",
  "dash.share": "Share",
  "dash.share.title": "Share questionnaire",
  "dash.share.directLink": "Direct questionnaire link",
  "dash.share.copyLink": "Copy link",
  "dash.share.copied": "Copied!",
  "dash.share.qr": "QR code",
  "dash.share.qr.hint": "Perfect for academic posters, email and Telegram channels.",
  "dash.share.telegram": "Telegram",
  "dash.share.whatsapp": "WhatsApp",
  "dash.share.email": "Email",

  "dash.overview.recent": "Recent activity",
  "dash.responses.valid": "Valid",
  "dash.responses.suspect": "Suspect",
  "dash.quality.flags": "Quality flags",
  "dash.quality.speed": "Unusually fast responses",
  "dash.quality.random": "Random answering patterns",
  "dash.quality.suspect": "Suspect respondents",
  "dash.quality.review": "Review",
  "dash.quality.aiNote": "25 suspicious responses were flagged for review; we recommend excluding them from your dataset before analysis.",
  "dash.reports.tabulation": "Cross-tabulation",
  "dash.reports.insights": "AI insights summary",
  "dash.reports.exportTitle": "Batch data export",
  "dash.reports.exportDesc": "Download the full cleaned dataset with variable codes (SPSS / Excel / CSV).",
  "dash.reports.exportAll": "Export all",
  "dash.reports.variable": "Variable",
  "dash.reports.ageGroup": "Age group",
  "dash.reports.insight.1": "Q7 responses show a significant correlation with respondents' employment status (r=0.72).",
  "dash.reports.insight.2": "Data quality is notably higher between 8–12 AM.",
  "dash.reports.insight.3": "32% of responses were submitted from mobile devices.",
  "dash.placeholder": "This section is under development.",

  "dash.close": "Close",
  "dash.survey.back": "Back to surveys",
  "dash.survey.preview": "Preview",
  "dash.survey.duplicate": "Duplicate survey",
  "dash.survey.delete": "Delete survey",
  "dash.survey.delete.confirm.title": "Delete survey",
  "dash.survey.delete.confirm.desc": "Deleting this survey will also remove all of its responses. This action cannot be undone.",
  "dash.survey.delete.confirm.btn": "Delete",
  "dash.survey.delete.success": "Survey deleted.",
  "dash.survey.duplicate.success": "Survey duplicated successfully.",
  "dash.survey.saved": "Changes saved.",
  "dash.survey.metric.population": "Target population",
  "dash.survey.metric.responses": "Total submissions",
  "dash.survey.metric.views": "Total views",
  "dash.survey.metric.completion": "Completion rate",
  "dash.survey.tab.data": "Data & Table",
  "dash.survey.tab.charts": "Charts",
  "dash.survey.tab.settings": "Settings & Audience",
  "dash.survey.data.respondent": "Respondent",
  "dash.survey.data.date": "Date",
  "dash.survey.data.duration": "Duration",
  "dash.survey.data.quality": "Quality",
  "dash.survey.data.export": "Export table",
  "dash.survey.charts.distribution": "Option distribution",
  "dash.survey.charts.question": "Sample question",
  "dash.survey.settings.audience": "Target audience",
  "dash.survey.settings.params": "Survey parameters",
  "dash.survey.settings.age": "Age",
  "dash.survey.settings.gender": "Gender",
  "dash.survey.settings.education": "Education",
  "dash.survey.settings.region": "Region",
  "dash.survey.settings.questions": "Number of questions",
  "dash.survey.settings.target": "Response target",
  "dash.survey.settings.period": "Collection period",
  "dash.survey.settings.save": "Save changes",
  "dash.survey.preview.title": "Questionnaire preview",
  "dash.survey.preview.hint": "This is exactly how participants see your questionnaire.",
  "dash.survey.preview.done": "Preview finished.",
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
  "hero.title": "پلتفرم هوشمند پژوهش و جمع‌آوری داده",
  "hero.subtitle": "ارزیابی پاسخ‌ها و کیفیت بالای داده‌ها",
  "hero.description":
    "ارتباط مستقیم بین پژوهشگران و جامعه آماری هدف؛ ساخت پرسشنامه هوشمند، حذف پاسخ‌های فیک و تحلیل لحظه‌ای داده‌ها.",
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
  "problem.subtitle": "چهار چالش پنهان که بی‌صدا کیفیت پژوهش‌های دانشگاهی را کاهش می‌دهند.",
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
  "solution.3.title": "حذف پاسخ‌های فیک",
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
  "ai.assistant.f1": "تبدیل فایل موجود به فرم هوشمند",
  "ai.assistant.f2": "معرفی پرسشنامه‌های دارای روایی و پایایی",
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
  "marketplace.subtitle": "پرسشنامه‌های زنده منطبق با پروفایل شما، با یک ضربه ملحق شوید.",
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

  "faq.badge": "پاسخ به سوالات شما",
  "faq.title": "سوالات متداول",
  "faq.subtitle": "هر آنچه لازم است درباره نحوه کارکرد UOE، تبادل پاسخ‌ها و هوش مصنوعی بدانید.",
  "faq.q1": "آیا استفاده از UOE برای پژوهشگران رایگان است؟",
  "faq.a1": "بله! شما می‌توانید با مشارکت در پاسخ‌دهی به پرسشنامه‌های سایر پژوهشگران، امتیاز (اعتبار) کسب کنید و از این امتیازها برای ثبت و انتشار پرسشنامه خود به صورت صددرصد رایگان استفاده نمایید. همچنین پلن‌های ویژه برای سرعت‌بخشی بیشتر نیز در دسترس است.",
  "faq.q2": "چگونه از واقعی و معتبر بودن پاسخ‌ها اطمینان حاصل می‌شود؟",
  "faq.a2": "UOE از الگوریتم‌های هوش مصنوعی و سیگنال‌های رفتاری برای سنجش کیفیت داده‌ها استفاده می‌کند. پاسخ‌های سرکاری، الگوی کلیک‌های تصادفی، و سرعت پاسخ‌دهی غیرطبیعی شناسایی شده و از خروجی نهایی پژوهش شما حذف می‌شوند.",
  "faq.q3": "سیستم تبادل هوشمند چطور کار می‌کند؟",
  "faq.a3": "با پاسخ به هر پرسشنامه، با توجه به زمان و دقت شما، امتیازی به حساب کاربری‌تان اضافه می‌شود. این سیستم تعاملی ضمانت می‌کند که پرسشنامه شما دقیقاً به دست جامعه آماری مورد نظرتان برسد.",
  "faq.q4": "آیا امکان ساخت و ویرایش پرسشنامه با هوش مصنوعی وجود دارد؟",
  "faq.a4": "بله، دستیار هوش مصنوعی UOE به شما کمک می‌کند تا بر اساس اهداف پژوهشی خود، پرسشنامه‌های استاندارد علمی همراه با روایی و پایایی مناسب بسازید یا فایل پرسشنامه موجود خود را مستقیماً به فرم هوشمند تبدیل کنید.",
  "faq.q5": "خروجی داده‌ها به چه صورتی قابل دریافت است؟",
  "faq.a5": "شما می‌توانید در هر لحظه خروجی داده‌های جمع‌آوری شده را در قالب فرمت‌های استاندارد تحلیل داده مانند Excel، CSV و فایل‌های آماده ورود به SPSS دریافت کنید.",

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
  "participants.how.title": "مشارکت چگونه کار می‌کند؟",
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
  "create.options.title": "روش ساخت پژوهش خود را انتخاب کنید",
  "create.options.subtitle": "چگونه می‌خواهید پرسشنامه خود را طراحی یا انتخاب نمایید؟",
  "create.options.manual.tag": "طراحی آزاد",
  "create.options.manual.title": "ایجاد مرحله به مرحله",
  "create.options.manual.desc": "سوالات و گزینه‌های خود را به صورت دستی وارد کرده و ساختار پرسشنامه را بسازید.",
  "create.options.library.tag": "دارای روایی و پایایی",
  "create.options.library.title": "انتخاب از بانک استاندارد",
  "create.options.library.desc": "جستجو در میان صدها پرسشنامه علمی استاندارد تاییدشده با شناسنامه پژوهشی.",
  "create.options.ai.tag": "پیشنهادی ✨",
  "create.options.ai.title": "ساخت هوشمند با هوش مصنوعی",
  "create.options.ai.desc": "عنوان مقاله یا هدف پژوهش خود را توضیح دهید تا AI بهترین پرسشنامه‌ها را به شما پیشنهاد دهد.",
  "create.options.back": "بازگشت به گزینه‌ها",
  "library.title": "بانک پرسشنامه‌های استاندارد",
  "library.subtitle": "پرسشنامه‌های معتبر با شناسنامه روایی و پایایی",
  "library.search.placeholder": "جستجوی پرسشنامه، موضوع یا نویسنده...",
  "library.empty": "پرسشنامه‌ای یافت نشد",
  "library.reliability": "پایایی",
  "library.validity": "روایی",
  "library.use": "استفاده از این پرسشنامه",
  "library.questions": "سوال",
  "library.report": "گزارش اشکال علمی",
  "library.report.done": "گزارش شما ثبت شد",
  "create.field.title.required": "لطفاً عنوان پرسشنامه را وارد کنید",
  "library.estimatedTime": "زمان تقریبی",
  "library.minutes": "دقیقه",
  "library.reference": "مقاله مرجع",
  "create.ai.chat.inputPlaceholder": "پیام خود را بنویسید...",
  "create.ai.chat.send": "ارسال",
  "create.ai.chat.chip.more": "پیشنهاد سوالات بیشتر",
  "create.ai.chat.chip.library": "تطبیق با بانک استاندارد",
  "create.ai.chat.use": "استفاده از این سوالات",
  "create.ai.chat.reply.generated": "در اینجا چند سوال پیشنهادی برای موضوع شما آمده است:",
  "create.ai.chat.reply.more": "سوالات بیشتری در این زمینه برای شما آماده شده است:",
  "create.ai.chat.reply.library": "این پرسشنامه استاندارد با موضوع شما تطابق دارد:",
  "create.ai.chat.reply.fallback": "لطفاً موضوع پژوهش خود را دقیق‌تر توضیح دهید.",
  "create.ai.assistant.title": "دستیار هوشمند پژوهش",
  "create.ai.assistant.subtitle": "عنوان مقاله یا هدف پژوهش خود را توضیح دهید تا AI پرسشنامه را طراحی کند",
  "create.ai.assistant.placeholder": "مثلاً: بررسی تأثیر دورکاری بر سلامت روان کارمندان...",
  "create.ai.assistant.generate": "تولید پرسشنامه",
  "create.ai.assistant.generating": "هوش مصنوعی در حال تولید سوالات است...",
  "create.ai.assistant.suggested": "سوالات پیشنهادی",
  "create.ai.assistant.use": "استفاده از این سوالات",
  "create.ai.assistant.prompt.ph": "موضوع یا هدف پژوهش شما...",
  "create.guard.validity": "تغییر یا حذف این سوال ممکن است پایایی و روایی استاندارد پرسشنامه را تحت تاثیر قرار دهد.",
  "create.guard.report": "گزارش اشکال علمی",
  "create.guard.reported": "گزارش شما به تیم علمی ارسال شد.",
  "create.guard.confirm": "حذف در هر صورت",
  "create.ai.badge": "پیشنهاد AI",
  "library.badge": "بانک استاندارد",

  "dashboard.researcher.title": "داشبورد پژوهشگر",
  "dashboard.researcher.welcome": "خوش آمدید، دکتر صادقی",
  "dashboard.welcome": "خوش آمدید!",
  "dashboard.participant.title": "داشبورد شرکت‌کننده",
  "dashboard.participant.welcome": "خوش آمدید، نیلوفر",
  "dashboard.analytics.title": "تحلیل‌ها",
  "dashboard.nav.overview": "نمای کلی",
  "dashboard.nav.profile": "پروفایل من",
  "dashboard.nav.credits": "اعتبار و کیف پول",
  "dashboard.nav.surveys": "پرسشنامه‌ها",
  "dashboard.nav.reports": "گزارش‌ها",
  "dashboard.nav.settings": "تنظیمات",
  "dashboard.nav.achievements": "دستاوردها",
  "dash.stat.active": "پرسشنامه فعال",
  "dash.stat.responses": "کل پاسخ‌ها",
  "dash.stat.completion": "نرخ تکمیل",
  "dash.stat.quality": "کیفیت داده",
  "dash.recent.title": "پاسخ‌های اخیر",
  "dash.response.chart": "پاسخ‌ها در زمان",
  "dash.demographics.title": "جمعیت‌شناسی",
  "dash.my.surveys": "پرسشنامه‌های من",
  "dash.completed": "پرسشنامه‌های تکمیل‌شده",
  "dash.points": "امتیاز",
  "dash.level": "سطح",
  "dash.rank": "رتبه جهانی",
  "dash.recommended": "پیشنهادی برای شما",
  "participant.settings.title": "تنظیمات حساب",
  "participant.profile.name": "نام و نام خانوادگی",
  "participant.profile.birthdate": "تاریخ تولد",
  "participant.profile.gender": "جنسیت",
  "participant.profile.gender.male": "مرد",
  "participant.profile.gender.female": "زن",
  "participant.profile.degree": "مقطع تحصیلی",
  "participant.profile.city": "شهر محل سکونت",
  "participant.profile.city.tehran": "تهران",
  "participant.profile.city.isfahan": "اصفهان",
  "participant.profile.city.shiraz": "شیراز",
  "participant.profile.city.mashhad": "مشهد",
  "participant.profile.city.tabriz": "تبریز",
  "participant.profile.city.other": "سایر",
  "participant.profile.job": "شغل",
  "participant.profile.job.student": "دانشجو",
  "participant.profile.job.employee": "کارمند",
  "participant.profile.job.freelancer": "فریلنسر / شغل آزاد",
  "participant.profile.job.teacher": "معلم / مدرس",
  "participant.profile.job.researcher": "پژوهشگر",
  "participant.profile.job.other": "سایر",
  "participant.settings.profile": "پروفایل",
  "participant.settings.name": "نام و نام خانوادگی",
  "participant.settings.email": "ایمیل",
  "participant.settings.interests": "تنظیم علاقه‌مندی‌ها",
  "participant.settings.interests.desc": "پرسشنامه‌های منطبق با علاقه‌مندی‌های خود را انتخاب کنید.",
  "participant.settings.notifications": "اعلان‌ها",
  "participant.settings.notifications.surveys": "پرسشنامه‌های جدید",
  "participant.settings.notifications.rewards": "پاداش‌ها و امتیازها",
  "participant.settings.notifications.reminders": "یادآوری تکمیل",
  "participant.settings.save": "ذخیره تغییرات",
  "profile.verified": "احراز هویت شده",
  "profile.avatar.updated": "عکس پروفایل به‌روزرسانی شد.",
  "profile.tab.personal": "اطلاعات کاربری",
  "profile.tab.financial": "اطلاعات مالی",
  "profile.tab.security": "امنیت",
  "profile.credits.balance": "موجودی اعتبار پژوهشگری",
  "profile.credits.earned": "امتیازات کسب‌شده از پاسخ‌دهی (به عنوان شرکت‌کننده)",
  "profile.credits.validResponse": "پاسخ معتبر",
  "profile.credits.points": "امتیاز",
  "profile.credits.convert.title": "تبدیل امتیاز به اعتبار",
  "profile.credits.convert.rate": "هر ۱ پاسخ معتبر = ۵۰ امتیاز شرکت‌کننده",
  "profile.credits.convert.pointsLabel": "تعداد پاسخ",
  "profile.credits.convert.equivalent": "معادل",
  "profile.credits.convert.decrement": "کاهش",
  "profile.credits.convert.increment": "افزایش",
  "profile.credits.convert.cta": "تبدیل سریع امتیاز به اعتبار",
  "profile.credits.convert.success": "امتیاز با موفقیت تبدیل شد.",
  "profile.credits.convert.insufficient": "امتیاز کافی نیست.",
  "profile.credits.purchase.title": "خرید آنلاین اعتبار",
  "profile.credits.package.100": "بسته ۱۰۰ پاسخ",
  "profile.credits.package.500": "بسته ۵۰۰ پاسخ (پیشنهادی)",
  "profile.credits.package.1000": "بسته ۱٬۰۰۰ پاسخ (ویژه پایان‌نامه)",
  "profile.credits.currency": "تومان",
  "profile.credits.purchase.cta": "پرداخت",
  "profile.credits.purchase.toast": "پرداخت با موفقیت انجام شد.",
  "profile.credits.recommended": "پیشنهادی",
  "profile.credits.discount": "تخفیف",
  "profile.credits.history": "تاریخچه تراکنش‌ها",
  "profile.credits.history.date": "تاریخ",
  "profile.credits.history.type": "نوع عملیات",
  "profile.credits.history.amount": "تعداد/مقدار",
  "profile.credits.history.status": "وضعیت",
  "profile.credits.history.success": "موفق",
  "profile.credits.history.convert": "تبدیل امتیاز",
  "profile.credits.history.purchase": "خرید اعتبار",
  "profile.personal.name": "نام و نام خانوادگی",
  "profile.personal.username": "نام کاربری",
  "profile.personal.email": "ایمیل",
  "profile.personal.phone": "تلفن",
  "profile.personal.university": "دانشگاه / موسسه",
  "profile.personal.field": "رشته تحصیلی",
  "profile.personal.degree": "مقطع تحصیلی",
  "profile.degree.highschool": "دیپلم و پیش‌دانشگاهی",
  "profile.degree.bachelor": "کارشناسی",
  "profile.degree.master": "کارشناسی ارشد",
  "profile.degree.phd": "دکتری تخصصی (Ph.D)",
  "profile.degree.postdoc": "پست‌دکتری / هیئت علمی",
  "profile.degree.other": "سایر",
  "profile.financial.bank": "نام بانک",
  "profile.financial.sheba": "شماره شبا",
  "profile.financial.desc": "برای دریافت پاداش‌ها و بازپرداخت‌ها استفاده می‌شود.",
  "profile.security.password": "تغییر رمز عبور",
  "profile.security.current": "رمز عبور فعلی",
  "profile.security.new": "رمز عبور جدید",
  "profile.security.confirm": "تکرار رمز عبور جدید",
  "profile.security.updated": "رمز عبور با موفقیت تغییر کرد.",
  "profile.security.sessions": "جلسات فعال",
  "profile.security.device": "دستگاه",
  "profile.security.location": "موقعیت مکانی",
  "profile.security.currentSession": "جلسه فعلی",
  "profile.security.revoke": "خروج از جلسه",
  "profile.security.revoked": "جلسه خاتمه یافت.",
  "profile.save": "ذخیره تغییرات",

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
  "common.back.researcher": "بازگشت به داشبورد پژوهشگر",
  "common.back.participant": "داشبورد",

  "auth.join.ecosystem": "به اکوسیستم پژوهش بپیوندید",
  "auth.feature.researchers": "۱۰٬۰۰۰+ پژوهشگر فعال",
  "auth.feature.assistant": "دستیار پرسشنامه هوشمند",
  "auth.feature.matching": "تطابق هوشمند مخاطب",
  "auth.feature.quality": "کیفیت داده تضمین‌شده",
  "auth.toast.login.success": "ورود موفقیت‌آمیز بود!",
  "auth.toast.register.success": "حساب شما ساخته شد!",
  "auth.toast.google.connecting": "در حال اتصال به گوگل...",
  "auth.toast.google.success": "ورود با گوگل موفق بود!",
  "auth.name.placeholder": "نام شما",

  "valuegate.title": "پاسخ‌های شما با موفقیت ثبت شد! 🎉",
  "valuegate.title.survey": "پاسخ‌های شما با موفقیت ثبت شد! 🎉",
  "valuegate.title.publish": "ذخیره و انتشار پژوهش 🚀",
  "valuegate.title.general": "ورود / ثبت‌نام در UOE 🌟",
  "valuegate.subtitle": "برای مشاهده تحلیل اختصاصی و ذخیره {points} امتیاز این پژوهش، حساب خود را فعال کنید.",
  "valuegate.subtitle.publish": "برای انتشار پرسشنامه و جمع‌آوری دیتای واقعی، حساب کاربری خود را بسازید.",
  "valuegate.subtitle.general": "برای ادامه فعالیت در UOE وارد شوید یا حساب کاربری بسازید.",
  "valuegate.google": "ادامه سریع با گوگل",
  "valuegate.or": "یا با ایمیل وارد شوید",
  "valuegate.email.placeholder": "you@example.com",
  "valuegate.email.cta": "دریافت لینک ورود",
  "valuegate.unlock.1": "دریافت گزارش تحلیل علمی",
  "valuegate.unlock.2": "ذخیره امتیازهای کسب‌شده در کیف پول",
  "valuegate.unlock.3": "امکان ساخت پرسشنامه رایگان",
  "valuegate.toast.google.connecting": "در حال اتصال به گوگل...",
  "valuegate.toast.google.success": "ورود با گوگل موفق بود!",
  "valuegate.toast.email.sent": "لینک ورود ارسال شد! ایمیل خود را بررسی کنید.",

  "analytics.subtitle": "بینش عمیق از پاسخ‌ها، کیفیت داده و جمعیت‌شناسی.",
  "analytics.export.report": "خروجی گزارش",
  "analytics.export.toast": "گزارش خروجی گرفته شد",
  "analytics.weekly": "هفتگی",
  "analytics.age.distribution": "توزیع سنی",
  "analytics.geographic": "پراکندگی جغرافیایی",
  "analytics.quality.flags": "پرچم‌های کیفیت هوش مصنوعی",
  "analytics.quality.excellent": "عالی",
  "analytics.flag.random": "پاسخ‌های تصادفی شناسایی‌شده",
  "analytics.flag.suspicious": "الگوهای مشکوک",
  "analytics.flag.speeders": "پاسخ‌دهی سریع‌تر از حد معمول",
  "analytics.flag.verified": "پاسخ‌های باکیفیت تأییدشده",

  "dashboard.days.label": "روز",
  "dashboard.status.active": "فعال",
  "dashboard.status.done": "تکمیل",

  "participants.next.level.hint": "۳ پرسشنامه تا سطح بعدی!",
  "participants.profile.name": "نیلوفر احمدی",

  "participant.filter.all": "همه پرسشنامه‌ها",
  "participant.filter.fastest": "سریع‌ترین‌ها (زیر ۳ دقیقه)",
  "participant.filter.reward": "بیشترین امتیاز",
  "participant.filter.matched": "مرتبط با رشته/علاقه شما",
  "participant.cat.health": "سلامت",
  "participant.cat.education": "آموزش",
  "participant.cat.social": "اجتماعی",
  "participant.cat.tech": "فناوری",
  "participant.cat.business": "کسب‌وکار",
  "participant.level.current": "سطح",
  "participant.level.next": "تا سطح",
  "participant.level.toNext": "امتیاز تا سطح بعد",
  "participant.level.remaining": "امتیاز مانده تا سطح بعد",
  "participant.wallet.total": "کل امتیازهای کسب‌شده",
  "participant.wallet.convert": "تبدیل امتیاز به شارژ پژوهش",
  "participant.wallet.withdraw": "درخواست نقد کردن امتیازها",
  "participant.wallet.withdraw.title": "نقد کردن امتیازها",
  "participant.wallet.withdraw.desc": "امتیازهای شما به کارت هدیه یا اعتبار پژوهشی تبدیل می‌شود. تیم ما ظرف ۴۸ ساعت با شما تماس می‌گیرد.",
  "participant.wallet.withdraw.confirm": "ثبت درخواست",
  "participant.wallet.withdraw.success": "درخواست نقد کردن امتیاز شما ثبت شد.",
  "participant.wallet.convert.success": "امتیازها با موفقیت به اعتبار پژوهشی تبدیل شدند.",
  "participant.history.title": "تاریخچه مشارکت‌های من",
  "participant.history.earned": "امتیاز دریافت شد",
  "participant.history.report": "گزارش عدم ثبت امتیاز",
  "participant.history.report.success": "گزارش شما ثبت شد و به‌زودی بررسی می‌شود.",

  "exchange.tab.packages": "خرید بسته پاسخ‌دهنده (ویژه پژوهشگران)",
  "exchange.tab.rewards": "ویترین جوایز و تسویه (ویژه شرکت‌کنندگان)",
  "exchange.tab.convert": "تبدیل امتیاز به اعتبار پژوهشی",
  "exchange.packages.subtitle": "بسته‌های پاسخ معتبر برای پژوهش‌های شما؛ بدون دغدغه تعیین حجم نمونه.",
  "exchange.package.responses": "پاسخ معتبر",
  "exchange.package.delivery": "تحویل",
  "exchange.package.days": "روز",
  "exchange.package.badge.popular": "پرطرفدارترین",
  "exchange.package.badge.discount": "تخفیف حجمی",
  "exchange.package.feature.ai": "فیلتر کیفیت داده با هوش مصنوعی",
  "exchange.package.s1.f1": "پاسخ معتبر از جامعه هدف",
  "exchange.package.s1.f2": "گزارش خلاصه نتایج",
  "exchange.package.pro.f2": "تحویل سریع (۲ روز)",
  "exchange.package.pro.f3": "گزارش پیشرفته و تحلیل داده",
  "exchange.package.thesis.f1": "قیمت اقتصادی (تخفیف حجمی)",
  "exchange.package.thesis.f2": "تحویل مرحله‌ای تا ۴ روز",
  "exchange.package.thesis.f3": "پشتیبانی تخصصی پایان‌نامه",
  "exchange.package.order": "سفارش و شارژ حساب",
  "exchange.toman": "تومان",
  "exchange.checkout.title": "خلاصه سفارش",
  "exchange.checkout.desc": "جزئیات سفارش را بررسی و پرداخت را تأیید کنید.",
  "exchange.checkout.package": "بسته",
  "exchange.checkout.delivery": "زمان تحویل",
  "exchange.checkout.price": "قابل پرداخت",
  "exchange.checkout.confirm": "پرداخت و تأیید سفارش",
  "exchange.checkout.success": "سفارش شما ثبت شد؛ حساب شما به‌زودی شارژ می‌شود.",
  "exchange.rewards.subtitle": "امتیازهای خود را به جایزه تبدیل کنید یا تسویه کنید.",
  "exchange.reward.points": "امتیاز",
  "exchange.reward.redeem": "دریافت جایزه / تسویه",
  "exchange.reward.insufficient": "امتیاز ناکافی",
  "exchange.reward.min": "حداقل",
  "exchange.reward.success": "جایزه با موفقیت دریافت شد و به حساب شما اعمال شد.",
  "exchange.reward.1.title": "کارت شارژ پژوهشی",
  "exchange.reward.1.desc": "تبدیل امتیاز به شارژ اعتبار برای پرسشنامه‌های خود",
  "exchange.reward.2.title": "کد تخفیف خرید کتاب / مقالات علمی",
  "exchange.reward.2.desc": "دریافت کد تخفیف برای خرید منابع علمی معتبر",
  "exchange.reward.3.title": "تسویه حساب مستقیم (کارت به کارت)",
  "exchange.reward.3.desc": "انتقال مستقیم ارزش امتیازها به کارت بانکی شما",
  "exchange.convert.subtitle": "امتیازهای خود را به اعتبار پژوهشی برای انتشار پرسشنامه تبدیل کنید.",
  "exchange.convert.input.label": "تعداد امتیاز برای تبدیل",
  "exchange.convert.output.responses": "پاسخ معتبر برای پرسشنامه‌های شما",
  "exchange.convert.ratio": "هر ۵۰ امتیاز = ۱ پاسخ معتبر برای پژوهش شما",
  "exchange.convert.confirm": "تأیید و تبدیل سریع",
  "exchange.convert.success": "امتیازها با موفقیت به اعتبار پژوهشی تبدیل شدند.",
  "exchange.convert.error.amount": "تعداد امتیاز باید بزرگ‌تر از صفر باشد.",
  "exchange.convert.error.balance": "موجودی امتیاز شما کافی نیست.",
  "exchange.balance": "موجودی شما",
  "exchange.history.title": "تاریخچه تراکنش‌ها و تبدیل‌ها",
  "exchange.history.date": "تاریخ",
  "exchange.history.type": "نوع تراکنش",
  "exchange.history.amount": "مقدار/امتیاز",
  "exchange.history.status": "وضعیت",
  "exchange.history.status.success": "موفق",
  "exchange.history.status.pending": "در حال بررسی",
  "exchange.history.type.purchase": "خرید بسته پاسخ‌دهنده",
  "exchange.history.type.convert": "تبدیل امتیاز به اعتبار",
  "exchange.history.type.payout": "تسویه جایزه",

  "create.q.placeholder": "متن سؤال...",
  "create.toast.ai.complete": "تحلیل هوش مصنوعی کامل شد!",
  "create.toast.published": "پرسشنامه منتشر شد! 🎉",
  "create.toast.draft": "به‌عنوان پیش‌نویس ذخیره شد",
  "create.review.untitled": "بدون عنوان",
  "create.ai.score": "امتیاز کلی",
  "create.ai.ambiguity": "ابهام",
  "create.ai.completion.label": "تکمیل",
  "create.edu.any": "همه",
  "create.edu.highschool": "دیپلم",
  "create.edu.bachelor": "کارشناسی",
  "create.edu.master": "کارشناسی ارشد",
  "create.edu.phd": "دکتری",
  "create.location.placeholder": "مثلاً ایران، تهران",
  "create.interests.placeholder": "فناوری، سلامت، ورزش...",
  "create.time.estimate": "تخمین زمان",

  "marketplace.search.placeholder": "جستجوی پرسشنامه...",
  "marketplace.no.results": "پرسشنامه‌ای یافت نشد.",
  "marketplace.match": "تطابق",
  "marketplace.joined": "ملحق شدید",

  "pricing.trial.note": "همه برنامه‌ها شامل آزمایش رایگان ۱۴ روزه هوش مصنوعی هستند.",
  "pricing.custom": "سفارشی",
  "pricing.mo": "/ماه",

  "researchers.tools.title": "ابزارهای کامل پژوهش",

  "about.team.mehran.name": "مهران برشان",
  "about.team.mehran.role": "بنیان‌گذار و مدیرعامل",
  "about.team.hanieh.name": "حانیه امجدیان",
  "about.team.hanieh.role": "هم‌بنیان‌گذار",

  "footer.built": "ساخته‌شده با ❤️ برای پژوهش",

  "survey.comparison.old": "سؤال ۱ از ۳۳",
  "survey.finish": "پایان",
  "survey.submit": "ثبت و دریافت امتیاز",
  "survey.runner.title": "پرسشنامه",
  "survey.runner.back": "بازگشت به پرسشنامه‌ها",

  "gamify.badge.streak": "پشت‌سرهم ۷ روزه",
  "gamify.badge.answers": "۱۰۰ پاسخ باکیفیت",
  "gamify.badge.elite": "نخبگان ۱٪",
  "gamify.badge.health": "متخصص سلامت",
  "gamify.badge.points": "۱۰٬۰۰۰ امتیاز",
  "gamify.badge.champion": "قهرمان ماه",
  "gamify.player.name": "نیلوفر",

  "templates.title": "قالب‌های پژوهشی",
  "templates.subtitle": "با یک مقیاس معتبر شروع کنید و با هوش مصنوعی سفارشی کنید.",
  "templates.use": "استفاده از قالب",
  "templates.preview": "پیش‌نمایش",

  "trust.title": "امتیاز اعتماد شرکت‌کننده",
  "trust.subtitle": "هر شرکت‌کننده بر اساس رفتار پژوهشی خود امتیاز اعتبار دارد.",
  "trust.score": "امتیاز اعتماد",
  "trust.basedOn": "بر اساس",
  "trust.completion": "نرخ تکمیل",
  "trust.attention": "سوالات اعتبارسنجی عبور شده",
  "trust.consistency": "سازگاری پاسخ‌ها",
  "trust.timeBehavior": "رفتار زمانی",
  "trust.history": "سابقه پژوهش",

  "academic.title": "حالت دانشگاهی",
  "academic.subtitle": "ابزارهای طراحی‌شده برای پژوهش دانشگاهی دقیق.",
  "academic.citations": "پیشنهادات ارجاع",
  "academic.hypothesis": "سازنده فرضیه",
  "academic.variables": "نقشه‌برداری متغیرها",
  "academic.validation": "اعتبارسنجی پرسشنامه",
  "academic.methodology": "پیشنهادات روش‌شناسی",
  "academic.scaleLibrary": "کتابخانه مقیاس‌ها",

  "analysis.title": "تحلیلگر پژوهش هوش مصنوعی",
  "analysis.subtitle": "بگذارید هوش مصنوعی مجموعه داده شما را تحلیل و مراحل بعدی را پیشنهاد کند.",
  "analysis.finding": "یافته اصلی",
  "analysis.test": "آزمون پیشنهادی",
  "analysis.effectSize": "اندازه اثر",
  "analysis.recommendation": "توصیه",

  "university.title": "پرتال دانشگاه",
  "university.subtitle": "پژوهش را در بخش‌ها و تیم‌ها مدیریت کنید.",
  "university.groups": "گروه‌های پژوهشی",
  "university.departments": "مدیریت بخش‌ها",
  "university.students": "حساب‌های دانشجویی",
  "university.pool": "مخزن مشترک شرکت‌کنندگان",
  "university.analytics": "تحلیل‌های نهادی",
  "university.repository": "مخزن پژوهش",

  "rewards.title": "سیستم پاداش",
  "rewards.subtitle": "برای مشارکت باکیفیت امتیاز کسب کنید و آنها را با پاداش‌های واقعی مبادله کنید.",
  "rewards.earn": "کسب امتیاز",
  "rewards.redeem": "بازخرید",
  "rewards.completion": "تکمیل پرسشنامه",
  "rewards.quality": "پاسخ باکیفیت",
  "rewards.streak": "پشت‌سرهم ۷ روزه",
  "rewards.referral": "پاداش معرفی",

  "security.title": "امنیت و اخلاق",
  "security.subtitle": "امنیت و انطباق اخلاقی در سطح پژوهش.",
  "security.gdpr": "انطباق GDPR",
  "security.anonymization": "ناشناس‌سازی داده",
  "security.consent": "مدیریت رضایت",
  "security.ethics": "گردش کار تأیید اخلاق",
  "security.encryption": "رمزنگاری سرتاسری",
  "security.audit": "گزارش‌های حسابرسی",

  "create.qtype.likert": "مقیاس لیکرت",
  "create.qtype.matrix": "ماتریسی",
  "create.qtype.ranking": "رتبه‌بندی",
  "create.qtype.demographic": "جمعیت‌شناختی",
  "create.qtype.openended": "باز",
  "create.qtype.file": "بارگذاری فایل",
  "create.qtype.consent": "فرم رضایت",
  "dash.header.support": "پشتیبانی",
  "dash.header.logout": "خروج",
  "dash.mode.researcher": "حالت پژوهشگر",
  "dash.mode.participant": "حالت شرکت‌کننده",

  "dash.wallet.title": "امتیاز پژوهشی",
  "dash.wallet.balance": "موجودی اعتبار پژوهشی",
  "dash.wallet.charge": "شارژ اعتبار",
  "dash.wallet.earn": "کسب اعتبار با پاسخ‌دهی",
  "dash.wallet.hint": "هر ۵۰ امتیاز = ۱ پاسخ معتبر برای پرسشنامه شما",
  "dash.wallet.recharge.title": "شارژ اعتبار",
  "dash.wallet.recharge.desc": "مبلغ دلخواه برای اضافه‌شدن به کیف پول پژوهشی خود را انتخاب کنید.",
  "dash.wallet.recharge.confirm": "پرداخت و شارژ",
  "dash.wallet.recharge.success": "اعتبار شما با موفقیت شارژ شد!",
  "dash.status.live": "در حال جمع‌آوری داده",
  "dash.status.paused": "متوقف",
  "dash.status.completed": "پایان‌یافته",
  "dash.status.draft": "پیش‌نویس",
  "dash.status.label": "وضعیت",
  "dash.export": "خروجی سریع",
  "dash.export.spss": "SPSS (.sav)",
  "dash.export.excel": "Excel (.xlsx)",
  "dash.export.csv": "CSV",
  "dash.export.tooltip": "دانلود مستقیم داده‌های تمیزشده همراه با کدهای متغیر",
  "dash.export.toast": "خروجی داده آغاز شد",
  "dash.remaining": "باقیمانده",
  "dash.pause": "توقف جمع‌آوری",
  "dash.resume": "ادامه جمع‌آوری",
  "dash.pause.toast": "جمع‌آوری داده متوقف شد",
  "dash.resume.toast": "جمع‌آوری داده ادامه یافت",
  "dash.share": "اشتراک‌گذاری",
  "dash.share.title": "اشتراک‌گذاری پرسشنامه",
  "dash.share.directLink": "لینک مستقیم پرسشنامه",
  "dash.share.copyLink": "کپی لینک",
  "dash.share.copied": "کپی شد!",
  "dash.share.qr": "کد QR",
  "dash.share.qr.hint": "مناسب برای پوسترهای علمی، ایمیل و کانال‌های تلگرام.",
  "dash.share.telegram": "تلگرام",
  "dash.share.whatsapp": "واتساپ",
  "dash.share.email": "ایمیل",

  "dash.overview.recent": "فعالیت‌های اخیر",
  "dash.responses.valid": "معتبر",
  "dash.responses.suspect": "مشکوک",
  "dash.quality.flags": "نشانگرهای کیفیت",
  "dash.quality.speed": "پاسخ‌های سریع‌تر از حد طبیعی",
  "dash.quality.random": "الگوهای پاسخ تصادفی",
  "dash.quality.suspect": "پاسخ‌دهندگان مشکوک",
  "dash.quality.review": "بررسی",
  "dash.quality.aiNote": "به ۲۵ پاسخ مشکوک برچسب «بررسی» زده شده است؛ توصیه می‌شود پیش از تحلیل، آن‌ها را از مجموعه داده حذف کنید.",
  "dash.reports.tabulation": "جدول متقاطع",
  "dash.reports.insights": "خلاصه بینش هوش مصنوعی",
  "dash.reports.exportTitle": "خروجی انبوه داده",
  "dash.reports.exportDesc": "دانلود کامل داده‌های تمیزشده همراه با کدهای متغیر (SPSS / Excel / CSV).",
  "dash.reports.exportAll": "خروجی همه",
  "dash.reports.variable": "متغیر",
  "dash.reports.ageGroup": "گروه سنی",
  "dash.reports.insight.1": "پاسخ‌های سؤال ۷ همبستگی معناداری با وضعیت شغلی پاسخ‌دهندگان دارد (r=0.72).",
  "dash.reports.insight.2": "کیفیت داده در ساعات ۸ تا ۱۲ صبح به‌طور قابل‌توجهی بالاتر است.",
  "dash.reports.insight.3": "۳۲٪ پاسخ‌ها از دستگاه‌های موبایل ثبت شده‌اند.",
  "dash.placeholder": "این بخش در حال توسعه است.",

  "dash.close": "بستن",
  "dash.survey.back": "بازگشت به پرسشنامه‌ها",
  "dash.survey.preview": "پیش‌نمایش",
  "dash.survey.duplicate": "کپی پرسشنامه",
  "dash.survey.delete": "حذف پرسشنامه",
  "dash.survey.delete.confirm.title": "حذف پرسشنامه",
  "dash.survey.delete.confirm.desc": "با حذف این پرسشنامه، تمام پاسخ‌های آن نیز حذف می‌شود. این عمل قابل بازگشت نیست.",
  "dash.survey.delete.confirm.btn": "حذف",
  "dash.survey.delete.success": "پرسشنامه حذف شد.",
  "dash.survey.duplicate.success": "پرسشنامه با موفقیت کپی شد.",
  "dash.survey.saved": "تغییرات ذخیره شد.",
  "dash.survey.metric.population": "جامعه آماری",
  "dash.survey.metric.responses": "تعداد پاسخ‌ها",
  "dash.survey.metric.views": "تعداد بازدید",
  "dash.survey.metric.completion": "نرخ تکمیل",
  "dash.survey.tab.data": "نتایج و داده‌ها",
  "dash.survey.tab.charts": "نمودارها و تحلیل‌ها",
  "dash.survey.tab.settings": "تنظیمات و جامعه هدف",
  "dash.survey.data.respondent": "پاسخ‌دهنده",
  "dash.survey.data.date": "تاریخ",
  "dash.survey.data.duration": "مدت پاسخ",
  "dash.survey.data.quality": "کیفیت",
  "dash.survey.data.export": "خروجی جدول",
  "dash.survey.charts.distribution": "توزیع گزینه‌ها",
  "dash.survey.charts.question": "سؤال نمونه",
  "dash.survey.settings.audience": "جامعه هدف",
  "dash.survey.settings.params": "پارامترهای پرسشنامه",
  "dash.survey.settings.age": "سن",
  "dash.survey.settings.gender": "جنسیت",
  "dash.survey.settings.education": "تحصیلات",
  "dash.survey.settings.region": "منطقه",
  "dash.survey.settings.questions": "تعداد سؤالات",
  "dash.survey.settings.target": "هدف پاسخ",
  "dash.survey.settings.period": "بازه اجرا",
  "dash.survey.settings.save": "ذخیره تغییرات",
  "dash.survey.preview.title": "پیش‌نمایش پرسشنامه",
  "dash.survey.preview.hint": "دقیقاً همان چیزی که پاسخ‌دهندگان می‌بینند.",
  "dash.survey.preview.done": "پیش‌نمایش به پایان رسید.",
};

export const translations: Record<Locale, Dict> = { en, fa };
