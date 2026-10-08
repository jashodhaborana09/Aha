import { Component } from '@angular/core';
import { Watchinteluguandtamil } from '../models/watchinteluguandtamil';
import { WatchinteluguandtamilService } from '../service/watchinteluguandtamil.service';

@Component({
  selector: 'app-watchinteluguandtamil',
  templateUrl: './watchinteluguandtamil.component.html',
  styleUrls: ['./watchinteluguandtamil.component.css']
})
export class WatchinteluguandtamilComponent {
    image: any;
     constructor(private Service : WatchinteluguandtamilService) { } 
     ngOnInit(){
       this.Service.onsubmit().subscribe((data: any) => this.image = data); 
        
       
     }

}
