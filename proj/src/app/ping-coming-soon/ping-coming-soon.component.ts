import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-ping-coming-soon',
  templateUrl: './ping-coming-soon.component.html',
  styleUrls: ['./ping-coming-soon.component.css']
})
export class PingComingSoonComponent {
  // form: FormGroup=new FormGroup({
  //   email:new FormControl('',[
  //     Validators.email
  // ])
  // })
  constructor() { }
@ViewChild('f') signupForm : NgForm;
  ngOnInit() { }
   onSubmit( ) 
   {
    //  console.log(form)
    console.log(this.signupForm)
   }
}
