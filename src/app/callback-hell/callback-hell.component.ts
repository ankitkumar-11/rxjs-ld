import { Component, OnInit } from '@angular/core';
import { DataService } from '../opertors/data.service';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-callback-hell',
  templateUrl: './callback-hell.component.html',
})
export class CallbackHellComponent implements OnInit {

  postList:any[]
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.getUserById(1).subscribe((user) => {
    //   console.log('user', user);
    //   this.dataService.getUserPostById(user.id).subscribe((posts) => {
    //     console.log('posts', posts);
    //     posts.forEach(post => {
    //       this.dataService.getCommentPostById(post.id).subscribe((comments) => {
    //         console.log('comments', comments);
    //         post['comments'] = comments;

    //       })
    //     });
    //     console.log({
    //       user,
    //       posts
    //     })
    //   })
    // })


    // You can see I wrote my second API call into subscribe of first one. Imagine we call few more APIs like this. Readability of code would be worsen because linearity of code is compromised. The calls are nested and calling APIs(or code) in such nested way is called callback hell.

    // this.dataService.getUserById(1).pipe(
    //   switchMap((user) => {
    //     return this.dataService.getUserPostById(user.id).pipe(
    //       switchMap((posts) => {
    //         // Create an array of observables to fetch comments for each post
    //         const commentObservables = posts.map((post) => {
    //           return this.dataService.getCommentPostById(post.id);
    //         });
    
    //         // Use forkJoin to combine all comment observables into one observable
    //         return forkJoin(commentObservables).pipe(
    //           map((commentsArray) => {
    //             // Map each post with its corresponding comments
    //             const postsWithComments = posts.map((post, index) => {
    //               return {
    //                 ...post,
    //                 comments: commentsArray[index],
    //               };
    //             });
    
    //             // Create the final object with user, posts, and comments
    //             return {
    //               user: user,
    //               posts: postsWithComments,
    //             };
    //           })
    //         );
    //       })
    //     );
    //   })
    // ).subscribe((result) => {
    //   console.log('User with Posts and Comments:', result);
    // });

    // Now if we somehow manage to remove callback hell our code will be linear and easier to understand for anyone. This is done by using higher order RxJX operators. 
  }

}
