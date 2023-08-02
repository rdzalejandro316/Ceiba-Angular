import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';  
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './shared/services/login/login.service';



const components = [
    LoginComponent
]

@NgModule({
    imports: [       
        LoginRoutingModule,  
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [        
        LoginService
    ],
    declarations: [...components]
})
export class LoginModule {
}
