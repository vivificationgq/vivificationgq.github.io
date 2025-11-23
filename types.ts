
export enum PublicationType {
  JOURNAL = 'Journal',
  CONFERENCE = 'Conference',
  BOOK_CHAPTER = 'Book Chapter',
  WORKING_PAPER = 'Working Paper'
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: PublicationType;
  link?: string;
  doi?: string;
  abstract?: string;
}

export interface Experience {
  id: string;
  role: string;
  institution: string;
  period: string;
  description: string;
  type: 'education' | 'work' | 'internship';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Research' | 'Tech' | 'Design';
  description: string;
}