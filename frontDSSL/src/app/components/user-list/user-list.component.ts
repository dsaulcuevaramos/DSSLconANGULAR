import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit{

  users: User[] = []; //esta variable se inyecta en el html
  constructor(private userService: UserService){ 
  }
  
  ngOnInit(): void {  //esto es lo que se llama en el html
      this.loadUsers();
  }
  
  //funcines 
  loadUsers(): void{
    //suscribe sirve para datos asincronos
    this.userService.getUsers().subscribe( 
      respuesta => this.users = respuesta,
      error => console.log("error en el loading ", error)
    );
  }

}
