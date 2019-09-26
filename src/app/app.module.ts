import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap';
import { NgRxformModule } from '@anand-kashyap/ng-rxform';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RxformComponent } from './rxform/rxform.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgRxformModule
  ],
  declarations: [
    AppComponent,
    RxformComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
