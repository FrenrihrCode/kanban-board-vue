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
        Design
      </span>
      <h4 class="mt-3 text-sm font-bold text-left">
        {{ title }}
      </h4>
      <p class="mt-1 text-sm font-light text-left">
        {{ description }} This is the title of the card for the thing that needs to be done.
      </p>
      <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
        <div class="flex items-center">
          <svg
            class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="ml-1 leading-none">Dec 12</span>
        </div>
        <div class="relative flex items-center ml-4">
          <svg
            class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm12.002-14.315l-12.002-7-11.998 7 11.998 7 12.002-7z"
            />
          </svg>
          <span class="ml-1 leading-none">4</span>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
</style>
