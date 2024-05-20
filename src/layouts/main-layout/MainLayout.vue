<template>
  <div>
    <main-header></main-header>
    <main class="max-w-[1200px] mx-auto">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import MainHeader from './MainHeader.vue'

export default {
  components: { MainHeader }
}
</script>

<style scoped></style>
