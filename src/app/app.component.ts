import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  watchNgIf = true;

  watchNgFors = ['Item 1', 'Item 2', 'Item 3'];

  value = 'A';
}
