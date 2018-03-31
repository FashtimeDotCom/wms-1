import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {TokenStorageService} from "../token-storage.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private reqDup: any;
  constructor(
    private tokenService: TokenStorageService
  ){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.tokenService.getToken()) {
      this.reqDup =  req.clone({ headers: req.headers.set('Authorization', 'Token '+ this.tokenService.getToken()) });
      return next.handle(this.reqDup);
    } else {
      return next.handle(req);
    }

  }

}
