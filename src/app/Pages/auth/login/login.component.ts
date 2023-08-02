import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ILogin } from "src/app/interface/login";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  @ViewChild("f", { static: true }) form!: NgForm;

  submit(form: NgForm) {
    console.log(form);
  }

  formData: ILogin = {
    email: "",
    password: "",
  };

  constructor(private authSvc: AuthService, private router: Router) {}

  login() {
    return this.authSvc.login(this.formData).subscribe((data) => {
      console.log(data);
      // this.router.navigate(['/dashboard'])
    });
  }
}
