import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewSupermarketComponent } from './view-supermarket/view-supermarket.component';
import { AddSupermarketComponent } from './add-supermarket/add-supermarket.component';
import { SupermarketUpdateComponent } from './supermarket-update/supermarket-update.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "view-supermarket/:id", component: ViewSupermarketComponent},
  {path: "supermarket-update/:id", component: SupermarketUpdateComponent},
  {path: "add-supermarket", component: AddSupermarketComponent},
  {path: "supplier/supplier-list", component: SupplierListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
