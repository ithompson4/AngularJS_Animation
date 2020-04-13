import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listFade = [];
  list_order: number = 1;

  listEnter = [];
  list_order1: number = 1;

  addItem() {
    var listitem = "Fade In/Out List Item  " + this.list_order;
    this.list_order++;
    this.listFade.push(listitem);
  }
  removeItem() {
    if (this.listFade.length > 0) {
      this.listFade.length -= 1;
    }
    else {
      alert("List empty");
    }
  }

  addList() {
    var listitem1 = "Enter/Leave List Item " + this.list_order1;
    this.list_order1++;
    this.listEnter.push(listitem1);
  }
  removeList() {
    if (this.listEnter.length > 0) {
      this.listEnter.length -= 1;
    }
    else {
      alert("List empty");
    }
  }
}