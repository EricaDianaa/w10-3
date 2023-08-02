import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ILogin } from "src/app/interface/login";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  formData: ILogin = {
    email: "",
    password: "",
  };

  constructor(private authSvc: AuthService, private router: Router) {}

  logins() {
    this.authSvc.login(this.formData).subscribe((data) => {
      console.log("login avenuto");
      console.log(data);
      this.router.navigate(["login"]);
    });
  }
}
