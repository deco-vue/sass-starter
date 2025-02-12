<template>
  <svg :width="props.size" :height="props.size" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.79604 5.04899L9.5 1.22772L11.204 5.04899C11.6807 6.11803 12.5551 6.95925 13.6418 7.39417L17.6543 9L13.6418 10.6058C12.5551 11.0407 11.6807 11.882 11.204 12.951L9.5 16.7723L7.79605 12.951C7.31935 11.882 6.44486 11.0407 5.35815 10.6058L1.34568 9L5.35815 7.39417C6.44486 6.95925 7.31935 6.11803 7.79604 5.04899Z"
      :stroke="props.color" />
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