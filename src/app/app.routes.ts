import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' }
];