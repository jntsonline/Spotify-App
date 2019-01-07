import { Component, OnInit, HostListener } from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  showShadow;
  showBorder;
  constructor() { }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('onScroll');
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 32) {
     this.showShadow = true;
     this.showBorder = false;
    } else {
      this.showShadow = false;
      this.showBorder = true;
    }
  }
  ngOnInit() {
    this.showBorder = true;
  }
}
