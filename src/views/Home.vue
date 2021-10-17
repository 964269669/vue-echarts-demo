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
import TopView from '../components/TopView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'
import SalesView from '../components/SalesView'

export default {
  name: 'home',
  components: {
    TopView, BottomView, MapView, SalesView
  }
}
</script>
<style>
.home {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
}
</style>
