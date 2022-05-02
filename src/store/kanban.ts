import { defineStore } from 'pinia'
import type { KanbanColumn } from '~/interfaces/kanban.interface'

export const useKanbanStore = defineStore('kanban', {
  state: (): { columns: KanbanColumn[] } => {
    return {
      columns: [
        { id: 'todo', name: 'Lista de tareas', color: 'slate', tasks: [{ title: 'test', description: '' }] },
        { id: 'progress', name: 'En progreso', tasks: [] },
        { id: 'dasd', name: 'ASDS', tasks: [] },
      ],
    }
  },
})
