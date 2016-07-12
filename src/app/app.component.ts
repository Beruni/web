import './rxjs-operators';

import { Component } from '@angular/core';
import { BoundaryService } from './boundary.service';

@Component({
  selector: 'my-app',
  template: require('./app.component.jade'),
  styles: [require('./app.component.scss')],
  providers: [BoundaryService]
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
		