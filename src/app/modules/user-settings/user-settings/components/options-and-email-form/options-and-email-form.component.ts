import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-options-and-email-form',
  templateUrl: './options-and-email-form.component.html',
  styleUrls: ['./options-and-email-form.component.scss']
})
export class OptionsAndEmailFormComponent {
  OptionsAndEmailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.OptionsAndEmailForm = formBuilder.group({
      Option: ['', Validators.required],
      Email: ['', [
        Validators.required,
        Validators.email
      ]],
    });
  }
}
