import { Component } from '@angular/core';
import { HandpickedforyouService } from '../service/handpickedforyou.service';
import { Handpickedforyou } from '../models/handpickedforyou';


@Component({
  selector: 'app-handpickedforyou',
  templateUrl: './handpickedforyou.component.html',
  styleUrls: ['./handpickedforyou.component.css']
})
export class HandpickedforyouComponent {
  image: any;
    constructor(private Service :HandpickedforyouService) { } 
    ngOnInit(){
      this.Service.onsubmit().subscribe((data: any) => this.image = data); 
       
      
    }

}
