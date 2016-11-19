import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy', 'Tommy', 'http://www.dietetiqueconseil.com/medias/images/photo-salade1.jpg', []),
    new Recipe('Walioa', 'Nicolas', 'http://static.lexpress.fr/medias_9078/w_2048,h_890,c_crop,x_0,y_423/w_1520,h_855,c_fill,g_north/v1391590050/burger-3_4648336.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

}
