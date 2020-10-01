# FatSecret API wrapper

> Fully typed high-level wrapper for [FatSecret API](https://platform.fatsecret.com/api/Default.aspx?screen=rapih)

## Usage example
```typescript
import * as util from 'util';
import FatSecretClient from './src/FatSecretClient';

const fatSecret = new FatSecretClient(API_KEY, API_SECRET);

(async function () {
  const foods = await fatSecret.foodsSearch({ searchExpression: 'tea' });
  console.log(util.inspect(foods, false, null, true));

  const recipes = await fatSecret.recipesSearch({ searchExpression: 'cake' });
  console.log(util.inspect(recipes, false, null, true));

  const food = await fatSecret.foodGet(37885);
  console.log(util.inspect(food, false, null, true));

  const recipe = await fatSecret.recipeGet(41085157);
  console.log(util.inspect(recipe, false, null, true));

  const recipeTypes = await fatSecret.recipeTypesGet();
  console.log(util.inspect(recipeTypes, false, null, true));
})().catch((err) => {
  console.error(err);
});

```

## Roadmap
- [x] Free API
- [ ] Premium API
- [ ] Tests
- [ ] Git-hooks to lint before commit
- [ ] Extended usage examples
