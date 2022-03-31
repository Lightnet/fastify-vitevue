<template>
  <router-view v-slot="{ Component }">
    <Suspense @resolve="hydrationDone">
      <component :key="$route.path" :is="Component" />
    </Suspense>
  </router-view>
</template>

<script>
// setup index > view > index
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { hydrationDone } from 'fastify-vite-vue/client.mjs'
import head from '@app/head.js'

export default {
  setup () {
  	if (head) {
  		useHead(head)
  	}
    return { hydrationDone }
  },
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
body {
  margin: 0px auto;
  width: 100%;
  height: 100%;
}
</style>
