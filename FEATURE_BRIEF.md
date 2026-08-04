# UoE — University of Exchange

**AI-powered bilingual survey & research platform** connecting academics with real participants. Public beta v0.2.1. Founded by Mehran Barshan & Hanieh Amjadian.

---

## 1. Product Vision / Problem Statement

### Problem

Traditional survey platforms suffer from:

- **Low response quality** — Disengaged users produce random responses that pollute datasets
- **Difficulty finding relevant participants** — Researchers struggle to locate suitable statistical populations
- **Low engagement rates** — Participants lose motivation when answering long, dull forms
- **Researcher dependency on social networks** — Data collection relies on personal connections, not科学的方法
- **Lack of intelligent assistance** — No AI guidance during survey design leads to biased, ambiguous questionnaires

### Solution

UoE is an AI-powered research marketplace that connects researchers with verified participants while improving survey quality, participant motivation, and research outcomes.

**Core value proposition:** Better research with real respondents, higher-quality data, and a genuinely engaging experience.

---

## 2. User Personas

### Persona 1 — Graduate Researcher

| | |
|---|---|
| **Name** | Sara, MSc Student |
| **Goal** | Collect 300 valid responses for thesis |
| **Pain Points** | Cannot find participants, low-quality answers, limited budget |
| **UoE Solution** | AI survey assistant, participant matching, quality scoring |
| **Quote** | "I need 300 valid responses for my thesis, but I can't find the right participants." |

### Persona 2 — Academic Researcher

| | |
|---|---|
| **Name** | Dr. Mehdi, Assistant Professor |
| **Goal** | Publish high-quality papers in top journals |
| **Pain Points** | Needs large datasets, SPSS export, reliable respondents |
| **UoE Solution** | Full research lifecycle, advanced analytics, institutional dashboard |
| **Quote** | "I need large, reliable datasets with proper demographic coverage." |

### Persona 3 — Participant

| | |
|---|---|
| **Name** | Niloofar, Undergraduate Student |
| **Goal** | Learn, earn rewards, contribute to research |
| **Pain Points** | Boring surveys, no recognition, unclear impact |
| **UoE Solution** | Gamification, points system, level progression, badge collection |
| **Quote** | "I want to contribute to science and earn rewards while doing it." |

---

## 3. User Flow

### Researcher Journey

```
Register → Create Research Profile → Create Survey → AI Optimization →
Select Target Audience → Publish → Receive Responses → Quality Check →
Analyze Results → Export Dataset
```

**Detailed steps:**

1. **Register** — Email/password or Google OAuth
2. **Create Research Profile** — Institution, department, research interests
3. **Create Survey** — 4-step wizard (Basics → Questions → Audience → Review)
4. **AI Optimization** — Wording improvement, ambiguity detection, completion prediction
5. **Select Target Audience** — Age, education, location, interests, sample size
6. **Publish** — Survey goes live to matched participants
7. **Receive Responses** — Real-time tracking with quality indicators
8. **Quality Check** — AI flags random, suspicious, and speeder responses
9. **Analyze Results** — Charts, demographics, geographic distribution
10. **Export Dataset** — CSV, Excel, or SPSS format

### Participant Journey

```
Register → Complete Profile → AI Matching → Browse Surveys →
Answer Survey → Quality Verification → Receive Points → Level Up
```

**Detailed steps:**

1. **Register** — Quick sign-up with email or Google
2. **Complete Profile** — Demographics, interests, education level
3. **AI Matching** — Surveys matched based on profile
4. **Browse Surveys** — Marketplace with match percentages
5. **Answer Survey** — Interactive, gamified questionnaire experience
6. **Quality Verification** — Attention checks, consistency validation
7. **Receive Points** — Base points + quality bonus + streak bonus
8. **Level Up** — Progress through contributor levels, earn badges

---

## 4. AI Features (Deep Dive)

### AI Survey Assistant

**Pre-publishing analysis:**

- Question clarity score
- Bias detection
- Leading question detection
- Reading difficulty estimation
- Estimated completion time
- Missing demographic variables

**Example:**

