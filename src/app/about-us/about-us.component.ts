import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  pictures = [
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" },
    { img: "../assets/images/laptop.png" }
  ];
  comands = [
    { img: "../assets/images/Layer_750.png" },
    { img: "../assets/images/Layer_751.png" },
    { img: "../assets/images/Layer_783.png" },
    { img: "../assets/images/Layer_784.png" },
    { img: "../assets/images/Layer_750.png" },
    { img: "../assets/images/Layer_751.png" },
    { img: "../assets/images/Layer_783.png" },
    { img: "../assets/images/Layer_784.png" }
  ];

  pdfs = [
    { title: "Pdf-документ 1" },
    { title: "Pdf-документ 2" },
    { title: "Pdf-документ 3" },
    { title: "Pdf-документ 4" },
    { title: "Pdf-документ 5" },
    { title: "Pdf-документ 6" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
