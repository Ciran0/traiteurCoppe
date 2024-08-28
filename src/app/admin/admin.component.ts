import { Component } from '@angular/core';
import { MenuManagerComponent } from './menu-manager/menu-manager.component';
import { NewsManagerComponent } from './news-manager/news-manager.component';
import { UserManagerComponent } from './user-manager/user-manager.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MenuManagerComponent,NewsManagerComponent,UserManagerComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
