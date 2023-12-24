import { Component, OnInit} from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  booklist:any;
  constructor(public bookService : BookService ){}

  ngOnInit(){
    this.booklist=this.bookService.aptCollection

  }

  // get fetchAllApt(){
  //   var apt : any = localStorage.getItem('bookings');
  //   return JSON.parse(apt)
  // }
  

  

  
  
  
  
  
  
  

}
