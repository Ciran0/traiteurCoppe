import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  bookingname: string='';
  ordernumber: string='';
  orderday: string='';
  ordertype: string='';
  restrictions: string ='';
  budget: string = '';
  comment: string = '';
  contactoption: string = '';

  sendContact(){}
}
