import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';
import { trigger, state, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],

  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0, }),
            animate('0.3s ease-out',
              style({ height: 30, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 30, opacity: 1 }),
            animate('0.3s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class FaqComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'proj';
  path = ''
  isCollapsed2: boolean = true;
  isCollapsed1: boolean = true;
  isCollapsed3: boolean = true;
  isCollapsed4: boolean = true;
  isCollapsed5: boolean = true;
  bold1: string = ""
  variable1: string = ""
  variable2: string = "";
  variable3: string = "";
  variable4: string = "";
  variable5: string = "";
  bold2: string = "";
  bold3: string = "";
  bold4: string = "";
  bold5: string = "";
  toggle1() {
    this.isCollapsed1 = !this.isCollapsed1;
    if (this.variable1 === "" || this.variable1 === "rotate360")
      this.variable1 = "rotate";
    else {
      this.variable1 = "rotate360"
    }
    if (this.bold1 === "")
      this.bold1 = "bold1";
    else {
      this.bold1 = ""
    }


  }
  toggle2() {
    this.isCollapsed2 = !this.isCollapsed2;
    if (this.variable2 === "" || this.variable2 === "rotate360")
      this.variable2 = "rotate";
    else {
      this.variable2 = "rotate360"
    }
    if (this.bold2 === "")
      this.bold2 = "bold1";
    else {
      this.bold2 = ""
    }

  }
  toggle3() {
    this.isCollapsed3 = !this.isCollapsed3;
    if (this.variable3 === "" || this.variable3 === "rotate360")
      this.variable3 = "rotate";
    else {
      this.variable3 = "rotate360"
    }
    if (this.bold3 === "")
      this.bold3 = "bold1";
    else {
      this.bold3 = ""
    }
  }
  toggle4() {
    this.isCollapsed4 = !this.isCollapsed4;
    if (this.variable4 === "" || this.variable4 === "rotate360")
      this.variable4 = "rotate";
    else {
      this.variable4 = "rotate360"
    }
    if (this.bold4 === "")
      this.bold4 = "bold1";
    else {
      this.bold4 = ""
    }
  }
  toggle5() {
    this.isCollapsed5 = !this.isCollapsed5;
    if (this.variable5 === "" || this.variable5 === "rotate360")
      this.variable5 = "rotate";
    else {
      this.variable5 = "rotate360"
    }
    if (this.bold5 === "")
      this.bold5 = "bold1";
    else {
      this.bold5 = ""
    }
  }


}
