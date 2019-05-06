import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get<UserData[]>('https://my-json-server.typicode.com/umangchadha/fakeServer/userData/')
  }
}

export interface UserData {
  account: string;
  availableCash: AvailableCash;
}

export interface AvailableCash {
  currValue: string;
  rate: string;
  prevValue: string;
}