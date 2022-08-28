<template>
  <div class="d-flex justify-center">
    <v-btn
      v-for="option of options"
      :icon="option"
      :disabled="disabled"
      variant="flat"
      size="x-large"
      class="mx-1"
      @click="emit('click', option)"
    />
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    options: string[]
    disabled?: boolean
  }>()

  const emit = defineEmits<{
    (e: 'click', option: string): void
  }>()
</script>
