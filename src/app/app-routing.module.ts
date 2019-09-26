import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxformComponent } from './rxform/rxform.component';
import { ThemeTestComponent } from './theme-test/theme-test.component';

const routes: Routes = [
  {path: 'test', component: ThemeTestComponent},
  {path: '', component: RxformComponent},
  {path: 'login', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
