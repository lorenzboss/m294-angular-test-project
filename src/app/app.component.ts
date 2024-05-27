import { Component } from '@angular/core';
import { AppAuthService } from './service/app.auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-init';

  constructor(
    private authService: AppAuthService,
    public oauthService: OAuthService
  ) {}

  login() {
    console.log('login');

    this.authService.login();
  }
}
