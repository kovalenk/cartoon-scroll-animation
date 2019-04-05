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

  myCoordinates = 0;
  loading: any;
  sliderElements = [
    // {
    //   class: 'slide-1'
    // },
    // {
    //   class: 'slide-2'
    // },
    // {
    //   class: 'slide-3'
    // },
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
      src: 'tree-1',
      left: 110,
      top: 5,
      slideDelay: true,
      slideSpeed: 1
    },
    {
      src: 'tree-2',
      left: 215,
      top: 18,
      slideDelay: false,
      slideSpeed: 0.9
    },
    {
      src: 'tree-3',
      left: 308,
      top: 32,
      slideDelay: false,
      slideSpeed: 1.35
    },
    {
      src: 'tree-4',
      left: 278,
      top: -15,
      slideDelay: false,
      slideSpeed: 0.9
    },
    {
      src: 'tree-5',
      left: 262,
      top: 4,
      slideDelay: false,
      slideSpeed: 0.6
    },
    {
      src: 'tree-6',
      left: 491,
      top: 17,
      slideDelay: false,
      slideSpeed: 1.25
    },
    {
      src: 'tree-7',
      left: 404,
      top: 10,
      slideDelay: false,
      slideSpeed: 0.8
    },
    {
      src: 'tree-8',
      left: 406,
      top: 7,
      slideDelay: true,
      slideSpeed: 0.8
    },
    {
      src: 'tree-9',
      left: 520,
      top: -20,
      slideDelay: true,
      slideSpeed: 0.9
    },
    {
      src: 'tree-3',
      left: 568,
      top: 32,
      slideDelay: false,
      slideSpeed: 0.7
    },
    {
      src: 'tree-1',
      left: 640,
      top: -5,
      slideDelay: false,
      slideSpeed: 0.7
    },
    {
      src: 'tree-6',
      left: 797,
      top: 0,
      slideDelay: false,
      slideSpeed: 0.8
    },
    {
      src: 'tree-7',
      left: 832,
      top: 24,
      slideDelay: false,
      slideSpeed: 0.8
    },
    {
      src: 'tree-3',
      left: 900,
      top: 35,
      slideDelay: false,
      slideSpeed: 0.8
    },
    {
      src: 'tree-10',
      left: 915,
      top: 20,
      slideDelay: false,
      slideSpeed: 0.8
    },
  ];

  shrubGroup = [
    {
      src: 'shrub-1',
      left: 201,
      top: 72,
      slideDelay: true,
      slideSpeed: 1
    },
    {
      src: 'shrub-2',
      left: 235,
      top: 47,
      slideDelay: true,
      slideSpeed: 0.7
    },
    {
      src: 'shrub-3',
      left: 572,
      top: 66,
      slideDelay: true,
      slideSpeed: 0.8
    },
  ];
  banerTop: number;
  showCoef: number;
  hideCoef: number;
  banerBottom = 0;
  slide_1 = 0;
  slide_4 = 0;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = true;
    }, 1000);
    // }, 7000);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.myCoordinates = window.pageYOffset;
    this.bgLeft = window.pageYOffset / 5.5;
    this.cloudsLeft = window.pageYOffset / 4.5;
    this.treeLeft = (window.pageYOffset * 0.9);
    if (window.pageYOffset < 1980) {
      this.slideOneLeft = window.pageYOffset * 2;
    }

    if (window.pageYOffset > 1980 && window.pageYOffset < 3000) {
      this.slide_1 = ((window.pageYOffset - 1980) * 0.6);
    }

    if (window.pageYOffset > 10800 && window.pageYOffset < 13000) {
      this.slide_4 = ((window.pageYOffset - 10800) * 0.35);
    }

    if (window.pageYOffset > 3000) {
      this.slideOneLeft = (window.pageYOffset - 1020) * 2;
    }

    if (window.pageYOffset > 900 && window.pageYOffset < 1980) {
      this.banerTop = window.pageYOffset / 5;
    }

    if (window.pageYOffset > 3000 && window.pageYOffset < 3900) {
      this.banerBottom = ((window.pageYOffset - 3000) / 5) * -1;
    }
  }
}
