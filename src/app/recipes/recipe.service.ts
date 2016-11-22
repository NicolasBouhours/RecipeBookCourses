import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Tommy', 'http://www.dietetiqueconseil.com/medias/images/photo-salade1.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
      ]),
    new Recipe('Walioa', 'Nicolas', 'http://static.lexpress.fr/medias_9078/w_2048,h_890,c_crop,x_0,y_423/w_1520,h_855,c_fill,g_north/v1391590050/burger-3_4648336.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

}
