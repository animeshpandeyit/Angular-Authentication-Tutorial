import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authService = this.injector.get(AuthService);
    let tokenizedReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        'bearer ' + authService.getToken()
      ),
    });
    return next.handle(tokenizedReq);
  }
}

//  cyclic dependencies error handling
