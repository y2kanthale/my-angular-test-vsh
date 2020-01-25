import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-test-vsh';
  inputVal: any;
  onSearchText(textVal: any) {
    this.inputVal = textVal;
  }
}
