export interface KanbanTask {
  title: string
  description?: string
}

export interface KanbanColumn {
  id: string
  name: string
  color?: 'slate' | 'rose' | 'blue' | 'green' | 'violet'
  tasks: KanbanTask[]
}
