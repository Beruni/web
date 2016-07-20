import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  	selector: 'my-app',
  	template: `<my-header></my-header>
	<router-outlet></router-outlet>
	<my-footer></my-footer>`,
  	styles: [require('./app.component.scss')],
	directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {

}
		