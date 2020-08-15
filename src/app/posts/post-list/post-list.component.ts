import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls:['./post-list.component.css']

})
export class PostListComponent implements OnInit , OnDestroy{
 /* posts = [
    {title:"First post", content:"This is the content of the post one!"},
    {title:"Second post", content:"This is the content of the post two!"},
    {title:"Third post", content:"This is the content of the post three!"},
    {title:"Fourth post", content:"This is the content of the post four!"},
  ]*/
   posts: Post[] = [];
   private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit(){
   this.postsService.getPosts();
    this.postsSub=this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
          this.posts = posts;
      });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
