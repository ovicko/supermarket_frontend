import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { SupermarketService } from '../supermarket.service';
import { SupermarketModel } from '../models/supermarket-model.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AppConfigComponent } from '../app-config.component';

@Component({
  selector: 'app-add-supermarket',
  templateUrl: './add-supermarket.component.html',
  styleUrls: ['./add-supermarket.component.css']
})
export class AddSupermarketComponent implements OnInit{

  supermarketForm:FormGroup;

  name: FormControl;
  location: FormControl;

  constructor(public dataService: SupermarketService,private serverClient:HttpClient,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.supermarketForm = new FormGroup({
      name: this.name,
      location: this.location
    });
  }

  createFormControls() {
    this.name = new FormControl("", Validators.required);
    this.location = new FormControl("", Validators.required);
  }

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    if (this.supermarketForm.valid) {
      console.log("Form Submitted!");
      console.log(this.supermarketForm.value);
      
      // this.supermarketForm.reset();

      this.serverClient.post<SupermarketModel>(
        AppConfigComponent.BASE_URL+"/supermarkets/add",
        JSON.stringify(this.supermarketForm.value), httpOptions)
        .subscribe({
          next: (response) => this.router.navigate(['/']),
          error: (error) => console.log(error),
      });
    }
  }

  private handleError(error: any):Promise<any> {
    return Promise.reject(error.message || error );
  }
}
