import { AppViewModel } from "@/app/viewmodels/AppViewModel";
import { makeAutoObservable } from "mobx";

interface Skill {
  name: string;
  level: number; // 0-100 percentage
}

export class AboutSectionViewModel {
  private appViewModel: AppViewModel;
  
  title: string = "About Me";
  subtitle: string = "Software Engineer, Product-Minded Software Engineer";
  location: string = "Omaha, Nebraska, United States";
  profileImage?: string = "/images/profile.jpg"; // Update this with your actual profile image path
  
  aboutParagraphs: string[] = [
    "I bridge military precision with software innovation, bringing a distinctive approach to engineering challenges. My journey from Marine Corps Legal Chief to Software Engineer has shaped my philosophy: technical excellence isn't just about code—it's about strategic thinking, disciplined execution, and empowering others.",
    "Whether optimizing CI/CD pipelines, mentoring junior developers, or architecting distributed systems, I focus on building resilient, scalable solutions that integrate both human and technical factors.",
    "Passionate about democratizing development environments and streamlining workflows, I use my experience to create accessible, efficient open-source tools."
  ];
  
  contactLinks = [
    { label: "Portfolio", url: "https://brandon-calderon-moralesportfolio.dev", icon: "globe" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/bcalderonmorales-cmoe", icon: "linkedin" },
    { label: "Email", url: "mailto:brandon.ceemoe@gmail.com", icon: "envelope" },
    { label: "DockerHub", url: "https://hub.docker.com/r/cmoe640/dev-environment", icon: "docker" }
  ];
  
  skillsTitle: string = "Top Skills";
  skills: Skill[] = [
    { name: "Team Leadership", level: 95 },
    { name: "Spanish", level: 90 },
    { name: "Teaching", level: 85 },
    { name: "C#", level: 88 },
    { name: "SQL", level: 85 },
    { name: "JavaScript", level: 82 },
    { name: "React", level: 80 },
    { name: ".NET", level: 85 },
    { name: "CI/CD", level: 90 }
  ];

  constructor(appViewModel: AppViewModel) {
    this.appViewModel = appViewModel;
    makeAutoObservable(this);
  }

  get isDarkMode(): boolean {
    return this.appViewModel.isDarkMode;
  }
}
