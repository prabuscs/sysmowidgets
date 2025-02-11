import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  IonAvatar,
  IonChip,
  IonContent,
  IonLabel,
} from '@ionic/angular/standalone';
import { IconService } from '../shared/icon.service';

@Component({
  selector: 'app-sysmo-gender',
  templateUrl: './sysmo-gender.component.html',
  styleUrls: ['./sysmo-gender.component.scss'],
  imports: [IonChip, IonLabel, IonContent, IonAvatar, CommonModule],
})
export class SysmoGenderComponent implements OnInit {
  @Input() gender: string = ''; // Optionally disabled the gender field
  users = [{ gender: 'male' }, { gender: 'female' }, { gender: 'others' }];
  maleIcon: string = '';
  femaleIcon: string = '';

  constructor(private iconService: IconService) {}

  ngOnInit(): void {}

  // Method returns the icon based on gender
  getGenderIcon(gender: string): string {
    if (gender === 'male') {
      return this.iconService.getIconUrl('male_icon');
    } else if (gender === 'female') {
      return this.iconService.getIconUrl('female_icon');
    } else {
      return '';
    }
  }

  // Method returns the label based on gender
  getGenderLabel(gender: string): string {
    if (gender === 'male') {
      return 'Male';
    } else if (gender === 'female') {
      return 'Female';
    } else {
      return 'Others';
    }
  }

  // Method checks the index and disables the gender
  shouldDisableGender(nIndex: number): boolean {
    if (this.gender === 'male') {
      return nIndex === 0;
    } else if (this.gender === 'female') {
      return nIndex === 1;
    } else {
      return nIndex === 2;
    }
  }
}
