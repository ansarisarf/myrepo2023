import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  sharedData!: string;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.sharedData1.subscribe(
      (sharedData) => (this.sharedData = sharedData)
    );
  }
}