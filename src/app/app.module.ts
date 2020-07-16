import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AuthGuardService } from './shared/services/auth-guard.service';
import { AlbumService } from './album/album.service';

import { AlbumListComponent } from './album/album-list/album-list.component';
import { AlbumDetailsComponent } from './album/album-details/album-details.component';
import { LayoutViewComponent } from './layout-view/layout-view.component';

import { layoutViewReducer } from './layout-view/layout.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumDetailsComponent,
    LayoutViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    StoreModule.forRoot({ layoutView: layoutViewReducer }),
    MaterialModule
  ],
  providers: [
    AuthGuardService,
    AlbumService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
