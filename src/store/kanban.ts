import { defineStore } from 'pinia'
import { useGeneralStore } from './general'
import { KanbanService } from '~/db/kanban'
import type { KanbanColumn, KanbanTask } from '~/interfaces/kanban.interface'

const kanbanService = new KanbanService()

export const useKanbanStore = defineStore('kanban', {
  state: (): { columns: KanbanColumn[]; modalOpen: boolean } => {
    return {
      modalOpen: false,
      columns: [],
    }
  },
  actions: {
    async getAllBoards() {
      const general = useGeneralStore()
      general.loadingApp = true
      try {
        const boards = await kanbanService.getAll()
        this.columns = boards
      }
      catch (error) {
        console.error(error)
      }
      general.loadingApp = false
    },
    async createNewTask(task: KanbanTask, board: string) {
      try {
        await kanbanService.addTask(task, board)
      }
      catch (error) {
        console.error(error)
      }
    },
  },
})
