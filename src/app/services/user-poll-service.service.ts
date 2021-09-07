import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeMusic } from '../models/typeMusic';
import { FormGroup } from '@angular/forms';
import { UserPoll } from '../models/userPoll';

@Injectable({
  providedIn: 'root'
})
export class UserPollServiceService {
  private httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
   }
  getTypeMusic(){
    return this.http.get<TypeMusic[]>(`${this.baseUrl}/getMusicType`);
  }

  getAllUserPoll(){
    return this.http.get<UserPoll[]>(`${this.baseUrl}/getAllUserPoll`);
  }
  

  addUserPoll(data: UserPoll){
    return this.http.post<any>(`${this.baseUrl}/createUserPoll`, data, this.httpOptions);
  }
}
