<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'slate',
    },
    tag: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const colorPriority = computed(() => {
      return 'text-gray-300'
    })
    const borderColor = computed(() => {
      return `border-${props.color}-600`
    })

    return { colorPriority, borderColor }
  },
})
</script>

<template>
  <div class="flex flex-col pb-2 overflow-auto">
    <a
      href="#"
      class="relative flex flex-col border-b-4 items-start p-4 mt-3 bg-white shadow rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
      :class="[borderColor]" draggable="true"
    >
      <button
        class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
      >
        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
      <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
        {{ tag }}
      </span>
      <h4 class="mt-3 text-sm font-bold text-left">
        {{ title }}
      </h4>
      <p class="mt-1 text-sm font-light text-left">
        {{ description }}
      </p>
    </a>
  </div>
</template>

<style scoped>
</style>
