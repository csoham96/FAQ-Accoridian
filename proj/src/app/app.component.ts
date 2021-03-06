import { style } from '@angular/animations';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';
import { RouterState } from '@angular/router';
import { trigger, state, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent {
  title = 'proj';
  path=''
  isCollapsed2:boolean= true;
  isCollapsed1: boolean=true;
  isCollapsed3: boolean=true;
  isCollapsed4: boolean=true;
  isCollapsed5: boolean=true;
  variable1:string=""
  variable2: string="";
  variable3: string="";
  variable4: string="";
  variable5: string="";
  toggle1(){
    this.isCollapsed1=!this.isCollapsed1;
    if(this.variable1==="" ||this.variable1==="rotate360")
    this.variable1="rotate";
     else{
       this.variable1="rotate360"
     }
  }
toggle2(){
  this.isCollapsed2=!this.isCollapsed2;
  if(this.variable2==="" ||this.variable2==="rotate360")
    this.variable2="rotate";
     else{
       this.variable2="rotate360"
     }
}
toggle3(){
  this.isCollapsed3=!this.isCollapsed3;
  if(this.variable3==="" ||this.variable3==="rotate360")
    this.variable3="rotate";
     else{
       this.variable3="rotate360"
     }
}
toggle4(){
  this.isCollapsed4=!this.isCollapsed4;
  if(this.variable4==="" ||this.variable4==="rotate360")
    this.variable4="rotate";
     else{
       this.variable4="rotate360"
     }
}
toggle5(){
  this.isCollapsed5=!this.isCollapsed5;
  if(this.variable5==="" ||this.variable5==="rotate360")
    this.variable5="rotate";
     else{
       this.variable5="rotate360"
     }
}




    
  }
