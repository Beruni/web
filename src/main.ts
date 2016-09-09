import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide, APP_INITIALIZER } from '@angular/core';
import { HTTP_PROVIDERS,Http } from '@angular/http';
import { AppComponent } from './app/app.component';
import { appRouterProviders } from './app/app.routes';
import { NodeDiscoveryService } from "./app/services/discovery.service";

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  enableProdMode();
}

bootstrap(AppComponent, [ appRouterProviders ,HTTP_PROVIDERS, NodeDiscoveryService,
  provide(APP_INITIALIZER, {
    useFactory: (service:NodeDiscoveryService) => () => service.fetchNodeServers(),
    deps:[NodeDiscoveryService, HTTP_PROVIDERS], multi: true
  })
]);

