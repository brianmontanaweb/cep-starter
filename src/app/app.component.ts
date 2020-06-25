import {Component} from '@angular/core';
import * as CSI from '../CSInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: any = 'app';
  csi: any;

  constructor() {
    this.csi = new CSI.CSInterface();
    this.title = this.csi.hostEnvironment.appName;
  }

  importFiles(): void {
    this.csi.evalScript('$._PPP_.importFiles()', _ => alert('should open dialog to import files'));
  }
}
