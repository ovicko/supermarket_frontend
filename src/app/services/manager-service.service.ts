import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { AppConfigComponent } from '../app-config.component';
import { ManagerModel } from '../models/manager-model.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient : HttpClient) { }

  public getManagers(){
    return this.httpClient.get(AppConfigComponent.BASE_URL + '/managers/list');
  }

  public getManagerById(managerId:string):Observable<ManagerModel> {
    return this.httpClient.get<ManagerModel>(AppConfigComponent.BASE_URL + '/managers/view/'+managerId)
    .pipe(retry(1), catchError(this.handleError));
  }

  public deleteManagerById(managerId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.delete<ManagerModel>(AppConfigComponent.BASE_URL  + '/managers/delete/'+managerId, httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  public updateManager(managerId: any,manager:any): Observable<ManagerModel> {
    return this.httpClient
      .post<ManagerModel>(
        AppConfigComponent.BASE_URL + '/managers/update/'+managerId,
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
