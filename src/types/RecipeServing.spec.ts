import Decimal from 'decimal.js';
import { RecipeServing } from './RecipeServing';
import { IRawRecipeServing } from '../base/types';

describe('RecipeIngredient class', () => {
  test('Constructor', () => {
    const data: IRawRecipeServing = {
      calcium: '6',
      calories: '177',
      carbohydrate: '2.23',
      cholesterol: '63',
      fat: '2.32',
      fiber: '0.6',
      iron: '3',
      monounsaturated_fat: '0.436',
      polyunsaturated_fat: '0.788',
      potassium: '752',
      protein: '35.10',
      saturated_fat: '0.490',
      serving_size: '1 serving',
      sodium: '692',
      sugar: '0.58',
      trans_fat: '0',
      vitamin_a: '8',
      vitamin_c: '32',
    };

    const instance = new RecipeServing(data);
    expect(instance.calcium).toEqual(new Decimal(data.calcium));
    expect(instance.calories).toEqual(new Decimal(data.calories));
    expect(instance.carbohydrate).toEqual(new Decimal(data.carbohydrate));
    expect(instance.cholesterol).toEqual(new Decimal(data.cholesterol));
    expect(instance.fat).toEqual(new Decimal(data.fat));
    expect(instance.monounsaturatedFat).toEqual(new Decimal(data.monounsaturated_fat));
    expect(instance.polyunsaturatedFat).toEqual(new Decimal(data.polyunsaturated_fat));
    expect(instance.potassium).toEqual(new Decimal(data.potassium));
    expect(instance.protein).toEqual(new Decimal(data.protein));
    expect(instance.saturatedFat).toEqual(new Decimal(data.saturated_fat));
    expect(instance.servingSize).toEqual(data.serving_size);
    expect(instance.sodium).toEqual(new Decimal(data.sodium));
    expect(instance.sugar).toEqual(new Decimal(data.sugar));
    expect(instance.transFat).toEqual(new Decimal(data.trans_fat));
    expect(instance.vitaminA).toEqual(new Decimal(data.vitamin_a));
    expect(instance.vitaminC).toEqual(new Decimal(data.vitamin_c));
  });
});
