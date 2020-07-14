import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { LoginComponent } from './login.component';
import { UserService } from '../shared/services/user.service';

@NgModule({
    declarations: [LoginComponent],
    imports: [ MaterialModule ],
    exports: [],
    providers: [UserService]
})
export class LoginModule {}
