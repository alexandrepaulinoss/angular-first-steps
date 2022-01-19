import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

isVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeVisibility(): void {
    this.isVisible = !this.isVisible;
  }

}
