import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SysmoTitleComponent } from '../components/sysmo-title/sysmo-title.component';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [SysmoTitleComponent, ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  
  formGroup = new FormGroup({
    gender: new FormControl({
      users: [
        { gender: 'Male', icon: 'male_icon', titles: ['mr', 'MRs']},
        { gender: 'Female', icon: 'female_icon', titles: ['Ms', 'Miss'] },
        {
          gender: 'Others',
          icon: '',
          titles: ['Transgender', 'others'],
        },
      ],
      genderStyleProps: "box-shadow: 10px 5px 5px red"
    }),
  });

  constructor() {}
}
