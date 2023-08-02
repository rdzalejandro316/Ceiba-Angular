import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class InterceptorReqresService implements HttpInterceptor{
  
  token: string = this.storageService.getToken();

  constructor(private readonly storageService: StorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    let request = req;
    if (this.token) {
      request = req.clone({
        setHeaders: {
          authorization: `${ this.token }`
        }
      });
    }

    console.log("request:",request);
    return next.handle(request);
  }


}
