import { Nutrition } from './Nutrition';
import { IRawRecipeShort } from '../base/types';

export class RecipeShort {
  readonly id: number;

  readonly name: string;

  readonly description: string;

  readonly image: string;

  readonly nutrition: Nutrition;

  readonly fatSecretUrl: string;

  constructor(props: IRawRecipeShort) {
    this.id = Number.parseInt(props.recipe_id, 10);
    this.name = props.recipe_name;
    this.image = props.recipe_image;
    this.description = props.recipe_description;
    this.fatSecretUrl = props.recipe_url;
    this.nutrition = new Nutrition(props.recipe_nutrition);
  }
}
