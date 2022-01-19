import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  @Input() name: string = 'Ciclano';

  constructor() { }

  ngOnInit(): void {
  }

  clicked(): void {
    window.alert('The component was clicked');
  }

}
