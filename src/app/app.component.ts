import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // title = 'Hello-World';

  post={
    title:"Title",
    isFavorite:true
  }
  onFavoriteChanged(eventArgs:FavoriteChangedEventArgs){
    console.log("Favorite changed !!", eventArgs);
  }
}
