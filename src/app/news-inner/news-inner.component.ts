import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-inner',
  templateUrl: './news-inner.component.html',
  styleUrls: ['./news-inner.component.scss']
})
export class NewsInnerComponent implements OnInit {

  populNews = [
    { imageUrl: "../assets/images/laptop.png" },
    { imageUrl: "../assets/images/laptop.png" },
    { imageUrl: "../assets/images/laptop.png" }

  ];
  title = 'ngSlick';

  slidesNews = [
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },

  ];
  carousels = [
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" }
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'><i></i></div>",
    "prevArrow": "<div class='nav-btn prev-slide'><i></i></div>",
    "dots": false,
    "infinite": false
  };

  slickInit(e) {
    console.log('slick initialized');
  }
 
  constructor() { }

  ngOnInit() {
  }

}
