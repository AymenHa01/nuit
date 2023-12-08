import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: NewsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }