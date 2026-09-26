import type { ContentPage } from "./types";

const talentEyebrow = "DigitalBurj Verified Talent";
const jobsEyebrow = "DigitalBurj Jobs";
const talentInterest = { label: "Register Interest", href: "/get-started/talent" };
const employerInterest = { label: "Employer Enquiry", href: "/get-started/hire" };

export const talentPages: ContentPage[] = [
  {
    slug: "for-professionals",
    label: "For Professionals",
    eyebrow: talentEyebrow,
    h1: "Verified Talent for Professionals",
    seoTitle: "Verified Talent for Professionals",
    description:
      "Make your real capability visible through skills, projects, assessments and evidence. How DigitalBurj Verified Talent will work for professionals.",
    answer:
      "DigitalBurj Verified Talent is being built for professionals whose ability is not captured by a CV. Instead of listing claims, your profile will show the skills you have demonstrated, the projects you have delivered, assessments you have completed and the evidence behind each, with its verification level clearly labelled.",
    blocks: [
      {
        type: "cards",
        heading: "What a professional profile will contain",
        items: [
          { title: "Professional identity", body: "Who you are, your role and the kind of work you do." },
          { title: "Skills", body: "Specific capabilities, each with a level and its source of evidence.", href: "/talent/verified-skills" },
          { title: "Projects", body: "Work you have delivered, described in terms of problem, contribution and result." },
          { title: "Assessments", body: "Practical assessments you have completed, with dates.", href: "/talent/assessment" },
          { title: "Evidence", body: "Artefacts that demonstrate the work: code, documents, reviews, outputs.", href: "/talent/evidence" },
          { title: "Verification", body: "Which items have been checked, by whom, and how.", href: "/talent/how-verification-works" },
          { title: "Availability", body: "Whether and how you are open to opportunities." },
          { title: "Capability Passport", body: "A portable summary of verified capability.", href: "/talent/capability-passport" },
        ],
      },
      {
        type: "text",
        heading: "You control what employers see",
        body: [
          "Profiles are designed so that professionals decide which evidence is shared and with whom. Sensitive details, such as current employer or contact information, will not be exposed without consent.",
        ],
      },
      {
        type: "callout",
        heading: "Current status",
        body: "Verified Talent is in development. Registering interest adds you to the list of early professionals we contact as features become available. It does not create a public profile.",
      },
    ],
    faqs: [
      { q: "Do I need to take a DigitalBurj Academy course to join?", a: "No. Academy learning can produce evidence for a profile, but evidence from other work and learning will also be accepted once the verification process supports it." },
      { q: "Does a Verified Talent profile guarantee a job?", a: "No. It makes your capability easier to see and trust. Employers make their own hiring decisions." },
    ],
    related: ["/talent/capability-passport", "/talent/how-verification-works", "/jobs/for-job-seekers", "/academy", "/insights/what-does-verified-professional-capability-mean"],
    cta: { heading: "Be among the first professionals on Verified Talent.", ...talentInterest },
  },
  {
    slug: "for-employers",
    label: "For Employers",
    eyebrow: talentEyebrow,
    h1: "Verified Talent for Employers",
    seoTitle: "Evidence-Based Hiring with Verified Talent",
    description:
      "Search and assess professionals by demonstrated capability and evidence, not only CV claims. Learn how DigitalBurj Verified Talent will support employers.",
    answer:
      "DigitalBurj Verified Talent is being designed to help employers find professionals by what they have demonstrated rather than what they claim. Employers will be able to search by capability, review the evidence behind each skill, see how it was verified, request further assessment and shortlist candidates before interview.",
    blocks: [
      {
        type: "flow",
        heading: "The planned employer workflow",
        steps: ["Search by capability", "Review evidence", "Check skill level", "Review project work", "Request assessment", "Shortlist", "Connect"],
      },
      {
        type: "callout",
        heading: "What Verified Talent does not do",
        body: "DigitalBurj does not guarantee the performance or suitability of any candidate. Verification labels describe what was checked and how. Hiring decisions, interviews and employment checks remain the employer's responsibility.",
      },
    ],
    faqs: [
      { q: "How is this different from a job board?", a: "A job board collects applications. Verified Talent is built around evidence of capability, so shortlisting can start from demonstrated skills rather than keywords on a CV." },
      { q: "Can we request a specific assessment?", a: "Requesting role-specific assessments is part of the planned employer workflow. Tell us your needs when you register interest." },
    ],
    related: ["/jobs/for-employers", "/talent/how-verification-works", "/talent/evidence", "/insights/what-does-verified-professional-capability-mean"],
    cta: { heading: "Tell us what capability you hire for.", ...employerInterest },
  },
  {
    slug: "verified-skills",
    label: "Verified Skills",
    eyebrow: talentEyebrow,
    h1: "Verified Skills",
    seoTitle: "Verified Skills: What They Are and How They Work",
    description:
      "A verified skill is a capability backed by evidence that someone independent has checked. How DigitalBurj separates claims from verified skills.",
    answer:
      "A verified skill is a specific capability that is supported by evidence and has been checked by someone other than the person claiming it. The verification states what was checked, by whom, how and when. A skill without evidence is a claim; a skill with evidence that nobody has checked is self-reported; a verified skill has passed an independent check.",
    blocks: [
      {
        type: "steps",
        heading: "Three layers of a skill",
        steps: [
          { title: "Claim", body: "\"I know this.\" A statement by the professional, useful but unproven." },
          { title: "Assessment", body: "\"I demonstrated this.\" A practical task completed under defined conditions." },
          { title: "Evidence", body: "\"Here is what demonstrates it.\" Artefacts from real or assessed work that others can examine." },
        ],
      },
      {
        type: "list",
        heading: "What makes a skill statement useful",
        items: ["It is specific: 'designs relational database schemas', not 'databases'", "It has a level with a defined meaning", "It links to the evidence behind it", "It says how and when it was verified", "It shows how recent the evidence is"],
      },
    ],
    faqs: [
      { q: "Does verification expire?", a: "Skills change over time, so each verification carries a date. Freshness is shown on the profile so employers can judge relevance." },
    ],
    related: ["/talent/how-verification-works", "/talent/evidence", "/talent/assessment", "/talent/capability-passport"],
    cta: { heading: "Make your skills verifiable.", ...talentInterest },
  },
  {
    slug: "capability-passport",
    label: "Capability Passport",
    eyebrow: talentEyebrow,
    h1: "The Capability Passport",
    seoTitle: "Capability Passport: A Portable Record of Verified Skills",
    description:
      "The Capability Passport is DigitalBurj's proposed portable record of verified skills, evidence, projects and assessment history, controlled by the professional.",
    answer:
      "The Capability Passport is DigitalBurj's proposed format for a portable, structured record of what a professional can do. It brings together identity, capability categories, verified skills, supporting evidence, projects, assessment results and verification history into one document that the professional controls and can share.",
    blocks: [
      {
        type: "list",
        heading: "What the passport contains",
        columns: 3,
        items: ["Identity", "Capability categories", "Verified skills", "Evidence", "Projects", "Assessment results", "Verification history", "Freshness of each item", "Availability"],
      },
      {
        type: "compare",
        heading: "Capability Passport vs CV",
        columns: ["", "CV", "Capability Passport"],
        rows: [
          ["Content", "Self-written summary", "Structured skills with evidence"],
          ["Trust", "Depends on the reader checking", "Shows what was verified and how"],
          ["Currency", "Updated occasionally", "Each item dated"],
          ["Comparison", "Hard across candidates", "Consistent structure"],
        ],
      },
      {
        type: "callout",
        heading: "A concept in development",
        body: "The Capability Passport is being designed as part of DigitalBurj Verified Talent. Its format will be published when it is ready for use.",
      },
    ],
    faqs: [
      { q: "Will the passport replace a CV?", a: "Not immediately. It is designed to sit alongside a CV and provide the evidence a CV cannot." },
      { q: "Who owns the passport?", a: "The professional. They decide what is included and who can see it." },
    ],
    related: ["/talent/verified-skills", "/talent/how-verification-works", "/talent/for-professionals", "/resources/glossary"],
    cta: { heading: "Follow the Capability Passport.", ...talentInterest },
  },
  {
    slug: "assessment",
    label: "Assessment",
    eyebrow: talentEyebrow,
    h1: "Practical Capability Assessment",
    seoTitle: "Practical Skills Assessment",
    description:
      "How DigitalBurj assesses capability: practical tasks, realistic scenarios, explaining and defending decisions, and reviewed outputs instead of recall tests.",
    answer:
      "A capability assessment asks a person to do the work, not describe it: complete a realistic task, explain their decisions and defend them under questioning. DigitalBurj assessments are designed to produce reviewable evidence of capability, which is more informative for employers than a multiple-choice score.",
    blocks: [
      {
        type: "steps",
        heading: "What a DigitalBurj assessment involves",
        steps: [
          { title: "Realistic brief", body: "A scenario with constraints like those in real work." },
          { title: "Practical output", body: "The candidate produces something: code, a document, a plan, a configuration." },
          { title: "Explanation", body: "They explain what they did and why." },
          { title: "Defence", body: "A reviewer questions choices and trade-offs." },
          { title: "Review", body: "Output is judged against published criteria." },
          { title: "Evidence", body: "The result and artefacts are recorded as evidence." },
        ],
      },
    ],
    faqs: [
      { q: "Are assessments timed?", a: "Some are, where time pressure is part of the job. Others allow time to produce considered work. Conditions are stated in advance." },
      { q: "Can AI tools be used during assessment?", a: "Rules are stated per assessment. Where AI tools are allowed, the candidate must be able to explain and defend the output." },
    ],
    related: ["/talent/evidence", "/talent/verified-skills", "/academy#how-learning-works"],
    cta: { heading: "Interested in practical assessment?", ...talentInterest },
  },
  {
    slug: "evidence",
    label: "Evidence",
    eyebrow: talentEyebrow,
    h1: "Capability Evidence",
    seoTitle: "Capability Evidence: What Counts and Why",
    description:
      "Evidence is what makes a skill credible. See what DigitalBurj accepts as evidence of capability, and how evidence is described, dated and protected.",
    answer:
      "Capability evidence is any artefact that shows a person has done the work they claim: code they wrote, a document they produced, a system they configured, an assessment they completed or a review of their work. Good evidence is attributable to the person, specific about their contribution, dated and examinable by someone else.",
    blocks: [
      {
        type: "list",
        heading: "Examples of evidence",
        items: ["Assessed project outputs", "Code repositories with clear authorship", "Documents, analyses and reports", "Recorded explanations and defences", "Reviews from supervisors or clients", "Production work, with confidential details removed", "Certifications from recognised bodies"],
      },
      {
        type: "list",
        heading: "What makes evidence strong",
        items: ["Clear individual contribution", "Relevant to the skill claimed", "Recent", "Examinable by a reviewer", "Free of confidential third-party information"],
      },
    ],
    faqs: [
      { q: "What if my best work is confidential?", a: "Describe the problem, your role and the result without confidential details, and support it with a reference or an assessment that demonstrates the same skill." },
    ],
    related: ["/talent/verified-skills", "/talent/how-verification-works", "/talent/assessment"],
    cta: { heading: "Start collecting evidence of your work.", ...talentInterest },
  },
  {
    slug: "how-verification-works",
    label: "How Verification Works",
    eyebrow: talentEyebrow,
    h1: "How Verification Works",
    seoTitle: "How Capability Verification Works",
    description:
      "Self-declared, course-completed, assessed, approved, verified and production evidence: what each DigitalBurj verification level means.",
    answer:
      "Verification is an independent check that evidence supports a claimed skill. DigitalBurj uses distinct labels so that nobody confuses a self-declared skill with one that has been independently verified. Approval by a reviewer and independent verification are different steps and are labelled differently.",
    blocks: [
      {
        type: "compare",
        heading: "Verification levels",
        columns: ["Level", "What it means", "Who confirmed it"],
        rows: [
          ["Self-declared", "The professional states they have the skill", "No one yet"],
          ["Course-completed", "A course covering the skill was completed", "The course provider"],
          ["Assessed", "A practical assessment was completed and scored", "The assessor"],
          ["Approved", "A reviewer accepted the submitted evidence", "A reviewer"],
          ["Verified", "Evidence was independently checked against defined criteria", "An independent verifier"],
          ["Production evidence", "The skill has been applied in real work, with evidence", "Verifier, with reference"],
        ],
      },
      {
        type: "callout",
        heading: "Approval is not verification",
        body: "Approval means a reviewer accepted evidence. Verification means the evidence was independently checked against defined criteria. DigitalBurj keeps these separate so the label always reflects what actually happened.",
      },
    ],
    faqs: [
      { q: "Who performs verification?", a: "Qualified reviewers who are independent of the person being verified, using published criteria for each skill." },
      { q: "Can a verification be withdrawn?", a: "Yes, if evidence is later found to be inaccurate or misattributed." },
    ],
    related: ["/talent/verified-skills", "/talent/capability-passport", "/insights/what-does-verified-professional-capability-mean", "/resources/glossary"],
    cta: { heading: "Want to be verified when it launches?", ...talentInterest },
  },
];

