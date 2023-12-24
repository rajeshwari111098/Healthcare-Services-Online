import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm=new FormGroup({
    firstname:new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    lastname:new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required])

  });
  

  
  onSubmit(){

    console.log(this.regForm.value);
  }
  
 }
    


