/** @format */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://ridge-app.herokuapp.com/';

  constructor(
    private readonly http: HttpClient,
    private readonly storageService: StorageService
  ) {}

  private httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('X-Frame-Options', 'SAMEORIGIN')
    .set('Access-Control-Allow-Origin', '*')
    .set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization,'
    )
    .set(
      'Authorization',
      'Bearer ' + this.storageService.getStorage().slice(1, -1)
    );

  private readonly options = {
    headers: this.httpHeaders
  };

  login(data: any) {
    return this.http.post(`${this.baseUrl}auth/signin`, data);
  }
  getRooms() {
    return this.http.get(`${this.baseUrl}rooms-management`, this.options);
  }
}
