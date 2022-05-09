<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const menu = ref([
      { to: 'kanban', name: 'Board' },
    ])
    return { menu }
  },
}
</script>

<template>
  <main
    class="flex flex-col w-screen h-screen overflow-auto bg-gradient-to-tr from-sky-100 via-blue-100 to-indigo-100"
  >
    <div class="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75 shadow-lg">
      <svg
        class="w-8 h-8 text-sky-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M11.602 21.564l-1.368 1.436-10.234-10.258v-7.742h2v6.891l9.602 9.673zm12.398-8.454l-9.027 9.027-10.973-11.123v-9.014h8.877l11.123 11.11zm-14.263-5.374c.684-.684.682-1.791-.001-2.475-.684-.684-1.791-.684-2.475 0s-.684 1.791 0 2.475 1.793.684 2.476 0zm4.421 6.848l-3.535-3.537-.707.707 3.535 3.537.707-.707zm2.828 0l-4.949-4.951-.707.707 4.949 4.951.707-.707zm1.415-1.416l-4.95-4.949-.707.707 4.95 4.949.707-.707z"
        />
      </svg>
      <div class="ml-10">
        <router-link
          v-for="item in menu" :key="item.to" :to="item.to"
          class="mx-2 text-sm font-semibold hover:text-sky-600"
          :class="$route.name === item.to ? 'text-sky-600' : 'text-gray-600'"
        >
          {{ item.name }}
        </router-link>
      </div>
      <button
        class="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer"
      >
        <img
          src="https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512"
          alt=""
        >
      </button>
    </div>
    <slot />
    <general-loader />
  </main>
</template>

<style lang="scss" scoped>
</style>
