<template>
  <div class="grand-child-view">
    <p>孙子组件</p>
    <p>传给孙子组件的数据：{{ $attrs }}</p>
  </div>
</template>

<script>
export default {
  // 不想继承所有父组件的内容,同时也不在组件根元素dom上显示属性
  inheritAttrs: false
  // 在本组件中需要接收从父组件传递过来的数据，注意props里的参数名称不能改变，必须和父组件传递过来的是一样的
  // props: {
  //   name: {
  //     type: String
  //   }
  // }
}
</script>

<style lang="scss">
.grand-child-view {
  border: 2px solid green;
  padding: 20px;
  margin: 20px;
}
</style>
