import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

export class MyClass {
  constructor () {
    console.log('You are ....')
  }
}

const myProvider: Provider = {
  useClass: MyClass,
  provide: MyClass
  //useValue:123,
  //provide: 'Test'
}
 
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      myProvider,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


