<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    persistent: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close-modal'],
  setup(_, { emit }) {
    const isClosing = ref(false)

    const closeModal = () => {
      isClosing.value = true
      setTimeout(() => {
        emit('close-modal')
      }, 300)
    }
    return { closeModal, isClosing }
  },
})
</script>

<template>
  <div
    class="relative z-10 modal" :class="{ 'close': isClosing }" aria-labelledby="modal-title" role="dialog"
    aria-modal="true"
  >
    <div v-if="persistent" class="fixed inset-0 bg-gray-500 bg-opacity-85 transition-opacity modal-overlay" />
    <div v-else class="fixed inset-0 bg-gray-500 bg-opacity-70 transition-opacity modal-overlay" @click="closeModal" />
    <div class="fixed z-10 overflow-y-auto modal-container">
      <div class="flex items-end justify-center text-center">
        <div
          class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full"
        >
          <button
            class="absolute p-1 bg-red-600 hover:bg-red-700 border border-none text-white rounded-full top-1 right-1"
            @click="closeModal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  opacity: 1;
  animation: fade-up 0.3s forwards;
  -webkit-animation: fade-up 0.3s forwards;
}

.modal.close {
  opacity: 0;
  animation: fade-down 0.3s forwards;
  -webkit-animation: fade-down 0.3s forwards;
}

.modal-container {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@keyframes fade-up {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-down {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
