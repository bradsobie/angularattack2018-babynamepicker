import { Component, Input } from '@angular/core';

@Component({
  selector: 'name-card',
  templateUrl: './nameCard.component.html',
  styleUrls: ['./nameCard.component.scss']
})
export class NameCardComponent {
  @Input() name: any;
  @Input() onLikeClicked: any;
  @Input() onDislikeClicked: any;
}
