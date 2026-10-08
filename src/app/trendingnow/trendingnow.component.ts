import { Component } from '@angular/core';
import { TrendingnowService } from '../service/trendingnow.service';


@Component({
  selector: 'app-trendingnow',
  templateUrl: './trendingnow.component.html',
  styleUrls: ['./trendingnow.component.css']
})
export class TrendingnowComponent {
    image: any;
    constructor(private Service : TrendingnowService) { } 
    ngOnInit(){
      this.Service.onsubmit().subscribe((data: any) => this.image = data); 
       
      
    }

}
