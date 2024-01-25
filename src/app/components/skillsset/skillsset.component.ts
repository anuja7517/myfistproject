import { Component, OnInit } from '@angular/core';
import { Itodoes } from '../interface/interface';
import { todoes } from '../Tdoes/todo';



@Component({
  selector: 'app-skillsset',
  templateUrl: './skillsset.component.html',
  styleUrls: ['./skillsset.component.scss']
})
export class SkillssetComponent implements OnInit {
  skills:Array<Itodoes>=todoes

  constructor() { }

  ngOnInit(): void {
  }

}
