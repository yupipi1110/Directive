import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //ここから構造ディレクティブ
  watchNgIf = true;

  watchNgFors = ['Item 1', 'Item 2', 'Item 3'];

  value = 'A';

  //ボタン表示/非表示
  isButtonVisible = true;

  //'!'演算子で真偽値を反転させる。
  toggleButtonVisibility() {
    this.isButtonVisible = !this.isButtonVisible;

    //ここまでが構造ディレクティブ、以降は属性ディレクティブ

    let name = [
      { name: '山田', description: '私は山田です。' },
      { name: '田中', description: '私は田中です。' },
    ];
  }
}
