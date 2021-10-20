<template>
  <!-- <div class="container"> -->
  <ve-liquidfill :data="chartData" height="100%" :settings="chartSettings" />
  <!-- </div> -->
</template>

<script>
/* eslint-disable */
function getColor(value) {
  // return 'rgba(97,216,0,.7)' // 0-0.5绿
  // return 'rgba(204,178,26,.7)' // 0.5-0.8土黄
  // return 'rgba(241,47,28,.7)'  //0.8+ 红
  // return '#c7c7cb' // 灰
  return value > 0 && value <= 0.5
    ? 'rgba(97,216,0,.7)'
    : value > 0.5 && value <= 0.8
    ? 'rgba(204,178,26,.7)'
    : value > 0.8
    ? 'rgba(241,47,28,.7)'
    : '#c7c7cb'
}
export default {
  name: 'li-quild-fill',
  data() {
    return {
      chartData: {
        columns: ['title', 'percent'],
        rows: [{ title: 'rate', percent: 0.4825 }]
      },
      chartSettings: {}
    }
  },
  created() {},
  mounted() {
    this.chartSettings = {
      seriesMap: {
        rate: {
          radius: '80%',
          label: {
            // 这里不要formatter 显示的值就是48%
            formatter(value) {
              return `${Math.floor(value.data.value * 100)}%`
            },
            textStyle: {
              fontSize: 36,
              color: '#999',
              fontWeight: 'normal'
            },
            position: ['50%', '50%'], // label的默认位置就是这个，居中的
            insideColor: '#fff' // 水波纹和数字重叠时的颜色
          },
          outline: {
            itemStyle: {
              borderColor: '#aaa4a4',
              borderWidth: 1,
              color: 'none', // 环状空白的颜色
              shadowBlur: 0,
              shadowColor: '#fff'
            },
            borderDistance: 0
          },
          backgroundStyle: {
            color: '#fff'
          },
          itemStyle: {
            shadowBlur: 0, // 水波纹的阴影
            shadowColor: '#fff'
          },
          amplitude: 8, // 水波浪的振幅
          color: [getColor(this.chartData.rows[0].percent)]
        }
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
