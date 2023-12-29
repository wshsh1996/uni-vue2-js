<script></script>

<template>
  <!-- 第一个：搜索按钮在右边 -->
  <view class="cu-bar search bg-white">
    <view class="search-form round" :style="{ border: `1px solid var(--main-color)` }">
      <text class="cuIcon-search"></text>
      <input
        :adjust-position="false"
        type="text"
        placeholder="微信昵称/手机号"
        confirm-type="search"
        @focus="InputFocus"
        @blur="InputBlur"
      />
    </view>
    <view class="action">
      <button class="cu-btn bg-white" :style="{ color: `var(--main-color)` }">搜索</button>
    </view>
  </view>
</template>
