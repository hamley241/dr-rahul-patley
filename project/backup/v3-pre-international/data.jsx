// src/data.jsx — all site content

const DATA_services = [
  {
    num: '01',
    title: 'Depression & Anxiety',
    body: 'Evidence-based treatment for mood and anxiety disorders — combining pharmacotherapy, psychotherapy referrals, and lifestyle work. Individualized plans without over-prescription.',
    tags: ['PHQ-9', 'GAD-7', 'CBT referrals'],
    featured: true,
  },
  {
    num: '02',
    title: 'Addiction Psychiatry',
    body: 'Alcohol, cannabis, opioids, gambling and gaming — a non-judgmental path to recovery rooted in clinical science.',
    tags: ['Alcohol', 'Cannabis', 'Behavioral'],
  },
  {
    num: '03',
    title: 'Adult ADHD',
    body: 'Careful evaluation using validated tools (ASRS-v1.1) and comprehensive clinical interviews for late-diagnosed adults.',
    tags: ['ASRS-v1.1', 'Evaluation'],
  },
  {
    num: '04',
    title: 'Treatment-Resistant Schizophrenia',
    body: 'Complex cases requiring specialized knowledge — Clozapine management, long-acting injectables, and multidisciplinary support.',
    tags: ['Clozapine', 'LAI'],
  },
  {
    num: '05',
    title: 'OCD & Related Disorders',
    body: 'Obsessive-compulsive disorder, body dysmorphia, and trichotillomania — combining SSRIs with behavioural approaches.',
    tags: ['OCD', 'BDD'],
  },
  {
    num: '06',
    title: 'Telepsychiatry',
    body: 'Secure video consultations for follow-ups and patients who cannot travel. Same standard of care, reduced friction.',
    tags: ['Video', 'Secure'],
  },
];

const DATA_education = [
  { title: 'MBBS', org: 'Osmania Medical College, Hyderabad' },
  { title: 'MD (Psychiatry)', org: 'NIMHANS, Bengaluru', note: 'National Institute of Mental Health & Neurosciences' },
  { title: 'Post-Doctoral Fellowship', org: 'Community Psychiatry, NIMHANS' },
];

const DATA_experience = [
  { title: 'Consultant Psychiatrist', org: 'Sukoon Health, Hyderabad' },
  { title: 'Worked at Monash Health', org: 'Melbourne, Australia' },
  { title: 'Worked at NIMHANS, Bengaluru', org: 'Assistant Professor of Psychiatry' },
];

// Kept for any legacy references
const DATA_qualifications = [...DATA_education, ...DATA_experience];

const DATA_stats = [
  { n: '10', sup: '+', l: 'Years of clinical practice' },
  { n: '40+', l: 'Peer-reviewed publications' },
  { n: '2', l: 'Books authored' },
  { n: '34', l: 'Chapters in books / manuals' },
  { n: '26', l: 'Conference presentations' },
];

const DATA_publications = [
  { year: '2024', title: 'Digital interventions for alcohol use disorders in low and middle-income countries: a systematic review', journal: 'Indian Journal of Psychiatry', venue: 'Peer-reviewed' },
  { year: '2024', title: 'Tele-MANAS and the future of mental healthcare delivery in India', journal: 'Asian Journal of Psychiatry', venue: 'Policy review' },
  { year: '2023', title: 'Clinical predictors of treatment response in treatment-resistant schizophrenia on clozapine', journal: 'Schizophrenia Research', venue: 'Original research' },
  { year: '2023', title: 'Adult ADHD in India: evaluation, comorbidity patterns and service gaps', journal: 'Indian Journal of Psychological Medicine', venue: 'Original research' },
  { year: '2022', title: 'Climate change and mental health: a framework for action in South Asia', journal: 'The Lancet Regional Health — SE Asia', venue: 'Commentary' },
  { year: '2022', title: 'Community psychiatry in the Indian context — lessons from a decade of district mental health programs', journal: 'Community Mental Health Journal', venue: 'Review' },
  { year: '2021', title: 'Pharmacological management of cannabis use disorder: a practical guide for clinicians', journal: 'Indian Journal of Psychiatry', venue: 'Clinical review' },
  { year: '2021', title: 'Gaming disorder in young adults — a cross-sectional study from an Indian tertiary care centre', journal: 'Asian Journal of Psychiatry', venue: 'Original research' },
];

