import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewLandingComponent } from './components/view-landing/view-landing.component';
import { ViewLoginComponent } from './components/view-login/view-login.component';
import { LoginFormComponent } from './components/view-login/login-form/login-form.component';
import { ViewCreateAccountComponent } from './components/view-create-account/view-create-account.component';
import { CreateAccountFormComponent } from './components/view-create-account/create-account-form/create-account-form.component';
import { ViewUserHomepageComponent } from './components/view-user-homepage/view-user-homepage.component';
import { CharacterCardListComponent } from './components/view-user-homepage/character-card-list/character-card-list.component';
import { CharacterCardComponent } from './components/view-user-homepage/character-card-list/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewLandingComponent,
    ViewLoginComponent,
    LoginFormComponent,
    ViewCreateAccountComponent,
    CreateAccountFormComponent,
    ViewUserHomepageComponent,
    CharacterCardListComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
