import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Subject }from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './post.model';


@Injectable({providedIn: 'root'})
export class PostsService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();


 constructor(private http: HttpClient) {}
    getPosts() {
       this.http.get<{message: string, posts: any}>('http://localhost:3000/api/posts')
       
       .pipe(map((postData) => {
           return postData.posts.map(post => {
               return {
                id: post._id,
                   title: post.title,
                   content: post.content,
                   diag: post.diag,
                   his_fin_1_1 : post.his_fin_1_1,
                   his_fin_1_2 : post.his_fin_1_2,
                   his_fin_1_3 : post.his_fin_1_3,
                   phy_ex_1_1: post.phy_ex_1_1,
                   phy_ex_1_2: post.phy_ex_1_2,
                   phy_ex_1_3: post.phy_ex_1_3,

                   diag2: post.diag2,
                   his_fin_2_1 : post.his_fin_2_1,
                   his_fin_2_2 : post.his_fin_2_2,
                   his_fin_2_3 : post.his_fin_2_3,
                   phy_ex_2_1: post.phy_ex_2_1,
                   phy_ex_2_2: post.phy_ex_2_2,
                   phy_ex_2_3: post.phy_ex_2_3,

                   diag3: post.diag3,
                   his_fin_3_1 : post.his_fin_3_1,
                   his_fin_3_2 : post.his_fin_3_2,
                   his_fin_3_3 : post.his_fin_3_3,
                   phy_ex_3_1: post.phy_ex_3_1,
                   phy_ex_3_2: post.phy_ex_3_2,
                   phy_ex_3_3: post.phy_ex_3_3,

                   diag_study1: post.diag_study1,
                   diag_study2: post.diag_study2,
                   diag_study3: post.diag_study3,

                   email : post.email

                  
               };
           })
       }))
       .subscribe(transformedPosts => {
this.posts = transformedPosts;
this.postsUpdated.next([...this.posts]); //doubt
        });
    }

    getPostUpdatedListener(){
        return this.postsUpdated.asObservable();
    }

    addPost(title: string, content: string, diag: string, 
         his_fin_1_1 : string,  his_fin_1_2 : string,  his_fin_1_3 : string,
         phy_ex_1_1 : string, phy_ex_1_2 : string, phy_ex_1_3 : string, 

         diag2: string,
         his_fin_2_1 : string,  his_fin_2_2 : string,  his_fin_2_3 : string,
         phy_ex_2_1 : string, phy_ex_2_2 : string, phy_ex_2_3 : string, 

         diag3: string,
         his_fin_3_1 : string,  his_fin_3_2 : string,  his_fin_3_3 : string,
         phy_ex_3_1 : string, phy_ex_3_2 : string, phy_ex_3_3 : string, 

         diag_study1: string, diag_study2: string, diag_study3: string, 

         email: string
         ) {
        const post: Post = {id: null, title: title, content: content, diag: diag, 
            his_fin_1_1 : his_fin_1_1, his_fin_1_2 : his_fin_1_2, his_fin_1_3 : his_fin_1_3,
            phy_ex_1_1: phy_ex_1_1,  phy_ex_1_2: phy_ex_1_2,  phy_ex_1_3: phy_ex_1_3,

            diag2: diag2,
            his_fin_2_1 : his_fin_2_1, his_fin_2_2 : his_fin_2_2, his_fin_2_3 : his_fin_2_3,
            phy_ex_2_1: phy_ex_2_1,  phy_ex_2_2: phy_ex_2_2,  phy_ex_2_3: phy_ex_2_3,

            diag3: diag3,
            his_fin_3_1 : his_fin_3_1, his_fin_3_2 : his_fin_3_2, his_fin_3_3 : his_fin_3_3,
            phy_ex_3_1: phy_ex_3_1,  phy_ex_3_2: phy_ex_3_2,  phy_ex_3_3: phy_ex_3_3,

            diag_study1: diag_study1, diag_study2: diag_study2, diag_study3: diag_study3,

            email: email
         }
        this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts', post)
        .subscribe(responseData => {
            console.log(responseData.message);
       const id = responseData.postId;
       post.id = id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    });
}

deletePost(postId: string) {
    this.http.delete('http://localhost:3000/api/posts/' + postId)
    .subscribe(() => {
        console.log('DELETED');
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
    });
}
}
