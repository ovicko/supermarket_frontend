import { Injectable } from '@angular/core';
import { AppConfigComponent } from '../app-config.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { SupplierModel } from '../models/supplier-model.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  
    constructor(private httpClient : HttpClient) { }
  
    public getSuppliers(){
      return this.httpClient.get(AppConfigComponent.BASE_URL + '/suppliers/list');
    }
  
    public getSupplierById(supplierId:string):Observable<SupplierModel> {
      return this.httpClient.get<SupplierModel>(AppConfigComponent.BASE_URL + '/suppliers/view/'+supplierId)
      .pipe(retry(1), catchError(this.handleError));
    }
  
    public deleteSupplierById(supplierId: string) {
      return this.httpClient.delete<SupplierModel>(AppConfigComponent.BASE_URL  + '/suppliers/delete/'+supplierId, this.httpOptions)
        .pipe(retry(1), catchError(this.handleError));
    }
  
    public updateManager(supplierId: any,manager:any): Observable<SupplierModel> {
      return this.httpClient
        .post<SupplierModel>(
          AppConfigComponent.BASE_URL + '/suppliers/update/'+supplierId,
          JSON.stringify(manager),
          this.httpOptions
        )
        .pipe(retry(1), catchError(this.handleError));
    }
  
    // Error handling
    public handleError(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(() => {
        return errorMessage;
      });
    }
}
