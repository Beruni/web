import { Component } from '@angular/core';
import { FbLoginComponent } from '../login/fblogin.component';

@Component({
    selector: 'my-header',
    template: require('./header.component.jade'),
    directives: [FbLoginComponent]
})

export class HeaderComponent {
}