import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodItem } from '../food-item.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  constructor() {}

  @Input() foods: FoodItem[];
  @Output() foodSelected: EventEmitter<FoodItem> = new EventEmitter();

  onEdit(f: FoodItem): void {
    this.foodSelected.emit(f);
  }

  ngOnInit(): void {}
}
