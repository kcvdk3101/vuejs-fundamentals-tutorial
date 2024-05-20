<template>
  <div class="auth-background">
    <slot>Auth Layout</slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.auth-background {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: url('@/assets/images/background-kitchen.jpg') no-repeat center center/cover;
}
</style>
