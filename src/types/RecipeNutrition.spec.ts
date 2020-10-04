import Decimal from 'decimal.js';
import { RecipeNutrition } from './RecipeNutrition';
import { IRawRecipeShort } from '../base/types';

describe('RecipeIngredient class', () => {
  test('Constructor', () => {
    const data: IRawRecipeShort['recipe_nutrition'] = {
      calories: '177',
      carbohydrate: '2.23',
      fat: '2.32',
      protein: '35.1',
    };
    const instance = new RecipeNutrition(data);
    expect(instance.fat).toEqual(new Decimal(data.fat));
    expect(instance.protein).toEqual(new Decimal(data.protein));
    expect(instance.calories).toEqual(new Decimal(data.calories));
    expect(instance.carbohydrate).toEqual(new Decimal(data.carbohydrate));
  });
});
