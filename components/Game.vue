<template>
  <div class="d-flex flex-column justify-space-between fill-height">
    <Controls
      :options="options"
      @click="onClick"
    />
    <Result
      v-if="player1"
      :player1="player1"
      :player2="player2"
    />
    <Controls
      :options="options"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
  import { sample } from '~/utils/collection'
  import rules from '~/assets/rules.json'

  const options = Object.keys(rules)

  const player1 = $ref('')
  const player2 = $ref('')

  function onClick(option: string) {
    player1 = option
    player2 = sample(options)
  }
</script>
