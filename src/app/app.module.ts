import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddSupermarketComponent } from './add-supermarket/add-supermarket.component';
import { ViewSupermarketComponent } from './view-supermarket/view-supermarket.component';
import { EditSupermarketComponent } from './edit-supermarket/edit-supermarket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddSupermarketComponent,
    ViewSupermarketComponent,
    EditSupermarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
