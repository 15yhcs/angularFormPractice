import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { __values } from 'tslib';

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
  // suggestedName: string;
  gender = ['male', 'female']
  user = {
    uName: '',
    mail: '',
    secret: '',
    qAnswered: '',
    gender: ''
  }
  suggestUserName() {
    // this.suggestedName = 'Superuser';
    const suggestedName = 'Superuser';
    // this.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     mail: "email@email.com"
    //   },
    //   secret: this.defaultQuestion,
    //   questionAnswered: "",
    //   genders: 'male'
    // })
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(ff: NgForm){
  //   console.log('Submitted');
  //   console.log(ff);
    
  // }
  onSubmit(){
    this.user.uName = this.form.value.userData.username;
    this.user.mail = this.form.value.userData.mail;
    this.user.qAnswered = this.form.value.questionAnswered;
    this.user.secret = this.form.value.secret;
    this.user.gender = this.form.value.genders;

    this.form.reset();
  }
}
