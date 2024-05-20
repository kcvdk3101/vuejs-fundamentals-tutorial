<template>
  <auth-layout>
    <form @submit.prevent.stop="submitForm" class="form-container">
      <img class="logo" :src="Logo" alt="logo" />
      <h2 class="heading">Login Form</h2>
      <custom-input label="Username" input-name="username" />
      <custom-input label="Password" input-name="password" />
      <button class="btn-login" type="submit">Login</button>
    </form>
  </auth-layout>
</template>

<script>
import Logo from '@/assets/images/logo.svg'
import AuthLayout from '@/layouts/AuthLayout.vue'
import CustomInput from '@/components/input/CustomInput.vue'

export default {
  components: { AuthLayout, CustomInput },
  data() {
    return {
      Logo
    }
  },
  methods: {
    submitForm(event) {
      console.log('event :>> ', event)
    }
  }
}
</script>

<style scoped>
.form-container {
  min-width: 400px;
  min-height: max-content;
  border-radius: 16px;
  padding: 24px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
}

.logo {
  width: 100px;
  height: 100px;
  margin: 0px auto;
}

.heading {
  margin: 0px auto;
  font-size: 24px;
  font-weight: 700;
}

.btn-login {
  cursor: pointer;
  min-width: 120px;
  outline: none;
  padding: 8px;
  margin: 0px auto;
  border: none;
  border-radius: 4px;
  background: var(--vt-c-indigo);
  color: var(--vt-c-white-soft);
}
</style>
