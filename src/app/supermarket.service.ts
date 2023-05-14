import { Injectable } from '@angular/core';
import { SupermarketModel } from './models/supermarket-model.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError,Observable, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {
  supermarkets:SupermarketModel[] = [
    // new SupermarketModel(1,"Supermarket 1","Location 1"),
    // new SupermarketModel(2,"Supermarket 2","Location 2"),
    // new SupermarketModel(3,"Supermarket 3","Location 3"),
    // new SupermarketModel(4,"Supermarket 4","Location 4"),
    // new SupermarketModel(5,"Supermarket 5","Location 5"),
    // new SupermarketModel(6,"Supermarket 6","Location 6"),
    // new SupermarketModel(7,"Supermarket 7","Location 7"),
    // new SupermarketModel(8,"Supermarket 8","Location 8"),
  ];

  baseUrl:string = "http://localhost:8000/api";

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient : HttpClient) { 
  }

  public getSupermarkets(){
    return this.httpClient.get(this.baseUrl + '/list-supermarkets');
  }

  public getSupermarketById(supermarketId:string):Observable<SupermarketModel> {
    return this.httpClient.get<SupermarketModel>(this.baseUrl + '/view-supermarket/'+supermarketId)
    .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete supermarket
  public deleteSupermarketById(supermarketId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.delete<SupermarketModel>(this.baseUrl + '/delete-supermarket/'+supermarketId, httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update supermarket
  public updateSupermarket(supermarketId: any,supermarket:any): Observable<SupermarketModel> {
    return this.httpClient
      .post<SupermarketModel>(
        this.baseUrl + '/update-supermarket/'+supermarketId,
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
