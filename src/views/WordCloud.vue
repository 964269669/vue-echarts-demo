<template>
  <div class="word-cloud" id="wordCloud"></div>
</template>

<script>
import 'echarts-wordcloud'

/* eslint-disable */
export default {
  name: 'wordCloud',
  data() {
    return {}
  },
  created() {},
  mounted() {
    const data = [
      {
        name: '刘强东',
        value: 200
      },
      {
        name: '马云',
        value: 80
      },
      {
        name: '马超',
        value: 35
      },
      {
        name: '刘强东',
        value: 150
      },
      {
        name: '马云',
        value: 80
      },
      {
        name: '马超',
        value: 35
      },
      {
        name: '刘强东',
        value: 60
      },
      {
        name: '马云',
        value: 40
      },
      {
        name: '马超',
        value: 15
      }
    ]
    const chart = this.$echarts.init(document.getElementById('wordCloud'))
    chart.setOption({
      series: [
        {
          type: 'wordCloud',
          data,
          shape: 'circle', // 形状
          textStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function() {
              // Random color
              return (
                'rgb(' +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') +
                ')'
              )
            }
          }
          // color: ['red', 'blue', 'green'],
          // itemStyle: {
          //   opacity: 0.6
          // },
          // emphasis: {
          //   itemStyle: {
          //     opacity: 0.9
          //   }
          // },
          // // waveAnimation: false
          // amplitude: 20, // 波浪振幅，数值越大，波浪越大
          // backgroundStyle: {
          //   // color: 'purple',
          //   // borderWidth: 4,
          //   // borderColor: '#333'
          // },
          // outline: {
          //   show: true,
          //   borderDistance: 10,
          //   itemStyle: {
          //     // borderWidth: 2
          //     // borderColor: 'red'
          //     // shadowBlur: 'none'
          //   }
          // }
        }
      ]
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.word-cloud {
  height: 100%;
}
</style>
