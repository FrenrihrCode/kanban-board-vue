import { defineStore } from 'pinia'
import type { KanbanColumn } from '~/interfaces/kanban.interface'

export const useKanbanStore = defineStore('kanban', {
  state: (): { columns: KanbanColumn[]; modalOpen: boolean } => {
    return {
      modalOpen: false,
      columns: [
        { id: 'todo', name: 'Lista de tareas', color: 'slate', tasks: [{ title: 'test', description: '' }] },
        { id: 'progress', name: 'En progreso', tasks: [] },
        { id: 'dasd', name: 'ASDS', color: 'green', tasks: [{ title: 'test 2', description: 'asd' }] },
        { id: 'dasd 1', name: 'ASDS 1', tasks: [] },
      ],
    }
  },
})
