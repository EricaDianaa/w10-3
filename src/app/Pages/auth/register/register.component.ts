import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { IRegister } from "src/app/interface/register";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  title = "angular";
  form!: FormGroup;
  forms!: FormControl;

  formData: IRegister = {
    nome: "",
    cognome: "",
    genere: "",
    textarea: "",
    file: "",
    email: "",
    password: "",
  };
  constructor(private authSvc: AuthService, private router: Router) {}

  //Validazione(messaggio)
  isValid(fieldName: string) {
    // console.log(this.form.get(fieldName)?.valid);
    return this.form.get(fieldName)?.valid;
  }
  isTouched(fieldName: string) {
    return this.form.get(fieldName)?.touched;
  }

  register() {
    this.authSvc.signUp(this.formData).subscribe((res) => {
      console.log("registrato");
      this.router.navigate(["/profile"]);
    });
  }
}
