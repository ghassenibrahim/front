import { AuthGuard } from './shared/_services/auth.guard';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddblogComponent } from './addblog/addblog.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {  path: '',
  redirectTo: '/pos',
  pathMatch: 'full',
  canActivate: [ AuthGuard ]},


  {
    path: 'pos',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./blog/blog.module').then(m =>m.PosModule)
  },
  {
    path: 'add',
    canActivate: [ AuthGuard ],
    component:AddblogComponent  },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }
