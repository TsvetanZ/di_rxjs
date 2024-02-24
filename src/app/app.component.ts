import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'di_rxjs';
  users = [
    {
      name:'Ivan'
    },
    {
      name:'Petko'
    }
  ];

  constructor() {
   
  }
  addNameHandler(nameInput:HTMLInputElement) :void {
    const {value: name} = nameInput// const {value}= nameInput; 
    this.users.push({name});//this.users.push({name:value}) changeDetection:ChangeDetectionStrategy.Default

    this.users = this.users.concat({name})
    

    nameInput.value = '';
  }
}
 