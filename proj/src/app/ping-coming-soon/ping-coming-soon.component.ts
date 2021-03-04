import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-ping-coming-soon',
  templateUrl: './ping-coming-soon.component.html',
  styleUrls: ['./ping-coming-soon.component.css']
})
export class PingComingSoonComponent implements OnInit {
  // form: FormGroup=new FormGroup({
  //   email:new FormControl('',[
  //     Validators.email
  // ])
  // })
  constructor() { }

  ngOnInit() { }
  // onSubmit(form: NgForm) 
  // {
  //   console.log(form)
  // }
}
