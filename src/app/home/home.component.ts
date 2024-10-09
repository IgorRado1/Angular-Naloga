import { Component } from '@angular/core';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  clicked = false;
  title = 'Angular ${VERSION.full} is rad!'

  handleClick() {
    this.clicked = true;
  }
}
