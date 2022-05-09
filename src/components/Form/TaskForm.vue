<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useKanbanStore } from '~/store/kanban'

export default defineComponent({
  props: {
    titleForm: {
      type: String,
      default: '',
    },
    columnId: {
      type: String,
      default: '',
    },
  },
  emits: ['submited'],
  setup(props, { emit }) {
    const kanbanStore = useKanbanStore()

    const loading = ref(false)
    const title = ref('')
    const description = ref('')
    const tag = ref('')

    const onCreateTask = async () => {
      if (props.columnId) {
        loading.value = true
        await kanbanStore.createNewTask({
          title: title.value,
          description: description.value,
          tag: tag.value,
        }, props.columnId)
        loading.value = false
        emit('submited')
      }
    }

    return { title, description, tag, loading, onCreateTask }
  },
})
</script>

<template>
  <div class="p-8 bg-white rounded-lg shadow-xl lg:p-12 lg:col-span-3">
    <form class="space-y-4 text-black" @submit.prevent="onCreateTask">
      <p v-if="titleForm" class="text-lg text-left text-sky-700 font-bold">
        {{ titleForm }}
      </p>
      <div>
        <label class="sr-only" for="title">Title</label>
        <input
          id="title" v-model="title"
          class="w-full p-3 text-sm border-1 border-gray-200 rounded-lg bg-white outline-none hover:border-gray-400 focus:border-gray-400 active:border-gray-400"
          placeholder="Title" type="text"
        >
        <span class="text-xs text-red-700">Your password is too short.</span>
      </div>
      <div class="relative">
        <select
          v-model="tag"
          class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline border-1 border-gray-200 rounded-lg bg-white outline-none hover:border-gray-400 focus:border-gray-400 active:border-gray-400"
          placeholder="Tag"
        >
          <option>Hobbie</option>
          <option>Design</option>
          <option>Other</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd" fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div>
        <label class="sr-only" for="description">Description</label>
        <textarea
          id="description" v-model="description"
          class="w-full p-3 text-sm border-1 border-gray-200 rounded-lg bg-white outline-none hover:border-gray-400 focus:border-gray-400 active:border-gray-400"
          placeholder="Description" rows="6"
        />
      </div>
      <button
        type="submit"
        class="block w-full px-5 py-3 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-800"
      >
        Create task
      </button>
    </form>
  </div>
</template>

<style scoped>
</style>
