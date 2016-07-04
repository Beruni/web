import { Component } from '@angular/core';
import '../../public/css/styles.scss';
@Component({
  selector: 'my-app',
  template: require('./app.component.jade'),
  styles: [require('./app.component.scss')]
})
export class AppComponent { }
