import { Component } from '@angular/core';
import * as CSI from '../CSInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any = 'app';
  csi: any;

  constructor() {
    this.csi = new CSI.CSInterface();
    this.title = this.csi.hostEnvironment.appName;
  }

  openDoc() {
    this.csi.evalScript('openDocument()');
  }
}
