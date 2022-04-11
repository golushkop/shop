import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input() itemId = '';
  @Input() name = '';
  @Input() description = '';
  @Output() removeClick = new EventEmitter();
  @Output() editClick = new EventEmitter();

  public onRemoveClick() {
    this.removeClick.emit(this.itemId);
  }

  public onEditClick() {
    this.editClick.emit(this.itemId);
  }

}
