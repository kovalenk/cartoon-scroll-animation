import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  bgLeft = 0;
  cloudsLeft = 0;
  slideOneLeft = 0;

  loading:any;

  cloudGroup = [
    {
      src: 'cloud-1'
    },
    {
      src: 'cloud-2'
    },
    {
      src: 'cloud-3'
    },
    // {
    //   src: 'cloud-4'
    // },
    // {
    //   src: 'cloud-5'
    // },
    // {
    //   src: 'cloud-6'
    // },
    // {
    //   src: 'cloud-7'
    // },
  ];

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = true;
    }, 7000);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.bgLeft = window.pageYOffset / 3;
    this.cloudsLeft = window.pageYOffset / 4.5;
    this.slideOneLeft = window.pageYOffset * 2;
  }
}
