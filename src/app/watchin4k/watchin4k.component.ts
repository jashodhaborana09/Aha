import { Component } from '@angular/core';
import { Watchin4kService } from '../service/watchin4k.service';

@Component({
  selector: 'app-watchin4k',
  templateUrl: './watchin4k.component.html',
  styleUrls: ['./watchin4k.component.css']
})
export class Watchin4kComponent {
  image: any;
    constructor(private Service : Watchin4kService) { } 
    ngOnInit(){
      this.Service.onsubmit().subscribe((data: any) => this.image = data); 
       
      
    }

}
