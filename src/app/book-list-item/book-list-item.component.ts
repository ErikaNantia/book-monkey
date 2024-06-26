import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list-item',
  standalone: true,
  imports: [],
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.css'
})
export class BookListItemComponent implements OnInit {
  @Input() book?: Book;


  public ngOnInit(): void {

  }

}
