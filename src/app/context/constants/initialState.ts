import { FooterViewModel } from "@/app/components/ViewModels/FooterViewModel";
import { NavigationViewModel } from "../../components/ViewModels/NavigationViewModel";
import { SectionViewModel } from "../../components/ViewModels/SectionViewModel";
import { footerViewModel } from "./footer";

export const initialState = {
    footerViewModel: {} as FooterViewModel,
    navigationViewModel: {} as NavigationViewModel,
    sectionViewModels: [] as SectionViewModel[] 
};