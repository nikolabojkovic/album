import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LightboxModule } from 'ngx-lightbox';

import { AuthGuardService } from './shared/services/auth-guard.service';
import { AlbumService } from './album/album.service';

import { layoutViewReducer } from './layout-view/layout.reducer';
import { searchReducer } from './search/search.reducer';

import { AlbumListComponent } from './album/album-list/album-list.component';
import { AlbumDetailsComponent } from './album/album-details/album-details.component';
import { LayoutViewComponent } from './layout-view/layout-view.component';
import { AlbumHeaderComponent } from './album/album-header/album-header.component';
import { PhotoListComponent } from './album/photo-list/photo-list.component';
import { PhotoDetailsComponent } from './album/photo-details/photo-details.component';
import { BackLinkComponent } from './back-liink/back-link.component';
import { SearchComponent } from './search/search.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumHeaderComponent,
    AlbumListComponent,
    AlbumDetailsComponent,
    PhotoListComponent,
    PhotoDetailsComponent,
    LayoutViewComponent,
    BackLinkComponent,
    SearchComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    StoreModule.forRoot({ layoutView: layoutViewReducer, search: searchReducer }),
    MaterialModule,
    InfiniteScrollModule,
    FontAwesomeModule,
    LightboxModule
  ],
  providers: [
    AuthGuardService,
    AlbumService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
