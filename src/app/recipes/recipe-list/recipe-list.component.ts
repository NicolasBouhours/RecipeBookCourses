import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Tommy', 'http://thumbs2.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

}
