import { defineStore } from 'pinia';

export const useStore = defineStore('store', () => {
  const baseUrl: Ref<string> = ref('https://example.uz/api');

  return {
    baseUrl,
  };
});
