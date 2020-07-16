import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { AuthGuardService } from './shared/services/auth-guard.service';


const routes: Routes = [
      { path: '', component: AlbumListComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'albums', component: AlbumListComponent,
        canActivate: [AuthGuardService]
     },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
