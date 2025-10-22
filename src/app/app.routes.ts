import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FormationComponent } from './pages/formation/formation.component';
import { EvenementComponent } from './pages/evenement/evenement.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

{ path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'evenement', component: EvenementComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }  // redirection vers l'accueil si page non trouvée
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }