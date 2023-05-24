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

  //ボタン表示/非表示
  isButtonVisible = true;

  //'!'演算子で真偽値を反転させる。
  toggleButtonVisibility() {
    this.isButtonVisible = !this.isButtonVisible;

  //ここまでが構造ディレクティブ、以降は属性ディレクティブ

  }
}
