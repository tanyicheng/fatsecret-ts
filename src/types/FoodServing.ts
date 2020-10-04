import Decimal from 'decimal.js';
import { IRawFoodServing } from '../base/types';

export class FoodServing {
  readonly id: number;

  readonly calcium: Decimal;

  readonly calories: Decimal;

  readonly carbohydrate: Decimal;

  readonly cholesterol: Decimal;

  readonly addedSugars: Decimal;

  readonly fat: Decimal;

  readonly fiber: Decimal;

  readonly iron: Decimal;

  readonly measurementDescription: string;

  readonly metricServingAmount: Decimal;

  readonly metricServingUnit: string;

  readonly monounsaturatedFat: Decimal;

  readonly numberOfUnits: Decimal;

  readonly polyunsaturatedFat: Decimal;

  readonly potassium: Decimal;

  readonly protein: Decimal;

  readonly saturatedFat: Decimal;

  readonly description: string;

  readonly url: string;

  readonly sodium: Decimal;

  readonly sugar: Decimal;

  readonly vitaminA: Decimal;

  readonly vitaminC: Decimal;

  constructor(props: IRawFoodServing) {
    this.id = Number.parseInt(props.serving_id, 10);
    this.calcium = new Decimal(props.calcium);
    this.calories = new Decimal(props.calories);
    this.addedSugars = new Decimal(props.added_sugars);
    this.measurementDescription = props.measurement_description;
    this.carbohydrate = new Decimal(props.carbohydrate);
    this.url = props.serving_url;
    this.cholesterol = new Decimal(props.cholesterol);
    this.fat = new Decimal(props.fat);
    this.metricServingUnit = props.metric_serving_unit;
    this.fiber = new Decimal(props.fiber);
    this.iron = new Decimal(props.iron);
    this.metricServingAmount = new Decimal(props.metric_serving_amount);
    this.monounsaturatedFat = new Decimal(props.monounsaturated_fat);
    this.numberOfUnits = new Decimal(props.number_of_units);
    this.description = props.serving_description;
    this.polyunsaturatedFat = new Decimal(props.polyunsaturated_fat);
    this.potassium = new Decimal(props.potassium);
    this.protein = new Decimal(props.protein);
    this.saturatedFat = new Decimal(props.saturated_fat);
    this.sodium = new Decimal(props.sodium);
    this.sugar = new Decimal(props.sugar);
    this.vitaminA = new Decimal(props.vitamin_a);
    this.vitaminC = new Decimal(props.vitamin_c);
  }
}
