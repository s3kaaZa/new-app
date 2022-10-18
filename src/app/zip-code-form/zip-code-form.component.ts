import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-zip-code-form',
  templateUrl: './zip-code-form.component.html',
  styleUrls: ['./zip-code-form.component.scss']
})
export class ZipCodeFormComponent implements OnInit {
  ZipCodeForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.ZipCodeForm = formBuilder.group({
      ZipCode: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }
}
