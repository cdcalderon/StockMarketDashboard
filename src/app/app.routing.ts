import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//General
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

//Charts
import { Ng2ChartsComponent } from './pages/charts/ng2-charts/ng2-charts.component';

//Pages
import { BlankComponent } from './pages/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/error/pagenotfound.component';
import { SearchComponent } from './pages/search/search.component';

//Inbox
import { MailComponent } from './pages/mail/mail.component';
import { MailListComponent } from './pages/mail/mail-list/mail-list.component';
import { MailComposeComponent } from './pages/mail/mail-compose/mail-compose.component';
import { MailDetailComponent } from './pages/mail/mail-detail/mail-detail.component';

//Maps
import { GoogleMapsComponent } from './pages/maps/google/google-maps.component';
import { VectorMapsComponent } from './pages/maps/vector/vector-maps.component';
import { LeafletMapsComponent } from './pages/maps/leaflet/leaflet-maps.component';

//UI
import { IconsComponent } from './pages/ui/icons/icons.component';
import { ButtonsComponent } from './pages/ui/buttons/buttons.component';
import { TypographyComponent } from './pages/ui/typography/typography.component';
import { GridComponent } from './pages/ui/grid/grid.component';
import { CardsComponent } from './pages/ui/cards/cards.component';
import { TabsAccordionsComponent } from './pages/ui/tabs-accordions/tabs-accordions.component';
import { ComponentsComponent } from './pages/ui/components/components.component';
import { ListGroupComponent } from './pages/ui/list-group/list-group.component';
import { MediaObjectsComponent } from './pages/ui/media-objects/media-objects.component';

//Editors
import { FroalaComponent } from './pages/editors/froala/froala.component';
import { Ckeditor } from './pages/editors/ckeditor/ckeditor.component';

//Tables
import { BasicTablesComponent } from './pages/tables/basic-tables/basic-tables.component';
import { DynamicTablesComponent } from './pages/tables/dynamic-tables/dynamic-tables.component';

//Form elements
import { InputsComponent } from './pages/form-elements/inputs/inputs.component';
import { LayoutsComponent } from './pages/form-elements/layouts/layouts.component';
import { ValidationsComponent } from './pages/form-elements/validations/validations.component';
import { WizardComponent } from './pages/form-elements/wizard/wizard.component';

//My Components
import { GapsComponent } from './pages/gaps/gaps.component';
import { StockEarningComponent } from './pages/stock-earnings/stock.earnings.component';
import { StockQuoteComponent } from './pages/stock-quotes/stock.quote.component';

const appRoutes: Routes = [ 
  {
    path: '',
    redirectTo: '/pages/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: PagesComponent,
    children : [
      {
        path: ''
      },
      {
        path: 'blank',
        component: BlankComponent,
        data:{
          title: 'Blank Page'
        }
      },
      {
       path: 'dashboard',
       component: DashboardComponent,
       data:{
         title: 'Dashboard'
       }
      },
      {
       path: 'gaps',
       component: GapsComponent,
       data:{
         title: 'Gaps'
       }
      },
      {
       path: 'stock-earnings',
       component: StockEarningComponent,
       data:{
         title: 'Stock Earnings'
       }
      },
      {
        path: 'stockquote/:id',
        component: StockQuoteComponent,
        data:{
          title: 'Stock Quote'
        }
      },
      {
       path: 'ng2charts',
       component: Ng2ChartsComponent,
       data:{
         title: 'Ng2-Charts'
       }
      },
      {
       path: 'vectormaps',
       component: VectorMapsComponent,
       data:{
         title: 'Vector Maps'
       }
      },
      {
       path: 'googlemaps',
       component: GoogleMapsComponent,
       data:{
         title: 'Google Maps'
       }
      },
      {
       path: 'leafletmaps',
       component: LeafletMapsComponent,
       data:{
         title: 'Leaflet Maps'
       }
      },
      {
        path: 'icons',
        component: IconsComponent,
        data:{
          title: 'Icons'
        }
      },
      {
        path:'buttons',
        component: ButtonsComponent,
        data:{
          title: 'Buttons'
        }
      },
      {
        path:'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      },
      {
        path:'grid',
        component: GridComponent,
        data: {
          title: 'Grid'
        }
      },
      {
        path:'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path:'tabs-accordions',
        component: TabsAccordionsComponent,
        data: {
          title: 'Tabs & Accordions'
        }
      },    
      {
        path:'components',
        component: ComponentsComponent,
        data: {
          title: 'Components'
        }
      },
      {
        path:'list-group',
        component: ListGroupComponent,
        data: {
          title: 'List Group'
        }
      },
      {
        path:'media-objects',
        component: MediaObjectsComponent,
        data: {
          title: 'Media Objects'
        }
      },
      {
        path:'inputs',
        component: InputsComponent,
        data: {
          title: 'Form Inputs'
        }
      },
      {
        path:'layouts',
        component: LayoutsComponent,
        data: {
          title: 'Form Layouts'
        }
      },
      {
        path:'validations',
        component: ValidationsComponent,
        data: {
          title: 'Form Validations'
        }
      },
      {
        path:'wizard',
        component: WizardComponent,
        data: {
          title: 'Form Wizard'
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data:{
          title: 'Search Page'
        }
      },
      {
        path: 'froala-editor',
        component: FroalaComponent,
        data:{
          title: 'Froala Editor'
        }
      },
      {
        path: 'ckeditor',
        component: Ckeditor,
        data:{
          title: 'Ckeditor'
        }
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        data:{
          title: 'Calendar'
        }
      },
      {
        path: 'mail',
        component: MailComponent,
        data:{
          title: 'Mail'
        },
        children: [
          { path: '', redirectTo: 'mail-list/inbox', pathMatch: 'full' },
          { path: 'mail-list/:type', component: MailListComponent, data:{ title: 'Mail List'} },
          { path: 'mail-compose', component: MailComposeComponent },
          { path: 'mail-list/:type/:id', component: MailDetailComponent }          
        ]
      },
      {
        path: 'basic-tables',
        component: BasicTablesComponent,
        data:{
          title: 'Basic Tables'
        }
      },
      {
        path: 'dynamic-tables',
        component: DynamicTablesComponent,
        data:{
          title: 'Dynamic Tables'
        }
      }
    ]
  },

  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { 
      path: '**', 
      component: PageNotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);