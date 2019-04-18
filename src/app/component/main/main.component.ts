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
  slide_4TabsCounter = 0;
  loading: any;

  showCloudModal = false;
  showCafes = false;
  showPlaces = false;
  showAdvanced = false;

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
          class: 'hands',
          src: 'slides/slide-2.png',
          top: 20,
          slideSpeed: 0.6,
          stopSlide: true,
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
      ],
      slideDots: [
        {
          class: 'slide-photo',
          slideSpeed: 0.6,
          stopSlide: true,
          activeElement: 1
        }
      ]
    },
    {
      class: 'slide-3',
      left: 200,
      top: 0,
      slideGroup: [
        {
          class: 'hands',
          src: 'slides/slide-3.png',
          top: 20,
          slideSpeed: 0.6,
          stopSlide: true,
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
      slideDots: [
        {
          class: 'slide-photo',
          slideSpeed: 0.6,
          stopSlide: true,
          activeElement: 2
        }
      ]
    },
    {
      class: 'slide-4',
      left: 290,
      top: 0,
      slideGroup: [
        {
          class: 'slide-baners',
          src: 'slides/slide-4.png',
          top: 20,
          slideSpeed: 0.6,
          stopSlide: true,
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
                  src: 'praga-wild.png',
                },
                {
                  class: 'description',
                  src: 'praga.png',
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
                  src: 'london-wild.png',
                },
                {
                  class: 'description',
                  src: 'london.png',
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
                  src: 'edinburg-wild.png',
                },
                {
                  class: 'description',
                  src: 'edinburg.png',
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
                  src: 'ierusalim-wild.png',
                },
                {
                  class: 'description',
                  src: 'ierusalim.png',
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
                  src: 'singapur-wild.png',
                },
                {
                  class: 'description',
                  src: 'singapur.png',
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
                  src: 'sandiego-wild.png',
                },
                {
                  class: 'description',
                  src: 'sandiego.png',
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
                  src: 'moscow-wild.png',
                },
                {
                  class: 'description',
                  src: 'moscow.png',
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
      slideDots: [
        {
          class: 'slide-photo',
          slideSpeed: 0.6,
          stopSlide: true,
          activeElement: 3
        }
      ]
    },
    {
      class: 'slide-5',
      left: 397,
      top: 0,
      slideGroup: [
        {
          class: 'slide-photo',
          src: 'slides/slide-5.png',
          top: 20,
          slideSpeed: 0.6,
          stopSlide: true,
          titleBanner: false,
        },
        {
          class: 'banner',
          src: 'banner/slide-5-title.png',
          top: -58,
          left: 39,
          titleBanner: true,
        },
      ],
      slideDots: [
        {
          class: 'slide-photo',
          slideSpeed: 0.6,
          stopSlide: true,
          activeElement: 3
        }
      ]
    },
    {
      class: 'slide-6',
      left: 490,
      top: 0,
      slideGroup: [
        {
          class: 'slide-photo',
          src: 'slides/slide-6.png',
          top: 20,
          slideSpeed: 0.6,
          stopSlide: true,
          titleBanner: false,
        },
        {
          class: 'banner',
          src: 'banner/slide-6-title.png',
          top: -58,
          left: 39,
          titleBanner: true,
        },
      ],
      slideDots: [
        {
          class: 'slide-photo',
          slideSpeed: 0.6,
          stopSlide: true,
          activeElement: 3
        }
      ]
    },
    {
      class: 'slide-7',
      left: 627,
      top: 0,
      slideGroup: [
        {
          class: 'slide-photo',
          src: 'slides/slide-7-building.png',
          top: -20,
          slideSpeed: 0.6,
          stopSlide: true,
          titleBanner: false,
        },
        {
          class: 'banner',
          src: 'banner/slide-7-title.png',
          top: -58,
          left: 39,
          titleBanner: true,
        },
      ],
      slideDots: [
        {
          class: 'slide-photo',
          slideSpeed: 0.6,
          stopSlide: true,
          activeElement: 3
        }
      ]
    },
    {
      class: 'slide-8',
      left: 691,
      top: 0,
      slideGroup: [
        {
          class: 'slide-photo',
          src: 'slides/slide-8.png',
          top: -20,
          slideSpeed: 0.6,
          stopSlide: true,
          titleBanner: false,
        },
        {
          class: 'banner',
          src: 'banner/slide-8-title.png',
          top: -58,
          left: 39,
          titleBanner: true,
        },
      ],
      slideDots: [
        {
          class: 'slide-photo',
          slideSpeed: 0.6,
          stopSlide: true,
          activeElement: 3
        }
      ]
    },
    {
      class: 'slide-9',
      left: 794,
      top: 0,
      slideGroup: [
        {
          class: 'slide-photo',
          src: 'slides/slide-9.png',
          top: -20,
          slideSpeed: 0.6,
          stopSlide: true,
          titleBanner: false,
        },
        {
          class: 'banner',
          src: 'banner/slide-9-title.png',
          top: -58,
          left: 39,
          titleBanner: true,
        },
      ],
      slideDots: [
        {
          class: 'slide-photo',
          slideSpeed: 0.6,
          stopSlide: true,
          activeElement: 3
        }
      ]
    },
    {
      class: 'slide-10',
      left: 945,
      top: 0,
      slideGroup: [
        {
          class: 'slide-photo',
          src: 'slides/slide-10.png',
          top: -20,
          slideSpeed: 0.6,
          stopSlide: false,
          titleBanner: false,
        },
      ],
      slideDots: [
        {
          class: 'slide-photo',
          slideSpeed: 0.6,
          stopSlide: true,
          activeElement: 3
        }
      ]
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
  slideDelay_6 = 0;
  slideDelay_7 = 0;
  slideDelay_8 = 0;


  slideShow_1 = 0;
  slideShow_2 = 0;
  slideShow_3 = 0;

  slideHide_1 = 0;
  slideHide_2 = 0;
  slideHide_3 = 0;

  navShow_1 = 0;
  navShow_2 = 0;
  navShow_3 = 0;

  navHide_1 = 0;
  navHide_2 = 0;
  navHide_3 = 0;

  nloDelay = 0;

  mainPosition = 0;

  currentSlide = 0;

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

    if (contentSpeed < 900) {
      this.slideShow_1 = 0;
      this.navShow_1 = 0;
      this.currentSlide = 0;

    }

    if (contentSpeed > 900 && contentSpeed < 1150) {
      this.slideShow_1 = (contentSpeed - 900) / 0.6;
      this.navShow_1 = (contentSpeed - 900) / 250;
      this.currentSlide = 1;
    }

    if (contentSpeed > 1150) {
      this.slideShow_1 = 416;
      this.navShow_1 = 1;
    }

    if (contentSpeed < 2800) {
      this.slideHide_1 = 0;
      this.navHide_1 = 0;
    }

    if (contentSpeed > 2800 && contentSpeed < 3050) {
      this.slideHide_1 = (contentSpeed - 2800) / -0.6;
      this.navHide_1 = (contentSpeed - 2800) / -250;
      this.currentSlide = 1;
    }

    if (contentSpeed > 3050) {
      this.slideHide_1 = -416;
      this.navHide_1 = -1;
    }

    if (contentSpeed < 3500) {
      this.slideShow_2 = 0;
      this.navShow_2 = 0;
    }

    if (contentSpeed > 3250 && contentSpeed < 3500) {
      this.slideShow_2 = (contentSpeed - 3250) / 0.6;
      this.navShow_2 = (contentSpeed - 3250) / 250;
      this.currentSlide = 2;
    }

    if (contentSpeed > 3500) {
      this.slideShow_2 = 416;
      this.navShow_2 = 1;
    }

    if (contentSpeed < 5100) {
      this.slideHide_2 = 0;
      this.navHide_2 = 0;
    }

    if (contentSpeed > 5100 && contentSpeed < 5350) {
      this.slideHide_2 = (contentSpeed - 5100) / -0.6;
      this.navHide_2 = (contentSpeed - 5100) / -250;
      this.currentSlide = 2;
    }

    if (contentSpeed > 5350) {
      this.slideHide_2 = -416;
      this.navHide_2 = -1;
    }


    if (contentSpeed < 5850) {
      this.slideShow_3 = 0;
      this.navShow_3 = 0;
    }

    if (contentSpeed > 5850 && contentSpeed < 6100) {
      this.slideShow_3 = (contentSpeed - 5850) / 0.6;
      this.navShow_3 = (contentSpeed - 5850) / 250;
      this.currentSlide = 3;
    }

    if (contentSpeed > 6100) {
      this.slideShow_3 = 416;
      this.navShow_3 = 1;
    }


    if (contentSpeed < 7500) {
      this.slideHide_3 = 0;
      this.navHide_3 = 0;
    }

    if (contentSpeed > 7500 && contentSpeed < 7750) {
      this.slideHide_3 = (contentSpeed - 7500) / -0.6;
      this.navHide_3 = (contentSpeed - 7500) / -250;
      this.currentSlide = 3;
    }

    if (contentSpeed > 7750) {
      this.slideHide_3 = -416;
      this.navHide_3 = -1;
    }
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

  public scrollTo(target?: string) {
    const top = !target
      ? 0
      : (() => {
        try {
          const element: HTMLElement = document.querySelector(target);

          if (element) {
            return element.offsetTop - 100; // 100 - navbar height
          }
        } catch (e) {
        }

        return 0;
      })();

    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top,
    });
  }
}
