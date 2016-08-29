import {provideRouter, RouterConfig} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./services/auth-guard-activate.service";
import {LocalStorageService} from "./services/local.storage.service";
import {PreviewBoundaryFileComponent} from "./components/dashboard/boundary_file/preview_boundary_file/preview-dashboard.component";

const routes: RouterConfig = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
        canActivate: [AuthGuard]
    },
    { path: 'home', component: HomeComponent},
    { path:'preview-boundary-file/:fileId', component: PreviewBoundaryFileComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

export const appRouterProviders = [
    provideRouter(routes), AuthGuard, LocalStorageService
];
