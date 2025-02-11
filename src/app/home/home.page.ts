import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { SysmoGenderComponent } from '../components/sysmo-gender/sysmo-gender.component';
import { SysmoTitleComponent } from '../components/sysmo-title/sysmo-title.component';
import { Gender } from '../components/sysmo-gender/gender.enum';
import { Title } from '../components/sysmo-title/title.enum';

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
  gender: string = Gender.Male;
  constructor() {}

  // Method: Handle title change and gender update
  onTitleChanged(event: string): void {
    try {
      switch (event) {
        case Title.mr:
          this.gender = Gender.Male; // Male
          break;
        case Title.ms:
          this.gender = Gender.Female; // Female
          break;
        case Title.others:
          this.gender = Gender.Others; // Others
          break;
        default:
          this.gender = Gender.Others; // Default to Male, if somethig is wrong
          break;
      }
    } catch (error) {
      console.error('Erron updating gender: ', error);
    }
  }
}
