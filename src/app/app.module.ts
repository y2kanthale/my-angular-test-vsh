import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppSearchComponent } from './app-search/app-search.component';
import { AppDataComponent } from './app-data/app-data.component';
import { SearchPipe } from 'src/shared/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../shared/post.service';

@NgModule({
  declarations: [
    AppComponent,
    AppSearchComponent,
    AppDataComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
