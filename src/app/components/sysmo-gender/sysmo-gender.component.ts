import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  IonAvatar,
  IonChip,
  IonContent,
  IonLabel,
} from '@ionic/angular/standalone';
import { IconService } from '../shared/icon.service';
import { Gender } from './gender.enum';

@Component({
  selector: 'app-sysmo-gender',
  templateUrl: './sysmo-gender.component.html',
  styleUrls: ['./sysmo-gender.component.scss'],
  imports: [IonChip, IonLabel, IonContent, IonAvatar, CommonModule],
})
export class SysmoGenderComponent implements OnInit {
  @Input() gender: string = ''; // Optionally disabled the gender field

  users: Array<{ gender: Gender }> = [
    { gender: Gender.Male },
    { gender: Gender.Female },
    { gender: Gender.Others },
  ];

  maleIcon: string = '';
  femaleIcon: string = '';

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
  }

  // Method returns the icon based on gender
  getGenderIcon(gender: string): string {
    switch (gender) {
      case Gender.Male:
        return this.iconService.getIconUrl('male_icon');
      case Gender.Female:
        return this.iconService.getIconUrl('female_icon');
      case Gender.Others:
      default:
        return '';
    }
  }

  // Method returns the label based on gender
  getGenderLabel(gender: string): string {
    switch (gender) {
      case Gender.Male:
        return 'Male';
      case Gender.Female:
        return 'Female';
      case Gender.Others:
      default:
        return 'Others';
    }
  }

  // Method checks the index and disables the gender
  shouldDisableGender(nIndex: number): boolean {
    switch (this.gender) {
      case Gender.Male:
        return nIndex === 0;
      case Gender.Female:
        return nIndex === 1;
      case Gender.Others:
      default:
        return nIndex === 2;
    }
  }
}
