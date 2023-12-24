import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { branchname } from '../../../../Model/branchname'; 
import { specialistname } from '../../../../Model/specialistname';
import { Router } from '@angular/router';
import { BookService } from '../../../../book.service';
@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent{
  bookForm=new FormGroup({
    patientname:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    patientdob:new FormControl('',[Validators.required]),
    patientmedicalissue:new FormControl('', [Validators.required]),
    hospitalbranch:new FormControl('', [Validators.required]),
    doctorspecialist:new FormControl('',[Validators.required]),
    visitdate:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required,Validators.email]),
    mobilenumber:new FormControl('',[Validators.required])
    });
    
    
    Branches:branchname[]=[
      {
        id:1,
        name:'chennai'
      },
      {
        id:2,
        name:'madurai'
      },
      {
        id:3,
        name:'Tirunelveli'
      },
      {
        id:4,
        name:'Trichy'
      }
    ]
    Specialists:specialistname[]=[
      {
        code:5,
        names:'ENT specialist'
      },
      {
        code:6,
        names:'cardiologist'
      },
      {
        code:7,
        names:'Dentist'
      },
      {
        code:8,
        names:'orthopaedic'
      }
    ];
    
    


    onSubmit(){
      console.log(this.bookForm.value)
    }

}
