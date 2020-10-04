import Decimal from 'decimal.js';
import { IRawRecipeServing } from '../base/types';

export class RecipeServing {
  readonly calcium: Decimal;

  readonly calories: Decimal;

  readonly carbohydrate: Decimal;

  readonly cholesterol: Decimal;

  readonly fat: Decimal;

  readonly fiber: Decimal;

  readonly iron: Decimal;

  readonly monounsaturatedFat: Decimal;

  readonly polyunsaturatedFat: Decimal;

  readonly potassium: Decimal;

  readonly protein: Decimal;

  readonly saturatedFat: Decimal;

  readonly servingSize: string;

  readonly sodium: Decimal;

  readonly sugar: Decimal;

  readonly transFat: Decimal;

  readonly vitaminA: Decimal;

  readonly vitaminC: Decimal;

  constructor(props: IRawRecipeServing) {
    this.calcium = new Decimal(props.calcium);
    this.calories = new Decimal(props.calories);
    this.carbohydrate = new Decimal(props.carbohydrate);
    this.cholesterol = new Decimal(props.cholesterol);
    this.fat = new Decimal(props.fat);
    this.fiber = new Decimal(props.fiber);
    this.iron = new Decimal(props.iron);
    this.monounsaturatedFat = new Decimal(props.monounsaturated_fat);
    this.polyunsaturatedFat = new Decimal(props.polyunsaturated_fat);
    this.potassium = new Decimal(props.potassium);
    this.protein = new Decimal(props.protein);
    this.saturatedFat = new Decimal(props.saturated_fat);
    this.sodium = new Decimal(props.sodium);
    this.sugar = new Decimal(props.sugar);
    this.vitaminA = new Decimal(props.vitamin_a);
    this.vitaminC = new Decimal(props.vitamin_c);
    this.transFat = new Decimal(props.trans_fat);
    this.servingSize = props.serving_size;
  }
}
