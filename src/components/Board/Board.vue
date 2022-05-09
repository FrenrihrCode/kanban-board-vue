<script lang="ts">
import { defineComponent } from 'vue'
import { useKanbanStore } from '~/store/kanban'

export default defineComponent({
  emits: {
    openModal(payload: string) {
      return payload
    },
  },
  setup() {
    const kanbanStore = useKanbanStore()

    return { kanbanStore }
  },
})

</script>

<template>
  <div class="board relative flex pin mx-auto py-4 px-5 text-center text-sky-800">
    <div class="mt-6">
      <h1 class="text-2xl font-bold">
        Team Project Board
      </h1>
    </div>
    <div class="flex flex-grow mt-4 pb-4 space-x-6 overflow-auto board-container">
      <div
        v-for="(column, $columnIndex) of kanbanStore.columns" :key="$columnIndex"
        class="flex flex-col flex-shrink-0 w-72"
      >
        <TitleColumn :title="column.name" @btn-click="$emit('openModal', column.id)" />
        <Task
          v-for="(task, $taskIndex) of column.tasks" :key="$taskIndex" :title="task.title"
          :description="task.description" :color="column.color" :tag="task.tag"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  flex-direction: column;
  width: 100%;
}

.board-container {
  scrollbar-width: thin;
  scrollbar-color: #90A4AE #CFD8DC;
}

.board-container::-webkit-scrollbar {
  height: 8px;
}

.board-container::-webkit-scrollbar-track {
  background-color: rgba(7, 89, 133, 0.2);
  border-radius: 20px;
}

.board-container::-webkit-scrollbar-thumb {
  background-color: rgb(7, 89, 133, 0.8);
  border-radius: 20px;
}
</style>
