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

  loggerUser!: IUser;
  constructor(private authSvc: AuthService) {
    // this.authSvc.utenti().subscribe((res) => {
    //   console.log(res);
    // });
    // dati() {
    //   });
  }

  ngOnInit() {
    this.authSvc.user$.subscribe((accesData) => {
      console.log(accesData);
      return (this.loggerUser = accesData?.user as IUser);
    });
  }
}
