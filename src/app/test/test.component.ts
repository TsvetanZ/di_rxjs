import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges, Injector  } from '@angular/core';
import { AppComponent } from '../app.component';
import { myCustomToken } from '../app.module';

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

    const value = this.injector.get(myCustomToken, null);
    console.log(value);

    const appComponent = this.injector.get(AppComponent);
    // appComponent.users[0].name = 'ha-ha'
    // console.log(appComponent.users);
    
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