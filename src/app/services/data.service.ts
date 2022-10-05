import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  SaveData() {
    console.log('Save data through service')
  }
}
