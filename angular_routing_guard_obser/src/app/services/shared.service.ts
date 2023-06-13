import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sharedData: Subject<any> = new Subject<any>();
  sharedData1: Observable<any> = this.sharedData.asObservable();
  constructor() { }

  setData(updatedData: string) {
    this.sharedData.next(updatedData);
  }
}
