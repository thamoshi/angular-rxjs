import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book.interface';

const body = document.querySelector("body");

@Component({
  selector: 'app-modal-book',
  templateUrl: './modal-book.component.html',
  styleUrls: ['./modal-book.component.css']
})
export class BookModalComponent {

  constructor() { }

  @Input() book: Book;
  modalStatus: boolean = true;
  @Output() modalChanged = new EventEmitter()

  closeModal() {
    this.modalStatus = false
    this.modalChanged.emit(this.modalStatus)
    body.style.overflow = "scroll"
  }

  hideScroll(){
    if(this.modalStatus == true ) {
      body.style.overflow = "hidden";
    }
  }
  
  readPreview() {
    window.open(this.book.previewLink);
  }

}
