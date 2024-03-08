import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges, Injector  } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit, OnChanges {
  @Input ()  users!: { name:string }[] 

  constructor(
    private cdRef:ChangeDetectorRef,
    private injector: Injector
    ) {
    this.cdRef.detach()
    console.log(this.injector.get(this.users[1].name))
    //this.injector.get(users[1])
   }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    if(this.users.length > 4) {
      this.cdRef.detectChanges();
    }
    
  }

  //  ngOnChanges(changes: SimpleChanges): void {
     
  //  }

  ngOnInit(): void {
    this.cdRef.detectChanges()
  }

}

class Wallet {
  constructor(private amount: number, private test: string) { }
}

class Person {
  constructor (private wallet:Wallet) {}
}

const w = new Wallet (250, 'eho');
const p = new Person (w);
