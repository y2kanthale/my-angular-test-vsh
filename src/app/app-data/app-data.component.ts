import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/shared/post.service';

@Component({
  moduleId: module.id,
  selector: 'app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.scss'],
})
export class AppDataComponent implements OnInit {
  title = '';
  public posts = [];
constructor(private _postService: PostService) {
}

  ngOnInit() {
    this._postService.getEmployees()
      .subscribe(data => this.posts = data);

  }

}
