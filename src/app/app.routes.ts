import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menus', component: MenusComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'profile', component: ProfileComponent}
];
