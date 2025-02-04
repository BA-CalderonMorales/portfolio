import { AppViewModel } from "@/app/components/ViewModels/AppViewModel";
import { makeAutoObservable } from "mobx";

interface LifeItem {
  title: string;
  description: string;
}

export class HomeLifeSectionViewModel {
  private appViewModel: AppViewModel;
  title: string = "My Life";
  content: LifeItem[] = [
    {
      title: "Professional",
      description: "I'm passionate about software development and creating meaningful applications."
    },
    {
      title: "Personal",
      description: "When I'm not coding, I enjoy exploring new technologies and contributing to open source projects."
    }
  ];

  constructor(appViewModel: AppViewModel) {
    this.appViewModel = appViewModel;
    makeAutoObservable(this);
  }
}
