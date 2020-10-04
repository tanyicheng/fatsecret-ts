import Decimal from 'decimal.js';
import { IRawRecipeShort } from '../base/types';

export class RecipeNutrition {
  readonly fat: Decimal;

  readonly protein: Decimal;

  readonly calories: Decimal;

  readonly carbohydrate: Decimal;

  constructor(props: IRawRecipeShort['recipe_nutrition']) {
    this.fat = new Decimal(props.fat);
    this.protein = new Decimal(props.protein);
    this.calories = new Decimal(props.calories);
    this.carbohydrate = new Decimal(props.carbohydrate);
  }
}
