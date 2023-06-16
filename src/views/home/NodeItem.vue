<script setup lang="ts">
interface Props {
  id: string
  title: string
  children: Props[]
}
const props = defineProps<Props>()
</script>

<template>
  <div class="node-container" :id="`node-${props.id}`">
    <div class="node">{{ props.title }}</div>
    <div class="list-container">
      <NodeItem v-for="item in props.children" :key="item.id" v-bind="item" />
    </div>
  </div>
</template>

<style></style>
