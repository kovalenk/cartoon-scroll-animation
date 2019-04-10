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
      left: 25,
      top: 17,
      slideGroup: [
        {
          class: 'home-slider',
          src: 'slides/slide-1.png',
          slideSpeed: 0.7,
          stopSlide: false,
        }
      ]
    },
    {
      class: 'slide-2',
      left: 114,
      top: 0,
      slideGroup: [
        {
          class: 'slide-photo',
          src: 'slides/slide-2.png',
          top: 20,
          slideSpeed: 0.6,
          stopSlide: true,
          titleBanner: false,
        },
        {
          class: 'banner',
          src: 'banner/slide-2-title.png',
          top: -58,
          left: 39,
          titleBanner: true,
        },
      ],
      slideDots: [
        {
          class: 'slide-photo',
          src: 'slides/slide-2.png',
          top: 20,
          slideSpeed: 0.6,
          stopSlide: true,
          titleBanner: false,
        },
        {
          class: 'banner',
          src: 'banner/slide-2-title.png',
          top: -58,
          left: 39,
          titleBanner: true,
        },
      ]
    },
    // {
    //   class: 'slide-3',
    //   src: 'slide-3',
    //   left: 200,
    //   top: 20,
    //   slideSpeed: 0.6,
    //   stopSlide: true
    // },
    // {
    //   class: 'slide-4',
    //   src: 'slide-4',
    //   left: 297,
    //   top: 20,
    //   slideSpeed: 0.6,
    //   stopSlide: true
    // },
    // {
    //   class: 'slide-5',
    //   src: 'slide-5',
    //   left: 397,
    //   top: 16,
    //   slideSpeed: 0.6,
    //   stopSlide: true
    // },
    // {
    //   class: 'slide-6',
    //   src: 'slide-6',
    //   left: 490,
    //   top: 16,
    //   slideSpeed: 0.6,
    //   stopSlide: true
    // },
    // {
    //   class: 'slide-7',
    //   src: 'slide-7-building',
    //   left: 627,
    //   top: -20,
    //   slideSpeed: 0.6,
    //   stopSlide: true
    // },
    // {
    //   class: 'slide-2',
    //   src: 'slide-8',
    //   left: 691,
    //   top: 21,
    //   slideSpeed: 0.6,
    //   stopSlide: true
    // },
    // {
    //   class: 'slide-9',
    //   src: 'slide-9',
    //   left: 794,
    //   top: 21,
    //   slideSpeed: 0.6,
    //   stopSlide: true
    // },
    // {
    //   class: 'slide-10',
    //   src: 'slide-10',
    //   left: 945,
    //   top: 18,
    //   slideSpeed: 0.4,
    //   stopSlide: false
    // },
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
  slideDelay_6 = 0;
  slideDelay_7 = 0;
  slideDelay_8 = 0;


  slideShow_1 = 0;

  slideHide_1 = 0;
  nloDelay = 0;

  mainPosition = 0;

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
    const contentSpeed = window.pageYOffset * 0.7;
    this.mainPosition = window.pageYOffset * 0.7;
    this.bgLeft = contentSpeed / 5.5;
    this.cloudsLeft = contentSpeed / 4.1;
    this.decorationSpeed = contentSpeed * 0.92;
    this.treeLeft = contentSpeed * 0.9;
    this.slideOneLeft = contentSpeed * 2;

    // Slide delays
    if (contentSpeed < 1500) {
      this.slideDelay_1 = 0;
    }

    if (contentSpeed > 1500 && contentSpeed < 2500) {
      this.slideDelay_1 = ((contentSpeed - 1500) * 2) * 0.6;
      this.treeDelay_1 = ((contentSpeed - 1500) * 0.6);
    }

    if (contentSpeed > 2500) {
      this.slideDelay_1 = 1195;
    }

    if (contentSpeed < 3800) {
      this.slideDelay_2 = 0;
    }

    if (contentSpeed > 3800 && contentSpeed < 4800) {
      this.slideDelay_2 = ((contentSpeed - 3800) * 2) * 0.6;
    }

    if (contentSpeed > 4800) {
      this.slideDelay_2 = 1195;
    }

    if (contentSpeed < 6200) {
      this.slideDelay_3 = 0;
    }

    if (contentSpeed > 6200 && contentSpeed < 7200) {
      this.slideDelay_3 = ((contentSpeed - 6200) * 2) * 0.6;
    }

    if (contentSpeed > 7200) {
      this.slideDelay_3 = 1195;
    }

    if (contentSpeed < 8800) {
      this.slideDelay_4 = 0;
    }

    if (contentSpeed > 8800 && contentSpeed < 9800) {
      this.slideDelay_4 = ((contentSpeed - 8800) * 2) * 0.6;
    }

    if (contentSpeed > 9800) {
      this.slideDelay_4 = 1195;
    }

    if (contentSpeed < 11200) {
      this.slideDelay_5 = 0;
    }

    if (contentSpeed > 11200 && contentSpeed < 12200) {
      this.slideDelay_5 = ((contentSpeed - 11200) * 2) * 0.6;
    }

    if (contentSpeed > 12200) {
      this.slideDelay_5 = 1195;
    }

    if (contentSpeed < 13860) {
      this.slideDelay_6 = 0;
    }

    if (contentSpeed > 13860 && contentSpeed < 14860) {
      this.slideDelay_6 = ((contentSpeed - 13860) * 2) * 0.6;
    }

    if (contentSpeed > 14860) {
      this.slideDelay_6 = 1195;
    }

    if (contentSpeed < 16450) {
      this.slideDelay_7 = 0;
    }

    if (contentSpeed > 16450 && contentSpeed < 17450) {
      this.slideDelay_7 = ((contentSpeed - 16450) * 2) * 0.6;
    }

    if (contentSpeed > 17450) {
      this.slideDelay_7 = 1195;
    }

    if (contentSpeed < 19000) {
      this.slideDelay_8 = 0;
    }

    if (contentSpeed > 19000 && contentSpeed < 20000) {
      this.slideDelay_8 = ((contentSpeed - 19000) * 2) * 0.6;
    }

    if (contentSpeed > 20000) {
      this.slideDelay_8 = 1195;
    }

    // decorations delay
    if (contentSpeed > 11700) {
      this.nloDelay = (contentSpeed - 11700) / 2;
    }

    if (contentSpeed > 10800 && contentSpeed < 13000) {
      this.treeDelay_2 = ((contentSpeed - 10800) * 0.35);
    }

    if (contentSpeed > 3000) {
      this.planeSpeed = (contentSpeed - 3000) / 8;
    }

    if (contentSpeed > 20000) {
      this.treeDelay_3 = ((contentSpeed - 20000) / 2);
    }

    // banner show hide

    if (contentSpeed < 750) {
      this.slideShow_1 = 0;
    }

    if (contentSpeed > 750 && contentSpeed < 1220) {
      this.slideShow_1 = (contentSpeed - 750) / 1.2;
    }

    if (contentSpeed > 1220) {
      this.slideShow_1 = 390;
    }

    if (contentSpeed < 2900) {
      this.slideHide_1 = 0;
    }

    if (contentSpeed > 2900 && contentSpeed < 3370) {
      this.slideHide_1 = (contentSpeed - 2900) / -1.2;
    }

    if (contentSpeed > 3370) {
      this.slideHide_1 = -390;
    }
  }
}
