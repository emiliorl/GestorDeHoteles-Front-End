import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  public user: User;
  public optionsRol = ['ADMIN', 'ADMIN_HOTEL', 'USER'];
  public userLogg;

  constructor(private restUser:RestUserService) {
    this.user = new User('','','','','',null,'','','');
    this.userLogg = this.restUser.getUser();
  }

  ngOnInit(): void {
  }

  onSubmit(statusForm){
    console.log(this.user);
  }

}
