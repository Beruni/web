import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector : 'home',
    template : require('./home.component.jade'),
    directives: [ROUTER_DIRECTIVES],
})

export class HomeComponent {
    
}