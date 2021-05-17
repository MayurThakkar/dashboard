import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  showCategories = false;

  constructor() {}

  ngOnInit(): void {}

  categories1 = [
    {
      icon: 'feather-mail',
      name: 'Email',
      featuretext: '',
    },
    {
      icon: 'feather-message-square',
      name: 'Chat',
      featuretext: '',
    },
    {
      icon: 'feather-check-square',
      name: 'Todo',
      featuretext: '',
    },
    {
      icon: 'feather-calendar',
      name: 'Calender',
      featuretext: '',
    },
    {
      icon: 'feather-shopping-cart',
      name: 'eCommerce',
      featuretext: '',
    },
  ];

  categories2 = [
    {
      icon: 'feather-type',
      name: 'Typography',
      featuretext: '',
    },
    {
      icon: 'feather-eye',
      name: 'Feather',
      featuretext: '',
    },
    {
      icon: 'feather-credit-card',
      name: 'Cards',
      featuretext: 'new',
    },
  ];
}
