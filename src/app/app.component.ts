import { Component, OnInit } from '@angular/core';
import { DogsService } from './dogs.service';
import { Dog } from './dog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'projetoDogs';

  dogFetched: any;

  constructor(private dogService: DogsService){
    this.getDogs()
  }

  getDogs(){
    this.dogService.get().subscribe(
      (data: Dog) => {
        this.dogFetched = data
        
        let imageFormat = this.dogFetched.url.slice(this.dogFetched.url.length - 4);

        if(imageFormat == '.mp4'){
          this.getDogs()
        }

        console.log(this.dogFetched)
      },

      (error: any) => {
        console.log(error)
      }
    )
  }
}
