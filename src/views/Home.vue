<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import TopView from '../components/TopView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'
import SalesView from '../components/SalesView'

import { wordcloudLocal } from '@/api/'

export default {
  name: 'home',
  components: {
    TopView, BottomView, MapView, SalesView
  },
  data () {
    return {
      testA: { text: '来了老弟' },
      reportData: null,
      wordCloud: null,
      mapData: null
    }
  },
  // 因为provide和inject是在beforeCreate和created中间执行的，所以当接口请求回来后，他们已经执行完了，导致数据传递不过去，解决办法就是provide中不直接传数据本身，而传一个方法，由这个方法返回数据；在inject中接受的时候接受的是一个方法，用computed中的变量返回这个方法即可
  provide () {
    // 使用Vue.observable，只能在这里修改数据
    this.testA = Vue.observable({ text: '又来了老妹儿' })
    // console.log(37, this.testB)
    return {
      testB: this.testA,
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData
    }
  },
  created () {
    wordcloudLocal().then(({ data }) => {
      console.log('wordcloud success', data)
      this.reportData = data.screenData
      this.wordCloud = data.wordCloud
      this.mapData = data.mapScatter
    }).catch(err => {
      console.log('wordcloud error', err)
    })

    // mapScatterLocal().then(res => {
    //   console.log('mapScatterLocal success', res)
    // }).catch(err => {
    //   console.log('mapScatterLocal error', err)
    // })

    // screenDataLocal().then(res => {
    //   console.log('screenDataLocal success', res)
    // }).catch(err => {
    //   console.log('screenDataLocal error', err)
    // })
  },
  methods: {
    getReportData () {
      return this.reportData
    },
    getWordCloud () {
      return this.wordCloud
    },
    getMapData () {
      return this.mapData
    }
  }
}
</script>
<style>
.home {
  box-sizing: border-box;
  width: 100%;
  /* height: 100%; */
  padding: 20px;
  background: #eee;
}
</style>
