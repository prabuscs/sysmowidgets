import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SysmoTitleComponent } from '../components/sysmo-title/sysmo-title.component';
import { Genders } from '../components/sysmo-title/gender.model';
import { CustomStyleSheet } from '../components/sysmo-title/stylesheet.model';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [SysmoTitleComponent, ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit{
  users:Array<Genders> = [
    { gender: 'Male', icon: 'male_icon', titles: ['mr', 'MRs'] },
    { gender: 'Female', icon: 'female_icon', titles: ['Ms', 'Miss'] },
    {
      gender: 'Others',
      icon: '',
      titles: ['Transgender', 'others']
    }
  ];
  titleStyleProps?: CustomStyleSheet;
  genderStyleProps?: CustomStyleSheet;


  ngOnInit(): void {
    this.titleStyleProps = {
      color: 'blue', 
      backgroundColor: 'white',
      fontWeight: 'bold' 
    };

   this.genderStyleProps = {
      color: '',
      backgroundColor: '',
      boxShadow: '10px 5px 5px red'  
    };   
  }

  formGroup = new FormGroup({
    gender: new FormControl({
    }),
  });

  constructor() {}

}
