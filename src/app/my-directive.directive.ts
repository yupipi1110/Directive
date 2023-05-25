import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[myDirective]',
})
export class MyDirectiveDirective {
  //ElementRefを注入することでカスタムディレクティブが適応された要素を使用可能になる。
  //DOM要素への参照が取得できるということ。
  constructor(private elementRef: ElementRef) {}

  //マウスを乗せた際に実行されるメソッド
  //@HostListenerデコレータを使用することで指定したイベントが発生した際にメソッドが実行される。
  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  //マウスを離した際に実行されるメソッド
  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }
}
