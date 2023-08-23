import { Component } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent{

    properties: Array<IProperty>;

	constructor (private housingService: HousingService) {
		this.properties = [];
	}

	ngOnInit(): void {
		this.housingService.getAllProperties().subscribe(
			data=>{
				this.properties=data;
				console.log(data)
			},
		    error => {console.log(error);})
		
	}
}
