import { url } from 'inspector';
import { NavigationViewModel } from '../../components/ViewModels/NavigationViewModel';

export const navigationViewModel = new NavigationViewModel([
    {id: 'home', url: '/', text: "Home"},
    {id: 'about', url: '/about', text: "About"},
    {id: 'work-history', url: '/work-history', text: 'Work History'},
    {id: 'skills', url: '/skills', text: "Skills"},
    {id: 'contact', url: '/contact', text: "Contact"},
    {id: 'theme', url: '#', text: "Theme", options: [
        {id: 'modern', text: 'Modern', url: '#'},
        {id: 'dracula', text: 'Dracula', url: '#'},
        {id: 'earthly', text: 'Earthly', url: '#'}
    ]}
]);