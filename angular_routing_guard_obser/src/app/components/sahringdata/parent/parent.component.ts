import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  loginFrom!: FormGroup;

  sendFromDataToChild!: any[];


  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginFrom = this._formBuilder.group({
      emailName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      checking: new FormControl(''),
    });
  }

  onSubmit() {
    // Handle form submission
    this.sendFromDataToChild =  Object.values(this.loginFrom.value);
  }


  receivedData!: string;

  onDataSubmitted(data: string) {
    this.receivedData = data;
  }

  ngOnInit(): void {}
}
