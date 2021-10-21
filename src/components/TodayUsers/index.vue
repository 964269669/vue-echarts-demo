<template>
  <div class="total-users">
    <common-card title="今日交易用户数" :value="orderUser">
      <template>
        <v-chart :options="getOptions()" />
        <!-- 原生echarts -->
        <!-- <div
          id="today-users-chart"
          :style="{ width: '100%', height: '100%' }"
        ></div> -->
      </template>
      <template v-slot:footer>
        <span>退货率</span>
        <span class="emphasis">{{returnRate}}</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
import commonDatadMixin from '@/mixins/commonDataMixin'

export default {
  name: 'totalUsers',
  mixins: [commonCardMixin, commonDatadMixin],
  data () {
    return {}
  },
  created () {},
  mounted () {
    // 原生echarts
    /*
    const chartDom = document.getElementById('today-users-chart')
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
    */
  },
  methods: {
    getOptions () {
      return {
        color: '#3398db',
        tooltip: {},
        xAxis: {
          type: 'category',
          data: this.orderUserTrendAxis,
          // data: [
          //   '00:00',
          //   '01:00',
          //   '02:00',
          //   '03:00',
          //   '04:00',
          //   '05:00',
          //   '06:00',
          //   '07:00',
          //   '08:00',
          //   '09:00',
          //   '10:00',
          //   '12:00',
          //   '13:00',
          //   '14:00'
          // ],
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
            data: this.orderUserTrend,
            // data: [
            //   410,
            //   82,
            //   200,
            //   334,
            //   390,
            //   330,
            //   220,
            //   150,
            //   82,
            //   200,
            //   134,
            //   290,
            //   330,
            //   150
            // ],
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
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
