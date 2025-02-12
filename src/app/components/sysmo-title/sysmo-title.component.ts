import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Title } from './title.enum'

@Component({
  selector: 'app-sysmo-title',
  templateUrl: './sysmo-title.component.html',
  styleUrls: ['./sysmo-title.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class SysmoTitleComponent implements OnInit {
  @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();
  selectedTitle = '';
  titles: Array<string> = [
    Title.mr, Title.ms, Title.others
  ];
  constructor() {}

  ngOnInit(): void {
    this.selectedTitle = Title.mr; // Default Title
  }

  onTitleChanged(event: any): void {
    // Use the service to emit the change
    this.titleChanged.emit(event.target.value); 
  }
}
