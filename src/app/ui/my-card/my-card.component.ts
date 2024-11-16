import { mycard} from './../../interface/all-interfaces';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss'
})
export class MyCardComponent {

 @Input() data: mycard ={
   id: 0,
   name: '',
   describe: '',
   image: ''
 }

}
