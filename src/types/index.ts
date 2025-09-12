export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 800;

export interface FirebaseDate {
  seconds: number;
}

export interface ProfileData {
  dob: FirebaseDate;
  interest: string[];
  jobs: string[];
  name: string;
  prefix: string;
  skills: string[];
}

export interface EducationData {
  name: string;
  point: number;
  prefix: 'unj';
  time: string;
  title: string;
  url: string;
}

export interface ExperienceData {
  id: number;
  company: string;
  desc: string;
  end?: FirebaseDate;
  jobs: string[];
  title: string;
  start: FirebaseDate;
  url: string;
}

type ProjectPrefix =
  | 'resume'
  | 'game-cv'
  | 'cvc'
  | 'pokemon'
  | 'pathfinding'
  | 'ttt'
  | 'kuartet'
  | 'sp-mock';

export interface ProjectData {
  desktopOnly: boolean;
  imageTotal: number;
  repo: string[];
  desc: string;
  prefix: ProjectPrefix;
  stacks: string[];
  title: string;
  id: number;
  videoTotal: number;
  url: string;
}