const DATA_policy = [
  { org: 'Ministry of Health, GoI', title: 'National Health Action Plan on Climate Change and Mental Health', body: 'Contributing psychiatrist on the expert working group drafting India\'s first integrated framework linking climate resilience and population mental health.' },
  { org: 'MOHFW · Tele-MANAS', title: 'Tele-MANAS service design and clinical protocols', body: 'Clinical protocols and training modules for India\'s 24×7 national tele–mental health helpline serving all 36 States and UTs.' },
  { org: 'Ayushman Bharat', title: 'Mental-health screening under HWCs', body: 'Co-author of guidelines embedding psychiatric screening into India\'s Health & Wellness Centres at the primary-care level.' },
  { org: 'WHO-SEARO · USAID · JHPIEGO', title: 'International technical collaboration', body: 'Ongoing consultation with WHO, USAID and JHPIEGO on addiction and community-psychiatry programmes across South-East Asia.' },
];

const DATA_press = [
  { outlet: 'The Hindu', quote: '“India needs a new language for mental-health policy — one that centres community care.”', date: 'Nov 2024' },
  { outlet: 'Deccan Herald', quote: 'Interviewed on cannabis-use disorder trends among Indian young adults.', date: 'Aug 2024' },
  { outlet: 'Indian Express', quote: 'Featured commentary on the rollout of Tele-MANAS across South India.', date: 'Mar 2024' },
  { outlet: 'Times of India', quote: 'Quoted on why adult ADHD remains dramatically under-diagnosed in India.', date: 'Jan 2024' },
];

const DATA_testimonials = [
  { q: 'Dr. Patley took the time to actually listen before prescribing anything. I finally understood what I was going through — and why the previous medications hadn\'t worked.', n: 'A. S.', r: 'Patient · Depression, 2024' },
  { q: 'After years of thinking I was just disorganized, his ADHD evaluation was the first time I felt properly seen by a clinician. Treatment has been life-changing.', n: 'R. M.', r: 'Patient · Adult ADHD, 2024' },
  { q: 'Thoughtful, thorough, and never rushed. He explains the reasoning behind every medication decision, which made it much easier to trust the process.', n: 'P. K.', r: 'Family member, 2023' },
  { q: 'What impressed me most was how he coordinated with my family doctor and therapist. It really felt like integrated care rather than isolated visits.', n: 'V. R.', r: 'Patient · Anxiety, 2024' },
];

const DATA_faqs = [
  { q: 'What happens in the first appointment?', a: 'Your first visit is a 45-minute consultation in a private, non-judgmental setting. Dr. Rahul will ask about your concerns, medical history, lifestyle, and goals. Bring any previous prescriptions or reports if available. There is no pressure and no rush.' },
  { q: 'Do I need a referral from another doctor?', a: 'No. You can book directly through this website, by phone, or on WhatsApp. Walk-ins are accepted at Sukoon Health, Hyderabad during consulting hours.' },
  { q: 'Will I need to take medication?', a: 'Not always. Medication is one tool among many, and it is introduced only when clinically necessary and after an informed conversation. Dr. Rahul prescribes only what is evidence-based and necessary — never more.' },
  { q: 'Is everything kept confidential?', a: 'Absolutely. All consultations and records are strictly confidential, protected by medical ethics and Indian law. Nothing is shared without your explicit consent.' },
  { q: 'How is a psychiatrist different from a psychologist?', a: 'A psychiatrist is a medical doctor (MBBS + MD) who can diagnose and prescribe medication, order investigations, and manage complex cases. A psychologist typically provides therapy but cannot prescribe. The two roles complement each other.' },
  { q: 'Can I continue consultations over video?', a: 'Yes. Follow-ups can be scheduled as secure video consultations — especially useful if you travel, live outside Hyderabad, or have mobility constraints.' },
  { q: 'How long does treatment usually take?', a: 'It depends on the condition. Some patients see meaningful improvement within weeks, while others benefit from longer-term management. Realistic timelines are discussed openly during the first consultation.' },
  { q: 'Does Dr. Rahul accept health insurance?', a: 'Consultation receipts can be submitted to most Indian insurers for reimbursement. Sukoon Health also supports cashless arrangements with select insurance partners — please confirm during booking.' },
];

const DATA_navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#assessments', label: 'Self-Checks' },
  { href: '#research', label: 'Research' },
  { href: '#contact', label: 'Contact' },
];

Object.assign(window, {
  DATA_services, DATA_education, DATA_experience, DATA_qualifications, DATA_stats,
  DATA_publications, DATA_policy, DATA_press,
  DATA_testimonials, DATA_faqs, DATA_navLinks,
});
