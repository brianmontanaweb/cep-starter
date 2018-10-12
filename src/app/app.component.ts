import { Component } from '@angular/core';
import { CSInterface } from '../CSInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';

  constructor() {
    console.log(CSInterface);
  }
}
