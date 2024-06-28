import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XssComponent {
  constructor(
    private readonly _elRef: ElementRef,
    private readonly _renderer2: Renderer2
  ) {}

  createElement(inputText: string) {
    const divEl = document.createElement('div');

    divEl.innerHTML = inputText;

    this._elRef.nativeElement.appendChild(divEl);
  }

  createElementCorrect(inputText: string) {
    const divEl = this._renderer2.createElement('div');

    const text = this._renderer2.createText(inputText);

    this._renderer2.appendChild(divEl, text);
    this._renderer2.setStyle(divEl, 'color', 'white');
    this._renderer2.addClass(divEl, 'bg-red');

    this._renderer2.appendChild(this._elRef.nativeElement, divEl);

    const novaDiv = document.createElement('div');
    novaDiv.textContent = 'Sou a nova div!';
    this._renderer2.addClass(novaDiv, 'bg-blue');
    this._renderer2.appendChild(this._elRef.nativeElement, novaDiv);
  }
}
