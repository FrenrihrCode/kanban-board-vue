<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useKanbanStore } from '~/store/kanban'

export default defineComponent({
  setup() {
    const kanbanStore = useKanbanStore()

    const isModalOpen = ref(false)
    const columnId = ref('')
    const openModal = (payload: string) => {
      columnId.value = payload
      isModalOpen.value = true
    }
    const closeModal = () => {
      isModalOpen.value = false
    }
    const onSubmited = () => {
      isModalOpen.value = false
      kanbanStore.getAllBoards()
    }
    onMounted(() => {
      kanbanStore.getAllBoards()
    })
    return { isModalOpen, columnId, openModal, closeModal, onSubmited }
  },
})
</script>

<template>
  <div>
    <Board @open-modal="openModal" />
    <GeneralModal v-if="isModalOpen" @close-modal="closeModal">
      <TaskForm title-form="New Task" :column-id="columnId" @submited="onSubmited" />
    </GeneralModal>
  </div>
</template>

<style  scoped>
</style>
