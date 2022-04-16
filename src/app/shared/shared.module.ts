// Angular Materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatInputModule} from '@angular/material/input';

//Modiles
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
    ]
})
export class SharedModule { }
