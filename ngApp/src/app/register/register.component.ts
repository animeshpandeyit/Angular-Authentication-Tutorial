import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  // registerUserData: any = {};

  registeredUserData = { email: '', password: '' };

  constructor(private _auth: AuthService) {
    // this._auth = _auth;
  }

  ngOnInit(): void {}
  // registerUser() {
  //   console.log(this.registerUserData);
  // }

  registerUser() {
    this._auth.registerUser(this.registeredUserData).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // registerUser() {
  //   const subscription = this.auth
  //     .registerUser(this.registerUserData)
  //     .subscribe({
  //       next: (res: Object) => {
  //         console.log(res);
  //       },
  //       error: (err: any) => {
  //         console.log(err.message);
  //       },
  //     });

  //   // Optionally return the subscription if you need to unsubscribe later
  //   return subscription;
  // }

  // registerUser() {
  //   this._auth.registerUser(this.registeredUserData).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },
  //     error: (err) => console.log(err),
  //   });
  //   // console.log(this.registeredUserData);
  // }
}
