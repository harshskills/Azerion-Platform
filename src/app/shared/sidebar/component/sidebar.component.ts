import { Component, OnInit } from '@angular/core';
import { navItems } from './sidebar';
 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public navItems = navItems;
  result: any = [];

  
 constructor() {  }

  ngOnInit(): void {
    console.log(navItems);
  }

}
