import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDwbQbRWXhBYgS8_lKQKjU3bowzwGTvC1E",
      authDomain: "ng-recipe-book-24451.firebaseio.com/"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
