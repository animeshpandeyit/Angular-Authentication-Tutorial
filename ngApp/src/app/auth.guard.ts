import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  let loggedInUser = !!localStorage.getItem('token');

  if (!loggedInUser) {
    alert('Please login, redirect to the home page/login.html');
    _router.navigate(['/login']);
    return false;
  } else {
    return true;
  }
};
