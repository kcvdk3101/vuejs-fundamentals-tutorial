<template>
  <main-layout>
    <div v-if="loading" class="max-w-[800px] mx-auto py-8">Loading...</div>
    <div v-else class="max-w-[800px] mx-auto py-8">
      <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal?.strMeal }}</h1>
      <img :src="meal?.strMealThumb" :alt="meal?.strMeal" class="max-w-[50%] rounded-2xl shadow" />
      <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
        <div><strong class="font-bold">Category:</strong> {{ meal?.strCategory }}</div>
        <div><strong class="font-bold">Area:</strong> {{ meal?.strArea }}</div>
        <div><strong class="font-bold">Tags:</strong> {{ meal?.strTags }}</div>
      </div>

      <div class="my-3">
        {{ meal?.strInstructions }}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul>
            <template v-for="n in 20" :key="n">
              <li v-if="meal?.[`strIngredient${n + 1}`]">
                {{ n + 1 }}. {{ meal[`strIngredient${n + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2">Measures</h2>
          <ul>
            <template v-for="n in 20" :key="n">
              <li v-if="meal?.[`strMeasure${n + 1}`]">
                {{ n + 1 }}. {{ meal[`strMeasure${n + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </main-layout>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import MainLayout from '@/layouts/main-layout/MainLayout.vue'

export default {
  components: { MainLayout },
  async created() {
    const idMeal = this.$route.params.id
    await this.getMealDetail(idMeal)
  },
  computed: {
    ...mapState('meals', {
      meal: 'mealDetail',
      loading: 'loading'
    })
  },
  methods: {
    ...mapActions('meals', {
      getMealDetail: 'getMealDetail'
    })
  }
}
</script>

<style></style>
