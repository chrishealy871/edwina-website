import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './component/home/home.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import { HeaderComponent } from '../shared/header/header.component';
import {Routing} from './app-routing.module';
import { FooterComponent } from '../shared/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
