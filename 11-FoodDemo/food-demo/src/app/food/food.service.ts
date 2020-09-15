import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItem } from './food-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFood(): Observable<FoodItem[]> {
    return this.httpClient.get<FoodItem[]>(environment.url);
  }

  constructor(private httpClient: HttpClient) {}
}
