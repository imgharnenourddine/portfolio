export interface Technology {
  name: string;
  logo: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  technologies: Technology[];
}

export interface ExpertiseDomain {
  title: string;
  description: string;
  icon: string;
}
