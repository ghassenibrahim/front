import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../shared/models/Blogs';
import { TokenStorageService } from '../shared/_services/token-storage.service';
import { UserService } from '../shared/_services/user.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})

export class AddblogComponent implements OnInit {
  blog: Blog = new Blog();
current:any;
  constructor(
    private service: UserService,
    private act: ActivatedRoute,
    private t: TokenStorageService,
    private route: Router) {


  }

  ngOnInit(): void {
  }
  saveBlog() {
    this.blog.createdOn=new Date();
    this.service.addBlog(this.blog).subscribe(
      data => { this.route.navigate(["/"]) },
      err => {
        console.log(JSON.toString())

      }
    )
  }
}
