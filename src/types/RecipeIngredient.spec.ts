import Decimal from 'decimal.js';
import { RecipeIngredient } from './RecipeIngredient';
import { IRawRecipeIngredient } from '../base/types';

describe('RecipeIngredient class', () => {
  test('Constructor', () => {
    const data: IRawRecipeIngredient = {
      food_id: '123',
      food_name: 'Bread',
      ingredient_description: 'some description',
      ingredient_url: 'https://site.com/foods/bread',
      measurement_description: 'description',
      number_of_units: '2',
      serving_id: '345',
    };
    const instance = new RecipeIngredient(data);
    expect(instance.foodId).toEqual(Number.parseInt(data.food_id, 10));
    expect(instance.name).toEqual(data.food_name);
    expect(instance.description).toEqual(data.ingredient_description);
    expect(instance.url).toEqual(data.ingredient_url);
    expect(instance.measurementDescription).toEqual(data.measurement_description);
    expect(instance.numberOfUnits).toEqual(new Decimal(data.number_of_units));
    expect(instance.servingId).toEqual(Number.parseInt(data.serving_id, 10));
  });
});
