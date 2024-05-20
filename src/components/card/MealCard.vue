<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all min-h-[400px]">
    <router-link :to="{ name: 'meal-detail', params: { id: meal.idMeal } }">
      <img
        class="rounded-t-xl w-full h-48 object-cover"
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
      />
    </router-link>
    <div class="p-3 flex flex-col h-[calc(100%-12rem)]">
      <div class="flex-1">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p>{{ truncateWords(meal.strInstructions, 20) }}</p>
      </div>
      <div class="flex-shrink-0">
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="cursor-pointer flex max-w-fit px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
        >
          Link YouTube
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { truncateWords } from '@/utils'
import { RouterLink } from 'vue-router'

export default {
  components: { RouterLink },
  props: {
    meal: {
      type: Object
    }
  },
  methods: { truncateWords }
}
</script>
<style scoped></style>
