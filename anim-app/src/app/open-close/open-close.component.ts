import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openHide', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'gainsboro',
        fontWeight: 'bold',
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.3,
        backgroundColor: 'white',
        marginLeft: '-20px'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class OpenCloseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isOpen = true;

  toggleItem() {
    this.isOpen = !this.isOpen;

  }

}
