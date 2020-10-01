import { FoodServing } from './FoodServing';
import { IRawFoodResponse } from '../base/types';

export class Food {
  readonly id: number;

  readonly name: string;

  readonly type: string;

  readonly fatSecretUrl: string;

  readonly servings: FoodServing[];

  constructor(props: IRawFoodResponse) {
    this.id = Number.parseInt(props.food_id, 10);
    this.name = props.food_name;
    this.type = props.food_type;
    this.fatSecretUrl = props.food_url;

    const servings = props.servings?.serving || [];
    this.servings = servings.map((serving) => new FoodServing(serving));
  }
}
