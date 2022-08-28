<template>
  <div class="d-flex flex-column justify-center align-center">
    <v-icon
      :icon="player1"
      size="64"
      class="my-1"
    />
    <div
      v-text="getText(player1, player2)"
      class="text-h4"
    />
    <v-icon
      :icon="player2"
      size="64"
      class="my-1"
    />
  </div>
</template>

<script setup lang="ts">
  import rules from '~/assets/rules.json'

  defineProps<{
    player1: string
    player2: string
  }>()

  function getText(player1, player2) {
    return player1 === player2
      ? 'TIE'
      : rules[player1].includes(player2)
        ? 'WIN'
        : 'LOSS'
  }
</script>
