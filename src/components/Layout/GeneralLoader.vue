<script lang="ts">
import { useGeneralStore } from '~/store/general'

export default defineComponent({
  setup() {
    const generalStore = useGeneralStore()
    return { generalStore }
  },
})
</script>

<template>
  <div
    v-if="generalStore.loadingApp"
    class="fixed top-0 left-0 right-0 bottom-0 bg-gray-300 bg-opacity-35 flex flex-col-reverse justify-center items-center text-sky-800"
  >
    <div class="loader" />
    <span class="font-bold">Loading</span>
  </div>
</template>

<style scoped>
.loader,
.loader:before,
.loader:after {
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: loading 1.8s infinite ease-in-out;
    animation: loading 1.8s infinite ease-in-out;
}

.loader {
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    margin-top: -2.25em;
}

.loader:before,
.loader:after {
    content: '';
    position: absolute;
    top: 0;
}

.loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.loader:after {
    left: 1.5em;
}

@-webkit-keyframes loading {

    0%,
    80%,
    100% {
        box-shadow: 0 2.5em 0 -1.3em;
    }

    40% {
        box-shadow: 0 2.5em 0 0;
    }
}

@keyframes loading {

    0%,
    80%,
    100% {
        box-shadow: 0 2.5em 0 -1.3em;
    }

    40% {
        box-shadow: 0 2.5em 0 0;
    }
}
</style>