```
Question: "Do you think AI is amazing?"

AI Warning: High bias detected.

Suggestion: "How do you evaluate the impact of AI on your daily work?"
```

**Capabilities:**

1. **Improve Wording** — Rephrase questions for clarity
2. **Detect Ambiguity** — Identify confusing questions
3. **Predict Completion** — Estimate likelihood participants finish
4. **Suggest Structure** — Recommend question ordering
5. **Bias Detection** — Flag leading or loaded questions
6. **Readability Score** — Flesch-Kincaid grade level

### AI Matching Engine

**Matching factors:**

- Age demographics
- Gender (optional)
- Education level
- Occupation
- Location
- Research history
- Interest profile
- Previous survey behavior

**Match score formula:**

```
Match Score =
  Demographic Fit (30%) +
  Interest Similarity (25%) +
  Research Eligibility (25%) +
  Response Quality History (20%)
```

**Output:** Match percentage (84–99%) displayed on marketplace cards

### AI Data Quality Engine

**Detection capabilities:**

- Random responses (flagged: 23 in demo)
- Suspicious response patterns (flagged: 11 in demo)
- Speeders — completing too fast (detected: 8 in demo)
- Verified quality answers (verified: 3,212 in demo)

**Quality score:** Overall percentage (92% in demo) with category breakdown (Excellent/Good/Average/Poor)

### AI Research Analyst (Planned)

**Input:** Dataset

**Output:**

```
Main Finding: Students with higher social support
show 23% higher resilience scores.

Recommended Test: Pearson Correlation
Effect Size: r = 0.42 (medium)
p-value: < 0.001
```

---

## 5. Participant Trust System

### Research Reputation Score

Every participant has a trust score:

```
Participant Score: 94/100

Based on:
✓ Completion rate (98%)
✓ Attention checks passed (96%)
✓ Response consistency (92%)
✓ Time behavior (88%)
✓ Research history (100%)
```

### Trust Score Components

| Factor | Weight | Description |
|--------|--------|-------------|
| Completion Rate | 25% | Surveys finished vs. started |
| Attention Checks | 25% | Passed embedded validation questions |
| Response Consistency | 20% | Logical consistency across answers |
| Time Behavior | 15% | Appropriate time spent per question |
| Research History | 15% | Track record of quality participation |

### Benefits

- **For researchers:** Trustworthy data, reliable respondents
- **For participants:** Higher match rates, access to premium surveys, better rewards

---

## 6. Survey Builder (Enhanced)

### Current Question Types (v0.2.1)

- Multiple Choice
- Single Choice
- Rating Scale
- Short Text

### Planned Question Types (v0.5+)

- **Likert Scale** ⭐ — Essential for academic research
- **Matrix Questions** ⭐ — Multiple items, same scale
- **Ranking** — Order preferences
- **Demographic Questions** — Standardized demographic blocks
- **Open-ended** — Long-form text responses
- **File Upload** — Images, documents
- **Consent Form** — Informed consent with digital signature

### Why This Matters

For academic research platforms, Likert scales are critical. Most validated psychometric instruments use 5-point or 7-point Likert scales. Without them, researchers cannot use established measurement tools.

---

## 7. Research Template Library

### Pre-built Templates

| Template | Items | Use Case |
|----------|-------|----------|
| Customer Satisfaction (CSAT) | 10 | Market research |
| Employee Engagement | 15 | Organizational psychology |
| Mental Health (PHQ-9) | 9 | Clinical research |
| Academic Motivation | 12 | Educational psychology |
| Startup Intention | 8 | Entrepreneurship research |
| Leadership Style | 15 | Organizational behavior |
| Resilience Scale (RSA) | 25 | Psychology research |

### Template Workflow

```
Create Survey → Choose Template → AI Customizes → Add/Remove Questions →
Review → Publish
```

### Template Features

- Pre-validated scales with established reliability
- Citation suggestions for each scale
- Auto-populated demographic requirements
- AI customization based on research goals

---

## 8. Academic Features

### Academic Mode

Features that differentiate UoE from SurveyMonkey/Google Forms:

