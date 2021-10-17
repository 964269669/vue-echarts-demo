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






