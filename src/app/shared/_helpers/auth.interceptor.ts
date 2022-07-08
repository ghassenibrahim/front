import { environment } from './../../../environments/environment';
import { TokenStorageService } from './../_services/token-storage.service';


import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

import {catchError, map} from 'rxjs/operators';


@Injectable()
export class RequestHttpInterceptor  implements HttpInterceptor{

  constructor(public router: Router,
              public authenticationService: TokenStorageService,
              private activatedRoute: ActivatedRoute) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const URL_PATH = environment.serverURL;

    if (!request.url.includes('/assets')) {
        if(request.url.includes('token')) {
            request = request.clone({
                url: request.url
              });
        } else {
                   request = request.clone({
          url:  request.url,
          setHeaders: {
            Authorization: `Bearer ${this.authenticationService.getToken()}`
          }
        });
        }


    }
    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log(event)
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error)
          if ( error) {

            this.router.navigate(['login'], { queryParams: { returnUrl: this.activatedRoute.snapshot['_routerState'].url }}).then();
          }
          return throwError(error);
        }));
  }
}
