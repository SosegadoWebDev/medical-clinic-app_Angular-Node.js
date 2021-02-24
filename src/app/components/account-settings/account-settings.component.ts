import { Component, OnInit } from '@angular/core';

// App Services
import { SettingService } from '../services/setting.service';

@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html',
    styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

    public links: NodeListOf<Element>;

    constructor(private settingService: SettingService) { }

    ngOnInit() {
        this.links = document.querySelectorAll('.selector');
        this.settingService.checkCurrentTheme();
    }

    public changeTheme(theme: string): void {
        this.settingService.changeTheme(theme);
    }
}
