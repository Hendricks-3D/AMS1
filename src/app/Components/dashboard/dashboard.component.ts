import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  NavigateToComponent(data: any) {
    if (data) {
      if (data.Title === 'Clients') {
        this.router.navigateByUrl('add-client');
      }
      if (data.Title === 'Cases') {
        this.router.navigateByUrl('add-case');
      }
      if (data.Title === 'Important Cases') {
        this.router.navigateByUrl('important-case');
      }
    }
  }
}
