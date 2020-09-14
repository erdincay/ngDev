import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FoodItem } from './food-item.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  food: FoodItem[] = [
    { name: 'Pommes', price: 2 },
    { name: 'Falafel', price: 2 },
  ];

  getFood(): Observable<FoodItem[]> {
    return of(this.food);
  }
}
