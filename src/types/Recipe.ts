import { RecipeServing } from './RecipeServing';
import { RecipeCategory } from './RecipeCategory';
import { IRawRecipeResponse } from '../base/types';
import { RecipeDirection } from './RecipeDirection';
import { RecipeIngredient } from './RecipeIngredient';

export class Recipe {
  readonly id: number;

  readonly fatSecretUrl: string;

  readonly name: string;

  readonly type: string;

  readonly image: string;

  readonly description: string;

  readonly cookingTimeMin: number;

  readonly numberOfServings: number;

  readonly preparationTimeMin: number;

  readonly directions: RecipeDirection[];

  readonly ingredients: RecipeIngredient[];

  readonly category: RecipeCategory[];

  readonly serving: RecipeServing;

  constructor(props: IRawRecipeResponse) {
    this.id = Number.parseInt(props.recipe_id, 10);
    this.fatSecretUrl = props.recipe_url;
    this.name = props.recipe_name;
    this.type = props.recipe_types.recipe_type;
    this.description = props.recipe_description;
    this.image = props.recipe_images.recipe_image;
    this.cookingTimeMin = Number.parseInt(props.cooking_time_min, 10);
    this.numberOfServings = Number.parseInt(props.number_of_servings, 10);
    this.preparationTimeMin = Number.parseInt(props.preparation_time_min, 10);
    this.serving = new RecipeServing(props.serving_sizes.serving);
    const directions = props.directions?.direction || [];
    this.directions = directions.map((direction) => new RecipeDirection(direction));
    const ingredients = props.ingredients?.ingredient || [];
    this.ingredients = ingredients.map((ingredient) => new RecipeIngredient(ingredient));
    const categories = props.recipe_categories?.recipe_category || [];
    this.category = categories.map((category) => new RecipeCategory(category));
  }
}
