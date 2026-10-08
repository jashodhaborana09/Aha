import { Component } from '@angular/core';
import { MollywoodmoodService } from '../service/mollywoodmood.service';

@Component({
  selector: 'app-mollywoodmood',
  templateUrl: './mollywoodmood.component.html',
  styleUrls: ['./mollywoodmood.component.css']
})
export class MollywoodmoodComponent {
 image: any;
   constructor(private Service : MollywoodmoodService) { } 
   ngOnInit(){
     this.Service.onsubmit().subscribe((data: any) => this.image = data); 
      
     
   }  
}
