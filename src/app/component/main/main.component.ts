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
  decorationSpeed = 0;
  planeSpeed = 0;
  slideOneLeft = 0;

  myCoordinates = 0;
  loading: any;
  sliderElements = [
    {
      class: 'slide-1',
      left: 21,
      top: 15,
      slideSpeed: 0.7,
      stopSlide: false
    },
    {
      class: 'slide-2',
      left: 114,
      top: 20,
      slideSpeed: 0.6,
      stopSlide: true
    },
    {
      class: 'slide-3',
      left: 200,
      top: 20,
      slideSpeed: 0.6,
      stopSlide: true
    },
    {
      class: 'slide-4',
      left: 297,
      top: 20,
      slideSpeed: 0.6,
      stopSlide: true
    },
    {
      class: 'slide-5',
      left: 397,
      top: 16,
      slideSpeed: 0.6,
      stopSlide: true
    },
    {
      class: 'slide-6',
      left: 490,
      top: 16,
      slideSpeed: 0.6,
      stopSlide: true
    },
  ];
  cloudGroup = [
    {
      src: 'cloud-1',
      left: 53,
      top: 11
    },
    {
      src: 'cloud-2',
      left: 102,
      top: 2
    },
    {
      src: 'cloud-3',
      left: 148,
      top: -1
    },
    {
      src: 'cloud-6',
      left: 193,
      top: 8
    },
    {
      src: 'cloud-5',
      left: 233,
      top: 1
    },
    {
      src: 'cloud-4',
      left: 278,
      top: 8
    },
    {
      src: 'cloud-7',
      left: 349,
      top: 3
    },
  ];

  treeGroup = [
    {
      src: 'tree-1',
      left: 100,
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
      slideSpeed: 0.9,
      z_index: 1,
    },
    {
      src: 'tree-5',
      left: 262,
      top: 4,
      slideDelay: false,
      slideSpeed: 0.6,
      z_index: 0,
    },
    {
      src: 'tree-6',
      left: 508,
      top: 17,
      slideDelay: false,
      slideSpeed: 1.25,
      z_index: 2,
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
      left: 822,
      top: 20,
      slideDelay: true,
      slideSpeed: 0.8,
      z_index: -1
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

  decorationGroup = [
    {
      src: 'camel',
      left: 411,
      top: 48,
      slideDelay: false,
      slideSpeed: 1,
      z_index: 1,
    },
    {
      src: 'car',
      left: 350,
      top: 42,
      slideDelay: false,
      slideSpeed: 0.5,
      z_index: 0,
    },
    {
      src: 'nlo',
      left: 658,
      top: 50,
      slideDelay: true,
      slideSpeed: 1,
      z_index: 0,
    },
    {
      src: 'city',
      left: 430,
      top: 21,
      slideDelay: false,
      slideSpeed: 0.5
    },
    {
      src: 'ostrich',
      left: 485,
      top: 37,
      slideDelay: false,
      slideSpeed: 0.5
    }
  ];

  banerTop: number;
  banerBottom = 0;

  treeDelay_1 = 0;
  treeDelay_2 = 0;
  treeDelay_3 = 0;

  slideDelay_1 = 0;
  slideDelay_2 = 0;
  slideDelay_3 = 0;
  slideDelay_4 = 0;
  slideDelay_5 = 0;

  nloDelay = 0;

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
    this.cloudsLeft = window.pageYOffset / 4.1;
    this.decorationSpeed = window.pageYOffset * 0.92;
    this.treeLeft = window.pageYOffset * 0.9;
    this.slideOneLeft = window.pageYOffset * 2;
    if (window.pageYOffset > 11700) {
      this.nloDelay = (window.pageYOffset - 11700) / 2;
    }

    if (window.pageYOffset > 1500 && window.pageYOffset < 2500) {
      this.slideDelay_1 = ((window.pageYOffset - 1500) * 2) * 0.6;
      this.treeDelay_1 = ((window.pageYOffset - 1500) * 0.6);
    }

    if (window.pageYOffset > 3800 && window.pageYOffset < 4800) {
      this.slideDelay_2 = ((window.pageYOffset - 3800) * 2) * 0.6;
    }

    if (window.pageYOffset > 6200 && window.pageYOffset < 7200) {
      this.slideDelay_3 = ((window.pageYOffset - 6200) * 2) * 0.6;
    }

    if (window.pageYOffset > 8800 && window.pageYOffset < 9800) {
      this.slideDelay_4 = ((window.pageYOffset - 8800) * 2) * 0.6;
    }

    if (window.pageYOffset > 11200 && window.pageYOffset < 12200) {
      this.slideDelay_5 = ((window.pageYOffset - 11200) * 2) * 0.6;
    }

    if (window.pageYOffset > 10800 && window.pageYOffset < 13000) {
      this.treeDelay_2 = ((window.pageYOffset - 10800) * 0.35);
    }

    if (window.pageYOffset > 3000) {
      this.planeSpeed = (window.pageYOffset - 3000) / 8;
    }

    if (window.pageYOffset > 900 && window.pageYOffset < 1980) {
      this.banerTop = window.pageYOffset / 5;
    }

    if (window.pageYOffset > 3000 && window.pageYOffset < 3900) {
      this.banerBottom = ((window.pageYOffset - 3000) / 5) * -1;
    }

    if (window.pageYOffset > 20000) {
      this.treeDelay_3 = ((window.pageYOffset - 20000) / 2);
    }
  }
}
