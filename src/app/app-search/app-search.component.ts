import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {
  title = '';
  @Output() searchText = new EventEmitter<any>();
  getSearchString(text) {
    this.searchText.emit(text);
  }
  constructor() { }

  ngOnInit() {
  }

}
