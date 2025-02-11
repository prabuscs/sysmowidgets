import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { SysmoGenderComponent } from '../components/sysmo-gender/sysmo-gender.component';
import { SysmoTitleComponent } from '../components/sysmo-title/sysmo-title.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    SysmoTitleComponent,
    SysmoGenderComponent,
  ],
})
export class HomePage {
  gender: string = 'male';
  constructor() {}

  // Method: Handle title change and gender update
  onTitleChanged(event: string): void {
    console.log(event);
    try {
      switch (event) {
        case 'Mr':
          this.gender = 'male'; // Male
          break;
        case 'Ms':
          this.gender = 'female'; // Female
          break;
        case 'Others':
          this.gender = 'others'; // Others
          break;
        default:
          this.gender = 'male'; // Default to Male, if somethig is wrong
          break;
      }
    } catch (error) {
      console.error('Erron updating gender: ', error);
    }
  }
}
