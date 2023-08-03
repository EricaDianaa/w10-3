import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { it_IT } from "ng-zorro-antd/i18n";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IconsProviderModule } from "./icons-provider.module";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzGridModule } from "ng-zorro-antd/grid";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./Pages/home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from "./components/profile/profile.component";
import { NzButtonModule } from "ng-zorro-antd/button";
// import { AuthComponent } from "./Pages/auth/auth/auth.component";
// import { RegisterComponent } from "./Pages/auth/register/register.component";
// import { LoginComponent } from "./Pages/auth/login/login.component";

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzButtonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: it_IT }],
  bootstrap: [AppComponent],
})
export class AppModule {}
