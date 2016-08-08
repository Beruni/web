import {provideRouter, RouterConfig} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./service/auth-guard-activate.service";
import {LocalStorageService} from "./service/local.storage.service";

const routes: RouterConfig = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
        canActivate: [AuthGuard]
    },
    { path: 'home', component: HomeComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

export const appRouterProviders = [
    provideRouter(routes), AuthGuard, LocalStorageService
];
