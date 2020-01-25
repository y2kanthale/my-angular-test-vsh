import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {
  name = 'Angular 6';
  email="";
  aa:boolean=false;
  setIndex(ii) {
    this.aa = ii;
  }
  constructor() { }

  ngOnInit() {
  }

}
