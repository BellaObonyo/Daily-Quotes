import { Component,  Input,Output,EventEmitter, OnInit } from '@angular/core';
import {Quotes }from '../quotes'
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() voting: Quotes;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.voting.upvote+=1;
  }
  downvote(){
    this.voting.downvote+=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
