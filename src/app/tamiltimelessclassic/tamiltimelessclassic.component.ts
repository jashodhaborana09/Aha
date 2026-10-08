import { Component } from '@angular/core';
import { TamiltimelessclassicService } from '../service/tamiltimelessclassic.service';

@Component({
  selector: 'app-tamiltimelessclassic',
  templateUrl: './tamiltimelessclassic.component.html',
  styleUrls: ['./tamiltimelessclassic.component.css']
})
export class TamiltimelessclassicComponent {
  image: any;
    constructor(private Service : TamiltimelessclassicService) { } 
    ngOnInit(){
      this.Service.onsubmit().subscribe((data: any) => this.image = data); 
       
      
    }

}
