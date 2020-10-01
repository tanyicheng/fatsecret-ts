import Decimal from 'decimal.js';
import { IRawRecipeShort } from '../base/types';

export class Nutrition {
  private fat: Decimal;

  private protein: Decimal;

  private calories: Decimal;

  private carbohydrate: Decimal;

  constructor(props: IRawRecipeShort['recipe_nutrition']) {
    this.fat = new Decimal(props.fat);
    this.protein = new Decimal(props.protein);
    this.calories = new Decimal(props.calories);
    this.carbohydrate = new Decimal(props.carbohydrate);
  }
}
