import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "night-login",
    position: "Human Resources Staff",
    company: "Night Login - DTETI UGM",
    location: "Yogyakarta",
    startDate: new Date("2026-05-01"),
    endDate: "Present",
    description: [
      "Maintain a member database to track competencies and availability, supporting project staffing and member allocation.",
      "Support recruitment and onboarding, and connect project requirements with suitable members.",
    ],
    achievements: [
      "Maintain a spreadsheet-based database of member competencies and availability.",
      "Support member recruitment, onboarding, and project staffing.",
    ],
    skills: ["Human Resources", "Google Sheets", "Stakeholder Communication"],
  },
  {
    id: "volunteer-yogyakarta",
    position: "Social Media Staff",
    company: "Volunteer Yogyakarta Batch 3",
    location: "Yogyakarta",
    startDate: new Date("2026-02-01"),
    endDate: new Date("2026-03-31"),
    description: [
      "Managed Instagram and TikTok accounts with 3,500+ followers, publishing around five planned content pieces each week.",
      "Published live activity reports and coordinated with media partners to broaden publication reach.",
    ],
    achievements: [
      "Managed social accounts with more than 3,500 followers and produced around five content pieces per week.",
      "Coordinated live reports and media partners to expand publication reach.",
    ],
    skills: ["Social Media", "Content Planning", "Stakeholder Communication"],
  },
  {
    id: "industrial-visit",
    position: "Documentation & Design Division",
    company: "Industrial Visit Committee - DTETI UGM, Class of 2024",
    location: "Yogyakarta",
    startDate: new Date("2026-07-01"),
    endDate: new Date("2026-10-31"),
    description: [
      "Designed the event guidebook and prepared visual and documentation materials for the industrial visit.",
      "Supported event documentation, live reporting, and photo curation.",
    ],
    achievements: [
      "Created guidebook and visual materials to help participants prepare for the visit.",
      "Supported live reporting and photo curation during event activities.",
    ],
    skills: ["Event Operations", "Event Documentation", "Canva"],
  },
  {
    id: "gamacup-2026",
    position: "Liaison Officer Staff",
    company: "GAMACUP 2026 - UKM Voli UGM",
    location: "Yogyakarta",
    startDate: new Date("2026-07-01"),
    endDate: new Date("2026-10-31"),
    description: [
      "Served as a primary contact for assigned teams in a tournament involving 49 high school and university teams.",
      "Coordinated event updates, team communication, and participant support before, during, and after matches.",
    ],
    achievements: [
      "Coordinated communication between participating teams and event committees.",
      "Supported teams throughout match days and helped resolve participant needs.",
    ],
    skills: ["Event Operations", "Stakeholder Communication"],
  },
];
