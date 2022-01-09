import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    username: '', 
    password: ''
  }

  constructor(private authService: AuthService, 
             private router: Router ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    window.localStorage.setItem('token', 'meu-token')
    this.router.navigate([''])
  }

}
