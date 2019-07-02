import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  pictures = [
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
