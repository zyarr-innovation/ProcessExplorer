import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCardModule, 
         MatButtonModule,
         MatTooltipModule,
         MatToolbarModule,
         MatIconModule,
         MatSidenavModule,
         MatExpansionModule  } from '@angular/material';

import {FlexLayoutModule}  from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppFileNotFoundComponent } from './app.FileNFound';
import { AppFolderComponent } from 'src/folder/app.folder.component';
import { AppFileComponent } from 'src/file/app.file.component';
import {ProcessService } from './app.component.service';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', component: AppFileNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppFolderComponent,
    AppFileComponent,
    AppFileNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule ,
    MatSidenavModule,
    MatExpansionModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],  
  providers: [ProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
