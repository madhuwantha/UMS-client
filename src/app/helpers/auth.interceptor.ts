import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../service/loading.service';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private _loading: LoadingService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    let access = localStorage.getItem("access")
    this._loading.setLoading(true, req.url);
    if (!req.headers.has('Access-Control-Allow-Origin')) {
      req = req.clone({
        headers: req.headers.set('Access-Control-Allow-Origin', '*')
      });
    }
    req = req.clone({
      headers: req.headers.set('Access-Control-Allow-Credentials', 'true')
    });

    req = req.clone({
      headers: req.headers.set('Authorization', 'Bearer '+access)
    });

    return next.handle(req)
      .pipe(catchError((err) => {
        this._loading.setLoading(false, req.url);
        return err;
      }))
      // @ts-ignore
      .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this._loading.setLoading(false, req.url);
        }
        return evt;
      }));
  }
}
