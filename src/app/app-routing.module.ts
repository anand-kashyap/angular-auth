import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxformComponent } from './rxform/rxform.component';

const routes: Routes = [
  {path: '', component: RxformComponent},
  {path: 'login', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
