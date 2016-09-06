import {provideRouter, RouterConfig} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./services/auth-guard-activate.service";
import {LocalStorageService} from "./services/local.storage.service";
import {NodeDiscoveryService} from "./services/discovery.service";
import {PreviewBoundaryFileComponent} from "./components/dashboard/boundary_file/preview_boundary_file/preview-boundary.component";
import {BoundaryFileDashBoardComponent} from "./components/dashboard/boundary_file/boundary-file-dashboard.component";
import {DataFileDashboardComponent} from "./components/dashboard/data_file/data-file-dashboard.component";

const routes: RouterConfig = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'preview-boundary-file/:fileId', component: PreviewBoundaryFileComponent},
            {path: 'boundary-files', component: BoundaryFileDashBoardComponent},
            {path: 'data-files', component: DataFileDashboardComponent}
        ]
    }
];

export const appRouterProviders = [
    provideRouter(routes), AuthGuard, LocalStorageService, NodeDiscoveryService
];
