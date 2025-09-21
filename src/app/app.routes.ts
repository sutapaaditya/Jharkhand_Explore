import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { GallerySecComponent } from './components/gallery-sec/gallery-sec.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'header',
    component: HeaderComponent
  },

  {
    path: 'contact-us',
    component: ContactUsComponent
  },

  {
  path : 'gallery-sec',
  component: GallerySecComponent
  },

  {
    path: 'about',
    component: AboutUsComponent
  },

  {
    path: 'footer',
    component: FooterComponent
  },


  {
    path: '**',
    component: NotFoundComponent
  }
];

