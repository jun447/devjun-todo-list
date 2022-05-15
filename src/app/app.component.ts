import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Dev's Todolist";
  constructor() {
    // setTimeout(() => {
    //   this.title = "Dev's Todolist";
    // }, 2000);
  }

}
