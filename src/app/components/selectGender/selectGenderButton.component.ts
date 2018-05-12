import { Component, Input } from '@angular/core';

@Component({
  selector: 'select-gender-button',
  templateUrl: './selectGenderButton.component.html',
  styleUrls: ['./selectGenderButton.component.scss']
})
export class SelectGenderButton {
  @Input() onClicked: any;
  @Input() gender: string;
}