export const jobsPages: ContentPage[] = [
  {
    slug: "find-jobs",
    label: "Find Jobs",
    eyebrow: jobsEyebrow,
    h1: "Find Jobs",
    seoTitle: "Find Jobs",
    description:
      "Opportunities published by DigitalBurj and its partner employers. See current openings, or register interest to hear when roles matching your skills are listed.",
    answer:
      "DigitalBurj Jobs lists genuine opportunities from DigitalBurj and employers it works with. Every listing is a real vacancy with a named employer and a closing date. There are no open listings at the moment. Register your interest and we will contact you when roles matching your skills are published.",
    blocks: [
      {
        type: "callout",
        heading: "No current listings",
        body: "We only publish real vacancies. When positions open, they will appear here with full details and an application route.",
      },
      {
        type: "cards",
        heading: "In the meantime",
        items: [
          { title: "Prepare your evidence", body: "Build a record of your work that employers can trust.", href: "/talent/for-professionals" },
          { title: "Interview preparation", body: "How to prepare for practical and competency interviews.", href: "/jobs/interview-preparation" },
          { title: "Skills guide", body: "How to describe and demonstrate the skills employers look for.", href: "/jobs/skills-guide" },
        ],
      },
    ],
    related: ["/jobs/for-job-seekers", "/jobs/career-resources", "/company/careers", "/academy/learning-paths"],
    cta: { heading: "Hear about roles that match your skills.", label: "Register Interest", href: "/get-started/jobs" },
  },
  {
    slug: "for-job-seekers",
    label: "For Job Seekers",
    eyebrow: jobsEyebrow,
    h1: "DigitalBurj Jobs for Job Seekers",
    seoTitle: "Jobs for Job Seekers",
    description:
      "How DigitalBurj Jobs works for job seekers: profiles, evidence, applications, assessments, interviews, status updates, professional conduct and privacy.",
    answer:
      "DigitalBurj Jobs connects job seekers with genuine opportunities and lets them support applications with evidence of capability, not only a CV. It does not charge job seekers to apply, and it does not guarantee employment or visas. Employers make their own hiring decisions.",
    blocks: [
      {
        type: "steps",
        heading: "How it works",
        steps: [
          { title: "Create a profile", body: "Describe your experience and the work you are looking for." },
          { title: "Add evidence", body: "Link projects, assessments and verified skills." },
          { title: "Apply", body: "Apply to genuine listings with the evidence most relevant to each role." },
          { title: "Assessment", body: "Some roles include a practical assessment." },
          { title: "Interview", body: "Shortlisted candidates are invited by the employer." },
          { title: "Status updates", body: "You see where each application stands." },
        ],
      },
      {
        type: "callout",
        heading: "No job or visa guarantees",
        body: "DigitalBurj does not promise employment, placements or visas, and does not charge job seekers placement fees. Be cautious of anyone who claims otherwise in DigitalBurj's name.",
      },
      {
        type: "list",
        heading: "Your privacy",
        items: ["You choose what is visible to employers", "Contact details are shared only when you apply or consent", "You can withdraw an application", "You can ask for your data to be deleted"],
      },
    ],
    faqs: [
      { q: "Is it free for job seekers?", a: "DigitalBurj does not charge job seekers to apply for listed roles." },
      { q: "Does completing an Academy course lead to a job?", a: "Academy learning builds capability and evidence, which can strengthen applications. It does not guarantee employment." },
    ],
    related: ["/jobs/cv-guide", "/jobs/interview-preparation", "/talent/for-professionals", "/jobs/find-jobs"],
    cta: { heading: "Register your interest.", label: "Register Interest", href: "/get-started/jobs" },
  },
  {
    slug: "for-employers",
    label: "For Employers",
    eyebrow: jobsEyebrow,
    h1: "DigitalBurj Jobs for Employers",
    seoTitle: "Hire Through DigitalBurj Jobs",
    description:
      "Post opportunities, define skill requirements, review evidence and shortlist with DigitalBurj Jobs. DigitalBurj facilitates; employers decide.",
    answer:
      "DigitalBurj Jobs helps employers define what a role requires, attract suitable professionals and review evidence of capability before interview. DigitalBurj facilitates the process; the hiring decision, employment terms and legal obligations remain with the employer.",
    blocks: [
      {
        type: "flow",
        heading: "The hiring workflow",
        steps: ["Post opportunity", "Define skill requirements", "Request evidence", "Review professionals", "Shortlist", "Assessment", "Interview", "Hiring decision"],
      },
      {
        type: "list",
        heading: "Writing a role that attracts the right people",
        items: ["Describe the work, not just the title", "Separate required skills from preferred ones", "State what evidence would demonstrate each requirement", "Be clear about location, working pattern and employment type", "Include a closing date and an honest timeline"],
      },
    ],
    faqs: [
      { q: "Can you help define skill requirements?", a: "Yes. We can help translate a role into specific, assessable capabilities." },
      { q: "Who is responsible for employment checks?", a: "The employer, including right-to-work, references and any regulatory checks." },
    ],
    related: ["/talent/for-employers", "/talent/how-verification-works", "/jobs/skills-guide"],
    cta: { heading: "Tell us about the role.", ...employerInterest },
  },
  {
    slug: "career-resources",
    label: "Career Resources",
    eyebrow: jobsEyebrow,
    h1: "Career Resources",
    seoTitle: "Career Guides & Resources",
    description:
      "Practical guides for job seekers and professionals: preparing CVs, presenting evidence, interview preparation and building in-demand skills.",
    answer:
      "DigitalBurj career resources are practical guides for people looking for work or building their careers. They focus on what employers can actually check: clear descriptions of your work, evidence of skills, and preparation for practical interviews.",
    blocks: [
      {
        type: "cards",
        heading: "Guides",
        items: [
          { title: "CV guide", body: "Write a CV that describes work and results, not just duties.", href: "/jobs/cv-guide" },
          { title: "Interview preparation", body: "Prepare examples, practise explaining decisions, and handle practical tasks.", href: "/jobs/interview-preparation" },
          { title: "Skills guide", body: "Identify, describe and demonstrate the skills a role requires.", href: "/jobs/skills-guide" },
          { title: "Career skills checklist", body: "A checklist for reviewing your readiness for a target role.", href: "/resources/checklists/career-skills-checklist" },
          { title: "Learning paths", body: "Structured routes into software, AI, logistics, administration and more.", href: "/academy/learning-paths" },
          { title: "Career insights", body: "Articles on skills-based hiring and professional development.", href: "/insights/careers" },
        ],
      },
    ],
    related: ["/jobs/for-job-seekers", "/talent/for-professionals", "/academy"],
    cta: { heading: "Build capability employers can see.", label: "Explore Academy", href: "/academy" },
  },
  {
    slug: "interview-preparation",
    label: "Interview Preparation",
    eyebrow: jobsEyebrow,
    h1: "Interview Preparation Guide",
    seoTitle: "Interview Preparation Guide",
    description:
      "How to prepare for competency and practical interviews: research the role, prepare evidence-based examples and practise explaining decisions.",
    answer:
      "Good interview preparation means being able to show, with specific examples, that you can do the work the role requires. Research what the role involves, prepare three to five concrete examples of your work with the problem, your actions and the result, and practise explaining the reasoning behind your decisions.",
    blocks: [
      {
        type: "steps",
        heading: "A preparation plan",
        steps: [
          { title: "Understand the role", body: "List the main tasks and required skills from the job description." },
          { title: "Map your evidence", body: "For each requirement, find an example from your work, study or projects." },
          { title: "Structure examples", body: "Situation, what you did, why, and what happened. Be specific about your own contribution." },
          { title: "Practise explaining decisions", body: "Interviewers often ask why you chose one approach over another." },
          { title: "Prepare for practical tasks", body: "Revisit core skills. In a practical task, explain your thinking as you work." },
          { title: "Prepare questions", body: "Ask about the work, the team and how success is measured." },
        ],
      },
      {
        type: "list",
        heading: "Common mistakes",
        items: ["Describing team results without your own contribution", "General answers without examples", "Claiming skills you cannot demonstrate", "Not asking any questions", "Guessing instead of explaining how you would find out"],
      },
    ],
    related: ["/jobs/cv-guide", "/jobs/skills-guide", "/talent/assessment"],
    cta: { heading: "Practise with real projects.", label: "Explore Academy", href: "/academy" },
  },
  {
    slug: "cv-guide",
    label: "CV Guide",
    eyebrow: jobsEyebrow,
    h1: "How to Write a CV That Shows Capability",
    seoTitle: "CV Guide: Show Capability, Not Just Duties",
    description:
      "Write a CV that employers can trust: clear structure, specific achievements, relevant skills and links to evidence of your work.",
    answer:
      "A strong CV describes what you achieved and how, in specific terms an employer can check. Lead with a short summary of the work you do, list relevant experience with concrete results, name the skills you can demonstrate, and link to evidence such as projects or portfolios. Keep it accurate: every claim may be tested in interview.",
    blocks: [
      {
        type: "list",
        heading: "Structure",
        items: ["Name and contact details", "Two-to-three-line professional summary", "Experience: role, organisation, dates, and two to four specific achievements each", "Skills you can demonstrate, grouped sensibly", "Education and relevant certifications", "Links to evidence: portfolio, projects, repositories"],
      },
      {
        type: "compare",
        heading: "Duty vs achievement",
        columns: ["", "Weak (duty)", "Strong (achievement)"],
        rows: [
          ["Operations", "Responsible for shipment documentation", "Rebuilt the documentation checklist, reducing rejected customs filings"],
          ["Software", "Worked on the backend", "Designed and built the order API used by the mobile app"],
          ["Administration", "Managed schedules", "Coordinated schedules for a 30-person team using a shared booking system I set up"],
        ],
      },
    ],
    related: ["/jobs/interview-preparation", "/jobs/skills-guide", "/talent/evidence"],
    cta: { heading: "Back your CV with evidence.", label: "Explore Verified Talent", href: "/talent" },
  },
  {
    slug: "skills-guide",
    label: "Skills Guide",
    eyebrow: jobsEyebrow,
    h1: "Skills Guide: Identify, Describe and Demonstrate",
    seoTitle: "Skills Guide for Job Seekers",
    description:
      "How to identify the skills a role requires, describe your own skills specifically, and demonstrate them with evidence employers can review.",
    answer:
      "Employers hire for skills they can trust. To present yours well, identify the specific skills a target role requires, describe your own in precise terms (what you can do, with which tools, at what level), and support each with evidence such as a project, assessment or reference.",
    blocks: [
      {
        type: "steps",
        heading: "Three steps",
        steps: [
          { title: "Identify", body: "Collect five or more job descriptions for your target role and list the skills that recur." },
          { title: "Describe", body: "Replace broad labels with specific statements. 'Builds monthly management reports in Excel with pivot tables' says more than 'Excel'." },
          { title: "Demonstrate", body: "Attach evidence to each important skill, or build it through a project or assessment." },
        ],
      },
      {
        type: "list",
        heading: "Skills that transfer across many roles",
        items: ["Clear written communication", "Working with data and spreadsheets", "Using business systems such as CRM and ERP", "Problem analysis", "Planning and prioritisation", "Working safely with AI tools"],
      },
    ],
    related: ["/talent/verified-skills", "/resources/checklists/career-skills-checklist", "/academy/learning-paths"],
    cta: { heading: "Build the skills a role needs.", label: "Explore Learning Paths", href: "/academy/learning-paths" },
  },
];
