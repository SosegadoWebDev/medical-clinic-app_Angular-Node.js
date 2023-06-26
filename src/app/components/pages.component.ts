import { Component, OnInit } from '@angular/core';

// App Services
import { SettingService } from './services/setting.service';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');

  constructor(private settingService: SettingService) { }

  ngOnInit() {
    customInitFunctions();
  }
}
