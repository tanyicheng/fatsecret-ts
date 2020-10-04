import { RecipeCategory } from './RecipeCategory';
import { IRawRecipeCategory } from '../base/types';

describe('RecipeCategory class', () => {
  test('Constructor', () => {
    const data: IRawRecipeCategory = {
      recipe_category_name: 'Bread',
      recipe_category_url: 'https://site.com/categories/bread',
    };
    const instance = new RecipeCategory(data);
    expect(instance.name).toEqual(data.recipe_category_name);
    expect(instance.url).toEqual(data.recipe_category_url);
  });
});
