import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilClientComponent } from './components/accueil-client/accueil-client.component';
import { AccueilOrganismeComponent } from './components/accueil-organisme/accueil-organisme.component';
import { CreerReservationComponent } from './components/creer-reservation/creer-reservation.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { ReservationActuComponent } from './components/reservation-actu/reservation-actu.component';
import { ReservationClientComponent } from './components/reservation-client/reservation-client.component';
import { ReservationsOrganismeComponent } from './components/reservations-organisme/reservations-organisme.component';
import { SigninClientComponent } from './components/signin-client/signin-client.component';
import { SigninOrganismeComponent } from './components/signin-organisme/signin-organisme.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signinClient', component:SigninClientComponent},
  {path: 'signinOrganisme', component:SigninOrganismeComponent},
  {path: 'accueil-client', component:AccueilClientComponent},
  {path: 'accueil-organisme', component:AccueilOrganismeComponent},
  {path: 'creer-reservation', component:CreerReservationComponent},
  {path: 'reservations-organisme', component:ReservationsOrganismeComponent},
  {path: 'reserver', component:ReservationClientComponent},
  {path: 'mes-reservations', component:ReservationActuComponent},
  //Il manque 2 route : le home et l'erreur404. Quelle sont-elles et où vont-elles?
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
