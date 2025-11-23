import { Publication, PublicationType, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Qi Gao",
  title: "Doctor of Philosophy in Engineering Psychology",
  currentRole: "Post-doc Researcher at IIT (S4HRI)",
  email: "vivificationleslie@gmail.com",
  phone: "+86 1352 1107 590",
  scholar: "https://scholar.google.com/citations?user=CXdjMFIAAAAJ",
  linkedin: "https://www.linkedin.com/in/vivificationgaoqi/",
  twitter: "#",
  github: "#",
  location: "Genoa, Italy (Prev. Hangzhou, China)",
  aboutShort: "Exploring the intersection of Human-AI interaction and social robotics.",
  about: `I am a Post-doctoral researcher at the Italian Institute of Technology (IIT) in the S4HRI group led by PI Agnieszka Wykowska. My research bridges Engineering Psychology and Social Robotics, with a specific focus on the Sense of Agency (SoA) in Human-Robot Interaction using the iCub platform. 

I earned my Ph.D. from Zhejiang University, where I developed the Agent Teaming Situation Awareness (ATSA) framework. My work aims to understand how humans perceive control and agency when collaborating with intelligent systems, from social robots to autonomous vehicles.`
};

export const NEWS = [
  { date: "2024", text: "Awarded Outstanding Graduate Award, Zhejiang Province." },
  { date: "2024", text: "Joined IIT S4HRI group as Post-doc Researcher." },
  { date: "2024", text: "Paper on Trust Calibration in Autonomous Vehicles published in Transportation Research Part F." },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "J1",
    title: "Agent Teaming Situation Awareness (ATSA): A Situation Awareness Framework for Human-AI Teaming",
    authors: "Gao, Q., Zhang, X., Xu, W., Shen, M., & Gao, Z.",
    venue: "IEEE Transactions on Cognitive and Developmental Systems",
    year: "In Revision",
    type: PublicationType.JOURNAL,
    abstract: "This paper introduces the Agent Teaming Situation Awareness (ATSA) framework, a theoretical model designed to evaluate and enhance situation awareness in Human-AI teams. By integrating cognitive engineering principles with system design, we propose a multi-layered approach to understanding how human agents and AI agents share, maintain, and recover situation awareness during complex collaborative tasks. The framework is validated through a series of experiments involving high-fidelity simulations."
  },
  {
    id: "J2",
    title: "Trust Calibration through Perceptual and Predictive Information of the external context in Autonomous Vehicle",
    authors: "Gao, Q., Shi, Y., Luo, Y., Shen, M., & Gao, Z.",
    venue: "Transportation Research Part F: Traffic Psychology and Behavior (Q2, IF=4.1)",
    year: "2024",
    type: PublicationType.JOURNAL,
    doi: "10.1016/j.trf.2024.00.000",
    abstract: "Appropriate trust is critical for safety in autonomous vehicles. This study investigates how perceptual information (what the driver sees) and predictive information (what the system anticipates) influence driver trust calibration. Using a driving simulator, we manipulated the reliability of the automated system and the type of contextual information provided. Results indicate that predictive information significantly improves trust calibration accuracy, particularly in high-uncertainty scenarios, reducing reaction times during take-over requests."
  },
  {
    id: "J3",
    title: "Working memory capacity for biological motion: A virtual reality examination",
    authors: "Hu, L., Gao, Q., Zhang, L., Wen, Y., Gao, Z., & Wang, R.",
    venue: "Current Psychology (Q2, IF=2.8)",
    year: "2024",
    type: PublicationType.JOURNAL,
    abstract: "Biological motion processing is fundamental to social interaction. This research explores the limits of working memory capacity for biological motion stimuli using an immersive Virtual Reality (VR) paradigm. Unlike traditional 2D screens, VR provides depth cues that may alter memory encoding. Our findings suggest that working memory for biological motion is distinct from static object memory and is significantly influenced by the spatial presentation available in VR environments."
  },
  {
    id: "J4",
    title: "Working Memory Capacity for Gesture-Command Associations in Gestrual Interaction",
    authors: "Gao, Q., Ma, Z., Gu, Q., Li, J., & Gao, Z.",
    venue: "International Journal of Human-Computer Interaction (Q1, IF=4.7)",
    year: "2023",
    type: PublicationType.JOURNAL,
    abstract: "Gesture-based interaction is becoming ubiquitous, yet the cognitive load associated with learning gesture sets is often overlooked. We quantified the working memory capacity for gesture-command associations. Through three experiments, we identified that the complexity of the gesture and its semantic congruency with the command are the primary factors affecting memory capacity. These results provide design guidelines for developing intuitive gesture vocabularies for natural user interfaces."
  },
  {
    id: "J5",
    title: "Mood congruency affects physiological synchrony but not empathic accuracy in a naturalistic empathy task",
    authors: "Pan, H., Chen, Z., Jospe, K., Gao, Q.(*), Sheng, J., Gao, Z.(*), & Perry, A(*)",
    venue: "Biological Psychology (Q2, IF=2.6)",
    year: "2023",
    type: PublicationType.JOURNAL,
    abstract: "Empathy involves both understanding others' emotions and resonating with them physiologically. This study utilized hyperscanning techniques to measure physiological synchrony (EDA and HRV) between dyads during a naturalistic empathy task. We found that while mood congruency enhanced physiological synchrony, it did not necessarily improve empathic accuracy (the ability to correctly judge the other's emotional state), suggesting a dissociation between the affective and cognitive components of empathy."
  },
  {
    id: "J6",
    title: "Personality Affects Dispositional Trust and History-Based Trust in Different Ways",
    authors: "Liang, J., Gao, Q., Li, W., Shi, Y., Shen, M., & Gao, Z.",
    venue: "International Journal of Human-Computer Interaction (Q1, IF=4.7)",
    year: "2022",
    type: PublicationType.JOURNAL,
    abstract: "Trust in automation is dynamic. This paper distinguishes between dispositional trust (initial tendency to trust) and history-based trust (learned through interaction). We surveyed 300 participants and conducted a behavioral experiment. Structural Equation Modeling revealed that personality traits like Agreeableness and Neuroticism strongly predict dispositional trust, whereas Conscientiousness moderates the rate at which history-based trust evolves in response to system errors."
  },
  {
    id: "B1",
    title: "Research paradigm in human-machine teaming",
    authors: "Gao, Z., & Gao, Q.",
    venue: "Human-Centered AI: Interdisciplinary Integration and Innovation of AI, Tsinghua University Press",
    year: "In Press",
    type: PublicationType.BOOK_CHAPTER,
    abstract: "This book chapter reviews the evolving research paradigms in human-machine teaming. We trace the shift from 'function allocation' to 'flexible teaming' and discuss the methodological challenges of studying human-AI collaboration. We propose a standardized set of metrics for evaluating teaming effectiveness, including joint performance, trust resilience, and shared mental models."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "postdoc",
    role: "Post-doc Researcher",
    institution: "Italian Institute of Technology, S4HRI",
    period: "Current",
    description: "Researching Sense of Agency in Human-Robot Interaction (iCub). PI: Agnieszka Wykowska.",
    type: "work"
  },
  {
    id: "phd",
    role: "Ph.D. in Engineering Psychology",
    institution: "Zhejiang University",
    period: "2019 - 2024",
    description: "Dissertation on Human-AI Teaming. Outstanding Graduate Award (Provincial & University level). Advisor: Prof. Zaifeng Gao.",
    type: "education"
  },
  {
    id: "huawei",
    role: "Project Advisor / Leader",
    institution: "HUAWEI",
    period: "2021 - 2023",
    description: "Led projects on Intelligent Vehicle Cockpit design, Human-Autonomy Relationship, and Animation Effects in Control Panels.",
    type: "work"
  },
  {
    id: "bs",
    role: "B.S. in Applied Psychology",
    institution: "Nankai University",
    period: "2015 - 2019",
    description: "Focus on Applied Psychology. XinYa Scholarship recipient (2017, 2018).",
    type: "education"
  },
  {
    id: "dual",
    role: "Dual Degree in Management",
    institution: "Tianjin University",
    period: "2016 - 2019",
    description: "Bachelor of Management (Dual Degree).",
    type: "education"
  },
  {
    id: "summer",
    role: "Summer School",
    institution: "Hokkaido University, Japan",
    period: "Jun 2017 - Aug 2017",
    description: "International exchange experience.",
    type: "education"
  },
  {
    id: "alibaba",
    role: "Project Member",
    institution: "Alibaba",
    period: "Aug 2020 - Dec 2020",
    description: "Proposed prototypes for 'Trust in Digital Inclusive Finance'. Silver Award in Internet Innovation Design Competition.",
    type: "internship"
  }
];

