import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {StatePageComponent} from "./state-page/state-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'state-page', component: StatePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