- **Citation suggestions** — Auto-generate references for scales used
- **Hypothesis builder** — Define null/alternative hypotheses
- **Variable mapping** — Independent/dependent variable relationships
- **Questionnaire validation** — Cronbach's alpha, factor analysis suggestions
- **Methodology suggestions** — Recommended research designs
- **Scale library** — Validated instruments with psychometric properties

### Example

```
Variable: Organizational Commitment

Recommended Scale: Meyer & Allen (1991)
Items: 18
Reliability: α = 0.82
Validity: Established across 40+ studies
Citation: Meyer, J. P., & Allen, N. J. (1991). A three-component
conceptualization of organizational commitment.
```

---

## 9. Data Analysis AI

### AI Research Analyst

**Capabilities:**

1. **Descriptive Statistics** — Mean, median, mode, standard deviation
2. **Inferential Statistics** — t-tests, ANOVA, correlation, regression
3. **Effect Size Calculation** — Cohen's d, eta-squared, Cramér's V
4. **Assumption Testing** — Normality, homogeneity of variance
5. **Post-hoc Analysis** — Tukey HSD, Bonferroni corrections
6. **Visualization Suggestions** — Recommended charts for data type

### Example Output

```
Dataset: Student Resilience Survey (n=342)

Main Finding:
Students with higher social support show 23%
higher resilience scores (M=4.2 vs M=3.4).

Statistical Test:
- Test: Independent samples t-test
- t(340) = 4.82, p < 0.001
- Effect size: Cohen's d = 0.67 (medium)
- 95% CI [0.54, 1.06]

Recommendation:
Consider running a multiple regression to control
for age and education level.
```

---

## 10. University Dashboard

### University Portal (Enterprise)

**Features:**

- **Research groups** — Organize by department/lab
- **Department management** — Faculty-level access control
- **Student accounts** — Bulk creation with institutional email
- **Shared participant pool** — Cross-department participant sharing
- **Institutional analytics** — Aggregate research metrics
- **Research repository** — Archive completed studies

### Dashboard Views

1. **Overview** — Active studies, total responses, quality metrics
2. **Departments** — Breakdown by academic unit
3. **Researchers** — Faculty activity and output
4. **Participants** — Pool size, engagement, quality scores
5. **Reports** — Institutional research impact
6. **Settings** — SSO, API keys, integrations

---

## 11. Marketplace Economy

### Reward System

**Earning points:**

| Action | Points |
|--------|--------|
| Survey completion | +50 |
| High quality response | +20 bonus |
| 7-day streak | +100 |
| 30-day streak | +500 |
| Referral (friend joins) | +25 |
| Profile completion | +15 |
| First survey | +30 |

**Consumption / Redemption:**

| Reward | Cost |
|--------|------|
| Gift cards (Amazon, etc.) | 5,000 points |
| Research certificates | 2,000 points |
| Research credits (for own studies) | 1,000 points |
| Premium badge | 3,000 points |
| Priority matching | 1,500 points |

### Level Progression

| Level | Title | Points Required |
|-------|-------|-----------------|
| 1 | Novice Contributor | 0 |
| 2 | Regular Participant | 500 |
| 3 | Trusted Respondent | 1,500 |
| 4 | Quality Expert | 3,500 |
| 5 | Research Veteran | 6,000 |
| 6 | Data Champion | 10,000 |
| 7 | Research Scholar | 15,000 |
| 8 | Master Researcher | 25,000 |

---

## 12. Security & Ethics

### Privacy & Compliance

- **GDPR compliance** — Full data subject rights
- **Data anonymization** — PII removal from datasets
- **Consent management** — Granular consent options
- **Data retention policies** — Configurable retention periods
- **Right to deletion** — Account and data removal

### Research Ethics

- **Ethics approval workflow** — IRB/ethics board integration
- **Informed consent forms** — Customizable consent documents
- **Vulnerable populations protection** — Age/condition safeguards
- **Data encryption** — AES-256 at rest, TLS 1.3 in transit
- **Audit logs** — Complete action history for compliance

### Security Features

- **SSO integration** — SAML 2.0, OAuth 2.0
- **Two-factor authentication** — TOTP, SMS
- **Role-based access control** — Granular permissions
- **API rate limiting** — Abuse prevention
- **Regular security audits** — Third-party penetration testing

