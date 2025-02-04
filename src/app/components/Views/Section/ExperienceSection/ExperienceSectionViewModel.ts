import { AppViewModel } from "@/app/viewmodels/AppViewModel";
import { makeAutoObservable } from "mobx";

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies?: string[];
}

export class ExperienceSectionViewModel {
  private appViewModel: AppViewModel;
  
  title: string = "Professional Experience";
  
  experiences: Experience[] = [
    {
      period: "January 2024 - Present",
      title: "Software Engineer, Sr. Professional",
      company: "Fiserv",
      description: "Spearheaded migration from Jenkins to GitHub Actions to optimize CI/CD workflows. Resolved critical CI/CD issues and standardized workflows to boost team efficiency. Mentored junior engineers and contributed to high-level design and user story creation.",
      technologies: ["C#", ".NET", "React", "GitHub Actions", "CI/CD", "Jenkins"]
    },
    {
      period: "November 2023 - January 2024",
      title: "Military Trainee, Sr. Professional",
      company: "Fiserv",
      description: "Gained insights into project management and business analysis as part of a specialized training program. Enhanced soft skills including communication, teamwork, and leadership.",
      technologies: ["Project Management", "Business Analysis", "Communication"]
    },
    {
      period: "May 2023 - November 2023",
      title: "Web Services Developer",
      company: "Insight Global",
      description: "Developed and maintained web services using C#, SQL, and JavaScript. Managed design, implementation, refactoring, and bug fixes within a legacy codebase.",
      technologies: ["C#", "SQL", "JavaScript", "Web Services"]
    },
    {
      period: "October 2021 - May 2023",
      title: "Software Engineer",
      company: "Leidos",
      description: "Worked as both a Frontend and DevOps engineer. Configured development environments using Linux, VS Code, and Vim. Built and maintained shared React components and contributed to agile workflows.",
      technologies: ["React", "Linux", "VS Code", "DevOps", "Agile"]
    },
    {
      period: "June 2019 - August 2019",
      title: "Legal Administrative Assistant",
      company: "Boys Town National Research Hospital",
      description: "Provided legal administrative support in a healthcare setting.",
      technologies: ["Administrative", "Legal Support"]
    },
    {
      period: "June 2018 - April 2019",
      title: "Legal Chief",
      company: "United States Marine Corps",
      description: "Served as Legal Chief in Morón De La Frontera, Andalusia, Spain.",
      technologies: ["Leadership", "Legal Operations", "Military"]
    },
    {
      period: "August 2016 - May 2018",
      title: "Court Reporter",
      company: "United States Marine Corps",
      description: "Worked as a Court Reporter at Camp Lejeune, North Carolina.",
      technologies: ["Court Reporting", "Legal Documentation"]
    },
    {
      period: "December 2014 - August 2016",
      title: "Legal Specialist",
      company: "United States Marine Corps",
      description: "Served as a Legal Specialist at Camp Lejeune, North Carolina.",
      technologies: ["Legal Support", "Document Preparation"]
    }
  ];

  constructor(appViewModel: AppViewModel) {
    this.appViewModel = appViewModel;
    makeAutoObservable(this);
  }

  get isDarkMode(): boolean {
    return this.appViewModel.isDarkMode;
  }
}
