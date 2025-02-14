import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Title } from './title.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SysmoGenderComponent } from '../sysmo-gender/sysmo-gender.component';
import { Genders } from './gender.model';
import { CapitalizeFirstLetterPipe } from 'src/app/Extras/capitalize-first-letter.pipe';
import { CustomStyleSheet } from './stylesheet.model';

@Component({
  selector: 'sysmo-title',
  templateUrl: './sysmo-title.component.html',
  styleUrls: ['./sysmo-title.component.scss'],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SysmoGenderComponent,
    CapitalizeFirstLetterPipe,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SysmoTitleComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SysmoTitleComponent implements OnInit, ControlValueAccessor {
  // @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();
  gender: string = '';
  titles: string[] = [];
  titleStyleProps?: CustomStyleSheet
  genderStyleProps?: CustomStyleSheet
  users: Array<Genders> = [
    { gender: 'Male', icon: 'male_icon', titles: ['mr'] },
    { gender: 'Female', icon: 'female_icon', titles: ['Ms'] },
    {
      gender: 'Others',
      icon: 'female_icon',
      titles: ['others'],
    },
  ];

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private formBuilder: FormBuilder) {
    this.titles = this.getAllTitles(this.users);
    console.log('Default titles::::', this.titles);
  }

  ngOnInit(): void {
    this.gender = 'Male';
  }

  getAllTitles = (users: Array<Genders>) => {
    const allTitles = users.reduce<string[]>((acc, gender: Genders) => {
      return acc.concat(gender.titles || []);
    }, []);
    return [...new Set(allTitles)];
  };

  // Control Value Accessor methods
  writeValue(value: { users: Array<Genders>; titleStyleProps: CustomStyleSheet; genderStyleProps: CustomStyleSheet }): void {
    const { users, titleStyleProps, genderStyleProps } = value;
    if (value != undefined) {
      const allTitles = this.getAllTitles(users);
      this.titles = allTitles;
      console.log('Customise Titles:::::', this.titles);
      this.users = users;
      this.titleStyleProps = titleStyleProps;
      this.genderStyleProps = genderStyleProps;
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  // Event handler to notify the parent component of title changes
  onTitleChanged(event: any): void {
    const value = event.target.value;
    console.log('Change:::::', value);
    this.getGenderByTitle(value);
    this.onChange(value);
  }

  getGenderByTitle(selectedTitle: string): void {
    const user = this.users.find((user) =>
      user?.titles.includes(selectedTitle)
    );
    this.gender = user ? user?.gender : 'others';
    console.log('changed value::::', this.gender);
  }

  //  Method: Handle title change and gender update
  // onChangeTile(event: string): void {
  //   try {
  //     switch (event) {
  //       case Title.mr:
  //         this.gender = "Male"; // Male
  //         break;
  //       case Title.ms:
  //         this.gender = "Female"; // Female
  //         break;
  //       case Title.others:
  //         this.gender = "Others"; // Others
  //         break;
  //       default:
  //         this.gender = "Others";
  //         break;
  //     }
  //   } catch (error) {
  //     console.error('Erron updating gender: ', error);
  //   }
  // }
}
