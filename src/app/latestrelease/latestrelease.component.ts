import { Component } from '@angular/core';
import { latestreleaseService } from '../service/latestrelease.service';

@Component({
  selector: 'app-latestrelease',
  templateUrl: './latestrelease.component.html',
  styleUrls: ['./latestrelease.component.css']
})
export class LatestreleaseComponent {
  image: any;
  constructor(private Service : latestreleaseService) { } 
  ngOnInit(){
    this.Service.onsubmit().subscribe((data: any) => this.image = data); 
     
    
  }
  }

