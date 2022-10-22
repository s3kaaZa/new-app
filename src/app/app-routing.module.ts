import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingPageComponent } from "./greeting/greeting-page/greeting-page.component";
import { MainPageComponent } from "./set-and-show-user/main-page/main-page.component";

const routes: Routes = [
  { path: '', component: GreetingPageComponent },
  { path: 'state-page', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
