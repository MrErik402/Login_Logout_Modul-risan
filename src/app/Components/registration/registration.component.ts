import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor(private api:ApiService){}
  register(){

  }
}
