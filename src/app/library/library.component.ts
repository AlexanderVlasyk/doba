import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  libreris = [
    {
      before: "../assets/images/clip.png",
      img: "../assets/images/liber.png",
      name: "(НЕ) дитячий погляд на війну"
    },
    {
      before: "../assets/images/clip.png",
      img: "../assets/images/liber2.png",
      name: "Ми серед інших. Інші серед нас. Форми і методи полікультурного виховання."
    },
    {
      before: "../assets/images/clip.png",
      img: "../assets/images/liber3.png",
      name: "Діти та війна: навчання технік зцілення(зошит)"
    },
    {
      before: "../assets/images/clip.png",
      img: "../assets/images/liber3.png",
      name: "Діти та війна: навчання технік зцілення(зошит)"
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
