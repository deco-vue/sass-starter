<template>
  <svg :width="props.size" :height="props.size" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.5 0L11.6606 4.84536C12.0843 5.79561 12.8617 6.54337 13.8276 6.92996L19 9L13.8276 11.07C12.8617 11.4566 12.0843 12.2044 11.6606 13.1546L9.5 18L7.33939 13.1546C6.91566 12.2044 6.13834 11.4566 5.17237 11.07L0 9L5.17238 6.92996C6.13834 6.54337 6.91566 5.79562 7.33939 4.84536L9.5 0Z"
      :fill="props.color" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: '#95BFEF'
  },
  size: {
    type: Number,
    default: 19
  }
})
</script>