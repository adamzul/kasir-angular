import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public user = new User();
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
  }
  login(user:User){
  	this.loginService.login(user).subscribe(res => {
      alert("logged");
      res;
    localStorage.setItem('jwtToken', res.token);
    this.router.navigate(['/tambah-jumlah-barang']);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
