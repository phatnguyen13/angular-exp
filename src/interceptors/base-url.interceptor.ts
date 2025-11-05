import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) =>{
  if(req.url.startsWith('/rapid')){
      const apiRequest = req.clone({
        url: `${environment.rapidApi}${req.url.slice(7)}`,
        setHeaders: {
          'x-rapidapi-key': '4569681f82mshc3cbbf99e2a68b1p1ff677jsnaeb74847ac4e',
          'x-rapidapi-host': 'meteostat.p.rapidapi.com',
        },
      });
      return next(apiRequest)
  } else if(req.url.startsWith('/weather')){
    const apiRequest = req.clone({
      url: `${environment.weatherApi}${req.url.slice(9)}`,
      setHeaders: {
        'x-rapidapi-key': '4569681f82mshc3cbbf99e2a68b1p1ff677jsnaeb74847ac4e',
        'x-rapidapi-host': 'meteostat.p.rapidapi.com'
      },
    });
    return next(apiRequest)
  }
  else if(req.url.startsWith('/')){
   const apiRequest = req.clone({
     url: `${environment.apiUrl}${req.url}`,
   });
   return next(apiRequest)
 }
  return next(req)
}
