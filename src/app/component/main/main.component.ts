import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  bgSpeed = 0;
  cloudsSpeed = 0;
  treeSpeed = 0;
  decorationSpeed = 0;
  planeSpeed = 0;
  slideOneLeft = 0;

  slide_4TabsCounter = 0;
  slide_7StaresCounter = 0;
  loading: any;

  showCloudModal = false;
  showCafes = false;
  showPlaces = false;
  showAdvanced = false;

  buildingAnimate = false;
  showFinalBuilding = false;
  kong_animation = false;

  navDotsScroll = [2400, 6000, 9500, 13000, 17000, 20500, 24000, 28000, 32000];
  sliderElements = [
    {
      class: 'slide-1',
      left: 0,
      top: 0,
      slideSpeed: 0.7,
      stopSlide: false,
      slideGroup: [
        {
          class: 'home-slider',
          src: 'slides/slide-1.png',
          top: 18,
          left: 25,
        }
      ]
    },
    {
      class: 'slide-2',
      left: 114,
      top: 0,
      stopSlide: true,
      slideSpeed: 0.6,
      activeElement: 1,
      navSwitchLeft: 20,
      navSwitchBottom: 6,
      slideGroup: [
        {
          class: 'hands',
          src: 'slides/slide-2.png',
          top: 20,
          titleBanner: false,
          link: 'http://www.tatar-inform.ru/news/2014/07/30/416350/',
        },
        {
          banner: true,
          src: 'banner/slide-2-title.png',
          top: -58,
          left: 39,
          titleBanner: true,
        },
      ]
    },
    {
      class: 'slide-3',
      left: 200,
      top: 0,
      stopSlide: true,
      slideSpeed: 0.6,
      activeElement: 2,
      navSwitchLeft: 20,
      navSwitchBottom: 6,
      slideGroup: [
        {
          class: 'hands',
          src: 'slides/slide-3.png',
          top: 20,
          titleBanner: false,
        },
        {
          banner: true,
          src: 'banner/slide-3-title.png',
          top: -58,
          left: 39,
          titleBanner: true,
        },
      ],
    },
    {
      class: 'slide-4',
      left: 290,
      top: 0,
      slideSpeed: 0.6,
      stopSlide: true,
      activeElement: 3,
      navSwitchLeft: 16,
      navSwitchBottom: 6,
      slideGroup: [
        {
          class: 'slide-baners',
          src: 'slides/slide-4.png',
          top: 20,
          titleBanner: false,
          extraInfo: [
            {
              id: '0',
              class: 'praga',
              top: '',
              left: '',
              group: [
                {
                  class: 'decoration',
                  src: 'countries/praga-wild.png',
                },
                {
                  class: 'description',
                  src: 'countries/praga.png',
                },
              ],
              infoModals: [
                {
                  id: '1',
                  src: 'praga-b-1.png'
                },
                {
                  id: '2',
                  src: 'praga-b-2.png'
                },
                {
                  id: '3',
                  src: 'praga-b-3.png'
                },
              ]
            },

            {
              id: '1',
              class: 'london',
              top: '',
              left: '',
              group: [
                {
                  class: 'decoration',
                  src: 'countries/london-wild.png',
                },
                {
                  class: 'description',
                  src: 'countries/london.png',
                },
              ],
              infoModals: [
                {
                  id: '1',
                  src: 'london-b-1.png'
                },
                {
                  id: '2',
                  src: 'london-b-2.png'
                },
                {
                  id: '3',
                  src: 'london-b-3.png'
                },
              ]
            },
            {
              id: '2',
              class: 'edinburg',
              top: '',
              left: '',
              group: [
                {
                  class: 'decoration',
                  src: 'countries/edinburg-wild.png',
                },
                {
                  class: 'description',
                  src: 'countries/edinburg.png',
                },
              ],
              infoModals: [
                {
                  id: '1',
                  src: 'edinburg-b-1.png'
                },
                {
                  id: '2',
                  src: 'edinburg-b-2.png'
                },
                {
                  id: '3',
                  src: 'edinburg-b-3.png'
                },
              ]
            },
            {
              id: '3',
              class: 'ierusalim',
              top: '',
              left: '',
              group: [
                {
                  class: 'decoration',
                  src: 'countries/ierusalim-wild.png',
                },
                {
                  class: 'description',
                  src: 'countries/ierusalim.png',
                },
              ],
              infoModals: [
                {
                  id: '1',
                  src: 'ierusalim-b-1.png'
                },
                {
                  id: '2',
                  src: 'ierusalim-b-2.png'
                },
                {
                  id: '3',
                  src: 'ierusalim-b-3.png'
                },
              ]
            },
            {
              id: '4',
              class: 'singapur',
              top: '',
              left: '',
              group: [
                {
                  class: 'decoration',
                  src: 'countries/singapur-wild.png',
                },
                {
                  class: 'description',
                  src: 'countries/singapur.png',
                },
              ],
              infoModals: [
                {
                  id: '1',
                  src: 'singapur-b-1.png'
                },
                {
                  id: '2',
                  src: 'singapur-b-2.png'
                },
                {
                  id: '3',
                  src: 'singapur-b-3.png'
                },
              ]
            },
            {
              id: '5',
              class: 'sandiego',
              top: '',
              left: '',
              group: [
                {
                  class: 'decoration',
                  src: 'countries/sandiego-wild.png',
                },
                {
                  class: 'description',
                  src: 'countries/sandiego.png',
                },
              ],
              infoModals: [
                {
                  id: '1',
                  src: 'sandiego-b-1.png'
                },
                {
                  id: '2',
                  src: 'sandiego-b-2.png'
                },
                {
                  id: '3',
                  src: 'sandiego-b-3.png'
                },
              ]
            },
            {
              id: '6',
              class: 'moscow',
              top: '',
              left: '',
              group: [
                {
                  class: 'decoration',
                  src: 'countries/moscow-wild.png',
                },
                {
                  class: 'description',
                  src: 'countries/moscow.png',
                },
              ],
              infoModals: [
                {
                  id: '1',
                  src: 'moscow-b-1.png'
                },
                {
                  id: '3',
                  src: 'moscow-b-3.png'
                },
              ]
            },
          ]
        },
        {
          class: 'banner',
          src: 'banner/slide-4-title.png',
          top: -58,
          left: 39,
          titleBanner: true,
        },
      ],
    },
    {
      class: 'slide-5',
      left: 392,
      top: 0,
      slideSpeed: 0.6,
      stopSlide: true,
      activeElement: 4,
      navSwitchLeft: 20,
      navSwitchBottom: 6,
      slideGroup: [
        {
          class: 'giraffes',
          src: 'slides/slide-5.png',
          top: 18,
          titleBanner: false,
        },
        {
          class: 'banner',
          src: 'banner/slide-5-title.png',
          top: -62,
          left: 39,
          titleBanner: true,
        },
      ],
    },
    {
      class: 'slide-6',
      left: 482,
      top: 0,
      slideSpeed: 0.6,
      stopSlide: true,
      activeElement: 5,
      navSwitchLeft: 20,
      navSwitchBottom: 6,
      slideGroup: [
        {
          class: 'great-idea',
          src: 'slides/slide-6.png',
          top: 20,
          titleBanner: false,
          slideBuilding: true,
        },
        {
          class: 'banner',
          src: 'banner/slide-6-title.png',
          top: -58,
          left: 39,
          titleBanner: true,
        },
      ],
    },
    {
      class: 'slide-7',
      left: 586,
      top: 0,
      slideSpeed: 0.6,
      stopSlide: true,
      activeElement: 6,
      navSwitchLeft: 16,
      navSwitchBottom: 8,
      slideGroup: [
        {
          class: 'slide-7-building',
          src: 'slides/slide-7-building.png',
          top: -20,
          titleBanner: false,
          kingKong: true,
        },
        {
          class: 'slide-7-cloud',
          src: 'slides/slide-7.png',
          top: 20,
          titleBanner: false,
        },
        {
          class: 'banner',
          src: 'banner/slide-7-title.png',
          top: -58,
          left: 34,
          titleBanner: true,
        },
      ],
    },
    {
      class: 'slide-8',
      left: 691,
      top: 0,
      slideSpeed: 0.6,
      stopSlide: true,
      activeElement: 7,
      navSwitchLeft: 17,
      navSwitchBottom: 6,
      slideGroup: [
        {
          class: 'hands-s',
          src: 'slides/slide-8.png',
          top: 20,
          titleBanner: false,
          extraInfo: [
            {
              id: '0',
              class: 'description-page',
              top: '',
              left: '',
              group: [
                {
                  class: 'description',
                  src: 'slides/slide-8-text-1.png',
                },
              ],
            },
            {
              id: '1',
              class: 'description-page',
              top: '',
              left: '',
              group: [
                {
                  class: 'description',
                  src: 'slides/slide-8-text-2.png',
                },
              ]
            },
          ]
        },
        {
          class: 'banner',
          src: 'banner/slide-8-title.png',
          top: -58,
          left: 43,
          titleBanner: true,
        },
      ],
    },
    {
      class: 'slide-9',
      left: 789,
      top: 0,
      slideSpeed: 0.6,
      stopSlide: true,
      activeElement: 8,
      navSwitchLeft: 20,
      navSwitchBottom: 6,
      slideGroup: [
        {
          class: 'hands',
          src: 'slides/slide-9.png',
          top: 20,
          titleBanner: false,
        },
        {
          class: 'banner',
          src: 'banner/slide-9-title.png',
          top: -58,
          left: 43,
          titleBanner: true,
        },
      ],
    },
    {
      class: 'slide-10',
      left: 897,
      top: 0,
      slideSpeed: 0.6,
      stopSlide: true,
      activeElement: 9,
      navSwitchLeft: 15,
      navSwitchBottom: 6,
      slideGroup: [
        {
          class: 'final-slide',
          src: 'slides/slide-10.png',
          top: 20,
          titleBanner: false,
        },
        {
          class: 'banner',
          src: 'banner/slide-10-title.png',
          top: -58,
          left: 34,
          titleBanner: true,
        },
      ],
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
      left: 905,
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

  slideDelay = 0;
  treeDelay = 0;
  decorationDelay = 0;

  navOpacity = 0;


  mainPosition = 0;

  currentSlide = 0;
  bannerShowHide = 0;
  buildingMove = 0;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = true;
    }, 3000);
    // }, 7000);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let slideDelay_1,  // init slide delays
      slideDelay_2,
      slideDelay_3,
      slideDelay_4,
      slideDelay_5,
      slideDelay_6,
      slideDelay_7,
      slideDelay_8;

    let treeDelay_1,  // init tree delays
      treeDelay_2,
      treeDelay_3;

    let nloDelay;   // init decorations delays

    let navShow_1, navHide_1,  // init slide nav items opacity
      navShow_2, navHide_2,
      navShow_3, navHide_3,
      navShow_4, navHide_4,
      navShow_5, navHide_5,
      navShow_6, navHide_6,
      navShow_7, navHide_7,
      navShow_8, navHide_8,
      navShow_9;

    let bannerShow_1,  bannerHide_1,  // init banner show hide constants
      bannerShow_2, bannerHide_2,
      bannerShow_3, bannerHide_3,
      bannerShow_4, bannerHide_4,
      bannerShow_5, bannerHide_5,
      bannerShow_6, bannerHide_6,
      bannerShow_7, bannerHide_7,
      bannerShow_8, bannerHide_8,
      bannerShow_9;
    const screenSize = window.outerWidth; // 1920  1.28
    const contentSpeed = window.pageYOffset * 0.7;
    this.mainPosition = window.pageYOffset * 0.7;
    this.bgSpeed = contentSpeed / 5.5;
    this.cloudsSpeed = contentSpeed / 4.1;
    this.decorationSpeed = contentSpeed * 0.92;
    this.treeSpeed = contentSpeed * 0.9;
    this.slideOneLeft = contentSpeed * 2;
    // Slide delays
    if (contentSpeed < 1500) {
      slideDelay_1 = 0;
      treeDelay_1 = 0;
    }

    if (contentSpeed > 1500 && contentSpeed < 2500) {
      slideDelay_1 = ((contentSpeed - 1500) * 2) * 0.6;
      treeDelay_1 = ((contentSpeed - 1500) * 0.6);
    }

    if (contentSpeed > 2500) {
      slideDelay_1 = 1195;
      treeDelay_1 = 600;
    }

    if (contentSpeed < 3800) {
      slideDelay_2 = 0;
    }

    if (contentSpeed > 3800 && contentSpeed < 4800) {
      slideDelay_2 = ((contentSpeed - 3800) * 2) * 0.6;
    }

    if (contentSpeed > 4800) {
      slideDelay_2 = 1195;
    }

    if (contentSpeed < 6200) {
      slideDelay_3 = 0;
    }

    if (contentSpeed > 6200 && contentSpeed < 7200) {
      slideDelay_3 = ((contentSpeed - 6200) * 2) * 0.6;
    }

    if (contentSpeed > 7200) {
      slideDelay_3 = 1195;
    }

    if (contentSpeed < 8800) {
      slideDelay_4 = 0;
    }

    if (contentSpeed > 8800 && contentSpeed < 9800) {
      slideDelay_4 = ((contentSpeed - 8800) * 2) * 0.6;
    }

    if (contentSpeed > 9800) {
      slideDelay_4 = 1195;
    }

    if (contentSpeed < 11200) {
      slideDelay_5 = 0;
    }

    if (contentSpeed > 11200 && contentSpeed < 12200) {
      slideDelay_5 = ((contentSpeed - 11200) * 2) * 0.6;
    }

    if (contentSpeed > 12200) {
      slideDelay_5 = 1195;
    }

    if (contentSpeed < 13860) {
      slideDelay_6 = 0;
    }

    if (contentSpeed > 13860 && contentSpeed < 14860) {
      slideDelay_6 = ((contentSpeed - 13860) * 2) * 0.6;
    }

    if (contentSpeed > 14860) {
      slideDelay_6 = 1195;
    }

    if (contentSpeed < 16450) {
      slideDelay_7 = 0;
    }

    if (contentSpeed > 16450 && contentSpeed < 17450) {
      slideDelay_7 = ((contentSpeed - 16450) * 2) * 0.6;
    }

    if (contentSpeed > 17450) {
      slideDelay_7 = 1195;
    }

    if (contentSpeed < 19000) {
      slideDelay_8 = 0;
    }

    if (contentSpeed > 19000 && contentSpeed < 20000) {
      slideDelay_8 = ((contentSpeed - 19000) * 2) * 0.6;
    }

    if (contentSpeed > 20000) {
      slideDelay_8 = 1195;
    }

    // decorations delay
    if (contentSpeed > 11700) {
      nloDelay = (contentSpeed - 11700) / 2;
    } else {
      nloDelay = 0;
    }

    if (contentSpeed < 10800) {
      treeDelay_2 = 0;
    }

    if (contentSpeed > 10800 && contentSpeed < 13000) {
      treeDelay_2 = ((contentSpeed - 10800) * 0.35);
    }

    if (contentSpeed > 13000) {
      treeDelay_2 = 770;
    }

    if (contentSpeed > 3000) {
      this.planeSpeed = (contentSpeed - 3000) / 8;
    }

    if (contentSpeed > 20000) {
      treeDelay_3 = ((contentSpeed - 20000) / 2);
    } else {
      treeDelay_3 = 0;
    }


    // banner show hide

    if (contentSpeed < 900) {
      bannerShow_1 = 0;
      navShow_1 = 0;
      this.currentSlide = 0;

    }

    if (contentSpeed > 900 && contentSpeed < 1150) {
      bannerShow_1 = (contentSpeed - 900) / 0.6;
      navShow_1 = (contentSpeed - 900) / 250;
      this.currentSlide = 1;
    }

    if (contentSpeed > 1150) {
      bannerShow_1 = 416;
      navShow_1 = 1;
    }

    if (contentSpeed < 2800) {
      bannerHide_1 = 0;
      navHide_1 = 0;
    }

    if (contentSpeed > 2800 && contentSpeed < 3050) {
      bannerHide_1 = (contentSpeed - 2800) / -0.6;
      navHide_1 = (contentSpeed - 2800) / -250;
      this.currentSlide = 1;
    }

    if (contentSpeed > 3050) {
      bannerHide_1 = -416;
      navHide_1 = -1;
    }

    if (contentSpeed < 3500) {
      bannerShow_2 = 0;
      navShow_2 = 0;
    }

    if (contentSpeed > 3250 && contentSpeed < 3500) {
      bannerShow_2 = (contentSpeed - 3250) / 0.6;
      navShow_2 = (contentSpeed - 3250) / 250;
      this.currentSlide = 2;
    }

    if (contentSpeed > 3500) {
      bannerShow_2 = 416;
      navShow_2 = 1;
    }

    if (contentSpeed < 5100) {
      bannerHide_2 = 0;
      navHide_2 = 0;
    }

    if (contentSpeed > 5100 && contentSpeed < 5350) {
      bannerHide_2 = (contentSpeed - 5100) / -0.6;
      navHide_2 = (contentSpeed - 5100) / -250;
      this.currentSlide = 2;
    }

    if (contentSpeed > 5350) {
      bannerHide_2 = -416;
      navHide_2 = -1;
    }


    if (contentSpeed < 5850) {
      bannerShow_3 = 0;
      navShow_3 = 0;
    }

    if (contentSpeed > 5850 && contentSpeed < 6100) {
      bannerShow_3 = (contentSpeed - 5850) / 0.6;
      navShow_3 = (contentSpeed - 5850) / 250;
      this.currentSlide = 3;
    }

    if (contentSpeed > 6100) {
      bannerShow_3 = 416;
      navShow_3 = 1;
    }


    if (contentSpeed < 7500) {
      bannerHide_3 = 0;
      navHide_3 = 0;
    }

    if (contentSpeed > 7500 && contentSpeed < 7750) {
      bannerHide_3 = (contentSpeed - 7500) / -0.6;
      navHide_3 = (contentSpeed - 7500) / -250;
      this.currentSlide = 3;
    }

    if (contentSpeed > 7750) {
      bannerHide_3 = -416;
      navHide_3 = -1;
    }

    if (contentSpeed < 8400) {
      this.showFinalBuilding = false;
      this.buildingAnimate = false;
      bannerShow_4 = 0;
      navShow_4 = 0;
    }

    if (contentSpeed > 8400 && contentSpeed < 8650) {
      bannerShow_4 = (contentSpeed - 8400) / 0.6;
      navShow_4 = (contentSpeed - 8400) / 250;
      this.currentSlide = 4;
    }

    if (contentSpeed > 8650) {
      bannerShow_4 = 416;
      navShow_4 = 1;
    }

    if (contentSpeed < 10100) {
      bannerHide_4 = 0;
      navHide_4 = 0;
    }

    if (contentSpeed > 10100 && contentSpeed < 10350) {
      bannerHide_4 = (contentSpeed - 10100) / -0.6;
      navHide_4 = (contentSpeed - 10100) / -250;
      this.currentSlide = 4;
    }

    if (contentSpeed > 10350) {
      bannerHide_4 = -416;
      navHide_4 = -1;
    }

    if (contentSpeed < 11000) {
      bannerShow_5 = 0;
      navShow_5 = 0;
    }

    if (contentSpeed > 11000 && contentSpeed < 11250) {
      bannerShow_5 = (contentSpeed - 11000) / 0.6;
      navShow_5 = (contentSpeed - 11000) / 250;

      this.buildingAnimate = true;
      this.currentSlide = 5;
      setTimeout(() => {
        this.showFinalBuilding = true;
        this.buildingAnimate = false;
      }, 3600);
    }

    if (contentSpeed > 11250) {
      bannerShow_5 = 416;
      navShow_5 = 1;
    }

    if (contentSpeed < 12450) {
      bannerHide_5 = 0;
      navHide_5 = 0;
    }

    if (contentSpeed > 12450 && contentSpeed < 12700) {
      bannerHide_5 = (contentSpeed - 12450) / -0.6;
      navHide_5 = (contentSpeed - 12450) / -250;
      this.currentSlide = 5;
    }

    if (contentSpeed > 12700) {
      bannerHide_5 = -416;
      navHide_5 = -1;
    }

    if (contentSpeed < 13200) {
      bannerShow_6 = 0;
      navShow_6 = 0;
    }

    if (contentSpeed > 13200 && contentSpeed < 13450) {
      bannerShow_6 = (contentSpeed - 13200) / 0.6;
      navShow_6 = (contentSpeed - 13200) / 250;

      this.slide_4TabsCounter = 0;
      this.currentSlide = 6;
    }

    if (contentSpeed > 13450) {
      bannerShow_6 = 416;
      navShow_6 = 1;
    }

    if (contentSpeed < 15100) {
      bannerHide_6 = 0;
      navHide_6 = 0;
    }

    if (contentSpeed > 15100 && contentSpeed < 15350) {
      bannerHide_6 = (contentSpeed - 15100) / -0.6;
      navHide_6 = (contentSpeed - 15100) / -250;
      this.currentSlide = 6;
    }

    if (contentSpeed > 15350) {
      bannerHide_6 = -416;
      navHide_6 = -1;
    }

    if (contentSpeed < 16200) {
      bannerShow_7 = 0;
      navShow_7 = 0;
    }

    if (contentSpeed > 16200 && contentSpeed < 16450) {
      bannerShow_7 = (contentSpeed - 16200) / 0.6;
      navShow_7 = (contentSpeed - 16200) / 250;

      this.currentSlide = 7;
    }

    if (contentSpeed > 16450) {
      bannerShow_7 = 416;
      navShow_7 = 1;
    }

    if (contentSpeed < 17750) {
      bannerHide_7 = 0;
      navHide_7 = 0;
    }

    if (contentSpeed > 17750 && contentSpeed < 18000) {
      bannerHide_7 = (contentSpeed - 17750) / -0.6;
      navHide_7 = (contentSpeed - 17750) / -250;
      this.currentSlide = 7;
    }

    if (contentSpeed > 18000) {
      bannerHide_7 = -416;
      navHide_7 = -1;
    }

    if (contentSpeed < 18600) {
      bannerShow_8 = 0;
      navShow_8 = 0;
    }

    if (contentSpeed > 18600 && contentSpeed < 18850) {
      bannerShow_8 = (contentSpeed - 18600) / 0.6;
      navShow_8 = (contentSpeed - 18600) / 250;

      this.currentSlide = 8;
    }

    if (contentSpeed > 18850) {
      bannerShow_8 = 416;
      navShow_8 = 1;
    }

    if (contentSpeed < 20300) {
      bannerHide_8 = 0;
      navHide_8 = 0;
    }

    if (contentSpeed > 20300 && contentSpeed < 20550) {
      bannerHide_8 = (contentSpeed - 20300) / -0.6;
      navHide_8 = (contentSpeed - 20300) / -250;
      this.currentSlide = 8;
    }

    if (contentSpeed > 20550) {
      bannerHide_8 = -416;
      navHide_8 = -1;
    }

    if (contentSpeed < 21400) {
      bannerShow_9 = 0;
      navShow_9 = 0;
    }

    if (contentSpeed > 21400 && contentSpeed < 21650) {
      bannerShow_9 = (contentSpeed - 21400) / 0.6;
      navShow_9 = (contentSpeed - 21400) / 250;

      this.currentSlide = 9;
    }

    if (contentSpeed > 21650) {
      bannerShow_9 = 416;
      navShow_9 = 1;
    }

    this.bannerShowHide = bannerShow_1 + bannerHide_1 + bannerShow_2 + bannerHide_2 +
      bannerShow_3 + bannerHide_3 + bannerShow_4 + bannerHide_4 + bannerShow_5 + bannerHide_5 +
      bannerShow_6 + bannerHide_6 + bannerShow_7 + bannerHide_7 + bannerShow_8 + bannerHide_8
      + bannerShow_9;

    this.slideDelay = slideDelay_1 + slideDelay_2 + slideDelay_3 + slideDelay_4
      + slideDelay_5 + slideDelay_6 + slideDelay_7 + slideDelay_8;
    this.treeDelay = treeDelay_1 + treeDelay_2 + treeDelay_3;
    this.decorationDelay = nloDelay;
    this.navOpacity = navShow_1 + navHide_1 + navShow_2 + navHide_2 + navShow_3 +
      navHide_3 + navShow_4 + navHide_4 + navShow_5 + navHide_5 + navShow_6 + navHide_6 +
      navShow_7 + navHide_7 + navShow_8 + navHide_8 + navShow_9;
  }

  prevTab(status) {
    if (status !== true) {
      this.slide_4TabsCounter -= 1;
    }
  }

  nextTab(status) {
    if (status !== true) {
      this.slide_4TabsCounter += 1;
    }
  }

  prevSlide(status) {
    if (this.kong_animation !== true) {
      if (status !== true) {
        this.buildingMove -= 303;
        this.slide_7StaresCounter -= 1;
        this.kong_animation = true;
        setTimeout(() => {
          this.kong_animation = false;
        }, 1000);
      }
    }
  }

  nextSlide(status) {
    if (this.kong_animation !== true) {
      if (status !== true) {
        this.buildingMove += 303;
        this.slide_7StaresCounter += 1;
        this.kong_animation = true;
        setTimeout(() => {
          this.kong_animation = false;
        }, 1000);
      }
    }
  }

  public scrollTo(target) {
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: target,
    });
  }
}
