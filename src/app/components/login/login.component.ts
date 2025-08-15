import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="onLogin()">
      <label>Username:</label>
      <input [(ngModel)]="username" name="username" required>
      <br>
      <label>Password:</label>
      <input [(ngModel)]="password" name="password" type="password" required>
      <br>
      <button type="submit">Login</button>
      <p *ngIf="errorMessage" style="color:red">{{errorMessage}}</p>
    </form>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}

onLogin() {
  this.userService.login(this.username, this.password).subscribe(users => {
    if (users.length > 0) {
      const loggedUser = users[0]; // أول مستخدم رجع من API
      localStorage.setItem('userId', loggedUser.id); // نخزن الـ ID
      this.router.navigate(['/posts']);
    } else {
      this.errorMessage = 'Username or password is incorrect!';
    }
  });
}
}