import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddSupermarketComponent } from './add-supermarket/add-supermarket.component';
import { ViewSupermarketComponent } from './view-supermarket/view-supermarket.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SupermarketUpdateComponent } from './supermarket-update/supermarket-update.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddSupermarketComponent,
    ViewSupermarketComponent,
    HeaderComponent,
    FooterComponent,
    SupermarketUpdateComponent,
    SupplierListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
