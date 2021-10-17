<template>
  <v-chart :option="option"></v-chart>
</template>

<script>
export default {
  name: 'salesView',
  data () {
    return {
      option: {
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            data: [100, 200, 300]
          }
        ]
      }
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.sales-view {
  height: 500px;
}
</style>
