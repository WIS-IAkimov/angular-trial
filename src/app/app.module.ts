import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainContainer } from './containers/main';
import { HeaderComponent } from './components/header';
import { ProjectCardComponent } from './components/project-card';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    MainContainer,
    HeaderComponent,
    ProjectCardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
