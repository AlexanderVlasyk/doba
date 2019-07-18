import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { NewsInnerComponent } from './news-inner/news-inner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { LibraryComponent } from './library/library.component';
import { ProjectsComponent } from './projects/projects.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';



const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news-inner', component: NewsInnerComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'all-projects', component: AllProjectsComponent },
 // { path: 'hero/:id', component: HeroDetailComponent },
  {
    path: 'main',
    component: MainComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NewsInnerComponent,
    MainComponent,
    AboutUsComponent,
    NewsComponent,
    ContactComponent,
    AboutPageComponent,
    LibraryComponent,
    ProjectsComponent,
    AllProjectsComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot(
     // <-- {apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'}
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    SlickCarouselModule,
    MatTabsModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
