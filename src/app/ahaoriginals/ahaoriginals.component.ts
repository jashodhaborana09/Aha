import { Component } from '@angular/core';
import { ahaoriginalsservice } from '../service/ahaoriginals.service';

@Component({
  selector: 'app-ahaoriginals',
  templateUrl: './ahaoriginals.component.html',
  styleUrls: ['./ahaoriginals.component.css']
})
export class AhaoriginalsComponent {
  image: any;
     constructor(private Service : ahaoriginalsservice) { } 
     ngOnInit(){
       this.Service.onsubmit().subscribe((data: any) => this.image = data); 
        
       
     }  

}
