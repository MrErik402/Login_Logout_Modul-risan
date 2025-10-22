import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItem } from '../../Interfaces/NavItem';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  navItems:NavItem[] = [];

  ngOnInit(): void {
    this.setupMenu();
  }

  setupMenu(){
    this.navItems = [
      {name: 'Home', url: '/home', icon: 'bi-house-fill'},
      {name: 'Login', url: '/login', icon: 'bi-door-open-fill'},
      {name: 'Registration', url: '/registration', icon: 'bi-person-plus-fill'},
    ]
  }

}
