import {Component, Injectable} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'my-app',
    template: require('./app.component.jade'),
    styles: [require('./app.component.scss')],
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})

@Injectable()
export class AppComponent {

}