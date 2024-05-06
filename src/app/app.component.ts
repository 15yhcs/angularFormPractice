import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm 
  @ViewChild('email') e:NgModel;
  answer = '';
  defaultQuestion= "pet";
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(ff: NgForm){
  //   console.log('Submitted');
  //   console.log(ff);
    
  // }
  onSubmit(){
    console.log('Submitted');
    console.log(this.form);
    console.log(this.e);
    
  }
}
