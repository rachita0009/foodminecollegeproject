import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.css']
})
export class TittleComponent implements OnInit {

  constructor() { }
  @Input()
  tittle!:string;

  @Input()
  margin?='1rem 0 1rem 0.2rem';

  @Input()
  fontSize?='1.7rem'

  ngOnInit(): void {
  }

}
