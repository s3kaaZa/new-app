import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-name-and-country-form',
  templateUrl: './name-and-country-form.component.html',
  styleUrls: ['./name-and-country-form.component.scss']
})
export class NameAndCountryFormComponent implements OnInit {
  NamesAndCountryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.NamesAndCountryForm = formBuilder.group({
      Name: ['', [Validators.required]],
      Surname: ['', [Validators.required]],
      Country: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
}
