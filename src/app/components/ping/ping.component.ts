import {Component, OnInit} from '@angular/core'
import { BoundaryService } from '../../services/boundary.service';

@Component({
  selector: 'ping',
  templateUrl: './app.component.jade',
  providers: [ BoundaryService ]
})
export class PingComponent implements OnInit{
	
	visibleText: string;
	mode = 'Observable';

	constructor (private boundaryService: BoundaryService) {}

	ngOnInit(){
		this.ping();
	}

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