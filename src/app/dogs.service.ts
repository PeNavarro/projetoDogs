import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Dog } from './dog'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DogsService {

  constructor(private httpClient: HttpClient) { 
  }

  get(): Observable<Dog>{

    return this.httpClient.get<Dog>('https://random.dog/woof.json')
  }
}
