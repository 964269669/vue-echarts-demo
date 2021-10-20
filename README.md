# vue-echarts-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### vue-echarts组件库
> 1. npm install echarts vue-echarts; 
>    npm i -D @vue/composition-api
> 2. import Vue from 'vue';
>    import ECharts from 'vue-echarts';
>    // 全局注册组件（也可以使用局部注册）
>    Vue.component('v-chart', ECharts)
> 3. 使用 `<v-chart class="chart" :option="option" />`
`
  <template>
    <v-chart :option="option"></v-chart>
  </template>
  <script>
  export default {
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
    }
  }
  </script>
`

### v-charts组件库
> 1. npm i v-charts echarts -S
> 2. 新建plugins/vcharts.js, 并在main.js中引入`import './plugins/vcharts'`
```javascript
import Vue from 'vue'
import VEline from 'v-charts/lib/line.common'

Vue.component('ve-line', VEline)

```
> 3. 使用
`
<template>
  <ve-line :data="chartData"></ve-line>
</template>
<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['日期', '销售额'],
        rows: [
          { 日期: '1月1日', 销售额: 123 },
          { 日期: '1月2日', 销售额: 1223 },
          { 日期: '1月3日', 销售额: 2123 },
          { 日期: '1月4日', 销售额: 4123 },
          { 日期: '1月5日', 销售额: 3123 },
          { 日期: '1月6日', 销售额: 7123 }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-view {
  height: 500px;
}
</style>
`
>4. 使用v-charts完成水球图，不再需要安装echarts-liquidfill
### 结束




