import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'ngSlick';

  slides = [
    { img: "../assets/images/Layer_5.png" },
    { img: "../assets/images/Layer_5.png" },
    { img: "../assets/images/Layer_5.png" },
    { img: "../assets/images/Layer_5.png" },
    { img: "../assets/images/Layer_5.png" },
    { img: "../assets/images/Layer_5.png" },
    { img: "../assets/images/Layer_5.png" },
    { img: "../assets/images/Layer_5.png" },
    { img: "../assets/images/Layer_5.png" },
    { img: "../assets/images/Layer_5.png" },
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
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };
  slideConfig2 = {
    "slidesToShow": 2,
    "slidesToScroll": 1, 
    "nextArrow": "<div class='nav-btn next-slide'><svg xmlns='http://www.w3.org/2000/svg'><use xlink:href='assets/images/double-angle-pointing-to-right.svg#arrow'></use></svg></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": false,
    "infinite": true
  };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }
  slickInit2(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
  constructor() { }

  ngOnInit() {
  }

}
