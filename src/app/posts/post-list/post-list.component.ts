import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls:['./post-list.component.css']

})
export class PostListComponent{
 /* posts = [
    {title:"First post", content:"This is the content of the post one!"},
    {title:"Second post", content:"This is the content of the post two!"},
    {title:"Third post", content:"This is the content of the post three!"},
    {title:"Fourth post", content:"This is the content of the post four!"},
  ]*/
  @Input() posts: Post[] = [];

}
