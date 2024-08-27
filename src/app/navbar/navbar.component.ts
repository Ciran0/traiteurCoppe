import { Component } from '@angular/core';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
         left: '0vw'
        }),
      ),
      state(
        'closed',
        style({
          left: '-111vw'
        })
      ),
      transition('open => closed', [animate('0.5s ease-in-out')]),
      transition('closed => open', [animate('0.5s ease-in-out')])
    ]),
  ]
})
export class NavbarComponent{

    isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
