import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {MainComponent} from "./main/main.component";
import {FooterComponent} from "./footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {HeaderService} from "./header/service/header.service";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, MainComponent, FooterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
