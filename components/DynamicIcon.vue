<template>
  <render class="v-icon__svg" />
</template>

<script setup lang="ts">
  import { defineAsyncComponent, h } from 'vue'

  const props = defineProps<{
    tag: string
    icon: string
    disabled?: boolean
  }>()

  function render() {
    return h(
      defineAsyncComponent(
        () => import(`~/assets/${props.icon}.svg`),
      ),
    )
  }
</script>
