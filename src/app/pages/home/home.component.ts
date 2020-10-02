import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  works = [
    {
      name: 'No problem',
      url: '/problems'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
