import { AppViewModel } from "@/app/viewmodels/AppViewModel";
import { makeAutoObservable } from "mobx";

interface TechItem {
  name: string;
  icon?: string;
}

interface TechCategory {
  name: string;
  items: TechItem[];
}

export class TechStackSectionViewModel {
  private appViewModel: AppViewModel;
  
  title: string = "Technologies & Tools";
  
  categories: TechCategory[] = [
    {
      name: "Languages",
      items: [
        { name: "C#", icon: "csharp" },
        { name: "SQL", icon: "database" },
        { name: "JavaScript", icon: "js" },
        { name: "XML", icon: "code" },
        { name: "YAML", icon: "file-code" },
        { name: "Groovy", icon: "code" }
      ]
    },
    {
      name: "Frameworks",
      items: [
        { name: "React", icon: "react" },
        { name: ".NET 4.8", icon: "dotnet" },
        { name: ".NET 6+", icon: "dotnet" }
      ]
    },
    {
      name: "Tools",
      items: [
        { name: "Visual Studio", icon: "visualstudio" },
        { name: "VS Code", icon: "vscode" },
        { name: "MSSQL", icon: "database" },
        { name: "CyberArk", icon: "lock" },
        { name: "Splunk", icon: "chart-line" },
        { name: "Confluence", icon: "confluence" },
        { name: "SharePoint", icon: "microsoft" },
        { name: "ServiceNow", icon: "ticket" },
        { name: "Fortify SCA", icon: "shield" },
        { name: "Jenkins", icon: "jenkins" },
        { name: "GitHub Actions", icon: "github" }
      ]
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