export const SKILLS: Skill[] = [
  { 
    name: "Unity 3D", 
    level: 85, 
    category: "Tech",
    description: "Building immersive VR scenarios and experimental environments for human-subject research." 
  },
  { 
    name: "Driving Sim", 
    level: 95, 
    category: "Research",
    description: "Operating high-fidelity driving simulators to study human-autonomous vehicle interaction and handover safety."
  },
  { 
    name: "Python/R/MATLAB", 
    level: 90, 
    category: "Tech",
    description: "Advanced data processing pipelines, statistical analysis (LMM, Bayesian), and experimental scripting (Psychopy)."
  },
  { 
    name: "EEG/Physiology", 
    level: 85, 
    category: "Research",
    description: "Acquisition and analysis of physiological signals (ERP, ECG, EDA) to measure cognitive workload and emotional states."
  },
  { 
    name: "Eye Movement", 
    level: 90, 
    category: "Research",
    description: "Tracking and analyzing gaze patterns to understand visual attention allocation in dynamic tasks."
  },
  { 
    name: "Figma/Axure", 
    level: 80, 
    category: "Design",
    description: "Rapid prototyping of user interfaces for experimental stimuli and digital products with a focus on usability."
  },
  { 
    name: "Statistical Modeling", 
    level: 85, 
    category: "Research",
    description: "Applying advanced multivariate statistics to model complex human behavioral data."
  },
  { 
    name: "Adobe Suite", 
    level: 75, 
    category: "Design",
    description: "Creating professional academic figures, diagrams, and visual presentations for publications."
  },
];