export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 800;

export interface FirebaseDate {
  seconds: number;
}

export interface ContactData {
  cvUrl: string;
  email: string;
  linkedinUrl: string;
}

export interface ProfileData {
  cvUrl: string;
  dob: FirebaseDate;
  email: string;
  interest: string[];
  jobs: string[];
  linkedinUrl: string;
  name: string;
  photo: string;
  prefix: string;
  skills: string[];
}

type EducationPrefix = 'unj';

export interface EducationData {
  name: string;
  point: number;
  prefix: EducationPrefix;
  time: string;
  title: string;
  url: string;
}

export interface ExperienceData {
  id: number;
  company: string;
  desc: string;
  end?: FirebaseDate;
  jobDesc: string[];
  jobDescStacks: string;
  jobDescTools: string;
  title: string;
  start: FirebaseDate;
  url: string;
}

export interface ProjectData {
  desc: string;
  desktopOnly: boolean;
  id: number;
  images: string[];
  repo: string[];
  show: boolean;
  stacks: string[];
  thumbnail: string;
  title: string;
  url: string;
  videos: string[];
}
