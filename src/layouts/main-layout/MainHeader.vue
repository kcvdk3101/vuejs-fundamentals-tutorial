<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch px-6">
    <router-link :to="{ name: 'home' }">
      <img class="inline-flex items-center h-full" :src="Logo" alt="logo" />
    </router-link>
    <div class="flex items-center gap-4">
      <router-link
        :to="{ name: 'search-by-name' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Search Meals
      </router-link>
      <div class="flex items-center gap-2 cursor-pointer">
        <img
          src="https://picsum.photos/200/300"
          class="flex-shrink-0 rounded-full w-8 h-8 object-cover"
        />
        <div class="flex-1 flex flex-col">
          <p class="font-bold mb-0">Khoi Vuong</p>
          <small class="italic">abc@gmail.com</small>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import Logo from '@/assets/images/logo.svg'

export default {
  components: { RouterLink },
  data() {
    return {
      Logo
    }
  }
}
</script>

<style scoped></style>
