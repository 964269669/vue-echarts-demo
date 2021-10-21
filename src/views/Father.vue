<template>
  <div>
    父组件
    <br />
    <!-- 儿子组件 -->
    <ChildView :name="'文四爷'" :age="17" :gender="'男'"> </ChildView>
  </div>
</template>

<script>
import ChildView from './Child.vue'
export default {
  components: { ChildView },
  data () {
    return {}
  },
  methods: {}
}
</script>
