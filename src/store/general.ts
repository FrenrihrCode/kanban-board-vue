import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: (): { loadingApp: boolean } => {
    return {
      loadingApp: false,
    }
  },
})
