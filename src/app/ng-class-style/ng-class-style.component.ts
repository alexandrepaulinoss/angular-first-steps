import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-style',
  templateUrl: './ng-class-style.component.html',
  styleUrls: ['./ng-class-style.component.scss']
})
export class NgClassStyleComponent implements OnInit {

  isRed: boolean = false;
  color: string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(): void {
    this.isRed = !this.isRed;

    // if statement
    if (this.isRed) {
      this.color = 'white';
    } else {
      this.color = 'red';
    }

    // ternary operator
    this.color = this.isRed ? 'white' : 'red';
  }

}
