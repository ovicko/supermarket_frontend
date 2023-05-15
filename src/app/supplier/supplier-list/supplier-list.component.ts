import { Component, OnInit } from '@angular/core';
import { SupplierModel } from 'src/app/models/supplier-model.model';
import { SupplierServiceService } from 'src/app/services/supplier-service.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  suppliers : SupplierModel[] = [];

  constructor(public supplierService: SupplierServiceService) { 
  }

  ngOnInit() {
    this.supplierService.getSuppliers().subscribe((response : any[])=>{
       this.suppliers = response['suppliers'];
    });
  }
}
