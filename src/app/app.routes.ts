import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeEnComponent } from './pages/home-en/home-en.component';
import { HomeEsComponent } from './pages/home-es/home-es.component';

export const routes: Routes = [

  { path: '', component: HomeComponent }, // home em portugues
  { path: 'en', component: HomeEnComponent }, // home em ingles
  { path: 'es', component: HomeEsComponent }, // home em espanhol
];
