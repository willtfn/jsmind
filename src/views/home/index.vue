<script setup lang="ts" name="Home">
import { ref } from "vue"
import NodeItem from "./NodeItem.vue"
import data from "./data"

const naotuData = ref<{
  id: string
  title: string
  leftNodes: any
  rightNodes: any
}>(data)
</script>

<template>
  <div class="home">
    <div class="root level-0" :id="`node-${naotuData.id}`">
      <div class="node">{{ naotuData.title }}</div>
      <div class="container">
        <div class="left-container">
          <div
            class="list-container"
            v-for="item in naotuData.leftNodes"
            :key="item.id"
            :style="{ 'border-color': item.bgColor }"
          >
            <NodeItem v-bind="item" />
          </div>
        </div>
        <div class="right-container">
          <div
            class="list-container"
            v-for="item in naotuData.rightNodes"
            :key="item.id"
            :style="{ 'border-color': item.bgColor }"
          >
            <NodeItem v-bind="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "@/styles/mixin.less";
.home {
  position: relative;
  padding-top: 20px;
  .root {
    width: 100%;
    height: 100%;
    > .node {
      width: 300px;
      text-align: center;
      margin: 0 auto;
      font-size: 30px;
      padding: 10px;
      border-radius: 10px;
      color: #fff;
      background-color: #000;
    }
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
    }
    .left-container,
    .right-container {
      flex: 1;
      > .list-container {
        border: 1px solid #000;
        margin-top: 50px;
      }
    }

    .left-container {
      border-right: 1px solid #000;
      > .list-container {
        float: right;
        width: 80%;
        border-right-width: 0;
        border-bottom-width: 0;
      }
    }
    .right-container {
      > .list-container {
        width: 20%;
        border-left-width: 0;
        border-bottom-width: 0;
        .node-container {
          transform: translateX(100%);
        }
      }
    }
    .line-container.level-2:nth-last-child(1) {
      border-left-width: 4px;
      transform: translateX(-2px);
      border-left-color: #f4f8fb !important;
    }
  }
  // 带背景的节点
  .node-container {
    > .node {
      padding: 10px;
      border-radius: 10px;
      color: #fff;
      background-color: #000;
      font-size: 16px;
    }
  }
}
</style>
