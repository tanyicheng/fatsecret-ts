import { IRawFoodShort } from '../base/types';

export class FoodShort {
  readonly id: number;

  readonly name: string;

  readonly type: string;

  readonly brandName: string | null;

  readonly description: string;

  readonly fatSecretUrl: string;

  constructor(props: IRawFoodShort) {
    this.id = Number.parseInt(props.food_id, 10);
    this.name = props.food_name;
    this.type = props.food_type;
    this.brandName = props.brand_name || null;
    this.description = props.food_description;
    this.fatSecretUrl = props.food_url;
  }
}
