import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  
  @Input() dataFromParent: any;


  inputData!: string;

  @Output() dataSubmitted: EventEmitter<string> = new EventEmitter<string>();

  sendData() {
    this.dataSubmitted.emit(this.inputData);
  }

}
