import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-state-page',
  templateUrl: './state-page.component.html',
  styleUrls: ['./state-page.component.scss']
})
export class StatePageComponent implements OnInit {
  isHiddenNamesForm: boolean = false;
  isHiddenOptionForm: boolean = false;
  isHiddenZipCodeForm: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  ShowForms(key: number) {
    if (key === 1) {
      this.isHiddenNamesForm = false;
      this.isHiddenOptionForm = false;
      this.isHiddenZipCodeForm = true;
    }
    if (key === 2) {
      this.isHiddenNamesForm = true;
      this.isHiddenOptionForm = true;
      this.isHiddenZipCodeForm = false;
    }
  }
  SaveData() {
    this.dataService.SaveData()
  }
}
