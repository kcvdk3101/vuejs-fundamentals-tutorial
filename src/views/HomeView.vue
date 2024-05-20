<template>
  <main-layout>
    <div class="py-8">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">Random Meals</h1>
      <div v-if="loading">Loading...</div>
      <template v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <meal-card v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
        </div>
        <div v-if="!meals.length" class="flex justify-center text-gray-600 py-8">
          There are no meals
        </div>
      </template>
    </div>
  </main-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MainLayout from '@/layouts/main-layout/MainLayout.vue'
import MealCard from '@/components/card/MealCard.vue'

export default {
  components: { MainLayout, MealCard },
  created() {
    this.getTenRandomMeal()
  },
  computed: {
    ...mapState('meals', {
      meals: 'meals',
      loading: 'loading'
    })
  },
  methods: {
    ...mapActions('meals', {
      getTenRandomMeal: 'getTenRandomMeal'
    })
  }
}
</script>

<style scoped></style>
