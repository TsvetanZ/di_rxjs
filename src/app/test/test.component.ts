import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit, OnChanges {
  @Input ()  users!: { name:string }[] 

  constructor(private cdRef:ChangeDetectorRef) {
    this.cdRef.detach()
   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  //  ngOnChanges(changes: SimpleChanges): void {
     
  //  }

  ngOnInit(): void {
    this.cdRef.detectChanges()
  }

}
