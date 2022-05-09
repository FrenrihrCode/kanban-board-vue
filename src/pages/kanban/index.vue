<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isModalOpen = ref(false)
    const openModal = () => {
      isModalOpen.value = true
    }
    const closeModal = () => {
      isModalOpen.value = false
    }
    return { isModalOpen, openModal, closeModal }
  },
})
</script>

<template>
  <div>
    <Board @open-modal="openModal" />
    <GeneralModal v-if="isModalOpen" @close-modal="closeModal">
      <TaskForm title-form="New Task" />
    </GeneralModal>
  </div>
</template>

<style  scoped>
</style>
