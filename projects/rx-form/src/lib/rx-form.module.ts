import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap';

import { RxFormComponent } from './rx-form.component';
import { RxFormRoutingModule } from './rx-form-routing.module';

@NgModule({
  declarations: [RxFormComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxFormRoutingModule,
    ButtonsModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [RxFormComponent]
})
export class RxFormModule { }
