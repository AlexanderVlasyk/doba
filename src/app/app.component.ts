import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doba';
  selected = 'eng';
  logoUrl = 'assets/images/logo.png';
  logoName = 'Нова Доба';
}
