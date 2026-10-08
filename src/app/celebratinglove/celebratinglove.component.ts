import { Component } from '@angular/core';
import { CelebratingloveService } from '../service/celebratinglove.service';

@Component({
  selector: 'app-celebratinglove',
  templateUrl: './celebratinglove.component.html',
  styleUrls: ['./celebratinglove.component.css']
})
export class CelebratingloveComponent {
  image: any;
   constructor(private Service : CelebratingloveService) { } 
   ngOnInit(){
     this.Service.onsubmit().subscribe((data: any) => this.image = data); 
      
     
   }
}
