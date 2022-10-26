import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from "@main/app/modules/welcome-page/welcome-page/welcome-page.component";
import { UserSettingsComponent } from "@main/app/modules/user-settings/user-settings/user-settings.component";

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'user', component: UserSettingsComponent },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
