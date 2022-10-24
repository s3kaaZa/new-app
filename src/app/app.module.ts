import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingModule } from "./modules/greeting/greeting.module";
import { SetAndShowUserModule } from "./modules/set-and-show-user/set-and-show-user.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GreetingModule,
    SetAndShowUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
