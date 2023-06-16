<script setup lang="ts" name="Home">
import { ref } from "vue"
import NodeItem from "./NodeItem.vue"
import data from "./data"

const naotuData = ref<{ title: string; children: any }>(data)
</script>

<template>
  <div class="home">
    <NodeItem v-bind="naotuData" />
  </div>
</template>

<style lang="less">
@import "@/styles/mixin.less";
.home {
  height: 100vh;
  .node-container {
    position: fixed;
    .node {
      padding: 10px;
      border-radius: 10px;
      color: #fff;
      font-size: 14px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      background-color: #000;
    }
  }
  .list-container {
    .node-container {
      top: 140px;
      &:nth-of-type(2n + 1) {
        left: -100px;
      }
      &:nth-of-type(2n) {
        right: -140px;
      }
    }
  }

  #node-0 {
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    &::after {
      height: 1000px;
      bottom: -1000px;
    }
    .node {
      background-color: #000;
    }
  }
  #node-1 {
    left: -200px;
    .node {
      background-color: #000;
    }
  }
  #node-2 {
    .node {
      background-color: #f00;
    }
  }
}
</style>
