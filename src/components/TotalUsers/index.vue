<template>
  <div class="total-sales">
    <common-card title="累计用户数" :value="userToday">
      <template>
        <v-chart :options="getOptions()" />

        <!-- 原生echarts -->
        <!-- <div
          id="total-users-chart"
          :style="{ width: '100%', height: '100%' }"
        ></div> -->
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">{{userGrowthLastDay}}</span>
          <div class="increase"></div>
          <span>月同比</span>
          <span class="emphasis">{{userGrowthLastMonth}}</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
import commonDatadMixin from '@/mixins/commonDataMixin'

export default {
  name: 'totalSales',
  mixins: [commonCardMixin, commonDatadMixin],
  data () {
    return {}
  },
  created () {},
  mounted () {
    // 原生echarts
    /* const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      grid: {
        top: 0,
        left: 0,
        right: '-50%',
        bottom: 0
      },
      xAxis: {
        type: 'value',
        show: false,
        boundaryGap: false
      }, // x轴
      yAxis: {
        show: false,
        type: 'category'
      }, // y轴
      // 一个series就是一个图表
      series: [
        {
          type: 'bar',
          stack: '总量', // 添加这个属性可以让多个成为一行
          data: [100],
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          type: 'bar',
          stack: '总量', // 添加这个属性可以让多个成为一行
          data: [750],
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom',
          stack: '总量', // 添加这个属性可以让多个成为一行
          data: [100], // 这里的200和series中的第一保持一致
          renderItem: (params, api) => {
            const value = api.value(0) // 会获取本对象中data的第一个 200，
            const endPoint = api.coord([value, 0]) // 获取2第一个元素(200)的坐标
            console.log(8585, endPoint)
            return {
              type: 'group',
              position: endPoint,
              children: [
                {
                  type: 'path',
                  shape: {
                    d:
                      'M524.096 753.088l342.912-395.584a16 16 0 0 0-12.032-26.496H169.024a16 16 0 0 0-12.032 26.496l343.04 395.52a16 16 0 0 0 24.064 0z', // svg图像内容
                    x: -5, // 偏移量
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                },
                {
                  type: 'path',
                  shape: {
                    d:
                      'M511.744 319.999l-383.744 383.744h767.488l-383.744-383.744z', // svg图像内容
                    x: -5, // 偏移量
                    y: 10,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                }
              ]
            }
          }
        }
      ]
    }) */
  },
  methods: {
    getOptions () {
      console.log(this.userLastMonth, this.userToday)
      return {
        grid: {
          top: 0,
          left: 0,
          right: '-50%',
          bottom: 0
        },
        xAxis: {
          type: 'value',
          show: false,
          boundaryGap: false
        }, // x轴
        yAxis: {
          show: false,
          type: 'category'
        }, // y轴
        // 一个series就是一个图表
        series: [
          {
            name: '上月平台用户数',
            type: 'bar',
            stack: '总量', // 添加这个属性可以让多个成为一行
            // data: [100],
            data: [this.userLastMonth],
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            name: '今日平台用户数',
            type: 'bar',
            stack: '总量', // 添加这个属性可以让多个成为一行
            data: [this.userTodayNumber],
            // data: [750],
            itemStyle: {
              color: '#eee'
            }
          },
          {
            type: 'custom',
            stack: '总量', // 添加这个属性可以让多个成为一行
            // data: [100], // 这里的100和series中的第一个保持一致
            data: [this.userLastMonth], // 这里的100和series中的第一个保持一致
            renderItem: (params, api) => {
              const value = api.value(0) // 会获取本对象中data的第一个 200，
              const endPoint = api.coord([value, 0]) // 获取2第一个元素(200)的坐标
              console.log(8585, endPoint)
              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d:
                        'M524.096 753.088l342.912-395.584a16 16 0 0 0-12.032-26.496H169.024a16 16 0 0 0-12.032 26.496l343.04 395.52a16 16 0 0 0 24.064 0z', // svg图像内容
                      x: -5, // 偏移量
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d:
                        'M511.744 319.999l-383.744 383.744h767.488l-383.744-383.744z', // svg图像内容
                      x: -5, // 偏移量
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.total-users-footer {
  display: flex;
  align-items: center;
}
</style>
<svg
  t="1634442278762"
  class="icon"
  viewBox="0 0 1024 1024"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  p-id="3967"
  width="200"
  height="200"
><path d="M511.744 319.999l-383.744 383.744h767.488l-383.744-383.744z" fill="#666666" p-id="3968"></path></svg>

<svg
  t="1634442309856"
  class="icon"
  viewBox="0 0 1024 1024"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  p-id="4099"
  width="200"
  height="200"
><path d="M524.096 753.088l342.912-395.584a16 16 0 0 0-12.032-26.496H169.024a16 16 0 0 0-12.032 26.496l343.04 395.52a16 16 0 0 0 24.064 0z" p-id="4100"></path></svg>
