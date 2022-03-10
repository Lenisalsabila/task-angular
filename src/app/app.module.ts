import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarangchildComponent } from './barangchild/barangchild.component';
import { BarangindukComponent } from './baranginduk/baranginduk.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BarangchildComponent,
    BarangindukComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
