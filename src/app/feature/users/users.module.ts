import { NgModule } from '@angular/core';
import { UsersRoutingModule} from './users-routing.module'
import { CreateUserComponent} from './create-user/create-user.component'
import { HomeUserComponent} from './home-user/home-user.component'
import { ListUsersComponent} from './list-users/list-users.component'
import { NavBarComponent} from './nav-bar/nav-bar.component'
import { InterceptorReqresService } from '../../shared/service/interceptor-reqres.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersService } from './create-user/shared/services/users/users.service';
import { CommonModule } from '@angular/common';  
import { FormsModule,ReactiveFormsModule } from '@angular/forms';  
import { SharedModule } from '../../shared/shared.module';


const components = [
    CreateUserComponent,
    HomeUserComponent,
    ListUsersComponent,
    NavBarComponent
]

@NgModule({
    imports: [    
        UsersRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        UsersService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorReqresService,
            multi: true
        }
    ],
    declarations: [components]
})

export class UsersModule {
    
}
