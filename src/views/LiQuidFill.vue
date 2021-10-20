<template>
  <div class="li-quid-fill" id="container">
  </div>
</template>

<script>
import 'echarts-liquidfill'

export default {
  name: 'liQuidFill',
  data () {
    return {}
  },
  created () {},
  mounted () {
    const data = [0.68, { value: 0.5, direction: 'left' }, 0.4, 0.3] // 波浪必须从小到大
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [
        {
          type: 'liquidFill',
          data,
          shape: 'rect', // 形状
          color: ['red', 'blue', 'green'],
          itemStyle: {
            opacity: 0.6
          },
          emphasis: {
            itemStyle: {
              opacity: 0.9
            }
          },
          // waveAnimation: false
          amplitude: 20, // 波浪振幅，数值越大，波浪越大
          backgroundStyle: {
            // color: 'purple',
            // borderWidth: 4,
            // borderColor: '#333'
          },
          outline: {
            show: true,
            borderDistance: 10,
            itemStyle: {
              // borderWidth: 2
              // borderColor: 'red'
              // shadowBlur: 'none'
            }
          }
        }
      ]
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.li-quid-fill {
  height: 100%;
}
</style>
