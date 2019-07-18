import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {
  projects = [
    {
      title: "ІНТЕРАКТИВНИЙ КУРС ГРОМАДСЬКОЇ ОСВІТИ",
      imgPicture: "../assets/images/IMG_0296.jpg",
      imgLogo: "../assets/images/logo.png",
      nameLogo: "logo",
      textInfo: "Lorem ipsum dolor sitehendrem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      title: "ІНТЕРАКТИВНИЙ КУРС ГРОМАДСЬКОЇ ОСВІТИ",
      imgPicture: "../assets/images/IMG_0865.jpg",
      imgLogo: "../assets/images/logo2.png",
      nameLogo: "logo",
      textInfo: "Lorem ipsum dolor sitehendrem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
