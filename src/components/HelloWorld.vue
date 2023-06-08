<script setup lang="ts">
defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <icon-custom-vue />
  <icon-ri-e-bike-2-fill />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
