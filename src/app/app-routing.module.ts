import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BarangindukComponent} from "./baranginduk/baranginduk.component";

const routes: Routes = [
  {
    path:'baranginduk',component:BarangindukComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
