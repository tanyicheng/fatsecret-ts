export interface IOauth2Response {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: 'basic';
}

export type APIResponseFormat = 'xml' | 'json';

interface IBaseParams {
  method: string;
}

interface IBaseSearchParams {
  search_expression?: string;
  max_results?: number;
  page_number?: number;
}

export interface IBaseRecipesSearchParams extends IBaseParams, IBaseSearchParams {
  method: 'recipes.search';
  recipe_type?: string;
}

export interface IBaseFoodsSearchParams extends IBaseParams, IBaseSearchParams {
  method: 'foods.search';
}

interface IFoodGetParams extends IBaseParams {
  method: 'food.get.v2';
  food_id: string;
}

interface IRecipeGetParams extends IBaseParams {
  method: 'recipe.get';
  recipe_id: string;
}

interface IRecipeTypesGetParams extends IBaseParams {
  method: 'recipe_types.get';
}

export type PostRequestParams =
  | IBaseRecipesSearchParams
  | IBaseFoodsSearchParams
  | IFoodGetParams
  | IRecipeGetParams
  | IRecipeTypesGetParams;

export interface IRawFoodResponse {
  food_id: string;
  food_name: string;
  food_type: string;
  food_url: string;
  servings: {
    serving: IRawFoodServing[];
  };
}

export interface IRawRecipeDirection {
  direction_number: string;
  direction_description: string;
}

export interface IRawRecipeIngredient {
  food_id: string;
  food_name: string;
  ingredient_description: string;
  ingredient_url: string;
  measurement_description: string;
  number_of_units: string;
  serving_id: string;
}

export interface IRawRecipeCategory {
  recipe_category_name: string;
  recipe_category_url: string;
}

export interface IRawRecipeServing {
  calcium: string;
  calories: string;
  carbohydrate: string;
  cholesterol: string;
  fat: string;
  fiber: string;
  iron: string;
  monounsaturated_fat: string;
  polyunsaturated_fat: string;
  potassium: string;
  protein: string;
  saturated_fat: string;
  serving_size: string;
  sodium: string;
  sugar: string;
  trans_fat: string;
  vitamin_a: string;
  vitamin_c: string;
}

export interface IRawRecipeResponse {
  cooking_time_min: string;
  directions: {
    direction: IRawRecipeDirection[];
  };
  ingredients: {
    ingredient: IRawRecipeIngredient[];
  };
  number_of_servings: string;
  preparation_time_min: string;
  recipe_categories: {
    recipe_category: IRawRecipeCategory[];
  };
  recipe_description: string;
  recipe_id: string;
  recipe_images: {
    recipe_image: string;
  };
  recipe_name: string;
  recipe_types: {
    recipe_type: string;
  };
  recipe_url: string;
  serving_sizes: {
    serving: IRawRecipeServing;
  };
}

export interface IRawRecipeTypesResponse {
  recipe_type: string[];
}

export interface IRawListResponse {
  total_results: string;
  max_results: string;
  page_number: string;
}

export interface IRawRecipeShort {
  recipe_description: string;
  recipe_id: string;
  recipe_image: string;
  recipe_name: string;
  recipe_nutrition: {
    calories: string;
    carbohydrate: string;
    fat: string;
    protein: string;
  };
  recipe_url: string;
}

export interface IRawFoodShort {
  food_id: string;
  food_name: string;
  food_type: string;
  food_url: string;
  brand_name?: string;
  food_description: string;
}

export interface IRawRecipesSearchResponse extends IRawListResponse {
  recipe: IRawRecipeShort[];
}

export interface IRawFoodsSearchResponse extends IRawListResponse {
  food: IRawFoodShort[];
}

export interface IRawFoodServing {
  calcium: string;
  calories: string;
  carbohydrate: string;
  cholesterol: string;
  fat: string;
  fiber: string;
  iron: string;
  monounsaturated_fat: string;
  polyunsaturated_fat: string;
  potassium: string;
  protein: string;
  saturated_fat: string;
  serving_description: string;
  serving_id: string;
  serving_url: string;
  sodium: string;
  sugar: string;
  vitamin_a: string;
  vitamin_c: string;
  number_of_units: string;
  metric_serving_amount: string;
  metric_serving_unit: string;
  measurement_description: string;
}
