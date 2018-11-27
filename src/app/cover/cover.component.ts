import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  showBtn;
  @Input() item: any;
  @Output() playClick = new EventEmitter();

  constructor() {
    this.showBtn = false;
  }

  btnPlay() {
    this.playClick.emit(this.item.track);
  }
  ngOnInit() {
  }

}
