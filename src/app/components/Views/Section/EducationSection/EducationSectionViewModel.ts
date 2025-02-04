import { AppViewModel } from "@/app/viewmodels/AppViewModel";
import { makeAutoObservable } from "mobx";

interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  logo?: string;
}

export class EducationSectionViewModel {
  private appViewModel: AppViewModel;
  
  title: string = "Education";
  
  education: Education[] = [
    {
      institution: "University of Nebraska at Omaha",
      degree: "Bachelor's Degree in Multidisciplinary Studies (Computer Science Concentration)",
      period: "August 2013 - May 2025",
      logo: "/images/education/university-of-nebraska.png"
    },
    {
      institution: "devCodeCamp",
      degree: "Certificate, Full-Stack Software Development",
      period: "May 2021 - August 2021",
      logo: "/images/education/devcodecamp.png"
    },
    {
      institution: "Omaha South Magnet High School",
      degree: "High School Diploma",
      period: "2009 - 2013",
      logo: "/images/education/omaha-south.png"
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
