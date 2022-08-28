import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  User = {
    email: '',
  };

  constructor(private _router:Router,private _auth:AuthService) { }

  ngOnInit(): void {
  }

  Verify(){
    this._auth.saveEmail({"email":this.User.email}).subscribe((data)=>{
      console.log(data)
    })
    localStorage.setItem("email",this.User.email)
    this._router.navigate(['otp'])

  }

}
