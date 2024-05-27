import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {ProductsComponent} from "./products/products.component";
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTableModule} from '@angular/material/table';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatRipple} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIcon,
    MatToolbar,
    MatIconButton,
    MatDivider,
    MatRipple
  ],
  exports:[
    AsyncPipe,
    RouterLink,
    MatTableModule
  ],
  bootstrap:[
    AppComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
})
export class AppModule { }
