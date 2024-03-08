import { Component, Inject } from '@angular/core';

import { MyClass, myCustomToken } from './app.module';

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

  constructor(

    @Inject (myCustomToken) test1: string,
                    // or up down
    test: MyClass   //== @Inject (MyClass) test:Myclass - Angular is make simple and it doesn't matter anymore
    //@Inject('Test') test: string
  )
   {

    console.log(test)
    console.log(test1)
   
  }
  addNameHandler(nameInput:HTMLInputElement) :void {
    const {value: name} = nameInput// const {value}= nameInput; 
    //this.users.push({name});//this.users.push({name:value}) changeDetection:ChangeDetectionStrategy.Default

    this.users = this.users.concat({name})
    
    nameInput.value = '';
  }
}
 