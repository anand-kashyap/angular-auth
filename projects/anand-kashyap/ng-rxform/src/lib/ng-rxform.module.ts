import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap';

import { NgRxformComponent } from './ng-rxform.component';
import { NgRxformRoutingModule } from './ng-rxform-routing.module';

@NgModule({
  declarations: [NgRxformComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgRxformRoutingModule,
    ButtonsModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [NgRxformComponent]
})
export class NgRxformModule { }
