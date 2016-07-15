import './rxjs-operators';

import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FbLoginComponent } from './login/fblogin.component';
import { FooterComponent } from './components/footer/footer.component';

import { BoundaryService } from './services/boundary.service';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  	selector: 'my-app',
  	template: `<my-header></my-header>
	<router-outlet></router-outlet>
	<my-footer></my-footer>`,
  	styles: [require('./app.component.scss')],
  	providers: [BoundaryService],
	directives: [FbLoginComponent, HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
	visibleText: string = "ping";

	constructor (private boundaryService: BoundaryService) {}

	ping(){
		this.boundaryService.ping()
			.subscribe(
				visibleString => this.visibleText = visibleString,
				error => this.logError(error)
			);
	}

	logError(err: any) {
  		console.error('There was an error: ' + err);
	}
}
		