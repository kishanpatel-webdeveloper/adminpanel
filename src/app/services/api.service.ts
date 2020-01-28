import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { VariableService } from './variable.service';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { ActionResponse } from '../model/ActionResponse';
import { MethodUtilityService } from './Method-utility.service';
import { Deserialize } from 'cerialize';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private http: HttpClient,
    private methodUtils: MethodUtilityService,
    private variableService: VariableService
  ) { }


  getMethodAPI(apiName: string, params: object, callback) {

    let httpParams = new HttpParams();
    if (!this.methodUtils.isNullUndefinedOrBlank(params)) {
      Object.keys(params).forEach(key => {
        if (key && params[key] && params.hasOwnProperty(key) && !this.methodUtils.isEmptyObjectOrNullUndefiend(params[key])) {
          httpParams = httpParams.append(key, params[key]);
        }
      });
    }

    let headers = new HttpHeaders();
    if (this.variableService.arrayOfApiNameToExcludeToken.indexOf(apiName) < 0) {
      headers = headers.set('Authorization', 'Bearer ' + this.methodUtils.getToken());
    }

    apiName = VariableService.API_URL + apiName;

    return this.http.get(apiName, { params: httpParams, headers: headers }).subscribe(

      (response) => {
        const serverResponse: ActionResponse = Deserialize(response, ActionResponse);
        if (serverResponse.status < 200 || serverResponse.status >= 300) {
          console.log('display error popup : ' + serverResponse.message);
        } else {
          callback(serverResponse.data);
        }
      },

      (err: HttpErrorResponse) => {
        if (err.status === 0) {
          console.log('display error popup : ' + 'Server down...');
        } else {
          const errorDto: ActionResponse = Deserialize(err.error, ActionResponse);
          console.log('display error popup : ' + errorDto.message ? errorDto.message : errorDto.error);
          callback(errorDto.data);
        }
      }
    );


  }

  public postMethod(url, data) {
    this.http.post(VariableService.API_URL + url, data).subscribe(
      (response) => {
        return response;
      },
      (error) => {
        return error;
      });
  }

  public loginMethod(url, data, callback) {
    this.http.post(VariableService.API_URL + url, data).subscribe(
      (response) => {
        callback(response);
      },
      (error) => {
        callback(error);
      }
    );
  }
}
