import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingPageComponent } from "./modules/greeting/greeting-page/greeting-page.component";
import { MainPageComponent } from "./modules/set-and-show-user/main-page/main-page.component";

const routes: Routes = [
  { path: 'welcome', component: GreetingPageComponent },
  { path: 'user', component: MainPageComponent },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
