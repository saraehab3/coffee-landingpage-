
// import { Routes } from '@angular/router';
// import { Home } from './pages/home/home';

// export const routes: Routes = [
//      { path: '', component: Home },
//   { path: '**', redirectTo: '' }
// ];
// import { NgModule } from '@angular/core';
// import { RouterModule} from '@angular/router';
// import { Home } from './pages/home/home';
// import { Services } from './sections/services/services';
// import { ContactComponent } from './sections/contact/contact';
// import { About } from './sections/about/about';
// import { Routes } from '@angular/router';
//  export const routes: Routes = [
//   { path: '', component: Home },
//   { path: 'services', component: Services },
//   { path: 'about', component: About },
//   { path: 'contact', component: ContactComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './sections/services/services';
import { ContactComponent } from './sections/contact/contact';
import { About } from './sections/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'services', component: Services },
  { path: 'about', component: About },
  { path: 'contact', component: ContactComponent }
];

// AppRoutingModule optional لو محتاجة module forRoot
@NgModule({
  imports: [   RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
  }),RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
