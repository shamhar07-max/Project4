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
      "Show what you can actually do through skills, projects, assessments and evidence. How DigitalBurj Verified Talent will work for professionals.",
    answer:
      "If you're better than your CV makes you look, this is for you. Your profile will list the skills you've shown, the projects behind them and how each one was checked. Verified Talent is still being built.",
    blocks: [
      {
        type: "list",
        heading: "What your profile will hold",
        items: ["Projects you've built or delivered, with your part in them spelled out", "Assessments you've passed", "A clear label on each skill saying how it was checked", "Control over who sees what"],
      },
    ],
    faqs: [
      { q: "Does it cost anything?", a: "Pricing isn't set yet. We'll tell registered professionals before anything opens." },
    ],
    related: ["/talent/capability-passport", "/talent/how-verification-works", "/jobs/for-job-seekers", "/academy", "/insights/what-does-verified-professional-capability-mean"],
    cta: { heading: "Want to be on the early list?", ...talentInterest },
  },
  {
    slug: "for-employers",
    label: "For Employers",
    eyebrow: talentEyebrow,
    h1: "Verified Talent for Employers",
    seoTitle: "Evidence-Based Hiring with Verified Talent",
    description:
      "Search and assess professionals by what they have shown they can do, with the evidence attached. Learn how DigitalBurj Verified Talent will support employers.",
    answer:
      "We're designing Verified Talent so you can search for people by what they've shown they can do, open the work behind each skill, see how it was checked, and shortlist before you spend time on interviews.",
    blocks: [
      {
        type: "text",
        heading: "What it won't do",
        body: ["It won't make the hiring decision for you, and a label only means what it says. You still interview, check references and decide."],
      },
    ],
    related: ["/jobs/for-employers", "/talent/how-verification-works", "/talent/evidence", "/insights/what-does-verified-professional-capability-mean"],
    cta: { heading: "Tell us what roles you hire for.", ...employerInterest },
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
      "A verified skill is one where someone other than you has looked at the work and agreed it shows the skill. The label records what was checked, by whom, how and when. Without that check, it's self-reported, and the profile says so.",
    blocks: [
      {
        type: "compare",
        heading: "The difference in practice",
        columns: ["", "Self-reported", "Verified"],
        rows: [
          ["Who says so", "You", "An independent reviewer"],
          ["What's behind it", "Maybe nothing", "Work someone examined"],
          ["What the label records", "That you listed it", "What, who, how and when"],
        ],
      },
    ],
    related: ["/talent/how-verification-works", "/talent/evidence", "/talent/assessment", "/talent/capability-passport"],
    cta: { heading: "Get your skills checked when it opens.", ...talentInterest },
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
      "The Capability Passport is a format we're proposing: one record of your checked skills, projects, assessment results and verification history that you own and can share with whoever you choose. It's a proposal, not a product yet.",
    blocks: [
      {
        type: "list",
        heading: "What it would include",
        items: ["Skills, each with its verification label", "Links to the work behind them", "Assessment results and dates", "A history of who checked what"],
      },
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
      "Our assessments ask you to do the work, not describe it. You get a realistic task, complete it, then explain your choices to a reviewer who asks follow-up questions. An employer learns far more from that than from a multiple-choice score.",
    blocks: [
      {
        type: "flow",
        heading: "How an assessment runs",
        steps: ["Brief", "Do the task", "Submit the work", "Explain it", "Answer questions", "Reviewed"],
      },
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
      "Evidence is anything that shows you did the work: code you wrote, a report you produced, a system you set up, an assessment you passed. It counts when it's clearly yours, says what your part was, is dated, and someone else can look at it.",
    blocks: [
      {
        type: "list",
        heading: "Good evidence is",
        items: ["Yours, with your contribution stated", "Dated", "Something another person can open and check", "Free of anyone else's confidential information"],
      },
    ],
    related: ["/talent/verified-skills", "/talent/how-verification-works", "/talent/assessment"],
    cta: { heading: "Start keeping a record of your work.", ...talentInterest },
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
      "Every skill on a profile carries one label, and each label means one specific thing. That way nobody mistakes a skill you typed in for one an independent reviewer has checked.",
    blocks: [
      {
        type: "steps",
        heading: "The labels",
        steps: [
          { title: "Self-declared", body: "You added it. Nobody has checked." },
          { title: "Course completed", body: "You finished a course that covers it." },
          { title: "Assessed", body: "You passed a practical assessment of it." },
          { title: "Approved", body: "A reviewer looked at your work and approved it." },
          { title: "Verified", body: "An independent check confirmed the work supports the skill." },
          { title: "Production evidence", body: "You've used it in real work that's running today." },
        ],
      },
    ],
    related: ["/talent/verified-skills", "/talent/capability-passport", "/insights/what-does-verified-professional-capability-mean", "/resources/glossary"],
    cta: { heading: "Want to be checked when it launches?", ...talentInterest },
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
      "There are no open listings right now. When there are, each one will be a real vacancy with a named employer and a closing date. Register and we'll email you when something matching your skills goes up.",
    blocks: [],
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
      "Apply with your CV and, if you like, links to work you've done. Applying is free. We don't guarantee jobs or visas, and the employer makes the hiring decision.",
    blocks: [
      {
        type: "flow",
        heading: "How an application moves",
        steps: ["Apply", "Employer reviews", "Practical task (sometimes)", "Interview", "Decision"],
        caption: "You'll get a status update at each step, including when the answer is no.",
      },
    ],
    faqs: [
      { q: "Will anyone ask me to pay?", a: "No. If someone claiming to be from DigitalBurj asks a job seeker for money, it isn't us. Please report it." },
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
      "Tell us what the role needs people to be able to do. We list it, and candidates can attach work that shows those skills. You review, shortlist and decide. Employment terms and legal obligations stay with you.",
    blocks: [
      {
        type: "list",
        heading: "What we'll ask you for",
        items: ["The tasks the role involves in the first few months", "The skills those tasks need", "Salary range and location", "A closing date"],
      },
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
      "Short, practical guides on the things employers can actually check: how you describe your work, what you can show them, and how you handle a practical interview.",
    blocks: [
      {
        type: "cards",
        heading: "Guides",
        items: [
          { title: "CV guide", body: "Write about results, not duties.", href: "/jobs/cv-guide" },
          { title: "Interview preparation", body: "Have three to five solid examples ready.", href: "/jobs/interview-preparation" },
          { title: "Skills guide", body: "Match your skills to what the role needs.", href: "/jobs/skills-guide" },
        ],
      },
    ],
    related: ["/jobs/for-job-seekers", "/talent/for-professionals", "/academy"],
    cta: { heading: "Learn by building real projects.", label: "Explore Academy", href: "/academy" },
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
      "Find out what the job actually involves day to day. Prepare three to five examples from your own work: what the problem was, what you did, and what happened. Then practise explaining why you made the choices you made, out loud.",
    blocks: [
      {
        type: "list",
        heading: "The night before",
        items: ["Reread the job description and underline the tasks", "Match one example to each main task", "Have links to your work open and working", "Prepare two questions about the team's actual work"],
      },
    ],
    related: ["/jobs/cv-guide", "/jobs/skills-guide", "/talent/assessment"],
    cta: { heading: "Practise on real projects.", label: "Explore Academy", href: "/academy" },
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
      "Write what you achieved, specifically enough that an employer could check it. Open with two lines on the work you do, list experience with concrete results, name the skills you can show, and link to your work. Keep it honest. Anything on it may come up in the interview.",
    blocks: [
      {
        type: "compare",
        heading: "Duty vs result",
        columns: ["", "Weak", "Strong"],
        rows: [
          ["Support", "Responsible for customer emails", "Cut average reply time from 2 days to 4 hours by setting up a shared inbox"],
          ["Development", "Worked on the company website", "Rebuilt the contact form and fixed 12 accessibility issues"],
        ],
      },
    ],
    related: ["/jobs/interview-preparation", "/jobs/skills-guide", "/talent/evidence"],
    cta: { heading: "Put the work behind your CV.", label: "Explore Verified Talent", href: "/talent" },
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
      "Work out which skills the job needs, then describe yours precisely: what you can do, with which tools, and how well. \"SQL\" says little. \"Write SQL reports joining five tables for weekly sales figures\" says a lot. Back each one with a project, an assessment or a reference.",
    blocks: [],
    related: ["/talent/verified-skills", "/resources/checklists/career-skills-checklist", "/academy/learning-paths"],
    cta: { heading: "Build the skills a role needs.", label: "Explore Learning Paths", href: "/academy/learning-paths" },
  },
];
