import { Injectable } from '@angular/core';
import { SupermarketModel } from './models/supermarket-model.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError,Observable, catchError, retry } from 'rxjs';
import { AppConfigComponent } from './app-config.component';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {
  supermarkets:SupermarketModel[] = [];

  baseUrl:string = AppConfigComponent.BASE_URL;

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient : HttpClient) { 
  }

  public getSupermarkets(){
    return this.httpClient.get(this.baseUrl + '/supermarkets/list');
  }

  public getSupermarketById(supermarketId:string):Observable<SupermarketModel> {
    return this.httpClient.get<SupermarketModel>(this.baseUrl + '/supermarkets/view/'+supermarketId)
    .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete supermarket
  public deleteSupermarketById(supermarketId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.delete<SupermarketModel>(this.baseUrl + '/supermarkets/delete/'+supermarketId, httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update supermarket
  public updateSupermarket(supermarketId: any,supermarket:any): Observable<SupermarketModel> {
    return this.httpClient
      .post<SupermarketModel>(
        this.baseUrl + '/supermarkets/update/'+supermarketId,
        JSON.stringify(supermarket),
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
