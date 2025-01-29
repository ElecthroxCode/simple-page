import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';

export const routes: Routes = [
    { path: '', component:HomeComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'skills', component: SkillsPageComponent },
    { path: '**', redirectTo: ''}
];
