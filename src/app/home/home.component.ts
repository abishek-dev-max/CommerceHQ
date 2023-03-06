import { Component, OnInit } from '@angular/core';
import { BooksService } from '../core/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books:any;

  constructor(private booksService:BooksService){

  }
  ngOnInit(): void {
    this.booksService.GetAllBooks().subscribe((res)=>{
      this.books=res;
    })
  }

}
