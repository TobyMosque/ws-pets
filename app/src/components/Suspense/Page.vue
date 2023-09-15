<template>
  <suspense>
    <template #default>
      <content></content>
    </template>
    <template #fallback>
      <fallback></fallback>
    </template>
  </suspense>
</template>

<script setup lang="ts">
import Content from './Content.vue'
import Fallback from './Fallback.vue'
</script>
