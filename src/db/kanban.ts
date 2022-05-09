import { arrayRemove, arrayUnion, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import type { CollectionReference } from 'firebase/firestore'
import type { KanbanColumn, KanbanDocument, KanbanTask } from '~/interfaces/kanban.interface'
import { db } from '~/plugins/firebase'

export class KanbanService {
  private collection: CollectionReference<KanbanDocument>
  constructor() {
    this.collection = collection(db, 'board') as CollectionReference<KanbanDocument>
  }

  async getAll(): Promise<KanbanColumn[]> {
    const kanban: KanbanColumn[] = []
    const querySnapshot = await getDocs(this.collection)
    querySnapshot.forEach((doc) => {
      const document = doc.data()
      kanban.push({ ...document, id: doc.id })
    })
    return kanban
  }

  async addTask(task: KanbanTask, board: string) {
    const boardDocument = doc(this.collection, board)
    await updateDoc(boardDocument, {
      tasks: arrayUnion(task),
    })
  }

  async deleteTask(task: KanbanTask, board: string) {
    const boardDocument = doc(this.collection, board)
    await updateDoc(boardDocument, {
      tasks: arrayRemove(task),
    })
  }
}
