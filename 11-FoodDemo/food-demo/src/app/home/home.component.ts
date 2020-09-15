import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private fs: FoodService) {}

  foods = this.fs.getFood();

  ngOnInit(): void {}
}
