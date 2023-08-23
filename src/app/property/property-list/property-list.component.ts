import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

    Properties: Array<any> = [
    	{
    	    "Id":1,
    		"Name":"Birla house",
    		"Type":"House",
    		"Price":12000
  		},
		{
			"Id":2,
			"Name":"Erose villa",
			"Type":"House",
			"Price":13000
		},
		{
			"Id":3,
			"Name":"Bruv",
			"Type":"den",
			"Price":52000
		},
		{
			"Id":4,
			"Name":"Ugly castle",
			"Type":"castle",
			"Price":2000
		}
]

}
