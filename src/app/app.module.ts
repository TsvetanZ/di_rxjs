import { InjectionToken, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

export class MyClass {
  constructor () {
    console.log('You are ....')
  }
}

export const myCustomToken = new InjectionToken ('Test');

const myProvider: Provider = {
  useClass: MyClass,
  //provide: MyClass
  provide: myCustomToken
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


