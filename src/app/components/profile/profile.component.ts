import { IUser } from "../../interface/user";
import { Component } from "@angular/core";
import { IAccessData } from "src/app/interface/access-data";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  // formData: IAccessData = {
  //   accessToken: "",
  //   user: IUser|
  // };
  constructor(private authSvc: AuthService) {}
  // dati() {
  //   this.authSvc.datiUser(this.formData);
  //   const i:IUser=this.formData.user
  // }
}
