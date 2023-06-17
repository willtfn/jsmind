<script setup lang="ts">
import { computed } from "vue"
import LineItem from "./LineItem.vue"

interface Props {
  id: string
  title: string
  color?: string
  bgColor?: string
  children?: Props[]
}
const props = defineProps<Props>()

const nodeStyle = computed(() => ({
  color: props.color,
  "background-color": props.bgColor
}))
</script>

<template>
  <div
    :class="`node-container level-${props.id.split('-').length}`"
    :id="`node-${props.id}`"
  >
    <div class="node" :style="nodeStyle">{{ props.title }}</div>
    <div class="list-container">
      <LineItem
        v-for="item in props.children"
        :key="item.id"
        v-bind="item"
        :bgColor="props.bgColor"
      />
    </div>
  </div>
</template>

<style lang="less">
.node-container {
  > .node {
    transform: translateX(-50%) translateY(-50%);
    white-space: pre;
    display: inline-block;
    text-align: center;
  }
}
</style>
