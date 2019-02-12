import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  bgLeft = 0;
  slideOneLeft = 0;
  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.bgLeft = window.pageYOffset/3;
    this.slideOneLeft = window.pageYOffset*2;
  }
}
