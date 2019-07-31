import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  { path: 'users', component: UserdetailsComponent },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
