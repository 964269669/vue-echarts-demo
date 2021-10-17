<template>
  <div class="total-users">
    <common-card title="今日交易用户数" value="81,014">
      <template>
        <div
          id="total-users-chart"
          :style="{ width: '100%', height: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <span>退货率</span>
        <span class="emphasis">5.14%</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'totalUsers',
  mixins: [commonCardMixin],
  data () {
    return {}
  },
  created () {},
  mounted () {
    const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      color: '#3398db',
      xAxis: {
        type: 'category',
        data: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '12:00',
          '13:00',
          '14:00'
        ],
        show: false
        // boundaryGap: false
      }, // x轴
      yAxis: {
        show: false
      }, // y轴
      // 一个series就是一个图表
      series: [
        {
          type: 'bar',
          data: [
            410,
            82,
            200,
            334,
            390,
            330,
            220,
            150,
            82,
            200,
            134,
            290,
            330,
            150
          ],
          barWidth: '60%'
          // areaStyle: {
          //   color: 'purple'
          // },
          // lineStyle: {
          //   width: 0
          // },
          // itemStyle: {
          //   opacity: 0
          // },
          // smooth: true
        }
      ],
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

<style lang="scss" scoped></style>
