import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component"

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];
