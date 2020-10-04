import { RecipeDirection } from './RecipeDirection';
import { IRawRecipeDirection } from '../base/types';

describe('RecipeDirection class', () => {
  test('Constructor', () => {
    const data: IRawRecipeDirection = {
      direction_number: '123',
      direction_description: 'some description',
    };
    const instance = new RecipeDirection(data);
    expect(instance.number).toEqual(data.direction_number);
    expect(instance.description).toEqual(data.direction_description);
  });
});
