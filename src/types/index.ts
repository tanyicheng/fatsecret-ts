export interface ISearchParams {
  searchExpression?: string;
  maxResults?: number;
  pageNumber?: number;
}

export type IFoodsSearchParams = ISearchParams;

export interface IRecipesSearchParams extends ISearchParams {
  recipe_type?: string;
}
