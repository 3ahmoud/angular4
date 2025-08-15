import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/posts">Posts</a> |
      <a routerLink="/login">Login</a>
    </nav>
  `
})
export class NavbarComponent {}