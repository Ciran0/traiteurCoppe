import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  nom: string = '';
  email: string = '';
  oldpswd: string = '';
  newpswd: string = '';
  newpswdconf: string = '';

  modUsername(){}
  modEmail(){}
  modPswd(){}
}
