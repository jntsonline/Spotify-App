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
  cover: any;

  constructor() {
    this.showBtn = false;
  }

  btnPlay() {
    this.playClick.emit([this.item.track.uri]);
  }
  ngOnInit() {
    if (this.item.type === 'playlist') {
      this.cover = this.item.images[0].url;
    } else {
      this.cover = this.item.track.album.images[0].url;
    }
  }
}
