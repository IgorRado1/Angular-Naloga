import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VERSION } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'Music Theme'
  LOGO = {
    img: 'assets/LOGO.png'
  }

  mic = {
    img: 'assets/mic.PNG'
  }

  dj = {
    img: 'assets/dj.PNG'
  }

  df = {
    img: 'assets/dancefloor.PNG'
  }

  vinyl = {
    img: 'assets/vinyl.PNG'
  }

  singer = {
    img: 'assets/singer.PNG'
  }

  /*
  clicked = false;
  title = 'Angular '+VERSION.full+' is rad!'


  //lambo
  lambos =[
    {
      name: 'diablo',
      year: 1980,
      img: 'assets/diablo.jpeg'
    },
    {
      name: 'countach',
      year: 1980,
      img: 'assets/countach.jpg'
    }
  ];
  handleClick() {
    this.clicked = true;
  }*/
}
