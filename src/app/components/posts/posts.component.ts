import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Posts</h2>
    <div *ngFor="let post of posts">
      <h3>{{post.title}}</h3>
      <p>{{post.content}}</p>
      <hr>
    </div>
  `
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  
  constructor(private postService: PostService) {}
ngOnInit() {
  const userId = localStorage.getItem('userId');
  if (userId) {
    this.postService.getPostsByUser(Number(userId)).subscribe(data => {
      this.posts = data;
    });
  }
}
}