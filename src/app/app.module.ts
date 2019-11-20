import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavberComponent } from './components/navber/navber.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPageComponent,
    HomePageComponent,
    NavberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
