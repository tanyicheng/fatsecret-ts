import { IRawRecipeCategory } from '../base/types';

export class RecipeCategory {
  readonly url: string;

  readonly name: string;

  constructor(props: IRawRecipeCategory) {
    this.url = props.recipe_category_url;
    this.name = props.recipe_category_name;
  }
}
