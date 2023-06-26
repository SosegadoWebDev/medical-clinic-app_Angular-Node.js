import { Component, OnInit } from '@angular/core';

// App Services
import { SidebarService } from 'src/app/components/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public menuItems: Array<any>;

  constructor(public sidebarService: SidebarService) {
    this.menuItems = sidebarService.menu;

    console.log(this.menuItems);
  }

  ngOnInit() { }

}
