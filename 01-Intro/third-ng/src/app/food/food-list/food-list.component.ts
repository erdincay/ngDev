import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
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

  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

  onEdit(f: FoodItem): void {
    this.foodSelected.emit(f);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   // this.datasource = new MatTableDataSource(changes.food.currentValue);
  // }

  ngOnInit(): void {}
}
