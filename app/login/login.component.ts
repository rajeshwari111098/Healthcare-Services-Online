import { TokenType } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  loginForm! : FormGroup;
  

  ngOnInit():void{
      this.loginForm=new FormGroup({
      username:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required])
    });
  }
    onSubmit(){
    alert("login successfully")
    console.log(this.loginForm.value);
    }
    
    
  }
  
  

  


