<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  emits: ['btn-click'],
  setup(props) {
    const value = ref(props.title)

    const updateTitle = (newTitle: string) => {
      // console.log({ newTitle })
    }

    return { value, updateTitle }
  },
})
</script>

<template>
  <div class="flex items-center flex-shrink-0 h-10">
    <input
      id="name" v-model="value"
      class="w-full outline-none bg-transparent p-0 block text-sm font-semibold border-none focus:ring-0"
      type="text" placeholder="Column name" @keyup.enter="updateTitle(value)"
    >
    <button
      class="flex items-center justify-center w-6 h-6 ml-auto text-sky-800 rounded hover:bg-sky-800 hover:text-sky-100"
      @click="$emit('btn-click')"
    >
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
</style>
