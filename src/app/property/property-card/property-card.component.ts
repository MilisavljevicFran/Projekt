import { Component, Input } from "@angular/core";
import { IProperty } from "../iproperty.interface";

@Component({
    selector: 'app-property-card',
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css']
})
export class PropertyCardComponent {

    @Input()
    property!: IProperty;
//vs code mi je preporučio da dodam ! prije :, ako nešto ne radi, možda je do toga
}
// piše da je error ali uspješno kompajlira