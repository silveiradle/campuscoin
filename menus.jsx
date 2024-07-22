import { faUser } from "@fortawesome/free-solid-svg-icons";
import Account from "./src/pages/Profile/Account";
import SocialLinks from "./src/pages/Profile/SocialLinks";
import Notifications from "./src/pages/Profile/Notifications";

export const navMenus = [

];

export const profileMenus = [
    { label: 'Perfil', path: '/profile', icon: faUser },
];

export const accountMenus = [
    { label: 'Conta', component: <Account />, active: false },
    { label: 'Redes Sociais', component: <SocialLinks />, active: false },
    { label: 'Notificações', component: <Notifications />, active: false },
]