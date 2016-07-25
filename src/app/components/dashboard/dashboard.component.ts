import { Component } from '@angular/core';
import {Tags} from "./tags.component";

@Component({
    selector: 'dashboard',
    directives: [Tags],
    template: ' <span tags></span> '
})

export class DashboardComponent{

}