export const menuItems = [
  {
    title: 'Dashboard',
    routerLink: 'dashboard',
    icon: 'ion-android-home',
    selected: false,
    expanded: false,
    order: 0
  }, 
  {
    title: 'Gaps',
    routerLink: 'gaps',
    icon: 'ion-android-home',
    selected: false,
    expanded: false,
    order: 100
  },
  {
    title: 'Charts',
    routerLink: 'charts',
    icon: 'ion-stats-bars',
    selected: false,
    expanded: false,
    order: 200,
    subMenu: [
      {
        title: 'Ng2-Charts',
        routerLink: 'ng2charts',
      },
    ]
  },
  {
    title: 'UI Features',
    routerLink: 'Ui',
    icon: 'ion-android-laptop',
    selected: false,
    expanded: false,
    order: 300,
    subMenu: [
      {
        title: 'Buttons',
        routerLink: 'buttons'
      },
      {
        title: 'Cards',
        routerLink: 'cards'
      },
      {
        title: 'Components',
        routerLink: 'components'
      },           
      {
        title: 'Icons',
        routerLink: 'icons'
      },
      {
        title: 'Grid',
        routerLink: 'grid'
      },
      {
        title: 'List Group',
        routerLink: 'list-group'
      },
      {
        title: 'Media Objects',
        routerLink: 'media-objects'
      },
      {
        title: 'Tabs & Accordions',
        routerLink: 'tabs-accordions'
      },
      {
        title: 'Typography',
        routerLink: 'typography'
      }
    ]
  },
  {
    title: 'Mail',
    routerLink: 'mail/mail-list/inbox',
    icon: 'ion-android-mail',
    selected: false,
    expanded: false,
    order: 330
  },
  {
    title: 'Calendar',
    routerLink: 'calendar',
    icon: 'ion-calendar',
    selected: false,
    expanded: false,
    order: 350
  }, 
  {
    title: 'Form Elements',
    routerLink: 'Forms',
    icon: 'ion-compose',
    selected: false,
    expanded: false,
    order: 400,
    subMenu: [
      {
        title: 'Form Inputs',
        routerLink: 'inputs'
      },
      {
        title: 'Form Layouts',
        routerLink: 'layouts'
      },
      {
        title: 'Form Validations',
        routerLink: 'validations'
      },
      {
        title: 'Form Wizard',
        routerLink: 'wizard'
      }
    ]
  },  
  {
    title: 'Tables',
    routerLink: 'Tables',
    icon: 'ion-grid',
    selected: false,
    expanded: false,
    order: 500,
    subMenu: [
      {
        title: 'Basic Tables',
        routerLink: 'basic-tables'
      },
      {
        title: 'Dynamic Tables',
        routerLink: 'dynamic-tables'
      }
    ]
  },
  {
    title: 'Editors',
    routerLink: 'Editors',
    icon: 'ion-edit',
    selected: false,
    expanded: false,
    order: 550,
    subMenu: [
      {
        title: 'Froala Editor',
        routerLink: 'froala-editor'
      },
      {
        title: 'Ckeditor',
        routerLink: 'ckeditor'
      }
    ]
  },
  {
    title: 'Maps',
    routerLink: 'Maps',
    icon: 'ion-ios-location-outline',
    selected: false,
    expanded: false,
    order: 600,
    subMenu: [
      {
        title: 'Vector Maps',
        routerLink: 'vectormaps'
      },
      {
        title: 'Google Maps',
        routerLink: 'googlemaps'
      },         
      {
        title: 'Leaflet Maps',
        routerLink: 'leafletmaps'
      }     
    ]
  },
  {
    title: 'Pages',
    routerLink: ' ',
    icon: 'ion-document',
    selected: false,
    expanded: false,
    order: 650,
    subMenu: [        
      {
        title: 'Login',
        routerLink: '/login'
      },
      {
        title: 'Register',
        routerLink: '/register'
      },
      {
        title: 'Blank Page',
        routerLink: 'blank'
      },
      {
        title: 'Error Page',
        routerLink: '/pagenotfound'
      }
    ]
  },
  {
    title: 'Menu Level 1',
    icon: 'ion-ios-more',
    selected: false,
    expanded: false,
    order: 700,
    subMenu: [
      {
        title: 'Menu Level 1.1',
        url: '#',
        disabled: true,
        selected: false,
        expanded: false
      },
      {
        title: 'Menu Level 1.2',
        url: '#',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          url: '#',
          disabled: true,
          selected: false,
          expanded: false
        }]
      }
    ]
  },
  {
    title: 'External Link',
    url: 'http://themeseason.com',
    icon: 'ion-android-exit',
    selected: false,
    expanded: false,
    order: 800,
    target: '_blank'
  }
];
