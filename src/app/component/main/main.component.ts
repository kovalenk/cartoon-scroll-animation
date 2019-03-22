import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  bgLeft = 0;
  cloudsLeft = 0;
  treeLeft = 0;
  slideOneLeft = 0;

  loading: any;
  sliderElements = [
    {
      src: ''
    },
    {
      src: ''
    },
  ];
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

  treeGroup = [
    {
      src: 'tree-1'
    },
    // {
    //   src: 'tree-2'
    // },
    // {
    //   src: 'tree-3'
    // },
  ];

  constructor() {
  }

  ngOnInit() {
    this.loading = true;

    // setTimeout(() => {
    //   this.loading = true;
    // }, 7000);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    console.log(window.pageYOffset);

    this.bgLeft = window.pageYOffset / 3;
    this.cloudsLeft = window.pageYOffset / 4.5;
    this.treeLeft = window.pageYOffset * 0.9;
    if (window.pageYOffset < 1900){
      this.slideOneLeft = window.pageYOffset * 2;
    }
    if (window.pageYOffset > 2400) {
      this.slideOneLeft = (window.pageYOffset - 500) * 2;
    }
  }
}
