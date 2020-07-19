import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { PhotoListComponent } from './album/photo-list/photo-list.component';


const routes: Routes = [
      {
        path: '', component: AlbumListComponent,
        canActivate: [AuthGuardService] },
      { path: 'login', component: LoginComponent },
      {
        path: 'albums', component: AlbumListComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'albums/:albumId', component: PhotoListComponent,
        canActivate: [AuthGuardService]
      },
      { path: '**', component: AlbumListComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
