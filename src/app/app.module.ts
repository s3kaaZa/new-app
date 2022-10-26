import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@main/app/app-routing.module';
import { AppComponent } from '@main/app/app.component';
import { WelcomePageModule } from "@main/app/modules/welcome-page/welcome-page.module";
import { UserSettingsModule } from "@main/app/modules/user-settings/user-settings.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomePageModule,
    UserSettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
