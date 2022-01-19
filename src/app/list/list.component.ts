import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  itemsList: Array<any> = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.itemsList.push(this.itemsList.length+1);
  }

  removeItem(): void {
    this.itemsList.splice(this.itemsList.length-1, 1);
  }


}
