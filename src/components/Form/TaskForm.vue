<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    titleForm: {
      type: String,
      default: '',
    },
  },
  setup() {
    const title = ref('')
    const description = ref('')
    return { title, description }
  },
})
</script>

<template>
  <div class="p-8 bg-white rounded-lg shadow-xl lg:p-12 lg:col-span-3">
    <form action="" class="space-y-4 text-black">
      <p v-if="titleForm" class="text-lg text-left text-sky-700 font-bold">
        {{ titleForm }}
      </p>
      <div>
        <label class="sr-only" for="title">Title</label>
        <input
          id="title"
          v-model="title"
          class="w-full p-3 text-sm border-1 border-gray-200 rounded-lg bg-white outline-none hover:border-gray-400 focus:border-gray-400 active:border-gray-400"
          placeholder="Title" type="text"
        >
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label class="sr-only" for="email">Email</label>
          <input
            id="email" class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Email address"
            type="email"
          >
        </div>
        <div>
          <label class="sr-only" for="phone">Phone</label>
          <input id="phone" class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Phone Number" type="tel">
        </div>
      </div>
      <div>
        <label class="sr-only" for="description">Description</label>
        <textarea id="description" v-model="description" class="w-full p-3 text-sm border-1 border-gray-200 rounded-lg bg-white outline-none hover:border-gray-400 focus:border-gray-400 active:border-gray-400" placeholder="Description" rows="6" />
      </div>
      <button
        type="submit"
        class="block w-full px-5 py-3 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-800"
      >
        Sign in
      </button>
    </form>
  </div>
</template>

<style scoped>
</style>
