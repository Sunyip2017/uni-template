<template>
  <div style="height: 30rpx"></div>
  <uni-nav-bar title="导航栏组件" height="100rpx"></uni-nav-bar>
  <view style="padding:20rpx">
  <template>
    <uni-grid :column="4">
      <uni-grid-item>
        <text>1</text>
      </uni-grid-item>
      <uni-grid-item>
        <text>2</text>
      </uni-grid-item>
      <uni-grid-item>
        <text>3</text>
      </uni-grid-item>
      <uni-grid-item>
        <text>4</text>
      </uni-grid-item>
    </uni-grid>
  </template>
  </view>
<uni-badge
  :text="100"
  absolute='leftTop'
  type="error"
  size="normal"

> 商品</uni-badge>
<rich-text nodes="<h1>123</h1>"></rich-text>

<view>{{amount}}</view>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore()
const title = ref("你好333");
const amount= computed(() => store.state.amount)
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

