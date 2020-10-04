import Decimal from 'decimal.js';
import { FoodServing } from './FoodServing';
import { IRawFoodServing } from '../base/types';

describe('RecipeIngredient class', () => {
  test('Constructor', () => {
    const data: IRawFoodServing = {
      calcium: '275',
      calories: '190',
      carbohydrate: '29.90',
      cholesterol: '17',
      added_sugars: '0',
      fat: '5.47',
      fiber: '2.3',
      iron: '1.00',
      measurement_description: 'cup',
      metric_serving_amount: '250.000',
      metric_serving_unit: 'g',
      monounsaturated_fat: '1.520',
      number_of_units: '1.000',
      polyunsaturated_fat: '0.263',
      potassium: '440',
      protein: '8.80',
      saturated_fat: '3.308',
      serving_description: '1 cup',
      serving_id: '104',
      serving_url:
        'https://www.fatsecret.com/calories-nutrition/generic/cocoa-hot-chocolate?portionid=104&portionamount=1.000',
      sodium: '95',
      sugar: '27.40',
      vitamin_a: '105',
      vitamin_c: '0.3',
    };

    const instance = new FoodServing(data);
    expect(instance.id).toEqual(Number.parseInt(data.serving_id, 10));
    expect(instance.url).toEqual(data.serving_url);
    expect(instance.description).toEqual(data.serving_description);
    expect(instance.measurementDescription).toEqual(data.measurement_description);
    expect(instance.metricServingUnit).toEqual(data.metric_serving_unit);
    expect(instance.calcium).toEqual(new Decimal(data.calcium));
    expect(instance.metricServingAmount).toEqual(new Decimal(data.metric_serving_amount));
    expect(instance.calories).toEqual(new Decimal(data.calories));
    expect(instance.carbohydrate).toEqual(new Decimal(data.carbohydrate));
    expect(instance.cholesterol).toEqual(new Decimal(data.cholesterol));
    expect(instance.fat).toEqual(new Decimal(data.fat));
    expect(instance.monounsaturatedFat).toEqual(new Decimal(data.monounsaturated_fat));
    expect(instance.polyunsaturatedFat).toEqual(new Decimal(data.polyunsaturated_fat));
    expect(instance.potassium).toEqual(new Decimal(data.potassium));
    expect(instance.protein).toEqual(new Decimal(data.protein));
    expect(instance.saturatedFat).toEqual(new Decimal(data.saturated_fat));
    expect(instance.addedSugars).toEqual(new Decimal(data.added_sugars));
    expect(instance.sodium).toEqual(new Decimal(data.sodium));
    expect(instance.sugar).toEqual(new Decimal(data.sugar));
    expect(instance.vitaminA).toEqual(new Decimal(data.vitamin_a));
    expect(instance.vitaminC).toEqual(new Decimal(data.vitamin_c));
  });
});
