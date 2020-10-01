import { IRawListResponse } from '../base/types';

export class ListMeta {
  readonly maxResult: number;

  readonly pageNumber: number;

  readonly totalResult: number;

  constructor(params: IRawListResponse) {
    this.maxResult = Number.parseInt(params.max_results, 10);
    this.pageNumber = Number.parseInt(params.page_number, 10);
    this.totalResult = Number.parseInt(params.total_results, 10);
  }
}
