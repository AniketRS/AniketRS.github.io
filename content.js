/* =====================================================================
   PORTFOLIO CONTENT — edit this file to change what the website shows.
   ---------------------------------------------------------------------
   • Text goes inside quotes "like this". Keep the commas between items.
   • To add an item, copy an existing { ... } block, paste it below, edit it.
   • Leave a value as "" (empty) to hide it.
   • Lines starting with // are notes for you; the website ignores them.
   • Save, then refresh index.html in your browser.
   Source of the content: "Content for the portfolio" Google Doc (Nov 2026),
   plus your resume and the documents in your Google Drive folder.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- Look and feel ----------
     palette: the colour theme a visitor sees first:
     "marigold", "peacock", "rani" or "forest". Visitors can switch it. */
  theme: { palette: "marigold" },

  /* ---------- Basic profile ---------- */
  profile: {
    name: "Aniket Shinde",
    role: "Public Policy & Development Professional",
    location: "New Delhi, India",
    hometown: "Karmala, Solapur, Maharashtra",
    email: "mail5aniketshinde@gmail.com",
    phone: "+91 7057967220",
    linkedin: "https://www.linkedin.com/in/aniketshinde24",
    portrait: "aniket-portrait.jpg",   // shown in the top section
    photo: "",   // optional photo above the map in About (e.g. "me-gudalur-evening.jpg")
    resume: "",                        // e.g. "assets/Aniket_Shinde_Resume.pdf"
    headline: "Public policy and development professional with over 3 years of field and governance experience across Gujarat, Jharkhand, Uttarakhand, Maharashtra and Tamil Nadu. Has worked with district administrations, panchayats, line departments and tribal (PVTG) communities on scheme delivery, livelihood convergence, waste management and political research. Brings strengths in stakeholder engagement, primary research, documentation and policy drafting, grounded in an Economics degree from Fergusson College, Pune.",
    summary: [
      "I am a public policy and development professional. My work has been with district administrations, panchayats, line departments, NGOs, and tribal and rural communities across Gujarat, Jharkhand, Uttarakhand, Maharashtra, Tamil Nadu and Delhi.",
      "As an SBI Youth for India Fellow, I planned and implemented a local governance project that helped more than 75 people from Particularly Vulnerable Tribal Groups enrol in social security schemes and obtain documents. At Waste Warriors, I worked on the Paryavaran Sakhi waste management model in villages around Jim Corbett National Park. As a Public Policy in Action Fellow in Sahibganj, an Aspirational District, I worked from the District Planning Office on livelihood convergence committees, the District Livelihood Potential Map, PM Awards nominations, school and health-infrastructure assessments, scheme monitoring and project implementation.",
      "In the Mookerjee Fellowship I practised drafting parliamentary questions, Zero Hour speeches, a Private Member Bill and MP briefing notes. With three teammates, I also covered 9 constituencies of North Gujarat, Saurashtra and South Gujarat in 14 days, surveying more than 650 people."
    ],
    focusAreas: ["Scheme access & delivery", "District planning", "Monitoring & verification", "Rural livelihoods", "Field research", "Legislative drafting"]
  },

  /* ---------- Headline figures (role: the case study it opens) ---------- */
  impact: [
    { value: "75+",     label: "PVTG members enrolled in social security schemes in the Nilgiris", role: "sbi-yfi" },
    { value: "650+",    label: "voters surveyed across 9 Gujarat constituencies in 14 days", role: "mookerjee" },
    { value: "1,600+",  label: "voter surveys in Pimpri and Bhor constituencies in 2 months", role: "showtime" },
    { value: "1,515",   label: "household and commercial units in a baseline survey of 7 gram panchayats", role: "waste-warriors" },
    { value: "3 + 1",   label: "PM Awards Innovation nominations, plus a Holistic Development of District application", role: "ppia" },
    { value: "26",      label: "Birsa Harit Gram Yojana sites verified across 3 blocks", role: "ppia" },
    { value: "53",      label: "scheme files organised for district review and payments", role: "ppia" },
    { value: "6",       label: "states where I have lived and worked", role: "" }
  ],

  /* ---------- Where I've worked: highlighted on the India map ----------
     mapId = the state's code on the map; role = the case study a click opens. */
  workedIn: [
    { state: "Delhi", mapId: "dl",       what: "Mookerjee Fellowship · Noida / Delhi", role: "mookerjee" },
    { state: "Gujarat", mapId: "gj",     what: "Ground-intelligence study, 9 constituencies", role: "mookerjee" },
    { state: "Jharkhand", mapId: "jh",   what: "Public Policy in Action · Sahibganj", role: "ppia" },
    { state: "Uttarakhand", mapId: "ut", what: "Waste Warriors · Ramnagar, Corbett", role: "waste-warriors" },
    { state: "Tamil Nadu", mapId: "tn",  what: "SBI Youth for India · Gudalur, Nilgiris", role: "sbi-yfi" },
    { state: "Maharashtra", mapId: "mh", what: "Showtime Consulting, HappiMynds · Pune; home town Karmala", role: "showtime" }
  ],

  /* ---------- My story (shown as paragraphs; edit freely) ---------- */
  story: [
    "I grew up in Karmala, a small town in Solapur district of Maharashtra, and studied at a local Marathi-medium school. I stayed among the top three in my class from Class 7 to Class 10, and in 2017 I finished Class 10 as the taluka topper with 98.4%. Outside the classroom I was always drawing, and earned Grade A in the Maharashtra government's Elementary and Intermediate drawing exams, a grade few students get. I also collected coins, old currency notes and antiques. Both hobbies trained the same habit: noticing small details and staying patient with them.",
    "Karmala did not have the colleges I needed, so after Class 10 I moved to Pune and joined Fergusson Junior College in the science stream, studying Physics, Chemistry, Maths and Geography. Moving from a small-town, Marathi-medium classroom to one of the city's best-known colleges meant adapting quickly to a new language, a new pace and new people.",
    "For my degree I chose Economics at Fergusson College, with minors in Political Science and Sociology: the three subjects that explain how public money is spent, how decisions are made, and who they reach. I graduated in 2022 with a CGPA of 9.54 out of 10. College was also where I first worked with communities. With the National Service Scheme I taught children in urban slums and joined health camps, blood donation drives, street plays and a seven-day winter camp in a remote village. With Seva Sahyog Foundation I supported a menstrual hygiene campaign and child education work. In my final year I also worked part-time at Starbucks.",
    "Since 2023 I have taken that grounding into the field: surveying voters across two constituencies in Pune district, helping tribal families in the Nilgiris get insured and documented, building community waste systems on the edge of Corbett, working inside a district collectorate in Jharkhand, and training in legislative and political work in Delhi. The student from Karmala now works where policy meets the people it is written for, and still pays attention to the details."
  ],

  /* ---------- Case studies: one per role (newest first) ----------
     color: saffron | leaf | teal | sky | rani | violet
     cover: a photo file name from the photos list
     type: "fellowship" | "role" | "internship"                      */
  roles: [
    {
      id: "mookerjee",
      color: "saffron",
      cover: "mookerjee-cover-parliament.jpg",
      short: "Mookerjee Fellowship",
      title: "Mookerjee Fellow",
      org: "Policy, Politics and Governance Foundation (PPGF)",
      place: "Noida / Delhi · fieldwork in Gujarat",
      state: "Delhi",
      start: "Aug 2026", end: "Nov 2026",
      type: "fellowship",
      team: "Ground-intelligence Team 3, with Geetika Pant, Aditi Singh Rajput and Darsh Gupta",
      oneLine: "Training in legislative and political work: drafting practice, course modules on history, economics, law and caste, and a 14-day ground-intelligence exercise across Gujarat.",
      context: {
        text: "The fellowship trains fellows to work in the politics and governance domain. Training covered practice drafting of parliamentary questions, Zero Hour speeches, special mentions, chargesheets, political documentation, policy briefs and issue briefs. Course modules covered history, economics in policymaking, the legislative process, law and the Constitution, and caste. The field component was a ground intelligence gathering assignment of 2 weeks duration in 3 regions of Gujarat. This assignment was conducted in a group of 4 people and included 2 problem statements.",
        facts: ["9 constituencies", "14 days in the field", "North Gujarat · Saurashtra · South Gujarat", "Findings presented to the board"]
      },
      numbers: [
        { value: "650+", label: "people surveyed" },
        { value: "800+", label: "people reached in total" },
        { value: "30+",  label: "FGDs and key-informant interviews" },
        { value: "2",    label: "study reports presented to the board" }
      ],
      workstreams: [
        { title: "Problem statement 1: political sentiment of the Koli and Thakor communities", points: [
          "Studied the grievances and political leanings of two of Gujarat's largest OBC communities in North Gujarat and Saurashtra.",
          "Co-wrote the approach note and questionnaire, and ran surveys, FGDs and key-informant interviews in villages of Vav, Deodar, Kankrej, Patan, Somnath and nearby areas.",
          "Found that the candidate's caste or community was the most cited voting factor (35%), ahead of party (26.5%) and development (24.2%)."
        ]},
        { title: "Problem statement 2: the rise of Chaitar Vasava and AAP among South Gujarat's tribal voters", points: [
          "Studied tribal voters in Jhagadia, Nandod and Dediapada (Bharuch and Narmada districts).",
          "Combined surveys, FGDs and interviews with elected representatives, party workers and youth organisations.",
          "Found that tribal voters in the belt are strongly candidate-centric."
        ]},
        { title: "Field operations and reporting", points: [
          "Planned routes and kept daily work logs across districts.",
          "Built an expense tracker for the exercise in Google AI Studio.",
          "Prepared reports and presentations, and presented the findings to the board."
        ]},
        { title: "Drafting practice", points: [
          "A Lok Sabha starred question on the Namami Gange Mission in Bihar.",
          "Zero Hour speeches on overcharging at railway stations and on unpaid sugarcane FRP dues in Solapur.",
          "A Private Member Bill to regulate internships.",
          "An issue brief for MPs on the Prime Minister's visit to Uzbekistan and the SCO summit.",
          "A chargesheet, a constituency mental map of Rajmahal (Jharkhand), case studies and policy assignments."
        ]}
      ],
      learnings: [
        "In political fieldwork, every sample has gaps, so we used purposive and snowball sampling and stated the limits in every report.",
        "A strong parliamentary question is narrow and checkable, and sets up the supplementary."
      ],
      docs: ["gi-koli-thakor", "gi-south-gujarat", "brief-central-asia", "cs-delhi-shanghai", "cs-campaign", "ac-rajmahal", "policy-assignment", "pq-namami-gange", "zh-railways", "zh-sugarcane", "chargesheet", "veto-nicobar"]
    },
    {
      id: "ppia",
      color: "leaf",
      cover: "ppia-cover-village.jpg",
      short: "Public Policy in Action",
      title: "Public Policy in Action Fellow",
      org: "Transform Rural India Foundation",
      place: "District Collectorate, Sahibganj, Jharkhand",
      state: "Jharkhand",
      start: "Sep 2025", end: "Aug 2026",
      type: "fellowship",
      team: "District Resource Cell, District Planning Office · with co-fellow Archit Kumar and ABP Fellow Manish Kumar",
      oneLine: "A year inside the District Planning Office of an Aspirational District: livelihood mapping, scheme verification, PM Awards documentation, health and education infrastructure, and institutional coordination.",
      context: {
        text: "Sahibganj lies in the Santhal Pargana region on the Ganga. I worked with Santhal and Pahariya communities, district officials, school teachers, students and farmers. The fellowship involved coordinating with more than 10 departments, including JSLPS, Agriculture, Fisheries, Horticulture, Animal Husbandry, Education, Health and Electricity.",
        facts: ["9 blocks · 162 gram panchayats", "~11.5 lakh people", "Santhal and Pahariya communities", "NITI Aayog Aspirational District"]
      },
      numbers: [],
      workstreams: [
        { title: "Key contributions", points: [
          "Contributed to the preparation of the District Livelihood Potential Mapping (DLPM) document through secondary research, interdepartmental data collection and consolidation of district-level indicators covering agriculture, fisheries, horticulture, livestock, SHGs, FPOs and non-farm livelihoods.",
          "Conducted field-based monitoring and verification of government-funded projects, including 6 MGNREGA worksites, 8 solar lift irrigation sites, 5 additional classroom sites and 6 mushroom cultivation assessment locations across multiple blocks.",
          "Drafted and uploaded 3 project nominations under the PM Awards for Excellence in Public Administration (Innovation category), covering caged fisheries, water hyacinth crafts and mushroom cultivation; additionally contributed to the Holistic Development of District application.",
          "Supported district-level livelihood initiatives through project documentation, beneficiary assessments and impact monitoring of cage-based fisheries and mushroom cultivation, including preparation of a financial audit report for the fisheries project.",
          "Co-led the formation of the District Livelihood Convergence Committee (DLCC) and Block Livelihood Convergence Committee (BLCC) in the district in collaboration with the Jharkhand State Livelihood Promotion Society (JSLPS).",
          "Supported public infrastructure planning through site identification and assessment for 6 proposed Health Sub-Centres and monitoring of education and healthcare infrastructure projects.",
          "Contributed to the establishment and operationalisation of the Phulo-Jhano Digital Library, including inauguration coordination, preparation of its book catalogue and a student survey involving 41 respondents.",
          "Prepared project reports, presentations, case studies and financial documentation for district-level review, including Project Sinchai covering 30 proposed solar pump locations and administrative documentation of 53 scheme files.",
          "Co-drafted the district-level PESA implementation document.",
          "Attended district-level coordination meetings, DISHA meetings and other related training workshops and meetings."
        ]}
      ],
      learnings: [
        "A file in a collectorate moves only when someone carries it. Following up is part of the work.",
        "Field verification shows what reports do not, and the gaps it finds go back to the department."
      ],
      docs: ["dlpm", "pesa", "pm-shri"]
    },
    {
      id: "waste-warriors",
      color: "sky",
      cover: "ww-forest-cleanup.jpg",
      short: "Waste Warriors",
      title: "Project Associate",
      org: "Waste Warriors Society",
      place: "Ramnagar, Nainital · villages around Jim Corbett National Park",
      state: "Uttarakhand",
      start: "Dec 2024", end: "Aug 2025",
      type: "role",
      team: "Project: Strengthening and expanding the Paryavaran Sakhi model in village panchayats",
      oneLine: "Sustainable rural waste management on the edge of a tiger reserve, with villagers, panchayats, block and forest officials, and resort owners.",
      context: {
        text: "Waste Warriors works on the waste crisis in the Indian Himalayan Region. Its Paryavaran Sakhi model, started in 2021 around Corbett Tiger Reserve, trains local women as entrepreneurs who run community waste collection. My work was to help strengthen the model and expand it into new panchayats.",
        facts: ["Corbett Tiger Reserve landscape", "Paryavaran Sakhi model", "Panchayat, forest and resort stakeholders"]
      },
      numbers: [
        { value: "7",       label: "gram panchayats in the baseline survey" },
        { value: "1,515",   label: "household and commercial units covered" },
        { value: "2",       label: "new panchayats onboarded" },
        { value: "₹60,000", label: "volunteer and intern programme budget" }
      ],
      workstreams: [
        { title: "Research: baseline and feasibility", points: [
          "Helped run a baseline survey of 7 gram panchayats covering 1,515 household and commercial units, on disposal habits, segregation, collection infrastructure and participation.",
          "Assessed whether communities would join a decentralised waste system and pay monthly user charges.",
          "Analysed gaps in collection, segregation, transport and disposal, and costed collection, transport and processing to test whether the system could pay for itself."
        ]},
        { title: "Expansion and operations", points: [
          "Led the planning and running of onboarding campaigns in 2 new panchayats.",
          "Took part in waste collection, user-fee collection, segregation and Waste Bank maintenance.",
          "Helped the outreach manager coordinate with panchayat, block and forest officials."
        ]},
        { title: "Campaigns and awareness", points: [
          "Ran cleanup drives, including one on World Environment Day at Dhikuli Panchayat and another with the Forest Department.",
          "Helped organise a cyclothon for World Environment Day.",
          "Ran waste-management sessions and games for school students and tourist groups, plus Chai Pe Charcha and menstrual hygiene sessions."
        ]},
        { title: "Systems and policy documents", points: [
          "Wrote the SOP and guidelines for cleanup drives, covering planning, permissions, safety, segregation and reporting.",
          "Designed the Volunteer and Intern Engagement Policy and programme, with a budget of ₹60,000.",
          "Drafted plans of action for onboarding campaigns and tourist engagement."
        ]}
      ],
      learnings: [
        "Waste systems last when the community runs them and can pay for them, so user fees and local women's livelihoods matter as much as trucks and bins."
      ],
      docs: ["ww-sop", "ww-volunteer"]
    },
    {
      id: "sbi-yfi",
      color: "teal",
      cover: "sbi-iec-session.jpg",
      short: "SBI Youth for India",
      title: "SBI Youth for India Fellow",
      org: "SBI Foundation · deputed to ACCORD",
      place: "Gudalur and Pandalur blocks, The Nilgiris, Tamil Nadu",
      state: "Tamil Nadu",
      start: "Oct 2023", end: "Nov 2024",
      type: "fellowship",
      team: "Domain mentor: Anil Misquith (ACCORD)",
      oneLine: "Enabling the community through awareness, documentation and access to government schemes and entitlements, with four PVTG communities in the Nilgiri Biosphere Reserve.",
      context: {
        text: "Gudalur and Pandalur are home to the Paniya, Kattunayakan, Betta Kurumba and Mullu Kurumba, four Particularly Vulnerable Tribal Groups. ACCORD has worked with them for four decades. Many families were eligible for welfare schemes but missed out because of low awareness, missing documents and hard application processes. I worked in Tamil through local translators.",
        facts: ["4 PVTG communities", "Nilgiri Biosphere Reserve", "Partner: The Real Elephant Collective", "13-month fellowship"]
      },
      numbers: [
        { value: "75+", label: "people enrolled in social security schemes" },
        { value: "96",  label: "artisans in the beneficiary database (13 villages)" },
        { value: "40",  label: "PM-JAY health cards at the Thorapally camp" },
        { value: "₹3.5 Cr+", label: "combined insurance cover secured for tribal families" }
      ],
      workstreams: [
        { title: "Research and needs assessment", points: [
          "Compiled a guide to central and Tamil Nadu schemes covering benefits, documents and eligibility, later translated into Tamil.",
          "Surveyed area animators in English and Tamil, held FGDs, and visited area centres, panchayats and the taluk office."
        ]},
        { title: "Awareness sessions in tribal hamlets", points: [
          "Ran awareness sessions in tribal hamlets on why insurance schemes matter and how to enrol, with an NGO mentor translating."
        ]},
        { title: "Insurance enrolment with lantana-craft artisans", points: [
          "Partnered with The Real Elephant Collective to work with 90+ artisans who make lantana-wood elephants at Thorapally.",
          "Built a database of 96 artisans across 13 villages, screened their eligibility and filed PMSBY and PMJJBY applications through 7 banks.",
          "Organised a PM-JAY enrolment camp at Thorapally with the district coordinator, where 40 health cards were generated.",
          "Together, these enrolments gave the artisans and their families over ₹3.5 crore in combined insurance cover across PMSBY, PMJJBY and PM-JAY."
        ]},
        { title: "Documents and other entitlements", points: [
          "Started Pehchan artisan card applications for 17 senior craftsmen.",
          "Traced birth records for children at GTR Kanchikolly, collected scholarship data from schools, and mobilised the community for a PM-JANMAN campaign camp."
        ]}
      ],
      learnings: [
        "Trust and a local resource person mattered more than any form.",
        "Welfare reaches people when someone helps them through documents, banks and camps, step by step."
      ],
      docs: ["sbi-final", "sbi-synopsis", "sbi-plan"]
    },
    {
      id: "showtime",
      color: "rani",
      cover: "",
      short: "Showtime Consulting",
      title: "Field Executive",
      org: "Showtime Consulting",
      place: "Pimpri and Bhor constituencies, Pune district",
      state: "Maharashtra",
      start: "Jun 2023", end: "Aug 2023",
      type: "role",
      team: "",
      oneLine: "Election fieldwork: surveys, voter conversations, candidate feedback and sentiment mapping in two Pune-district constituencies.",
      context: { text: "My first field role. I spoke with voters in Pimpri and Bhor about local issues, candidates and government work, and turned what I heard into reports for campaign planning.", facts: ["2 constituencies", "2 months"] },
      numbers: [ { value: "1,600+", label: "surveys conducted" }, { value: "2", label: "constituencies" } ],
      workstreams: [
        { title: "Election research", points: [
          "Ran more than 1,600 surveys in 2 months.",
          "Talked with voters about local issues, candidate feedback and government performance, and mapped sentiment.",
          "Wrote field reports for targeted campaign planning."
        ]}
      ],
      learnings: [],
      docs: []
    },
    {
      id: "happimynds",
      color: "violet",
      cover: "",
      short: "HappiMynds",
      title: "Market Research Intern",
      org: "HappiMynds",
      place: "",
      state: "Maharashtra",
      start: "Apr 2023", end: "May 2023",
      type: "internship",
      team: "",
      oneLine: "Primary and secondary market research, survey design and reporting.",
      context: { text: "", facts: [] },
      numbers: [],
      workstreams: [
        { title: "Research", points: [
          "Ran primary and secondary market research, and designed and administered surveys and questionnaires.",
          "Organised the findings into structured reports."
        ]}
      ],
      learnings: [],
      docs: []
    }
  ],


  /* ---------- Field data (charts on the dashboard) ----------
     kind "bars": a bar chart, rows = [label, number]. kind "tiles": number tiles. */
  fieldData: [
    { role: "ppia", kind: "bars", title: "Sahibganj: field verification and outputs", source: "Weekly work updates, Oct 2025 – Jul 2026. Counts are reported activities; some were done jointly with colleagues.",
      rows: [["Scheme files organised", 53], ["College students surveyed", 41], ["Solar pump locations identified (Project Sinchai)", 30], ["BHGY sites verified", 26], ["Classroom project contacts followed up", 14], ["Solar lift irrigation sites inspected", 8], ["MGNREGA work sites inspected", 6], ["Mushroom impact-assessment locations", 6], ["Health Sub-Centre site assessments", 6], ["Additional classroom sites inspected", 5], ["PM Awards Innovation nominations", 3], ["Library electricity applications", 2]] },
    { role: "sbi-yfi", kind: "bars", title: "Nilgiris: enrolments and applications by scheme", source: "SBI YFI final project report, 2024.",
      rows: [["PMSBY accident insurance", 51], ["PM-JAY health cards", 40], ["PMJJBY life insurance", 36], ["Pehchan artisan card applications", 17]] },
    { role: "mookerjee", kind: "tiles", title: "Gujarat ground study", source: "Mookerjee Fellowship ground-intelligence exercise, 2026.",
      rows: [["People reached", "800+"], ["People surveyed", "650+"], ["FGDs and KIIs", "30+"], ["Constituencies", "9"], ["Days in the field", "14"], ["Team members", "4"]] },
    { role: "waste-warriors", kind: "tiles", title: "Corbett: waste management baseline", source: "Waste Warriors baseline survey, 2025.",
      rows: [["Gram panchayats surveyed", "7"], ["Household and commercial units", "1,515"], ["New panchayats onboarded", "2"], ["Volunteer programme budget", "₹60,000"]] },
    { role: "showtime", kind: "tiles", title: "Pune: election fieldwork", source: "Showtime Consulting, 2023.",
      rows: [["Voter surveys", "1,600+"], ["Constituencies", "2"], ["Months", "2"]] }
  ],

  /* ---------- Competencies (shown as a table) ---------- */
  competencies: [
    ["Public policy research", "DLPM, PESA research, PM-JANMAN documentation, policy and issue briefs"],
    ["Monitoring and evaluation", "MGNREGA, BHGY, DMFT and infrastructure verification; mushroom impact assessment"],
    ["Project management", "Project Sinchai, the Phulo-Jhano Digital Library, livelihood initiatives, panchayat onboarding"],
    ["Data analysis", "Student survey, beneficiary datasets, departmental data, baseline of 1,515 units"],
    ["Government liaison", "10+ district departments and JSLPS; DC, DDC and DPO offices; block and forest officials"],
    ["Report writing", "PM Awards nominations, field reports, audit reports, case studies, SOPs"],
    ["Financial documentation", "Utilisation certificates, financial verification, 53 scheme files, ₹60,000 budget"],
    ["Stakeholder management", "DC, DPO, DDC, departmental officials, FPOs, SHGs, panchayats, resort owners"],
    ["Rural livelihoods", "Fisheries, mushroom cultivation, NTFP, Super Napier grass, lantana craft"],
    ["Institutional development", "DLCC–BLCC formation process, PESA implementation"],
    ["Political research and drafting", "Ground intelligence in 9 constituencies, parliamentary questions, Zero Hour speeches, a Private Member Bill"]
  ],

  /* ---------- Writing samples (shown with a short excerpt) ---------- */
  writing: [
    { role: "mookerjee", kind: "Zero Hour speech", title: "Overcharging at railway stations",
      excerpt: "Sir, the root of the problem is structural, not incidental. A 2017 CAG performance audit had already warned this house that railways were accepting unworkably high licence fees from catering contractors…",
      link: "" /* https://drive.google.com/file/d/1QSttGSIsLmSpnvvROg9rUvBAxmNvEqk-/view */ },
    { role: "mookerjee", kind: "Zero Hour speech", title: "Unpaid FRP dues to Solapur's sugarcane farmers",
      excerpt: "As of May this year, 23 out of 36 sugar mills in my district still have not cleared FRP payments of the farmers. The pending dues… are close to Rs. 360 crore.",
      link: "" /* https://drive.google.com/file/d/1EYPwhGTC5grrmsm_T_acyzxoy0vfk_Yt/view */ },
    { role: "mookerjee", kind: "Parliamentary question", title: "Progress of the Namami Gange Mission in Bihar",
      excerpt: "Will the Minister of Jal Shakti be pleased to state the number of Namami Gange projects sanctioned and completed in Bihar to date… for districts falling in the Bagmati and Kosi tributary basins?",
      link: "" /* https://drive.google.com/file/d/1WTexi6KPar3fvAYKZ1D8zQGzyVIrqfcV/view */ },
    { role: "mookerjee", kind: "Issue brief", title: "The Prime Minister's visit to Uzbekistan and the SCO summit",
      excerpt: "This briefing document provides Members of Parliament with the necessary background, strategic importance, expected benefits, global impact, and clear talking points.",
      link: "" /* https://drive.google.com/file/d/1R2rzAQsnPkYM6kdbbJn3Kv_Pd00wMN8Q/view */ },
    { role: "mookerjee", kind: "Case study", title: "Delhi and Shanghai: why one city fixed its problems",
      excerpt: "It attributes the failure primarily to Delhi's fragmented government and administrative structure… Shanghai's consolidated governance model enabled faster progress.",
      link: "" /* https://drive.google.com/file/d/1zyHA3u0k8AzlUZaZVUeoxCV4B5Y4zUlQ/view */ },
    { role: "mookerjee", kind: "Case study", title: "A failed political campaign: Maharashtra, 2024",
      excerpt: "Failure of a political campaign rarely depends on a single factor. There are multiple small factors that contribute to the failure or success of a campaign.",
      link: "" /* https://drive.google.com/file/d/1w7XylXeR6fDNOG7f345RW5Sc3BSL3Wx7/view */ },
    { role: "mookerjee", kind: "Policy assignment", title: "Policy is downstream of political structure",
      excerpt: "Any policy is not judged by its intentions, but it is judged by the outcomes it has produced.",
      link: "" /* https://drive.google.com/file/d/1LHQH4pTTuRvgxiI9LXMQubYtBZbcGPV4/view */ },
    { role: "mookerjee", kind: "Constituency mental map", title: "Rajmahal (AC-01), Jharkhand",
      excerpt: "It is the only general (non-reserved) constituency in the Sahibganj district, surrounded by Borio and Barhait, which are ST reserved constituencies.",
      link: "" /* https://drive.google.com/file/d/15joLqSrES_vh4VEhc_vmVvpE9wmCqFQQ/view */ },
    { role: "ppia", kind: "Policy note", title: "PESA in Sahibganj: scope and opportunities",
      excerpt: "PESA provides an important institutional framework through which Gram Sabhas can participate in decisions related to mining approvals, environmental monitoring, land-use changes, and rehabilitation.",
      link: "" /* https://drive.google.com/file/d/1Phu6exJKiQHVOJ4WFuDwKG4kM2nA_gUo/view */ },
    { role: "waste-warriors", kind: "SOP", title: "SOP and guidelines for cleanup drives",
      excerpt: "Encourage community to take the ownership of their waste and responsibility of keeping their surroundings neat and clean.",
      link: "" /* https://drive.google.com/file/d/1HMenHIvhdfznvR1EGMbTKdQLmHaDiLsK/view */ },
    { role: "sbi-yfi", kind: "Project report", title: "Enabling access to government schemes and entitlements",
      excerpt: "Availability of welfare schemes and entitlement does not automatically lead to access by the poor. There are many gaps in the delivery of these welfare programmes.",
      link: "" /* https://drive.google.com/file/d/1fHUsXIp1lCpYqxIBSyKdjZpLgQXNo2XT/view */ }
  ],

  /* ---------- Photos ----------
     Files live in assets/photos/. role = the case study it belongs to.
     hero: true puts it in the collage at the top. credit: shown on photos you didn't take. */
  photos: [
    // SBI Youth for India — Nilgiris
    { src: "sbi-iec-session.jpg", role: "sbi-yfi", place: "Tribal hamlet, Gudalur", hero: true, caption: "An awareness session in a tribal hamlet on why insurance schemes matter. My NGO mentor translates." },
    { src: "sbi-lantana-receipts.jpg", role: "sbi-yfi", place: "Thorapally, Gudalur", caption: "Lantana-craft workers with their PMSBY and PMJJBY enrolment receipts" },
    { src: "sbi-pmjay-camp-2.jpg", role: "sbi-yfi", place: "Thorapally, Gudalur", caption: "The AB-PMJAY enrolment camp at Thorapally village" },
    { src: "sbi-pmjanman-mobilisation.jpg", role: "sbi-yfi", place: "Srimadurai, Gudalur", caption: "Community mobilisation for the PM-JANMAN campaign" },
    { src: "sbi-community-meeting.jpg", role: "sbi-yfi", place: "Thorapally, Gudalur", caption: "A community meeting at The Real Elephant Collective workshop" },
    { src: "sbi-form-filling.jpg", role: "sbi-yfi", place: "Thorapally, Gudalur", caption: "Filling in a PMJJBY application with an artisan" },
    { src: "sbi-ekyc.jpg", role: "sbi-yfi", place: "Thorapally, Gudalur", caption: "e-KYC for PM-JAY health cards" },
    { src: "me-gudalur-evening.jpg", role: "sbi-yfi", place: "Gudalur, Tamil Nadu", caption: "An evening walk at my project location in Gudalur" },

    // Waste Warriors — Corbett
    { src: "ww-dhikuli-cleanup.jpg", role: "waste-warriors", place: "Dhikuli, Ramnagar", hero: true, caption: "World Environment Day cleanup drive at Dhikuli Panchayat" },
    { src: "ww-forest-cleanup.jpg", role: "waste-warriors", place: "Corbett landscape", caption: "A cleanup drive with the Forest Department" },
    { src: "ww-school-session.jpg", role: "waste-warriors", place: "Ramnagar", caption: "A waste-management session with local school students" },
    { src: "ww-cyclothon.jpg", role: "waste-warriors", place: "Ramnagar", caption: "The cyclothon organised by the Waste Warriors Corbett team" },

    // Public Policy in Action — Sahibganj
    { src: "ppia-solar-lift.jpg", role: "ppia", place: "Atgawan, Barharwa block", hero: true, caption: "Verifying a solar lift water-supply scheme" },
    { src: "ppia-quarry-fisheries.jpg", role: "ppia", place: "Mandro block", caption: "Monitoring cage fisheries in an abandoned stone quarry" },
    { src: "ppia-mushroom-unit.jpg", role: "ppia", place: "Sahibganj", caption: "Assessing a mushroom farming unit" },
    { src: "ppia-pmshri-visit.jpg", role: "ppia", place: "Bada Pachgarh, Borio block", caption: "PM-SHRI school assessment visit" },
    { src: "ppia-mgnrega-verification.jpg", role: "ppia", place: "Pathna block", caption: "Verifying MGNREGA works" },
    { src: "ppia-digital-library-fest.jpg", role: "ppia", place: "Sahibganj", caption: "Career Guidance Fest at the opening of the Phulo-Jhano Digital Library, 9 March 2026" },
    { src: "ppia-career-fest-crowd.jpg", role: "ppia", place: "Sahibganj", caption: "More than 250 students at the career guidance fest" },
    { src: "ppia-springshed.jpg", role: "ppia", place: "Pathna block", caption: "Verifying a springshed structure built under MGNREGA" },
    { src: "ppia-gram-sabha.jpg", role: "ppia", place: "Mandro block", caption: "Special Gram Sabha for Sampoornata Abhiyan 2.0" },
    { src: "ppia-sampoornata.jpg", role: "ppia", place: "Mandro block", caption: "Launch of Sampoornata Abhiyan 2.0 in Mandro" },
    { src: "ppia-smart-class.jpg", role: "ppia", place: "Bada Pachgarh, Borio block", caption: "A smart classroom at the PM-SHRI school" },
    { src: "ppia-mango-festival.jpg", role: "ppia", place: "Sahibganj", caption: "District mango festival with SHGs from every block" },
    { src: "ppia-review-meeting.jpg", role: "ppia", place: "Sahibganj", caption: "A review meeting at the district collectorate" },

    // Mookerjee Fellowship — TO FILL: add your photos here, e.g.
    // { src: "mookerjee-1.jpg", role: "mookerjee", place: "Gujarat", caption: "..." },

    // Training
    { src: "train-bootcamp-ceremony.jpg", role: "training", place: "Rishihood University, Sonipat", caption: "Receiving the Policy Bootcamp certificate from Prof. Shobhit Mathur, Vice-Chancellor" },
    { src: "train-bootcamp-certificate.jpg", role: "training", place: "Rishihood University, Sonipat", caption: "Policy Bootcamp (10th edition) certificate" },
    { src: "train-nirman-certificate.jpg", role: "training", place: "SEARCH Shodhgram, Gadchiroli", caption: "NIRMAN workshop certificate" }
  ],

  /* ---------- Document library ----------
     link: "" shows "Available on request" (all documents are set this way).
     To make one public again, copy the web address written just after it into the quotes. */
  documents: [
    { id: "gi-koli-thakor", role: "mookerjee", kind: "Field study", year: "2026", title: "Political sentiment of the Koli and Thakor communities in Gujarat", summary: "Team report from North Gujarat and Saurashtra: surveys, FGDs and interviews.", link: "" /* https://drive.google.com/file/d/1TQisFfiH-lTm9ct4aVXV75tucJJ7JOam/view */ },
    { id: "gi-south-gujarat", role: "mookerjee", kind: "Field study", year: "2026", title: "The rise of Chaitar Vasava and AAP among South Gujarat's tribal voters", summary: "Team report on Jhagadia, Nandod and Dediapada.", link: "" /* https://drive.google.com/file/d/1OH8FSqLooXRClc_pfDB9orZ8wQo7YAJP/view */ },
    { id: "brief-central-asia", role: "mookerjee", kind: "Issue brief", year: "2026", title: "MP briefing: Prime Minister's visit to Uzbekistan and the SCO summit", summary: "Background, outcomes and talking points for MPs.", link: "" /* https://drive.google.com/file/d/1R2rzAQsnPkYM6kdbbJn3Kv_Pd00wMN8Q/view */ },
    { id: "cs-delhi-shanghai", role: "mookerjee", kind: "Case study", year: "2026", title: "Delhi and Shanghai: governance and urban problems", summary: "Air, Yamuna and waste problems compared across two governance models.", link: "" /* https://drive.google.com/file/d/1zyHA3u0k8AzlUZaZVUeoxCV4B5Y4zUlQ/view */ },
    { id: "cs-campaign", role: "mookerjee", kind: "Case study", year: "2026", title: "A failed political campaign: Maharashtra, 2024", summary: "How operational gaps hurt a well-resourced campaign.", link: "" /* https://drive.google.com/file/d/1w7XylXeR6fDNOG7f345RW5Sc3BSL3Wx7/view */ },
    { id: "ac-rajmahal", role: "mookerjee", kind: "Political documentation", year: "2026", title: "Constituency mental map: Rajmahal (AC-01), Jharkhand", summary: "Election record, community make-up and voting patterns.", link: "" /* https://drive.google.com/file/d/15joLqSrES_vh4VEhc_vmVvpE9wmCqFQQ/view */ },
    { id: "policy-assignment", role: "mookerjee", kind: "Policy assignment", year: "2026", title: "Policy is downstream of political structure", summary: "An essay on state capacity and policy outcomes.", link: "" /* https://drive.google.com/file/d/1LHQH4pTTuRvgxiI9LXMQubYtBZbcGPV4/view */ },
    { id: "pq-namami-gange", role: "mookerjee", kind: "Legislative drafting", year: "2026", title: "Lok Sabha starred question: Namami Gange in Bihar", summary: "Main question and supplementaries.", link: "" /* https://drive.google.com/file/d/1WTexi6KPar3fvAYKZ1D8zQGzyVIrqfcV/view */ },
    { id: "zh-railways", role: "mookerjee", kind: "Legislative drafting", year: "2026", title: "Zero Hour: overcharging at railway stations", summary: "A Zero Hour speech built on CAG findings and complaint data.", link: "" /* https://drive.google.com/file/d/1QSttGSIsLmSpnvvROg9rUvBAxmNvEqk-/view */ },
    { id: "zh-sugarcane", role: "mookerjee", kind: "Legislative drafting", year: "2026", title: "Zero Hour: sugarcane FRP dues in Solapur", summary: "A Zero Hour speech on ₹360 crore of pending dues.", link: "" /* https://drive.google.com/file/d/1EYPwhGTC5grrmsm_T_acyzxoy0vfk_Yt/view */ },
    { id: "chargesheet", role: "mookerjee", kind: "Political documentation", year: "2026", title: "Chargesheet: the 2010 Commonwealth Games timing-system contract", summary: "Charges, timeline and open questions.", link: "" /* https://drive.google.com/file/d/18KXFogu5Syzj8PiZmIQ79wlRoVgZqj_K/view */ },
    { id: "veto-nicobar", role: "mookerjee", kind: "Case study", year: "2026", title: "Veto players: the Great Nicobar Project", summary: "Stakeholder power and interest mapping.", link: "" /* https://drive.google.com/file/d/1TIyDtQb_EcOYK8_lP6riaUP8RoYwN-Kd/view */ },

    { id: "dlpm", role: "ppia", kind: "District plan", year: "2025", title: "District Livelihood Potential Mapping, Sahibganj (draft)", summary: "Co-authored with Archit Kumar.", link: "" /* https://drive.google.com/file/d/1E787_isUuvnTnkMsvfzRua2qPyJ_si71/view */ },
    { id: "pesa", role: "ppia", kind: "Policy note", year: "2026", title: "PESA scope in Sahibganj", summary: "Implementation status and Gram Sabha-led economic opportunities.", link: "" /* https://drive.google.com/file/d/1Phu6exJKiQHVOJ4WFuDwKG4kM2nA_gUo/view */ },
    { id: "pm-shri", role: "ppia", kind: "Assessment report", year: "2026", title: "PM-SHRI UPS Bada Pachgarh: status and needs assessment", summary: "School infrastructure assessment against PM-SHRI components.", link: "" /* TO FILL if you want it public: https://drive.google.com/file/d/1zRnmD66GFJ0eb3OCHZkG9XhD8zNfKS--/view */ },

    { id: "ww-sop", role: "waste-warriors", kind: "SOP", year: "2025", title: "SOP and guidelines for cleanup drives", summary: "Planning, permissions, safety, segregation and reporting for Waste Warriors Corbett.", link: "" /* https://drive.google.com/file/d/1HMenHIvhdfznvR1EGMbTKdQLmHaDiLsK/view */ },
    { id: "ww-volunteer", role: "waste-warriors", kind: "Policy", year: "2025", title: "Volunteer and Intern Engagement Policy", summary: "Recruitment, roles and support for volunteers, giving preference to local youth.", link: "" /* https://drive.google.com/file/d/1mbqohZtzNMvgAROEFjIwSPV-0xXXwmQB/view */ },

    { id: "sbi-final", role: "sbi-yfi", kind: "Project report", year: "2024", title: "Final project report: access to government schemes and entitlements", summary: "The full 13-month project, from needs assessment to results.", link: "" /* https://drive.google.com/file/d/1fHUsXIp1lCpYqxIBSyKdjZpLgQXNo2XT/view */ },
    { id: "sbi-synopsis", role: "sbi-yfi", kind: "Project design", year: "2024", title: "Project synopsis", summary: "Problem statement, objectives and approach.", link: "" /* https://drive.google.com/file/d/1E_KcSLqyV4EIBq4g2yckcBc1Fqh81_JK/view */ },
    { id: "sbi-plan", role: "sbi-yfi", kind: "Project design", year: "2024", title: "Project plan", summary: "Activities, timeline and milestones.", link: "" /* https://drive.google.com/file/d/1A8BcReaFWUZabjhvw2-NJs6DvFPgO5p6/view */ },

  ],

  /* ---------- Education ---------- */
  education: [
    { degree: "Bachelor of Arts (Economics)", school: "Fergusson College (Autonomous), Pune", start: "Jun 2019", end: "Jul 2022", grade: "CGPA 9.54 / 10",
      points: ["Minors in Political Science and Sociology.", "Project: Role of Social Media in Influencing Consumer Behaviour.", "NSS volunteer, college societies and clubs, and part-time work at Starbucks in my final year."] },
    { degree: "Higher Secondary Certificate (Science)", school: "Fergusson Junior College, Pune", start: "Jun 2017", end: "May 2019", grade: "",
      points: ["Physics, Chemistry, Maths, Geography, Hindi and English."] },
    { degree: "Secondary School Certificate", school: "Marathi-medium school, Karmala, Solapur", start: "", end: "2017", grade: "98.4% · Taluka topper",
      points: ["Grade A in the Maharashtra government's Elementary and Intermediate drawing exams."] }
  ],

  /* ---------- Training programmes ---------- */
  training: [
    { name: "Policy Bootcamp (10th edition)", org: "Rishihood University, Sonipat, Haryana", year: "Jun 2026",
      points: ["A 15-day programme of 40+ sessions on public policy, governance, the economy, national security and India's development agenda.",
               "Sessions with senior policymakers, including the Chief Economic Adviser (GoI), a Member of the PM's Economic Advisory Council, a Rajya Sabha MP and a former Joint Secretary of Parliament.",
               "Workshops on policy writing, data-driven analysis, systems thinking, negotiation, policy communication and AI."],
      photos: ["train-bootcamp-ceremony.jpg", "train-bootcamp-certificate.jpg"] },
    { name: "NIRMAN Workshop: Flourishing of Youth", org: "SEARCH Shodhgram, Gadchiroli, Maharashtra", year: "Feb 2025",
      points: ["A 5-day residential workshop on youth flourishing, supported by the Maharashtra State Faculty Development Academy."],
      photos: ["train-nirman-certificate.jpg"] }
  ],

  achievements: [
    { title: "Taluka topper, Class 10 (98.4%)", detail: "Karmala, Solapur", year: "2017" },
    { title: "Graduated with CGPA 9.54 / 10", detail: "BA Economics, Fergusson College, Pune", year: "2022" },
    { title: "SBI Youth for India Fellowship", detail: "SBI Foundation, deputed to ACCORD, Nilgiris", year: "2023" },
    { title: "JSW Fellowship", detail: "JSW Foundation", year: "2023" },
    { title: "Jan Suraaj Fellowship", detail: "", year: "2024" },
    { title: "Chanakya Fellowship in Social Sciences", detail: "Chanakya University, Bengaluru", year: "2024" },
    { title: "Public Policy in Action Fellowship", detail: "Transform Rural India Foundation", year: "2025" },
    { title: "Selected for the Mookerjee Fellowship", detail: "Policy, Politics and Governance Foundation", year: "2026" }
  ],

  /* ---------- Beyond work ---------- */
  interests: [
    { title: "Drawing", text: "Grade A in the state Elementary and Intermediate drawing exams." },
    { title: "Coins & currencies", text: "Collected coins, currency notes and antiques as a school student." },
    { title: "Walking new places", text: "Evening walks wherever the work takes me, from Gudalur's hills to Corbett's villages." }
  ],

  volunteering: [
    { org: "Seva Sahyog Foundation", place: "Pune", start: "Oct 2021", end: "Apr 2022",
      text: "Supported women's empowerment and child education work, including school kit preparation, the Red Dot menstrual hygiene campaign and a sanitary napkin donation drive." },
    { org: "National Service Scheme (NSS)", place: "", start: "Aug 2019", end: "Jun 2021",
      text: "Taught children in urban slum communities. Took part in health camps, blood donation drives, street plays, Nirmal Vari, rice plantation drives and a 7-day winter camp in a remote village." },
    { org: "Wallstreet, Department of Economics, Fergusson College", place: "", start: "Dec 2019", end: "Jan 2020",
      text: "Volunteered with the partnerships and creativity teams of the department's annual fest." }
  ],

  skills: [
    { group: "Policy & Governance", items: ["Policy research", "Legislative research", "Policy brief writing", "Government scheme analysis", "Public administration", "Institutional coordination"] },
    { group: "Research & Analysis", items: ["Primary and secondary research", "Survey design and implementation", "Focus Group Discussions", "Key Informant Interviews", "Political sentiment mapping", "Data interpretation"] },
    { group: "Project & Programme Management", items: ["Project planning", "Monitoring and evaluation", "Field assessments", "Stakeholder management", "Programme documentation", "Community mobilisation"] },
    { group: "Documentation & Communication", items: ["Report writing", "DPR and proposal drafting", "Parliamentary drafting", "Presentation development", "Case study documentation"] }
  ],

  /* ---------- Technical tools (shown under Skills) ---------- */
  tools: [
    { name: "Microsoft Office", text: "Excel, PowerPoint and Word for datasets, presentations and reports" },
    { name: "Google Workspace", text: "Docs, Sheets, Slides and Forms for shared drafting, data tracking, presentations and surveys" },
    { name: "Data visualisation tools", text: "Canva and spreadsheet charts to turn survey and district data into clear visuals for reports and reviews" },
    { name: "Research and AI-assisted productivity tools", text: "AI tools for desk research and drafting, and Google AI Studio for building simple trackers" }
  ],


  languages: [
    { name: "Marathi", level: "Native" },
    { name: "Hindi", level: "Proficient" },
    { name: "English", level: "Proficient" }
  ]
};
