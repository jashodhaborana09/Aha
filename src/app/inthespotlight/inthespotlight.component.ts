import { Component } from '@angular/core';
import { InthespotlightService } from '../service/inthespotlight.service';

@Component({
  selector: 'app-inthespotlight',
  templateUrl: './inthespotlight.component.html',
  styleUrls: ['./inthespotlight.component.css']
})
export class InthespotlightComponent {
  image: any;
    constructor(private Service : InthespotlightService) { } 
    ngOnInit(){
      this.Service.onsubmit().subscribe((data: any) => this.image = data); 
       
      
    }


}
