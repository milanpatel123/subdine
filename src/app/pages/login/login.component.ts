import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  errorMsg: string;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.email,
      password: this.password,
    });
  }

  login() {
   
      this.router.navigateByUrl('/home');

  }
}
