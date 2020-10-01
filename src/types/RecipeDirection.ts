import { IRawRecipeDirection } from '../base/types';

export class RecipeDirection {
  readonly number: string;

  readonly description: string;

  constructor(props: IRawRecipeDirection) {
    this.number = props.direction_number;
    this.description = props.direction_description;
  }
}
