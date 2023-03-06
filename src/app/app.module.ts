import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { NotesComponent } from './components/notes/notes.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {OAuthModule} from 'angular-oauth2-oidc'
import { KeycloakSecurityService } from './services/keycloak-security.service';

export function kcFactory(kcSecurity:KeycloakSecurityService){
  return ()=>kcSecurity.init();
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EtudiantComponent,
    NotesComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot()
],
  providers: [
    {provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
