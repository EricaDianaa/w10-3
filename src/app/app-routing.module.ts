import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Pages/home/home.component";
import { AuthComponent } from "./Pages/auth/auth/auth.component";
import { ProfileComponent } from "./components/profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./Pages/auth/auth/auth.module").then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
