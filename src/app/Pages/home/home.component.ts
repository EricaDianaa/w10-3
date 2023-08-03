import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "src/app/interface/user";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  // template: ` <nz-alert nzType="success" nzMessage="Success Text"></nz-alert> `,
})
export class HomeComponent {
  utenti!: IUser[];
  constructor(private authSvc: AuthService, private router: Router) {
    this.authSvc.datiUser().subscribe((res) => {
      console.log("registr");
      this.utenti = res;
      // this.router.navigate(["/profile"]);
    });
  }
  NgOnInit() {}
}

// export class NzDemoAlertBasicComponent {}
