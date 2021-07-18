import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { Quotes} from '../quotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quotes(0,"","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quotes>();

  addQuote(){
this.add.emit(this.newQuote);
this.newQuote = new Quotes(0,"","","","",new Date(),0,0);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
