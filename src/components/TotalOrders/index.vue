<template>
  <common-card
    title="累计订单量"
    value="orderToday"
  >
    <template>
      <!-- <v-chart :options="getOptions()" /> -->
      <div id="total-orders-chart" :style="{ width: '100%', height: '100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">
        <!-- {{orderLastDay}} -->
        111
      </span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'totalSales',
  mixins: [commonCardMixin],
  data () {
    return {}
  },
  created () {},
  mounted () {
    const chartDom = document.getElementById('total-orders-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false
      }, // x轴
      yAxis: {
        show: false
      }, // y轴
      // 一个series就是一个图表
      series: [{
        type: 'line',
        data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
        areaStyle: {
          color: 'purple'
        },
        lineStyle: {
          width: 0
        },
        itemStyle: {
          opacity: 0
        },
        smooth: true
      }],
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
