import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})

export class PostCreateComponent{
  enteredTitle = '';
  enteredContent = '';


  constructor(public postsSevice: PostsService){}
  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
  this.postsSevice.addPost(form.value.title, form.value.content);
  form.resetForm();
  }

}
