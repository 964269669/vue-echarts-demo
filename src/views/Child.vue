<template>
  <div class="child-view">
    <p>儿子组件</p>
    {{$attrs}}
    <GrandChild v-bind="$attrs"></GrandChild>
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue'
export default {
  // 继承所有父组件的内容
  inheritAttrs: true,
  components: { GrandChild },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.child-view {
  margin: 20px;
  border: 2px solid red;
  padding: 20px;
}
</style>
