export interface PickColor {
  color: 'slate' | 'rose' | 'blue' | 'green' | 'violet'
}

export interface KanbanTask {
  title: string
  description?: string
  tag?: string
}

export interface KanbanColumn {
  id: string
  name: string
  color?: string
  tasks: KanbanTask[]
}

export interface KanbanDocument {
  name: string
  color?: string
  tasks: KanbanTask[]
}
