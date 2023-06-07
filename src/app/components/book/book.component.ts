import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Object;
  openModal: boolean;

  onModalChange(event: boolean) {
    this.openModal = event;
  }
}
