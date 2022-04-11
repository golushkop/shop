import { Component, Input, Output, EventEmitter } from '@angular/core';;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemId = '';
  @Input() name = '';
  @Input() description = '';
  @Output() removeClick = new EventEmitter();

  public onRemoveClick() {
    this.removeClick.emit(this.itemId);
  }

}
