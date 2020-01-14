import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import {AuthGuard} from './auth.guard';
import {AdminModule} from './admin/admin.module';
import {EmployeeModule} from './employee/employee.module';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login' , component: LoginComponent },
  {path:'nextpage',component:NextpageComponent },
  {path:'admin',loadChildren: () => import ('src/app/admin/admin.module').then(m=>m.AdminModule)},
  {path:'employee',loadChildren:()=>import ('src/app/employee/employee.module').then(m=>m.EmployeeModule)} 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminModule,
    EmployeeModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
