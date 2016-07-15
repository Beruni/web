import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
];

export const appRouterProviders = [
    provideRouter(routes)
];