import { UserService } from 'src/app/shared/_services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/_services/auth.service';
import { TokenStorageService } from '../shared/_services/token-storage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  response:any = { "id":""}

 // roles: string[] = [];

  constructor(private service:UserService,
    private authService: AuthService,
    private route:Router,private tokenStorage: TokenStorageService) { }

  ngOnInit() {

    if (this.tokenStorage.getToken()) {

      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken,data.email);
        //this.tokenStorage.saveUser(data.user);


        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.service.getUserRole().subscribe(
          data=>{
            this.tokenStorage.saveUserData(data.roles);

          }

        );
        this.route.navigateByUrl("/pos");

      },
      err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        Swal.fire("Error", "email or mot pass are not correct",err);

      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
