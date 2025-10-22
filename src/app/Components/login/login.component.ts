import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { MessageService } from '../../Services/message.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private api:ApiService, private message: MessageService){}
  login(){
    this.message.show('danger', "Hiba", 'Itt bizony rosszul működik a mutatvány.')
  }
}
