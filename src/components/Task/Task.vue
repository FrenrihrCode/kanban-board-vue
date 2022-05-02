<script setup lang="ts">
interface Props {
  title: string
  color?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  color: 'slate',
})
</script>

<template>
  <a
    :class="`relative block p-4 border-t-4 bg-slate-50 border-slate-600 dark:bg-slate-800 dark:border-slate-300 rounded-sm shadow-xl group hover:shadow-md`"
    href=""
  >
    <svg
      xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-slate-600 dark:text-slate-300" fill="none" viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
      <path
        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
    <h3 class="mt-3 text-lg font-bold">{{ title }}</h3>
    <p class="mt-2 text-sm font-light">
      {{ description }}adsdasdasd
    </p>
  </a>
</template>

<style scoped>
</style>
