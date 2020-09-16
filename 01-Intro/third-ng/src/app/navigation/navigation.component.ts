import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { NavigationItem } from './navigation-item.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  items: Observable<NavigationItem[]> = of([
    { id: 1, name: 'Welcome', url: '' },
    { id: 2, name: 'Foods', url: 'foods' },
  ]);

  ngOnInit(): void {}
}
