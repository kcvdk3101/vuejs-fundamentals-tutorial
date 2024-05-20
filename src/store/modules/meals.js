import { mealApi } from "@/api/meals"

export const meals = {
  namespaced: true,
  state: {
    meals: [],
    mealDetail: null,
    mealsByName: [],
    loading: false
  },
  mutations: {
    updateMeals(state, meal) {
      state.meals.push(meal)
    },
    updateMealDetail(state, mealDetail) {
      state.mealDetail = mealDetail
    },
    updateLoading(state, value) {
      state.loading = value
    }
  },
  actions: {
    getTenRandomMeal({ commit }) {
      commit('updateLoading', true)
      for (let i = 0; i < 9; i++) {
        mealApi.getRandomMeal().then(({ data }) => {
          commit('updateMeals', data.meals[0])
        })
      }
      commit('updateLoading', false)
    },
    async getMealDetail({ commit }, id) {
      commit('updateLoading', true)
      try {
        const response = await mealApi.getMealDetail(id)
        if (response) {
          commit('updateMealDetail', response.data.meals[0])
          commit('updateLoading', false)
        }
      } catch (error) {
        console.log(error)
        commit('updateLoading', false)
      } finally {
        commit('updateLoading', false)
      }
    }
  },
  getters: {}
}