import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  task: any;

  constructor() {
    this.task = {
      title: 'Review applications',
      assignee: {
        name: 'John smith',
      },
    };

    this.task.assignee = undefined;
  }
}
