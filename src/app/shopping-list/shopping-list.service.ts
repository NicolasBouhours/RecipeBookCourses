import { Injectable } from '@angular/core';
import { Ingredient } from '../shared';

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  geItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    //Array.prototype.push.apply(this.items, items);
    this.items.push(... items);
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

}
