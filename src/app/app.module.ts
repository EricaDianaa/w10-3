import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./Pages/home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from './components/profile/profile.component';
// import { AuthComponent } from "./Pages/auth/auth/auth.component";
// import { RegisterComponent } from "./Pages/auth/register/register.component";
// import { LoginComponent } from "./Pages/auth/login/login.component";

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
