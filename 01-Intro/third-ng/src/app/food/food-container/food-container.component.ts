import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { FoodItem } from '../food-item.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss'],
})
export class FoodContainerComponent implements OnInit {
  constructor(private fs: FoodService) {}

  foods: FoodItem[]; // = this.fs.getFoodList();
  current: FoodItem;

  onFoodSelected(f: FoodItem): void {
    this.current = { ...f };
  }

  ngOnInit(): void {
    this.fs.getFoodList().subscribe((data) => {
      this.foods = data;
    });
  }

  onFoodSaved(f: FoodItem): void {
    console.log('saving to service:', f);
    const existing: FoodItem = this.foods.find((i) => i.id == f.id);
    if (existing != null) {
      Object.assign(existing, f);
    } else {
      this.foods.push(f);
    }
    console.log('Foods array after save', this.foods);
  }
}
