import { BaseClient } from './base/BaseClient';
import { Food } from './types/Food';
import { Recipe } from './types/Recipe';
import { FoodListResult } from './types/FoodListResult';
import { RecipeListResult } from './types/RecipeListResult';
import { IFoodsSearchParams, IRecipesSearchParams } from './types';
import {
  IRawFoodResponse,
  IRawFoodsSearchResponse,
  IRawRecipeResponse,
  IRawRecipeTypesResponse,
  IRawRecipesSearchResponse,
} from './base/types';

export default class FatSecretClient {
  private readonly client: BaseClient;

  constructor(accessKey: string, secretKey: string) {
    this.client = new BaseClient(accessKey, secretKey);
  }

  async recipesSearch({
    pageNumber = 0,
    maxResults = 20,
    ...params
  }: IRecipesSearchParams = {}): Promise<RecipeListResult> {
    const method = 'recipes.search';

    const { recipes } = await this.client.postRequest<{ recipes: IRawRecipesSearchResponse }>({
      page_number: pageNumber,
      max_results: maxResults,
      ...params,
      method,
      region: 'CN',
      language: 'zh',
    });

    return new RecipeListResult(recipes);
  }

  async foodsSearch({
    pageNumber = 0,
    maxResults = 20,
    searchExpression = '*',
    ...params
  }: IFoodsSearchParams = {}): Promise<FoodListResult> {
    const method = 'foods.search';

    const { foods } = await this.client.postRequest<{ foods: IRawFoodsSearchResponse }>({
      page_number: pageNumber,
      max_results: maxResults,
      search_expression: searchExpression,
      ...params,
      method,
      region: 'CN',
      language: 'zh',
    });

    return new FoodListResult(foods);
  }

  async foodGet(foodId: number): Promise<Food> {
    const method = 'food.get.v2';

    const { food } = await this.client.postRequest<{ food: IRawFoodResponse }>({
      method,
      food_id: foodId.toString(),
      region: 'CN',
      language: 'zh',
    });
    console.log('x--x-x-')
    console.log(food)
    return new Food(food);
  }

  async recipeGet(recipeId: number): Promise<Recipe> {
    const method = 'recipe.get';

    const { recipe } = await this.client.postRequest<{ recipe: IRawRecipeResponse }>({
      method,
      recipe_id: recipeId.toString(),
      region: 'CN',
      language: 'zh',
    });

    return new Recipe(recipe);
  }

  async recipeTypesGet(): Promise<string[]> {
    const method = 'recipe_types.get';

    const { recipe_types: recipeTypes } = await this.client.postRequest<{
      recipe_types: IRawRecipeTypesResponse;
    }>({
      method,
      region: 'CN',
      language: 'zh',
    });

    return recipeTypes?.recipe_type || [];
  }
}
