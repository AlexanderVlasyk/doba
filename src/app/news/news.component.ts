import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news = [
    { imageUrl: "../assets/images/laptop.png" },
    { imageUrl: "../assets/images/laptop.png" },
    { imageUrl: "../assets/images/laptop.png" },
    { imageUrl: "../assets/images/laptop.png" },
    { imageUrl: "../assets/images/laptop.png" },
    { imageUrl: "../assets/images/laptop.png" },
    { imageUrl: "../assets/images/laptop.png" },
    { imageUrl: "../assets/images/laptop.png" }
  ];
  populNews = [
    { imageUrl: "../assets/images/laptop.png" },
    { imageUrl: "../assets/images/laptop.png" }

  ];
  constructor() { }

  ngOnInit() {
  }

}
