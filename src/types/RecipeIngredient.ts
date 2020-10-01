import Decimal from 'decimal.js';
import { IRawRecipeIngredient } from '../base/types';

export class RecipeIngredient {
  readonly url: string;

  readonly name: string;

  readonly foodId: number;

  readonly servingId: number;

  readonly description: string;

  readonly numberOfUnits: Decimal;

  readonly measurementDescription: string;

  constructor(props: IRawRecipeIngredient) {
    this.name = props.food_name;
    this.url = props.ingredient_url;
    this.description = props.ingredient_description;
    this.measurementDescription = props.measurement_description;
    this.foodId = Number.parseInt(props.food_id, 10);
    this.servingId = Number.parseInt(props.serving_id, 10);
    this.numberOfUnits = new Decimal(props.number_of_units);
  }
}
