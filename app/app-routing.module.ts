import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MedicalservicesComponent } from './medicalservices/medicalservices.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component';




const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'About',
    component:AboutComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  
  {
    path:'Register',
    component:RegisterComponent
  },
  {
    path:'Summary',
    component:SummaryComponent
  },
  {
    path:'Medicalservices',
    component:MedicalservicesComponent
  },
  {
    path:'Bookappointment',
    component:BookappointmentComponent
  },
  {
    path:'Contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
