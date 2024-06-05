import { NavigationViewModel } from '../../components/ViewModels/NavigationViewModel';

export const navigationViewModel = new NavigationViewModel([
    {id: 'home', url: '/', text: "Home"},
    {id: 'about', url: '/about', text: "About"},
    {id: 'work-history', url: '/work-history', text: 'Work History'},
    {id: 'skills', url: '/skills', text: "Skills"},
    {id: 'contact', url: '/contact', text: "Contact"}
]);