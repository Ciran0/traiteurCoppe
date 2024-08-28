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


  onSubmit() {
    console.log(`Nom: ${this.nom}`);
    console.log(`Email: ${this.email}`);
    //Ici on peut envoyer les données à un service ou à une API
  }
  modUsername(){}
  modEmail(){}
  modPswd(){}
}
