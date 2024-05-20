<template>
  <main-layout>
    <div class="py-8">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
      <div class="mb-4">
        <input
          type="text"
          v-model="keyword"
          class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-96 px-4 py-2"
          placeholder="Search for Meals"
        />
      </div>
      <div v-if="loading">Loading...</div>
      <template v-else>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <meal-card v-for="meal in mealsSearch" :key="meal.idMeal" :meal="meal" />
        </div>
        <div v-if="!mealsSearch.length" class="flex justify-center text-gray-600 py-8">
          There are no meals
        </div>
      </template>
    </div>
  </main-layout>
</template>
<script>
import { mealApi } from '@/api/meals'
import { debounce } from '@/utils'
import MainLayout from '@/layouts/main-layout/MainLayout.vue'
import MealCard from '@/components/card/MealCard.vue'

export default {
  components: { MainLayout, MealCard },
  data() {
    return {
      keyword: '',
      debouncedKeyword: '',
      loading: false,
      mealsSearch: []
    }
  },
  created() {
    this.debouncedUpdate = debounce(this.updateDebouncedValue, 500)
  },
  watch: {
    keyword(newValue) {
      this.debouncedUpdate(newValue)
    },
    debouncedKeyword(value) {
      if (value) {
        this.loading = true
        this.getMealsByName(value)
      }
    }
  },
  methods: {
    getMealsByName(searchValue) {
      mealApi
        .getMealByName(searchValue)
        .then(({ data }) => {
          if (!data.meals) {
            this.mealsSearch = []
          } else {
            this.mealsSearch = data.meals
          }
          this.loading = false
        })
        .finally(() => (this.loading = false))
    },
    updateDebouncedValue(value) {
      this.debouncedKeyword = value
    }
  }
}
</script>
<style></style>