---

## 13. Roadmap

### v0.2.1 (Current Beta)

- [x] Survey Builder (4-step wizard)
- [x] AI Assistant (basic analysis)
- [x] Marketplace with matching
- [x] Gamification (points, levels, badges)
- [x] Analytics dashboard
- [x] Bilingual (English/Farsi)
- [x] Dark/Light theme

### v0.5

- [ ] AI Research Analyst (advanced statistics)
- [ ] Payment system (point redemption)
- [ ] Advanced templates (Likert, Matrix, Ranking)
- [ ] Participant verification (identity)
- [ ] Likert scale support
- [ ] Matrix question type
- [ ] Research template library
- [ ] Academic Mode (citations, methodology)

### v1.0

- [ ] University ecosystem (portal, departments)
- [ ] API access (REST + GraphQL)
- [ ] Global participant network
- [ ] Mobile apps (iOS + Android)
- [ ] SPSS/Stata export
- [ ] Real-time collaboration
- [ ] Advanced AI (NLP open-ended analysis)
- [ ] Ethics approval workflow

### v2.0

- [ ] Multi-language support (beyond English/Farsi)
- [ ] Longitudinal studies
- [ ] Panel management
- [ ] Predictive analytics
- [ ] White-label solutions

---

## 14. Metrics

### North Star Metric

**Completed high-quality research responses per month**

### Researcher Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Surveys created | New surveys per week | 50+ |
| Completion rate | Average across all surveys | >85% |
| Time to collect | Days to reach sample size | <14 |
| Data quality score | Average quality percentage | >80% |
| NPS | Researcher satisfaction | >50 |

### Participant Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Active users | Monthly active participants | 10,000+ |
| Survey completion | Surveys completed per user | 3+/month |
| Retention | 30-day return rate | >60% |
| Quality score | Average participant score | >85/100 |
| Redemption rate | Points redeemed | >40% |

### AI Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Suggestions accepted | AI recommendations used | >70% |
| Quality improvement | Post-AI quality score lift | +15% |
| Bias detection rate | Flagged biased questions | >90% |
| Match accuracy | Correct participant matching | >80% |

### Business Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| MRR | Monthly recurring revenue | $10K+ (v1.0) |
| Conversion rate | Free to paid upgrade | >5% |
| Churn rate | Monthly cancellations | <5% |
| CAC | Customer acquisition cost | <$50 |
| LTV | Lifetime value | >$500 |

---

## 15. Competitive Positioning

### Platform Comparison

| Platform | Weakness | UoE Advantage |
|----------|----------|---------------|
| Google Forms | No participant network, basic features | AI marketplace with smart matching |
| SurveyMonkey | Expensive, limited academic tools | Academic focus, affordable pricing |
| Qualtrics | Enterprise-only, complex UX | Accessible AI research for all |
| Prolific | Participant-only, no survey builder | Full research lifecycle |
| Typeform | Design-focused, no research features | Research-grade analytics + quality |
| ResearchGate | Social network, no survey tools | End-to-end survey platform |

### UoE Unique Selling Points

1. **AI-powered matching** — Only platform with intelligent participant-survey matching
2. **Quality guarantee** — AI data quality engine filters noise automatically
3. **Academic focus** — Built for researchers, not marketers
4. **Gamification** — Participant engagement through rewards and progression
5. **Bilingual** — Native RTL support (Farsi/English)
6. **Affordable** — Free tier for individual researchers
7. **Full lifecycle** — From survey design to dataset export

### Target Market

- **Primary:** Graduate students and early-career researchers in Iran/Middle East
- **Secondary:** Academic institutions and research labs
- **Tertiary:** Market researchers and UX researchers

### Go-to-Market Strategy

1. **University partnerships** — Onboard student researchers
2. **Academic conferences** — Present at research methodology workshops
3. **Content marketing** — Blog posts on research methods
4. **Referral program** — Points for inviting researcher friends
5. **Template library** — Pre-built surveys for common research needs

---

*Document version: 1.0 | Last updated: 2025*
