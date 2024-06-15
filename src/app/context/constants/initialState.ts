import { FooterViewModel } from "@/app/components/ViewModels/FooterViewModel";
import { NavigationViewModel } from "@/app/components/ViewModels/NavigationViewModel";
import { SectionViewModel } from "@/app/components/ViewModels/SectionViewModel";

export const initialState = {
    footerViewModel: {} as FooterViewModel,
    navigationViewModel: {} as NavigationViewModel,
    sectionViewModels: [] as SectionViewModel[]
};