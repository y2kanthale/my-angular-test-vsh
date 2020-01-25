import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/shared/post.service';

@Component({
  selector: 'app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.scss'],
})
export class AppDataComponent implements OnInit {
  @Input() searchQuery: any;
  public posts = [];
  constructor(private _postService: PostService) {
}

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(data => this.posts = data);

  }

}
