import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor() {}

  //  Get the icons from the located path
  getIconUrl(name: string): string {
    return `assets/icons/${name}.png`;
  }
}
