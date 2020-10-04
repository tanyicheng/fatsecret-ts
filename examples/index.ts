/* eslint-disable no-console */
import * as util from 'util';
import FatSecretClient from '../src/FatSecretClient';

const fatSecret = new FatSecretClient(process.env.ACCESS_KEY, process.env.SECRET_KEY);

(async () => {
  const foods = await fatSecret.foodsSearch({ searchExpression: 'tea' });
  console.log(util.inspect(foods, false, null, true));

  const recipes = await fatSecret.recipesSearch({ searchExpression: 'cake' });
  console.log(util.inspect(recipes, false, null, true));

  const food = await fatSecret.foodGet(892);
  console.log(util.inspect(food, false, null, true));

  const recipe = await fatSecret.recipeGet(41085157);
  console.log(util.inspect(recipe, false, null, true));

  const recipeTypes = await fatSecret.recipeTypesGet();
  console.log(util.inspect(recipeTypes, false, null, true));
})().catch((err) => {
  console.error(err);
});
