import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server_address = 'api'

  constructor(private http:HttpClient) { }
  saveEmail(email:any){
    console.log(email)
    return this.http.post(`${this.server_address}/email`,email)
  }
  checkOTP(otp:any){
    return this.http.post(`${this.server_address}/otp`,otp)
  }
}
