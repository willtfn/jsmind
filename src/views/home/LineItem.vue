<script setup lang="ts">
import { computed } from "vue"

interface Props {
  id: string
  title: string
  bgColor?: string
  children?: Props[]
}
const props = defineProps<Props>()
const level = props.id.split("-").length
const className = computed(() => ({
  "line-container": true,
  [`level-${level}`]: true,
  "no-children": !props.children?.length
}))
</script>

<template>
  <div
    :class="className"
    :id="`node-${props.id}`"
    :style="{ 'border-color': props.bgColor, color: props.bgColor }"
  >
    <div class="line-node">{{ props.title }}</div>
    <div class="line-list-container" v-if="props.children">
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
.line-container {
  width: 50px;
  font-size: 12px;
  border: 1px solid #aaa;
  border-left-width: 0;
  border-bottom-width: 0;
  margin-top: 40px;
  > .line-node {
    display: inline-block;
    background: #f4f8fb;
    white-space: nowrap;
    margin-left: 20px;
    transform: translateY(-50%);
  }
  > .line-list-container {
    margin-left: 50px;
    .line-container:nth-last-child(1) {
      border-left-color: #f4f8fb !important;
      border-left-width: 4px;
      transform: translateX(-2px);
    }
  }
  &.no-children {
    border-right-width: 0;
    > .line-node {
      padding-left: 10px;
    }
  }
}
</style>
