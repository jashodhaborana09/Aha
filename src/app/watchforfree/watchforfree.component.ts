import { Component } from '@angular/core';
import { WatchforfreeService } from '../service/watchforfree.service';

@Component({
  selector: 'app-watchforfree',
  templateUrl: './watchforfree.component.html',
  styleUrls: ['./watchforfree.component.css']
})
export class WatchforfreeComponent {
  image: any;
    constructor(private Service : WatchforfreeService) { } 
    ngOnInit(){
      this.Service.onsubmit().subscribe((data: any) => this.image = data); 
       
      
    }

}
