import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CONNECTION } from 'src/app/services/global';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  public user: User;
  public token;
  public possiblePass;
  public uri: string;
  public filesToUpload: Array<File>

  constructor(private restUser: RestUserService,
              private router: Router) {
    this.possiblePass = '';
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    delete this.user.password;
    delete this.user.rol;
    this.restUser.updateUser(this.user).subscribe((res:any) => {
      if(res.userUpdated){
        delete res.userUpdated.password;
        localStorage.setItem('user', JSON.stringify(res.userUpdated))
        alert(res.message)
      }else{
        alert(res.message);
        this.user = this.restUser.getUser();
      }
    },
      (error:any) => alert(error.error.message)
    )
  }

  deleteUser(){
    console.log(this.possiblePass)
  }

  fileChange(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

  uploadImage(){

  }
}
