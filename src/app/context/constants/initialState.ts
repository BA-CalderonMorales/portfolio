import { FooterViewModel } from "@/app/components/ViewModels/FooterViewModel";
import { NavigationViewModel } from "@/app/components/ViewModels/NavigationViewModel";
import { SectionViewModel } from "@/app/components/ViewModels/SectionViewModel";
import { AppViewModel } from "@/app/components/ViewModels/AppViewModel";

export const initialState = {
    appViewModel: {} as AppViewModel,
    footerViewModel: {} as FooterViewModel,
    navigationViewModel: {} as NavigationViewModel,
    sectionViewModels: [] as SectionViewModel[]
};