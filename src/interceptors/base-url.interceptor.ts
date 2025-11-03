import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) =>{
    if(req.url.startsWith('/')){
      const apiRequest = req.clone({
        url: `${environment.apiUrl}${req.url}`,
      });
      return next(apiRequest)
    }
    return next(req)
}
