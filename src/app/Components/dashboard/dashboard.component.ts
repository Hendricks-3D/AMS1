import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cardObjects = [
    {
      Title: 'Cases',
      Amount: 0,
      Imgsrc: '../../../assets/case-icon.png',
      content: 'Total Cases',
    },
    {
      Title: 'Clients',
      Amount: 1,
      Imgsrc: '../../../assets/client-icon.png',
      content: 'Total Clients',
    },
    {
      Title: 'Important Cases',
      Amount: 0,
      Imgsrc: '../../../assets/star-icon.png',
      content: 'Total Important Cases',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
