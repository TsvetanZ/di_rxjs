import { Inject, Injectable, InjectionToken, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@Injectable ({
  providedIn:'root'
})
export class MyClass {
  constructor () {
    console.log('You are ....')
  }
}

 export const myCustomToken = new InjectionToken ('Test');

// const myProvider: Provider = {
//   useClass: MyClass,
//   //provide: MyClass
//   provide: myCustomToken
//   //useValue:123,
//   //provide: 'Test'
// } махваме ( myProvider) вече имаме @Injectable и като ги няма слагаме @Optional
 
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // MyClass, // -> {useClass: My Class, provide: MyClass}
    // myProvider,
    // махваме и двете(МyClass and myProvider) вече имаме @Injectable и като ги няма слагаме @Optional
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


