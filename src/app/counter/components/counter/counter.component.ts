import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3>Counter: {{counter}}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>



  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 19;


  increaseBy(a: number){
    this.counter += a
  }

  resetCounter(){
    this.counter = 10
  }


}
