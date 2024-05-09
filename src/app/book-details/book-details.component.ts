import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  @Input() book?: Book;
  @Output() showListEvent = new EventEmitter<Book>();


  public ngOnInit(): void {

  }

  public showBookList(): void {
    this.showListEvent.emit();
  }

  public getRating(num: number): number[] {
    return new Array(num);
  }

}
