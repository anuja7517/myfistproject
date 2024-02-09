import { Component, OnInit } from '@angular/core';
import { Iskill } from '../components/interface/interface';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  selectedSkillSet : string = 'node';
  numsValue = 5;
  skillsArr :Array<Iskill> =[
    {
      skillName :'javascript',
      content : `<strong>JavaScript</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, reprehenderit 
      accusamus! Impedit recusandae quo sit harum rem, assumenda facilis labore modi, officia 
      cupiditate deserunt aperiam provident perspiciatis, itaque laboriosam minus? `
    },
    {
      skillName :'angular',
      content : `<strong>angular</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, reprehenderit 
      accusamus! Impedit recusandae quo sit harum rem, assumenda facilis labore modi, officia 
      cupiditate deserunt aperiam provident perspiciatis, itaque laboriosam minus? `
    },
    {
      skillName :'node',
      content : `<strong>node</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, reprehenderit 
      accusamus! Impedit recusandae quo sit harum rem, assumenda facilis labore modi, officia 
      cupiditate deserunt aperiam provident perspiciatis, itaque laboriosam minus? `
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  selectSkill(skill:string){
    console.log(skill);
    this.selectedSkillSet = skill;
  }

}
