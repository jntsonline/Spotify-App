import { Component, OnInit, HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ToolbarService } from './toolbar.service';
import { Observable } from 'rxjs';
import { startWith, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

declare const window: any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  searchAutoComplete: Observable<any> = null;
  autoCompleteControl;
  showShadow;
  showBorder;
  artist = 'Artist';
  constructor(private service: ToolbarService) {
    this.autoCompleteControl = new FormControl();
  }


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
  lookup(value: string, type): Observable<any> {
    return this.service.search(value.toLowerCase(), type)
    .pipe(
      map(results => results.artists.items), catchError(_ => {
        return null;
      })
    );
  }
  ngOnInit() {
    this.showBorder = true;
    this.searchAutoComplete = this.autoCompleteControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap(value => {
        if (value !== '') {
          return this.lookup(value, 'artist');
        } else {
          return (null);
        }
      })
    );
  }
}
