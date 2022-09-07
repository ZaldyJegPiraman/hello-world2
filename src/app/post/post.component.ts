import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: any;
  constructor(private service: PostService) {}
  ngOnInit(): void {
    this.service.getAll().subscribe(
      (posts) => {
        this.posts = posts;
      },
      (error: Response) => {
        if (error.status === 400) {
          // this.form.setErrors(error.json());
        } else throw error;
      }
    );
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post).subscribe(
      (posts) => {
        post.id = posts.id;
        console.log(posts);
      },
      (error) => {
        this.posts.splice(0, 1);
        alert(error);
      }
    );
  }
  updatePost(post: any) {
    this.service.update(post).subscribe((posts) => {
      console.log(posts);
    });
  }
  deletePost(post: any) {
    // let index = this.posts.indexOf(post);
    // this.posts.splice(index, 1);

    // this.service.delete(post.id).subscribe(
    //   (posts) => {},
    //   (error) => {
    //     this.posts.splice(index, 0, post);
    //     alert(error);
    //   }
    // );

    this.service.delete(post.id);
  }
}
