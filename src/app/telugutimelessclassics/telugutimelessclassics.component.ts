import { Component } from '@angular/core';
import { TelugutimelessclassicsService } from '../service/telugutimelessclassics.service';

@Component({
  selector: 'app-telugutimelessclassics',
  templateUrl: './telugutimelessclassics.component.html',
  styleUrls: ['./telugutimelessclassics.component.css']
})
export class TelugutimelessclassicsComponent {
  image: any;
    constructor(private Service : TelugutimelessclassicsService ) { } 
    ngOnInit(){
      this.Service.onsubmit().subscribe((data: any) => this.image = data); 
       
      
    }

}
