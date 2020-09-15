import {
  Component,
  OnInit,
  EventEmitter,
  SimpleChanges,
  Input,
  Output,
} from '@angular/core';
import { FoodItem } from '../food-item.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss'],
})
export class FoodEditComponent implements OnInit {
  constructor() {}

  @Input() food: FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.food) {
      console.log('receiving updated food:', changes.food.currentValue);
    }
  }

  doSave() {
    this.saveFood.emit(this.food);
  }
}
