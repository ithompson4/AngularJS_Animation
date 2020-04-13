import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { WhyAngularComponent } from './why-angular/why-angular.component';
import { WebskillsComponent } from './webskills/webskills.component';
import { ListComponent } from './list/list.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    WhyAngularComponent,
    WebskillsComponent,
    ListComponent,
    OpenCloseComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'image', component: ImageComponent, data: {animation: 'ImagePage'} },
      { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
      { path: 'webskills', component: WebskillsComponent, data: {animation: 'WebSkillsPage'} },
      { path: 'why-angular', component: WhyAngularComponent, data: {animation: 'WhyAngularPage'} },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
