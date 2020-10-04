import Decimal from 'decimal.js';
import { RecipeShort } from './RecipeShort';
import { IRawRecipeShort } from '../base/types';

describe('RecipeIngredient class', () => {
  test('Constructor', () => {
    const data: IRawRecipeShort = {
      recipe_description:
        'If you love eggplant and lasagna, you`ll love this no pasta, no fry casserole.',
      recipe_id: '78586',
      recipe_image:
        'https://dtchbgs4aqydg.cloudfront.net/static/recipe/daab9d61-b3f1-4784-89c8-a9759f45f6b9.jpg',
      recipe_name: 'Eggplant Lasagna',
      recipe_nutrition: {
        calories: '219',
        carbohydrate: '21.11',
        fat: '8.80',
        protein: '14.52',
      },
      recipe_url: 'https://www.fatsecret.com/recipes/eggplant-lasagna/Default.aspx',
    };
    const instance = new RecipeShort(data);
    expect(instance.id).toEqual(Number.parseInt(data.recipe_id, 10));
    expect(instance.description).toEqual(data.recipe_description);
    expect(instance.image).toEqual(data.recipe_image);
    expect(instance.name).toEqual(data.recipe_name);
    expect(instance.fatSecretUrl).toEqual(data.recipe_url);
    expect(instance.nutrition.fat).toEqual(new Decimal(data.recipe_nutrition.fat));
    expect(instance.nutrition.protein).toEqual(new Decimal(data.recipe_nutrition.protein));
    expect(instance.nutrition.calories).toEqual(new Decimal(data.recipe_nutrition.calories));
    expect(instance.nutrition.carbohydrate).toEqual(new Decimal(data.recipe_nutrition.carbohydrate));
  });
});
