import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { IRegister } from "../interface/register";
import { IAccessData } from "../interface/access-data";
import { ILogin } from "../interface/login";
import { tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  //URL CHIAMATE HTTP
  url: string = "http://localhost:3000";
  registerUrl: string = this.url + "/register";
  loginUrl: string = this.url + "/login";
  authSubject: any;

  autoLogoutTimer: any;
  constructor(private http: HttpClient, private router: Router) {}

  signUp(data: IRegister) {
    return this.http.post<IAccessData>(this.registerUrl, data);
  }

  login(data: ILogin) {
    return this.http.post<IAccessData>(this.loginUrl, data).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem("accessData", JSON.stringify(data));

        const expDate = this.jwtHelper.getTokenExpirationDate(
          data.accessToken
        ) as Date;
        this.autoLogout(expDate);
      })
    );
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem("accessData");
    this.router.navigate(["/login"]);
  }

  autoLogout(expDate: Date) {
    const expMs = expDate.getTime() - new Date().getTime();
    this.autoLogoutTimer = setTimeout(() => {
      this.logout();
    }, expMs);
  }
}
