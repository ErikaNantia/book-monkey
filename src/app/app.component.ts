import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { Book } from './shared/book';
import { BookDetailsComponent } from './book-details/book-details.component';
type ViewState = 'list' | 'details';

@Component({
  selector: 'bm-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent, BookDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public book?: Book;
  public viewState: ViewState = 'list';

  public showList(): void {
    this
  }
  public showDetails(book: Book) {
    this.book = book;
    this.viewState = 'details';
  }
}
