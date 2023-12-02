import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    { path: 'landing-page', component: LandingPageComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    // { path: '**', component: ErrorNoEncontradoComponent }, //Sitio Web No Encontrado 404
];
