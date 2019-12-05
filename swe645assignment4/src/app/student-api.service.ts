import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {
  apiURL: string = 'https://12ly4umjs5.execute-api.us-east-1.amazonaws.com/prod/';
  constructor(private httpClient: HttpClient) { }
}
