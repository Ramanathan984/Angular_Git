import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
// import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class EnrollmentServiceService {

  public _url ='';
  constructor(private _httpClient :HttpClient) { }


   /**
    * on enrollment
    * 
    * @param user 
    */
   enrollUser(user : User){
    return this._httpClient.post<any>(this._url,user);
   }
}
