import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'training-conditional-component',
  template: `<div> 
                <p *ngIf="showText"> Show text condition is {{ showText }}</p> 
                <button (click)="toggle()">Toggle</button>
            </div>`
})
export class ConditionalComponent implements OnInit {
  showText: boolean;


  constructor() {

  }

  ngOnInit() {
    this.showText = true;
  }

  toggle() {
    this.showText = !this.showText;
  }
}