<script lang="ts">
import { useKanbanStore } from '~/store/kanban'

export default {
  setup() {
    const kanbanStore = useKanbanStore()
    return { kanbanStore }
  },
}

</script>

<template>
  <div class="board relative flex flex-row pin mx-auto py-4 text-center">
    <div v-for="(column, $columnIndex) of kanbanStore.columns" :key="$columnIndex" class="board-column">
      <div class="p-4 -mb-px border-b border-current text-slate-800 dark:text-slate-200 mb-4 font-bold">
        {{ column.name }}
      </div>
      <div class="board-column__tasks px-2 text-left">
        <div v-for="(task, $taskIndex) of column.tasks" :key="$taskIndex" class="task">
          <Task :title="task.title" :description="task.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  width: 100%;
}

.board-column {
  width: 100%;
  max-width: 320px;
}
</style>
