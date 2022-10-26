import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { WelcomePageComponent } from '@main/app/modules/welcome-page/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class WelcomePageModule { }
