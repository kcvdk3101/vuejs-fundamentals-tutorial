import { getAPI } from "./base"

export const mealApi = {
  getRandomMeal() {
    return getAPI('random.php')
  },
  getMealByName(searchValue) {
    return getAPI(`search.php?s=${searchValue}`)
  },
  getMealDetail(id) {
    return getAPI(`lookup.php?i=${id}`)
  }
}