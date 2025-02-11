import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sysmo-title',
  templateUrl: './sysmo-title.component.html',
  styleUrls: ['./sysmo-title.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class SysmoTitleComponent implements OnInit {
  @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();
  selectedTitle = '';
  titles = ['Mr', 'Ms', 'Others'];
  constructor() {}

  ngOnInit(): void {
    this.selectedTitle = this.titles[0]; // Default Title
  }

  onTitleChanged(event: any): void {
    // Use the service to emit the change
    this.titleChanged.emit(event.target.value); 
  }
}
