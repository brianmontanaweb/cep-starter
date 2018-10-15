import { Component } from '@angular/core';
import { SystemPath } from '../CSInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any = 'app';

  constructor() {
    this.title = new SystemPath();
  }
}
