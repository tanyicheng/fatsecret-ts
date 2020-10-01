import { ListMeta } from './ListMeta';
import { FoodShort } from './FoodShort';
import { IRawFoodsSearchResponse } from '../base/types';

export class FoodListResult {
  readonly meta: ListMeta;

  readonly data: FoodShort[];

  constructor(props: IRawFoodsSearchResponse) {
    this.meta = new ListMeta(props);
    const items = props.food || [];
    this.data = items.map((food) => new FoodShort(food));
  }
}
