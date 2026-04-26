export type Publication = {
  id: string;
  title: string;
  year: number;
  type: "Article" | "Book" | "Chapter" | "Poster" | "Conference Paper" | "Preprint";
  link: string;
  source: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    id: "2026-clinical-profile-of-young-adults-presenting-to-primary-care-clinics-insights-and-future-directions",
    title: "Clinical Profile of Young Adults Presenting to Primary Care Clinics: Insights and Future Directions",
    year: 2026,
    type: "Article",
    link: "https://www.researchgate.net/publication/399674621_Clinical_Profile_of_Young_Adults_Presenting_to_Primary_Care_Clinics_Insights_and_Future_Directions",
    source: "ResearchGate",
    tags: ["article", "primary-care", "youth-mental-health"],
  },
  {
    id: "2026-low-treatment-gap-for-schizophrenia-in-rural-india-a-step-toward-taluk-mental-health-program",
    title: "Low Treatment Gap for Schizophrenia in Rural India: A Step Toward Taluk Mental Health Program",
    year: 2026,
    type: "Article",
    link: "https://www.researchgate.net/publication/399837904_Low_Treatment_Gap_for_Schizophrenia_in_Rural_India_A_Step_Toward_Taluk_Mental_Health_Program",
    source: "ResearchGate",
    tags: ["article", "community-psychiatry", "mental-health", "schizophrenia"],
  },
  {
    id: "2025-barriers-and-facilitators-for-translating-skills-into-clinical-practice-in-primary-psychiatry-care-primary-care-doc",
    title: "Barriers and Facilitators for Translating Skills into Clinical Practice in Primary Psychiatry Care: Primary Care Doctors’ Survey Through the Lens of Implementation Research",
    year: 2025,
    type: "Article",
    link: "https://www.researchgate.net/publication/395226463_Barriers_and_Facilitators_for_Translating_Skills_into_Clinical_Practice_in_Primary_Psychiatry_Care_Primary_Care_Doctors%27_Survey_Through_the_Lens_of_Implementation_Research",
    source: "ResearchGate",
    tags: ["article", "capacity-building", "epidemiology", "implementation-science", "mental-health", "primary-care", "training"],
  },
  {
    id: "2025-defining-primary-mental-health-care-what-is-primary-and-what-constitutes-care",
    title: "Defining Primary Mental Health Care: What is Primary and What Constitutes Care?",
    year: 2025,
    type: "Article",
    link: "https://www.researchgate.net/publication/394809611_Defining_Primary_Mental_Health_Care_What_is_Primary_and_What_Constitutes_Care",
    source: "ResearchGate",
    tags: ["article", "mental-health"],
  },
  {
    id: "2025-diagnostic-and-treatment-concordance-among-primary-care-doctors-delivering-mental-health-care-results-from-an-effec",
    title: "Diagnostic and Treatment Concordance Among Primary Care Doctors Delivering Mental Health Care: Results from an Effectiveness–implementation Hybrid Cluster Randomized Controlled Trial of an Add-on Online Mental Health Training",
    year: 2025,
    type: "Article",
    link: "https://www.researchgate.net/publication/398105982_Diagnostic_and_Treatment_Concordance_Among_Primary_Care_Doctors_Delivering_Mental_Health_Care_Results_from_an_Effectiveness-implementation_Hybrid_Cluster_Randomized_Controlled_Trial_of_an_Add-on_Onlin",
    source: "ResearchGate",
    tags: ["article", "capacity-building", "clinical-trial", "implementation-science", "mental-health", "primary-care", "training"],
  },
  {
    id: "2025-in-person-mental-health-training-and-tele-mentoring-for-community-health-officers-and-mid-level-health-providers-in",
    title: "In-person Mental Health Training and Tele Mentoring for Community Health Officers and Mid-level Health Providers in India: A Report from Telangana and Tripura, the Two Diverse States of India",
    year: 2025,
    type: "Article",
    link: "https://www.researchgate.net/publication/396561976_In-person_Mental_Health_Training_and_Tele_Mentoring_for_Community_Health_Officers_and_Mid-level_Health_Providers_in_India_A_Report_from_Telangana_and_Tripura_the_Two_Diverse_States_of_India",
    source: "ResearchGate",
    tags: ["article", "capacity-building", "community-psychiatry", "mental-health", "primary-care", "tele-mental-health", "training"],
  },
  {
    id: "2025-leveraging-technology-to-bridge-the-psycho-social-care-gap-in-mental-health-care-a-case-series",
    title: "Leveraging Technology to Bridge the Psycho Social Care Gap in Mental Health Care: A Case Series",
    year: 2025,
    type: "Article",
    link: "https://www.researchgate.net/publication/398103907_Leveraging_Technology_to_Bridge_the_Psycho_Social_Care_Gap_in_Mental_Health_Care_A_Case_Series",
    source: "ResearchGate",
    tags: ["article", "digital-health", "mental-health"],
  },
  {
    id: "2025-provision-of-mental-health-care-by-the-community-health-officers-chos-through-collaborative-video-consultations-a-d",
    title: "Provision of Mental Health Care by the Community Health Officers (CHOs) Through Collaborative Video Consultations: A Descriptive Analysis",
    year: 2025,
    type: "Article",
    link: "https://www.researchgate.net/publication/395702471_Provision_of_Mental_Health_Care_by_the_Community_Health_Officers_CHOs_Through_Collaborative_Video_Consultations_A_Descriptive_Analysis",
    source: "ResearchGate",
    tags: ["article", "community-psychiatry", "mental-health", "primary-care", "tele-mental-health"],
  },
  {
    id: "2025-realist-lens-and-the-theory-of-change-approaches-to-evaluate-the-impact-of-digitally-driven-capacity-building-initi",
    title: "Realist Lens and the Theory-of-change Approaches to Evaluate the Impact of Digitally Driven Capacity-building Initiatives for Mental Health in India: A Conceptual Framework",
    year: 2025,
    type: "Article",
    link: "https://www.researchgate.net/publication/398104772_Realist_Lens_and_the_Theory-of-change_Approaches_to_Evaluate_the_Impact_of_Digitally_Driven_Capacity-building_Initiatives_for_Mental_Health_in_India_A_Conceptual_Framework",
    source: "ResearchGate",
    tags: ["article", "digital-health", "frameworks", "mental-health"],
  },
  {
    id: "2025-short-term-clinical-outcomes-and-implementation-insights-a-hybrid-cluster-randomized-controlled-trial-of-an-add-on-",
    title: "Short-term Clinical Outcomes and Implementation Insights: A Hybrid Cluster Randomized Controlled Trial of an Add-On Online Mental Health Training for Primary Care Doctors",
    year: 2025,
    type: "Article",
    link: "https://www.researchgate.net/publication/398105746_Short-term_Clinical_Outcomes_and_Implementation_Insights_A_Hybrid_Cluster_Randomized_Controlled_Trial_of_an_Add-On_Online_Mental_Health_Training_for_Primary_Care_Doctors",
    source: "ResearchGate",
    tags: ["article", "capacity-building", "clinical-trial", "implementation-science", "mental-health", "primary-care", "training"],
  },
  {
    id: "2025-trainers-perspectives-towards-digital-mental-health-training-for-primary-care-providers-insights-from-focused-group",
    title: "Trainers’ Perspectives Towards Digital Mental Health Training for Primary Care Providers: Insights from Focused Group Discussion",
    year: 2025,
    type: "Article",
    link: "https://www.researchgate.net/publication/394514134_Trainers%27_Perspectives_Towards_Digital_Mental_Health_Training_for_Primary_Care_Providers_Insights_from_Focused_Group_Discussion",
    source: "ResearchGate",
    tags: ["article", "capacity-building", "digital-health", "mental-health", "primary-care", "training"],
  },
  {
    id: "2024-consequences-of-medical-negligence-and-litigations-on-health-care-providers-a-narrative-review",
    title: "Consequences of medical negligence and litigations on health care providers – A narrative review",
    year: 2024,
    type: "Article",
    link: "https://www.researchgate.net/publication/380012401_Consequences_of_medical_negligence_and_litigations_on_health_care_providers_-_A_narrative_review",
    source: "ResearchGate",
    tags: ["article", "medico-legal", "review"],
  },
  {
    id: "2024-near-zero-treatment-gap-for-schizophrenia-can-it-be-reality-in-rural-india",
    title: "Near zero treatment gap for schizophrenia: Can it be reality in rural India?",
    year: 2024,
    type: "Article",
    link: "https://www.researchgate.net/publication/384900209_Near_zero_treatment_gap_for_schizophrenia_Can_it_be_reality_in_rural_India",
    source: "ResearchGate",
    tags: ["article", "community-psychiatry", "mental-health", "schizophrenia"],
  },
  {
    id: "2024-transforming-mental-healthcare-a-crude-return-on-investment-analysis-of-the-chhattisgarh-community-mental-healthcar",
    title: "Transforming Mental Healthcare: A Crude Return-on-Investment Analysis of the Chhattisgarh Community Mental Healthcare Tele-Mentoring Program (CHaMP), India",
    year: 2024,
    type: "Preprint",
    link: "https://www.researchgate.net/publication/384344180_Transforming_Mental_Healthcare_A_Crude_Return-on-Investment_Analysis_of_the_Chhattisgarh_Community_Mental_Healthcare_Tele-Mentoring_Program_CHaMP_India",
    source: "ResearchGate",
    tags: ["community-psychiatry", "health-economics", "mental-health", "preprint", "tele-mental-health"],
  },
  {
    id: "2023-beyond-the-clinic-transforming-mental-healthcare-in-india-through-public-private-partnerships",
    title: "Beyond the clinic: Transforming mental healthcare in India through Public Private Partnerships",
    year: 2023,
    type: "Poster",
    link: "https://www.researchgate.net/publication/370440844_Beyond_the_clinic_Transforming_mental_healthcare_in_India_through_Public_Private_Partnerships",
    source: "ResearchGate",
    tags: ["mental-health", "poster", "public-private-partnerships"],
  },
  {
    id: "2023-bursting-myths-and-misconceptions-about-suicide",
    title: "Bursting Myths and Misconceptions about Suicide",
    year: 2023,
    type: "Chapter",
    link: "https://www.researchgate.net/publication/369386045_Bursting_Myths_and_Misconceptions_about_Suicide",
    source: "ResearchGate",
    tags: ["chapter", "mental-health", "suicide-prevention"],
  },
  {
    id: "2023-climate-change-and-mental-health-why-should-we-worry",
    title: "Climate Change and Mental Health-Why Should We Worry?",
    year: 2023,
    type: "Poster",
    link: "https://www.researchgate.net/publication/370440838_Climate_Change_and_Mental_Health-Why_Should_We_Worry",
    source: "ResearchGate",
    tags: ["climate-change", "mental-health", "poster"],
  },
  {
    id: "2023-exploring-the-enigma-of-low-prevalence-of-post-traumatic-stress-disorder-in-india",
    title: "Exploring the enigma of low prevalence of post-traumatic stress disorder in India",
    year: 2023,
    type: "Article",
    link: "https://www.researchgate.net/publication/376367383_Exploring_the_enigma_of_low_prevalence_of_post-traumatic_stress_disorder_in_India",
    source: "ResearchGate",
    tags: ["article", "epidemiology", "ptsd"],
  },
  {
    id: "2023-impact-of-mental-health-work-by-ashas-and-effect-on-treatment-gap-for-psychiatric-disorders-results-from-a-nimhans-",
    title: "Impact of Mental Health Work by ASHAs and effect on Treatment gap for psychiatric disorders-results from a NIMHANS -ECHO project in a rural district of South India.",
    year: 2023,
    type: "Conference Paper",
    link: "https://www.researchgate.net/publication/370440850_Impact_of_Mental_Health_Work_by_ASHAs_and_effect_on_Treatment_gap_for_psychiatric_disorders-results_from_a_NIMHANS_-ECHO_project_in_a_rural_district_of_South_India",
    source: "ResearchGate",
    tags: ["asha", "community-health-workers", "community-psychiatry", "conference-paper", "mental-health"],
  },
  {
    id: "2023-marfatia-award-abstracts",
    title: "Marfatia Award Abstracts",
    year: 2023,
    type: "Article",
    link: "https://www.researchgate.net/publication/369417854_Marfatia_Award_Abstracts",
    source: "ResearchGate",
    tags: ["article"],
  },
  {
    id: "2023-nationally-representative-epidemiological-study-of-social-anxiety-disorder-from-india",
    title: "Nationally representative epidemiological study of social anxiety disorder from India",
    year: 2023,
    type: "Article",
    link: "https://www.researchgate.net/publication/376366625_Nationally_representative_epidemiological_study_of_social_anxiety_disorder_from_India",
    source: "ResearchGate",
    tags: ["article", "social-anxiety"],
  },
  {
    id: "2023-networking-with-stakeholders-for-community-care",
    title: "Networking with Stakeholders for Community Care",
    year: 2023,
    type: "Chapter",
    link: "https://www.researchgate.net/publication/369386127_Networking_with_Stakeholders_for_Community_Care",
    source: "ResearchGate",
    tags: ["chapter", "community-psychiatry"],
  },
  {
    id: "2023-psychiatric-epidemiology-in-india-where-do-we-stand-following-the-national-mental-health-survey-2016",
    title: "Psychiatric Epidemiology in India: Where Do We Stand Following the National Mental Health Survey, 2016?",
    year: 2023,
    type: "Article",
    link: "https://www.researchgate.net/publication/370440822_Psychiatric_Epidemiology_in_India_Where_Do_We_Stand_Following_the_National_Mental_Health_Survey_2016",
    source: "ResearchGate",
    tags: ["article", "epidemiology", "mental-health"],
  },
  {
    id: "2023-reducing-the-treatment-gap-for-psychiatric-disorders-the-role-of-accredited-social-health-activists-in-south-india",
    title: "Reducing the Treatment Gap for Psychiatric Disorders – The Role of Accredited Social Health Activists in South India",
    year: 2023,
    type: "Article",
    link: "https://www.researchgate.net/publication/373265784_Reducing_the_Treatment_Gap_for_Psychiatric_Disorders_-_The_Role_of_Accredited_Social_Health_Activists_in_South_India",
    source: "ResearchGate",
    tags: ["article", "asha", "community-health-workers", "mental-health"],
  },
  {
    id: "2023-suicide-risk-assessment",
    title: "Suicide Risk Assessment",
    year: 2023,
    type: "Chapter",
    link: "https://www.researchgate.net/publication/369417826_Suicide_Risk_Assessment",
    source: "ResearchGate",
    tags: ["chapter", "mental-health", "suicide-prevention"],
  },
  {
    id: "2023-training-manual-on-mental-neurological-and-substance-use-mns-disorders-care-for-community-health-officer-at-ayushma",
    title: "Training Manual on Mental, Neurological and Substance Use (MNS) Disorders Care for Community Health Officer at Ayushman Bharat -Health and Wellness Centres",
    year: 2023,
    type: "Book",
    link: "https://www.researchgate.net/publication/370440583_Training_Manual_on_Mental_Neurological_and_Substance_Use_MNS_Disorders_Care_for_Community_Health_Officer_at_Ayushman_Bharat_-Health_and_Wellness_Centres",
    source: "ResearchGate",
    tags: ["book", "capacity-building", "community-psychiatry", "primary-care", "training"],
  },
  {
    id: "2023-training-manual-on-mental-neurological-and-substance-use-mns-disorders-care-for-medical-officer-at-ayushman-bharat-",
    title: "Training Manual on Mental, Neurological and Substance Use (MNS) Disorders Care for Medical Officer at Ayushman Bharat -Health and Wellness Centres",
    year: 2023,
    type: "Book",
    link: "https://www.researchgate.net/publication/370440670_Training_Manual_on_Mental_Neurological_and_Substance_Use_MNS_Disorders_Care_for_Medical_Officer_at_Ayushman_Bharat_-Health_and_Wellness_Centres",
    source: "ResearchGate",
    tags: ["book", "capacity-building", "primary-care", "training"],
  },
  {
    id: "2022-facilitators-manual-for-trainers-of-tele-manas-counsellors",
    title: "Facilitators Manual for Trainers of Tele MANAS Counsellors",
    year: 2022,
    type: "Book",
    link: "https://www.researchgate.net/publication/369385975_Facilitators_Manual_for_Trainers_of_Tele_MANAS_Counsellors",
    source: "ResearchGate",
    tags: ["book", "capacity-building", "tele-manas", "tele-mental-health", "training"],
  },
  {
    id: "2022-point-of-care-guide-for-tele-manas-counsellors",
    title: "Point of Care Guide for Tele MANAS Counsellors",
    year: 2022,
    type: "Book",
    link: "https://www.researchgate.net/publication/369385775_Point_of_Care_Guide_for_Tele_MANAS_Counsellors",
    source: "ResearchGate",
    tags: ["book", "tele-manas", "tele-mental-health"],
  },
  {
    id: "2021-a-report-on-successful-introduction-of-tele-mental-health-training-for-primary-care-doctors-during-the-covid-19-pan",
    title: "A Report on Successful Introduction of Tele Mental Health Training for Primary Care Doctors during the COVID 19 Pandemic",
    year: 2021,
    type: "Poster",
    link: "https://www.researchgate.net/publication/355545715_A_Report_on_Successful_Introduction_of_Tele_Mental_Health_Training_for_Primary_Care_Doctors_during_the_COVID_19_Pandemic",
    source: "ResearchGate",
    tags: ["capacity-building", "covid-19", "mental-health", "poster", "primary-care", "tele-mental-health", "training"],
  },
  {
    id: "2021-accredited-social-health-activist-asha-and-her-role-in-district-mental-health-program-learnings-from-the-covid-19-p",
    title: "Accredited Social Health Activist (ASHA) and Her Role in District Mental Health Program: Learnings from the COVID 19 Pandemic",
    year: 2021,
    type: "Article",
    link: "https://www.researchgate.net/publication/348551409_Accredited_Social_Health_Activist_ASHA_and_Her_Role_in_District_Mental_Health_Program_Learnings_from_the_COVID_19_Pandemic",
    source: "ResearchGate",
    tags: ["article", "asha", "community-health-workers", "community-psychiatry", "covid-19", "mental-health"],
  },
  {
    id: "2021-dealing-with-mental-health-issues-in-prison-staff-during-covid-19-a-handbook",
    title: "Dealing with Mental Health Issues in Prison Staff during COVID-19: A Handbook",
    year: 2021,
    type: "Book",
    link: "https://www.researchgate.net/publication/352488588_Dealing_with_Mental_Health_Issues_in_Prison_Staff_during_COVID-19_A_Handbook",
    source: "ResearchGate",
    tags: ["book", "covid-19", "mental-health", "prison-mental-health"],
  },
  {
    id: "2021-dealing-with-mental-health-issues-in-prisoners-during-covid-19-a-handbook",
    title: "Dealing with Mental Health Issues in Prisoners during COVID-19: A Handbook",
    year: 2021,
    type: "Book",
    link: "https://www.researchgate.net/publication/352488591_Dealing_with_Mental_Health_Issues_in_Prisoners_during_COVID-19_A_Handbook",
    source: "ResearchGate",
    tags: ["book", "covid-19", "mental-health", "prison-mental-health"],
  },
  {
    id: "2021-district-mental-health-programs-during-covid-19-pandemic",
    title: "District Mental health Programs' During COVID-19 Pandemic",
    year: 2021,
    type: "Chapter",
    link: "https://www.researchgate.net/publication/369438935_District_Mental_health_Programs%27_During_COVID-19_Pandemic",
    source: "ResearchGate",
    tags: ["chapter", "community-psychiatry", "covid-19", "mental-health"],
  },
  {
    id: "2021-future-proofing-geriatric-mental-health-care-services-in-india-training-and-policy-directions",
    title: "Future-Proofing Geriatric Mental Health Care Services in India: Training and Policy Directions",
    year: 2021,
    type: "Article",
    link: "https://www.researchgate.net/publication/354105989_Future-Proofing_Geriatric_Mental_Health_Care_Services_in_India_Training_and_Policy_Directions",
    source: "ResearchGate",
    tags: ["article", "capacity-building", "geriatric-psychiatry", "mental-health", "training"],
  },
  {
    id: "2021-mental-health-services-available-in-india-to-meet-urban-mental-health-challenges-literature-review",
    title: "Mental health services available in India to meet urban mental health challenges-Literature review",
    year: 2021,
    type: "Conference Paper",
    link: "https://www.researchgate.net/publication/369439638_Mental_health_services_available_in_India_to_meet_urban_mental_health_challenges-Literature_review",
    source: "ResearchGate",
    tags: ["conference-paper", "mental-health", "review"],
  },
  {
    id: "2021-psychiatric-disorders-epidemiology-in-india-recent-updates",
    title: "Psychiatric disorders epidemiology in India-Recent Updates",
    year: 2021,
    type: "Chapter",
    link: "https://www.researchgate.net/publication/369386025_Psychiatric_disorders_epidemiology_in_India-Recent_Updates",
    source: "ResearchGate",
    tags: ["chapter", "epidemiology", "mental-health"],
  },
  {
    id: "2021-tele-mentoring-counselling-skills-for-deaddiction-counsellors-in-punjab-during-the-covid-19-pandemic",
    title: "Tele-mentoring Counselling Skills for Deaddiction Counsellors in Punjab during the COVID 19 Pandemic",
    year: 2021,
    type: "Poster",
    link: "https://www.researchgate.net/publication/355545481_Tele-mentoring_Counselling_Skills_for_Deaddiction_Counsellors_in_Punjab_during_the_COVID_19_Pandemic",
    source: "ResearchGate",
    tags: ["addiction-psychiatry", "covid-19", "poster", "tele-mental-health"],
  },
  {
    id: "2021-telemedicine-in-geriatric-psychiatry-relevance-in-india",
    title: "Telemedicine in Geriatric Psychiatry: Relevance in India",
    year: 2021,
    type: "Article",
    link: "https://www.researchgate.net/publication/354731512_Telemedicine_in_Geriatric_Psychiatry_Relevance_in_India",
    source: "ResearchGate",
    tags: ["article", "geriatric-psychiatry", "mental-health", "tele-mental-health"],
  },
  {
    id: "2021-telephonic-follow-up-during-covid-19-to-maintain-continuity-of-care-for-persons-with-psychiatric-disorders",
    title: "Telephonic Follow-up during COVID-19 to maintain Continuity of Care for persons with psychiatric disorders",
    year: 2021,
    type: "Article",
    link: "https://www.researchgate.net/publication/348602978_Telephonic_Follow-up_during_COVID-19_to_maintain_Continuity_of_Care_for_persons_with_psychiatric_disorders",
    source: "ResearchGate",
    tags: ["article", "covid-19", "mental-health", "tele-mental-health"],
  },
  {
    id: "2021-training-lay-volunteers-as-mental-health-counsellors-in-a-hybrid-course-in-india",
    title: "Training lay volunteers as mental health counsellors in a hybrid course in India",
    year: 2021,
    type: "Poster",
    link: "https://www.researchgate.net/publication/355545706_Training_lay_volunteers_as_mental_health_counsellors_in_a_hybrid_course_in_India",
    source: "ResearchGate",
    tags: ["capacity-building", "mental-health", "poster", "training"],
  },
  {
    id: "2021-training-module-for-health-care-providers-to-deal-with-post-covid-mental-health-issues-for-doctors-nurses",
    title: "Training Module for Health Care Providers to deal with Post COVID Mental Health issues-for doctors & nurses",
    year: 2021,
    type: "Chapter",
    link: "https://www.researchgate.net/publication/354829329_Training_Module_for_Health_Care_Providers_to_deal_with_Post_COVID_Mental_Health_issues-for_doctors_nurses",
    source: "ResearchGate",
    tags: ["capacity-building", "chapter", "covid-19", "mental-health", "training"],
  },
  {
    id: "2021-training-module-for-health-care-providers-to-deal-with-post-covid-mental-health-issues-for-paramedical-staff-commun",
    title: "Training Module for Health Care Providers to deal with Post COVID Mental Health issues-for paramedical staff, community health workers & others",
    year: 2021,
    type: "Book",
    link: "https://www.researchgate.net/publication/354828808_Training_Module_for_Health_Care_Providers_to_deal_with_Post_COVID_Mental_Health_issues-for_paramedical_staff_community_health_workers_others",
    source: "ResearchGate",
    tags: ["book", "capacity-building", "community-psychiatry", "covid-19", "mental-health", "training"],
  },
  {
    id: "2020-an-initial-experience-of-dmhp-link-clinic-from-nimhans-bengaluru-across-karnataka",
    title: "An Initial Experience of DMHP Link Clinic from NIMHANS Bengaluru across Karnataka",
    year: 2020,
    type: "Conference Paper",
    link: "https://www.researchgate.net/publication/369439650_An_Initial_Experience_of_DMHP_Link_Clinic_from_NIMHANS_Bengaluru_across_Karnataka",
    source: "ResearchGate",
    tags: ["community-psychiatry", "conference-paper"],
  },
  {
    id: "2020-guidelines-on-managing-mental-illness-in-hospital-settings-during-covid-19",
    title: "Guidelines on managing mental illness in hospital settings during COVID 19",
    year: 2020,
    type: "Book",
    link: "https://www.researchgate.net/publication/352904340_Guidelines_on_managing_mental_illness_in_hospital_settings_during_COVID_19",
    source: "ResearchGate",
    tags: ["book", "covid-19"],
  },
  {
    id: "2020-implementing-national-mental-health-program-local-leaders-perspectives-and-lessons-for-national-action",
    title: "Implementing National Mental Health Program: Local leaders’ perspectives and lessons for national action",
    year: 2020,
    type: "Article",
    link: "https://www.researchgate.net/publication/342343166_Implementing_National_Mental_Health_Program_Local_leaders%27_perspectives_and_lessons_for_national_action",
    source: "ResearchGate",
    tags: ["article", "mental-health"],
  },
  {
    id: "2020-training-mental-health-professionals-for-covid-19-pandemic-and-beyond",
    title: "Training mental health professionals for COVID-19 pandemic and beyond",
    year: 2020,
    type: "Article",
    link: "https://www.researchgate.net/publication/346128348_Training_mental_health_professionals_for_COVID-19_pandemic_and_beyond",
    source: "ResearchGate",
    tags: ["article", "capacity-building", "covid-19", "mental-health", "training"],
  },
  {
    id: "2019-phenomenology-and-course-of-alcoholic-hallucinosis",
    title: "Phenomenology and Course of Alcoholic Hallucinosis",
    year: 2019,
    type: "Article",
    link: "https://www.researchgate.net/publication/333609475_Phenomenology_and_Course_of_Alcoholic_Hallucinosis",
    source: "ResearchGate",
    tags: ["addiction-psychiatry", "article", "mental-health"],
  },
  {
    id: "2018-neurosyphilis-the-psychiatric-twin",
    title: "Neurosyphilis: The Psychiatric Twin",
    year: 2018,
    type: "Poster",
    link: "https://www.researchgate.net/publication/369417515_Neurosyphilis_The_Psychiatric_Twin",
    source: "ResearchGate",
    tags: ["mental-health", "poster"],
  },
];

export const allTags = Array.from(
  new Set(publications.flatMap((publication) => publication.tags))
).sort();

export const filterPublications = (
  data: Publication[],
  filters: {
    tags?: string[];
    year?: number;
    type?: Publication["type"];
    query?: string;
  } = {}
) => {
  const query = filters.query?.trim().toLowerCase();

  return data.filter((publication) => {
    if (filters.year && publication.year !== filters.year) return false;
    if (filters.type && publication.type !== filters.type) return false;
    if (filters.tags?.length && !filters.tags.every((tag) => publication.tags.includes(tag))) {
      return false;
    }
    if (
      query &&
      !(
        publication.title.toLowerCase().includes(query) ||
        publication.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    ) {
      return false;
    }
    return true;
  });
};

export const sortByYearDesc = (data: Publication[]) =>
  [...data].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

export const sortByYearAsc = (data: Publication[]) =>
  [...data].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));