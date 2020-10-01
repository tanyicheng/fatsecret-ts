import { ListMeta } from './ListMeta';
import { RecipeShort } from './RecipeShort';
import { IRawRecipesSearchResponse } from '../base/types';

export class RecipeListResult {
  readonly meta: ListMeta;

  readonly data: RecipeShort[];

  constructor(props: IRawRecipesSearchResponse) {
    this.meta = new ListMeta(props);
    const items = props.recipe || [];
    this.data = items.map((recipe) => new RecipeShort(recipe));
  }
}
