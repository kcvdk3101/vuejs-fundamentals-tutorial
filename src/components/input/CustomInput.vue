<template>
  <div class="input-container" :style="{ flexDirection: flexDirection }">
    <label v-if="label" :for="inputName">{{ label }}</label>
    <input class="custom-input" :type="type" :name="inputName" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    inputName: {
      type: String
    },
    height: {
      type: Number,
      default: 40
    },
    label: {
      type: String
    },
    direction: {
      type: String,
      default: 'vertical'
    }
  },
  computed: {
    flexDirection() {
      return this.direction === 'vertical' ? 'column' : 'row'
    }
  }
}
</script>

<style scoped>
.input-container {
  display: flex;
  gap: 8px;
}

.custom-input {
  padding: 8px;
  min-height: 30px;
  outline: none;
  border-width: 1px;
  border-radius: 4px;
}
</style>
